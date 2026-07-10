# Kit LP Liquid — Gomu

Port complet du système de landing pages du prototype Next.js (`src/components/lp/`,
`src/lib/lp-content.ts`) vers des sections Shopify OS 2.0 en Liquid manuel, conçu pour être
déposé dans un **thème Dawn** (gratuit). Zéro dépendance, < 1 Ko de JavaScript par page,
aucun fichier core de Dawn modifié (tout est préfixé `lp-`).

## Contenu

```
layout/lp.liquid                 Layout dédié LP : pas de header/footer du thème, noindex,
                                 charge uniquement lp-base.css + lp.js
sections/lp-announcement.liquid  Barre d'annonce (dégradé orange, dismissible en option)
sections/lp-hero.liquid          Héro 2 colonnes — image LCP préchargée, fetchpriority=high
sections/lp-reasons.liquid       Les « N raisons » — 1 block par raison, numérotation et
                                 alternance de layout automatiques
sections/lp-stats.liquid         Preuve sociale chiffrée (carte jaune, 3 stats)
sections/lp-timeline.liquid      « Ce que tu peux attendre » (timeline verticale 3 étapes)
sections/lp-trust-grid.liquid    « Pourquoi nous faire confiance » (grille 2×2)
sections/lp-buy-box.liquid       Conversion : {% form 'product' %} natif, selling plans
                                 (abonnement présélectionné), toggle 100 % CSS
sections/lp-faq.liquid           FAQ accordéon natif <details name> (exclusif, 0 JS)
sections/lp-footer.liquid        Footer sombre + nav croisée des 10 LP
sections/lp-sticky-cta.liquid    CTA sticky mobile (apparaît après 600 px de scroll)
sections/lp-testimonials.liquid  BONUS parité Grüns : mur de témoignages par avatar
sections/lp-comparison.liquid    BONUS parité Grüns : tableau comparatif nous vs eux
snippets/lp-icon.liquid          ~10 icônes SVG inlinées (équivalents lucide)
snippets/lp-stars.liquid         Étoiles de notation
assets/lp-base.css               Tokens + utilitaires partagés (~4 Ko)
assets/lp.js                     Reveal au scroll + sticky CTA + dismiss (~1 Ko, defer)
assets/lp-*.jpeg                 Visuels de démo (fallbacks des image_picker)
templates/page.lp-<slug>.json    Les 10 LP avatar, contenu migré depuis lp-content.ts :
                                 digestion, stress-sommeil, halal, pilules, energie,
                                 made-in-france, multi-pots, immunite, arnaque, parents
```

## Installation dans Dawn

1. **Ne jamais travailler sur le thème publié.** Dupliquer le thème live (Admin → Thèmes →
   … → Dupliquer), ou mieux : brancher le repo du thème sur GitHub (intégration Shopify GitHub).
2. Télécharger [Dawn](https://github.com/Shopify/dawn) (ou exporter votre copie), puis copier
   les dossiers de ce kit **dans** le thème : `layout/`, `sections/`, `snippets/`, `assets/`,
   `templates/` (aucun fichier de Dawn n'est écrasé — tout est préfixé `lp-` ou `page.lp-`).
3. Développement local : `shopify theme dev --store <votre-store>.myshopify.com`
   (hot-reload sur un thème de développement invisible du public).
4. Lint avant chaque push : `shopify theme check`.
5. Preview partageable : `shopify theme push --unpublished`.

## Mise en service des 10 LP

1. Admin → Boutique en ligne → Pages → créer 10 pages avec les handles
   `lp-digestion`, `lp-stress-sommeil`, `lp-halal`, `lp-pilules`, `lp-energie`,
   `lp-made-in-france`, `lp-multi-pots`, `lp-immunite`, `lp-arnaque`, `lp-parents`
   (le contenu de la page peut rester vide : tout vient du template).
2. Pour chaque page, choisir le template `page.lp-<slug>` correspondant.
   Les URLs finales `/pages/lp-<slug>` correspondent à la nav croisée du footer.
3. **Buy box** : dans l'éditeur de thème, ouvrir la section « LP — Buy box » de chaque
   template et sélectionner le produit. Installer une app d'abonnements
   (Shopify Subscriptions — gratuite — ou Skio) et créer un selling plan « Abonnement
   mensuel » avec la remise voulue : la carte abonnement, les prix, le prix barré et le
   pourcentage de remise se calculent alors automatiquement depuis le produit.
   Tant qu'aucun produit n'est sélectionné, la section affiche des valeurs de démo.
4. Remplacer les visuels de démo par les vraies photos via les réglages de chaque section,
   et les `[X]` (avis, stats) par les vrais chiffres.

## Règles de performance (déjà appliquées, à maintenir)

- L'image héro est le LCP : préchargée (`preload_tag`), `loading="eager"`,
  `fetchpriority="high"`, srcset serré. **Toutes** les autres images sont en lazy.
- `lp.js` est le seul JavaScript (defer, ~1 Ko) : reveal, sticky CTA, dismiss.
  Tout le reste est CSS natif (`<details name>`, radio `:checked`, `position:fixed`).
- Aucune font téléchargée : stack système (Inter s'affiche si installée). Pour charger
  Inter : réglages typographie de Dawn + `font_face`, 2 graisses max.
- Sur les templates LP, auditer les **app embeds** (Éditeur de thème → App embeds) : les
  apps injectent du JS render-blocking. Re-vérifier après chaque installation d'app.
- Mesurer les URLs `/pages/lp-*` (pas la home) avec PageSpeed Insights après chaque
  modification. Cibles : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1.

## A/B test sans Replo

Dupliquer un template (`page.lp-digestion-b.json`), créer une page `lp-digestion-b`,
répartir le trafic au niveau des campagnes (2 URLs), comparer par page d'atterrissage
dans Shopify Analytics.

## Ajouter un nouvel avatar

1 fichier `templates/page.lp-<nouveau>.json` (copier un existant, surcharger le héro et
les blocks `reason`) + 1 page admin. ~30 minutes.
