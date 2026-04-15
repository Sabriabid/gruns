import type { NorthStar, RoadmapItem, Risk } from "./types";

export const northStar: NorthStar = {
  targetRevenueEUR: 100_000_000,
  targetYear: 2026,
  targetMRR: 8_333_333,
  targetActiveSubs: 280_000,
  maxCAC: 45,
  minROAS: 2.5,
  monthlyGrowthRequiredPct: 35,
  current: {
    mrr: 0,
    subs: 0,
    cac: 0,
    roas: 0,
    asOf: "2026-04-15",
  },
  assumptions: [
    "Prix moyen panier : 29€/mois (mix sub/OT, avec promo lancement effective)",
    "LTV cible : 10-12 mois (~290-350€) → LTV/CAC > 6:1",
    "Churn mensuel cible : < 8% après mois 3",
    "Gross margin : 70%+ en volume",
    "Payback CAC : 6 mois max",
    "Pour atteindre 280K abonnés actifs en déc. 2026 depuis 0 en mai 2026 : courbe exponentielle avec pic scaling Q3-Q4",
  ],
};

export const roadmapItems: RoadmapItem[] = [
  // ========== P0 — NOW (blockers critiques) ==========
  {
    id: "r-formule-valide",
    title: "Finaliser & valider la formule avec façonnier + consultant",
    description:
      "Valider dosages, formes biodisponibles, goût, stabilité, coûts. Sans formule validée, aucun claim définitif, aucune production, aucun test Eurofins.",
    pillar: "product",
    priority: "P0",
    rice: { reach: 100, impact: 10, confidence: 90, effort: 4, score: 225 },
    estimatedRevenueImpactEUR: 100_000_000,
    status: "wip",
    owner: "Sabri",
    dueQuarter: "Q2-2026",
    dependencies: [],
  },
  {
    id: "r-packaging",
    title: "Packaging final + photo produit pro",
    description: "Design boîte + sachet. Photos produit lifestyle pour toutes les LPs et pubs.",
    pillar: "product",
    priority: "P0",
    rice: { reach: 100, impact: 5, confidence: 80, effort: 3, score: 133 },
    estimatedRevenueImpactEUR: 100_000_000,
    status: "backlog",
    dueQuarter: "Q2-2026",
    dependencies: ["r-formule-valide"],
  },
  {
    id: "r-tracking",
    title: "Câbler tracking analytics + UTM + attribution",
    description:
      "GA4, Meta Pixel, TikTok Pixel, UTM par LP. Pré-requis absolu du scaling pub — sans attribution, on brûle du budget aveugle.",
    pillar: "tech",
    priority: "P0",
    rice: { reach: 100, impact: 10, confidence: 100, effort: 2, score: 500 },
    estimatedRevenueImpactEUR: 100_000_000,
    status: "next",
    owner: "Sabri",
    dueQuarter: "Q2-2026",
    dependencies: [],
  },
  {
    id: "r-checkout",
    title: "Checkout + abonnements Stripe + post-purchase",
    description: "Stripe Subscriptions + Shopify ou solution équivalente. UX fluide, cancellation 2 clics.",
    pillar: "tech",
    priority: "P0",
    rice: { reach: 100, impact: 10, confidence: 80, effort: 4, score: 200 },
    estimatedRevenueImpactEUR: 100_000_000,
    status: "backlog",
    dueQuarter: "Q2-2026",
    dependencies: ["r-formule-valide"],
  },

  // ========== P0 — NEXT (30-60 jours) ==========
  {
    id: "r-ads-creatives",
    title: "Produire 10 creatives UGC Meta + 10 TikTok par angle",
    description:
      "Par angle pub validé : 10 UGC Meta + 10 UGC TikTok. Total ~100 creatives pour les 5 angles P0.",
    pillar: "acquisition",
    priority: "P0",
    rice: { reach: 100, impact: 10, confidence: 70, effort: 8, score: 87 },
    estimatedRevenueImpactEUR: 80_000_000,
    status: "backlog",
    dueQuarter: "Q2-2026",
    dependencies: ["r-formule-valide", "r-packaging"],
  },
  {
    id: "r-email-onboarding",
    title: "Welcome flow email 7 jours + onboarding J+1/J+7/J+14",
    description:
      "Capturer le moment de force post-achat. Anti-churn mécanique. Réduit le return rate de 30%+ selon benchmarks DTC.",
    pillar: "retention",
    priority: "P1",
    rice: { reach: 100, impact: 5, confidence: 80, effort: 3, score: 133 },
    estimatedRevenueImpactEUR: 25_000_000,
    status: "backlog",
    dueQuarter: "Q3-2026",
    dependencies: ["r-checkout"],
  },

  // ========== P1 — NEXT (90-180 jours) ==========
  {
    id: "r-trustpilot",
    title: "Ingénieur les 500 premiers avis Trustpilot",
    description:
      "Post-purchase email demande avis, template simple, relance J+7 J+14. Target : 500 avis en 90 jours après lancement.",
    pillar: "brand",
    priority: "P1",
    rice: { reach: 50, impact: 5, confidence: 80, effort: 2, score: 100 },
    estimatedRevenueImpactEUR: 15_000_000,
    status: "backlog",
    dueQuarter: "Q3-2026",
    dependencies: ["r-checkout"],
  },
  {
    id: "r-celebrity",
    title: "Celebrity / influenceur FR partnership",
    description:
      "Équivalent Shaun White côté FR : créateur wellness / athlète / parent influent. Target : 1 deal macro + 10 micro / mois.",
    pillar: "acquisition",
    priority: "P1",
    rice: { reach: 50, impact: 10, confidence: 50, effort: 5, score: 50 },
    estimatedRevenueImpactEUR: 20_000_000,
    status: "backlog",
    dueQuarter: "Q3-2026",
    dependencies: ["r-formule-valide"],
  },
  {
    id: "r-pr-business",
    title: "PR business FR (Les Échos, Maddyness, BFM Business)",
    description:
      "Story angle : « Le Grüns français, fondé sur la transparence radicale ». Target 3 couvertures média Tier 1 à Q3.",
    pillar: "brand",
    priority: "P1",
    rice: { reach: 40, impact: 5, confidence: 50, effort: 3, score: 33 },
    estimatedRevenueImpactEUR: 5_000_000,
    status: "backlog",
    dueQuarter: "Q3-2026",
    dependencies: ["r-formule-valide"],
  },
  {
    id: "r-halal-community",
    title: "Activation communauté halal (Al-Kanz, mosquées, influenceurs)",
    description:
      "Angle mort marché français : 5,4M+ musulmans. Partenariats Al-Kanz, certifications visibles, influenceurs halal.",
    pillar: "acquisition",
    priority: "P1",
    rice: { reach: 30, impact: 10, confidence: 70, effort: 4, score: 52 },
    estimatedRevenueImpactEUR: 20_000_000,
    status: "backlog",
    dueQuarter: "Q3-2026",
    dependencies: ["r-formule-valide"],
  },

  // ========== P2 — LATER (6+ mois) ==========
  {
    id: "r-retail",
    title: "Distribution retail FR (pharmacies pilotes, Monoprix)",
    description:
      "Grüns a explosé avec Sprouts/Target/Walmart. Équivalent FR : pharmacies Giphar, Monoprix Beauty, Nature & Découvertes.",
    pillar: "acquisition",
    priority: "P2",
    rice: { reach: 50, impact: 10, confidence: 30, effort: 8, score: 18 },
    estimatedRevenueImpactEUR: 30_000_000,
    status: "backlog",
    dueQuarter: "Q4-2026",
    dependencies: ["r-formule-valide", "r-trustpilot"],
  },
  {
    id: "r-app",
    title: "App mobile / espace client (loyalty + referral)",
    description:
      "Référence et fidélité. Programme parrainage puissant (inspiration Lillydoo, Respire).",
    pillar: "retention",
    priority: "P2",
    rice: { reach: 40, impact: 5, confidence: 60, effort: 8, score: 15 },
    estimatedRevenueImpactEUR: 10_000_000,
    status: "backlog",
    dueQuarter: "Q4-2026",
    dependencies: ["r-checkout"],
  },
];

export const risks: Risk[] = [
  {
    id: "risk-dgccrf",
    title: "Contrôle DGCCRF / régulation allégations santé EFSA",
    category: "regulatory",
    severity: 5,
    likelihood: 3,
    mitigation:
      "Auditer chaque claim du site et des pubs. Allégations EFSA autorisées uniquement. Ne jamais promettre de « traiter/guérir/prévenir ». Conseil juridique spécialisé compléments alimentaires avant scaling pub.",
    owner: "Sabri",
  },
  {
    id: "risk-supply-pectine",
    title: "Supply chain pectine / actifs rares (KSM-66, acérola)",
    category: "supply",
    severity: 4,
    likelihood: 3,
    mitigation:
      "Double sourcing sur chaque actif critique. Stock tampon 3 mois minimum. Renégocier prix volume avec façonnier au-delà de 10K boîtes/mois.",
  },
  {
    id: "risk-copycat",
    title: "Copycat par Mium Lab, Lashilé ou nouvelle marque DTC",
    category: "competitive",
    severity: 4,
    likelihood: 4,
    mitigation:
      "Vitesse d'exécution + construction d'audience propriétaire (list email + retargeting) + brand moat (transparence radicale difficile à copier car culturelle).",
  },
  {
    id: "risk-team",
    title: "Dépendance fondateur solo — goulot opérationnel",
    category: "team",
    severity: 5,
    likelihood: 5,
    mitigation:
      "Recruter tôt : (1) Head of Growth (Q2), (2) Ops/fulfillment (Q2-Q3), (3) Content creator interne (Q3). Externaliser ce qui peut l'être (compta, juridique, studio UGC).",
  },
  {
    id: "risk-cac",
    title: "CAC trop élevé — payback > 9 mois",
    category: "financial",
    severity: 5,
    likelihood: 3,
    mitigation:
      "Test CAC par angle × plateforme AVANT de scaler. Killer les angles > 45€ CAC. Retention sur la base email pour amortir CAC via LTV.",
  },
];
