// Yampa Valley — MEDIUM level
// Same 20 000 px world width as Easy, but the terrain layout demands more
// platforming, the chickens patrol where you want to land, mud patches are
// placed to reward planning, and the upper routes mix risk with reward.

window.YAMPA_LEVEL_MEDIUM = {
  width: 20000,
  height: 540,
  finishX: 19800,

  sections: [
    { name: 'Gentle Start',       startX:     0, color: '#9ed16a' },
    { name: 'Momentum Training',  startX:  2500, color: '#7dc05b' },
    { name: 'Mud Roll Zone',      startX:  6000, color: '#8b6a3a' },
    { name: 'High-Speed Route',   startX:  9500, color: '#86b5d4' },
    { name: 'Enemy Challenge',    startX: 13500, color: '#d6a04f' },
    { name: 'Finish Stretch',     startX: 17500, color: '#e8c674' },
  ],

  terrain: [
    // ===== S1 (0–2500): early intro with one platform challenge =====
    { x:     0, y: 460, w: 2500, h: 200, surface: 'grass' },
    // mid-air platform for an optional reward arc
    { x:  1400, y: 380, w:  260, h:  20, surface: 'dirt'  },
    { x:  1850, y: 340, w:  220, h:  20, surface: 'dirt'  },

    // ===== S2 (2500–6000): zig-zag staircase + jump arcs =====
    { x:  2500, y: 460, w: 3500, h: 200, surface: 'grass' },
    // ascending staircase 1
    { x:  2900, y: 400, w:  220, h:  20, surface: 'dirt'  },
    { x:  3220, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x:  3550, y: 280, w:  280, h:  20, surface: 'dirt'  },  // peak
    { x:  3900, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x:  4200, y: 400, w:  220, h:  20, surface: 'dirt'  },
    // gap, then a second smaller staircase
    { x:  4750, y: 380, w:  200, h:  20, surface: 'dirt'  },
    { x:  5070, y: 320, w:  220, h:  20, surface: 'dirt'  },
    { x:  5400, y: 380, w:  200, h:  20, surface: 'dirt'  },

    // ===== S3 (6000–9500): three sporadic mud patches with chickens =====
    { x:  6000, y: 460, w:  450, h: 200, surface: 'grass' },
    { x:  6450, y: 460, w:   90, h: 200, surface: 'mud'   },   // patch 1
    { x:  6540, y: 460, w:  710, h: 200, surface: 'grass' },
    { x:  7250, y: 460, w:  100, h: 200, surface: 'mud'   },   // patch 2
    { x:  7350, y: 460, w:  900, h: 200, surface: 'grass' },
    { x:  8250, y: 460, w:  100, h: 200, surface: 'mud'   },   // patch 3
    { x:  8350, y: 460, w: 1150, h: 200, surface: 'grass' },
    // optional upper route through this section
    { x:  6700, y: 360, w:  280, h:  20, surface: 'dirt'  },
    { x:  7600, y: 340, w:  280, h:  20, surface: 'dirt'  },
    { x:  8500, y: 360, w:  280, h:  20, surface: 'dirt'  },

    // ===== S4 (9500–13500): tall stair to a high reward platform =====
    { x:  9500, y: 460, w: 4000, h: 200, surface: 'grass' },
    { x: 10000, y: 400, w:  240, h:  20, surface: 'dirt'  },
    { x: 10350, y: 340, w:  220, h:  20, surface: 'dirt'  },
    { x: 10680, y: 280, w:  220, h:  20, surface: 'dirt'  },
    { x: 11000, y: 220, w:  240, h:  20, surface: 'dirt'  },
    { x: 11400, y: 180, w:  600, h:  20, surface: 'dirt'  },  // top reward platform
    // descending stair
    { x: 12100, y: 240, w:  220, h:  20, surface: 'dirt'  },
    { x: 12430, y: 300, w:  220, h:  20, surface: 'dirt'  },
    { x: 12750, y: 360, w:  220, h:  20, surface: 'dirt'  },
    { x: 13060, y: 410, w:  220, h:  20, surface: 'dirt'  },

    // ===== S5 (13500–17500): branching, dense chickens, rescue mud =====
    { x: 13500, y: 460, w: 1500, h: 200, surface: 'grass' },
    { x: 15000, y: 460, w:  100, h: 200, surface: 'mud'   },   // patch 4 (rescue)
    { x: 15100, y: 460, w: 2400, h: 200, surface: 'grass' },
    // upper path A (jumps required between platforms)
    { x: 13700, y: 360, w:  300, h:  20, surface: 'dirt'  },
    { x: 14150, y: 320, w:  280, h:  20, surface: 'dirt'  },
    { x: 14600, y: 300, w:  280, h:  20, surface: 'dirt'  },
    // upper path B
    { x: 15400, y: 340, w:  300, h:  20, surface: 'dirt'  },
    { x: 15850, y: 290, w:  280, h:  20, surface: 'dirt'  },
    { x: 16300, y: 240, w:  280, h:  20, surface: 'dirt'  },  // skill-jump reward
    { x: 16750, y: 290, w:  280, h:  20, surface: 'dirt'  },
    { x: 17200, y: 340, w:  280, h:  20, surface: 'dirt'  },

    // ===== S6 (17500–20000): final hurdles + descent to finish =====
    { x: 17500, y: 460, w: 2500, h: 200, surface: 'grass' },
    { x: 17900, y: 390, w:  200, h:  20, surface: 'dirt'  },
    { x: 18250, y: 350, w:  200, h:  20, surface: 'dirt'  },
    { x: 18600, y: 390, w:  200, h:  20, surface: 'dirt'  },
    { x: 18950, y: 430, w:  200, h:  20, surface: 'dirt'  },
  ],

  decorations: [
    // S1
    { type: 'tree',              x:   500, y: 460, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:   200, y: 460, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x:   900, y: 460, depth: 1.00, scale: 0.55 },
    { type: 'fence_piece',       x:  2200, y: 460, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x:  2350, y: 460, depth: 0.95, scale: 0.80 },
    // S2 — leaner so platforms read
    { type: 'flower_decoration', x:  4500, y: 460, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x:  5800, y: 460, depth: 0.95, scale: 0.70 },
    // S3 — fences flank the mud zone
    { type: 'fence_piece',       x:  6080, y: 460, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x:  6320, y: 460, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x:  8400, y: 460, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x:  9100, y: 460, depth: 0.95, scale: 0.85 },
    // S4 — sparse
    { type: 'flower_decoration', x:  9700, y: 460, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 13200, y: 460, depth: 1.00, scale: 0.55 },
    // S5 — busy framing
    { type: 'fence_piece',       x: 13700, y: 460, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 14050, y: 460, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 15200, y: 460, depth: 0.95, scale: 0.75 },
    { type: 'fence_piece',       x: 16800, y: 460, depth: 1.00, scale: 0.65 },
    // S6 — homecoming
    { type: 'flower_decoration', x: 17600, y: 460, depth: 1.00, scale: 0.55 },
    { type: 'tree',              x: 18100, y: 460, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x: 19250, y: 460, depth: 1.00, scale: 0.60 },
    { type: 'barn',              x: 19400, y: 460, depth: 1.00, scale: 0.95 },
    { type: 'finish_sign',       x: 19800, y: 460, depth: 1.00, scale: 0.95 },
  ],

  tennisBalls: [
    // ===== S1: low intro trail + first arc =====
    { x:  250, y: 420 }, { x:  450, y: 420 }, { x:  650, y: 420 },
    { x:  850, y: 420 }, { x: 1050, y: 420 }, { x: 1250, y: 420 },
    { x: 1450, y: 350 }, { x: 1530, y: 340 }, { x: 1610, y: 350 },  // arc 1
    { x: 1900, y: 310 }, { x: 2000, y: 305 }, { x: 2100, y: 310 },  // arc 2 (higher)
    { x: 2300, y: 420 }, { x: 2450, y: 420 },

    // ===== S2: speed baseline + zig-zag staircase =====
    { x: 2600, y: 420 }, { x: 2800, y: 420 },
    { x: 2980, y: 370 }, { x: 3300, y: 310 }, { x: 3630, y: 250 },  // ascending balls
    { x: 3770, y: 250 }, { x: 3980, y: 310 }, { x: 4280, y: 370 },  // descending
    { x: 4500, y: 420 },
    { x: 4830, y: 350 }, { x: 5150, y: 290 }, { x: 5480, y: 350 }, // second stair
    { x: 5800, y: 420 }, { x: 5950, y: 420 },

    // ===== S3: tight ball clusters over each mud patch =====
    { x: 6100, y: 420 }, { x: 6300, y: 425 },
    { x: 6470, y: 435 }, { x: 6520, y: 435 },          // over patch 1
    { x: 6850, y: 420 }, { x: 7050, y: 420 },
    { x: 7270, y: 435 }, { x: 7330, y: 435 },          // over patch 2
    { x: 7600, y: 420 }, { x: 7950, y: 420 },
    { x: 8270, y: 435 }, { x: 8330, y: 435 },          // over patch 3
    { x: 8600, y: 420 }, { x: 8900, y: 420 }, { x: 9200, y: 420 },
    // optional upper-route balls
    { x: 6800, y: 320 }, { x: 7700, y: 300 }, { x: 8600, y: 320 },

    // ===== S4: staircase reward — each platform has a ball ======
    { x:  9700, y: 420 }, { x:  9900, y: 420 },
    { x: 10100, y: 360 }, { x: 10450, y: 300 },
    { x: 10780, y: 240 }, { x: 11080, y: 180 },
    // top platform sprint — many balls, premium reward
    { x: 11500, y: 140 }, { x: 11650, y: 130 },
    { x: 11800, y: 130 }, { x: 11950, y: 140 },
    // descending balls
    { x: 12200, y: 200 }, { x: 12530, y: 260 },
    { x: 12850, y: 320 }, { x: 13160, y: 370 },
    { x: 13350, y: 420 }, { x: 13450, y: 420 },

    // ===== S5: dense — lower path + branching upper paths =====
    { x: 13550, y: 420 }, { x: 13700, y: 420 }, { x: 13900, y: 420 },
    { x: 14100, y: 420 }, { x: 14300, y: 420 }, { x: 14500, y: 420 },
    { x: 14700, y: 420 }, { x: 14900, y: 420 },
    { x: 15020, y: 435 }, { x: 15070, y: 435 },        // over patch 4
    { x: 15250, y: 420 }, { x: 15550, y: 420 }, { x: 15800, y: 420 },
    { x: 16100, y: 420 }, { x: 16400, y: 420 }, { x: 16700, y: 420 },
    { x: 17000, y: 420 }, { x: 17300, y: 420 },
    // upper paths
    { x: 13850, y: 320 }, { x: 14270, y: 280 }, { x: 14720, y: 260 },
    { x: 15550, y: 300 }, { x: 15970, y: 250 }, { x: 16430, y: 200 },
    { x: 16890, y: 250 }, { x: 17330, y: 300 },

    // ===== S6: dense celebratory trail with descending hops =====
    { x: 17600, y: 420 }, { x: 17800, y: 420 },
    { x: 18000, y: 350 }, { x: 18350, y: 310 }, { x: 18700, y: 350 },
    { x: 19050, y: 390 }, { x: 19200, y: 420 }, { x: 19350, y: 420 },
    { x: 19500, y: 420 }, { x: 19650, y: 420 },
  ],

  enemies: [
    // ===== S1 — chickens after the dog already tasted speed =====
    { type: 'chicken', x:  1700, y: 460 },
    { type: 'chicken', x:  2200, y: 460 },

    // ===== S2 — enemies in gap landings to punish lazy jumps =====
    { type: 'chicken', x:  3100, y: 460 },
    { type: 'chicken', x:  4050, y: 460 },
    { type: 'chicken', x:  4900, y: 460 },
    { type: 'chicken', x:  5700, y: 460 },

    // ===== S3 — right past each mud patch, daring you to use the shield =====
    { type: 'chicken', x:  6680, y: 460 },
    { type: 'chicken', x:  7480, y: 460 },
    { type: 'chicken', x:  8480, y: 460 },

    // ===== S4 — one on a stair platform plus ground patrol =====
    { type: 'chicken', x: 10700, y: 280 },  // on a stair platform
    { type: 'chicken', x: 11700, y: 180 },  // on the top platform — bold stomp
    { type: 'chicken', x: 12900, y: 460 },

    // ===== S5 — dense, mixing ground and platforms =====
    { type: 'chicken', x: 13800, y: 460 },
    { type: 'chicken', x: 14400, y: 460 },
    { type: 'chicken', x: 14250, y: 320 },  // upper path A
    { type: 'chicken', x: 15500, y: 460 },
    { type: 'chicken', x: 16000, y: 290 },  // upper path B
    { type: 'chicken', x: 16500, y: 460 },
    { type: 'chicken', x: 17050, y: 460 },

    // ===== S6 — keep them honest to the finish =====
    { type: 'chicken', x: 17750, y: 460 },
    { type: 'chicken', x: 18550, y: 460 },
    { type: 'chicken', x: 19000, y: 460 },
  ],
};
