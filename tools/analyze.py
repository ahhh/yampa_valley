"""Analyze the sprite sheets: mode, corners, alpha distribution, beige vs not."""
from PIL import Image
from collections import Counter
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def beige_ish(r, g, b, tol=25):
    return abs(r - 244) <= tol and abs(g - 207) <= tol and abs(b - 155) <= tol + 10


for name in ("yampa_sprites.png", "enemies.png", "enviornment_objects.png"):
    path = os.path.join(ROOT, name)
    im = Image.open(path)
    print(f"\n=== {name} === mode={im.mode} size={im.size}")
    im_rgba = im.convert("RGBA")
    w, h = im_rgba.size
    pixels = im_rgba.load()
    # Corner samples
    corners = {
        "TL": pixels[0, 0],
        "TR": pixels[w - 1, 0],
        "BL": pixels[0, h - 1],
        "BR": pixels[w - 1, h - 1],
        "C": pixels[w // 2, h // 2],
    }
    print("corners:", corners)
    # Alpha histogram (rough)
    alpha_buckets = Counter()
    for y in range(0, h, 4):
        for x in range(0, w, 4):
            a = pixels[x, y][3]
            alpha_buckets[a // 32] += 1
    print("alpha buckets (a//32):", sorted(alpha_buckets.items()))
    # Find rows where (mostly transparent OR mostly beige) — those are "background rows"
    bg_rows = []
    for y in range(h):
        bg = 0
        for x in range(0, w, 4):
            r, g, b, a = pixels[x, y]
            if a < 16 or beige_ish(r, g, b):
                bg += 1
        if bg / (w // 4) > 0.97:
            bg_rows.append(y)
    bg_cols = []
    for x in range(w):
        bg = 0
        for y in range(0, h, 4):
            r, g, b, a = pixels[x, y]
            if a < 16 or beige_ish(r, g, b):
                bg += 1
        if bg / (h // 4) > 0.97:
            bg_cols.append(x)
    # Group consecutive
    def bands(lst):
        if not lst:
            return []
        out, s, p = [], lst[0], lst[0]
        for v in lst[1:]:
            if v == p + 1:
                p = v
            else:
                out.append((s, p))
                s, p = v, v
        out.append((s, p))
        return out

    print(f"bg-row-bands ({len(bg_rows)} rows):", bands(bg_rows))
    print(f"bg-col-bands ({len(bg_cols)} cols):", bands(bg_cols))
