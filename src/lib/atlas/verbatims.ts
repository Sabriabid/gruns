import type { Verbatim } from "./types";

export const verbatims: Verbatim[] = [
  // --- SCEPTICISM / TRUST BETRAYAL ---
  {
    id: "v-001",
    source: "press",
    sourceUrl: "https://www.francetvinfo.fr",
    date: "2025-11-15",
    brandMentioned: "industrie compléments",
    rawText:
      "Quand on vend, parfois cher, un produit dont l'efficacité n'a pas été démontrée, j'estime que c'est une arnaque.",
    themes: ["scepticisme", "arnaque", "marché"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: true,
  },
  {
    id: "v-002",
    source: "press",
    rawText:
      "Les compléments alimentaires ne sont pas soumis à cette règle [de prouver leur efficacité]. Tout l'attirail de l'escroquerie en col blanc.",
    themes: ["scepticisme", "régulation"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: true,
  },
  {
    id: "v-003",
    source: "press",
    brandMentioned: "UFC-Que Choisir",
    rawText:
      "Allégations trompeuses et slogans mensongers sont monnaie courante sur ce marché.",
    themes: ["scepticisme", "marketing"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: false,
  },

  // --- FATIGUE / PAIN POINT ---
  {
    id: "v-010",
    source: "amazon",
    brandMentioned: "Nutrimea",
    rating: 5,
    rawText:
      "Cela faisait quelques mois que je ressentais un gros manque d'énergie et de motivation. Je tardais à sortir de mon lit le matin et mes journées de travail m'épuisaient.",
    themes: ["fatigue", "énergie", "motivation"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: true,
  },
  {
    id: "v-011",
    source: "trustpilot",
    brandMentioned: "Mium Lab",
    rating: 5,
    rawText:
      "J'avais vraiment des difficultés de sommeil depuis plusieurs mois : réveils nocturnes fréquents.",
    themes: ["sommeil", "stress"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: false,
  },

  // --- TRANSFORMATION / CONVERSION ---
  {
    id: "v-020",
    source: "trustpilot",
    sourceUrl: "https://fr.trustpilot.com/review/miumlab.com",
    date: "2025-06-02",
    brandMentioned: "Mium Lab",
    authorAlias: "Anaïs R.",
    rating: 5,
    rawText:
      "J'ai testé les gummies sanfran B6 car on m'a prescrit des antidépresseurs pour mes troubles anxieux dépressifs mais je ne voulais pas les prendre à cause des effets secondaires. J'ai donc commandé sans trop y croire et les résultats sont visibles dès la moitié de la cure ! Plus calme intérieurement, moins de réactions excessives.",
    themes: ["transformation", "alternative médicaments", "scepticisme → conversion"],
    sentiment: "positive",
    isPainPoint: false,
    isGolden: true,
  },
  {
    id: "v-021",
    source: "trustpilot",
    brandMentioned: "Mium Lab",
    authorAlias: "SANDRA",
    date: "2025-09-09",
    rating: 5,
    rawText:
      "J'avoue avoir été un peu sceptique au départ, mais les gummies Mium Lab m'ont vraiment convaincue.",
    themes: ["scepticisme", "conversion"],
    sentiment: "positive",
    isPainPoint: false,
    isGolden: false,
  },

  // --- ABONNEMENT PIÈGE ---
  {
    id: "v-030",
    source: "trustpilot",
    sourceUrl: "https://fr.trustpilot.com/review/miumlab.com",
    brandMentioned: "Mium Lab",
    authorAlias: "Corinne B.",
    date: "2025-03-25",
    rating: 1,
    rawText:
      "Grosse déception sur la gestion de mon abonnement sur mesure. Il m'avait été garanti de respecter une fréquence de 3 semaines, cette option n'existant pas sur le site.",
    themes: ["abonnement piège", "service client", "frustration"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: false,
  },

  // --- GOÛT / PRODUIT ---
  {
    id: "v-040",
    source: "trustpilot",
    brandMentioned: "Mium Lab",
    authorAlias: "vanessa",
    date: "2026-01-03",
    rating: 1,
    rawText:
      "Les gummies ont vraiment un goût horrible, nous sommes 4 et aucun de nous n'a été capable de manger 1 gummies.",
    themes: ["goût", "qualité produit"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: false,
  },

  // --- PRIX / PIXIE DUSTING ---
  {
    id: "v-050",
    source: "blog",
    brandMentioned: "—",
    rawText:
      "J'ai déjà vu des produits avec 10 mg de maca ou de prêles… Cela ne sert à rien.",
    themes: ["pixie dusting", "dosages", "méfiance"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: true,
  },

  // --- HALAL ---
  {
    id: "v-060",
    source: "forum",
    brandMentioned: "—",
    rawText:
      "Trouver un complément halal ne devrait pas être un parcours du combattant.",
    themes: ["halal", "confiance", "inclusion"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: true,
  },
  {
    id: "v-061",
    source: "forum",
    rawText:
      "J'ai arrêté la whey quand j'ai vu qu'ils avaient ajouté de la gélatine dans les gélules.",
    themes: ["halal", "méfiance", "composition"],
    sentiment: "negative",
    isPainPoint: true,
    isGolden: false,
  },
];

export const topProblems: { rank: number; title: string; description: string; frequency: string }[] = [
  {
    rank: 1,
    title: "Scepticisme et méfiance systémique",
    description:
      "Le consommateur doute que les compléments servent à quoi que ce soit. Alimenté par ANSES, UFC-Que Choisir, France Info.",
    frequency: "100% des sources",
  },
  {
    rank: 2,
    title: "Le Piège de la Fragmentation (multi-pots)",
    description:
      "Trop de références, pas de guidage, 60-100€/mois en pots jamais finis.",
    frequency: "80% des sources",
  },
  {
    rank: 3,
    title: "Abonnement piège",
    description:
      "Traumatisme consommateur FR : abonnements impossibles à annuler, fréquences imposées, service client injoignable.",
    frequency: "Top 3 Trustpilot 1★",
  },
  {
    rank: 4,
    title: "Pixie dusting / dosages insuffisants",
    description:
      "Ingrédients à dosages cosmétiques (10mg de maca, traces de B12). Résultats invisibles → abandon.",
    frequency: "60% des sources techniques",
  },
  {
    rank: 5,
    title: "Halal : recherche épuisante",
    description:
      "Gélatine cachée, E441, sources opaques. Décodage perpétuel qui finit en renoncement.",
    frequency: "Segment halal — 100%",
  },
  {
    rank: 6,
    title: "Fatigue chronique, coup de barre de 14h",
    description: "Manque de B12, fer, magnésium, D. Médecin dit « tout est normal ».",
    frequency: "70% verbatims énergie",
  },
  {
    rank: 7,
    title: "Goût et galénique désagréables",
    description: "Gélules à avaler, gummies au goût horrible, abandon rapide.",
    frequency: "50% verbatims 1★",
  },
  {
    rank: 8,
    title: "Compliance — on n'est jamais régulier",
    description:
      "La cure 3 mois qui finit à la poubelle en 3 semaines. Culpabilité de l'échec répété.",
    frequency: "Cross-source",
  },
  {
    rank: 9,
    title: "Confusion totale dans l'offre",
    description:
      "22 refs Mium Lab, 15+ Lashilé, 3 recommandations du pharmacien. On ne sait pas par où commencer.",
    frequency: "Cross-source",
  },
  {
    rank: 10,
    title: "Sommeil fragmenté, stress chronique",
    description:
      "Réveils nocturnes, cortisol élevé, fatigue mentale. Peur de la dépendance à la mélatonine.",
    frequency: "VOC top 10",
  },
];
