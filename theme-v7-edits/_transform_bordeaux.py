#!/usr/bin/env python3
"""Transformation DA vert → bordeaux/pêche — thème GOMU v6 → v7.
Lit le backup, applique des remplacements chirurgicaux, écrit dans theme-v7-edits/.
Chaque remplacement a un compte attendu (min, max) — échec bruyant si hors bornes.
"""
import re, sys, pathlib

SRC = pathlib.Path('/Users/sabri/Dev/gruns/theme-backups/2026-08-10-gomu-v6-203413225817')
DST = pathlib.Path('/Users/sabri/Dev/gruns/theme-v7-edits')

# (pattern_regex, replacement, min_count, max_count) — IGNORECASE pour les hex
R = {
 'snippets/gomu-base.liquid': [
  (r'--ink:#002613', '--ink:#3B0F14', 1, 1),
  (r'--ink2:#42604F', '--ink2:#6B4046', 1, 1),
  (r'--mute:#7A8F80', '--mute:#8F6E63', 1, 1),
  (r'--cream:#FFF7DF', '--cream:#FBF4ED', 1, 1),
  (r'--cream2:#FFFDF3', '--cream2:#FDF9F4', 1, 1),
  (r'--line:#EADFBE', '--line:#EAD5C2', 1, 1),
  (r'--mint:#DAECE3', '--mint:#F8E3D5', 1, 1),
  (r'--deep:#00572C', '--deep:#861B25', 1, 1),
  (r'--dark:#001C0E', '--dark:#4A0D14', 1, 1),
  (r'--lime:#8FE640', '--lime:#F2BE9C', 1, 1),
  (r'\.gomu-btn--lime \{ background:var\(--lime\); color:var\(--ink\); \}',
   '.gomu-btn--lime { background:var(--lime); color:var(--deep); }', 1, 1),
  (r'\.gomu-btn--lime:hover \{ background:var\(--cream\); \}',
   '.gomu-btn--lime:hover { background:#E8A87C; }', 1, 1),
  (r'rgba\(255,\s*247,\s*223,\.36\)', 'rgba(249,227,211,.36)', 1, 1),
  (r'rgba\(255,\s*247,\s*223,\.08\)', 'rgba(249,227,211,.08)', 1, 1),
 ],
 'sections/gomu-hero.liquid': [
  (r'rgba\(0,28,14,', 'rgba(74,13,20,', 1, 8),
  (r'rgba\(0,30,15,', 'rgba(80,15,22,', 1, 4),
  (r'rgba\(0,34,17,', 'rgba(88,17,24,', 1, 4),
  (r'rgba\(0,38,19,', 'rgba(96,19,27,', 1, 4),
  (r'rgba\(0,20,10,\.55\)', 'rgba(58,10,16,.55)', 1, 2),
  (r'rgba\(255,\s*247,\s*223,', 'rgba(249,227,211,', 1, 8),
 ],
 'sections/gomu-cta.liquid': [
  (r'rgba\(0,28,14,', 'rgba(74,13,20,', 1, 8),
  (r'rgba\(0,30,15,', 'rgba(80,15,22,', 1, 4),
  (r'rgba\(0,34,17,', 'rgba(88,17,24,', 1, 4),
  (r'rgba\(0,38,19,', 'rgba(96,19,27,', 1, 4),
  (r'rgba\(255,\s*247,\s*223,', 'rgba(249,227,211,', 1, 6),
 ],
 'sections/gomu-inside.liquid': [
  # section + tuiles chips/rows partagent le même fond (filets clairs entre les tuiles)
  (r'background:var\(--ink\)', 'background:var(--deep)', 3, 3),
  (r'#04331B', '#9C2531', 3, 3),
  (r'rgba\(255,\s*247,\s*223,', 'rgba(249,227,211,', 6, 10),
  (r'dark green', 'deep red', 1, 1),
 ],
 'sections/gomu-buybox.liquid': [
  (r'#E3D8B6', '#EAD0BA', 2, 2),
  (r'#F6EFD8', '#F8E3D5', 1, 1),
  (r'#4A6B58', '#6B4046', 1, 1),
  (r'#9AA79E', '#A78D82', 2, 2),
  (r'#C4B893', '#D8B9A2', 1, 1),
  (r'#8C9E92', '#9B8177', 1, 1),
  (r'rgba\(255,253,243,\.97\)', 'rgba(253,249,244,.97)', 1, 1),
 ],
 'sections/gomu-compare.liquid': [
  (r'#B3A98A', '#C9AB93', 1, 2),
 ],
 'sections/gomu-faq.liquid': [
  (r'#8C9E92', '#9B8177', 1, 1),
 ],
 'sections/gomu-marquee.liquid': [
  (r'rgba\(0,38,19,\.1\)', 'rgba(96,19,27,.1)', 1, 1),
  (r'"default": "#002613"', '"default": "#861B25"', 0, 1),
  (r'"default": "#DAECE3"', '"default": "#F9E3D3"', 0, 1),
  (r'"default": "#8FE640"', '"default": "#F2BE9C"', 0, 1),
 ],
 'templates/index.json': [
  (r'"bg": "#002613", "color": "#DAECE3", "sep_color": "#8FE640"',
   '"bg": "#861B25", "color": "#F9E3D3", "sep_color": "#F2BE9C"', 1, 1),
  (r'"bg": "#DAECE3", "color": "#00572C", "sep_color": "#7FB79A"',
   '"bg": "#F2BE9C", "color": "#861B25", "sep_color": "#A32836"', 1, 1),
  (r'"image": "shopify://shop_images/gomu-v2-hero\.png",(\s*)"focal": 86',
   r'"image": "shopify://shop_images/pack-strawberry.jpg",\1"focal": 50', 1, 1),
  (r'"image": "shopify://shop_images/gomu-v2-cta\.png",(\s*)"focal": 86',
   r'"image": "shopify://shop_images/pack-strawberry.jpg",\1"focal": 50', 1, 1),
  (r'"image": "shopify://shop_images/gomu-v2-flatlay\.png"',
   '"image": "shopify://shop_images/pack-strawberry.jpg"', 1, 1),
  (r'dark green', 'deep red', 3, 3),
 ],
 'config/settings_data.json': [
  (r'"background": "#FFF7DF"', '"background": "#FBF4ED"', 1, 1),
  (r'"foreground": "#002613"', '"foreground": "#3B0F14"', 1, 1),
  (r'"color1": "#00572C"', '"color1": "#861B25"', 1, 1),
  (r'"color2": "#DAECE3"', '"color2": "#F8E3D5"', 1, 1),
  (r'"palette_primary_button_background": "#007E40"', '"palette_primary_button_background": "#861B25"', 1, 1),
  (r'"palette_primary_button_border": "#007E40"', '"palette_primary_button_border": "#861B25"', 1, 1),
  (r'"badge_sold_out_background_color": "#DAECE3"', '"badge_sold_out_background_color": "#F8E3D5"', 1, 1),
 ],
 'sections/header-group.json': [
  (r'"background_color": "#5CB01F"', '"background_color": "#F2BE9C"', 1, 1),
 ],
 'templates/product.json': [
  (r'"text_color": "#4C9E16"', '"text_color": "#A32836"', 1, 1),
  (r'"text_color": "#4A5540"', '"text_color": "#6B4046"', 1, 1),
  (r'"#5CB01F"', '"#861B25"', 2, 2),
  (r'"#FFF6E3"', '"#F9E3D3"', 1, 1),
 ],
 'assets/lp-base.css': [
  (r'DA = identique à gruns\.co \(référence explicite de Sabri\) \+ packaging proto\n   vert lime : verts #007e40/#002c17, crème #fff7df, jaune #ffcc2f, texte\n   #260a00, boutons pilule verts pleins texte blanc \(semibold, -0\.03em\)\.',
   'DA = bordeaux/pêche, alignée sur le packaging Strawberry Raspberry :\n   bordeaux #861B25/#4A0D14, blanc cassé #FBF4ED, pêche #F2BE9C, texte\n   #3B0F14, boutons pilule bordeaux pleins texte clair (semibold, -0.03em).',
   1, 1),
  (r'#007e40', '#861B25', 1, 4),
  (r'#00572c', '#6E1520', 1, 2),
  (r'#002c17', '#4A0D14', 1, 2),
  (r'#260a00', '#3B0F14', 1, 2),
  (r'#fff7df', '#FBF4ED', 1, 3),
  (r'#fff9ed', '#FDF9F4', 2, 3),
  (r'#ffcc2f', '#F2BE9C', 2, 4),
  (r'#daece3', '#F8E3D5', 1, 2),
  (r'#00b45b', '#C24856', 1, 1),
  (r'rgba\(10,\s*25,\s*18,', 'rgba(74,13,20,', 2, 6),
  (r'rgba\(38,\s*10,\s*0,', 'rgba(59,15,20,', 1, 4),
 ],
 'layout/lp.liquid': [
  (r'#fff7df', '#FBF4ED', 1, 3),
 ],
 'sections/lp-announcement.liquid': [ (r'rgba\(38,\s*10,\s*0,', 'rgba(59,15,20,', 1, 2) ],
 'sections/lp-hero.liquid': [ (r'rgba\(255,\s*247,\s*223,', 'rgba(249,227,211,', 2, 3) ],
 'sections/lp-buy-box.liquid': [
  (r'rgba\(255,\s*247,\s*223,', 'rgba(249,227,211,', 1, 3),
  (r'rgba\(0,\s*44,\s*23,', 'rgba(74,13,20,', 2, 4),
 ],
 'sections/lp-sticky-cta.liquid': [ (r'rgba\(0,\s*44,\s*23,', 'rgba(74,13,20,', 2, 3) ],
 'sections/lp-comparison.liquid': [
  (r'rgba\(38,\s*10,\s*0,', 'rgba(59,15,20,', 1, 2),
  (r'rgba\(0,\s*126,\s*64,', 'rgba(134,27,37,', 1, 2),
 ],
 'sections/lp-faq.liquid': [ (r'rgba\(0,\s*44,\s*23,', 'rgba(74,13,20,', 1, 2) ],
 'sections/lp-footer.liquid': [ (r'rgba\(0,\s*126,\s*64,', 'rgba(134,27,37,', 1, 2) ],
 'sections/lp-reasons.liquid': [ (r'rgba\(0,\s*44,\s*23,', 'rgba(74,13,20,', 1, 2) ],
 'sections/lp-stats.liquid': [ (r'rgba\(38,\s*10,\s*0,', 'rgba(59,15,20,', 1, 2) ],
 'sections/lp-testimonials.liquid': [ (r'rgba\(38,\s*10,\s*0,', 'rgba(59,15,20,', 1, 3) ],
 'sections/lp-timeline.liquid': [ (r'rgba\(0,\s*44,\s*23,', 'rgba(74,13,20,', 1, 2) ],
 'sections/lp-trust-grid.liquid': [
  (r'rgba\(38,\s*10,\s*0,', 'rgba(59,15,20,', 1, 2),
  (r'rgba\(0,\s*126,\s*64,', 'rgba(134,27,37,', 1, 2),
 ],
}

# Motifs verts qui ne doivent PLUS exister après transformation (anti-vert)
GREEN_PATTERNS = [
 '#002613', '#00572C', '#8FE640', '#DAECE3', '#5CB01F', '#007E40', '#4C9E16',
 '#04331B', '#7FB79A', '#FFF7DF', '#FFFDF3', '#EADFBE', '#E3D8B6', '#F6EFD8',
 '#B3A98A', '#8C9E92', '#9AA79E', '#C4B893', '#4A6B58', '#42604F', '#7A8F80',
 '#4A5540', '#001C0E', '#002c17', '#260a00', '#ffcc2f', '#00b45b', '#fff9ed',
 'rgba(0,28,14', 'rgba(0,30,15', 'rgba(0,34,17', 'rgba(0,38,19', 'rgba(0,20,10',
 'rgba(255,247,223', 'rgba(255,253,243', 'rgba(0,44,23', 'rgba(0, 44, 23',
 'rgba(0,126,64', 'rgba(0, 126, 64', 'rgba(10,25,18', 'rgba(10, 25, 18',
 'dark green',
]

errors = []
skipped = []
DST.mkdir(exist_ok=True)
for fname, rules in R.items():
    src = SRC / fname
    if not src.exists():
        skipped.append(fname)
        continue
    text = src.read_text()
    orig = text
    print(f'\n=== {fname} ===')
    for pat, rep, mn, mx in rules:
        text, n = re.subn(pat, rep, text, flags=re.IGNORECASE)
        status = 'OK' if mn <= n <= mx else f'HORS BORNES [{mn},{mx}]'
        print(f'  {n:2d}x  {pat[:60]:60s} {status}')
        if not (mn <= n <= mx):
            errors.append(f'{fname}: "{pat}" → {n} remplacements (attendu [{mn},{mx}])')
    out = DST / fname
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text)

print('\n=== Contrôle anti-vert sur les fichiers transformés ===')
leftovers = 0
for fname in R:
    out = DST / fname
    if not out.exists():
        continue
    text = out.read_text()
    for g in GREEN_PATTERNS:
        # exceptions : le vert sémantique #059669 n'est pas dans la liste ; rien à exclure ici
        cnt = text.lower().count(g.lower())
        if cnt:
            print(f'  RESTE: {fname}: {g} x{cnt}')
            leftovers += cnt

if skipped:
    print(f'\n=== NON TRAITÉS (source absente du backup): {len(skipped)} ===')
    for s in skipped: print('  -', s)

if errors:
    print('\n!!! ERREURS:')
    for e in errors: print('  -', e)
    sys.exit(1)
print(f'\nTerminé. {len(R) - len(skipped)} fichiers transformés. Motifs verts restants: {leftovers}')
sys.exit(0 if leftovers == 0 else 2)
