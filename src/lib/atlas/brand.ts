import type { BrandCore } from "./types";

export const brandCore: BrandCore = {
  mission:
    "Rendre la nutrition quotidienne complète accessible à tous, en un seul geste — des gummies all-in-one dosés scientifiquement, testés lot par lot par Eurofins, avec une transparence totale sur ce qu'il y a dedans.",
  positioning:
    "Le premier all-in-one à dosages cliniques pensé pour le consommateur français — halal & vegan natif, testé lot par lot par Eurofins, 2-3× moins cher que Grüns. Un produit, un geste, zéro bullshit.",
  oneBelief:
    "Simplifier ta nutrition en un seul sachet quotidien, dosé par la science et vérifiable par toi-même, est la clé de la tranquillité d'esprit nutritionnelle — et c'est possible uniquement grâce au Protocole Tout-en-Un, le premier all-in-one français à dosages cliniques avec tests labo publiés lot par lot.",
  oneBeliefCompact: "Un sachet. Toute ta nutrition. Vérifie toi-même.",
  ums: {
    name: "Le Protocole Tout-en-Un",
    narrative:
      "15-20 actifs à dosages cliniques, dans des formes biodisponibles (zinc bisglycinate pas oxyde, L-5-MTHF pas acide folique, sélénométhionine pas sélénite), testés lot par lot par Eurofins, à 24,90€/mois en lancement (29€ prix de croisière). Un seul sachet remplace 3-5 pots. C'est un mécanisme, pas un claim.",
  },
  ump: {
    name: "Le Piège de la Fragmentation",
    narrative:
      "L'industrie découpe un besoin unique (« couvrir ma nutrition quotidienne ») en dizaines de micro-besoins (sommeil, énergie, cheveux, immunité, stress, digestion…), chacun vendu séparément. Mium Lab = 22 références, Lashilé = 15+. Résultat : 60-100€/mois en pots jamais finis, pixie dusting systémique pour tenir un prix « accessible », et le consommateur conclut que « les compléments ne marchent pas » — alors qu'il était simplement piégé dans un modèle défaillant.",
  },
  offer: {
    subscription: {
      price: 24.9,
      strikePrice: 35,
      perks: [
        "Livraison offerte",
        "Modifiable ou annulable en 2 clics — sans justification",
        "Garantie Sachet Vide : 30 jours satisfait ou remboursé",
        "Rapport de Transparence Eurofins de ton lot (valeur 19€)",
        "Guide « Lis Ton Étiquette » (valeur 15€)",
      ],
    },
    oneTime: { price: 39, shipping: "Livraison 4,90€" },
  },
  guarantee: {
    name: "La Garantie Sachet Vide",
    promise:
      "Prends ton premier sachet demain matin. Finis ton premier mois. Si au bout de 30 jours tu n'es pas convaincu — pour n'importe quelle raison — on te rembourse intégralement. Un email, pas de justificatif. On ne te demande pas de t'engager. On te demande d'essayer.",
    duration: "30 jours / 1 cycle complet",
  },
  pillars: [
    {
      icon: "🧪",
      title: "Dosages cliniques réels",
      body: "15-20 actifs, tous à des niveaux documentés par des études publiées. Zéro pixie dusting.",
    },
    {
      icon: "🔬",
      title: "Testé en labo indépendant",
      body: "Analyses Eurofins lot par lot, publiées en ligne. Vitamines, minéraux, pesticides, métaux lourds. Tu vérifies toi-même.",
    },
    {
      icon: "🔍",
      title: "Transparence radicale",
      body: "Résultats Eurofins publiés lot par lot, formule ouverte, dosages individuels déclarés. Zéro proprietary blend. « On ne te demande pas de nous croire — on te demande de vérifier. »",
    },
    {
      icon: "🌱",
      title: "Halal & Vegan natif",
      body: "Base pectine de fruit (pas gélatine). Pensé inclusif dès la conception, pas adapté après coup.",
    },
    {
      icon: "💶",
      title: "Prix honnête",
      body: "29€/mois au lieu de 60-100€ en multi-pots pharmacie ou 40-80$ chez Grüns. Sans engagement, annulable en 2 clics.",
    },
  ],
  toneOfVoice: {
    style:
      "Expert mais accessible. Pote bien informé qui bosse dans la nutrition. Direct, honnête, sans jargon. Tutoiement systématique. Zéro bullshit marketing.",
    dos: [
      "Parler de dosages réels et de formes biodisponibles",
      "Citer nos résultats de tests labo par lot",
      "Expliquer POURQUOI on a choisi chaque ingrédient",
      "Dire « on ne sait pas encore » quand c'est le cas",
      "Comparer ouvertement notre formule aux concurrents (sans les nommer)",
      "Dire le prix sans le cacher",
      "Utiliser « tu » (pas « vous »)",
      "Parler en euros",
      "Parler de « nutrition quotidienne », pas de « supplément miracle »",
    ],
    donts: [
      "« Détox », « purifier », « nettoyer ton corps »",
      "« Résultats garantis », « transformation en X jours »",
      "« Formule révolutionnaire / breakthrough »",
      "« Complexe exclusif breveté »",
      "Allégations santé non autorisées EFSA",
      "« Le meilleur du marché »",
      "« Anti-âge », « fat burner », « booster de libido »",
      "Anglicismes inutiles",
      "Dénigrer un concurrent nommément",
    ],
  },
  sourceDocs: [
    "data/CONTEXTE_MARQUE_BRANDING.md",
    "data/CONTEXTE_PRODUIT.md",
    "data/OFFRE.md",
    "data/GARANTIE.md",
    "data/NECESSARY_BELIEFS.md",
  ],
};

export interface Ingredient {
  name: string;
  category: "vitamin" | "mineral" | "prebiotic" | "adaptogen" | "base";
  form: string;
  rationale: string;
}

export const gomuIngredients: Ingredient[] = [
  {
    name: "Vitamine C",
    category: "vitamin",
    form: "Acérola naturelle",
    rationale: "Forme naturelle vs acide ascorbique synthétique. Meilleure biodisponibilité.",
  },
  {
    name: "Vitamine D3",
    category: "vitamin",
    form: "Cholécalciférol",
    rationale: "80% des Français carencés en hiver. Soutien immunité, os, humeur.",
  },
  {
    name: "Vitamine B9",
    category: "vitamin",
    form: "L-5-MTHF (méthylfolate)",
    rationale: "Forme active. ~40% de la population a la mutation MTHFR et ne peut pas convertir l'acide folique synthétique.",
  },
  {
    name: "Vitamine B12",
    category: "vitamin",
    form: "Méthylcobalamine",
    rationale: "Forme active directement utilisable. Énergie, système nerveux.",
  },
  {
    name: "Complexe B (B1, B2, B3, B5, B6)",
    category: "vitamin",
    form: "Multi-formes méthylées",
    rationale: "Conversion des aliments en énergie cellulaire.",
  },
  {
    name: "Zinc",
    category: "mineral",
    form: "Bisglycinate",
    rationale: "3× mieux absorbé que l'oxyde. Immunité, peau, métabolisme.",
  },
  {
    name: "Sélénium",
    category: "mineral",
    form: "Sélénométhionine",
    rationale: "Forme organique hautement biodisponible vs sélénite inorganique.",
  },
  {
    name: "Iode",
    category: "mineral",
    form: "Iodure de potassium",
    rationale: "Fonction thyroïdienne. 10% des Français carencés.",
  },
  {
    name: "Chrome",
    category: "mineral",
    form: "Picolinate",
    rationale: "Régulation glycémique, métabolisme des glucides.",
  },
  {
    name: "Inuline",
    category: "prebiotic",
    form: "Extrait de chicorée",
    rationale: "Nourrit le microbiote intestinal. Digestion, immunité, humeur.",
  },
  {
    name: "Ashwagandha",
    category: "adaptogen",
    form: "KSM-66 (extrait breveté)",
    rationale: "Adaptogène le plus documenté. -30% cortisol en 60 jours (24 RCT publiés).",
  },
  {
    name: "Rhodiola rosea",
    category: "adaptogen",
    form: "Extrait standardisé 3% rosavines",
    rationale: "Réduction fatigue mentale, résistance au stress cognitif.",
  },
  {
    name: "Base gummy",
    category: "base",
    form: "Pectine de fruit",
    rationale: "Vegan + halal natif (pas gélatine). Zéro sucre ajouté, clean label.",
  },
];
