"""Detect wood-grid-line rows/cols in the chroma-keyed dog sheet."""
from PIL import Image
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
im = Image.open(os.path.join(ROOT, "tools", "_dog_keyed.png"))
w, h = im.size
px = im.load()

# Per-row alpha density (fraction of opaque pixels)
row_density = []
for y in range(h):
    c = sum(1 for x in range(w) if px[x, y][3] > 32)
    row_density.append(c / w)

col_density = []
for x in range(w):
    c = sum(1 for y in range(h) if px[x, y][3] > 32)
    col_density.append(c / h)

# Print rows where density > 0.8 (likely wood grid lines)
def find_high(density, thresh):
    return [i for i, d in enumerate(density) if d > thresh]

def bands(values, gap=2):
    if not values:
        return []
    out, s, p = [], values[0], values[0]
    for v in values[1:]:
        if v - p <= gap:
            p = v
        else:
            out.append((s, p))
            s, p = v, v
    out.append((s, p))
    return out

print("Row density profile (every 50th row):")
for i in range(0, h, 50):
    bar = "#" * int(row_density[i] * 50)
    print(f"  y={i:4d}: {row_density[i]:.3f} {bar}")

print("\nRows where density > 0.85 (probable wood grid lines):")
high_rows = find_high(row_density, 0.85)
print(f"  count={len(high_rows)}")
print(f"  bands: {bands(high_rows, gap=2)}")

print("\nCols where density > 0.85 (probable wood grid lines):")
high_cols = find_high(col_density, 0.85)
print(f"  count={len(high_cols)}")
print(f"  bands: {bands(high_cols, gap=2)}")
