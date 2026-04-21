import type { Avatar } from "./types";

export const sarah: Avatar = {
  id: "sarah",
  name: "Sarah",
  age: 33,
  archetype: "Wellness Light / Maman Organisée",
  oneLiner:
    "Elle sait qu'elle devrait « faire quelque chose pour sa nutrition » depuis deux ans, mais chaque tentative s'est soldée par des pots abandonnés dans le placard et une culpabilité diffuse qui s'accumule.",
  demographics: {
    Âge: "33 ans",
    Famille: "En couple, enfant de 3 ans (Léo), 2e enfant dans 12-18 mois",
    Profession: "Chargée de projet digital, agence de com à Nantes",
    Revenus: "~2 400€ net/mois (couple ~4 500€)",
    Localisation: "Appartement 65m², péri-centre Nantes",
  },
  values: [
    "Honnêteté",
    "Pragmatisme",
    "Équilibre vie pro / perso",
    "Consommation responsable sans dogmatisme",
    "Made in France comme signal de sécurité",
  ],
  pains: {
    surface:
      "Fatigue chronique, coup de barre de 14h, 3e café pour tenir. Sommeil fragmenté malgré l'épuisement. Culpabilité devant les pots entamés du placard.",
    deep:
      "La dissonance identitaire : elle donne ses vitamines à Léo chaque matin mais s'oublie elle-même. Elle se sent « pas à la hauteur de l'image qu'elle se fait d'elle-même ».",
    identity:
      "« Je suis quelqu'un qui n'arrive même pas à maintenir une habitude simple. » Un sentiment de défaite personnelle qui érode la confiance en soi.",
  },
  desires: [
    "Tranquillité d'esprit nutritionnelle — ne plus y penser",
    "Sentir qu'elle prend soin d'elle comme elle prend soin des autres",
    "Une routine qui s'installe sans effort (< 1 min/jour)",
    "Pouvoir faire confiance à ce qu'elle met dans son corps",
    "Un prix juste qui ne la fait pas hésiter",
  ],
  objections: [
    "« C'est encore un truc marketing, comme les autres »",
    "« J'ai déjà essayé, j'ai jamais été régulière »",
    "« L'abonnement c'est un piège »",
    "« Un seul produit peut vraiment remplacer 5 compléments ? »",
    "« Les compléments c'est une arnaque — France Info et l'ANSES le disent »",
  ],
  quotes: [
    {
      text: "C'est pas normal d'être aussi claquée à 33 ans.",
      source: "Dialogue reconstitué Bible — Journée type Sarah",
    },
    {
      text: "J'ai 4 pots qui traînent dans le placard, j'en prends aucun.",
      source: "Dialogue reconstitué Bible",
    },
    {
      text: "Je donne ses vitamines à Léo tous les matins. Moi je pense jamais à prendre les miennes.",
      source: "Dialogue reconstitué Bible",
    },
    {
      text: "Si c'est fabriqué en France et testé en labo, c'est déjà plus rassurant.",
      source: "Dialogue reconstitué Bible — Croyances Sarah",
    },
  ],
  primaryAnglesIds: ["a-placard", "a-multi-pots", "a-parents", "a-energie"],
  primarySufferingIds: ["s-identity-failing", "s-energy-crash"],
  sourceDoc: "data/AVATAR_360.md",
};

export const karim: Avatar = {
  id: "karim",
  name: "Karim",
  age: 29,
  archetype: "Halal Exigeant / Actif Urbain",
  oneLiner:
    "Il passe des années à scruter les étiquettes — gélatine, E441, sources douteuses — et arrête la plupart des compléments par principe. Il veut un produit qu'il puisse acheter sans calculer.",
  demographics: {
    Âge: "29 ans",
    Famille: "Célibataire, communauté pratiquante",
    Profession: "Dev / tech / freelance à Paris ou banlieue",
    Revenus: "~3 500€ net/mois",
    Localisation: "Appartement en Île-de-France",
  },
  values: [
    "Intégrité religieuse (halal sérieux, pas déclaratif)",
    "Performance physique et cognitive",
    "Transparence et preuve",
    "Communauté et inclusion",
    "Pragmatisme technique",
  ],
  pains: {
    surface:
      "Stagnation en salle malgré le travail. Récupération plus lente. Énergie en baisse l'après-midi. Trouver un complément halal = parcours du combattant.",
    deep:
      "Le sentiment d'être « un consommateur de seconde zone » que les marques n'ont pas pensé. La fatigue de devoir toujours vérifier trois fois, décoder les étiquettes, demander à son imam, appeler la marque.",
    identity:
      "« Je suis le mec trop compliqué. Je finis par rien prendre parce que je fais pas confiance. »",
  },
  desires: [
    "Un produit halal natif, pas une adaptation",
    "Ne plus avoir à décoder chaque étiquette",
    "Des preuves vérifiables (labo, composition ouverte)",
    "Performance + confort digestif",
    "Appartenance à une marque qui le reconnaît dès le départ",
  ],
  objections: [
    "« Halal déclaratif ≠ halal réel — les certifications sont un business »",
    "« La pectine c'est bien, mais dans les additifs ? »",
    "« Les marques disent halal puis changent de formule en silence »",
    "« Pourquoi je ferais confiance à une marque française sur ça ? »",
  ],
  quotes: [
    {
      text: "J'ai arrêté la whey quand j'ai vu qu'ils avaient ajouté de la gélatine dans les gélules.",
      source: "Forum Al-Kanz / reconstitué",
    },
    {
      text: "Je vérifie chaque ingrédient une fois, deux fois, trois fois. C'est épuisant.",
      source: "Verbatim forum halal",
    },
    {
      text: "Trouver un complément halal ne devrait pas être un parcours du combattant.",
      source: "VERBATIM1 — forum halal FR",
    },
  ],
  primaryAnglesIds: ["a-halal", "a-arnaque", "a-energie"],
  primarySufferingIds: ["s-identity-compromised", "s-trust-betrayed"],
  sourceDoc: "data/AVATAR_360.md",
};

export const avatars: Avatar[] = [sarah, karim];
