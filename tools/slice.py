"""Slice the three sprite sheets into individual transparent PNGs.

Dog sheet uses grid-line detection on the chroma-keyed image.
Enemies and env sheets use connected-component labelling (4-connected BFS) on
the alpha channel, then merge components whose bounding boxes are close
together. Components with a tiny pixel count are dropped — those are the text
labels and small ornaments on the source sheets.

Output:
  assets/dog/<state>_<frame>.png
  assets/enemies/<species>_<frame>.png
  assets/env/<name>.png
  assets/contact_sheet.png
"""
from __future__ import annotations
import os
from PIL import Image, ImageDraw, ImageFont
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "assets")


def find_source(name: str) -> str:
    """Locate a source sprite sheet. The user may have moved the originals
    into `old_assets/` after the first slicing pass; try both spots."""
    for base in (ROOT, os.path.join(ROOT, "old_assets")):
        p = os.path.join(base, name)
        if os.path.exists(p):
            return p
    raise SystemExit(f"source not found in root or old_assets/: {name}")


# ---------- generic helpers ----------

def ensure_dir(p):
    os.makedirs(p, exist_ok=True)


def chroma_key_beige(im: Image.Image, target=(244, 207, 155), tol=45) -> Image.Image:
    """Replace beige-ish pixels with full transparency."""
    im = im.convert("RGBA")
    arr = np.array(im)
    r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]
    mask = (
        (np.abs(r.astype(int) - target[0]) <= tol)
        & (np.abs(g.astype(int) - target[1]) <= tol)
        & (np.abs(b.astype(int) - target[2]) <= tol)
    )
    arr[..., 3] = np.where(mask, 0, a)
    return Image.fromarray(arr)


def bands(values, gap=1):
    if not values:
        return []
    out, s, p = [], values[0], values[0]
    for v in values[1:]:
        if v - p <= gap:
            p = v
        else:
            out.append((s, p))
            s = p = v
    out.append((s, p))
    return out


def detect_grid_lines(im: Image.Image, axis: int,
                      density_thresh: float = 0.85,
                      band_max_width: int = 10):
    """Centers of rows/cols where opaque-pixel density exceeds `density_thresh`."""
    arr = np.array(im)
    a = arr[..., 3]
    if axis == 0:
        densities = (a > 32).mean(axis=1)
    else:
        densities = (a > 32).mean(axis=0)
    high = [int(i) for i, d in enumerate(densities) if d > density_thresh]
    line_bands = bands(high, gap=2)
    return [(s + p) // 2 for s, p in line_bands if (p - s) <= band_max_width]


def crop_trim(im: Image.Image, x0, y0, x1, y1, pad=2):
    cell = im.crop((x0, y0, x1, y1))
    bbox = cell.getbbox()
    if bbox is None:
        return None
    px0, py0, px1, py1 = bbox
    px0 = max(0, px0 - pad)
    py0 = max(0, py0 - pad)
    px1 = min(cell.width, px1 + pad)
    py1 = min(cell.height, py1 + pad)
    return cell.crop((px0, py0, px1, py1))


def save(im: Image.Image, path: str):
    if im is None:
        print(f"  SKIP (empty): {os.path.relpath(path, ROOT)}")
        return
    ensure_dir(os.path.dirname(path))
    im.save(path)
    print(f"  wrote {os.path.relpath(path, ROOT)}  ({im.size[0]}x{im.size[1]})")


# ---------- connected-component labelling ----------

def connected_components(im: Image.Image, alpha_threshold=128, min_pixels=300):
    """Return list of (x0, y0, x1, y1, pixel_count) for each opaque blob.
    4-connectivity. Anti-aliased haze (alpha 32-127) is excluded so adjacent
    sprites don't chain together via faint connecting pixels. Components
    smaller than `min_pixels` are dropped."""
    arr = np.array(im)
    mask = arr[..., 3] >= alpha_threshold
    h, w = mask.shape
    visited = np.zeros_like(mask, dtype=bool)
    components = []
    # Iterative BFS using a list as stack
    for sy in range(h):
        row_mask = mask[sy]
        row_visited = visited[sy]
        for sx in np.where(row_mask & ~row_visited)[0]:
            stack = [(int(sx), sy)]
            x0 = x1 = int(sx)
            y0 = y1 = sy
            count = 0
            while stack:
                x, y = stack.pop()
                if visited[y, x] or not mask[y, x]:
                    continue
                visited[y, x] = True
                count += 1
                if x < x0: x0 = x
                elif x > x1: x1 = x
                if y < y0: y0 = y
                elif y > y1: y1 = y
                if x + 1 < w and not visited[y, x + 1] and mask[y, x + 1]:
                    stack.append((x + 1, y))
                if x > 0 and not visited[y, x - 1] and mask[y, x - 1]:
                    stack.append((x - 1, y))
                if y + 1 < h and not visited[y + 1, x] and mask[y + 1, x]:
                    stack.append((x, y + 1))
                if y > 0 and not visited[y - 1, x] and mask[y - 1, x]:
                    stack.append((x, y - 1))
            if count >= min_pixels:
                components.append((x0, y0, x1, y1, count))
    return components


def bbox_distance(a, b):
    """Manhattan-ish gap between two bboxes (a, b). Returns 0 if they overlap."""
    dx = max(0, max(a[0] - b[2], b[0] - a[2]))
    dy = max(0, max(a[1] - b[3], b[1] - a[3]))
    return max(dx, dy)


def merge_nearby(boxes, gap=10):
    """Iteratively merge bounding boxes within `gap` of each other."""
    boxes = [list(b) for b in boxes]
    changed = True
    while changed:
        changed = False
        for i in range(len(boxes)):
            for j in range(i + 1, len(boxes)):
                if bbox_distance(boxes[i], boxes[j]) <= gap:
                    boxes[i] = [
                        min(boxes[i][0], boxes[j][0]),
                        min(boxes[i][1], boxes[j][1]),
                        max(boxes[i][2], boxes[j][2]),
                        max(boxes[i][3], boxes[j][3]),
                        boxes[i][4] + boxes[j][4],
                    ]
                    boxes.pop(j)
                    changed = True
                    break
            if changed:
                break
    return [tuple(b) for b in boxes]


# ---------- per-sheet slicing ----------

def slice_dog():
    """Dog: 6 cols × 13 rows, first row/col are labels. Cells are non-uniform."""
    print("\n[dog] slicing yampa_sprites.png")
    src = find_source("yampa_sprites.png")
    im = chroma_key_beige(Image.open(src))

    row_lines = detect_grid_lines(im, axis=0)
    col_lines = detect_grid_lines(im, axis=1)
    print(f"  row lines (y, n={len(row_lines)}): {row_lines}")
    print(f"  col lines (x, n={len(col_lines)}): {col_lines}")
    if len(row_lines) < 14 or len(col_lines) < 7:
        raise SystemExit(f"  Grid detection failed")

    states_clean = ["normal", "jump1", "roll1", "ball", "hurt", "victory"]
    states = states_clean + ["muddy_" + s for s in states_clean]
    frames = ["idle", "run1", "run2", "run3", "run4"]
    inset = 4

    out_dir = os.path.join(ASSETS, "dog")
    for r_idx in range(12):
        state = states[r_idx]
        y0 = row_lines[r_idx + 1] + inset
        y1 = row_lines[r_idx + 2] - inset
        for c_idx in range(5):
            frame = frames[c_idx]
            x0 = col_lines[c_idx + 1] + inset
            x1 = col_lines[c_idx + 2] - inset
            tile = crop_trim(im, x0, y0, x1, y1, pad=2)
            save(tile, os.path.join(out_dir, f"{state}_{frame}.png"))


def slice_enemies():
    """Enemies: 5 col × 6 row table (label row + 5 species rows, label col + 4
    action cols). Thin orange table grid lines separate the cells — we detect
    those lines and slice between them, same approach as the dog sheet."""
    print("\n[enemies] slicing enemies.png")
    src = find_source("enemies.png")
    im = Image.open(src).convert("RGBA")

    # Find the thin grid lines (rows/cols where >90% of pixels are opaque AND
    # the band of such rows is very thin — text labels are wider bands).
    row_lines = detect_grid_lines(im, axis=0, density_thresh=0.90, band_max_width=6)
    col_lines = detect_grid_lines(im, axis=1, density_thresh=0.90, band_max_width=6)
    print(f"  row lines (y, n={len(row_lines)}): {row_lines}")
    print(f"  col lines (x, n={len(col_lines)}): {col_lines}")

    # Detected lines already include the top/bottom and left/right edges of the
    # table. The first band on each axis is the label band; we skip it. We
    # expect at least 7 row lines (label row + 5 species rows + bottom edge =
    # 7 separators) and 6 col lines (label col + 4 action cols + right edge).
    if len(row_lines) < 7 or len(col_lines) < 6:
        print(f"  WARN: expected at least 7 row lines and 6 col lines")

    species = ["chicken", "mole", "cow", "mushroom_a", "mushroom_b"]
    actions = ["walk1", "walk2", "defeated", "taunt"]
    inset = 3

    out_dir = os.path.join(ASSETS, "enemies")
    # The first row band (top → row_lines[1]) is the column-label row; skip.
    # The first col band (left → col_lines[1]) is the species-label col; skip.
    for r_idx in range(min(5, len(row_lines) - 2)):
        sp = species[r_idx] if r_idx < len(species) else f"row{r_idx}"
        y0 = row_lines[r_idx + 1] + inset
        y1 = row_lines[r_idx + 2] - inset
        for c_idx in range(min(4, len(col_lines) - 2)):
            ac = actions[c_idx] if c_idx < len(actions) else f"col{c_idx}"
            x0 = col_lines[c_idx + 1] + inset
            x1 = col_lines[c_idx + 2] - inset
            tile = crop_trim(im, x0, y0, x1, y1, pad=2)
            save(tile, os.path.join(out_dir, f"{sp}_{ac}.png"))


def slice_env():
    """Env: connected components, hand-named by approximate position."""
    print("\n[env] slicing enviornment_objects.png")
    src = find_source("enviornment_objects.png")
    im = Image.open(src).convert("RGBA")

    comps = connected_components(im, min_pixels=300)
    print(f"  found {len(comps)} raw components")
    # gap=4 keeps multi-part sprites (tree leaves+trunk, sign+post) unified
    # without chaining tree+barn+finish into one blob.
    comps = merge_nearby(comps, gap=4)
    print(f"  after merging nearby: {len(comps)} components")

    # Drop captions and per-object text labels.
    def looks_like_label(c):
        x0, y0, x1, y1, n = c
        w_ = x1 - x0
        h_ = y1 - y0
        if h_ < 40:  # short text-height bands
            return True
        if n < 800:
            return True
        return False
    comps = [c for c in comps if not looks_like_label(c)]
    print(f"  after label filter: {len(comps)} components")
    for c in comps:
        print(f"    bbox=({c[0]:4d},{c[1]:4d})-({c[2]:4d},{c[3]:4d})  size={c[2]-c[0]}x{c[3]-c[1]}  pixels={c[4]}")

    # Name each component by where it sits on the sheet. Sort key is
    # (y//100 bucket, x), giving this top→bottom, left→right order:
    #   bucket 1 (y~100):  tennis_ball,  tennis_ball_sparkle
    #   bucket 3 (y~390):  grass_tile, dirt_tile, mud_tile, flower_decoration
    #   bucket 5 (y~570):  tree            (single tall object centered)
    #   bucket 6 (y~625):  fence_piece     (left)
    #   bucket 7 (y~730):  finish_sign     (far right, hangs lower)
    #   bucket 8 (y~820):  background_hill, barn
    comps.sort(key=lambda c: (c[1] // 100, c[0]))

    expected_names = [
        "tennis_ball", "tennis_ball_sparkle",
        "grass_tile", "dirt_tile", "mud_tile", "flower_decoration",
        "tree",
        "fence_piece",
        "finish_sign",
        "background_hill", "barn",
    ]

    out_dir = os.path.join(ASSETS, "env")
    for i, c in enumerate(comps):
        x0, y0, x1, y1, _ = c
        name = expected_names[i] if i < len(expected_names) else f"obj{i}"
        tile = crop_trim(im, x0, y0, x1 + 1, y1 + 1, pad=2)
        save(tile, os.path.join(out_dir, f"{name}.png"))


def contact_sheet():
    cells = []
    for sub in ("dog", "enemies", "env"):
        d = os.path.join(ASSETS, sub)
        if not os.path.isdir(d):
            continue
        for fn in sorted(os.listdir(d)):
            if fn.endswith(".png"):
                cells.append((sub + "/" + fn, Image.open(os.path.join(d, fn))))
    if not cells:
        return
    tile = 160
    cols = 8
    rows = (len(cells) + cols - 1) // cols
    sheet = Image.new("RGBA", (cols * tile, rows * (tile + 18)), (40, 40, 40, 255))
    draw = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 11)
    except Exception:
        font = ImageFont.load_default()
    for i, (label, im) in enumerate(cells):
        c = i % cols
        r = i // cols
        ratio = min((tile - 8) / im.width, (tile - 8) / im.height)
        new_w = max(1, int(im.width * ratio))
        new_h = max(1, int(im.height * ratio))
        thumb = im.resize((new_w, new_h), Image.NEAREST)
        ox = c * tile + (tile - new_w) // 2
        oy = r * (tile + 18) + (tile - new_h) // 2
        sheet.paste(thumb, (ox, oy), thumb)
        draw.text((c * tile + 2, r * (tile + 18) + tile + 2), label,
                  fill=(255, 255, 255, 255), font=font)
    out = os.path.join(ASSETS, "contact_sheet.png")
    sheet.save(out)
    print(f"\ncontact sheet: {os.path.relpath(out, ROOT)}  ({sheet.size[0]}x{sheet.size[1]})")


if __name__ == "__main__":
    ensure_dir(ASSETS)
    for sub in ("dog", "enemies", "env"):
        d = os.path.join(ASSETS, sub)
        if os.path.isdir(d):
            for fn in os.listdir(d):
                if fn.endswith(".png"):
                    os.remove(os.path.join(d, fn))
    slice_dog()
    slice_enemies()
    slice_env()
    contact_sheet()
