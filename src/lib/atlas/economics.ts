// =============================================================================
// Atlas Economics — Pricing scenarios, COGS breakdown, LTV × CAC matrix
// Source: data/GOMU_PNL_Scenarios.xlsx + data/GOMU_LTV_Scenarios.xlsx
// =============================================================================

export interface PricingScenario {
  id: "A" | "B" | "C";
  label: string;
  priceEUR: number;
  cogsTotalEUR: number;
  grossMarginEUR: number;
  grossMarginPct: number;
  stripePct: number;
  recommended?: boolean;
}

export interface ChurnScenario {
  id: "optimistic" | "realistic" | "pessimistic";
  label: string;
  churnPct: number;
  avgLifetimeMonths: number;
  benchmark: string;
}

export interface LTVCell {
  priceScenarioId: "A" | "B" | "C";
  churnScenarioId: "optimistic" | "realistic" | "pessimistic";
  ltvEUR: number;
  cacMaxEUR: number;
  recommended?: boolean;
}

export interface CogsLineItem {
  label: string;
  amountEUR: number;
  category: "produit" | "douane" | "logistique" | "3pl" | "stripe";
  note?: string;
  variable?: boolean; // scales with PV
}

export interface FulfillmentOption {
  mode: "3PL Peakfast" | "Expédition perso";
  cogsAt30EUR: number;
  marginAt30EUR: number;
  marginAt30Pct: number;
  deltaVs3PLEUR: number;
  pros: string[];
  cons: string[];
}

export interface NorthStarRecalibrated {
  targetRevenueEUR: number;
  pricePointEUR: number;
  avgSubscriptionMonths: number;
  requiredGrossCustomersYear: number;
  ltvEUR: number;
  cacMaxEUR: number;
  estimatedAdBudgetEUR: { low: number; high: number };
  notes: string[];
}

// =============================================================================
// PRICING SCENARIOS
// =============================================================================

export const pricingScenarios: PricingScenario[] = [
  {
    id: "A",
    label: "Volume",
    priceEUR: 30,
    cogsTotalEUR: 14.99,
    grossMarginEUR: 15.01,
    grossMarginPct: 50.0,
    stripePct: 3.5,
  },
  {
    id: "B",
    label: "Équilibre (recommandé)",
    priceEUR: 34.99,
    cogsTotalEUR: 15.16,
    grossMarginEUR: 19.83,
    grossMarginPct: 56.7,
    stripePct: 3.5,
    recommended: true,
  },
  {
    id: "C",
    label: "Premium",
    priceEUR: 39.99,
    cogsTotalEUR: 15.34,
    grossMarginEUR: 24.65,
    grossMarginPct: 61.6,
    stripePct: 3.5,
  },
];

// =============================================================================
// CHURN SCENARIOS
// =============================================================================

export const churnScenarios: ChurnScenario[] = [
  {
    id: "optimistic",
    label: "Optimiste",
    churnPct: 8,
    avgLifetimeMonths: 12.5,
    benchmark: "Niveau Grüns — excellent",
  },
  {
    id: "realistic",
    label: "Réaliste",
    churnPct: 12,
    avgLifetimeMonths: 8.33,
    benchmark: "Marché FR compléments — bon",
  },
  {
    id: "pessimistic",
    label: "Pessimiste",
    churnPct: 18,
    avgLifetimeMonths: 5.56,
    benchmark: "Mauvais scénario — à éviter",
  },
];

// =============================================================================
// LTV × CAC MATRIX (9 cells — 3 prices × 3 churns)
// =============================================================================

export const ltvMatrix: LTVCell[] = [
  // Prix 30€
  { priceScenarioId: "A", churnScenarioId: "optimistic", ltvEUR: 187.62, cacMaxEUR: 62.54 },
  { priceScenarioId: "A", churnScenarioId: "realistic", ltvEUR: 125.08, cacMaxEUR: 41.69 },
  { priceScenarioId: "A", churnScenarioId: "pessimistic", ltvEUR: 83.39, cacMaxEUR: 27.80 },
  // Prix 34.99€
  { priceScenarioId: "B", churnScenarioId: "optimistic", ltvEUR: 247.82, cacMaxEUR: 82.61 },
  { priceScenarioId: "B", churnScenarioId: "realistic", ltvEUR: 165.21, cacMaxEUR: 55.07, recommended: true },
  { priceScenarioId: "B", churnScenarioId: "pessimistic", ltvEUR: 110.14, cacMaxEUR: 36.71 },
  // Prix 39.99€
  { priceScenarioId: "C", churnScenarioId: "optimistic", ltvEUR: 308.13, cacMaxEUR: 102.71 },
  { priceScenarioId: "C", churnScenarioId: "realistic", ltvEUR: 205.42, cacMaxEUR: 68.47 },
  { priceScenarioId: "C", churnScenarioId: "pessimistic", ltvEUR: 136.95, cacMaxEUR: 45.65 },
];

// =============================================================================
// COGS BREAKDOWN — Scénario 3PL Peakfast, franchise en base TVA, prix 30€
// =============================================================================

export const cogsBreakdown: CogsLineItem[] = [
  // Produit
  {
    label: "Coût produit façonnier (Chine)",
    amountEUR: 6.33,
    category: "produit",
    note: "$6.90 × 0,918 (taux change USD/EUR)",
  },
  {
    label: "Shipping Chine → France (mer)",
    amountEUR: 1.45,
    category: "produit",
    note: "1 000 packs, 25 cartons, 600kg, fret maritime",
  },
  // Douane
  {
    label: "Droit de douane 12,8%",
    amountEUR: 1.0,
    category: "douane",
    note: "Code TARIC 2106 9092 85 — confirmé douanes",
  },
  {
    label: "TVA import 5,5% (non récupérable)",
    amountEUR: 0.48,
    category: "douane",
    note: "Taux réduit compléments — franchise en base = coût sec",
  },
  {
    label: "Redevance sanitaire",
    amountEUR: 0.03,
    category: "douane",
    note: "€30 min, amortis sur le lot",
  },
  {
    label: "Frais transitaire / dédouanement",
    amountEUR: 0.1,
    category: "douane",
    note: "€100 estimé, amortis sur 1 000 unités",
  },
  // 3PL
  {
    label: "Expédition 3PL → client (Peakfast)",
    amountEUR: 4.02,
    category: "3pl",
    note: "Prix « dès » Peakfast",
  },
  {
    label: "Stockage 3PL",
    amountEUR: 0.02,
    category: "3pl",
    note: "€10/palette × 2 palettes ÷ 1 000 unités",
  },
  {
    label: "Réception 3PL",
    amountEUR: 0.005,
    category: "3pl",
    note: "€5 par livraison entrante",
  },
  {
    label: "Abonnement 3PL (amorti)",
    amountEUR: 0.5,
    category: "3pl",
    note: "€149 / 300 commandes/mois estimées",
  },
  // Stripe
  {
    label: "Frais Stripe (3,5%)",
    amountEUR: 1.05,
    category: "stripe",
    note: "~1,5% + 0,25€ fixe ≈ 3,5% du PV",
    variable: true,
  },
];

// =============================================================================
// FULFILLMENT COMPARISON
// =============================================================================

export const fulfillmentOptions: FulfillmentOption[] = [
  {
    mode: "3PL Peakfast",
    cogsAt30EUR: 14.99,
    marginAt30EUR: 15.01,
    marginAt30Pct: 50.0,
    deltaVs3PLEUR: 0,
    pros: [
      "Scalable sans limite de temps founder",
      "Expertise logistique + retours clients",
      "Tarif expédition optimisé (4,02€/cmd)",
      "Pas besoin de stocker chez toi",
    ],
    cons: [
      "Abonnement fixe 149€/mois (€0,50/cmd amortis sur 300 cmd)",
      "Moins de contrôle sur l'unboxing premium",
      "Setup + intégration Shopify à faire",
    ],
  },
  {
    mode: "Expédition perso",
    cogsAt30EUR: 16.99,
    marginAt30EUR: 13.01,
    marginAt30Pct: 43.4,
    deltaVs3PLEUR: -2.01,
    pros: [
      "Aucun abonnement fixe (cashflow-friendly au lancement)",
      "Contrôle total unboxing + insert cards personnalisés",
      "0 dépendance 3PL",
    ],
    cons: [
      "5 min/commande de ton temps (valorisé 1,25€/cmd)",
      "Transporteur cher (4,50€ Colissimo/Mondial Relay)",
      "Goulot à partir de ~50 commandes/jour",
      "Marge brute -2€/cmd = -7 points de %",
    ],
  },
];

// =============================================================================
// NORTH STAR RECALIBRATED
// =============================================================================

export const northStarRecalibrated: NorthStarRecalibrated = {
  targetRevenueEUR: 100_000_000,
  pricePointEUR: 34.99,
  avgSubscriptionMonths: 8.33, // churn réaliste 12%
  requiredGrossCustomersYear: 342_900, // 100M € / (34.99 × 8.33)
  ltvEUR: 165.21,
  cacMaxEUR: 55.07,
  estimatedAdBudgetEUR: {
    low: 343_000 * 30, // CAC optimiste 30€
    high: 343_000 * 55, // CAC max 55€
  },
  notes: [
    "Hypothèse : prix 34,99€/mois, churn réaliste 12%, durée moyenne 8,33 mois.",
    "~343K nouveaux clients nets à acquérir dans l'année (0 clients actuels → 100M€ revenu).",
    "Budget pub estimé : 10-19M€ (selon CAC effectif 30€ optimiste vs 55€ max rentable).",
    "La trajectoire est exponentielle — pas linéaire : pic d'acquisition Q3-Q4.",
    "Si churn tombe à 8% (benchmark Grüns), LTV passe à 248€ → CAC max 83€ → marge de manœuvre x1,5.",
    "Si on monte à 39,99€, LTV réaliste = 205€ → CAC max 68€. Mais cannibalisation volume à valider.",
  ],
};

// =============================================================================
// KEY TAKEAWAYS
// =============================================================================

export const economicsTakeaways: string[] = [
  "Le scénario B (34,99€) est le point d'équilibre : marge brute 57% vs 50% à 30€, avec un écart prix de 5€ qui augmente la LTV de 32% sans défoncer le perceived value.",
  "La garantie Sachet Vide rembourse le PV complet sans retenue — budgeter 5-10% de refund rate dans la marge nette (impact -1,5 à -3 points de marge brute).",
  "L'offre de lancement à 24,90€/mois est EN DESSOUS du COGS 3PL (14,99€ + retenues garantie + frais acquisition) — c'est un loss leader volontaire pour amorcer le churn bench. À calibrer en durée (3 mois max) et en volume (cap).",
  "Passage au régime assujetti TVA : +1€ de marge/cmd via TVA import récupérable, mais complexifie la compta. ROI positif dès 300 cmd/mois.",
  "3PL Peakfast gagne +2€/cmd vs expé perso dès le lancement. Choisir 3PL sauf contrainte cashflow initiale.",
  "CAC max rentable scénario réaliste : 55€. Tout angle pub dépassant 55€ doit être killé sous 14 jours de test.",
];
