// Yampa Valley — tuning constants, level layout, asset paths.
// All numbers and placements live here so they can be tweaked without touching
// the engine. Coordinates use the world space (origin top-left). Ground rests
// at y = settings.groundY for the entire level except where overridden by a
// terrain rectangle.

window.YAMPA_DATA = {
  settings: {
    canvasWidth: 960,
    canvasHeight: 540,
    groundY: 500,            // floor lives near canvas bottom so the in-game
                             // tiles cover the dirt fill — no exposed brown bar
    skyTop: '#a7dcf2',
    skyBottom: '#e6f4a8',
    cameraLookahead: 180,
    cameraDeadZone: 60,
  },

  player: {
    // Physics tuned for a slippy, momentum-driven feel. The dog should be
    // hard to stop on a dime — friction is well below acceleration, so a
    // hard turn at speed leaves him sliding past his target. Top speed and
    // the soft clamp are high enough that a clean ramp + roll combo gets
    // genuinely reckless.
    acceleration: 1100,         // builds speed quickly when input is held
    maxRunSpeed: 540,           // baseline cap — clamp below allows brief overrun
    friction: 380,              // low: a release-input slide carries for ~1.4s
    airControl: 0.32,           // committal jumps: ~1/3 of ground control
    gravity: 1900,
    jumpVelocity: -780,         // slightly hotter to match the bigger horizontal speed
    rollAccelerationBoost: 1.55, // a roll is a real "boost" not just a hitbox
    rollFriction: 140,          // rolling barely slows you down
    rollMinSpeed: 220,          // entering a roll snaps you to this speed
    rollMaxDuration: 1.8,
    speedClampMult: 1.35,       // soft cap = maxRunSpeed * this (lets ramps/rolls overshoot)
    turnAroundBoost: 1.25,      // accel multiplier on hard reversal (was 1.7 — lower = slippier)
    invulnTime: 1.3,

    startX: 80,
    bodyWidth: 64,
    bodyHeight: 70,

    hurtKnockback: 280,
    hurtUpKick: -360,
    hurtDuration: 0.5,

    // rendering
    spriteScale: 0.85,
    runAnimFps: 14,
    rollAnimFps: 18,
  },

  enemy: {
    chicken: {
      spriteScale: 0.6,
      walkSpeed: 55,
      bodyWidth: 60,
      bodyHeight: 56,
      patrolRange: 160,
      walkAnimFps: 5,
      stompPoints: 200,
      rollPoints: 200,
      defeatFadeTime: 0.5,
    },
    // Cow — bigger, slower, harder to dodge but worth more.
    cow: {
      spriteScale: 0.75,
      walkSpeed: 35,
      bodyWidth: 86,
      bodyHeight: 68,
      patrolRange: 200,
      walkAnimFps: 3.5,
      stompPoints: 300,
      rollPoints: 300,
      defeatFadeTime: 0.6,
    },
    // Mushroom — small, quick, hard to land on. Lower hitbox punishes the
    // "stomp from above" approach unless you're precise.
    mushroom: {
      spriteScale: 0.55,
      walkSpeed: 80,
      bodyWidth: 50,
      bodyHeight: 52,
      patrolRange: 130,
      walkAnimFps: 6,
      stompPoints: 250,
      rollPoints: 250,
      defeatFadeTime: 0.5,
    },
  },

  ball: {
    points: 100,
    spriteScale: 0.30,
    radius: 18,
    bobAmplitude: 5,
    bobSpeed: 3.0,
    sparkleSpinSpeed: 4.0,
    // Super tennis balls — flagged in level data with `super: true`. They
    // glow with a pulsing radial halo, render slightly larger, and pay
    // `points * superMultiplier`. Placed at high-reward positions (peaks
    // of arcs, top platforms) to reward precision and risk-taking.
    superMultiplier: 5,
    superSpriteScale: 0.36,
    superGlowRadius: 34,
    superGlowPulseSpeed: 5.5,
    superBobAmplitude: 7,
  },

  // Binary mud "shield":
  //   - Rolling through a mud patch sets `muddy = true`.
  //   - While muddy, the dog uses the muddy sprite set and any chicken hit
  //     just cleans the mud off (no knockback, no speed loss).
  //   - While clean, a chicken hit triggers the normal hurt knockback.
  // Mud patches are placed sporadically as skill-shot rewards, not as
  // long contiguous strips.
  mud: {
    bonusPerPatch: 250,       // score per patch successfully muddied at finish
    particlesOnGather: 18,
    particlesOnShield: 22,
    rollDragMultiplier: 0.65, // slight drag while rolling through mud
  },

  // End-of-level time bonus. Linear: every second under `parSeconds` is
  // worth `pointsPerSecondSaved`. Beating par by a wide margin can rival
  // the tennis-ball haul, but a slow casual run still scores positively
  // from the other categories.
  timeBonus: {
    parSeconds: 200,
    pointsPerSecondSaved: 15,
  },

  // Each difficulty maps to a fully distinct level file (see levels/*.js).
  // `levelGlobal` is the window-level name the level script writes to.
  difficulties: {
    easy:   { name: 'Easy',   tint: '#7dd45b', levelGlobal: 'YAMPA_LEVEL_EASY',
              tagline: 'chickens only · 20 k world' },
    medium: { name: 'Medium', tint: '#f0b020', levelGlobal: 'YAMPA_LEVEL_MEDIUM',
              tagline: 'chickens + cows · 40 k world' },
    hard:   { name: 'Hard',   tint: '#e0584b', levelGlobal: 'YAMPA_LEVEL_HARD',
              tagline: 'all three enemies · 80 k world' },
  },

  assets: {
    dog: {
      clean: {
        idle:    'assets/dog/normal_idle.png',
        run:    ['assets/dog/normal_run1.png',
                 'assets/dog/normal_run2.png',
                 'assets/dog/normal_run3.png',
                 'assets/dog/normal_run4.png'],
        jump:    'assets/dog/jump1_run2.png',
        roll:   ['assets/dog/roll1_idle.png',
                 'assets/dog/roll1_run1.png',
                 'assets/dog/roll1_run2.png',
                 'assets/dog/roll1_run3.png',
                 'assets/dog/roll1_run4.png'],
        hurt:    'assets/dog/hurt_idle.png',
        victory: 'assets/dog/victory_idle.png',
      },
      muddy: {
        idle:    'assets/dog/muddy_normal_idle.png',
        run:    ['assets/dog/muddy_normal_run1.png',
                 'assets/dog/muddy_normal_run2.png',
                 'assets/dog/muddy_normal_run3.png',
                 'assets/dog/muddy_normal_run4.png'],
        jump:    'assets/dog/muddy_jump1_run2.png',
        roll:   ['assets/dog/muddy_roll1_idle.png',
                 'assets/dog/muddy_roll1_run1.png',
                 'assets/dog/muddy_roll1_run2.png',
                 'assets/dog/muddy_roll1_run3.png',
                 'assets/dog/muddy_roll1_run4.png'],
        hurt:    'assets/dog/muddy_hurt_idle.png',
        victory: 'assets/dog/muddy_victory_idle.png',
      },
    },
    enemies: {
      chicken: {
        walk:    ['assets/enemies/chicken_walk1.png',
                  'assets/enemies/chicken_walk2.png'],
        defeated: 'assets/enemies/chicken_defeated.png',
      },
      cow: {
        walk:    ['assets/enemies/cow_walk1.png',
                  'assets/enemies/cow_walk2.png'],
        defeated: 'assets/enemies/cow_defeated.png',
      },
      mushroom: {
        walk:    ['assets/enemies/mushroom_a_walk1.png',
                  'assets/enemies/mushroom_a_walk2.png'],
        defeated: 'assets/enemies/mushroom_a_defeated.png',
      },
    },
    env: {
      tennisBall:        'assets/env/tennis_ball.png',
      tennisBallSparkle: 'assets/env/tennis_ball_sparkle.png',
      grassTile:         'assets/env/grass_tile.png',
      dirtTile:          'assets/env/dirt_tile.png',
      mudTile:           'assets/env/mud_tile.png',
      flowerDecoration:  'assets/env/flower_decoration.png',
      fencePiece:        'assets/env/fence_piece.png',
      tree:              'assets/env/tree.png',
      backgroundHill:    'assets/env/background_hill.png',
      barn:              'assets/env/barn.png',
      finishSign:        'assets/env/finish_sign.png',
    },
    backgrounds: {
      // Single wide panorama processed (by tools/process_panorama.py) so its
      // right edge crossfades into its left edge — it tiles infinitely with
      // no visible seam. The renderer simply repeats it as the camera moves.
      panorama: 'assets/backgrounds/bg_panorama.png',
    },
    ui: {
      cover: 'assets/ui/game_cover.png',
    },
  },

  // Background music. Played at gameplay start, looped, paused on pause/finish.
  audio: {
    soundtrack: 'assets/audio/cabbage_sprint.mp3',
    soundtrackVolume: 0.45,
  },

  // Painted background — a single seamlessly-looping panorama. The renderer
  // tiles `sequence` modulo its length; with one entry, it just repeats the
  // panorama forever. `depth` < 1.0 means the layer scrolls slower than the
  // world, selling the distance.
  //
  // `yOffset` slides the painted bg DOWN by that many pixels relative to
  // groundY. The panorama is 742 px tall but the canvas is only 540 — the
  // top of the bg is clipped above the canvas. Sliding down reveals more
  // sky/mountains at the top and tucks the painted grass strip down so it
  // sits at the in-game floor line rather than floating above it.
  parallax: {
    depth: 0.45,
    scale: 1.00,
    yOffset: 55,
    sequence: ['panorama'],
  },
};
