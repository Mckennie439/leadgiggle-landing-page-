import os

import numpy as np
from PIL import Image

SRC_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(os.path.dirname(SRC_DIR), "assets")
SOURCE = os.path.join(ASSETS, "logo_source_original.png")


def make_transparent(src_path, tol_full=10, tol_edge=30, pad=20):
    """Chroma-key out the flat background and crop to the mark's bounding box."""
    im = Image.open(src_path).convert("RGB")
    arr = np.array(im).astype(int)
    bg = arr[2, 2]
    dist = np.sqrt(((arr - bg) ** 2).sum(axis=2))
    alpha = np.clip((dist - tol_full) / (tol_edge - tol_full), 0, 1) * 255
    alpha = alpha.astype(np.uint8)
    rgba = np.dstack([arr.astype(np.uint8), alpha])
    out = Image.fromarray(rgba, mode="RGBA")

    mask = alpha > 10
    ys, xs = np.where(mask)
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, out.width)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, out.height)
    return out.crop((x0, y0, x1, y1))


if __name__ == "__main__":
    cropped = make_transparent(SOURCE)
    cropped.save(os.path.join(ASSETS, "logo_transparent.png"))
    print("logo_transparent.png ->", cropped.size)

    h = 240
    w = int(cropped.width * h / cropped.height)
    footer = cropped.resize((w, h), Image.LANCZOS)
    footer.save(os.path.join(ASSETS, "footer_mark.png"))
    print("footer_mark.png ->", footer.size)
