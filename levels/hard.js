// Yampa Valley — HARD level
// Twice the length of Medium (40 000 px) and roughly twice the challenge:
// long platform chains demanding committed jumps, chickens perched on
// landing platforms, dense mud-zone obstacle courses, and a finale stretch
// that pushes you to keep your speed even at the end.

window.YAMPA_LEVEL_HARD = {
  width: 40000,
  height: 540,
  finishX: 39800,

  sections: [
    { name: 'Long Warmup',            startX:     0, color: '#9ed16a' },
    { name: 'Cascading Momentum',     startX:  4500, color: '#7dc05b' },
    { name: 'Mud Gauntlet',           startX: 10500, color: '#8b6a3a' },
    { name: 'Skyway',                 startX: 16000, color: '#86b5d4' },
    { name: 'Chicken Coop Frenzy',    startX: 23000, color: '#d6a04f' },
    { name: 'Final Sprint',           startX: 33000, color: '#e8c674' },
  ],

  terrain: [
    // ============ S1 (0–4500): "Long Warmup" — still throws platforms early ===
    { x:     0, y: 500, w: 4500, h: 200, surface: 'grass' },
    { x:   600, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x:   950, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x:  1300, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x:  1700, y: 400, w:  260, h:  20, surface: 'dirt'  },
    { x:  2100, y: 340, w:  260, h:  20, surface: 'dirt'  },  // peak
    { x:  2500, y: 400, w:  260, h:  20, surface: 'dirt'  },
    { x:  2900, y: 440, w:  260, h:  20, surface: 'dirt'  },
    { x:  3350, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x:  3700, y: 370, w:  220, h:  20, surface: 'dirt'  },
    { x:  4050, y: 420, w:  220, h:  20, surface: 'dirt'  },

    // ============ S2 (4500–10500): "Cascading Momentum" — long chains =======
    { x:  4500, y: 500, w: 6000, h: 200, surface: 'grass' },
    // chain 1: zig-zag ascending
    { x:  4700, y: 440, w:  200, h:  20, surface: 'dirt'  },
    { x:  4980, y: 380, w:  200, h:  20, surface: 'dirt'  },
    { x:  5260, y: 320, w:  200, h:  20, surface: 'dirt'  },
    { x:  5540, y: 260, w:  220, h:  20, surface: 'dirt'  },  // peak 1
    { x:  5830, y: 320, w:  200, h:  20, surface: 'dirt'  },
    { x:  6120, y: 380, w:  200, h:  20, surface: 'dirt'  },
    { x:  6420, y: 440, w:  200, h:  20, surface: 'dirt'  },
    // gap
    { x:  6900, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x:  7250, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x:  7600, y: 280, w:  240, h:  20, surface: 'dirt'  },
    { x:  7950, y: 240, w:  300, h:  20, surface: 'dirt'  },  // peak 2 — top reward
    { x:  8400, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x:  8750, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x:  9100, y: 400, w:  220, h:  20, surface: 'dirt'  },
    // chain 2: tight wide-gap hops
    { x:  9500, y: 440, w:  200, h:  20, surface: 'dirt'  },
    { x:  9900, y: 400, w:  200, h:  20, surface: 'dirt'  },
    { x: 10250, y: 440, w:  200, h:  20, surface: 'dirt'  },

    // ============ S3 (10500–16000): "Mud Gauntlet" — 5 mud patches ==========
    { x: 10500, y: 500, w:  450, h: 200, surface: 'grass' },
    { x: 10950, y: 500, w:  100, h: 200, surface: 'mud'   },   // patch 1
    { x: 11050, y: 500, w:  650, h: 200, surface: 'grass' },
    { x: 11700, y: 500, w:  100, h: 200, surface: 'mud'   },   // patch 2
    { x: 11800, y: 500, w:  800, h: 200, surface: 'grass' },
    { x: 12600, y: 500, w:  100, h: 200, surface: 'mud'   },   // patch 3
    { x: 12700, y: 500, w:  900, h: 200, surface: 'grass' },
    { x: 13600, y: 500, w:  100, h: 200, surface: 'mud'   },   // patch 4
    { x: 13700, y: 500, w: 1100, h: 200, surface: 'grass' },
    { x: 14800, y: 500, w:  100, h: 200, surface: 'mud'   },   // patch 5
    { x: 14900, y: 500, w: 1100, h: 200, surface: 'grass' },
    // optional upper route — short platforms above the gauntlet
    { x: 11100, y: 400, w:  300, h:  20, surface: 'dirt'  },
    { x: 11900, y: 360, w:  300, h:  20, surface: 'dirt'  },
    { x: 12750, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 13800, y: 340, w:  300, h:  20, surface: 'dirt'  },
    { x: 14950, y: 380, w:  300, h:  20, surface: 'dirt'  },

    // ============ S4 (16000–23000): "Skyway" — high platform chains ========
    { x: 16000, y: 500, w: 7000, h: 200, surface: 'grass' },
    // ascending stair
    { x: 16200, y: 450, w:  220, h:  20, surface: 'dirt'  },
    { x: 16520, y: 390, w:  220, h:  20, surface: 'dirt'  },
    { x: 16840, y: 330, w:  220, h:  20, surface: 'dirt'  },
    { x: 17160, y: 270, w:  220, h:  20, surface: 'dirt'  },
    { x: 17480, y: 210, w:  220, h:  20, surface: 'dirt'  },
    // sky chain — narrow platforms requiring exact jumps
    { x: 17820, y: 210, w:  180, h:  20, surface: 'dirt'  },
    { x: 18150, y: 190, w:  180, h:  20, surface: 'dirt'  },
    { x: 18480, y: 170, w:  180, h:  20, surface: 'dirt'  },
    { x: 18810, y: 150, w:  240, h:  20, surface: 'dirt'  },  // very top
    { x: 19200, y: 170, w:  180, h:  20, surface: 'dirt'  },
    { x: 19530, y: 190, w:  180, h:  20, surface: 'dirt'  },
    { x: 19860, y: 210, w:  180, h:  20, surface: 'dirt'  },
    // descent
    { x: 20200, y: 270, w:  220, h:  20, surface: 'dirt'  },
    { x: 20520, y: 330, w:  220, h:  20, surface: 'dirt'  },
    { x: 20840, y: 390, w:  220, h:  20, surface: 'dirt'  },
    { x: 21160, y: 450, w:  220, h:  20, surface: 'dirt'  },
    // second smaller skyway
    { x: 21600, y: 420, w:  200, h:  20, surface: 'dirt'  },
    { x: 21940, y: 360, w:  200, h:  20, surface: 'dirt'  },
    { x: 22280, y: 300, w:  200, h:  20, surface: 'dirt'  },
    { x: 22620, y: 360, w:  200, h:  20, surface: 'dirt'  },

    // ============ S5 (23000–33000): "Chicken Coop Frenzy" =================
    { x: 23000, y: 500, w: 5500, h: 200, surface: 'grass' },
    { x: 28500, y: 500, w:  100, h: 200, surface: 'mud'   },   // rescue patch
    { x: 28600, y: 500, w: 4400, h: 200, surface: 'grass' },
    // upper paths
    { x: 23200, y: 420, w:  300, h:  20, surface: 'dirt'  },
    { x: 23650, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 24100, y: 340, w:  300, h:  20, surface: 'dirt'  },
    { x: 24550, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 25000, y: 420, w:  300, h:  20, surface: 'dirt'  },
    { x: 25450, y: 360, w:  300, h:  20, surface: 'dirt'  },
    { x: 25900, y: 320, w:  300, h:  20, surface: 'dirt'  },
    { x: 26350, y: 280, w:  300, h:  20, surface: 'dirt'  },  // height reward
    { x: 26800, y: 320, w:  300, h:  20, surface: 'dirt'  },
    { x: 27250, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 27700, y: 440, w:  300, h:  20, surface: 'dirt'  },
    // continued
    { x: 28200, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 28800, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 29400, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 30000, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 30600, y: 320, w:  280, h:  20, surface: 'dirt'  },
    { x: 31200, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 31800, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 32400, y: 450, w:  280, h:  20, surface: 'dirt'  },

    // ============ S6 (33000–40000): "Final Sprint" + last hurdle  =========
    { x: 33000, y: 500, w: 7000, h: 200, surface: 'grass' },
    // one last mud patch before the finish stretch
    { x: 35000, y: 500, w:  100, h: 200, surface: 'mud'   },   // patch 7
    // (terrain underneath continues, this is just a surface change inside the
    // same flat ground — the engine picks the mud surface from this overlap)
    // hurdle staircase
    { x: 33400, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 33750, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 34100, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 35400, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 35750, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 36100, y: 320, w:  220, h:  20, surface: 'dirt'  },
    { x: 36450, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 36800, y: 420, w:  220, h:  20, surface: 'dirt'  },
    // home run — small descending hops
    { x: 37250, y: 450, w:  200, h:  20, surface: 'dirt'  },
    { x: 37600, y: 470, w:  200, h:  20, surface: 'dirt'  },
  ],

  decorations: [
    // S1
    { type: 'tree',              x:   400, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:   150, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x:  3200, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x:  4300, y: 500, depth: 1.00, scale: 0.55 },
    // S2 — long, leaner
    { type: 'tree',              x:  6800, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:  8400, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 10100, y: 500, depth: 0.95, scale: 0.75 },
    // S3 — fence-flanked mud zones
    { type: 'fence_piece',       x: 10800, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 11550, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 12450, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 13450, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 14650, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'tree',              x: 15500, y: 500, depth: 0.95, scale: 0.80 },
    // S4 — sparse foreground because skyway dominates
    { type: 'flower_decoration', x: 16200, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 22500, y: 500, depth: 1.00, scale: 0.55 },
    // S5 — busy with fences and trees
    { type: 'fence_piece',       x: 23300, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 23700, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 24800, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'tree',              x: 27000, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'fence_piece',       x: 29200, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 30200, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 31500, y: 500, depth: 0.95, scale: 0.75 },
    // S6 — homecoming
    { type: 'flower_decoration', x: 33200, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 33800, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x: 36900, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 37300, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x: 39250, y: 500, depth: 1.00, scale: 0.60 },
    { type: 'barn',              x: 39400, y: 500, depth: 1.00, scale: 0.95 },
    { type: 'finish_sign',       x: 39800, y: 500, depth: 1.00, scale: 0.95 },
  ],

  tennisBalls: [
    // ===== S1 =====
    { x:  200, y: 460 }, { x:  400, y: 460 }, { x:  650, y: 400 },
    { x:  830, y: 400 }, { x: 1010, y: 340 }, { x: 1190, y: 340 },
    { x: 1370, y: 400 }, { x: 1700, y: 360 }, { x: 1860, y: 360 },
    { x: 2080, y: 300 }, { x: 2230, y: 300 }, { x: 2550, y: 360 },
    { x: 2710, y: 360 }, { x: 2960, y: 400 }, { x: 3120, y: 400 },
    { x: 3400, y: 380 }, { x: 3580, y: 380 }, { x: 3760, y: 330 },
    { x: 4100, y: 380 }, { x: 4280, y: 380 }, { x: 4450, y: 460 },
    // ===== S2 — long, multi-peak staircase =====
    { x:  4750, y: 400 }, { x:  4920, y: 400 },
    { x:  5050, y: 340 }, { x:  5210, y: 340 },
    { x:  5320, y: 280 }, { x:  5460, y: 280 },
    { x:  5600, y: 220 }, { x:  5750, y: 220 },           // top peak 1
    { x:  5870, y: 280 }, { x:  6030, y: 280 },
    { x:  6180, y: 340 }, { x:  6340, y: 340 },
    { x:  6470, y: 400 }, { x:  6620, y: 460 },
    // peak 2 climb
    { x:  6960, y: 360 }, { x:  7100, y: 360 },
    { x:  7310, y: 300 }, { x:  7470, y: 300 },
    { x:  7660, y: 240 }, { x:  7820, y: 240 },
    { x:  8020, y: 200 }, { x:  8180, y: 200 }, { x:  8330, y: 200 },  // top
    { x:  8460, y: 240 }, { x:  8800, y: 300 }, { x:  9150, y: 360 },
    // wide hop tail
    { x:  9550, y: 400 }, { x:  9950, y: 360 }, { x: 10300, y: 400 },
    { x: 10440, y: 460 },
    // ===== S3 — every mud patch has 2 low balls =====
    { x: 10700, y: 460 }, { x: 10850, y: 460 },
    { x: 10970, y: 475 }, { x: 11020, y: 475 },     // patch 1
    { x: 11250, y: 460 }, { x: 11500, y: 460 },
    { x: 11720, y: 475 }, { x: 11770, y: 475 },     // patch 2
    { x: 12000, y: 460 }, { x: 12350, y: 460 },
    { x: 12620, y: 475 }, { x: 12670, y: 475 },     // patch 3
    { x: 12900, y: 460 }, { x: 13300, y: 460 },
    { x: 13620, y: 475 }, { x: 13670, y: 475 },     // patch 4
    { x: 13950, y: 460 }, { x: 14400, y: 460 },
    { x: 14820, y: 475 }, { x: 14870, y: 475 },     // patch 5
    { x: 15100, y: 460 }, { x: 15400, y: 460 }, { x: 15700, y: 460 },
    // optional upper route
    { x: 11240, y: 360 }, { x: 12040, y: 320 }, { x: 12890, y: 340 },
    { x: 13940, y: 300 }, { x: 15090, y: 340 },
    // ===== S4 — Skyway, top balls are the big haul =====
    { x: 16200, y: 460 }, { x: 16320, y: 410 }, { x: 16630, y: 350 },
    { x: 16940, y: 290 }, { x: 17270, y: 230 }, { x: 17580, y: 170 },
    { x: 17900, y: 170 }, { x: 18230, y: 150 }, { x: 18560, y: 130 },
    { x: 18930, y: 110 }, { x: 19090, y: 110 },           // very top reward!
    { x: 19280, y: 130 }, { x: 19610, y: 150 }, { x: 19940, y: 170 },
    { x: 20290, y: 230 }, { x: 20610, y: 290 }, { x: 20930, y: 350 },
    { x: 21250, y: 410 },
    { x: 21680, y: 380 }, { x: 22020, y: 320 }, { x: 22360, y: 260 },
    { x: 22700, y: 320 }, { x: 22900, y: 460 },
    // ===== S5 — frenzy: dense balls on both routes =====
    { x: 23100, y: 460 }, { x: 23280, y: 380 }, { x: 23730, y: 340 },
    { x: 24180, y: 300 }, { x: 24630, y: 340 }, { x: 25080, y: 380 },
    { x: 25530, y: 320 }, { x: 25980, y: 280 }, { x: 26430, y: 240 },
    { x: 26880, y: 280 }, { x: 27330, y: 340 }, { x: 27780, y: 400 },
    // ground-level path
    { x: 23700, y: 460 }, { x: 24000, y: 460 }, { x: 24400, y: 460 },
    { x: 24800, y: 460 }, { x: 25200, y: 460 }, { x: 25600, y: 460 },
    { x: 26000, y: 460 }, { x: 26400, y: 460 }, { x: 26800, y: 460 },
    { x: 27200, y: 460 }, { x: 27600, y: 460 }, { x: 28000, y: 460 },
    { x: 28200, y: 460 }, { x: 28400, y: 460 },
    { x: 28520, y: 475 }, { x: 28570, y: 475 },     // patch 6
    { x: 28800, y: 460 }, { x: 29100, y: 460 }, { x: 29400, y: 460 },
    { x: 29700, y: 460 }, { x: 30100, y: 460 }, { x: 30500, y: 460 },
    { x: 30900, y: 460 }, { x: 31300, y: 460 }, { x: 31700, y: 460 },
    { x: 32100, y: 460 }, { x: 32500, y: 460 }, { x: 32800, y: 460 },
    // upper continuation
    { x: 28280, y: 360 }, { x: 28880, y: 320 }, { x: 29480, y: 360 },
    { x: 30080, y: 320 }, { x: 30680, y: 280 }, { x: 31280, y: 320 },
    { x: 31880, y: 360 }, { x: 32480, y: 410 },
    // ===== S6 — final sprint, dense rewards =====
    { x: 33100, y: 460 }, { x: 33300, y: 460 }, { x: 33490, y: 380 },
    { x: 33840, y: 320 }, { x: 34190, y: 380 }, { x: 34400, y: 460 },
    { x: 34700, y: 460 }, { x: 34900, y: 460 },
    { x: 35020, y: 475 }, { x: 35070, y: 475 },     // patch 7
    { x: 35480, y: 380 }, { x: 35840, y: 320 }, { x: 36180, y: 280 },
    { x: 36530, y: 320 }, { x: 36870, y: 380 },
    { x: 37340, y: 410 }, { x: 37690, y: 430 },
    { x: 38000, y: 460 }, { x: 38200, y: 460 }, { x: 38400, y: 460 },
    { x: 38600, y: 460 }, { x: 38800, y: 460 }, { x: 39000, y: 460 },
    { x: 39200, y: 460 }, { x: 39400, y: 460 }, { x: 39600, y: 460 },
  ],

  enemies: [
    // ===== S1 — already throwing chickens at landings =====
    { type: 'chicken', x:   850, y: 500 },
    { type: 'chicken', x:  1350, y: 500 },
    { type: 'chicken', x:  2160, y: 340 },      // on the peak platform
    { type: 'chicken', x:  2700, y: 500 },
    { type: 'chicken', x:  3500, y: 500 },
    { type: 'chicken', x:  4250, y: 500 },

    // ===== S2 — chickens on staircase platforms =====
    { type: 'chicken', x:  4900, y: 500 },
    { type: 'chicken', x:  5350, y: 320 },      // mid-stair
    { type: 'chicken', x:  5600, y: 260 },      // peak 1
    { type: 'chicken', x:  6200, y: 500 },
    { type: 'chicken', x:  6500, y: 500 },
    { type: 'chicken', x:  7000, y: 400 },      // platform
    { type: 'chicken', x:  7700, y: 280 },      // stair
    { type: 'chicken', x:  8100, y: 240 },      // top reward platform!
    { type: 'chicken', x:  8600, y: 500 },
    { type: 'chicken', x:  9000, y: 500 },
    { type: 'chicken', x:  9550, y: 440 },
    { type: 'chicken', x: 10050, y: 500 },

    // ===== S3 — bracket every patch with chickens =====
    { type: 'chicken', x: 10880, y: 500 },
    { type: 'chicken', x: 11100, y: 500 },
    { type: 'chicken', x: 11640, y: 500 },
    { type: 'chicken', x: 11900, y: 500 },
    { type: 'chicken', x: 12540, y: 500 },
    { type: 'chicken', x: 12850, y: 500 },
    { type: 'chicken', x: 13540, y: 500 },
    { type: 'chicken', x: 13900, y: 500 },
    { type: 'chicken', x: 14740, y: 500 },
    { type: 'chicken', x: 15100, y: 500 },
    { type: 'chicken', x: 15500, y: 500 },
    // upper-route enemies
    { type: 'chicken', x: 11250, y: 400 },
    { type: 'chicken', x: 12050, y: 360 },
    { type: 'chicken', x: 13950, y: 340 },

    // ===== S4 — Skyway: chickens guarding the peaks =====
    { type: 'chicken', x: 16400, y: 500 },
    { type: 'chicken', x: 17270, y: 270 },      // stair
    { type: 'chicken', x: 17900, y: 210 },      // ledge
    { type: 'chicken', x: 18900, y: 150 },      // VERY TOP — bold stomp!
    { type: 'chicken', x: 19610, y: 190 },
    { type: 'chicken', x: 20410, y: 330 },
    { type: 'chicken', x: 21270, y: 450 },
    { type: 'chicken', x: 22000, y: 360 },
    { type: 'chicken', x: 22380, y: 300 },
    { type: 'chicken', x: 22800, y: 500 },

    // ===== S5 — Chicken Coop Frenzy: dense everywhere =====
    { type: 'chicken', x: 23200, y: 500 },
    { type: 'chicken', x: 23400, y: 420 },
    { type: 'chicken', x: 23800, y: 500 },
    { type: 'chicken', x: 24250, y: 340 },
    { type: 'chicken', x: 24500, y: 500 },
    { type: 'chicken', x: 25200, y: 500 },
    { type: 'chicken', x: 25550, y: 360 },
    { type: 'chicken', x: 26100, y: 500 },
    { type: 'chicken', x: 26460, y: 280 },
    { type: 'chicken', x: 27000, y: 500 },
    { type: 'chicken', x: 27430, y: 380 },
    { type: 'chicken', x: 27900, y: 500 },
    { type: 'chicken', x: 28350, y: 400 },
    { type: 'chicken', x: 28900, y: 500 },
    { type: 'chicken', x: 29550, y: 500 },
    { type: 'chicken', x: 30100, y: 360 },
    { type: 'chicken', x: 30600, y: 500 },
    { type: 'chicken', x: 30750, y: 320 },
    { type: 'chicken', x: 31300, y: 500 },
    { type: 'chicken', x: 31900, y: 400 },
    { type: 'chicken', x: 32400, y: 500 },

    // ===== S6 — Final Sprint, keep them honest =====
    { type: 'chicken', x: 33200, y: 500 },
    { type: 'chicken', x: 33850, y: 360 },
    { type: 'chicken', x: 34500, y: 500 },
    { type: 'chicken', x: 35200, y: 500 },
    { type: 'chicken', x: 35900, y: 360 },
    { type: 'chicken', x: 36250, y: 320 },     // peak of finale staircase
    { type: 'chicken', x: 36950, y: 500 },
    { type: 'chicken', x: 37500, y: 500 },
    { type: 'chicken', x: 38200, y: 500 },
    { type: 'chicken', x: 39000, y: 500 },
  ],
};
