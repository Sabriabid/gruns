import type { RichText } from "@/components/lp-v2/richText";

/**
 * Config-driven landing pages — one entry per angle.
 *
 * Experimental rule: the 3 angle pages (halal / tout-en-un / le-rituel) are
 * IDENTICAL on everything except the angle. Only the fields below vary:
 *   - hero   (hook: eyebrow + h1 + subtitle)
 *   - problem (eyebrow + headline + body + handwritten + stats)
 *   - benefits (eyebrow + headline + intro + ORDER of the 4 cards)
 *   - proof  (marquee item order + the Transparence framing line)
 * Everything else (Ingredients, Science, Rituel, Comparatif, Offre 29/20,
 * FAQ, Footer, design tokens) is shared and byte-identical across angles.
 *
 * `un-sachet` is the control angle: it mirrors the current homepage copy so
 * the homepage CTAs (/lp/un-sachet?source=homepage) keep resolving.
 *
 * Copy rules baked in: tutoiement, phrases courtes. Made-in-France & Eurofins
 * are roadmap → phrased future/conditional, never asserted as done. Halal is a
 * formulation fact (base pectine, pas gélatine), certif "en cours". No invented
 * dosages. The ANSES Ashwagandha notice lives in the shared FAQ (every page).
 */

export type BenefitKey = "energie" | "immunite" | "digestion" | "serenite";

export interface AngleStat {
  num: string;
  label: string;
  src: string;
}

export interface AngleHero {
  /** Trust chips, joined by "·". Default homepage value lives in Hero.tsx. */
  eyebrow: string[];
  h1: RichText;
  subtitle: RichText;
}

export interface AngleProblem {
  eyebrow: string;
  headline: RichText;
  /** Right-column paragraphs (each its own RichText). */
  body: RichText[];
  handwritten: string;
  stats: AngleStat[];
}

export interface AngleBenefits {
  eyebrow: string;
  headline: RichText;
  intro: RichText;
  /** Order + emphasis of the 4 value-prop cards. All 4 keys, reordered. */
  order: BenefitKey[];
}

export interface AngleProof {
  /** Reordered marquee items. Omit → Marquee default (homepage) order. */
  marqueeOrder?: string[];
  /** Replaces the Transparence framing paragraph. Omit → component default. */
  transparenceLine?: RichText;
}

export interface LpAngle {
  /** Also the BrevoSource value used for attribution. */
  slug: string;
  meta: { title: string; description: string };
  hero: AngleHero;
  problem: AngleProblem;
  benefits: AngleBenefits;
  proof: AngleProof;
}

export const lpAngles: Record<string, LpAngle> = {
  // ── Control: mirrors the homepage hero/problem/solution copy ──────────────
  "un-sachet": {
    slug: "un-sachet",
    meta: {
      title: "Gomu — Un sachet. Toute ta nutrition.",
      description:
        "15 à 20 vitamines et minéraux à dosages cliniques, en formes biodisponibles. Base pectine halal et vegan. 29€/mois, annulable en 2 clics.",
    },
    hero: {
      eyebrow: ["Halal & Vegan", "Dosages cliniques", "Formes biodisponibles"],
      h1: [
        ["Un sachet."],
        [{ t: "Toute", hl: true, italic: true }, { t: " ta nutrition.", italic: true }],
      ],
      subtitle: [
        [
          "15 à 20 vitamines et minéraux à ",
          { t: "dosages cliniques", bold: true },
          ". En formes biodisponibles. Base pectine de fruit, halal et vegan.",
        ],
      ],
    },
    problem: {
      eyebrow: "Pourquoi on a créé Gomu",
      headline: [
        ["Le problème n'est pas toi."],
        ["C'est la ", { t: "fragmentation", hl: true, italic: true }, "."],
      ],
      body: [
        [
          [
            "Pour couvrir tes besoins de base, l'industrie française te vend ",
            { t: "5 pots différents", bold: true },
            ". 60 à 100€ par mois. 15 gélules à orchestrer chaque matin.",
          ],
        ],
        [
          [
            "Résultat : ",
            { t: "1 personne sur 2 abandonne sa cure avant la fin", hl: true },
            ". Ce n'est pas un problème de volonté — c'est un modèle conçu pour te faire acheter plus et prendre moins.",
          ],
        ],
      ],
      handwritten: "On a fait le compte. Tu paies pour oublier.",
      stats: [
        { num: "80%", label: "des Français carencés en vitamine D en hiver", src: "ANSES" },
        { num: "1/2", label: "abandonne sa cure avant la fin", src: "Alcimed" },
        {
          num: "60–100€",
          label: "dépensés chaque mois en multi-pots",
          src: "Sur la base d'un panier moyen 4-5 compléments",
        },
      ],
    },
    benefits: {
      eyebrow: "Le protocole tout-en-un",
      headline: [
        ["Un sachet. Chaque matin. 30 secondes."],
        [{ t: "C'est tout.", hl: true, italic: true }],
      ],
      intro: [
        [
          "Tout ce que tu achètes aujourd'hui en 5 pots — dans un seul sachet. Dosages cliniques. Formes biodisponibles.",
        ],
      ],
      order: ["energie", "immunite", "digestion", "serenite"],
    },
    proof: {},
  },

  // ── LP A — Halal & Vegan natif ────────────────────────────────────────────
  halal: {
    slug: "halal",
    meta: {
      title: "Gomu — Halal & vegan natif. Vérifie chaque actif.",
      description:
        "Base pectine de fruit, zéro gélatine. Formes biodisponibles nommées : zinc bisglycinate, L-5-MTHF, méthylcobalamine. Halal natif, certification française en cours.",
    },
    hero: {
      eyebrow: ["Base pectine de fruit", "Pas de gélatine", "Halal & Vegan natif"],
      h1: [
        [{ t: "Halal", hl: true }, " dès la formule."],
        [{ t: "Pas en astérisque.", italic: true }],
      ],
      subtitle: [
        [
          "Base pectine de fruit, ",
          { t: "zéro gélatine", bold: true },
          ". Chaque actif est nommé, chaque forme assumée. Tu vérifies, tu décides.",
        ],
      ],
    },
    problem: {
      eyebrow: "La charge mentale du doute",
      headline: [
        ["Vérifier la gélatine de chaque pot,"],
        ["c'est ", { t: "pas une vie", hl: true, italic: true }, "."],
      ],
      body: [
        [
          [
            "Tu connais le rituel. Tu retournes le pot, tu lis les ingrédients en petit, tu cherches l'origine de la gélatine. Souvent, elle est pas précisée. Donc tu reposes.",
          ],
        ],
        [
          [
            "En France, l'essentiel de la gélatine alimentaire est d'origine porcine. La plupart des gummies en contiennent. Quand l'étiquette dit juste « gélatine », tu sais pas. Et ",
            { t: "« probablement halal », pour toi, ça veut dire non", hl: true },
            ".",
          ],
        ],
        [
          [
            "Gomu enlève le doute à la racine. La base est en pectine de fruit — un ingrédient végétal. Pas de gélatine, ni porcine, ni bovine. C'est pas une adaptation : c'est la conception de départ.",
          ],
        ],
      ],
      handwritten: "Le doute, c'est non. Toujours.",
      stats: [
        {
          num: "~90%",
          label: "de la gélatine alimentaire utilisée en France est d'origine porcine",
          src: "Synthèse Gomu",
        },
        {
          num: "0 g",
          label: "de gélatine dans Gomu — base pectine de fruit, vegan et halal natif",
          src: "Composition Gomu",
        },
        {
          num: "~40%",
          label:
            "convertissent mal l'acide folique synthétique (variant MTHFR) — d'où le L-5-MTHF actif",
          src: "Données population européenne",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que tu peux vérifier, ligne par ligne",
      headline: [
        ["Halal natif, formes biodisponibles,"],
        [{ t: "rien de caché.", hl: true, italic: true }],
      ],
      intro: [
        [
          "Chaque actif est nommé, chaque forme assumée. Zinc bisglycinate, L-5-MTHF, méthylcobalamine. Tu lis, tu compares, tu décides.",
        ],
      ],
      order: ["energie", "serenite", "immunite", "digestion"],
    },
    proof: {
      marqueeOrder: [
        "Halal & Vegan natif",
        "Base pectine de fruit",
        "Sans gélatine",
        "Zinc bisglycinate",
        "L-5-MTHF",
        "Méthylcobalamine",
        "Formes biodisponibles",
        "Zéro proprietary blend",
        "Dosages cliniques",
        "Certification halal en cours",
        "Tests Eurofins à venir, lot par lot",
        "Fabriqué en France (en cours)",
      ],
      transparenceLine: [
        [
          "On veut que chaque lot passe par un labo tiers (Eurofins) et que les résultats soient en ligne — pas un « testé en labo » que personne peut lire. Certification halal en cours avec un organisme certificateur français.",
        ],
      ],
    },
  },

  // ── LP B — Le piège de la fragmentation → le protocole tout-en-un ──────────
  "tout-en-un": {
    slug: "tout-en-un",
    meta: {
      title: "Gomu — Tes 5 pots dans un seul sachet.",
      description:
        "Sommeil, énergie, immunité, digestion en un sachet par matin. 15 à 20 actifs à dosages cliniques. 29€/mois, sans engagement, annulable en 2 clics.",
    },
    hero: {
      eyebrow: ["Halal & Vegan", "Dosages cliniques", "Formes biodisponibles"],
      h1: [
        ["Tes 5 pots,"],
        [
          { t: "dans ", italic: true },
          { t: "un seul sachet", hl: true, italic: true },
          { t: ".", italic: true },
        ],
      ],
      subtitle: [
        [
          "Sommeil, énergie, immunité, digestion. ",
          { t: "30 secondes le matin", bold: true },
          ", et c'est réglé pour la journée.",
        ],
      ],
    },
    problem: {
      eyebrow: "Le problème n'est pas toi",
      headline: [
        ["Le problème,"],
        ["c'est la ", { t: "fragmentation", hl: true, italic: true }, "."],
      ],
      body: [
        [
          [
            "Ouvre ton placard. Le pot de vitamine D entamé en novembre. Le magnésium presque plein. Les gummies sommeil finies, jamais rachetées. T'as pas manqué de volonté — on t'a vendu cinq produits là où il en fallait un.",
          ],
        ],
        [
          [
            "C'est le modèle, pas toi. Plus on découpe ta nutrition en pots séparés, plus tu paies, plus c'est compliqué, plus tu lâches. ",
            { t: "Une personne sur deux arrête avant la fin", hl: true },
            ".",
          ],
        ],
        [
          [
            "Gomu remet tout dans un seul geste. Un sachet, le matin, avec ton café. Pas de posologie à retenir, pas de pile de pots, pas de culpabilité.",
          ],
        ],
      ],
      handwritten: "On a fait le compte. Tu paies pour oublier.",
      stats: [
        { num: "80%", label: "des Français carencés en vitamine D en hiver", src: "ANSES" },
        {
          num: "1 sur 2",
          label: "abandonne sa cure de compléments avant la fin",
          src: "Synthèse Gomu",
        },
        {
          num: "60–100€",
          label: "par mois en multi-pots empilés — vs 29€ pour un sachet",
          src: "Relevé prix pharmacie",
        },
      ],
    },
    benefits: {
      eyebrow: "Le protocole tout-en-un",
      headline: [
        ["Un sachet. Chaque matin. 30 secondes."],
        [{ t: "C'est tout.", hl: true, italic: true }],
      ],
      intro: [
        [
          "Sommeil, énergie, immunité, digestion — couverts par un seul geste. Dosages cliniques, formes biodisponibles, zéro pot à orchestrer.",
        ],
      ],
      order: ["energie", "serenite", "immunite", "digestion"],
    },
    proof: {
      marqueeOrder: [
        "5 pots → 1 sachet",
        "30 secondes le matin",
        "29€/mois",
        "Sans engagement · annulable en 2 clics",
        "15-20 actifs",
        "Dosages cliniques",
        "Formes biodisponibles",
        "Halal & Vegan",
        "Sans gélatine",
        "Tests Eurofins à venir, lot par lot",
        "Fabriqué en France (en cours)",
      ],
      transparenceLine: [
        [
          "T'as plus à nous croire sur parole : chaque lot passera par un labo tiers (Eurofins), résultats en ligne. C'est exactement ce qui manque au reste du marché.",
        ],
      ],
    },
  },

  // ── LP C — Le format / le rituel ──────────────────────────────────────────
  "le-rituel": {
    slug: "le-rituel",
    meta: {
      title: "Gomu — Déchire. Croque. C'est réglé.",
      description:
        "8 gummies fruits rouges à mâcher, un sachet par matin. Pas d'eau, pas de shaker, pas de pilulier. 15 à 20 vitamines et minéraux à dosages cliniques.",
    },
    hero: {
      eyebrow: ["Goût fruits rouges", "8 gummies à mâcher", "Halal & Vegan"],
      h1: [
        ["Déchire. Croque."],
        [
          { t: "C'est ", italic: true },
          { t: "réglé", hl: true, italic: true },
          { t: ".", italic: true },
        ],
      ],
      subtitle: [
        [
          "Un sachet, 8 gummies fruits rouges, à mâcher comme un bonbon. ",
          { t: "Pas d'eau, pas de shaker, pas de pilulier", bold: true },
          ".",
        ],
      ],
    },
    problem: {
      eyebrow: "La corvée du matin",
      headline: [
        ["Une routine que tu tiens pas,"],
        ["c'est ", { t: "zéro résultat", hl: true, italic: true }, "."],
      ],
      body: [
        [
          [
            "Le vrai problème des compléments, c'est jamais ce qu'il y a dedans. C'est que tu les prends pas. Six gélules à avaler, un shaker à rincer, une poudre au goût de craie — au bout de trois jours, tu zappes.",
          ],
        ],
        [
          [
            "Le format décide de tout. Si c'est une contrainte, tu lâches. ",
            { t: "Si c'est agréable, tu continues sans y penser", hl: true },
            ".",
          ],
        ],
        [
          ["07:32 — tu déchires le sachet."],
          ["07:32:15 — tu croques 8 gummies fruits rouges."],
          ["07:33 — c'est réglé pour la journée."],
        ],
      ],
      handwritten: "Trois secondes. Pas trois étapes.",
      stats: [
        {
          num: "8",
          label: "gummies fruits rouges à mâcher — pas d'eau, pas de shaker",
          src: "Format Gomu",
        },
        {
          num: "30 s",
          label: "le matin. Le seul effort, c'est de déchirer le sachet.",
          src: "Format Gomu",
        },
        { num: "0", label: "gélule, 0 poudre, 0 goût de craie", src: "Format Gomu" },
      ],
    },
    benefits: {
      eyebrow: "Ce que tu croques",
      headline: [
        ["8 gummies. 15 à 20 actifs."],
        ["Un ", { t: "goût que tu attends", hl: true, italic: true }, "."],
      ],
      intro: [
        [
          "Fruits rouges, texture gummy, à mâcher comme un bonbon. Derrière le plaisir : 15 à 20 vitamines et minéraux à dosages cliniques.",
        ],
      ],
      order: ["energie", "serenite", "digestion", "immunite"],
    },
    proof: {
      marqueeOrder: [
        "8 gummies fruits rouges",
        "À mâcher, pas à avaler",
        "Sachet individuel nomade",
        "Pas d'eau, pas de shaker",
        "Base pectine de fruit",
        "Halal & Vegan",
        "Sans colorant synthétique",
        "Sans sucre ajouté",
        "15-20 actifs",
        "Dosages cliniques",
        "Tests Eurofins à venir, lot par lot",
      ],
      transparenceLine: [
        [
          "Oui, c'est bon. Et non, c'est pas que des bonbons : chaque lot passera par un labo tiers (Eurofins), résultats en ligne — tu vérifies ce qu'il y a vraiment dans le gummy.",
        ],
      ],
    },
  },
};

/** Canonical source of truth for the route's static params and Brevo slugs. */
export const angleSlugs = Object.keys(lpAngles);

export function getAngle(slug: string): LpAngle | undefined {
  return lpAngles[slug];
}
