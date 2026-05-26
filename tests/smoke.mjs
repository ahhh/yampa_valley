/**
 * Smoke test for Yampa Valley.
 *
 * Spawns a local HTTP server, opens the game in headless Chromium, and
 * verifies:
 *   1. The page loads with no console errors.
 *   2. All sprite assets return 200.
 *   3. The title screen renders (canvas non-blank).
 *   4. Pressing Space starts the game (player state transitions to "playing").
 *   5. Holding Right moves the dog (player.x increases).
 *   6. Pressing Down triggers the rolling state.
 *   7. Picking up a tennis ball increments the score.
 *
 * Outputs screenshots to tests/screenshots/ for visual review.
 *
 * Usage:
 *   cd tests && npm install && npm run install-browsers && npm run smoke
 *   HEADED=1 npm run smoke   # watch it in a real window
 */

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import http from 'node:http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const screenshotDir = join(__dirname, 'screenshots');
const PORT = 8765;
const URL = `http://localhost:${PORT}/index.html`;

// ---------- ANSI ----------
const c = {
  reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m',
  yellow: '\x1b[33m', cyan: '\x1b[36m', dim: '\x1b[2m',
};
const ok   = (msg) => console.log(`  ${c.green}✓${c.reset} ${msg}`);
const fail = (msg) => console.log(`  ${c.red}✗${c.reset} ${msg}`);
const info = (msg) => console.log(`${c.cyan}▸${c.reset} ${msg}`);

let failures = 0;
function expect(cond, msg) {
  if (cond) ok(msg);
  else { fail(msg); failures++; }
}

// ---------- HTTP server (Python's http.server, no node deps) ----------
async function waitForPort(port, timeoutMs = 5000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get({ port, path: '/index.html' }, (res) => {
          res.resume();
          res.on('end', () => res.statusCode === 200 ? resolve() : reject(new Error(res.statusCode)));
        });
        req.on('error', reject);
        req.setTimeout(500, () => req.destroy(new Error('timeout')));
      });
      return true;
    } catch {
      await new Promise(r => setTimeout(r, 100));
    }
  }
  return false;
}

async function startServer() {
  info(`Starting http server at :${PORT}`);
  const proc = spawn('python3', ['-m', 'http.server', String(PORT)], {
    cwd: projectRoot,
    stdio: ['ignore', 'ignore', 'ignore'],
    detached: false,
  });
  if (!(await waitForPort(PORT))) {
    proc.kill();
    throw new Error(`Server did not come up on port ${PORT}`);
  }
  return () => { try { proc.kill('SIGTERM'); } catch {} };
}

// ---------- main ----------
async function main() {
  await mkdir(screenshotDir, { recursive: true });
  const stopServer = await startServer();

  const browser = await chromium.launch({ headless: !process.env.HEADED });
  const ctx = await browser.newContext({ viewport: { width: 1024, height: 640 } });
  const page = await ctx.newPage();

  // Surface console errors + asset errors as test failures
  const consoleErrors = [];
  page.on('pageerror', (err) => {
    consoleErrors.push(`pageerror: ${err.message}`);
  });
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(`console.error: ${m.text()}`);
  });
  const failedRequests = [];
  page.on('requestfailed', (req) => {
    failedRequests.push(`${req.url()} (${req.failure()?.errorText})`);
  });

  // ---- 1. page load ----
  info('Loading the page');
  await page.goto(URL, { waitUntil: 'networkidle' });
  expect(consoleErrors.length === 0,
    'no console errors on load' + (consoleErrors.length ? `: ${consoleErrors.join('; ')}` : ''));
  expect(failedRequests.length === 0,
    'no failed requests' + (failedRequests.length ? `: ${failedRequests.join('; ')}` : ''));

  // ---- 2. assets loaded ----
  info('Waiting for assets to finish loading');
  await page.waitForFunction(() => window.YAMPA && window.YAMPA.state !== 'loading', { timeout: 8000 });
  const state = await page.evaluate(() => window.YAMPA.state);
  expect(state === 'title', `entered title screen (state=${state})`);

  // ---- 3. title screen renders ----
  await page.waitForTimeout(120); // one paint
  const titleShot = join(screenshotDir, '01-title.png');
  await page.locator('canvas').screenshot({ path: titleShot });
  ok(`screenshot: ${relPath(titleShot)}`);

  // canvas should not be blank — sample a few pixel colors via getImageData
  const titleColors = await sampleCanvasColors(page, [
    [120, 130],   // top region (sky)
    [480, 270],   // center
    [480, 130],   // title text area
    [200, 240],   // difficulty box area
  ]);
  expect(!titleColors.every(c => c.r === 0 && c.g === 0 && c.b === 0),
    'title canvas is not blank');

  // ---- 4. start game ----
  info('Pressing Space to start');
  await page.locator('canvas').click();    // ensure focus
  await page.keyboard.press('Space');
  await page.waitForFunction(() => window.YAMPA.state === 'playing', { timeout: 3000 });
  ok('entered playing state');

  // give one paint so the world draws
  await page.waitForTimeout(150);
  const startShot = join(screenshotDir, '02-game-start.png');
  await page.locator('canvas').screenshot({ path: startShot });
  ok(`screenshot: ${relPath(startShot)}`);

  // ---- 5. movement ----
  info('Holding ArrowRight for 1.5s');
  const startX = await page.evaluate(() => window.YAMPA.game.player.x);
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(1500);
  await page.keyboard.up('ArrowRight');
  const movedX = await page.evaluate(() => window.YAMPA.game.player.x);
  expect(movedX > startX + 80, `dog moved right: x ${startX.toFixed(0)} → ${movedX.toFixed(0)}`);

  // ---- 6. roll ----
  info('Pressing ArrowDown to roll');
  await page.keyboard.down('ArrowDown');
  await page.waitForTimeout(60);
  const rollingState = await page.evaluate(() => window.YAMPA.game.player.state);
  await page.keyboard.up('ArrowDown');
  expect(rollingState === 'rolling', `player entered rolling state (got "${rollingState}")`);

  // ---- 7. tennis ball collection ----
  info('Running right far enough to collect at least one tennis ball');
  const initialBalls = await page.evaluate(() => window.YAMPA.game.ballsCollected);
  // Move the player close to the first ball cluster
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(2200);
  await page.keyboard.up('ArrowRight');
  const balls = await page.evaluate(() => window.YAMPA.game.ballsCollected);
  const score = await page.evaluate(() => window.YAMPA.game.score);
  expect(balls > initialBalls,
    `tennis balls collected went ${initialBalls} → ${balls}`);
  expect(score >= 100, `score is at least 100 (got ${score})`);

  // ---- 8. screenshot mid-gameplay ----
  const playShot = join(screenshotDir, '03-game-mid.png');
  await page.locator('canvas').screenshot({ path: playShot });
  ok(`screenshot: ${relPath(playShot)}`);

  // ---- 9. jump ----
  info('Jumping');
  await page.keyboard.press('Space');
  await page.waitForTimeout(80);
  const jumpingState = await page.evaluate(() => window.YAMPA.game.player.state);
  expect(jumpingState === 'jumping',
    `player entered jumping state (got "${jumpingState}")`);

  // ---- 10. audio + binary mud + per-difficulty level sanity ----
  info('Asserting new mechanics + asset wiring');
  const sanity = await page.evaluate(() => {
    const D = window.YAMPA_DATA;
    const summary = (g) => g && window[g] ? {
      width: window[g].width,
      mudPatches: window[g].terrain.filter(t => t.surface === 'mud').length,
      enemies: window[g].enemies.length,
      balls: window[g].tennisBalls.length,
    } : null;
    return {
      levels: {
        easy:   summary(D.difficulties.easy.levelGlobal),
        medium: summary(D.difficulties.medium.levelGlobal),
        hard:   summary(D.difficulties.hard.levelGlobal),
      },
      activeWorldLevelWidth: window.YAMPA.game.level.width,
      activeWorldMudPatches: window.YAMPA.game.level.terrain.filter(t => t.surface === 'mud').length,
      muddyType: typeof window.YAMPA.game.player.muddy,
      hasCoverAsset:   !!D.assets.ui && !!D.assets.ui.cover,
      hasBackgrounds:  !!D.assets.backgrounds && !!D.assets.backgrounds.panorama,
      hasSoundtrack:   !!D.audio && !!D.audio.soundtrack,
    };
  });
  for (const key of ['easy', 'medium', 'hard']) {
    expect(sanity.levels[key] !== null, `${key}.js loaded and exposed its level global`);
  }
  expect(sanity.levels.hard.width >= 2 * sanity.levels.medium.width,
    `hard level is at least 2× medium width (${sanity.levels.medium.width} → ${sanity.levels.hard.width})`);
  expect(sanity.levels.hard.enemies >= 2 * sanity.levels.medium.enemies,
    `hard has at least 2× medium's enemies (${sanity.levels.medium.enemies} → ${sanity.levels.hard.enemies})`);
  expect(sanity.hasBackgrounds, 'panorama declared in assets.backgrounds');
  expect(sanity.activeWorldLevelWidth >= 15000,
    `active world width is at least 15000 (got ${sanity.activeWorldLevelWidth})`);
  expect(sanity.activeWorldMudPatches >= 2,
    `active world has multiple sporadic mud patches (got ${sanity.activeWorldMudPatches})`);
  expect(sanity.muddyType === 'boolean', `player.muddy is a boolean (got ${sanity.muddyType})`);
  expect(sanity.hasCoverAsset, 'cover art declared in assets.ui.cover');
  expect(sanity.hasSoundtrack, 'soundtrack declared in audio');

  // ---- 11. dump player snapshot for debug ----
  const snap = await page.evaluate(() => {
    const p = window.YAMPA.game.player;
    const g = window.YAMPA.game;
    return {
      state: p.state, x: Math.round(p.x), y: Math.round(p.y),
      vx: Math.round(p.vx), vy: Math.round(p.vy),
      muddy: p.muddy,
      mudPatchesGathered: p.mudPatchesGathered,
      facing: p.facing,
      score: g.score, balls: g.ballsCollected,
      time: g.time.toFixed(2),
      enemiesAlive: g.enemies.filter(e => !e.dead).length,
    };
  });
  console.log(`${c.dim}snapshot: ${JSON.stringify(snap)}${c.reset}`);
  await writeFile(join(screenshotDir, 'snapshot.json'),
                  JSON.stringify(snap, null, 2));

  await browser.close();
  stopServer();

  if (consoleErrors.length) {
    console.log(`\n${c.yellow}console errors during run:${c.reset}`);
    consoleErrors.forEach((e) => console.log('  ' + e));
  }

  console.log();
  if (failures === 0) {
    console.log(`${c.green}all checks passed${c.reset}`);
    process.exit(0);
  } else {
    console.log(`${c.red}${failures} check(s) failed${c.reset}`);
    process.exit(1);
  }
}

async function sampleCanvasColors(page, points) {
  return await page.evaluate((pts) => {
    const c = document.querySelector('canvas');
    const ctx = c.getContext('2d');
    return pts.map(([x, y]) => {
      const d = ctx.getImageData(x, y, 1, 1).data;
      return { r: d[0], g: d[1], b: d[2], a: d[3] };
    });
  }, points);
}

function relPath(p) {
  return p.replace(projectRoot + '/', '');
}

main().catch((err) => {
  console.error(`${c.red}fatal:${c.reset}`, err);
  process.exit(1);
});
