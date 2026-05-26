"""Save a chroma-keyed-only version of the dog sheet so we can see what we're working with."""
from PIL import Image
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = os.path.join(ROOT, "yampa_sprites.png")
im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size
# Key out beige with reasonable tolerance
target = (244, 207, 155)
tol = 45
for y in range(h):
    for x in range(w):
        r, g, b, _ = px[x, y]
        if abs(r - target[0]) <= tol and abs(g - target[1]) <= tol and abs(b - target[2]) <= tol:
            px[x, y] = (r, g, b, 0)
out = os.path.join(ROOT, "tools", "_dog_keyed.png")
im.save(out)
print(f"saved {out}")

# Sample what's left at various coordinates so we know what's wood vs dog
print("\nSampling pixel colors (skipping transparent):")
samples = [(5, 5), (5, h//2), (5, h-5), (w//2, 5), (w//2, h//2), (w-5, h-5),
           (200, 200), (400, 400), (600, 600), (800, 800), (1000, 1000),
           # Try inside a cell (top-left sprite, idle pose)
           (290, 140), (290, 150), (300, 150),
           # Try along a grid line (estimated between cell row 0 and 1)
           (300, 192), (500, 192), (700, 192),
           # Estimated horizontal grid line position
           (500, 96), (500, 192), (500, 288)]
for x, y in samples:
    if 0 <= x < w and 0 <= y < h:
        r, g, b, a = px[x, y]
        print(f"  ({x:4d},{y:4d}): RGBA=({r:3d},{g:3d},{b:3d},{a:3d})")
