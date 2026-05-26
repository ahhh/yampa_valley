// Yampa Valley — HARD level
// 80 000 px wide — twice the previous Hard length and twice the previous
// challenge. All three enemy types appear: chickens are the patrol baseline,
// cows are heavy ground threats with wide patrols, and mushrooms are small
// fast obstacles that punish lazy stomp timing.

window.YAMPA_LEVEL_HARD = {
  width: 80000,
  height: 540,
  finishX: 79800,

  sections: [
    { name: 'Long Warmup',          startX:     0, color: '#9ed16a' },
    { name: 'Cascading Momentum',   startX:  9000, color: '#7dc05b' },
    { name: 'Mud Gauntlet',         startX: 22000, color: '#8b6a3a' },
    { name: 'Skyway',               startX: 38000, color: '#86b5d4' },
    { name: 'Chicken Coop Frenzy',  startX: 55000, color: '#d6a04f' },
    { name: 'Final Sprint',         startX: 72000, color: '#e8c674' },
  ],

  terrain: [
    // ===== S1 (0–9000): Long Warmup =====
    { x:     0, y: 500, w: 9000, h: 200, surface: 'grass' },
    { x:   600, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x:   950, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x:  1300, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x:  1700, y: 400, w:  260, h:  20, surface: 'dirt'  },
    { x:  2100, y: 340, w:  260, h:  20, surface: 'dirt'  },
    { x:  2500, y: 400, w:  260, h:  20, surface: 'dirt'  },
    { x:  2900, y: 440, w:  260, h:  20, surface: 'dirt'  },
    { x:  3350, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x:  3700, y: 370, w:  220, h:  20, surface: 'dirt'  },
    { x:  4050, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x:  4500, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x:  4900, y: 340, w:  240, h:  20, surface: 'dirt'  },
    { x:  5300, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x:  5800, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x:  6200, y: 320, w:  240, h:  20, surface: 'dirt'  },
    { x:  6600, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x:  7100, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x:  7500, y: 360, w:  240, h:  20, surface: 'dirt'  },
    { x:  7900, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x:  8400, y: 400, w:  240, h:  20, surface: 'dirt'  },

    // ===== S2 (9000–22000): Cascading Momentum — long chains =====
    { x:  9000, y: 500, w: 13000, h: 200, surface: 'grass' },
    // chain 1: zig-zag ascending
    { x:  9300, y: 440, w:  200, h:  20, surface: 'dirt'  },
    { x:  9600, y: 380, w:  200, h:  20, surface: 'dirt'  },
    { x:  9900, y: 320, w:  200, h:  20, surface: 'dirt'  },
    { x: 10200, y: 260, w:  220, h:  20, surface: 'dirt'  },
    { x: 10500, y: 320, w:  200, h:  20, surface: 'dirt'  },
    { x: 10800, y: 380, w:  200, h:  20, surface: 'dirt'  },
    { x: 11100, y: 440, w:  200, h:  20, surface: 'dirt'  },
    // chain 2: tall peak
    { x: 11600, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 11950, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 12300, y: 280, w:  240, h:  20, surface: 'dirt'  },
    { x: 12650, y: 220, w:  300, h:  20, surface: 'dirt'  },  // peak A — top reward
    { x: 13050, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 13400, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 13750, y: 400, w:  220, h:  20, surface: 'dirt'  },
    // chain 3: wide hops
    { x: 14200, y: 440, w:  200, h:  20, surface: 'dirt'  },
    { x: 14600, y: 400, w:  200, h:  20, surface: 'dirt'  },
    { x: 15000, y: 440, w:  200, h:  20, surface: 'dirt'  },
    // chain 4: another peak
    { x: 15500, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 15850, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 16200, y: 280, w:  240, h:  20, surface: 'dirt'  },
    { x: 16550, y: 220, w:  300, h:  20, surface: 'dirt'  },  // peak B
    { x: 16950, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 17300, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 17650, y: 400, w:  220, h:  20, surface: 'dirt'  },
    // chain 5: tight wide-gap final
    { x: 18100, y: 440, w:  200, h:  20, surface: 'dirt'  },
    { x: 18500, y: 400, w:  200, h:  20, surface: 'dirt'  },
    { x: 18900, y: 440, w:  200, h:  20, surface: 'dirt'  },
    { x: 19400, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 19800, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 20200, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 20700, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x: 21200, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 21600, y: 360, w:  220, h:  20, surface: 'dirt'  },

    // ===== S3 (22000–38000): Mud Gauntlet — 8 patches, mushrooms appear =====
    { x: 22000, y: 500, w:  500, h: 200, surface: 'grass' },
    { x: 22500, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 1
    { x: 22600, y: 500, w:  700, h: 200, surface: 'grass' },
    { x: 23300, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 2
    { x: 23400, y: 500, w:  800, h: 200, surface: 'grass' },
    { x: 24200, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 3
    { x: 24300, y: 500, w:  900, h: 200, surface: 'grass' },
    { x: 25200, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 4
    { x: 25300, y: 500, w: 1100, h: 200, surface: 'grass' },
    { x: 26400, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 5
    { x: 26500, y: 500, w: 1100, h: 200, surface: 'grass' },
    { x: 27600, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 6
    { x: 27700, y: 500, w: 1200, h: 200, surface: 'grass' },
    { x: 28900, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 7
    { x: 29000, y: 500, w: 1400, h: 200, surface: 'grass' },
    { x: 30400, y: 500, w:  100, h: 200, surface: 'mud'   },  // patch 8
    { x: 30500, y: 500, w: 7500, h: 200, surface: 'grass' },
    // upper escape route platforms
    { x: 22700, y: 380, w:  280, h:  20, surface: 'dirt'  },
    { x: 23500, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 24350, y: 340, w:  280, h:  20, surface: 'dirt'  },
    { x: 25350, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 26550, y: 340, w:  280, h:  20, surface: 'dirt'  },
    { x: 27750, y: 320, w:  280, h:  20, surface: 'dirt'  },
    { x: 29050, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 30550, y: 340, w:  280, h:  20, surface: 'dirt'  },
    // tail through second half of S3
    { x: 31500, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x: 32000, y: 340, w:  240, h:  20, surface: 'dirt'  },
    { x: 32500, y: 280, w:  240, h:  20, surface: 'dirt'  },
    { x: 33000, y: 340, w:  240, h:  20, surface: 'dirt'  },
    { x: 33500, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x: 34100, y: 380, w:  240, h:  20, surface: 'dirt'  },
    { x: 34600, y: 320, w:  240, h:  20, surface: 'dirt'  },
    { x: 35100, y: 380, w:  240, h:  20, surface: 'dirt'  },
    { x: 35700, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 36200, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x: 36700, y: 320, w:  240, h:  20, surface: 'dirt'  },
    { x: 37200, y: 380, w:  220, h:  20, surface: 'dirt'  },

    // ===== S4 (38000–55000): Skyway — high platform chains =====
    { x: 38000, y: 500, w: 17000, h: 200, surface: 'grass' },
    // ascending stair
    { x: 38200, y: 450, w:  220, h:  20, surface: 'dirt'  },
    { x: 38520, y: 390, w:  220, h:  20, surface: 'dirt'  },
    { x: 38840, y: 330, w:  220, h:  20, surface: 'dirt'  },
    { x: 39160, y: 270, w:  220, h:  20, surface: 'dirt'  },
    { x: 39480, y: 210, w:  220, h:  20, surface: 'dirt'  },
    // sky chain — narrow tightly-spaced platforms
    { x: 39820, y: 210, w:  180, h:  20, surface: 'dirt'  },
    { x: 40150, y: 190, w:  180, h:  20, surface: 'dirt'  },
    { x: 40480, y: 170, w:  180, h:  20, surface: 'dirt'  },
    { x: 40810, y: 150, w:  240, h:  20, surface: 'dirt'  },  // very top peak
    { x: 41200, y: 170, w:  180, h:  20, surface: 'dirt'  },
    { x: 41530, y: 190, w:  180, h:  20, surface: 'dirt'  },
    { x: 41860, y: 210, w:  180, h:  20, surface: 'dirt'  },
    // descent
    { x: 42200, y: 270, w:  220, h:  20, surface: 'dirt'  },
    { x: 42520, y: 330, w:  220, h:  20, surface: 'dirt'  },
    { x: 42840, y: 390, w:  220, h:  20, surface: 'dirt'  },
    { x: 43160, y: 450, w:  220, h:  20, surface: 'dirt'  },
    // second skyway
    { x: 43600, y: 420, w:  200, h:  20, surface: 'dirt'  },
    { x: 43940, y: 360, w:  200, h:  20, surface: 'dirt'  },
    { x: 44280, y: 300, w:  200, h:  20, surface: 'dirt'  },
    { x: 44620, y: 240, w:  260, h:  20, surface: 'dirt'  },
    { x: 44980, y: 300, w:  200, h:  20, surface: 'dirt'  },
    { x: 45320, y: 360, w:  200, h:  20, surface: 'dirt'  },
    { x: 45660, y: 420, w:  200, h:  20, surface: 'dirt'  },
    // third skyway
    { x: 46100, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 46450, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 46800, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 47150, y: 220, w:  280, h:  20, surface: 'dirt'  },  // tall peak
    { x: 47550, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 47900, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 48250, y: 400, w:  220, h:  20, surface: 'dirt'  },
    // tail down to S5
    { x: 48800, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 49200, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x: 49600, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 50100, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 50500, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 50900, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 51400, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 51800, y: 380, w:  220, h:  20, surface: 'dirt'  },
    { x: 52200, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 52700, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 53100, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 53500, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x: 54000, y: 420, w:  220, h:  20, surface: 'dirt'  },

    // ===== S5 (55000–72000): Chicken Coop Frenzy — all enemy types =====
    { x: 55000, y: 500, w: 11000, h: 200, surface: 'grass' },
    { x: 60000, y: 500, w:  100, h: 200, surface: 'mud'   },  // rescue patch 1
    { x: 60100, y: 500, w: 4900, h: 200, surface: 'grass' },
    { x: 65000, y: 500, w:  100, h: 200, surface: 'mud'   },  // rescue patch 2
    { x: 65100, y: 500, w: 6900, h: 200, surface: 'grass' },
    // upper paths — chained platforms
    { x: 55200, y: 420, w:  300, h:  20, surface: 'dirt'  },
    { x: 55650, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 56100, y: 340, w:  300, h:  20, surface: 'dirt'  },
    { x: 56550, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 57000, y: 420, w:  300, h:  20, surface: 'dirt'  },
    { x: 57450, y: 360, w:  300, h:  20, surface: 'dirt'  },
    { x: 57900, y: 320, w:  300, h:  20, surface: 'dirt'  },
    { x: 58350, y: 280, w:  300, h:  20, surface: 'dirt'  },  // mid height reward
    { x: 58800, y: 320, w:  300, h:  20, surface: 'dirt'  },
    { x: 59250, y: 380, w:  300, h:  20, surface: 'dirt'  },
    { x: 59700, y: 440, w:  300, h:  20, surface: 'dirt'  },
    // section 2
    { x: 60200, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 60800, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 61400, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 62000, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 62600, y: 320, w:  280, h:  20, surface: 'dirt'  },
    { x: 63200, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 63800, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 64400, y: 450, w:  280, h:  20, surface: 'dirt'  },
    // section 3
    { x: 65200, y: 420, w:  280, h:  20, surface: 'dirt'  },
    { x: 65700, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 66200, y: 300, w:  280, h:  20, surface: 'dirt'  },
    { x: 66700, y: 240, w:  280, h:  20, surface: 'dirt'  },  // height reward
    { x: 67200, y: 300, w:  280, h:  20, surface: 'dirt'  },
    { x: 67700, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x: 68200, y: 420, w:  280, h:  20, surface: 'dirt'  },
    { x: 68700, y: 450, w:  280, h:  20, surface: 'dirt'  },
    { x: 69200, y: 420, w:  280, h:  20, surface: 'dirt'  },
    { x: 69700, y: 380, w:  280, h:  20, surface: 'dirt'  },
    { x: 70200, y: 420, w:  280, h:  20, surface: 'dirt'  },
    { x: 70700, y: 450, w:  280, h:  20, surface: 'dirt'  },
    { x: 71300, y: 400, w:  280, h:  20, surface: 'dirt'  },
    { x: 71700, y: 440, w:  220, h:  20, surface: 'dirt'  },

    // ===== S6 (72000–80000): Final Sprint =====
    { x: 72000, y: 500, w: 8000, h: 200, surface: 'grass' },
    { x: 75000, y: 500, w:  100, h: 200, surface: 'mud'   },  // final patch
    // hurdle staircase
    { x: 72400, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 72750, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 73100, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 73600, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x: 74000, y: 340, w:  240, h:  20, surface: 'dirt'  },
    { x: 74400, y: 280, w:  240, h:  20, surface: 'dirt'  },
    { x: 74800, y: 340, w:  240, h:  20, surface: 'dirt'  },
    // final tier
    { x: 75500, y: 420, w:  220, h:  20, surface: 'dirt'  },
    { x: 75900, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 76300, y: 300, w:  240, h:  20, surface: 'dirt'  },  // last big peak
    { x: 76700, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 77100, y: 420, w:  220, h:  20, surface: 'dirt'  },
    // home run
    { x: 77600, y: 440, w:  220, h:  20, surface: 'dirt'  },
    { x: 78000, y: 460, w:  220, h:  20, surface: 'dirt'  },
  ],

  decorations: [
    // S1
    { type: 'tree',              x:   400, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:   150, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x:  3200, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x:  4300, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'fence_piece',       x:  6500, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x:  8500, y: 500, depth: 0.95, scale: 0.75 },
    // S2
    { type: 'tree',              x: 10800, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x: 14000, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 17500, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x: 20800, y: 500, depth: 1.00, scale: 0.55 },
    // S3 — fence-flanked mud zones
    { type: 'fence_piece',       x: 22350, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 23150, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 24050, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 25050, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 26250, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 27450, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 28750, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x: 30250, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'tree',              x: 34500, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'tree',              x: 37500, y: 500, depth: 0.95, scale: 0.85 },
    // S4 — sparse foreground because skyway dominates
    { type: 'flower_decoration', x: 38500, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 44500, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 50500, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 53500, y: 500, depth: 0.95, scale: 0.75 },
    // S5 — busy
    { type: 'fence_piece',       x: 55400, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 58000, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'fence_piece',       x: 60800, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 64000, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'fence_piece',       x: 66500, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 69500, y: 500, depth: 0.95, scale: 0.75 },
    // S6 — homecoming
    { type: 'flower_decoration', x: 72200, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 74000, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x: 76800, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 78300, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x: 79250, y: 500, depth: 1.00, scale: 0.60 },
    { type: 'barn',              x: 79400, y: 500, depth: 1.00, scale: 0.95 },
    { type: 'finish_sign',       x: 79800, y: 500, depth: 1.00, scale: 0.95 },
  ],

  tennisBalls: [
    // S1 — long warmup trail (denser near platforms)
    { x:  200, y: 460 }, { x:  400, y: 460 }, { x:  650, y: 380 },
    { x:  830, y: 320 }, { x: 1010, y: 380 }, { x: 1190, y: 320 },
    { x: 1370, y: 380 }, { x: 1700, y: 340 }, { x: 2080, y: 280 },
    { x: 2230, y: 280 }, { x: 2550, y: 340 }, { x: 2710, y: 380 },
    { x: 2960, y: 380 }, { x: 3120, y: 380 }, { x: 3400, y: 360 },
    { x: 3580, y: 360 }, { x: 3760, y: 310 }, { x: 4100, y: 360 },
    { x: 4280, y: 360 }, { x: 4600, y: 340 }, { x: 4960, y: 280 },
    { x: 5360, y: 340 }, { x: 5860, y: 320 }, { x: 6260, y: 260 },
    { x: 6660, y: 320 }, { x: 7160, y: 360 }, { x: 7560, y: 300 },
    { x: 7960, y: 360 }, { x: 8460, y: 340 }, { x: 8800, y: 460 },

    // S2 — multi-peak staircase
    { x:  9050, y: 460 }, { x:  9200, y: 460 },
    { x:  9380, y: 380 }, { x:  9680, y: 320 }, { x:  9980, y: 260 },
    { x: 10280, y: 200, super: true },                              // peak chain 1
    { x: 10580, y: 260 }, { x: 10880, y: 320 }, { x: 11180, y: 380 },
    { x: 11260, y: 460 },
    { x: 11680, y: 340 }, { x: 12010, y: 280 }, { x: 12360, y: 220 },
    { x: 12700, y: 160 }, { x: 12800, y: 160 },
    { x: 12900, y: 160, super: true },                              // top of peak A
    { x: 13100, y: 220 }, { x: 13450, y: 280 }, { x: 13800, y: 340 },
    { x: 13950, y: 460 },
    { x: 14250, y: 380 }, { x: 14650, y: 340 }, { x: 15050, y: 380 },
    { x: 15300, y: 460 },
    { x: 15580, y: 340 }, { x: 15920, y: 280 }, { x: 16270, y: 220 },
    { x: 16640, y: 160 }, { x: 16770, y: 160 },                     // peak B
    { x: 17000, y: 220 }, { x: 17370, y: 280 }, { x: 17720, y: 340 },
    { x: 18000, y: 460 },
    { x: 18180, y: 380 }, { x: 18580, y: 340 }, { x: 18980, y: 380 },
    { x: 19250, y: 460 },
    { x: 19500, y: 340 }, { x: 19880, y: 280 }, { x: 20300, y: 340 },
    { x: 20770, y: 380 }, { x: 21280, y: 340 }, { x: 21670, y: 300 },

    // S3 — mud gauntlet: every patch has low balls + upper route balls
    { x: 22100, y: 460 }, { x: 22300, y: 460 },
    { x: 22520, y: 475 }, { x: 22570, y: 475 },                     // patch 1
    { x: 22800, y: 340 }, { x: 22950, y: 460 },
    { x: 23320, y: 475 }, { x: 23370, y: 475 },                     // patch 2
    { x: 23600, y: 320 }, { x: 23800, y: 460 },
    { x: 24220, y: 475 }, { x: 24270, y: 475 },                     // patch 3
    { x: 24500, y: 300 }, { x: 24800, y: 460 },
    { x: 25220, y: 475 }, { x: 25270, y: 475 },                     // patch 4
    { x: 25500, y: 320 }, { x: 25900, y: 460 },
    { x: 26420, y: 475 }, { x: 26470, y: 475 },                     // patch 5
    { x: 26700, y: 300 }, { x: 27100, y: 460 },
    { x: 27620, y: 475 }, { x: 27670, y: 475 },                     // patch 6
    { x: 27900, y: 280 }, { x: 28300, y: 460 },
    { x: 28920, y: 475 }, { x: 28970, y: 475 },                     // patch 7
    { x: 29200, y: 320 }, { x: 29700, y: 460 },
    { x: 30420, y: 475 }, { x: 30470, y: 475 },                     // patch 8
    { x: 30700, y: 300 }, { x: 31200, y: 460 },
    // mid-section S3
    { x: 31600, y: 360 }, { x: 32050, y: 300 }, { x: 32600, y: 240 },
    { x: 33100, y: 300 }, { x: 33600, y: 360 }, { x: 34150, y: 340 },
    { x: 34700, y: 280 }, { x: 35200, y: 340 }, { x: 35800, y: 380 },
    { x: 36280, y: 340 }, { x: 36800, y: 280 }, { x: 37280, y: 340 },
    { x: 37700, y: 460 },

    // S4 — Skyway: three peaks plus connecting platforms
    { x: 38100, y: 460 }, { x: 38280, y: 410 }, { x: 38600, y: 350 },
    { x: 38900, y: 290 }, { x: 39220, y: 230 }, { x: 39550, y: 170 },
    { x: 39900, y: 170 }, { x: 40230, y: 150 }, { x: 40560, y: 130 },
    { x: 40880, y: 110 }, { x: 40940, y: 110, super: true },        // very top peak
    { x: 41280, y: 130 }, { x: 41610, y: 150 }, { x: 41940, y: 170 },
    { x: 42290, y: 230 }, { x: 42610, y: 290 }, { x: 42930, y: 350 },
    { x: 43250, y: 410 }, { x: 43500, y: 460 },
    // second skyway
    { x: 43700, y: 380 }, { x: 44030, y: 320 }, { x: 44370, y: 260 },
    { x: 44730, y: 200, super: true },                              // mid peak
    { x: 45070, y: 260 }, { x: 45420, y: 320 }, { x: 45740, y: 380 },
    { x: 45950, y: 460 },
    // third skyway
    { x: 46200, y: 360 }, { x: 46540, y: 300 }, { x: 46900, y: 240 },
    { x: 47260, y: 180 }, { x: 47330, y: 180 },                     // tall peak
    { x: 47650, y: 240 }, { x: 48000, y: 300 }, { x: 48350, y: 360 },
    { x: 48600, y: 460 },
    // tail down
    { x: 48900, y: 380 }, { x: 49300, y: 340 }, { x: 49700, y: 380 },
    { x: 50000, y: 460 },
    { x: 50200, y: 360 }, { x: 50600, y: 300 }, { x: 51000, y: 360 },
    { x: 51500, y: 380 }, { x: 51900, y: 340 }, { x: 52300, y: 380 },
    { x: 52800, y: 360 }, { x: 53200, y: 300 }, { x: 53600, y: 360 },
    { x: 54100, y: 380 }, { x: 54600, y: 460 }, { x: 54900, y: 460 },

    // S5 — Frenzy: dense balls on both routes
    { x: 55100, y: 460 }, { x: 55300, y: 380 }, { x: 55750, y: 340 },
    { x: 56200, y: 300 }, { x: 56650, y: 340 }, { x: 57100, y: 380 },
    { x: 57550, y: 320 }, { x: 58000, y: 280 }, { x: 58450, y: 240 },
    { x: 58500, y: 240, super: true },                              // mid-S5 reward
    { x: 58900, y: 280 }, { x: 59350, y: 340 }, { x: 59800, y: 400 },
    // ground baseline
    { x: 55500, y: 460 }, { x: 56500, y: 460 }, { x: 57500, y: 460 },
    { x: 58500, y: 460 }, { x: 59500, y: 460 }, { x: 60500, y: 460 },
    // patch + over
    { x: 60020, y: 475 }, { x: 60070, y: 475 },                     // rescue patch 1
    { x: 60300, y: 360 }, { x: 60900, y: 320 }, { x: 61500, y: 360 },
    { x: 62100, y: 320 }, { x: 62700, y: 280 }, { x: 63300, y: 320 },
    { x: 63900, y: 360 }, { x: 64500, y: 410 },
    { x: 61500, y: 460 }, { x: 62500, y: 460 }, { x: 63500, y: 460 },
    { x: 64500, y: 460 },
    { x: 65020, y: 475 }, { x: 65070, y: 475 },                     // rescue patch 2
    { x: 65300, y: 380 }, { x: 65800, y: 320 }, { x: 66300, y: 260 },
    { x: 66800, y: 200, super: true },                              // S5 height
    { x: 67300, y: 260 }, { x: 67800, y: 320 }, { x: 68300, y: 380 },
    { x: 66000, y: 460 }, { x: 67000, y: 460 }, { x: 68000, y: 460 },
    { x: 68800, y: 410 }, { x: 69300, y: 380 }, { x: 69800, y: 340 },
    { x: 70300, y: 380 }, { x: 70800, y: 410 }, { x: 71400, y: 360 },
    { x: 71800, y: 400 },

    // S6 — final sprint with dense rewards
    { x: 72100, y: 460 }, { x: 72300, y: 460 },
    { x: 72500, y: 380 }, { x: 72850, y: 320 }, { x: 73200, y: 380 },
    { x: 73500, y: 460 },
    { x: 73700, y: 360 }, { x: 74100, y: 300 }, { x: 74500, y: 240 },
    { x: 74600, y: 240, super: true },                              // S6 climb peak
    { x: 74900, y: 300 }, { x: 75020, y: 475 }, { x: 75070, y: 475 },  // final mud
    { x: 75600, y: 380 }, { x: 76000, y: 320 },
    { x: 76400, y: 260, super: true },                              // last big peak
    { x: 76800, y: 320 }, { x: 77200, y: 380 }, { x: 77700, y: 400 },
    { x: 78100, y: 420 }, { x: 78400, y: 460 }, { x: 78700, y: 460 },
    { x: 79000, y: 460 }, { x: 79300, y: 460 }, { x: 79600, y: 460 },
    { x: 79750, y: 460 },
  ],

  enemies: [
    // S1 — Long Warmup. Already throwing platform stomps + a cow on the ground.
    { type: 'chicken', x:   850, y: 500 },
    { type: 'chicken', x:  1350, y: 500 },
    { type: 'chicken', x:  2160, y: 340 },
    { type: 'chicken', x:  2700, y: 500 },
    { type: 'cow',     x:  3500, y: 500 },
    { type: 'chicken', x:  4250, y: 500 },
    { type: 'chicken', x:  4960, y: 340 },
    { type: 'cow',     x:  5800, y: 500 },
    { type: 'chicken', x:  6260, y: 320 },
    { type: 'chicken', x:  7100, y: 420 },
    { type: 'chicken', x:  7900, y: 420 },
    { type: 'cow',     x:  8600, y: 500 },

    // S2 — Cascading Momentum. Chickens on staircases, cows guarding gaps,
    // mushrooms introduced mid-section as fast small obstacles.
    { type: 'chicken', x:  9200, y: 500 },
    { type: 'chicken', x:  9900, y: 320 },
    { type: 'chicken', x: 10280, y: 260 },                          // peak 1
    { type: 'mushroom', x: 10800, y: 380 },                         // first mushroom!
    { type: 'cow',     x: 11500, y: 500 },
    { type: 'chicken', x: 11950, y: 340 },
    { type: 'chicken', x: 12800, y: 220 },                          // centered on peak A platform
    { type: 'mushroom', x: 13400, y: 340 },
    { type: 'chicken', x: 14000, y: 500 },
    { type: 'cow',     x: 14700, y: 500 },
    { type: 'mushroom', x: 14700, y: 400 },
    { type: 'chicken', x: 15400, y: 500 },
    { type: 'chicken', x: 16270, y: 280 },
    { type: 'chicken', x: 16560, y: 220 },                          // peak B
    { type: 'mushroom', x: 17300, y: 340 },
    { type: 'cow',     x: 18100, y: 500 },
    { type: 'chicken', x: 18500, y: 400 },
    { type: 'chicken', x: 19200, y: 500 },
    { type: 'cow',     x: 20200, y: 500 },
    { type: 'chicken', x: 20700, y: 440 },
    { type: 'mushroom', x: 21300, y: 400 },
    { type: 'chicken', x: 21800, y: 500 },

    // S3 — Mud Gauntlet. Mushrooms are everywhere here (fast obstacles).
    { type: 'chicken', x: 22300, y: 500 },
    { type: 'mushroom', x: 22650, y: 500 },                         // right after patch 1
    { type: 'chicken', x: 23080, y: 500 },
    { type: 'mushroom', x: 23450, y: 500 },                         // right after patch 2
    { type: 'cow',     x: 23900, y: 500 },
    { type: 'mushroom', x: 24350, y: 500 },                         // after patch 3
    { type: 'chicken', x: 24700, y: 500 },
    { type: 'mushroom', x: 25350, y: 500 },                         // after patch 4
    { type: 'chicken', x: 25900, y: 500 },
    { type: 'cow',     x: 26200, y: 500 },
    { type: 'mushroom', x: 26550, y: 500 },                         // after patch 5
    { type: 'chicken', x: 27200, y: 500 },
    { type: 'mushroom', x: 27750, y: 500 },                         // after patch 6
    { type: 'chicken', x: 28500, y: 500 },
    { type: 'mushroom', x: 29050, y: 500 },                         // after patch 7
    { type: 'cow',     x: 29800, y: 500 },
    { type: 'mushroom', x: 30550, y: 500 },                         // after patch 8
    { type: 'chicken', x: 31000, y: 500 },
    { type: 'chicken', x: 31600, y: 400 },
    { type: 'mushroom', x: 32500, y: 280 },
    { type: 'cow',     x: 33500, y: 500 },
    { type: 'chicken', x: 34100, y: 380 },
    { type: 'mushroom', x: 34600, y: 320 },
    { type: 'chicken', x: 35400, y: 500 },
    { type: 'cow',     x: 36100, y: 500 },
    { type: 'mushroom', x: 36700, y: 320 },
    { type: 'chicken', x: 37300, y: 380 },

    // S4 — Skyway. Chickens guarding peaks, cows on bigger platforms, mushrooms scatter.
    { type: 'chicken', x: 38400, y: 500 },
    { type: 'chicken', x: 39160, y: 270 },
    { type: 'mushroom', x: 39820, y: 210 },
    { type: 'chicken', x: 40500, y: 170 },
    { type: 'chicken', x: 40900, y: 150 },                          // VERY TOP
    { type: 'mushroom', x: 41530, y: 190 },
    { type: 'chicken', x: 42630, y: 330 },                          // centered on descent platform
    { type: 'cow',     x: 43100, y: 500 },
    { type: 'chicken', x: 44000, y: 360 },
    { type: 'mushroom', x: 44700, y: 240 },
    { type: 'chicken', x: 45400, y: 360 },
    { type: 'cow',     x: 46200, y: 500 },
    { type: 'mushroom', x: 47000, y: 280 },
    { type: 'chicken', x: 47200, y: 220 },
    { type: 'chicken', x: 48000, y: 340 },
    { type: 'cow',     x: 49000, y: 500 },
    { type: 'chicken', x: 50000, y: 500 },
    { type: 'mushroom', x: 50600, y: 340 },
    { type: 'chicken', x: 51400, y: 420 },
    { type: 'cow',     x: 52200, y: 500 },
    { type: 'chicken', x: 53210, y: 340 },                          // moved onto its tail platform
    { type: 'mushroom', x: 54110, y: 420 },                         // centered on tail platform
    { type: 'chicken', x: 54500, y: 500 },

    // S5 — Coop Frenzy. Maximum density across both routes.
    { type: 'chicken', x: 55200, y: 500 },
    { type: 'chicken', x: 55400, y: 420 },
    { type: 'cow',     x: 55900, y: 500 },
    { type: 'chicken', x: 56150, y: 340 },
    { type: 'mushroom', x: 56700, y: 500 },
    { type: 'cow',     x: 57000, y: 500 },
    { type: 'chicken', x: 57500, y: 360 },
    { type: 'mushroom', x: 57900, y: 320 },
    { type: 'chicken', x: 58400, y: 280 },                          // height reward
    { type: 'cow',     x: 58800, y: 500 },
    { type: 'mushroom', x: 59250, y: 380 },
    { type: 'chicken', x: 59700, y: 440 },
    { type: 'chicken', x: 60500, y: 500 },
    { type: 'cow',     x: 60800, y: 500 },
    { type: 'mushroom', x: 61400, y: 400 },
    { type: 'chicken', x: 62000, y: 360 },
    { type: 'cow',     x: 62600, y: 500 },
    { type: 'mushroom', x: 63200, y: 360 },
    { type: 'chicken', x: 63800, y: 400 },
    { type: 'cow',     x: 64400, y: 500 },
    { type: 'chicken', x: 65500, y: 500 },
    { type: 'mushroom', x: 65700, y: 360 },
    { type: 'cow',     x: 66200, y: 500 },
    { type: 'chicken', x: 66700, y: 240 },                          // top reward
    { type: 'mushroom', x: 67700, y: 360 },
    { type: 'cow',     x: 68500, y: 500 },
    { type: 'chicken', x: 69200, y: 420 },
    { type: 'mushroom', x: 69700, y: 380 },
    { type: 'cow',     x: 70200, y: 500 },
    { type: 'chicken', x: 70700, y: 450 },
    { type: 'mushroom', x: 71300, y: 400 },
    { type: 'cow',     x: 71800, y: 500 },

    // S6 — Final Sprint. Final guard wall.
    { type: 'chicken', x: 72400, y: 420 },
    { type: 'cow',     x: 72800, y: 500 },
    { type: 'mushroom', x: 73200, y: 420 },
    { type: 'chicken', x: 73800, y: 500 },
    { type: 'mushroom', x: 74400, y: 280 },
    { type: 'chicken', x: 74800, y: 340 },
    { type: 'cow',     x: 75500, y: 500 },
    { type: 'chicken', x: 76300, y: 300 },                          // last peak
    { type: 'mushroom', x: 76700, y: 360 },
    { type: 'chicken', x: 77100, y: 420 },
    { type: 'cow',     x: 78500, y: 500 },
    { type: 'chicken', x: 79200, y: 500 },
    { type: 'chicken', x: 79600, y: 500 },
  ],
};
