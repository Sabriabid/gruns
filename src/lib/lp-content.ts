// =============================================================================
// LP Content Data — All modular landing page content + types
// =============================================================================

export interface LPHero {
  headline: string;
  subtitle: string;
  imagePlaceholder: string;
  badge: string;
  cta: string;
  trustBar: string;
}

export interface LPReason {
  number: string;
  category: string;
  title: string;
  content: string;
  imagePlaceholder?: string;
}

export type PoolReasonKey =
  | "simplicite"
  | "dosages"
  | "transparence"
  | "made-in-france"
  | "halal-vegan"
  | "prix"
  | "format"
  | "energie";

export interface LPStat {
  value: string;
  label: string;
}

export interface LPTimelineStep {
  period: string;
  title: string;
  description: string;
}

export interface LPTrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface LPBuyBoxData {
  productName: string;
  subtitle: string;
  rating: number;
  reviewCount: string;
  flavor: string;
  format: string;
  subscription: {
    label: string;
    badge: string;
    price: string;
    originalPrice: string;
    discount: string;
    perks: string[];
  };
  oneTime: {
    label: string;
    price: string;
    shipping: string;
  };
  cta: string;
  antiPiege: string;
}

export interface LPFAQItem {
  question: string;
  answer: string;
}

export interface LPFooterData {
  brand: string;
  tagline: string;
  links: { label: string; href: string }[];
  socials: { label: string; href: string }[];
  lpLinks: { label: string; href: string }[];
}

export interface LPData {
  slug: string;
  meta: { title: string; description: string };
  hero: LPHero;
  reasonOne: LPReason;
  poolReasonKeys: PoolReasonKey[];
}

// =============================================================================
// Shared content (identical across all LPs)
// =============================================================================

export const lpShared = {
  announcement: {
    text: "Offre de lancement \u2014 -30% sur ta premi\u00e8re commande + livraison offerte",
    emoji: "\uD83D\uDE80",
  },

  poolReasons: {
    simplicite: {
      number: "00",
      category: "SIMPLICIT\u00c9",
      title: "Fini le casse-t\u00eate des 5 pots",
      content:
        "L\u2019industrie fran\u00e7aise te force \u00e0 acheter sommeil + \u00e9nergie + immunit\u00e9 + cheveux s\u00e9par\u00e9ment. Gomu met tout dans un sachet. Un geste, un produit, c\u2019est fait.",
      imagePlaceholder: "Illustration : un sachet Gomu vs 5 pots align\u00e9s",
    },
    dosages: {
      number: "00",
      category: "DOSAGES",
      title: "Dos\u00e9 pour que \u00e7a marche. Pas pour que l\u2019\u00e9tiquette soit longue.",
      content:
        "15-20 actifs \u00e0 dosages cliniques document\u00e9s. Pas 60 ingr\u00e9dients \u00e0 0,3mg chacun. Chaque forme est choisie pour \u00eatre absorb\u00e9e\u00a0: zinc bisglycinate (3x mieux absorb\u00e9 que l\u2019oxyde), L-5-MTHF (la forme active du B9 que ton corps utilise directement).",
      imagePlaceholder: "Illustration : tableau comparatif dosages Gomu vs concurrent g\u00e9n\u00e9rique",
    },
    transparence: {
      number: "00",
      category: "TRANSPARENCE",
      title: "Chaque lot test\u00e9 en labo ind\u00e9pendant. R\u00e9sultats publi\u00e9s.",
      content:
        "Analyses Eurofins lot par lot\u00a0: vitamines, min\u00e9raux, pesticides, m\u00e9taux lourds, contaminants microbiens. Pas un PDF cach\u00e9 \u2014 les r\u00e9sultats sont sur notre site. On ne te demande pas de nous croire \u2014 on te demande de v\u00e9rifier.",
      imagePlaceholder: "Illustration : capture d\u2019\u00e9cran r\u00e9sultats Eurofins",
    },
    "made-in-france": {
      number: "00",
      category: "MADE IN FRANCE",
      title: "Fabriqu\u00e9 en France. Pas juste un drapeau sur le packaging.",
      content:
        "Fa\u00e7onnier fran\u00e7ais, mati\u00e8res premi\u00e8res trac\u00e9es, labo de contr\u00f4le. 67% des Fran\u00e7ais l\u2019exigent pour leurs compl\u00e9ments. Chez Gomu, c\u2019est pas un argument marketing \u2014 c\u2019est un choix de fabrication.",
      imagePlaceholder: "Illustration : usine fran\u00e7aise / drapeau",
    },
    "halal-vegan": {
      number: "00",
      category: "HALAL & VEGAN",
      title: "Base pectine de fruit. Vegan. Halal. Sans compromis.",
      content:
        "Pas une adaptation apr\u00e8s coup \u2014 c\u2019est con\u00e7u comme \u00e7a d\u00e8s le d\u00e9part. Base pectine (pas g\u00e9latine). Clean label\u00a0: sans sucre ajout\u00e9, sans colorant synth\u00e9tique, sans gluten, sans produits laitiers.",
      imagePlaceholder: "Illustration : gummies avec ic\u00f4nes vegan/halal",
    },
    prix: {
      number: "00",
      category: "PRIX",
      title: "29\u20ac/mois. Pas 80\u20ac. Pas de code promo bidon.",
      content:
        "En pharmacie, 3-4 cures empil\u00e9es = 60-100\u20ac/mois. Gr\u00fcns aux US = 40-80$/mois. Gomu couvre tes bases \u00e0 un prix honn\u00eate. Pas de prix gonfl\u00e9 puis coup\u00e9 de moiti\u00e9 avec un faux code promo.",
      imagePlaceholder: "Illustration : comparatif prix mensuel",
    },
    format: {
      number: "00",
      category: "FORMAT",
      title: "30 secondes le matin. C\u2019est fait.",
      content:
        "Un sachet dans ta poche, ton sac, ton tiroir de bureau. Pas d\u2019eau, pas de shaker, pas de go\u00fbt d\u00e9gueulasse. Ouvre, m\u00e2che, c\u2019est fait.",
      imagePlaceholder: "Illustration : sachet Gomu en situation (bureau, sac)",
    },
    energie: {
      number: "00",
      category: "\u00c9NERGIE",
      title: "De l\u2019\u00e9nergie sans crash",
      content:
        "Vitamines B complexe pour convertir tes aliments en \u00e9nergie, adaptog\u00e8nes (ashwagandha KSM-66, rhodiola) pour le stress, fibres pr\u00e9biotiques pour stabiliser. Pas de pic de sucre, pas de crash \u00e0 15h.",
      imagePlaceholder: "Illustration : courbe \u00e9nergie stable vs pic/crash",
    },
  } as Record<PoolReasonKey, LPReason>,

  socialProofStats: [
    { value: "[X]%", label: "disent avoir plus d\u2019\u00e9nergie au quotidien" },
    { value: "[X]%", label: "constatent une meilleure digestion" },
    { value: "[X]%", label: "recommandent Gomu \u00e0 leur entourage" },
  ] as LPStat[],

  timeline: [
    {
      period: "Semaine 1-2",
      title: "\u00c9nergie plus stable",
      description:
        "\u00c9nergie plus stable, digestion qui s\u2019am\u00e9liore. Les premiers effets se font sentir d\u00e8s les premiers jours.",
    },
    {
      period: "Mois 1-2",
      title: "R\u00e9sultats visibles",
      description:
        "Sommeil plus r\u00e9parateur, stress mieux g\u00e9r\u00e9, vitalit\u00e9 g\u00e9n\u00e9rale en hausse. Tu sens la diff\u00e9rence.",
    },
    {
      period: "Mois 3+",
      title: "Transformation durable",
      description:
        "R\u00e9sultats mesurables (bilan sanguin), peau/cheveux/ongles. Les b\u00e9n\u00e9fices s\u2019accumulent.",
    },
  ] as LPTimelineStep[],

  trustGrid: [
    {
      icon: "flask",
      title: "Test\u00e9 en labo ind\u00e9pendant",
      description: "Analyses Eurofins publi\u00e9es lot par lot",
    },
    {
      icon: "flag",
      title: "Fabriqu\u00e9 en France",
      description: "Fa\u00e7onnier fran\u00e7ais, tra\u00e7abilit\u00e9 compl\u00e8te",
    },
    {
      icon: "leaf",
      title: "Vegan & Halal natif",
      description: "Base pectine de fruit, pas g\u00e9latine",
    },
    {
      icon: "check-circle",
      title: "Dosages cliniques r\u00e9els",
      description: "Chaque actif dos\u00e9 \u00e0 un niveau document\u00e9",
    },
  ] as LPTrustItem[],

  buyBox: {
    productName: "GOMU \u2014 Nutrition quotidienne compl\u00e8te",
    subtitle: "Saveur : Fruits rouges \u00b7 Format : Sachet journalier (30 sachets/bo\u00eete)",
    rating: 5,
    reviewCount: "[X]",
    flavor: "Fruits rouges",
    format: "Sachet journalier (30 sachets/bo\u00eete)",
    subscription: {
      label: "Abonnement mensuel",
      badge: "POPULAIRE",
      price: "24,90\u20ac",
      originalPrice: "35\u20ac",
      discount: "-30%",
      perks: [
        "Livraison offerte",
        "Modifiable ou annulable en 2 clics",
        "Garantie satisfait ou rembours\u00e9",
      ],
    },
    oneTime: {
      label: "Achat ponctuel",
      price: "39\u20ac",
      shipping: "Livraison 4,90\u20ac",
    },
    cta: "JE COMMANDE",
    antiPiege:
      "Sans engagement \u2014 modifiable ou annulable en 2 clics, sans justification. On n\u2019est pas SFR.",
  } as LPBuyBoxData,

  faq: [
    {
      question: "C\u2019est juste des bonbons d\u00e9guis\u00e9s en compl\u00e9ments\u00a0?",
      answer:
        "Non. Chaque actif est dos\u00e9 \u00e0 un niveau clinique document\u00e9 et v\u00e9rifi\u00e9 par des analyses Eurofins ind\u00e9pendantes, publi\u00e9es lot par lot. Les formes utilis\u00e9es (zinc bisglycinate, L-5-MTHF, m\u00e9thylcobalamine\u2026) sont choisies pour leur biodisponibilit\u00e9, pas pour le go\u00fbt.",
    },
    {
      question: "Un seul produit peut vraiment remplacer 5 compl\u00e9ments\u00a0?",
      answer:
        "Oui, pour les bases quotidiennes\u00a0: vitamines, min\u00e9raux cl\u00e9s, adaptog\u00e8nes, pr\u00e9biotiques. Gomu couvre l\u2019essentiel en un seul geste. On ne pr\u00e9tend pas remplacer un traitement m\u00e9dical sp\u00e9cifique \u2014 mais pour la suppl\u00e9mentation de fond, un seul produit bien formul\u00e9 vaut mieux que 5 sous-dos\u00e9s.",
    },
    {
      question: "C\u2019est halal\u00a0?",
      answer:
        "Oui, nativement. La base est en pectine de fruit (pas de g\u00e9latine bovine ou porcine). C\u2019est con\u00e7u comme \u00e7a d\u00e8s le d\u00e9part, pas adapt\u00e9 apr\u00e8s coup. Tu peux v\u00e9rifier la liste d\u2019ingr\u00e9dients sur les analyses de chaque lot.",
    },
    {
      question: "Comment \u00e7a marche l\u2019abonnement\u00a0?",
      answer:
        "Tu re\u00e7ois ta bo\u00eete chaque mois. Tu modifies, pauses ou annules en 2 clics depuis ton compte. Z\u00e9ro engagement, z\u00e9ro justification \u00e0 donner. C\u2019est aussi simple que \u00e7a.",
    },
    {
      question: "O\u00f9 c\u2019est fabriqu\u00e9\u00a0?",
      answer:
        "En France, par un fa\u00e7onnier fran\u00e7ais certifi\u00e9. Mati\u00e8res premi\u00e8res trac\u00e9es, contr\u00f4le qualit\u00e9 en labo fran\u00e7ais, analyses Eurofins lot par lot.",
    },
    {
      question: "Il y a du sucre dedans\u00a0?",
      answer:
        "Les gummies contiennent une quantit\u00e9 minime de sucre n\u00e9cessaire au format gummy (environ 2g par portion). Pas de sucre ajout\u00e9 superflu, pas d\u2019\u00e9dulcorants artificiels. Le d\u00e9tail exact est indiqu\u00e9 sur chaque lot.",
    },
  ] as LPFAQItem[],

  footer: {
    brand: "Gomu",
    tagline: "Nutrition quotidienne compl\u00e8te, fabriqu\u00e9e en France.",
    links: [
      { label: "Mentions l\u00e9gales", href: "#" },
      { label: "CGV", href: "#" },
      { label: "Politique de confidentialit\u00e9", href: "#" },
      { label: "Contact", href: "#" },
    ],
    socials: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
    ],
    lpLinks: [
      { label: "Digestion", href: "/lp/digestion" },
      { label: "Stress & Sommeil", href: "/lp/stress-sommeil" },
      { label: "Halal", href: "/lp/halal" },
      { label: "Pilules", href: "/lp/pilules" },
      { label: "\u00c9nergie", href: "/lp/energie" },
      { label: "Made in France", href: "/lp/made-in-france" },
      { label: "Multi-pots", href: "/lp/multi-pots" },
      { label: "Immunit\u00e9", href: "/lp/immunite" },
      { label: "Arnaque\u00a0?", href: "/lp/arnaque" },
      { label: "Parents", href: "/lp/parents" },
    ],
  } as LPFooterData,
};

// =============================================================================
// Per-LP content (unique hero + reason #1 + pool selection)
// =============================================================================

export const lpPages: Record<string, LPData> = {
  "un-sachet": {
    slug: "un-sachet",
    meta: {
      title: "Gomu — Un sachet. Toute ta nutrition.",
      description:
        "22 pots dans ton placard, tu en prends 0. Un sachet par jour, 17 actifs dosés, 29€/mois. Sans engagement.",
    },
    hero: {
      headline: "22 pots dans ton placard. Tu en prends 0.",
      subtitle:
        "Un sachet par jour. 17 actifs dosés. 29€/mois.",
      imagePlaceholder: "Photo : pile de 22 pots vs un sachet Gomu",
      badge: "Offre de lancement — Jusqu’à -30%",
      cta: "Rejoindre la liste d’attente",
      trustBar:
        "✓ Sans engagement · ✓ Halal natif · ✓ Tests Eurofins par lot",
    },
    reasonOne: {
      number: "01",
      category: "LE SACHET QUOTIDIEN",
      title:
        "Tout ce que tu prends en 5 pots — dans un sachet par jour",
      content:
        "✔️ 17 actifs aux dosages déclarés (pas de proprietary blend) · ✔️ Prébiotiques pour ton ventre · ✔️ Halal natif, sans gélatine · ✔️ Tests Eurofins par lot, publiés · ✔️ Sans engagement, annulable en 2 clics. Tu ouvres, tu mâches, tu passes à autre chose.",
      imagePlaceholder: "Illustration : checklist 5 ✔️",
    },
    poolReasonKeys: ["simplicite", "dosages", "transparence", "format", "prix"],
  },

  "sans-arnaque-abonnement": {
    slug: "sans-arnaque-abonnement",
    meta: {
      title: "Gomu — Pas un piège abonnement. Annulation en 2 clics.",
      description:
        "Tu as déjà galéré 45 minutes pour résilier un abonnement compléments. Pas chez nous. 2 clics, pas de mail, pas de rétention.",
    },
    hero: {
      headline:
        "Tu as déjà galéré 45 minutes pour résilier un abonnement compléments.",
      subtitle:
        "Pas chez nous. 2 clics. Pas de mail. Pas de rétention.",
      imagePlaceholder: "Photo : capture d’écran annulation 2 clics",
      badge: "Offre de lancement — Jusqu’à -30%",
      cta: "Rejoindre la liste d’attente",
      trustBar:
        "✓ 2 clics · ✓ Pas de mail · ✓ Garantie 30 jours",
    },
    reasonOne: {
      number: "01",
      category: "ANTI-PIÈGE",
      title:
        "Annulation en 2 clics depuis ton compte. Sans email. Sans rétention.",
      content:
        "✔️ Annulation en 2 clics depuis ton compte (pas d’email, pas de service client) · ✔️ Pause à la demande sans pénalité · ✔️ Pas de prélèvement caché, pas de réabonnement automatique masqué · ✔️ Premier mois sans engagement · ✔️ Si tu n’aimes pas, on rembourse — sans question.",
      imagePlaceholder: "Illustration : bouton annuler en 2 clics",
    },
    poolReasonKeys: ["transparence", "dosages", "simplicite", "format", "prix"],
  },

  digestion: {
    slug: "digestion",
    meta: {
      title: "Gomu \u2014 La solution digestion all-in-one",
      description:
        "D\u00e9couvre pourquoi ceux qui en ont marre de ballonner adoptent Gomu. Fibres pr\u00e9biotiques, dosages cliniques, fabriqu\u00e9 en France.",
    },
    hero: {
      headline:
        "6 raisons pour lesquelles ceux qui en ont marre de ballonner adoptent Gomu",
      subtitle: "(et oui, on parle de transit)",
      imagePlaceholder: "Photo lifestyle : personne d\u00e9tendue, ventre plat, cuisine saine",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "DIGESTION",
      title: "Des fibres pr\u00e9biotiques pour un transit qui fonctionne",
      content:
        "L\u2019inuline de chicor\u00e9e nourrit tes bonnes bact\u00e9ries intestinales. Pas un laxatif \u2014 un pr\u00e9biotique qui aide ton microbiote \u00e0 faire son travail. R\u00e9sultat\u00a0: moins de ballonnements, plus de r\u00e9gularit\u00e9, un ventre qui te laisse tranquille.",
      imagePlaceholder: "Illustration : microbiote / intestin sain",
    },
    poolReasonKeys: ["simplicite", "dosages", "made-in-france", "format", "prix"],
  },

  "stress-sommeil": {
    slug: "stress-sommeil",
    meta: {
      title: "Gomu \u2014 Stress & Sommeil, la solution naturelle",
      description:
        "Ashwagandha KSM-66, rhodiola, vitamines B. D\u00e9couvre pourquoi ceux qui dorment mal passent \u00e0 Gomu.",
    },
    hero: {
      headline:
        "7 raisons pour lesquelles ceux qui dorment mal passent \u00e0 Gomu",
      subtitle: "(sans m\u00e9latonine, sans d\u00e9pendance)",
      imagePlaceholder: "Photo lifestyle : personne repos\u00e9e au r\u00e9veil, lumi\u00e8re douce",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "STRESS & SOMMEIL",
      title: "Ashwagandha KSM-66\u00a0: -30% de cortisol en 60 jours",
      content:
        "L\u2019ashwagandha KSM-66 est l\u2019adaptog\u00e8ne le plus document\u00e9 au monde. Les \u00e9tudes montrent une r\u00e9duction du cortisol (hormone du stress) de 30% apr\u00e8s 60 jours. Combin\u00e9 \u00e0 la rhodiola et aux vitamines B, c\u2019est un soutien quotidien pour le stress ET le sommeil \u2014 sans cr\u00e9er de d\u00e9pendance.",
      imagePlaceholder: "Illustration : courbe cortisol avant/apr\u00e8s",
    },
    poolReasonKeys: ["simplicite", "transparence", "energie", "format", "prix"],
  },

  halal: {
    slug: "halal",
    meta: {
      title: "Gomu \u2014 Gummies halal, con\u00e7us halal d\u00e8s le d\u00e9part",
      description:
        "Enfin des gummies halal qui ne sont pas un sous-produit. Base pectine de fruit, vegan, fabriqu\u00e9 en France.",
    },
    hero: {
      headline:
        "Enfin des gummies halal qui ne sont pas un sous-produit",
      subtitle:
        "Base pectine de fruit. Con\u00e7u halal d\u00e8s le d\u00e9part. Pas adapt\u00e9 apr\u00e8s coup.",
      imagePlaceholder: "Photo lifestyle : famille, confiance, inclusivit\u00e9",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "HALAL & CONFIANCE",
      title:
        "Trouver des compl\u00e9ments halal ne devrait pas \u00eatre un parcours du combattant",
      content:
        "La plupart des gummies du march\u00e9 utilisent de la g\u00e9latine (bovine ou porcine) \u2014 et certains ne le pr\u00e9cisent m\u00eame pas clairement. Gomu est con\u00e7u d\u00e8s le d\u00e9part sur une base pectine de fruit. Vegan ET halal natif. Pas de certification douteuse \u2014 un ingr\u00e9dient transparent que tu peux v\u00e9rifier toi-m\u00eame sur les analyses de chaque lot.",
      imagePlaceholder: "Illustration : ingr\u00e9dients transparents, pectine de fruit",
    },
    poolReasonKeys: ["transparence", "dosages", "made-in-france", "format", "prix"],
  },

  pilules: {
    slug: "pilules",
    meta: {
      title: "Gomu \u2014 Quitte tes comprim\u00e9s pour des gummies",
      description:
        "5 raisons de quitter tes g\u00e9lules pour quelque chose que tu as envie de prendre. Go\u00fbt fruits rouges, dosages cliniques.",
    },
    hero: {
      headline:
        "5 raisons de quitter tes comprim\u00e9s pour quelque chose que tu as envie de prendre",
      subtitle: "(spoiler\u00a0: \u00e7a a le go\u00fbt de fruits rouges)",
      imagePlaceholder: "Photo lifestyle : gummies color\u00e9s vs g\u00e9lules ternes",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "FORMAT",
      title: "Tu avales encore 6 g\u00e9lules le matin\u00a0?",
      content:
        "On sait tous comment \u00e7a finit. La bo\u00eete tra\u00eene sur l\u2019\u00e9tag\u00e8re, tu oublies un jour, deux jours, une semaine \u2014 et la cure de 3 mois finit \u00e0 la poubelle au bout de 3 semaines. Gomu, c\u2019est des gummies que tu as envie de m\u00e2cher. Pas une corv\u00e9e. C\u2019est pour \u00e7a que 95% des utilisateurs de gummies all-in-one les prennent au moins 4 jours par semaine.",
      imagePlaceholder: "Illustration : g\u00e9lules vs gummies Gomu",
    },
    poolReasonKeys: ["simplicite", "dosages", "transparence", "prix", "energie"],
  },

  energie: {
    slug: "energie",
    meta: {
      title: "Gomu \u2014 \u00c9nergie stable toute la journ\u00e9e",
      description:
        "6 raisons pour lesquelles ceux qui sont crev\u00e9s \u00e0 15h passent \u00e0 Gomu. Sans caf\u00e9ine, sans crash.",
    },
    hero: {
      headline:
        "6 raisons pour lesquelles ceux qui sont crev\u00e9s \u00e0 15h passent \u00e0 Gomu",
      subtitle: "(sans caf\u00e9ine, sans crash)",
      imagePlaceholder: "Photo lifestyle : personne \u00e9nergique au bureau, apr\u00e8s-midi",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "\u00c9NERGIE",
      title:
        "De l\u2019\u00e9nergie stable toute la journ\u00e9e \u2014 pas un pic \u00e0 10h et un crash \u00e0 15h",
      content:
        "La fatigue chronique, c\u2019est rarement un manque de caf\u00e9. C\u2019est souvent un manque de B12, de fer, de magn\u00e9sium \u2014 les nutriments qui permettent \u00e0 tes cellules de produire de l\u2019\u00e9nergie. Gomu apporte les vitamines B sous forme m\u00e9thyl\u00e9e (celle que ton corps utilise directement), des adaptog\u00e8nes pour le stress, et des fibres pour stabiliser ta glyc\u00e9mie. R\u00e9sultat\u00a0: une \u00e9nergie constante, pas un rollercoaster.",
      imagePlaceholder: "Illustration : courbe \u00e9nergie stable sur 24h",
    },
    poolReasonKeys: ["simplicite", "made-in-france", "format", "halal-vegan", "prix"],
  },

  "made-in-france": {
    slug: "made-in-france",
    meta: {
      title: "Gomu \u2014 Le compl\u00e9ment all-in-one fabriqu\u00e9 en France",
      description:
        "Le mod\u00e8le existe aux US depuis 3 ans. On l\u2019a refait en mieux. Ici. Fa\u00e7onnier fran\u00e7ais, analyses Eurofins.",
    },
    hero: {
      headline: "Le compl\u00e9ment all-in-one qui manquait \u00e0 la France",
      subtitle:
        "Le mod\u00e8le existe aux US depuis 3 ans. On l\u2019a refait en mieux. Ici.",
      imagePlaceholder: "Photo lifestyle : produit avec drapeau fran\u00e7ais, usine fran\u00e7aise",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "MADE IN FRANCE",
      title: "Fabriqu\u00e9 en France. Test\u00e9 en France. Contr\u00f4l\u00e9 en France.",
      content:
        "Les Am\u00e9ricains ont Gr\u00fcns et AG1. Les Fran\u00e7ais avaient\u2026 rien. Pas de marque all-in-one fabriqu\u00e9e en France, \u00e0 dosages cliniques, avec des tests labo publi\u00e9s. Gomu comble ce trou. Fa\u00e7onnier fran\u00e7ais, pectine europ\u00e9enne, analyses Eurofins. 67% des Fran\u00e7ais exigent le Made in France pour leurs compl\u00e9ments \u2014 on ne fait pas semblant.",
      imagePlaceholder: "Illustration : carte France avec \u00e9tapes fabrication",
    },
    poolReasonKeys: ["dosages", "transparence", "halal-vegan", "simplicite", "prix"],
  },

  "multi-pots": {
    slug: "multi-pots",
    meta: {
      title: "Gomu \u2014 Un seul sachet remplace 5 pots",
      description:
        "Tu as 5 pots dans ton placard. Tu en as besoin d\u2019un seul. D\u00e9couvre le protocole tout-en-un Gomu.",
    },
    hero: {
      headline:
        "Tu as 5 pots dans ton placard. Tu en as besoin d\u2019un seul.",
      subtitle: "Sommeil + \u00e9nergie + immunit\u00e9 + digestion = un sachet.",
      imagePlaceholder: "Photo lifestyle : placard avec 5 pots vs 1 sachet Gomu",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "SIMPLIFICATION",
      title:
        "Le Pi\u00e8ge du Multi-SKU\u00a0: comment l\u2019industrie te fait acheter 5 pots au lieu d\u2019un",
      content:
        "Mium Lab a 22 r\u00e9f\u00e9rences. Lashil\u00e9 en a 15+. Ce n\u2019est pas un hasard \u2014 chaque pot suppl\u00e9mentaire = un achat suppl\u00e9mentaire. R\u00e9sultat\u00a0: tu d\u00e9penses 60-100\u20ac/mois, tu ne sais plus quoi prendre ni quand, et tu arr\u00eates au bout de 3 semaines. Gomu, c\u2019est le \u00ab\u00a0Protocole Tout-en-Un\u00a0\u00bb\u00a0: 15-20 actifs \u00e0 dosages cliniques dans un seul sachet quotidien. Un produit. Un geste. C\u2019est fait.",
      imagePlaceholder: "Illustration : 5 pots empil\u00e9s vs 1 sachet Gomu",
    },
    poolReasonKeys: ["dosages", "transparence", "made-in-france", "format", "prix"],
  },

  immunite: {
    slug: "immunite",
    meta: {
      title: "Gomu \u2014 Renforce ton immunit\u00e9 au quotidien",
      description:
        "Les 4 piliers immunit\u00e9 dans un seul sachet. Vitamine C, D3, zinc, s\u00e9l\u00e9nium. Fabriqu\u00e9 en France.",
    },
    hero: {
      headline:
        "6 raisons pour lesquelles ceux qui tombent malade chaque hiver passent \u00e0 Gomu",
      subtitle: "(80% des Fran\u00e7ais sont carenc\u00e9s en vitamine D en hiver)",
      imagePlaceholder: "Photo lifestyle : personne en forme en hiver, \u00e9charpe",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "IMMUNIT\u00c9",
      title: "Les 4 piliers immunit\u00e9 \u2014 dans un seul sachet",
      content:
        "Vitamine C (ac\u00e9rola, la forme naturelle), vitamine D3, zinc bisglycinate, s\u00e9l\u00e9nom\u00e9thionine. Ce sont les 4 nutriments les plus document\u00e9s pour le soutien immunitaire \u2014 et la majorit\u00e9 des Fran\u00e7ais en manque. Gomu les r\u00e9unit dans un format que tu prends chaque jour. Pas une cure de 21 jours que tu oublies en f\u00e9vrier \u2014 un geste quotidien qui construit tes d\u00e9fenses sur le long terme.",
      imagePlaceholder: "Illustration : 4 piliers immunit\u00e9 (C, D3, Zinc, Se)",
    },
    poolReasonKeys: ["simplicite", "dosages", "made-in-france", "halal-vegan", "format"],
  },

  arnaque: {
    slug: "arnaque",
    meta: {
      title: "Les compl\u00e9ments alimentaires sont-ils une arnaque\u00a0? | Gomu",
      description:
        "R\u00e9sultats de tests labo publi\u00e9s. Dosages d\u00e9clar\u00e9s. Z\u00e9ro bullshit. On te laisse v\u00e9rifier.",
    },
    hero: {
      headline:
        "Les compl\u00e9ments alimentaires sont-ils une arnaque\u00a0? On te laisse v\u00e9rifier.",
      subtitle:
        "R\u00e9sultats de tests labo publi\u00e9s. Dosages d\u00e9clar\u00e9s. Z\u00e9ro bullshit.",
      imagePlaceholder: "Photo lifestyle : personne sceptique lisant une \u00e9tiquette",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "TRANSPARENCE",
      title:
        "L\u2019ANSES a raison\u00a0: la plupart des compl\u00e9ments sont du vent. Voici pourquoi Gomu est diff\u00e9rent.",
      content:
        "UFC-Que Choisir et l\u2019ANSES alertent r\u00e9guli\u00e8rement sur les all\u00e9gations trompeuses. Ils ont raison \u2014 le march\u00e9 est rempli de produits sous-dos\u00e9s avec des claims gonfl\u00e9s. Gomu ne te demande pas de faire confiance. On publie les analyses Eurofins de chaque lot\u00a0: vitamines, min\u00e9raux, pesticides, m\u00e9taux lourds. Chaque dosage est d\u00e9clar\u00e9 individuellement \u2014 pas de \u00ab\u00a0blend propri\u00e9taire\u00a0\u00bb qui cache le vide. Tu v\u00e9rifies toi-m\u00eame.",
      imagePlaceholder: "Illustration : rapport labo Eurofins, transparence",
    },
    poolReasonKeys: ["dosages", "made-in-france", "halal-vegan", "simplicite", "prix"],
  },

  parents: {
    slug: "parents",
    meta: {
      title: "Gomu \u2014 La routine nutrition pour parents d\u00e9bord\u00e9s",
      description:
        "30 secondes le matin. C\u2019est fait. La routine nutrition que tu ne l\u00e2cheras pas.",
    },
    hero: {
      headline:
        "La routine nutrition qui prend 30 secondes et que tu ne l\u00e2cheras pas",
      subtitle:
        "(parce que t\u2019as autre chose \u00e0 faire que compter des g\u00e9lules)",
      imagePlaceholder: "Photo lifestyle : parent avec enfant, matin, cuisine",
      badge: "Offre de lancement \u2014 Jusqu\u2019\u00e0 -30%",
      cta: "Profiter de l\u2019offre -30%",
      trustBar: "\u2b50 4.8 | [X] avis | Fabriqu\u00e9 en France \ud83c\uddeb\ud83c\uddf7",
    },
    reasonOne: {
      number: "01",
      category: "PARENTS",
      title:
        "Entre le boulot, les gosses et la charge mentale \u2014 ta nutrition passe en dernier",
      content:
        "Tu sais que tu devrais mieux manger, prendre des vitamines, aller chez le m\u00e9decin. Mais entre les r\u00e9unions, l\u2019\u00e9cole, les repas, les lessives \u2014 \u00e7a passe toujours apr\u00e8s. Gomu prend 30 secondes. Un sachet le matin avec ton caf\u00e9. C\u2019est fait. Tes bases nutritionnelles sont couvertes sans ajouter une ligne de plus \u00e0 ta to-do list.",
      imagePlaceholder: "Illustration : parent prenant un sachet Gomu avec caf\u00e9",
    },
    poolReasonKeys: ["simplicite", "dosages", "made-in-france", "energie", "prix"],
  },
};

export const allSlugs = Object.keys(lpPages);
