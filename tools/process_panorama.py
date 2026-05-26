"""Process new_background.png into a seamlessly-looping bg tile.

Steps:
  1. Locate the source (project root or old_assets/).
  2. Trim the 1–2px near-black border columns on the left and right (chroma
     noise that becomes a visible vertical bar when the image tiles).
  3. Trim any painted dirt strip below the grass line so the painted grass
     ends at the image's bottom edge (aligns with the in-game ground line).
  4. Crossfade a strip near the right edge with the matching strip from the
     left edge. This makes the right edge gradually transition into the
     left edge's content, so when the image tiles, pixel W-1 of one copy
     matches pixel 0 of the next — no visible seam.

Output:
  assets/backgrounds/bg_panorama.png
"""
from __future__ import annotations
import os
from PIL import Image
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "assets", "backgrounds")
os.makedirs(OUT_DIR, exist_ok=True)

candidates = [
    os.path.join(ROOT, "new_background.png"),
    os.path.join(ROOT, "old_assets", "new_background.png"),
]
src = next((p for p in candidates if os.path.exists(p)), None)
if src is None:
    raise SystemExit(
        "new_background.png not found in project root or old_assets/")
print(f"source: {os.path.relpath(src, ROOT)}")

im = Image.open(src).convert("RGB")
print(f"  raw: {im.size}")


def trim_dark_edges(panel: Image.Image, threshold: float = 150.0) -> Image.Image:
    """Strip 1–2px near-black border columns from each side."""
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
    """Remove the run of red-dominant (dirt) rows at the very bottom so the
    grass line ends at the bottom edge."""
    arr = np.array(panel.convert("RGB"))
    h_, w_, _ = arr.shape
    r = arr[..., 0].mean(axis=1)
    g = arr[..., 1].mean(axis=1)
    cut = h_
    for y in range(h_ - 1, -1, -1):
        if g[y] > r[y]:
            cut = y + 1
            break
    if cut >= h_:
        return panel
    print(f"  trim y-bottom: {h_ - cut}px of dirt below grass")
    return panel.crop((0, 0, w_, cut))


def find_best_wrap_crop(panel: Image.Image, max_search: int = 300) -> int:
    """Find the number of pixels to crop from the right that best matches
    the panel's left edge. We score the L1 color diff between pixel 0 and
    pixel (W-1-crop) and pick the crop with minimum diff.

    This catches cases where the image is *almost* seamless but the very
    last column happens to fall on a poorly-matching pixel."""
    arr = np.array(panel.convert("RGB")).astype(int)
    h_, w_, _ = arr.shape
    left = arr[:, 0, :]
    best_crop, best_diff = 0, 1e18
    for crop in range(0, min(max_search, w_ // 4)):
        cand = arr[:, w_ - 1 - crop, :]
        diff = np.abs(cand - left).mean()
        if diff < best_diff:
            best_diff = diff
            best_crop = crop
    return best_crop, best_diff


def crossfade_loop_edges(panel: Image.Image, fade_w: int = 80) -> Image.Image:
    """After picking a near-seamless wrap point, soften residual mismatch
    by crossfading the right edge with a mirrored copy of the left edge.

    At position W-fade_w+i (i = 0..fade_w-1) the output is a linear blend
    of the original right-strip pixel with `left[fade_w-1-i]`. At i=fade_w-1
    (pixel W-1) the output equals `left[0]`, which is the pixel sitting on
    the other side of the seam in the next tile — so pixel W-1 == pixel 0
    and the join is invisible.

    The mirror means the rightmost ~80px gradually morph back into the left
    edge's content. On a 2000+ px painted panorama this softly smudges a
    small region near the seam without anything obvious.
    """
    arr = np.array(panel).astype(np.float32)
    h_, w_, c = arr.shape
    fade_w = min(fade_w, w_ // 4)
    left_strip = arr[:, :fade_w, :].copy()
    for i in range(fade_w):
        alpha = (i + 1) / fade_w           # 0 → 1 across the band
        right_x = w_ - fade_w + i
        src = left_strip[:, fade_w - 1 - i, :]   # mirrored: at i=last → left[0]
        arr[:, right_x, :] = arr[:, right_x, :] * (1.0 - alpha) + src * alpha
    print(f"  crossfade: blended {fade_w}px with mirrored left-edge content")
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


# How many pixels to shave off each side of the panorama BEFORE the seam
# search + crossfade. Tweak this if the boundary element at the wrap looks
# too tree-shaped or too bush-shaped — smaller value = more visible
# vegetation at the seam, larger value = the edge content shrinks.
EDGE_CROP = 5

im = trim_dark_edges(im)
im = trim_dirt_below_grass(im)
if EDGE_CROP > 0:
    pw, ph = im.size
    im = im.crop((EDGE_CROP, 0, pw - EDGE_CROP, ph))
    print(f"  edge crop: removed {EDGE_CROP}px from left and {EDGE_CROP}px from right")
crop, diff = find_best_wrap_crop(im)
print(f"  best wrap-point crop: {crop}px from right (L→R diff {diff:.1f})")
if crop > 0:
    im = im.crop((0, 0, im.size[0] - crop, im.size[1]))
im = crossfade_loop_edges(im)

print(f"final: {im.size}")
out_path = os.path.join(OUT_DIR, "bg_panorama.png")
im.save(out_path)
print(f"wrote {os.path.relpath(out_path, ROOT)}")

# Sanity check the new seam
arr = np.array(im)
h_, w_, _ = arr.shape
diff = np.abs(arr[:, 0, :].astype(int) - arr[:, -1, :].astype(int)).mean(axis=0)
print(f"L→R seam color diff after crossfade: R={diff[0]:.1f} G={diff[1]:.1f} B={diff[2]:.1f}")
