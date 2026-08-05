import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
import random

random.seed(7)

RED = "#D6291E"
RING = "#F7F1DC"
RAY = "#E4901F"
BOLT_SHADOW = "#D8432B"
BOLT_MAIN = "#F5A623"

def make_logo(path, transparent=True, size_px=1400, n_rays=34, ray_range=(1.28, 1.58), xlim=1.65):
    dpi = 300
    fig_in = size_px / dpi
    fig = plt.figure(figsize=(fig_in, fig_in), dpi=dpi)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(-xlim, xlim)
    ax.set_ylim(-xlim, xlim)
    ax.set_aspect("equal")
    ax.axis("off")
    if not transparent:
        fig.patch.set_facecolor(RING)

    # Sunburst rays
    inner_r = 0.66
    for i in range(n_rays):
        angle = 360.0 / n_rays * i
        outer_r = random.uniform(*ray_range)
        half_w = 360.0 / n_rays * 0.34  # degrees, half-width of ray base
        a0 = np.radians(angle - half_w)
        a1 = np.radians(angle + half_w)
        a_mid = np.radians(angle)
        p_base1 = (inner_r * np.cos(a0), inner_r * np.sin(a0))
        p_base2 = (inner_r * np.cos(a1), inner_r * np.sin(a1))
        p_tip = (outer_r * np.cos(a_mid), outer_r * np.sin(a_mid))
        tri = mpatches.Polygon([p_base1, p_tip, p_base2], closed=True,
                                facecolor=RAY, edgecolor="none", zorder=1)
        ax.add_patch(tri)

    # Cream ring behind red circle (creates separation between rays and circle)
    ring = mpatches.Circle((0, 0), 0.70, facecolor=RING, edgecolor="none", zorder=2)
    ax.add_patch(ring)

    # Red circle
    circle = mpatches.Circle((0, 0), 0.615, facecolor=RED, edgecolor="none", zorder=3)
    ax.add_patch(circle)

    # Lightning bolt (classic zigzag), defined in local coords, centered roughly at origin
    bolt_pts = np.array([
        [0.30, 0.95],
        [-0.16, 0.12],
        [0.10, 0.12],
        [-0.30, -0.95],
        [0.18, -0.12],
        [-0.08, -0.12],
    ])

    # Shadow bolt (offset lower-left, red-orange)
    shadow_pts = bolt_pts + np.array([-0.085, -0.085])
    shadow = mpatches.Polygon(shadow_pts, closed=True, facecolor=BOLT_SHADOW,
                               edgecolor="none", zorder=4)
    ax.add_patch(shadow)

    # Main bolt (gold/yellow-orange), clipped to circle so shadow peeks out at tips
    clip_circle = mpatches.Circle((0, 0), 0.615, transform=ax.transData)
    main = mpatches.Polygon(bolt_pts, closed=True, facecolor=BOLT_MAIN,
                             edgecolor="none", zorder=5)
    ax.add_patch(main)

    fig.savefig(path, dpi=dpi, transparent=transparent)
    plt.close(fig)


if __name__ == "__main__":
    import os
    out_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets")
    random.seed(7)
    make_logo(f"{out_dir}/logo_transparent.png", transparent=True, size_px=1600,
               n_rays=34, ray_range=(1.28, 1.58), xlim=1.65)
    random.seed(7)
    make_logo(f"{out_dir}/logo_on_cream.png", transparent=False, size_px=1600,
               n_rays=34, ray_range=(1.28, 1.58), xlim=1.65)
    random.seed(3)
    make_logo(f"{out_dir}/logo_mark.png", transparent=True, size_px=800,
               n_rays=20, ray_range=(1.18, 1.34), xlim=1.4)
    random.seed(3)
    make_logo(f"{out_dir}/footer_mark.png", transparent=True, size_px=240,
               n_rays=16, ray_range=(1.12, 1.28), xlim=1.35)
    print("done")
