// Yampa Valley — MEDIUM level
// 40 000 px wide. Each section is roughly twice the size of the Easy level's
// equivalent, with more platforms, longer arcs, and a new enemy type — the
// cow — joining the chickens for slower-but-heavier ground threats.

window.YAMPA_LEVEL_MEDIUM = {
  width: 40000,
  height: 540,
  finishX: 39800,

  sections: [
    { name: 'Gentle Start',       startX:     0, color: '#9ed16a' },
    { name: 'Momentum Training',  startX:  5000, color: '#7dc05b' },
    { name: 'Mud Roll Zone',      startX: 12000, color: '#8b6a3a' },
    { name: 'High-Speed Route',   startX: 19000, color: '#86b5d4' },
    { name: 'Enemy Challenge',    startX: 27000, color: '#d6a04f' },
    { name: 'Finish Stretch',     startX: 35000, color: '#e8c674' },
  ],

  terrain: [
    // ===== S1 (0–5000): Gentle Start =====
    { x:     0, y: 500, w: 5000, h: 200, surface: 'grass' },
    { x:  1700, y: 420, w:  240, h:  20, surface: 'dirt'  },
    { x:  2100, y: 360, w:  240, h:  20, surface: 'dirt'  },  // peak intro
    { x:  2500, y: 420, w:  240, h:  20, surface: 'dirt'  },
    { x:  3300, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x:  3700, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x:  4100, y: 400, w:  220, h:  20, surface: 'dirt'  },

    // ===== S2 (5000–12000): Momentum Training =====
    { x:  5000, y: 500, w: 7000, h: 200, surface: 'grass' },
    // Big zig-zag staircase up to a reward platform
    { x:  5500, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x:  5850, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x:  6200, y: 320, w:  220, h:  20, surface: 'dirt'  },
    { x:  6550, y: 260, w:  280, h:  20, surface: 'dirt'  },  // peak A
    { x:  6950, y: 320, w:  220, h:  20, surface: 'dirt'  },
    { x:  7300, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x:  7650, y: 440, w:  220, h:  20, surface: 'dirt'  },
    // bridge over ground
    { x:  8200, y: 420, w:  200, h:  20, surface: 'dirt'  },
    { x:  8550, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x:  8900, y: 420, w:  200, h:  20, surface: 'dirt'  },
    // second smaller staircase
    { x:  9500, y: 420, w:  200, h:  20, surface: 'dirt'  },
    { x:  9820, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 10150, y: 420, w:  200, h:  20, surface: 'dirt'  },
    // approach to mud
    { x: 11000, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 11400, y: 360, w:  220, h:  20, surface: 'dirt'  },

    // ===== S3 (12000–19000): Mud Roll Zone — 4 patches =====
    { x: 12000, y: 500, w:  500, h: 200, surface: 'grass' },
    { x: 12500, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 1
    { x: 12600, y: 500, w: 1100, h: 200, surface: 'grass' },
    { x: 13700, y: 500, w:  110, h: 200, surface: 'mud'   },  // patch 2
    { x: 13810, y: 500, w: 1290, h: 200, surface: 'grass' },
    { x: 15100, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 3
    { x: 15200, y: 500, w: 1400, h: 200, surface: 'grass' },
    { x: 16600, y: 500, w:  110, h: 200, surface: 'mud'   },  // patch 4
    { x: 16710, y: 500, w: 2290, h: 200, surface: 'grass' },
    // upper route through mud zone
    { x: 12700, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 13800, y: 380, w:  280, h:  20, surface: 'dirt'  },
    { x: 14900, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 16000, y: 380, w:  280, h:  20, surface: 'dirt'  },
    { x: 17100, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 18200, y: 380, w:  280, h:  20, surface: 'dirt'  },

    // ===== S4 (19000–27000): High-Speed Route =====
    { x: 19000, y: 500, w: 8000, h: 200, surface: 'grass' },
    // big ascending staircase
    { x: 19500, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x: 19850, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x: 20200, y: 320, w:  220, h:  20, surface: 'dirt'  },
    { x: 20550, y: 260, w:  220, h:  20, surface: 'dirt'  },
    { x: 20900, y: 200, w:  600, h:  20, surface: 'dirt'  },  // top reward
    { x: 21700, y: 260, w:  220, h:  20, surface: 'dirt'  },
    { x: 22050, y: 320, w:  220, h:  20, surface: 'dirt'  },
    { x: 22400, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x: 22750, y: 440, w:  220, h:  20, surface: 'dirt'  },
    // gap, then a second skyway
    { x: 23500, y: 400, w:  200, h:  20, surface: 'dirt'  },
    { x: 23850, y: 340, w:  200, h:  20, surface: 'dirt'  },
    { x: 24200, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 24600, y: 240, w:  400, h:  20, surface: 'dirt'  },  // peak B
    { x: 25100, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 25450, y: 340, w:  200, h:  20, surface: 'dirt'  },
    { x: 25800, y: 400, w:  200, h:  20, surface: 'dirt'  },
    { x: 26200, y: 440, w:  200, h:  20, surface: 'dirt'  },

    // ===== S5 (27000–35000): Enemy Challenge =====
    { x: 27000, y: 500, w: 6000, h: 200, surface: 'grass' },
    { x: 33000, y: 500, w:  110, h: 200, surface: 'mud'   },  // rescue patch
    { x: 33110, y: 500, w: 1890, h: 200, surface: 'grass' },
    // upper path A
    { x: 27200, y: 400, w:  300, h:  20, surface: 'dirt'  },
    { x: 27650, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 28100, y: 340, w:  280, h:  20, surface: 'dirt'  },
    { x: 28550, y: 300, w:  280, h:  20, surface: 'dirt'  },
    { x: 29000, y: 340, w:  280, h:  20, surface: 'dirt'  },
    { x: 29450, y: 400, w:  280, h:  20, surface: 'dirt'  },
    // upper path B
    { x: 30200, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 30650, y: 320, w:  280, h:  20, surface: 'dirt'  },
    { x: 31100, y: 260, w:  280, h:  20, surface: 'dirt'  },  // skill peak
    { x: 31550, y: 320, w:  280, h:  20, surface: 'dirt'  },
    { x: 32000, y: 380, w:  280, h:  20, surface: 'dirt'  },
    { x: 32450, y: 440, w:  280, h:  20, surface: 'dirt'  },
    // tail to finish
    { x: 33500, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x: 33900, y: 350, w:  240, h:  20, surface: 'dirt'  },
    { x: 34300, y: 400, w:  240, h:  20, surface: 'dirt'  },

    // ===== S6 (35000–40000): Finish Stretch =====
    { x: 35000, y: 500, w: 5000, h: 200, surface: 'grass' },
    { x: 35500, y: 430, w:  220, h:  20, surface: 'dirt'  },
    { x: 35900, y: 390, w:  220, h:  20, surface: 'dirt'  },
    { x: 36300, y: 430, w:  220, h:  20, surface: 'dirt'  },
    { x: 37000, y: 410, w:  240, h:  20, surface: 'dirt'  },
    { x: 37400, y: 370, w:  240, h:  20, surface: 'dirt'  },
    { x: 37800, y: 410, w:  240, h:  20, surface: 'dirt'  },
    { x: 38400, y: 440, w:  220, h:  20, surface: 'dirt'  },
  ],

  decorations: [
    // S1
    { type: 'tree',              x:   500, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:   200, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x:  1200, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'fence_piece',       x:  3000, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x:  4400, y: 500, depth: 0.95, scale: 0.80 },
    // S2
    { type: 'flower_decoration', x:  5300, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x:  8400, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x: 10600, y: 500, depth: 1.00, scale: 0.55 },
    // S3 — fences flank the mud zone
    { type: 'fence_piece',       x: 12350, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 13550, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 14950, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 16450, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 18500, y: 500, depth: 0.95, scale: 0.85 },
    // S4
    { type: 'flower_decoration', x: 19300, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 26500, y: 500, depth: 1.00, scale: 0.55 },
    // S5
    { type: 'fence_piece',       x: 27200, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 29800, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'fence_piece',       x: 32700, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 34500, y: 500, depth: 0.95, scale: 0.80 },
    // S6 — homecoming
    { type: 'flower_decoration', x: 35400, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 38000, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x: 39250, y: 500, depth: 1.00, scale: 0.60 },
    { type: 'barn',              x: 39400, y: 500, depth: 1.00, scale: 0.95 },
    { type: 'finish_sign',       x: 39800, y: 500, depth: 1.00, scale: 0.95 },
  ],

  tennisBalls: [
    // S1 — low intro trail + first arc
    { x:  250, y: 460 }, { x:  450, y: 460 }, { x:  650, y: 460 },
    { x:  850, y: 460 }, { x: 1050, y: 460 }, { x: 1250, y: 460 },
    { x: 1450, y: 460 }, { x: 1650, y: 460 },
    { x: 1820, y: 380 }, { x: 2200, y: 320 },                  // peak intro
    { x: 2620, y: 380 }, { x: 2900, y: 460 },
    { x: 3200, y: 460 }, { x: 3420, y: 360 }, { x: 3800, y: 300 },
    { x: 4200, y: 360 }, { x: 4600, y: 460 }, { x: 4850, y: 460 },

    // S2 — speed baseline + zig-zag arcs
    { x: 5100, y: 460 }, { x: 5300, y: 460 },
    { x: 5580, y: 400 }, { x: 5910, y: 340 }, { x: 6260, y: 280 },
    { x: 6620, y: 220, super: true },                          // peak A — super reward
    { x: 7010, y: 280 }, { x: 7360, y: 340 }, { x: 7710, y: 400 },
    { x: 8060, y: 460 },
    { x: 8280, y: 380 }, { x: 8620, y: 320 }, { x: 8970, y: 380 },
    { x: 9300, y: 460 },
    { x: 9580, y: 380 }, { x: 9900, y: 320 }, { x: 10230, y: 380 },
    { x: 10600, y: 460 }, { x: 10850, y: 460 },
    { x: 11070, y: 360 }, { x: 11470, y: 320 }, { x: 11800, y: 460 },

    // S3 — low over each mud patch + optional upper-route balls
    { x: 12100, y: 460 }, { x: 12300, y: 465 },
    { x: 12520, y: 475 }, { x: 12570, y: 475 },                // over patch 1
    { x: 12800, y: 360 }, { x: 13150, y: 460 }, { x: 13450, y: 460 },
    { x: 13720, y: 475 }, { x: 13770, y: 475 },                // over patch 2
    { x: 13900, y: 340 }, { x: 14300, y: 460 }, { x: 14700, y: 460 },
    { x: 15000, y: 360 }, { x: 15120, y: 475 }, { x: 15170, y: 475 },  // patch 3
    { x: 15400, y: 460 }, { x: 15800, y: 460 }, { x: 16100, y: 340 },
    { x: 16400, y: 460 }, { x: 16620, y: 475 }, { x: 16670, y: 475 },  // patch 4
    { x: 16900, y: 460 }, { x: 17200, y: 360 }, { x: 17500, y: 460 },
    { x: 17900, y: 460 }, { x: 18300, y: 340 }, { x: 18700, y: 460 },

    // S4 — elevated route, super reward at top
    { x: 19200, y: 460 }, { x: 19450, y: 460 },
    { x: 19600, y: 400 }, { x: 19950, y: 340 }, { x: 20300, y: 280 },
    { x: 20650, y: 220 },
    { x: 21000, y: 160, super: true },                          // top reward
    { x: 21200, y: 160 }, { x: 21400, y: 160 },
    { x: 21800, y: 220 }, { x: 22150, y: 280 }, { x: 22500, y: 340 },
    { x: 22850, y: 400 }, { x: 23100, y: 460 },
    { x: 23400, y: 460 }, { x: 23600, y: 360 }, { x: 23950, y: 300 },
    { x: 24300, y: 240 },
    { x: 24700, y: 200, super: true },                          // peak B
    { x: 24900, y: 200 },
    { x: 25200, y: 240 }, { x: 25550, y: 300 }, { x: 25900, y: 360 },
    { x: 26300, y: 400 }, { x: 26600, y: 460 }, { x: 26900, y: 460 },

    // S5 — branching dense paths
    { x: 27100, y: 460 }, { x: 27300, y: 360 }, { x: 27750, y: 320 },
    { x: 28000, y: 460 }, { x: 28200, y: 300 }, { x: 28650, y: 260 },
    { x: 28900, y: 460 }, { x: 29100, y: 300 }, { x: 29500, y: 360 },
    { x: 29800, y: 460 },
    { x: 30000, y: 460 }, { x: 30300, y: 340 }, { x: 30750, y: 280 },
    { x: 31200, y: 220, super: true },                          // skill peak
    { x: 31350, y: 220 },
    { x: 31650, y: 280 }, { x: 32100, y: 340 }, { x: 32550, y: 400 },
    { x: 32900, y: 460 },
    { x: 33020, y: 475 }, { x: 33070, y: 475 },                // rescue patch
    { x: 33300, y: 460 }, { x: 33600, y: 360 }, { x: 34000, y: 310 },
    { x: 34400, y: 360 }, { x: 34700, y: 460 },

    // S6 — final hurdle + dense finale
    { x: 35200, y: 460 }, { x: 35400, y: 460 },
    { x: 35600, y: 390 }, { x: 36000, y: 350 }, { x: 36400, y: 390 },
    { x: 36800, y: 460 },
    { x: 37050, y: 370, super: true },                          // hurdle peak
    { x: 37500, y: 330 }, { x: 37900, y: 370 },
    { x: 38200, y: 460 }, { x: 38500, y: 400 }, { x: 38800, y: 460 },
    { x: 39000, y: 460 }, { x: 39200, y: 460 }, { x: 39400, y: 460 },
    { x: 39600, y: 460 }, { x: 39700, y: 460 },
  ],

  enemies: [
    // S1 — soft intro
    { type: 'chicken', x:  2200, y: 360 },                     // on peak platform
    { type: 'chicken', x:  3800, y: 340 },                     // on platform
    { type: 'chicken', x:  4700, y: 500 },

    // S2 — chickens + first cows
    { type: 'chicken', x:  5800, y: 500 },
    { type: 'cow',     x:  6700, y: 500 },                     // wide patroller
    { type: 'chicken', x:  7500, y: 500 },
    { type: 'cow',     x:  8500, y: 500 },
    { type: 'chicken', x:  9700, y: 500 },
    { type: 'chicken', x: 10500, y: 500 },
    { type: 'cow',     x: 11500, y: 500 },

    // S3 — guarding each mud patch
    { type: 'chicken', x: 12700, y: 500 },                     // after patch 1
    { type: 'cow',     x: 13900, y: 500 },                     // after patch 2 (heavy)
    { type: 'chicken', x: 15300, y: 500 },                     // after patch 3
    { type: 'cow',     x: 16900, y: 500 },                     // after patch 4
    { type: 'chicken', x: 18000, y: 500 },
    { type: 'chicken', x: 18500, y: 380 },                     // on upper platform

    // S4 — skyway, mostly chickens with cows on bigger platforms
    { type: 'chicken', x: 20300, y: 320 },
    { type: 'cow',     x: 21200, y: 200 },                     // on top reward
    { type: 'chicken', x: 22300, y: 380 },
    { type: 'chicken', x: 23900, y: 340 },
    { type: 'cow',     x: 24700, y: 240 },                     // peak B
    { type: 'chicken', x: 25600, y: 400 },
    { type: 'cow',     x: 26300, y: 500 },

    // S5 — densest section
    { type: 'cow',     x: 27500, y: 500 },
    { type: 'chicken', x: 27700, y: 360 },
    { type: 'chicken', x: 28200, y: 500 },
    { type: 'cow',     x: 28500, y: 500 },
    { type: 'chicken', x: 28700, y: 300 },                     // upper path A
    { type: 'chicken', x: 29200, y: 340 },
    { type: 'cow',     x: 30000, y: 500 },
    { type: 'chicken', x: 30700, y: 320 },                     // upper path B
    { type: 'chicken', x: 31200, y: 260 },                     // skill peak
    { type: 'cow',     x: 31800, y: 500 },
    { type: 'chicken', x: 32500, y: 500 },
    { type: 'chicken', x: 33500, y: 500 },
    { type: 'cow',     x: 34300, y: 500 },

    // S6 — final guardians
    { type: 'chicken', x: 35700, y: 500 },
    { type: 'cow',     x: 36500, y: 500 },
    { type: 'chicken', x: 37500, y: 370 },                     // on hurdle peak
    { type: 'cow',     x: 38500, y: 500 },
    { type: 'chicken', x: 39200, y: 500 },
  ],
};
