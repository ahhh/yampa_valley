"""One-shot migration: bump every `y: NUMBER` in the level files by a delta.

Used when groundY moves on the canvas — every terrain rect, decoration,
enemy, and ball y needs to shift by the same amount to keep its relative
position to the floor. Safe to re-run with delta=0 to no-op.

Usage:
    python3 tools/shift_level_y.py --delta 40
"""
from __future__ import annotations
import argparse
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVEL_FILES = [
    os.path.join(ROOT, "levels", "easy.js"),
    os.path.join(ROOT, "levels", "medium.js"),
    os.path.join(ROOT, "levels", "hard.js"),
]

# Match `y: NUMBER` where it's a key inside an object literal — we look
# for an immediately preceding character that's whitespace, a comma, or `{`.
# Negative integers aren't expected in level data; restrict to non-negative.
Y_PATTERN = re.compile(r"(?P<lead>[\s,{])y:\s*(?P<val>\d+)")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--delta", type=int, required=True,
                    help="amount to add to every y value (positive = down)")
    args = ap.parse_args()

    total_changes = 0
    for path in LEVEL_FILES:
        with open(path, "r") as f:
            src = f.read()
        n = [0]

        def repl(m):
            n[0] += 1
            return f"{m.group('lead')}y: {int(m.group('val')) + args.delta}"

        new_src = Y_PATTERN.sub(repl, src)
        if new_src != src:
            with open(path, "w") as f:
                f.write(new_src)
            print(f"  {os.path.relpath(path, ROOT)}: shifted {n[0]} y-values "
                  f"by {args.delta:+d}")
            total_changes += n[0]
        else:
            print(f"  {os.path.relpath(path, ROOT)}: no changes")
    print(f"total y-values shifted: {total_changes}")


if __name__ == "__main__":
    main()
