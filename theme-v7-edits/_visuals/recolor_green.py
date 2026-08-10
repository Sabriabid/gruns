#!/usr/bin/env python3
"""Fait basculer le vert lime des photos produit vers le bordeaux de la nouvelle DA.

Les photos existantes montrent le packaging vert. Plutôt que de les remplacer par
des visuels générés, on décale la teinte des seuls pixels verts vers le bordeaux
en conservant la matière : les reflets, les ombres et le grain restent ceux de la
photo d'origine. Tout ce qui n'est pas vert (lettrage crème, fruits rouges, peau,
ciel) est laissé intact.
"""
import numpy as np
from PIL import Image
import colorsys, pathlib, sys

SRC = pathlib.Path('green')
DST = pathlib.Path('bordeaux')
DST.mkdir(exist_ok=True)

# Fenêtre de teinte considérée comme "vert" (en degrés). Le lime du packaging est
# vers 85°, les gummies vert foncé vers 100-150°.
H_LO, H_HI = 36.0, 200.0
# Teinte cible : le bordeaux maître #861B25 est à ~355°.
H_TARGET = 355.0
H_SPREAD = 9.0   # on garde un peu de variation de teinte pour ne pas aplatir la matière

def rgb_to_hsv_np(rgb):
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    mx, mn = rgb.max(-1), rgb.min(-1)
    d = mx - mn
    h = np.zeros_like(mx)
    m = (d > 1e-6)
    rm = m & (mx == r); gm = m & (mx == g) & ~rm; bm = m & (mx == b) & ~rm & ~gm
    h[rm] = ((g - b)[rm] / d[rm]) % 6
    h[gm] = ((b - r)[gm] / d[gm]) + 2
    h[bm] = ((r - g)[bm] / d[bm]) + 4
    h = h * 60.0
    s = np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0.0)
    return h, s, mx

def hsv_to_rgb_np(h, s, v):
    hp = (h % 360.0) / 60.0
    c = v * s
    x = c * (1 - np.abs(hp % 2 - 1))
    m = v - c
    z = np.zeros_like(h)
    i = hp.astype(int) % 6
    r = np.select([i==0,i==1,i==2,i==3,i==4,i==5], [c,x,z,z,x,c])
    g = np.select([i==0,i==1,i==2,i==3,i==4,i==5], [x,c,c,x,z,z])
    b = np.select([i==0,i==1,i==2,i==3,i==4,i==5], [z,z,x,c,c,x])
    return np.stack([r+m, g+m, b+m], -1)

def recolor(path, v_gain=0.62, v_lift=0.10, s_gain=1.06, sat_floor=0.10, olive_pass=False, regions=None):
    img = Image.open(path).convert('RGB')
    rgb = np.asarray(img).astype(np.float32) / 255.0
    h, s, v = rgb_to_hsv_np(rgb)

    # Un pixel n'est "vert" que s'il est à la fois dans la fenêtre de teinte et
    # suffisamment saturé — sinon les gris et les blancs cassés partiraient au rouge.
    in_hue = (h >= H_LO) & (h <= H_HI)
    # Critère décisif : dans un vert (même olive ou très sombre) la composante
    # verte domine la rouge. Les beiges et crèmes de ces photos sont des jaunes
    # désaturés où le rouge domine — ils restent donc intacts.
    # Deux familles à attraper : les verts francs, où la composante verte tient
    # tête à la rouge, et les olives des bords détourés, où le rouge l'emporte
    # mais la saturation reste forte. Les beiges et crèmes de ces photos ont la
    # même teinte que ces olives : c'est leur faible saturation qui les distingue.
    g_dom = rgb[..., 1] >= rgb[..., 0] * 0.99
    if olive_pass:
        mask = in_hue & ((s >= 0.34) | (g_dom & (s >= sat_floor)))
    else:
        mask = in_hue & g_dom & (s >= sat_floor)

    # Fondu doux sur les bords de la fenêtre pour éviter les liserés de teinte.
    edge = 8.0
    w = np.ones_like(h)
    lo_band = (h >= H_LO) & (h < H_LO + edge)
    hi_band = (h > H_HI - edge) & (h <= H_HI)
    w[lo_band] = (h[lo_band] - H_LO) / edge
    w[hi_band] = (H_HI - h[hi_band]) / edge
    s_band = (s < sat_floor + 0.10) & ~(olive_pass & (s >= 0.34))
    w[s_band] *= np.clip((s[s_band] - sat_floor) / 0.10, 0, 1)
    w = np.where(mask, np.clip(w, 0, 1), 0.0)

    # Certaines photos contiennent du vert qui n'a rien à voir avec le packaging
    # (plantes du décor). Là où c'est le cas, on borne le recolorage aux zones
    # occupées par le produit, données en fractions de l'image.
    if regions:
        H, W = w.shape
        keep = np.zeros_like(w, dtype=bool)
        for (x0, y0, x1, y1) in regions:
            keep[int(y0*H):int(y1*H), int(x0*W):int(x1*W)] = True
        w = np.where(keep, w, 0.0)

    # Teinte : on projette la fenêtre verte sur une plage étroite autour du bordeaux,
    # ce qui conserve les écarts relatifs de teinte (donc le modelé du packaging).
    t = (h - H_LO) / (H_HI - H_LO)
    h_new = (H_TARGET - H_SPREAD / 2 + t * H_SPREAD) % 360.0

    # Le lime est bien plus lumineux que le bordeaux : on comprime la luminosité
    # des pixels recolorés, sans écraser les noirs.
    v_new = np.clip(v_lift + v * v_gain, 0, 1)
    s_new = np.clip(s * s_gain, 0, 1)

    h_out = np.where(w > 0, h_new, h)
    s_out = s * (1 - w) + s_new * w
    v_out = v * (1 - w) + v_new * w

    out = hsv_to_rgb_np(h_out, s_out, v_out)
    out = np.clip(out * 255.0, 0, 255).astype(np.uint8)
    return Image.fromarray(out), float(w.mean())

if __name__ == '__main__':
    # Le détourage de lp-lifestyle-sachet a laissé de larges franges olive autour
    # des framboises : cette image seule a besoin de la passe agressive. Sur les
    # autres, elle virerait au rose le lettrage crème du sachet.
    OLIVE_PASS = {'lp-lifestyle-sachet', 'lp-benefits-lifestyle'}
    # lp-benefits-lifestyle : salon avec de vraies plantes vertes en arrière-plan.
    # On ne recolore que le sachet tenu à deux mains et le gummy entre les doigts.
    REGIONS = {'lp-benefits-lifestyle': [(0.38, 0.49, 0.69, 0.79), (0.24, 0.37, 0.34, 0.47)]}
    for p in sorted(SRC.glob('*.png')) + sorted(SRC.glob('*.jpeg')):
        img, cover = recolor(p, olive_pass=(p.stem in OLIVE_PASS), regions=REGIONS.get(p.stem))
        out = DST / (p.stem + '.jpg')
        img.save(out, 'JPEG', quality=88, optimize=True, progressive=True)
        print(f'{p.name}: {cover*100:.1f}% de pixels recolorés -> {out.name} ({out.stat().st_size//1024} Ko)')
