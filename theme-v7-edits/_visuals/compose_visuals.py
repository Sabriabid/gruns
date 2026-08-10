#!/usr/bin/env python3
"""Compose des visuels bordeaux à partir du packshot fourni.

Le packshot source est carré avec fond blanc ; les sections du thème l'affichent
en object-fit:cover, ce qui le recadrait violemment. On le détoure et on le
recompose sur des canevas au bon ratio, fond bordeaux, pour que le cover ne
tronque plus le produit.
"""
from PIL import Image, ImageFilter
import pathlib

SRC = pathlib.Path('/Users/sabri/Dev/gruns/design_handoff_da_bordeaux/images/pack-strawberry.png')
OUT = pathlib.Path('/private/tmp/claude-501/-Users-sabri-Dev-gruns/08b34d95-1c10-4373-b770-a7428db66b20/scratchpad')

BORDEAUX = (134, 27, 37)
BORDEAUX_DARK = (74, 13, 20)

def cutout(img, thresh=238):
    """Rend transparent le fond blanc uniforme, puis recadre sur le produit."""
    img = img.convert('RGBA')
    px = img.load()
    w, h = img.size
    # masque : blanc quasi pur -> transparent (flood depuis les bords pour ne pas
    # trouer les zones claires internes du packaging)
    from collections import deque
    seen = [[False] * w for _ in range(h)]
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            q.append((x, y))
    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or seen[y][x]:
            continue
        r, g, b, a = px[x, y]
        if r < thresh or g < thresh or b < thresh:
            continue
        seen[y][x] = True
        px[x, y] = (r, g, b, 0)
        q.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
    # second passage : les zones blanches enclavées (entre les gummies du bas)
    # ne sont pas atteintes par le flood. Le packaging ne contient aucun blanc
    # pur — son bandeau et son lettrage sont pêche — donc un seuil global est sûr.
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a and r >= 246 and g >= 246 and b >= 246:
                px[x, y] = (r, g, b, 0)
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img

def compose(pack, size, pack_height_ratio, cx_ratio, cy_ratio, gradient=True):
    W, H = size
    canvas = Image.new('RGB', (W, H), BORDEAUX)
    if gradient:
        # dégradé vertical discret bordeaux foncé -> bordeaux, comme les sections sombres
        grad = Image.new('RGB', (1, H))
        gp = grad.load()
        for y in range(H):
            t = y / max(1, H - 1)
            gp[0, y] = tuple(int(BORDEAUX_DARK[i] + (BORDEAUX[i] - BORDEAUX_DARK[i]) * t) for i in range(3))
        canvas = grad.resize((W, H))
    ph = int(H * pack_height_ratio)
    pw = int(pack.width * ph / pack.height)
    p = pack.resize((pw, ph), Image.LANCZOS)
    # ombre portée douce pour décoller le pack du fond
    shadow = Image.new('RGBA', (pw + 80, ph + 80), (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 110), (40, 55, 40 + pw, 55 + ph), p)
    shadow = shadow.filter(ImageFilter.GaussianBlur(28))
    x = int(W * cx_ratio) - pw // 2
    y = int(H * cy_ratio) - ph // 2
    canvas.paste(shadow, (x - 40, y - 40), shadow)
    canvas.paste(p, (x, y), p)
    return canvas

print('détourage du packshot…')
pack = cutout(Image.open(SRC))
print(f'  produit détouré : {pack.size}')

# Les sections affichent ces visuels en object-fit:cover. Le ratio du canvas doit
# donc coller au ratio de la bande pour que le recadrage ne rogne pas le produit :
# le hero est ~2.3:1, le CTA final ~3:1, la tuile Inside est carrée.
jobs = [
    # (nom, taille canvas, hauteur pack, centre x, centre y)
    ('hero',   (2400, 1050), 0.88, 0.68, 0.53),
    ('cta',    (2400,  800), 0.86, 0.72, 0.54),
    ('inside', (1600, 1600), 0.86, 0.50, 0.50),
]
for name, size, ph, cx, cy in jobs:
    img = compose(pack, size, ph, cx, cy)
    out = OUT / f'gomu-bordeaux-{name}.jpg'
    img.save(out, 'JPEG', quality=84, optimize=True, progressive=True)
    print(f'  {out.name}: {size[0]}x{size[1]} — {out.stat().st_size // 1024} Ko')
