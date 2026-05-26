# Yampa Valley — tests

Browser-driven smoke test that launches the game in a real (headless)
Chromium, walks through the title and gameplay, and checks the dog
actually moves, jumps, rolls, and picks up tennis balls.

## Running

```bash
cd tests
npm install
npm run install-browsers     # one-time: downloads Chromium for Playwright
npm run smoke                # headless, fast
HEADED=1 npm run smoke       # watch it run in a real window
```

Exit code 0 = pass, 1 = fail. The script prints a check-by-check log
and drops screenshots into `tests/screenshots/`:

- `01-title.png` — title screen
- `02-game-start.png` — first paint after starting the game
- `03-game-mid.png` — partway through Section 1 (after running and
  collecting balls)
- `snapshot.json` — final player/game state for debugging

## What it verifies

1. Page loads with no console errors and no failed image requests.
2. Asset loader finishes and the game reaches the **title** state.
3. Title canvas renders something (not a blank black frame).
4. Pressing Space transitions to **playing** state.
5. Holding Right increases `player.x`.
6. Pressing Down puts the player into the **rolling** state.
7. The dog collects at least one tennis ball and the score goes up.
8. Pressing Space puts the player into the **jumping** state.
9. The level is at least 15000 px wide (expanded per the plan).
10. Multiple sporadic mud patches exist.
11. `player.muddy` is a boolean (binary skill shield).
12. Cover art, bg_top/bottom, and soundtrack are declared in data.js.

## Adding more tests

The runtime exposes the game on `window.YAMPA`:

```js
window.YAMPA.state                  // 'loading' | 'title' | 'playing' | 'finished'
window.YAMPA.game.player            // physics + state
window.YAMPA.game.enemies           // array of chickens
window.YAMPA.game.balls             // tennis balls
window.YAMPA.game.score, time, ballsCollected
```

Use `page.evaluate(() => window.YAMPA.game.something)` in `smoke.mjs`
to assert anything you want. Add asserts with `expect(cond, msg)`.

## Notes

- The server is `python3 -m http.server` on port 8765, started by the
  test and torn down at the end. Nothing to clean up between runs.
- Playwright's bundled Chromium is ~150 MB; it's only downloaded once.
- If `npm install` is awkward in this repo, you can also drive the
  page manually: open <http://localhost:8765/index.html> in any
  modern browser after starting `python3 -m http.server 8765` from
  the project root.
