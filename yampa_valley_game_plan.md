# Yampa Valley — Single-Page HTML Game Plan

## 1. Game Concept

**Title:** Yampa Valley  
**Genre:** Fast 2D platformer / Sonic-like runner  
**Format:** Single-level browser game  
**Files:**
- `index.html` — contains all HTML, CSS, and game JavaScript
- `data.js` — contains configurable game settings, level data, difficulty settings, enemy placement, collectible placement, and tuning values

**Core fantasy:**  
A red-ish golden retriever sprints through a cozy valley, building speed, sliding with momentum, rolling through mud, smashing enemies, and collecting tennis balls across a single handcrafted level.

**Aesthetic direction:**  
Cozy rural pixel-art look inspired by farming/life-sim games: warm colors, soft grass, dirt paths, wooden fences, flowers, hills, trees, barns, river/valley details, and a gentle countryside mood.

---

## 2. Core Player Character

**Character:** Red-ish golden retriever dog

### Movement

The dog should feel fast, slippery, and momentum-based.

Core movement rules:
- Left/right movement accelerates the dog rather than instantly setting speed.
- Releasing input applies friction, slowing the dog gradually.
- At high speed, the dog slides before stopping.
- Turning around at high speed should feel heavy and take a moment.
- Slopes, ramps, and curved terrain can increase the Sonic-like feel, though the first version can use flat and angled platforms.

Suggested movement values should live in `data.js`:
- `acceleration`
- `maxRunSpeed`
- `friction`
- `airControl`
- `gravity`
- `jumpVelocity`
- `rollAccelerationBoost`
- `rollFriction`
- `mudDrag`

### Jumping

Jumping should:
- Allow the dog to reach platforms and tennis balls.
- Damage enemies when landing on them from above.
- Preserve horizontal momentum in the air.

### Rolling

Triggered by pressing **Down**.

Rolling should:
- Curl the dog into a rolling state.
- Damage enemies on contact.
- Gather mud while rolling through muddy ground sections.
- Reduce player control slightly.
- Preserve or increase momentum depending on slope/ground.
- Let the dog break through or pass under certain low obstacles if added later.

Possible roll states:
- `running`
- `jumping`
- `rolling`
- `hurt`
- `finished`

---

## 3. Mud Mechanic

Mud gives the dog a playful, unique identity beyond being a Sonic clone.

### Mud Collection

The dog gathers mud by:
- Rolling through mud patches.
- Possibly landing in muddy areas at high speed.

### Mud Effects

Mud could be used in one of three simple ways:

1. **Score modifier**  
   More mud collected gives bonus points at the end.

2. **Enemy damage visual**  
   Rolling through mud makes the dog visibly muddy and enemies splatter when hit.

3. **Temporary power state**  
   While muddy, rolling does extra damage or knocks enemies farther away.

For the first version, use mud as a simple score/visual mechanic:
- Mud patches add to `mudAmount` while rolling.
- Mud amount appears in the HUD.
- Mud creates small brown particle effects.

---

## 4. Enemies

**Enemy style:** Goomba-like valley critters.

Suggested enemy types for first version:

### Basic Critter

Behavior:
- Walks slowly left/right.
- Turns around at edges or when hitting a wall.
- Can be defeated by jumping on it.
- Can be defeated by rolling into it.
- Hurts the dog if touched from the side while not rolling.

Possible visual options:
- Little grumpy mole
- Angry chicken
- Tiny raccoon
- Mushroom-like farm critter

For the first version, use one enemy type only.

### Difficulty Settings

At the start of the game, the player chooses difficulty:

1. **Easy**
   - Few enemies
   - Enemies placed mostly on flat ground
   - Larger safe gaps
   - More forgiving collectible paths

2. **Normal**
   - Moderate enemy count
   - Enemies placed near jumps and speed paths
   - Some tennis balls require good speed

3. **Hard**
   - More enemies
   - Enemies placed near landing zones and high-speed paths
   - Riskier tennis ball routes
   - Less room for recovery

Difficulty should be controlled from `data.js`, using different enemy placement arrays.

---

## 5. Collectibles

**Collectible:** Floating tennis balls

### Tennis Ball Rules

- Each tennis ball is worth points.
- Tennis balls should form flowing arcs and lines that guide players through the level.
- Some should sit along the optimal speed-run path.
- Some should require high speed, precise jumping, or rolling to reach.

### Placement Design

Use tennis balls as path indicators:
- Low rows = safe route
- High arcs = jump timing hints
- Long forward trails = speed path
- Isolated high balls = advanced route rewards

Recommended score values:
- Tennis ball: `100 points`
- Full chain bonus: optional later
- Mud bonus: optional end-of-level bonus

---

## 6. Level Design

### Level Scope

One single scrolling level.

Suggested length:
- 3–5 minutes for casual play
- 45–90 seconds for a good speed run

### Level Sections

#### Section 1 — Gentle Start

Purpose:
- Teach running and jumping.
- Introduce tennis balls.
- No or very few enemies.

Features:
- Flat grass path
- Small dirt hills
- Easy tennis ball trail

#### Section 2 — Momentum Training

Purpose:
- Teach speed buildup and sliding.

Features:
- Longer straightaway
- Slight downhill section
- Tennis balls in a speed-run line
- First enemy placed in a safe position

#### Section 3 — Mud Roll Zone

Purpose:
- Teach rolling through mud and enemy damage.

Features:
- Mud patch on the ground
- Enemy immediately after mud patch
- Tennis balls low to the ground to encourage rolling

#### Section 4 — High-Speed Route

Purpose:
- Reward momentum mastery.

Features:
- Ramp or rising platform
- High tennis ball arc
- Some balls require enough speed to reach
- Optional upper route

#### Section 5 — Enemy Challenge

Purpose:
- Difficulty-dependent enemy density.

Features:
- More enemies
- Jumpable enemies
- Rollable enemies
- Safer lower path and riskier faster upper path

#### Section 6 — Finish Stretch

Purpose:
- End with speed and satisfaction.

Features:
- Long downhill or flat sprint
- Dense tennis ball trail
- Finish sign / barn gate / valley arch

---

## 7. Game Loop

Each animation frame should:

1. Read player input.
2. Update player acceleration, velocity, gravity, friction, and roll state.
3. Update enemies.
4. Check collisions with terrain.
5. Check collisions with enemies.
6. Check collectible pickups.
7. Update camera position.
8. Draw background, terrain, collectibles, enemies, player, particles, and HUD.
9. Check win/loss conditions.

---

## 8. Controls

Recommended keyboard controls:

| Action | Key |
|---|---|
| Move left | Left Arrow / A |
| Move right | Right Arrow / D |
| Jump | Space / W / Up Arrow |
| Roll | Down Arrow / S |
| Pause | Escape / P |

Optional mobile controls can be added later.

---

## 9. Screens

Because this is a single-page game, screens should be simple states inside the same canvas/app.

### Title Screen

Displays:
- `Yampa Valley`
- Start button
- Difficulty selection: Easy / Normal / Hard
- Controls summary

### Game Screen

Displays:
- Score
- Tennis balls collected
- Mud amount
- Timer
- Current difficulty

### End Screen

Displays:
- Final score
- Completion time
- Tennis balls collected
- Mud bonus
- Difficulty
- Restart button

---

## 10. File Architecture

### `index.html`

Contains:
- HTML structure
- Canvas element
- Basic CSS
- Game engine JavaScript
- Input handling
- Physics
- Drawing/rendering
- Collision logic
- Game state management

Suggested sections inside the script:

```js
// 1. Canvas setup
// 2. Input handling
// 3. Asset loading
// 4. Game state
// 5. Player class
// 6. Enemy class
// 7. Collectible class
// 8. Terrain/collision helpers
// 9. Camera
// 10. Update loop
// 11. Draw loop
// 12. Start/restart helpers
```

### `data.js`

Contains:
- Game tuning values
- Player movement constants
- Difficulty definitions
- Level terrain data
- Enemy placements
- Tennis ball placements
- Mud patch locations
- Asset paths

Example structure:

```js
window.YAMPA_DATA = {
  settings: {},
  player: {},
  difficulties: {
    easy: {},
    normal: {},
    hard: {}
  },
  level: {
    width: 8000,
    height: 720,
    terrain: [],
    mudPatches: [],
    tennisBalls: [],
    enemies: {
      easy: [],
      normal: [],
      hard: []
    }
  },
  assets: {}
};
```

---

## 11. Placeholder Assets Needed

For the first playable prototype, use simple colored rectangles/circles as placeholders.

Later, custom sprites would improve the game a lot.

### Recommended Sprite List

#### Dog Player Sprites

Minimum:
1. Dog idle
2. Dog running frame 1
3. Dog running frame 2
4. Dog running frame 3
5. Dog jumping
6. Dog rolling ball pose
7. Dog muddy rolling pose
8. Dog hurt pose

Better version:
- 1 idle frame
- 6 running frames
- 2 jumping frames
- 4 rolling frames
- 2 muddy rolling frames
- 1 hurt frame
- 1 victory frame

#### Enemy Sprites

Minimum:
1. Enemy walk frame 1
2. Enemy walk frame 2
3. Enemy squashed/defeated frame

#### Collectible Sprites

1. Tennis ball idle
2. Tennis ball sparkle frame, optional

#### Environment Sprites

Minimum:
1. Grass tile
2. Dirt tile
3. Mud tile
4. Flower/grass decoration
5. Fence piece
6. Tree
7. Background hill
8. Barn or finish gate
9. Finish sign

#### Effects

1. Mud splash particle
2. Tennis ball pickup sparkle
3. Enemy defeat puff
4. Speed dust trail

### Total Custom Sprites Needed

Minimum playable set: **18–22 sprites**  
Polished version: **35–45 sprites**

---

## 12. First Prototype Milestone

Goal: playable gray-box version with placeholder shapes.

Must include:
- Canvas rendering
- Player movement with acceleration/friction
- Jumping
- Rolling
- One level
- Camera follow
- Tennis ball collection
- Basic enemy collision
- Difficulty selection
- End screen

No custom art required yet.

---

## 13. Second Milestone

Goal: make it feel like Yampa Valley.

Add:
- Cozy valley background
- Dog placeholder replaced with sprites
- Tennis ball sprite
- Enemy sprite
- Mud patches
- Particle effects
- Better level layout
- Improved score screen

---

## 14. Third Milestone

Goal: polish and replayability.

Add:
- Timer and best-time display
- Speed-run route tuning
- Better enemy placement per difficulty
- More satisfying rolling and enemy defeat effects
- Sound effects
- Simple music loop
- Local high score using `localStorage`

---

## 15. Sound and Music

Optional but recommended.

Needed sounds:
1. Jump
2. Tennis ball pickup
3. Roll start
4. Mud splash
5. Enemy defeat
6. Player hurt
7. Finish line

Music direction:
- Upbeat cozy valley chiptune
- Fast but warm
- Rural/farm-inspired, not too intense

---

## 16. Design Priorities

Most important:
1. Fast, satisfying movement
2. Momentum and sliding feel
3. Clear tennis ball paths
4. Fun rolling mechanic
5. Cozy valley aesthetic
6. Simple, readable single-level scope

Avoid for version one:
- Multiple levels
- Complex enemy AI
- Boss fights
- Save systems
- Inventory
- Dialogue
- Large sprite sheets before gameplay works

---

## 17. Open Questions

These can be answered later during implementation:

1. Should the player lose tennis balls when hurt, like Sonic rings?
2. Should mud be only visual/score-based, or should it act like a temporary power-up?
3. Should the level use tile-based terrain or rectangle/platform collision?
4. Should there be slopes in the first version, or should slopes wait until polish?
5. Should the dog have lives/health, or should touching enemies simply reset the player to a checkpoint?

---

## 18. Recommended Initial Implementation Choice

For the first version, keep the engine simple:

- Use a single `<canvas>`.
- Use placeholder rectangles/circles.
- Use rectangle-based platforms first.
- Add slopes later only if time allows.
- Use a camera that follows the player horizontally.
- Store all placements in `data.js`.
- Build fun movement before polishing art.

The first goal should be a complete playable level, even with simple shapes. Once the movement feels good, replace placeholders with dog, enemy, tennis ball, mud, and valley sprites.
