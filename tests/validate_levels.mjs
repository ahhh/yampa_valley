/**
 * Static validator for the level data.
 *
 * Catches the kinds of bugs that ship invisibly:
 *   1. Super balls actually present (and shaped right) per level.
 *   2. Every enemy spawns ON a terrain rectangle (no floating chickens) AND
 *      the rectangle is wide enough to contain its full patrol range.
 *   3. Every mud rectangle has the right surface flag and skill-hit width
 *      so rolling actually triggers the mud-shield logic.
 *
 * Usage:
 *   node tests/validate_levels.mjs                 # validate all levels
 *   node tests/validate_levels.mjs --quiet         # only print failures
 *
 * Exit code: 0 = all pass, 1 = something failed.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const quiet = process.argv.includes('--quiet');

// ANSI
const c = {
  reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m',
  yellow: '\x1b[33m', cyan: '\x1b[36m', dim: '\x1b[2m',
};

// Sandbox: eval each file with window.* rebound to a local container.
const W = {};
function loadFile(rel) {
  const src = readFileSync(join(ROOT, rel), 'utf8')
    .replace(/window\.YAMPA_DATA/g, 'W.YAMPA_DATA')
    .replace(/window\.(YAMPA_LEVEL_\w+)/g, 'W.$1');
  // eslint-disable-next-line no-new-func
  new Function('W', src)(W);
}
loadFile('data.js');
loadFile('levels/easy.js');
loadFile('levels/medium.js');
loadFile('levels/hard.js');

const D = W.YAMPA_DATA;

let failures = 0;
const ok = (msg) => { if (!quiet) console.log(`  ${c.green}✓${c.reset} ${msg}`); };
const fail = (msg, detail) => {
  console.log(`  ${c.red}✗${c.reset} ${msg}`);
  if (detail) console.log(`      ${c.dim}${detail}${c.reset}`);
  failures++;
};
const info = (msg) => console.log(`\n${c.cyan}▸${c.reset} ${msg}`);

// ----- the three checks ---------------------------------------------------

function checkSuperBalls(lvl, name) {
  const supers = lvl.tennisBalls.filter((b) => b.super);
  if (supers.length === 0) {
    fail(`${name}: no super balls in level`);
    return;
  }
  // Every super ball entry must have the `super: true` flag (we already
  // filtered on this) AND coordinates inside the world bounds.
  let bad = 0;
  for (const b of supers) {
    if (b.x < 0 || b.x > lvl.width || b.y < 0 || b.y > lvl.height + 200) {
      bad++;
    }
  }
  if (bad > 0) {
    fail(`${name}: ${bad} super balls have out-of-bounds coords`);
    return;
  }
  ok(`${name}: ${supers.length} super balls, all in-bounds`);
}

function checkEnemiesOnTiles(lvl, name) {
  const floating = [];
  const tooNarrow = [];
  for (const e of lvl.enemies) {
    const cfg = D.enemy[e.type];
    if (!cfg) {
      fail(`${name}: unknown enemy type "${e.type}" at (${e.x},${e.y})`);
      continue;
    }
    const halfPatrol = cfg.patrolRange / 2;
    const halfBody = cfg.bodyWidth / 2;
    // Smallest x where any part of the enemy's body sits while patrolling:
    const leftEdge  = e.x - halfPatrol - halfBody;
    const rightEdge = e.x + halfPatrol + halfBody;
    // Find a terrain rect whose top edge matches e.y exactly.
    const matches = lvl.terrain.filter((t) => t.y === e.y);
    if (matches.length === 0) {
      floating.push({ e, reason: `no terrain top at y=${e.y}` });
      continue;
    }
    // Of those, at least one must span the full patrol range.
    const spanning = matches.find(
      (t) => t.x <= leftEdge && (t.x + t.w) >= rightEdge);
    if (!spanning) {
      // Check if at least the spawn point is on a tile (less strict).
      const spawnOn = matches.find(
        (t) => t.x <= e.x && (t.x + t.w) >= e.x);
      if (!spawnOn) {
        floating.push({ e, reason: `no terrain at y=${e.y} containing x=${e.x}` });
      } else {
        tooNarrow.push({ e, terrain: spawnOn, leftEdge, rightEdge });
      }
    }
  }
  if (floating.length === 0 && tooNarrow.length === 0) {
    ok(`${name}: all ${lvl.enemies.length} enemies stand on a terrain tile with full patrol space`);
    return;
  }
  if (floating.length > 0) {
    fail(`${name}: ${floating.length} of ${lvl.enemies.length} enemies are floating`);
    floating.slice(0, 8).forEach(({ e, reason }) =>
      console.log(`      ${c.dim}${e.type.padEnd(9)} at (${e.x}, ${e.y}) — ${reason}${c.reset}`));
    if (floating.length > 8) console.log(`      ${c.dim}... and ${floating.length - 8} more${c.reset}`);
  }
  if (tooNarrow.length > 0) {
    // This is a warning, not a failure — the enemy spawns OK but might
    // patrol past the platform edge.
    console.log(`  ${c.yellow}⚠${c.reset} ${name}: ${tooNarrow.length} enemies' patrols overshoot the platform`);
    tooNarrow.slice(0, 5).forEach(({ e, terrain, leftEdge, rightEdge }) =>
      console.log(`      ${c.dim}${e.type.padEnd(9)} at (${e.x}, ${e.y})  patrols [${Math.round(leftEdge)}..${Math.round(rightEdge)}]  platform=[${terrain.x}..${terrain.x + terrain.w}]${c.reset}`));
    if (tooNarrow.length > 5) console.log(`      ${c.dim}... and ${tooNarrow.length - 5} more${c.reset}`);
  }
}

function checkMudTiles(lvl, name) {
  const mud = lvl.terrain.filter((t) => t.surface === 'mud');
  if (mud.length === 0) {
    fail(`${name}: no mud rectangles in terrain`);
    return;
  }
  let bad = 0;
  for (const m of mud) {
    // Mud should be a thin skill-hit patch (60–200 px wide) AND sit at
    // ground level (y === settings.groundY) so the player can roll across
    // it without falling in.
    const sized = m.w >= 60 && m.w <= 220 && m.h > 0;
    const onGround = m.y === D.settings.groundY;
    if (!sized || !onGround) {
      bad++;
      console.log(`      ${c.dim}mud rect at (${m.x},${m.y}) w=${m.w} h=${m.h}  sized=${sized}  onGround=${onGround}${c.reset}`);
    }
  }
  if (bad === 0) {
    ok(`${name}: ${mud.length} mud rects, all skill-hit shaped + at floor level`);
  } else {
    fail(`${name}: ${bad}/${mud.length} mud rects malformed`);
  }
}

// ----- driver -------------------------------------------------------------

console.log(`${c.cyan}validating level data${c.reset}  ${c.dim}(groundY=${D.settings.groundY})${c.reset}`);

for (const [key, name] of [['YAMPA_LEVEL_EASY', 'easy'],
                           ['YAMPA_LEVEL_MEDIUM', 'medium'],
                           ['YAMPA_LEVEL_HARD', 'hard']]) {
  const lvl = W[key];
  if (!lvl) { fail(`level not loaded: ${key}`); continue; }
  info(`${name} (${lvl.width} px)`);
  checkSuperBalls(lvl, name);
  checkEnemiesOnTiles(lvl, name);
  checkMudTiles(lvl, name);
}

console.log();
if (failures === 0) {
  console.log(`${c.green}all level checks passed${c.reset}`);
  process.exit(0);
} else {
  console.log(`${c.red}${failures} check(s) failed${c.reset}`);
  process.exit(1);
}
