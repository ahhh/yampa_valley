"""Build the three parallax background tiles used by the game.

Sources (both expected in old_assets/, with project-root as fallback):
  backgrounds_stacked.png    — two horizontal panoramas stacked vertically
                                → bg_top.png and bg_bottom.png
  transition_bg_source.png   — tall vertical scene with two pine trees
                                → bg_trees.png  (used as a transition tile
                                  between bg_top and bg_bottom)

All three output tiles are processed so they share the same height (they're
cropped from the top — losing only sky — to a common COMMON_HEIGHT) and so
their grass lines sit on the bottom edge (the painted dirt strip is removed
on each image). Left/right dark border columns are also trimmed so adjacent
tiles don't show a vertical seam.

Output:
  assets/backgrounds/bg_top.png      (wide panorama — barns + bridges)
  assets/backgrounds/bg_bottom.png   (wide panorama — windmill + barn)
  assets/backgrounds/bg_trees.png    (narrow transition — two flanking trees)
"""
from __future__ import annotations
import os
from PIL import Image
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "backgrounds")
os.makedirs(OUT_DIR, exist_ok=True)

# Locate the stacked source. The user may have moved the original from the
# project root into old_assets/ after first run, so try both locations.
candidates = [
    os.path.join(ROOT, "backgrounds_stacked.png"),
    os.path.join(ROOT, "old_assets", "backgrounds_stacked.png"),
]
src = next((p for p in candidates if os.path.exists(p)), None)
if src is None:
    raise SystemExit(
        "backgrounds_stacked.png not found in project root or old_assets/")
print(f"source: {os.path.relpath(src, ROOT)}")

im = Image.open(src).convert("RGB")
arr = np.array(im)
h, w, _ = arr.shape
print(f"  {w}x{h}")

# Detect the divider band by per-row standard deviation. The strip between
# the two panoramas is mostly one flat color so its std is much lower than
# the painted regions.
row_std = arr.std(axis=(1, 2))
mid_lo, mid_hi = h // 3, 2 * h // 3
divider_rows = [y for y in range(mid_lo, mid_hi) if row_std[y] < 15]
if not divider_rows:
    print("WARN: no clear divider found, splitting at exact midpoint")
    div_start, div_end = h // 2, h // 2
else:
    div_start, div_end = min(divider_rows), max(divider_rows)
print(f"  divider band: y={div_start}..{div_end}")

top = im.crop((0, 0, w, div_start))
bottom = im.crop((0, div_end + 1, w, h))


def trim_dark_edges(panel: Image.Image, threshold: float = 150.0) -> Image.Image:
    """Remove the 1–2px near-black border columns so adjacent tiles don't
    show a vertical dark bar at their seam."""
    arr = np.array(panel.convert("RGB"))
    h_, w_, _ = arr.shape
    col_brightness = arr.sum(axis=(0, 2)) / h_
    bright = col_brightness > threshold
    if not bright.any():
        return panel
    left = int(np.argmax(bright))
    right = int(w_ - 1 - np.argmax(bright[::-1]))
    if left == 0 and right == w_ - 1:
        return panel
    print(f"  trim x: left={left}px, right={w_ - 1 - right}px")
    return panel.crop((left, 0, right + 1, h_))


def trim_dirt_below_grass(panel: Image.Image) -> Image.Image:
    """Crop the painted dirt strip below the grass so the panorama's grass
    line ends at the image's bottom edge. Without this, two panoramas with
    different dirt-strip heights wouldn't line up at their tile seam.

    Heuristic: scan from the bottom upward. A row is 'dirt' if red > green;
    a row is 'grass' if green > red. We crop off the trailing dirt run.
    """
    arr = np.array(panel.convert("RGB"))
    h_, w_, _ = arr.shape
    r = arr[..., 0].mean(axis=1)
    g = arr[..., 1].mean(axis=1)
    # Walk up from the bottom while red dominates (dirt).
    cut = h_  # default: no crop
    for y in range(h_ - 1, -1, -1):
        if g[y] > r[y]:        # hit grass — stop here
            cut = y + 1
            break
    if cut >= h_:
        return panel
    dropped = h_ - cut
    print(f"  trim y-bottom: removing {dropped}px of dirt below grass")
    return panel.crop((0, 0, w_, cut))


top = trim_dark_edges(top)
bottom = trim_dark_edges(bottom)
top = trim_dirt_below_grass(top)
bottom = trim_dirt_below_grass(bottom)
print(f"top: {top.size}    bottom: {bottom.size}")

# --- Process the tall transition image ---------------------------------------
# Same cleanup as the wide panoramas plus a height-preserving downscale, so
# it can sit between bg_top and bg_bottom tiles as a "transition" scene
# without looking out of place.
trans_candidates = [
    os.path.join(ROOT, "transition_bg_source.png"),
    os.path.join(ROOT, "old_assets", "transition_bg_source.png"),
]
trans_src = next((p for p in trans_candidates if os.path.exists(p)), None)
trees = None
if trans_src:
    print(f"\ntransition source: {os.path.relpath(trans_src, ROOT)}")
    trees = Image.open(trans_src).convert("RGB")
    print(f"  raw: {trees.size}")
    trees = trim_dark_edges(trees)
    trees = trim_dirt_below_grass(trees)
    print(f"  after dirt+edge trim: {trees.size}")
else:
    print("\n(transition_bg_source.png not present — skipping bg_trees)")

# --- Standardize all panels to the same height -------------------------------
# Pick the smallest grass-aligned height. Any taller panel is cropped from
# its TOP (which is sky) — that's lossless for the playable view since the
# sky gradient behind already fills above. The trees panel, being tall and
# narrow, gets resized proportionally instead so we keep its trees readable.
def crop_top_to(panel: Image.Image, target_h: int) -> Image.Image:
    w_, h_ = panel.size
    if h_ <= target_h:
        return panel
    return panel.crop((0, h_ - target_h, w_, h_))


def resize_to_height(panel: Image.Image, target_h: int) -> Image.Image:
    w_, h_ = panel.size
    if h_ == target_h:
        return panel
    new_w = max(1, int(round(w_ * target_h / h_)))
    return panel.resize((new_w, target_h), Image.LANCZOS)


candidate_heights = [top.size[1], bottom.size[1]]
common_h = min(candidate_heights)
print(f"\nstandardizing to height {common_h}")
top = crop_top_to(top, common_h)
bottom = crop_top_to(bottom, common_h)
if trees is not None:
    # The trees image is naturally vertical (~3.5x taller than wide), so cropping
    # off the top would destroy the trees. Scale it down to common_h instead,
    # accepting some vertical squash — the painted trees still read clearly.
    trees = resize_to_height(trees, common_h)
print(f"final  top: {top.size}    bottom: {bottom.size}" +
      (f"    trees: {trees.size}" if trees is not None else ""))

# --- Save --------------------------------------------------------------------
outputs = [
    ("bg_top.png", top),
    ("bg_bottom.png", bottom),
]
if trees is not None:
    outputs.append(("bg_trees.png", trees))
for name, im_out in outputs:
    p = os.path.join(OUT_DIR, name)
    im_out.save(p)
    print(f"wrote {os.path.relpath(p, ROOT)}")
