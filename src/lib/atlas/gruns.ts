import type {
  GrunsDeepDive,
  GrunsSectionMeta,
  GrunsBusiness,
  GrunsProduct,
  GrunsLPLibrary,
  GrunsFunnel,
  GrunsOffer,
  GrunsCopy,
  GrunsAds,
  GrunsSocialProof,
  GrunsSEO,
  GrunsEmail,
  GrunsCX,
  ExploitableWeakness,
} from "./types";

export const grunsSections: GrunsSectionMeta[] = [
  {
    key: "business",
    title: "Business & corporate",
    oneLiner:
      "Fondé en 2023 par Chad Janis. Exit Unilever 1,2 Md$ en 2025. $50M levés. Cas d'école DTC vitamins.",
    icon: "Award",
    confidence: "high",
  },
  {
    key: "product",
    title: "Produit & formule",
    oneLiner: "60+ ingrédients, 21 vit/min, 28 sachets/boîte, base gummy, 2 goûts, 2 options sucre.",
    icon: "Package",
    confidence: "med",
  },
  {
    key: "lps",
    title: "Landing pages (90+)",
    oneLiner: "Architecture listicle advertorial + celebrity + capture. ~80% réutilisation.",
    icon: "Scroll",
    confidence: "low",
  },
  {
    key: "funnel",
    title: "Funnel de conversion",
    oneLiner: "Shopify. Dark patterns cancellation documentés (Trustpilot 1★).",
    icon: "ShoppingCart",
    confidence: "med",
  },
  {
    key: "offer",
    title: "Offre & pricing",
    oneLiner: "$59.99/mo sub · $79.99 OT · 28 sachets · garantie fragile 30j fine print.",
    icon: "DollarSign",
    confidence: "high",
  },
  {
    key: "copy",
    title: "Copy & messaging",
    oneLiner: "Tone jeune, casual, anti-chalky-powder, anti-pill. Celebrity Shaun White.",
    icon: "Type",
    confidence: "med",
  },
  {
    key: "ads",
    title: "Publicités (Meta, TikTok)",
    oneLiner: "UGC + celebrity + listicle advertorial. Publishers theSkimm, Glamour, Bon Appétit.",
    icon: "Megaphone",
    confidence: "low",
  },
  {
    key: "social-proof",
    title: "Social proof",
    oneLiner: "85K+ avis claim on-site · 4.6★ réel Trustpilot · 9% 1★ (dark pattern).",
    icon: "MessageCircle",
    confidence: "high",
  },
  {
    key: "seo",
    title: "SEO & content",
    oneLiner: "Blog + PR (Inc., Modern Retail). À quantifier via Ahrefs.",
    icon: "Search",
    confidence: "low",
  },
  {
    key: "email",
    title: "Email & SMS",
    oneLiner: "Flows à collecter via compte test + Milled.com.",
    icon: "Mail",
    confidence: "low",
  },
  {
    key: "cx",
    title: "Customer Experience",
    oneLiner: "Checkout Shopify · shipping 3-5j · unboxing à documenter.",
    icon: "Users",
    confidence: "low",
  },
  {
    key: "weaknesses",
    title: "Faiblesses exploitables",
    oneLiner:
      "Dark pattern cancellation, garantie fine print, pas Made in France, pas halal, US-only, prix ×2 Gomu.",
    icon: "ShieldAlert",
    confidence: "high",
  },
];

// =============================================================================
// 1 — BUSINESS
// =============================================================================

export const grunsBusiness: GrunsBusiness = {
  yearFounded: 2023,
  founders: [
    {
      name: "Chad Janis",
      role: "Founder & CEO",
      note:
        "Ex-Summit Partners (private equity). Stanford Graduate School of Business (2022-2023). Idée née d'un shake de greens en poudre en été 2022.",
    },
  ],
  hq: "USA (New York / Stanford connections)",
  employeeCount: "À confirmer (< 50 estimés avant acquisition)",
  fundraising: [
    {
      round: "Friends & family",
      amountUSD: 400_000,
      date: "2023-06",
      investors: ["Stanford classmates", "friends", "family"],
      source: "inc.com/gruns-follow-the-money",
    },
    {
      round: "Pre-seed",
      amountUSD: 1_800_000,
      date: "2023-08",
      investors: ["Angels Stanford"],
      source: "inc.com",
    },
    {
      round: "Seed",
      amountUSD: 6_000_000,
      date: "2024-02",
      investors: ["Vanterra Ventures", "Selva Ventures", "Able Partners", "Pltfrm Ventures"],
      source: "inc.com",
    },
    {
      round: "Series B",
      date: "2025",
      investors: ["Sugar Capital (Brian Sugar)"],
      source: "beautyindependent.com",
    },
    {
      round: "Exit — Unilever acquisition",
      amountUSD: 1_200_000_000,
      date: "2025",
      investors: ["Unilever"],
      source: "theinformation.com / yahoo finance",
    },
  ],
  revenueEstimate: {
    valueUSD: 100_000_000,
    year: 2025,
    method: "Estimation dérivée de la valorisation Unilever $1.2B (multiple ~10-12x ARR pour DTC CPG wellness)",
    sources: ["modernretail.co", "inc.com"],
  },
  timeline: [
    { date: "2022-06", event: "Idée née : Chad Janis boit un shake de greens, sait qu'il va abandonner en 30j" },
    { date: "2023-06", event: "Friends & family $400K", source: "inc.com" },
    { date: "2023-08", event: "Pre-seed $1.8M" },
    { date: "2023-12", event: "Lancement sur Amazon" },
    { date: "2024-02", event: "Seed $6M" },
    { date: "2024-2025", event: "Distribution Sprouts, Target, Walmart (omnichannel)" },
    { date: "2025", event: "Series B à $500M valorisation" },
    { date: "2025", event: "Exit : rachat Unilever $1.2B" },
    { date: "2025", event: "RCT publiée (absorption nutrient, randomized double-blind placebo)" },
  ],
  sources: [
    { label: "Inc — Follow The Money", url: "https://www.inc.com/jennifer-conrad/gruns-follow-the-money/91181108" },
    { label: "Modern Retail profile", url: "https://www.modernretail.co/operations/the-approach-that-helped-gruns-hit-a-500-million-valuation-in-2-years-and-land-at-sprouts-target-and-walmart/" },
    { label: "The Information — Unilever acquires", url: "https://www.theinformation.com/briefings/unilever-acquires-supplement-startup-gruns" },
    { label: "Inc — Unilever $1.2B", url: "https://www.inc.com/leila-sheridan/unilever-acquires-gruns/91329022" },
    { label: "Beauty Independent — $1.2B exit analysis", url: "https://www.beautyindependent.com/sugar-capital-brian-sugar-gruns-exit-reset-cpg-investing/" },
    { label: "LinkedIn Chad Janis origin story", url: "https://www.linkedin.com/posts/chadjanis_the-gr%C3%BCns-origin-story-how-i-came-up-with-activity-7336107078891073536-WeoW" },
  ],
};

// =============================================================================
// 2 — PRODUCT
// =============================================================================

export const grunsProduct: GrunsProduct = {
  productName: "Grüns Daily Nutrition",
  ingredients: [
    // Les dosages précis ne sont pas publiés sur la page produit — à confirmer
    // sur l'étiquette (Amazon photos) ou via Reddit r/Supplements lab tests
    { name: "Vitamin A", category: "vitamin", bioavailability: "med", vsGomu: "tie" },
    { name: "Vitamin C", category: "vitamin", bioavailability: "med", vsGomu: "loss", notes: "Gomu : acérola naturelle" },
    { name: "Vitamin D3", category: "vitamin", bioavailability: "high", vsGomu: "tie" },
    { name: "Vitamin E", category: "vitamin", bioavailability: "med", vsGomu: "tie" },
    { name: "Vitamin K2", category: "vitamin", bioavailability: "high", vsGomu: "tie" },
    { name: "B-complex (B1/B2/B3/B5/B6)", category: "vitamin", bioavailability: "med", vsGomu: "unknown" },
    { name: "Vitamin B9", category: "vitamin", form: "folate", bioavailability: "unknown", vsGomu: "unknown", notes: "Forme L-5-MTHF non confirmée côté Grüns. Gomu : L-5-MTHF confirmé." },
    { name: "Vitamin B12", category: "vitamin", form: "methylcobalamin (à confirmer)", bioavailability: "high", vsGomu: "tie" },
    { name: "Zinc", category: "mineral", form: "non précisé (possiblement oxyde)", bioavailability: "unknown", vsGomu: "win", notes: "Gomu : bisglycinate 3× mieux absorbé" },
    { name: "Selenium", category: "mineral", form: "non précisé", bioavailability: "unknown", vsGomu: "win", notes: "Gomu : sélénométhionine" },
    { name: "Iodine", category: "mineral", vsGomu: "tie" },
    { name: "Inulin (prebiotic fiber)", category: "prebiotic", doseMg: 6000, vsGomu: "loss", notes: "6g de fibre prébiotique — dose cliniquement supérieure à Gomu (~2-3g estimés)" },
    { name: "Whole fruits & vegetables blend", category: "other", bioavailability: "unknown", vsGomu: "loss", notes: "Grüns : superaliments entiers ; Gomu : focus actifs purs dosés" },
    { name: "Super mushrooms blend", category: "other", vsGomu: "loss", notes: "Gomu ne contient pas de champignons médicinaux actuellement" },
    { name: "Adaptogens", category: "adaptogen", notes: "Liste non détaillée. Gomu : ashwagandha KSM-66 + rhodiola nommés", vsGomu: "win" },
  ],
  allergens: ["Non précisé sur la page publique — à vérifier via étiquette"],
  certifications: ["NSF", "GMP", "FDA-registered facility (US/Canada)", "Eurofins third-party tested"],
  format: {
    servingType: "Sachets journaliers individuels",
    perBox: 28,
    flavors: ["Original", "Strawberry Vanilla (OLIPOP® collab 2025)"],
  },
  packaging: {
    material: "Boîte + sachets individuels",
    recyclable: false,
    notes: "Sachets individuels = déchet plastique journalier (point faible ESG vs. format pot Gomu)",
  },
  claims: [
    "Gut health support",
    "Immunity & stress relief",
    "Energy & metabolism",
    "Brain health & mental clarity",
    "Hair, skin, nails",
    "Replaces multiple supplements",
    "Clinically tested absorption (RCT 2025)",
  ],
  gomuVsGrunsSummary:
    "Grüns a deux vrais avantages : (1) fibre prébiotique 6g (très dosée), (2) superaliments entiers (mushrooms, fruits). Gomu gagne sur : formes biodisponibles nommées (zinc bisglycinate, L-5-MTHF, sélénométhionine), adaptogènes nommés (KSM-66), halal + vegan natif, Made in France, prix 2× moins cher, garantie plus honnête.",
  sources: [
    { label: "gruns.co homepage", url: "https://gruns.co" },
    { label: "gruns.co/pages/our-story", url: "https://gruns.co/pages/our-story" },
  ],
};

// =============================================================================
// 3 — LANDING PAGES (scaffold — à enrichir via crawl)
// =============================================================================

export const grunsLPs: GrunsLPLibrary = {
  totalCountEstimate: 90,
  inventory: [
    // Scaffold : à remplir via crawl `gruns.co/sitemap_pages_1.xml` + Google site: + Wayback
  ],
  blockPool: [
    {
      id: "b-hero-listicle",
      name: "Hero listicle advertorial",
      usageCount: 0,
      description: "Badge offer + headline 'X Reasons Why [segment] Love Grüns' + CTA + trust bar.",
    },
    {
      id: "b-reason-numbered",
      name: "Raison numérotée (01-09)",
      usageCount: 0,
      description: "Category UPPERCASE + titre + paragraphe + image. 1re raison spécifique, 2-7 recyclées.",
    },
    {
      id: "b-social-proof-stats",
      name: "Stats survey clients",
      usageCount: 0,
      description: "67% better digestion · 52% more energy · 95% take 4-6x/week — etc.",
    },
    {
      id: "b-buy-box",
      name: "Buy Box identique",
      usageCount: 0,
      description: "Subscribe & Save -49% ($59.99) vs One-Time ($79.99). Identique sur toutes les LPs.",
    },
    {
      id: "b-trust-icons",
      name: "Grille trust icons",
      usageCount: 0,
      description: "NSF, GMP, Eurofins, FDA-registered, clinical study.",
    },
    {
      id: "b-celebrity-testimonial",
      name: "Celebrity endorsement Shaun White",
      usageCount: 0,
      description: "Citation 3x Olympic gold medalist + photo.",
    },
  ],
  reusePctEstimate: 80,
  takeaways: [
    "Chaque LP = 1 porte d'entrée par segment ou angle, toutes renvoyant vers le MÊME SKU.",
    "Pattern de recyclage ~80% : seuls changent hero, headline, raison n°1, et parfois les visuels (homme/femme, lifestyle).",
    "Le buy box est IDENTIQUE partout. La cohérence de l'offre renforce la confiance.",
    "Template listicle = format advertorial qui se lit comme un article mais vend comme une sales letter.",
  ],
  sources: [
    { label: "Sitemap index", url: "https://gruns.co/sitemap.xml" },
    { label: "Sitemap pages", url: "https://gruns.co/sitemap_pages_1.xml" },
    { label: "À crawler", url: "https://www.google.com/search?q=site:gruns.co" },
    { label: "Wayback Machine", url: "https://web.archive.org/web/*/gruns.co/*" },
  ],
};

// =============================================================================
// 4 — FUNNEL (scaffold)
// =============================================================================

export const grunsFunnel: GrunsFunnel = {
  steps: [
    { order: 1, name: "Ad Meta/TikTok", notes: "UGC ou listicle advertorial via publisher (theSkimm, Glamour)." },
    { order: 2, name: "Landing Page segmentée", notes: "1 des 90+ LPs selon l'angle ciblé." },
    { order: 3, name: "Buy Box Subscribe & Save", notes: "Défaut : subscribe (visuellement avantagé)." },
    { order: 4, name: "Checkout Shopify", url: "https://gruns.co/cart", notes: "Multi-steps — à documenter via commande test." },
    { order: 5, name: "Upsell post-purchase", notes: "Sugar-Free variant ? Bundles ? À documenter." },
    { order: 6, name: "Thank you + onboarding email J+0", notes: "À capturer via compte test." },
    { order: 7, name: "Séquence email onboarding J+1 à J+30", notes: "À capturer via compte test + Milled.com." },
    { order: 8, name: "Shipping 3-5 jours", notes: "Carrier US — arrive parfois en avance pour voider la garantie (Trustpilot 1★)." },
    { order: 9, name: "Unboxing", notes: "À filmer / capturer YouTube ('gruns unboxing')." },
    { order: 10, name: "Renewal automatique mensuel", notes: "⚠️ Dark pattern cancellation documenté — 'five or more screens' (Trustpilot)." },
  ],
  popups: [],
  upsells: [],
  stickyElements: ["Sticky bar promo en haut (offres)", "Sticky CTA mobile (à vérifier)"],
  takeaways: [
    "Le funnel est classique Shopify DTC, sans innovation majeure.",
    "Point faible documenté : friction cancellation (dark pattern) — crée des Trustpilot 1★ violents.",
    "Pour Gomu : faire du cancellation un différenciateur fort ('2 clics, pas de justificatif, pas SFR').",
  ],
  sources: [
    { label: "Trustpilot reviews dark pattern", url: "https://www.trustpilot.com/review/gruns.co" },
  ],
};

// =============================================================================
// 5 — OFFER
// =============================================================================

export const grunsOffer: GrunsOffer = {
  subscribe: {
    priceUSD: 59.99,
    perks: ["Free shipping", "Pause/cancel anytime (en théorie — voir Trustpilot)"],
    shippingFree: true,
  },
  onetime: { priceUSD: 79.99 },
  bundles: [
    {
      name: "Sugar-Free Subscribe",
      priceUSD: 65.99,
      perks: ["Free shipping", "Version sans sucre ajouté"],
    },
    {
      name: "Sugar-Free One-Time",
      priceUSD: 87.99,
      perks: [],
    },
  ],
  promoCodes: [
    // À collecter via Honey / Capital One Shopping / RetailMeNot
  ],
  refundPolicy:
    "30-Day Money-Back Guarantee — sur la PREMIÈRE commande uniquement. Frais $5 + shipping initial retenus. Les commandes suivantes ne sont PAS remboursables.",
  guarantee:
    "« 30-day money-back guarantee » — MAIS avec fine print : première commande seulement, moins $5 de handling, moins les frais de shipping originaux. Gomu : garantie plus honnête (aucune retenue, email suffit).",
  priceHistory: [
    // À collecter via Wayback
  ],
  takeaways: [
    "Sub vs OT : -25% (moins agressif que les -52% Gomu prévus pour le lancement).",
    "Le one-time est quand même vendu (pas désavantagé comme chez Gomu).",
    "Pas de bundle multi-mois explicite → opportunité Gomu (3mo/6mo prepay).",
    "Garantie trompeuse : le 'money back' n'est PAS 100%. Opportunité de différenciation Gomu : garantie intégrale, aucune retenue.",
    "En €, Grüns coûte ~55€ sub / ~73€ OT. Gomu à 24,90€ sub = 2,2× moins cher.",
  ],
  sources: [
    { label: "gruns.co homepage pricing", url: "https://gruns.co" },
    { label: "Trustpilot refund complaints", url: "https://www.trustpilot.com/review/gruns.co" },
  ],
};

// =============================================================================
// 6 — COPY & MESSAGING
// =============================================================================

export const grunsCopy: GrunsCopy = {
  dominantHeadlines: [
    { text: "Complete nutrition in a bite", type: "h1" },
    { text: "60+ superfoods. 21 vitamins & minerals. One daily packet.", type: "h2" },
    { text: "Replace your multivitamin, greens powder, and more", type: "h2" },
    { text: "Not overhyped. Not overpriced.", type: "h2" },
  ],
  usps: [
    "60+ ingredients",
    "21 vitamins & minerals",
    "6g prebiotic fiber",
    "Whole fruits, veggies, mushrooms",
    "Third-party tested (Eurofins)",
    "Clinically tested absorption (RCT 2025)",
    "No synthetic sweeteners or dyes",
    "1,000,000+ members",
    "4.8★ (85K+ reviews — claim on-site, réel Trustpilot = 4.6)",
  ],
  signatureWords: [
    "Foundational nutrition",
    "Daily nutrition",
    "Whole-food",
    "Chalky powders (anti)",
    "Pills (anti)",
    "Complete",
    "Convenient",
    "Accessible",
  ],
  toneOfVoice:
    "Jeune, casual, anti-Big-Supplement. Anti-chalky-powder, anti-pill. 'Not overhyped, not overpriced' = le claim identitaire. Celebrity-endorsed (Shaun White) mais positionné comme 'accessible nutrition'. Gen Z-friendly.",
  namedMechanisms: [
    {
      name: "Daily Nutrition",
      explanation:
        "Grüns n'a pas un nom de 'mécanisme' propriétaire type Protocole Tout-en-Un. Ils utilisent 'Daily Nutrition' comme catégorie élargie. Opportunité Gomu : nommer explicitement 'Le Protocole Tout-en-Un' crée un mécanisme supérieur.",
    },
  ],
  takeaways: [
    "Pas de Unique Mechanism of Solution nommé chez Grüns — 'Daily Nutrition' est une catégorie, pas un mécanisme.",
    "Gomu peut GAGNER sur le naming (UMP 'Piège de la Fragmentation' + UMS 'Protocole Tout-en-Un').",
    "Le ton 'not overhyped' est un bon signal anti-marketing — à préserver côté Gomu ('pas de bullshit').",
    "Le '60+ ingrédients' est un claim impressionnant mais possible pixie dusting — Gomu à contrer avec '15-20 actifs dosés pour que ça marche'.",
  ],
  sources: [{ label: "gruns.co homepage", url: "https://gruns.co" }],
};

// =============================================================================
// 7 — ADS
// =============================================================================

export const grunsAds: GrunsAds = {
  ads: [],
  celebrityPartnerships: [
    {
      name: "Shaun White",
      role: "3× Olympic gold medalist (snowboard)",
      notes:
        "Positionnement performance + jeunesse. Utilisé en hero celebrity LPs + testimonial quotes + ad formats talking head.",
    },
  ],
  publishersAdvertorial: ["theSkimm", "Glamour Magazine", "Bon Appétit"],
  dominantAngles: [
    "Anti-chalky-powder / anti-pill (convenience + pleasure)",
    "Replaces multiple supplements (simplicity)",
    "Celebrity endorsement (Shaun White)",
    "Clinically tested / third-party tested (trust)",
  ],
  takeaways: [
    "3 publishers advertorial identifiés — Gomu peut viser équivalents FR (Madmoizelle, Glamour FR, ELLE, etc.) ou audiences similaires en FR.",
    "1 seul celebrity majeur (Shaun White) — stratégie micro-celebrity plutôt que mega. Imitable côté Gomu avec athlète/créateur FR.",
    "À collecter via Meta Ad Library : https://www.facebook.com/ads/library/?q=gruns",
    "À collecter via TikTok : #gruns sur la Creative Center.",
  ],
  sources: [
    { label: "Meta Ad Library — gruns", url: "https://www.facebook.com/ads/library/?q=gruns" },
    { label: "TikTok #gruns", url: "https://www.tiktok.com/tag/gruns" },
  ],
};

// =============================================================================
// 8 — SOCIAL PROOF
// =============================================================================

export const grunsSocialProof: GrunsSocialProof = {
  trustpilot: {
    count: 2080,
    rating: 4.6,
    distribution: { "5": 88, "4": 1, "3": 1, "2": 1, "1": 9 },
    lastChecked: "2026-04-15",
  },
  otherPlatforms: [
    {
      name: "On-site claim",
      count: 85000,
      rating: 4.8,
      url: "https://gruns.co",
    },
  ],
  topPositive: [
    {
      text: "Since taking Gruns gummies everyday, I am regular and less bloated. I feel more clear and lighter.",
      source: "Trustpilot — Brandee Criswell, 2026-04",
    },
    {
      text: "I was sceptical at first, but this completely changed my routine. The flavour is genuinely pleasant, and it feels more like a treat than a health chore.",
      source: "Trustpilot — Oliver Hawthorne, 2026-04",
    },
  ],
  topNegative: [
    {
      text: "Dark pattern cancellation — five or more screens — and I was charged $500 for an order after attempting cancellation.",
      source: "Trustpilot — Val, 2026-04",
    },
    {
      text: "Shipping occurred 3 days earlier than expected, voiding the 30 days returned policy — predatory subscription practices.",
      source: "Trustpilot — Randal Welles, 2026-04",
    },
    {
      text: "Zero warning before being charged $350 for a renewal. Company refused cancellation and refund even though the order hadn't even shipped yet.",
      source: "Trustpilot — saritasuave, 2026-04",
    },
  ],
  onSiteStats: [
    {
      stat: "4.8★ (85,000+ reviews)",
      credibility: "low",
      note:
        "Le réel Trustpilot affiche 4.6★ sur 2,080 avis. L'écart 4.8 vs 4.6 + le facteur 40× sur le count = agrégation opaque (Reviews.io ? Okendo ?) qui gonfle artificiellement la perception.",
    },
    {
      stat: "1,000,000+ members",
      credibility: "med",
      note:
        "Cohérent avec une valuation $500M-1.2B et ~$100M ARR. Mais 'members' ≠ 'abonnés actifs' (peut inclure leads email, one-time buyers historiques).",
    },
    {
      stat: "95% take 4-6x/week · 80% daily",
      credibility: "med",
      note: "Post-purchase survey — biais d'auto-sélection (ceux qui répondent sont les plus engagés).",
    },
    {
      stat: "67% better digestion · 52% more energy · 67% overall health",
      credibility: "med",
      note: "Même survey. Pas de RCT — c'est déclaratif.",
    },
  ],
  takeaways: [
    "🔥 GOLD : l'écart 4.8★ claim vs 4.6★ Trustpilot réel = narrative 'Grüns dissimule' à exploiter.",
    "🔥 GOLD : 9% de 1★ Trustpilot concernent systématiquement le dark pattern cancellation. Angle pub Gomu : 'Modifiable en 2 clics. Pas comme eux.'",
    "Les on-site stats (95% compliance, 67% digestion) sont publiées sans backing RCT — Gomu peut les dupliquer avec plus de transparence en étant honnête sur la méthode (sondage vs essai clinique).",
  ],
  sources: [
    { label: "Trustpilot gruns.co", url: "https://www.trustpilot.com/review/gruns.co" },
    { label: "gruns.co homepage claims", url: "https://gruns.co" },
  ],
};

// =============================================================================
// 9 — SEO
// =============================================================================

export const grunsSEO: GrunsSEO = {
  topKeywords: [],
  topBacklinks: [
    { domain: "inc.com", url: "https://www.inc.com/jennifer-conrad/gruns-follow-the-money/91181108" },
    { domain: "modernretail.co" },
    { domain: "theinformation.com" },
    { domain: "beautyindependent.com" },
    { domain: "yahoo.com/finance" },
    { domain: "theskimm.com" },
    { domain: "glamour.com" },
    { domain: "bonappetit.com" },
  ],
  blogPosts: [
    // À crawler via gruns.co/blogs/*
  ],
  takeaways: [
    "Stratégie backlinks solide via PR business (Inc, Modern Retail) + PR lifestyle (Glamour, Bon Appétit).",
    "L'axe PR business = opportunité Gomu : cibler Les Échos, Maddyness, ELLE, BFM Business quand les premiers chiffres MRR/ARR seront là.",
    "À quantifier : DR Ahrefs, top 20 keywords, backlinks exacts.",
  ],
  sources: [
    { label: "Ahrefs free check", url: "https://ahrefs.com/backlink-checker" },
    { label: "Ubersuggest", url: "https://neilpatel.com/ubersuggest/" },
    { label: "SimilarWeb", url: "https://www.similarweb.com/website/gruns.co" },
  ],
};

// =============================================================================
// 10 — EMAIL
// =============================================================================

export const grunsEmail: GrunsEmail = {
  flows: [
    {
      name: "welcome",
      emails: [
        {
          order: 1,
          delayHours: 0,
          subject: "À collecter via compte test",
        },
      ],
    },
    {
      name: "abandoned-cart",
      emails: [
        {
          order: 1,
          delayHours: 1,
          subject: "À collecter via checkout partiel",
        },
      ],
    },
  ],
  takeaways: [
    "À collecter via : (a) abonnement newsletter compte test, (b) checkout démarré puis abandonné, (c) Milled.com (milled.com/gruns), (d) Reallygoodemails.",
  ],
  sources: [
    { label: "Milled archive gruns", url: "https://milled.com/gruns" },
    { label: "Mailcharts", url: "https://mailcharts.com" },
  ],
};

// =============================================================================
// 11 — CX
// =============================================================================

export const grunsCX: GrunsCX = {
  checkout: {
    steps: 3,
    paymentOptions: ["Credit card", "Apple Pay (à confirmer)", "Shop Pay (Shopify)"],
    expressCheckout: ["Shop Pay"],
  },
  shipping: {
    carrier: "USPS / UPS (à confirmer)",
    daysMin: 3,
    daysMax: 5,
    international: false,
  },
  unboxing: {
    boxDesign: "À documenter via YouTube 'gruns unboxing'",
    insertCard: true,
    sample: false,
  },
  supportChannels: ["Email", "Contact form"],
  uxScore: [
    { criterion: "Checkout speed", score: 4, note: "Shopify standard, rapide." },
    { criterion: "Cancellation ease", score: 1, note: "Dark pattern documenté — 'five or more screens'." },
    { criterion: "Refund honesty", score: 2, note: "Fine print $5 + shipping, first order only." },
    { criterion: "Shipping speed", score: 4, note: "3-5 days domestic." },
    { criterion: "Unboxing appeal", score: 3, note: "À documenter." },
  ],
  takeaways: [
    "Point faible structurel : cancellation UX. Opportunité énorme pour Gomu.",
    "US-only shipping = marché ouvert pour Gomu en France + Europe.",
    "Pas de programme de fidélité / referral documenté sur le site.",
  ],
  sources: [
    { label: "Trustpilot CX complaints", url: "https://www.trustpilot.com/review/gruns.co" },
    { label: "YouTube gruns unboxing", url: "https://www.youtube.com/results?search_query=gruns+unboxing" },
  ],
};

// =============================================================================
// 12 — WEAKNESSES (battle card)
// =============================================================================

export const grunsWeaknesses: ExploitableWeakness[] = [
  {
    id: "w-cancel-dark-pattern",
    category: "ux",
    weakness:
      "Dark pattern cancellation — 'five or more screens' selon Trustpilot 1★, clients chargés $350-$500 sans consentement clair.",
    evidence: [
      {
        type: "verbatim",
        ref: "Trustpilot : 'charged $500 for an order after attempting cancellation' — Val, 2026-04",
      },
      {
        type: "verbatim",
        ref: "Trustpilot : 'zero warning before being charged $350 for a renewal' — saritasuave",
      },
      { type: "data", ref: "9% des avis Trustpilot sont 1★ et concernent ce pattern" },
    ],
    gomuAdvantage:
      "« Modifiable ou annulable en 2 clics, sans justification. On n'est pas SFR. » — Anti-pattern « abonnement piège » documenté FR.",
    exploitAngleIds: ["a-arnaque", "a-multi-pots"],
    exploitLPSlugs: ["arnaque", "multi-pots"],
    priority: 5,
  },
  {
    id: "w-guarantee-fine-print",
    category: "trust",
    weakness:
      "« 30-day money-back » mais uniquement sur la 1ère commande, moins $5 de handling, moins shipping. Pas vraiment unconditional.",
    evidence: [{ type: "data", ref: "Refund policy on-site + Trustpilot complaints" }],
    gomuAdvantage:
      "Garantie Sachet Vide 30 jours intégrale, aucune retenue, pas de formulaire, email suffit. « On ne te demande pas de t'engager. On te demande d'essayer. »",
    exploitAngleIds: ["a-arnaque"],
    exploitLPSlugs: ["arnaque"],
    priority: 5,
  },
  {
    id: "w-not-halal",
    category: "halal",
    weakness:
      "Aucune communication halal. Composition US-centric. Les musulmans français n'ont aucune confiance à accorder.",
    evidence: [{ type: "reasoning", ref: "Audit communication gruns.co + pages produit" }],
    gomuAdvantage:
      "Halal natif dès la conception, base pectine (pas gélatine), communication inclusive. 5,4M+ musulmans FR servis dès le jour 1.",
    exploitAngleIds: ["a-halal"],
    exploitLPSlugs: ["halal"],
    priority: 5,
  },
  {
    id: "w-not-made-in-france",
    category: "made-in-france",
    weakness:
      "Fabriqué aux US/Canada. Zéro pertinence émotionnelle pour le consommateur FR qui valorise Made in France à 67%.",
    evidence: [{ type: "data", ref: "gruns.co/pages/our-story : manufacturing US/Canada" }],
    gomuAdvantage:
      "Façonnier français, matières premières tracées, labo de contrôle FR. Made in France vérifiable, pas juste un drapeau.",
    exploitAngleIds: ["a-made-in-france"],
    exploitLPSlugs: ["made-in-france"],
    priority: 4,
  },
  {
    id: "w-pricing-high",
    category: "price",
    weakness:
      "$59.99-$87.99/mo = 55-80€/mois. 2× plus cher que Gomu. Cible premium US, pas accessible au marché FR moyen.",
    evidence: [{ type: "data", ref: "gruns.co pricing + taux change" }],
    gomuAdvantage:
      "24,90€/mois en lancement (-30%), 29€/mois prix de croisière. 2× moins cher pour concept équivalent + Made in France + halal natif.",
    exploitAngleIds: ["a-multi-pots", "a-placard"],
    exploitLPSlugs: ["multi-pots"],
    priority: 4,
  },
  {
    id: "w-pixie-dusting-risk",
    category: "sourcing",
    weakness:
      "60+ ingrédients : possible pixie dusting. Les formes biodisponibles (zinc glycinate vs oxyde, L-5-MTHF vs acide folique) ne sont PAS explicitement nommées sur la page publique.",
    evidence: [
      { type: "data", ref: "gruns.co homepage : aucun détail de forme chimique par ingrédient" },
      { type: "reasoning", ref: "60 actifs dans 8 gummies/jour est mathématiquement contraignant en dosage unitaire" },
    ],
    gomuAdvantage:
      "15-20 actifs MAX, tous nommés à leur forme biodisponible : zinc bisglycinate (3× > oxyde), L-5-MTHF (forme active), sélénométhionine, acérola. Pas 60 ingrédients à 0,3mg chacun.",
    exploitAngleIds: ["a-arnaque", "a-multi-pots"],
    exploitLPSlugs: ["arnaque"],
    priority: 4,
  },
  {
    id: "w-sachet-waste",
    category: "packaging",
    weakness:
      "Sachet individuel journalier = 30 déchets plastique/mois/client. Positionnement ESG faible vs une génération jeune sensible au zéro-déchet.",
    evidence: [{ type: "reasoning", ref: "Format boîte de 28 sachets individuels documenté" }],
    gomuAdvantage: "Opportunité : format pot mensuel (moins de plastique) ou sachets compostables.",
    exploitAngleIds: [],
    exploitLPSlugs: [],
    priority: 2,
  },
  {
    id: "w-rating-opacity",
    category: "trust",
    weakness:
      "Claim on-site 4.8★ / 85K avis ≠ réalité Trustpilot (4.6★ / 2,080 avis). Agrégation opaque qui gonfle la perception.",
    evidence: [
      { type: "data", ref: "gruns.co homepage : 4.8★ 85K+ reviews" },
      { type: "data", ref: "trustpilot.com/review/gruns.co : 4.6★ 2,080 reviews" },
    ],
    gomuAdvantage:
      "Transparence radicale : un seul chiffre, une seule source (Trustpilot), publié publiquement. « On ne te demande pas de nous croire, on te demande de vérifier. »",
    exploitAngleIds: ["a-arnaque"],
    exploitLPSlugs: ["arnaque"],
    priority: 3,
  },
];

// =============================================================================
// Consolidated deep dive
// =============================================================================

export const grunsDeepDive: GrunsDeepDive = {
  meta: {
    lastUpdated: "2026-04-15",
    researchPhase: "partial",
    globalConfidence: "med",
  },
  scorecard: {
    copy: 8,
    design: 8,
    offer: 7,
    funnel: 6,
    brand: 9,
  },
  sections: grunsSections,
  business: grunsBusiness,
  product: grunsProduct,
  lps: grunsLPs,
  funnel: grunsFunnel,
  offer: grunsOffer,
  copy: grunsCopy,
  ads: grunsAds,
  socialProof: grunsSocialProof,
  seo: grunsSEO,
  email: grunsEmail,
  cx: grunsCX,
  weaknesses: grunsWeaknesses,
};

export function getGrunsSection(key: string) {
  const meta = grunsSections.find((s) => s.key === key);
  if (!meta) return null;
  switch (key) {
    case "business":
      return { meta, data: grunsBusiness };
    case "product":
      return { meta, data: grunsProduct };
    case "lps":
      return { meta, data: grunsLPs };
    case "funnel":
      return { meta, data: grunsFunnel };
    case "offer":
      return { meta, data: grunsOffer };
    case "copy":
      return { meta, data: grunsCopy };
    case "ads":
      return { meta, data: grunsAds };
    case "social-proof":
      return { meta, data: grunsSocialProof };
    case "seo":
      return { meta, data: grunsSEO };
    case "email":
      return { meta, data: grunsEmail };
    case "cx":
      return { meta, data: grunsCX };
    case "weaknesses":
      return { meta, data: grunsWeaknesses };
    default:
      return null;
  }
}
