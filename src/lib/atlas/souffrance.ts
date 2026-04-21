import type { SufferingCell } from "./types";

export const sufferingMatrix: SufferingCell[] = [
  // ===== NIVEAU 1 — PHYSIQUE =====
  {
    id: "s-physical-1",
    sufferingLevel: 1,
    awarenessLevel: 1,
    description: "Fatigue qu'il considère « normale ». Il ne fait pas le lien nutrition.",
    hook: "Tu es fatigué parce que tu vas être fatigué. Sauf qu'en fait, non.",
  },
  {
    id: "s-physical-3",
    sufferingLevel: 1,
    awarenessLevel: 3,
    description:
      "Coup de barre de 14h, cheveux qui tombent, ongles cassants — il sait que c'est nutritionnel mais ne sait pas quoi prendre.",
    hook: "Le 3e café à 15h, c'est pas une fatalité. C'est un signal.",
    bestAngleId: "a-energie",
  },

  // ===== NIVEAU 2 — ÉMOTIONNELLE =====
  {
    id: "s-emotional-3",
    sufferingLevel: 2,
    awarenessLevel: 3,
    description:
      "Anxiété de fond, irritabilité, sentiment d'être dépassé. Il cherche des solutions naturelles.",
    hook: "La charge mentale, c'est pas juste « dans ta tête ». C'est aussi un taux de cortisol.",
    bestAngleId: "a-stress-sommeil",
  },

  // ===== NIVEAU 3 — SOCIALE =====
  {
    id: "s-social-3",
    sufferingLevel: 3,
    awarenessLevel: 3,
    description:
      "Il se sent en retard par rapport aux gens « qui prennent soin d'eux ». Culpabilité devant les posts wellness.",
    hook: "Tout le monde a sa routine wellness. Toi tu as 5 pots qui traînent.",
    bestAngleId: "a-multi-pots",
  },

  // ===== NIVEAU 4 — ÉCONOMIQUE =====
  {
    id: "s-economic-3",
    sufferingLevel: 4,
    awarenessLevel: 3,
    description:
      "60-100€/mois en pots qu'il ne finit jamais. Sensation d'argent gaspillé mais peur d'arrêter.",
    hook: "Tu dépenses plus en compléments que moi en café. Et tu sens rien.",
    bestAngleId: "a-multi-pots",
  },

  // ===== NIVEAU 5 — EXISTENTIELLE =====
  {
    id: "s-energy-crash",
    sufferingLevel: 5,
    awarenessLevel: 3,
    description:
      "« Je devrais avoir l'énergie de vivre ma vie pleinement et je l'ai pas. » Peur de passer à côté.",
    hook: "C'est pas normal d'être claquée à 33 ans.",
    bestAngleId: "a-energie",
  },
  {
    id: "s-trust-betrayed",
    sufferingLevel: 5,
    awarenessLevel: 3,
    description:
      "Trahi par l'industrie — 3-5 pots achetés, zéro résultat. Le scepticisme est devenu une identité protectrice.",
    hook: "On t'a menti. C'est pour ça qu'on te donne les résultats d'Eurofins.",
    bestAngleId: "a-arnaque",
  },

  // ===== NIVEAU 6 — IDENTITAIRE =====
  {
    id: "s-identity-failing",
    sufferingLevel: 6,
    awarenessLevel: 3,
    description:
      "« Je suis quelqu'un qui n'arrive même pas à maintenir une habitude simple. » Défaite personnelle répétée.",
    hook: "Et si le problème c'était pas toi, mais le modèle qu'on t'a vendu ?",
    bestAngleId: "a-placard",
  },
  {
    id: "s-identity-compromised",
    sufferingLevel: 6,
    awarenessLevel: 3,
    description:
      "« Je suis le mec trop compliqué. » Sentiment d'être un consommateur de seconde zone non pensé par les marques.",
    hook: "Trouver un complément halal ne devrait pas être un parcours du combattant.",
    bestAngleId: "a-halal",
  },
];

export const sufferingLevels: { level: number; name: string; description: string }[] = [
  {
    level: 1,
    name: "Physique",
    description: "Manifestations corporelles : fatigue, transit, sommeil, peau, cheveux.",
  },
  {
    level: 2,
    name: "Émotionnelle",
    description: "Stress, anxiété, irritabilité, démotivation, sentiment de submersion.",
  },
  {
    level: 3,
    name: "Sociale",
    description: "Comparaison aux autres, appartenance, statut, reconnaissance.",
  },
  {
    level: 4,
    name: "Économique",
    description: "Argent gaspillé en solutions qui ne marchent pas, pression budgétaire.",
  },
  {
    level: 5,
    name: "Existentielle",
    description: "Sens de la vie, passage du temps, regrets, peur de passer à côté.",
  },
  {
    level: 6,
    name: "Identitaire",
    description:
      "L'identité menacée : « je ne suis pas quelqu'un qui y arrive ». Le plus profond, le plus puissant en persuasion.",
  },
];

export const awarenessLevels: { level: number; name: string; description: string }[] = [
  {
    level: 1,
    name: "Unaware",
    description: "Ne sait pas qu'il a un problème",
  },
  {
    level: 2,
    name: "Problem Aware",
    description: "Sait qu'il a un problème, ne connaît pas les solutions",
  },
  {
    level: 3,
    name: "Solution Aware",
    description: "Connaît les types de solutions, pas notre produit — ~60% masse critique",
  },
  {
    level: 4,
    name: "Product Aware",
    description: "Connaît Gomu, pas encore convaincu",
  },
  {
    level: 5,
    name: "Most Aware",
    description: "Prêt à acheter, attend l'offre",
  },
];
