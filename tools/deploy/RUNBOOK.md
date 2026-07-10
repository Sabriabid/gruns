# Runbook — Déploiement du kit LP dans la boutique Shopify

> Séquence exécutable par Claude dès qu'une session dispose du connecteur Shopify
> (MCP) autorisé. Zéro action manuelle du marchand. Aucune étape ne touche le
> thème publié : tout se fait sur un thème **non publié** avec liens de preview.

## 0. Pré-vol

- `get-shop-info` → domaine, devise (attendu EUR), thème publié actuel.
- `graphql_query` : `{ themes(first: 20) { nodes { id name role } } }` — vérifier
  qu'aucun thème « Gomu — Dawn + LP kit » n'existe déjà (idempotence : si oui,
  reprendre à l'étape 3 sur ce thème).

## 1. Produit

- `search_products` « gomu » (puis « nutrition ») :
  - S'il existe un produit adéquat → récupérer son **handle** et son variant id.
  - Sinon `create-product` : titre « GOMU — Nutrition quotidienne complète »,
    prix **39,00** (achat ponctuel), description depuis `src/lib/lp-content.ts`
    (buyBox.subtitle), statut ACTIVE. Image : `theme/assets/lp-product-buybox.jpeg`.

## 2. Selling plan (abonnement)

- Tenter `graphql_mutation` `sellingPlanGroupCreate` :
  - name « Abonnement mensuel », option « Livraison » / « Tous les mois »,
  - plan : delivery recurring 1 mois, billing recurring 1 mois,
    pricingPolicies : FIXED, adjustment PRICE → **24,90** (fallback : PERCENTAGE 30 %),
  - `resources { productIds: [<id produit>] }`.
- ⚠️ Les selling plan groups sont détenus par l'app qui les crée. Si la mutation
  est refusée pour l'app du connecteur → **fallback documenté** : la buy box
  reste en mode « achat ponctuel seul » (elle gère ce cas nativement) et on
  note dans le rapport final qu'il faut installer l'app gratuite
  « Shopify Subscriptions » et créer le plan « Abonnement mensuel » (2 min).
  Le kit lit alors les prix automatiquement (setting `sub_plan_name` = « mensuel »).

## 3. Thème non publié : Dawn + kit

- `graphql_mutation` `themeCreate(source: "https://codeload.github.com/Shopify/dawn/zip/refs/heads/main", name: "Gomu — Dawn + LP kit")`
  (la source est téléchargée par les serveurs Shopify, pas par la session).
  Poller `theme { processing }` jusqu'à false.
- `graphql_mutation` `themeFilesUpsert(themeId, files: [...])`, par lots ≤ 20 :
  - TEXT : `layout/lp.liquid`, les 12 `sections/lp-*.liquid`,
    `snippets/lp-icon.liquid`, `snippets/lp-stars.liquid`,
    `assets/lp-base.css`, `assets/lp.js`,
    les 10 `templates/page.lp-*.json` — **en injectant** dans la section
    `buy_box.settings` de chaque template : `"product": "<handle étape 1>"`
    et `"sub_plan_name": "mensuel"`.
  - BASE64 : les 8 `assets/lp-*.jpeg` (fallbacks visuels).
- Vérifier : `graphql_query` `theme.files(filenames: ["sections/lp-hero.liquid", ...])`
  → aucun fichier manquant.

## 4. Les 10 pages

Pour chaque slug (`digestion, stress-sommeil, halal, pilules, energie,
made-in-france, multi-pots, immunite, arnaque, parents`) :

- `graphql_mutation` `pageCreate(page: { title: <meta.title de lp-content.ts>,
  handle: "lp-<slug>", templateSuffix: "lp-<slug>", isPublished: true })`.
- Idempotence : si le handle existe déjà → `pageUpdate` du templateSuffix.
- NB : tant que le thème kit n'est pas publié, ces pages rendent le template
  par défaut sur le thème live (inoffensif : elles ne sont liées nulle part).

## 5. Rapport et preview (fin de run)

- Construire les 10 liens de preview :
  `https://<domaine>/pages/lp-<slug>?preview_theme_id=<id numérique du thème>`
- Livrer au marchand : liens de preview, état du selling plan (créé ou fallback),
  handle produit, id du thème. **Ne PAS publier le thème** — la publication
  reste une décision explicite du marchand (un mot suffit :
  `themePublish(id)` est prêt).

## Post-déploiement (sur demande)

- Publier le thème kit, ou recopier les fichiers `lp-*` dans le thème live
  via `themeFilesCopy` (aucun fichier existant n'est écrasé, tout est préfixé).
- Remplacer les visuels de démo et les « [X] » par les vrais contenus.
- Brancher le repo GitHub sur le thème (intégration Shopify GitHub) pour que
  `theme/` devienne la source de vérité versionnée.
