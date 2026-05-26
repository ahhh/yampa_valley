// Yampa Valley — EASY level
// Teaches every mechanic in the gentlest way. The original prototype layout.
// Width 20 000 px, sparse enemies, generous platform spacing.

window.YAMPA_LEVEL_EASY = {
  width: 20000,
  height: 540,
  finishX: 19800,

  sections: [
    { name: 'Gentle Start',       startX:     0, color: '#9ed16a' },
    { name: 'Momentum Training',  startX:  3000, color: '#7dc05b' },
    { name: 'Mud Roll Zone',      startX:  6500, color: '#8b6a3a' },
    { name: 'High-Speed Route',   startX:  9500, color: '#86b5d4' },
    { name: 'Enemy Challenge',    startX: 13000, color: '#d6a04f' },
    { name: 'Finish Stretch',     startX: 17000, color: '#e8c674' },
  ],

  // Terrain platforms — axis-aligned rectangles. Top edge is the walkable
  // surface. `surface: 'mud'` grants the muddy shield when the dog rolls
  // across it. Mud patches are intentionally narrow (~90 px) so they're
  // skill hits, not contiguous strips.
  terrain: [
    // S1: gentle grass
    { x:     0, y: 500, w: 3000, h: 200, surface: 'grass' },

    // S2: long open straightaway, small staircase for reward arc
    { x:  3000, y: 500, w: 3500, h: 200, surface: 'grass' },
    { x:  4300, y: 436, w:  220, h:  20, surface: 'dirt'  },
    { x:  4900, y: 400, w:  300, h:  20, surface: 'dirt'  },
    { x:  5450, y: 360, w:  220, h:  20, surface: 'dirt'  },

    // S3: two sporadic mud patches
    { x:  6500, y: 500, w:  200, h: 200, surface: 'grass' },
    { x:  6700, y: 500, w:   90, h: 200, surface: 'mud'   },
    { x:  6790, y: 500, w: 1310, h: 200, surface: 'grass' },
    { x:  8100, y: 500, w:  110, h: 200, surface: 'mud'   },
    { x:  8210, y: 500, w: 1290, h: 200, surface: 'grass' },

    // S4: staircase to a high reward arc
    { x:  9500, y: 500, w: 3500, h: 200, surface: 'grass' },
    { x: 10000, y: 450, w:  260, h:  20, surface: 'dirt'  },
    { x: 10400, y: 400, w:  300, h:  20, surface: 'dirt'  },
    { x: 10850, y: 340, w:  300, h:  20, surface: 'dirt'  },
    { x: 11300, y: 300, w:  650, h:  20, surface: 'dirt'  },
    { x: 12100, y: 360, w:  340, h:  20, surface: 'dirt'  },
    { x: 12550, y: 420, w:  300, h:  20, surface: 'dirt'  },

    // S5: branching, one mud patch mid-section
    { x: 13000, y: 500, w: 1700, h: 200, surface: 'grass' },
    { x: 14700, y: 500, w:   90, h: 200, surface: 'mud'   },
    { x: 14790, y: 500, w: 2210, h: 200, surface: 'grass' },
    { x: 13400, y: 420, w:  500, h:  20, surface: 'dirt'  },
    { x: 14100, y: 380, w:  400, h:  20, surface: 'dirt'  },
    { x: 15300, y: 400, w:  500, h:  20, surface: 'dirt'  },
    { x: 16100, y: 350, w:  500, h:  20, surface: 'dirt'  },

    // S6: open finish
    { x: 17000, y: 500, w: 3000, h: 200, surface: 'grass' },
  ],

  decorations: [
    // S1
    { type: 'tree',              x:   650, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:   400, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x:  1100, y: 500, depth: 1.00, scale: 0.50 },
    { type: 'flower_decoration', x:  1900, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'fence_piece',       x:  2400, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x:  2700, y: 500, depth: 0.95, scale: 0.85 },
    // S2
    { type: 'flower_decoration', x:  3400, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x:  4100, y: 500, depth: 1.00, scale: 0.50 },
    { type: 'tree',              x:  3800, y: 500, depth: 0.95, scale: 0.70 },
    { type: 'tree',              x:  6200, y: 500, depth: 0.95, scale: 0.75 },
    { type: 'flower_decoration', x:  5800, y: 500, depth: 1.00, scale: 0.55 },
    // S3 — fence markers around mud
    { type: 'fence_piece',       x:  6600, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'fence_piece',       x:  8000, y: 500, depth: 1.00, scale: 0.6  },
    { type: 'tree',              x:  8800, y: 500, depth: 0.95, scale: 0.85 },
    // S4 — sparse to let platforms read
    { type: 'flower_decoration', x:  9700, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 12800, y: 500, depth: 1.00, scale: 0.50 },
    // S5 — busier
    { type: 'fence_piece',       x: 13200, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'fence_piece',       x: 13550, y: 500, depth: 1.00, scale: 0.65 },
    { type: 'tree',              x: 14400, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'fence_piece',       x: 16500, y: 500, depth: 1.00, scale: 0.65 },
    // S6 — homecoming
    { type: 'flower_decoration', x: 17400, y: 500, depth: 1.00, scale: 0.55 },
    { type: 'flower_decoration', x: 18000, y: 500, depth: 1.00, scale: 0.50 },
    { type: 'tree',              x: 17800, y: 500, depth: 0.95, scale: 0.80 },
    { type: 'flower_decoration', x: 19200, y: 500, depth: 1.00, scale: 0.60 },
    { type: 'barn',              x: 19350, y: 500, depth: 1.00, scale: 0.95 },
    { type: 'finish_sign',       x: 19800, y: 500, depth: 1.00, scale: 0.95 },
  ],

  tennisBalls: [
    // S1
    { x:  300, y: 460 }, { x:  500, y: 460 }, { x:  700, y: 460 },
    { x:  900, y: 460 }, { x: 1100, y: 460 }, { x: 1300, y: 460 },
    { x: 1500, y: 460 }, { x: 1700, y: 460 }, { x: 1900, y: 460 },
    { x: 2100, y: 460 }, { x: 2300, y: 460 }, { x: 2500, y: 460 },
    { x: 2700, y: 450 }, { x: 2900, y: 440 },
    // S2 — speed-run baseline + step-up arc
    { x: 3100, y: 460 }, { x: 3300, y: 460 }, { x: 3500, y: 460 },
    { x: 3700, y: 460 }, { x: 3900, y: 460 }, { x: 4100, y: 460 },
    { x: 4360, y: 400 }, { x: 4520, y: 360 }, { x: 4720, y: 340 },
    { x: 4940, y: 360 }, { x: 5100, y: 330 }, { x: 5280, y: 310 },
    { x: 5480, y: 320 }, { x: 5670, y: 360 }, { x: 5850, y: 420 },
    { x: 6100, y: 460 }, { x: 6300, y: 460 },
    // S3 — low over mud patches
    { x: 6500, y: 460 }, { x: 6620, y: 470 },
    { x: 6720, y: 475 }, { x: 6760, y: 475 },
    { x: 6900, y: 460 }, { x: 7200, y: 460 }, { x: 7500, y: 460 },
    { x: 7800, y: 460 }, { x: 8000, y: 460 },
    { x: 8120, y: 475 }, { x: 8170, y: 475 },
    { x: 8350, y: 460 }, { x: 8600, y: 460 }, { x: 8900, y: 460 },
    { x: 9200, y: 460 },
    // S4 — elevated route
    { x:  9700, y: 460 }, { x:  9900, y: 460 },
    { x: 10100, y: 410 }, { x: 10300, y: 400 },
    { x: 10500, y: 360 }, { x: 10700, y: 360 },
    { x: 10950, y: 300 }, { x: 11100, y: 300 },
    { x: 11400, y: 260 }, { x: 11550, y: 240 }, { x: 11700, y: 235 },
    { x: 11850, y: 250 },
    { x: 12200, y: 320 }, { x: 12400, y: 320 },
    { x: 12600, y: 380 }, { x: 12800, y: 380 },
    { x: 12950, y: 460 },
    // S5 — branching paths
    { x: 13100, y: 460 }, { x: 13300, y: 460 }, { x: 13800, y: 460 },
    { x: 14000, y: 460 }, { x: 14300, y: 460 }, { x: 14500, y: 460 },
    { x: 14720, y: 475 }, { x: 14770, y: 475 },
    { x: 15000, y: 460 }, { x: 15300, y: 460 }, { x: 15600, y: 460 },
    { x: 15900, y: 460 }, { x: 16200, y: 460 }, { x: 16500, y: 460 },
    { x: 16800, y: 460 },
    { x: 13500, y: 380 }, { x: 13700, y: 380 }, { x: 13900, y: 380 },
    { x: 14200, y: 340 }, { x: 14400, y: 340 },
    { x: 15400, y: 360 }, { x: 15600, y: 360 }, { x: 15800, y: 360 },
    { x: 16200, y: 310 }, { x: 16400, y: 310 }, { x: 16600, y: 310 },
    // S6 — celebratory trail
    { x: 17100, y: 460 }, { x: 17250, y: 450 }, { x: 17400, y: 440 },
    { x: 17550, y: 435 }, { x: 17700, y: 435 }, { x: 17850, y: 435 },
    { x: 18000, y: 440 }, { x: 18150, y: 450 }, { x: 18300, y: 460 },
    { x: 18450, y: 460 }, { x: 18600, y: 460 }, { x: 18750, y: 460 },
    { x: 18900, y: 460 }, { x: 19050, y: 460 }, { x: 19200, y: 460 },
    { x: 19350, y: 460 }, { x: 19500, y: 460 }, { x: 19650, y: 460 },
  ],

  enemies: [
    // Light and friendly — most enemies are gentle introductions on flat ground.
    { type: 'chicken', x:  4200, y: 500 },
    { type: 'chicken', x:  6900, y: 500 },  // just past mud patch 1
    { type: 'chicken', x:  8300, y: 500 },  // just past mud patch 2
    { type: 'chicken', x: 12700, y: 500 },
    { type: 'chicken', x: 14000, y: 500 },
    { type: 'chicken', x: 15600, y: 500 },
    { type: 'chicken', x: 18200, y: 500 },
  ],
};
