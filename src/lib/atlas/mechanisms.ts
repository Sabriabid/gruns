import type { Mechanism } from "./types";

export const ump: Mechanism = {
  type: "UMP",
  name: "Le Piège de la Fragmentation",
  tagline: "Une industrie qui te vend 5 pots au lieu d'un seul produit qui marche.",
  problemNamed:
    "Le Piège du Multi-SKU : Mium Lab vend 22 références, Lashilé 15+, les pharmacies recommandent 3 produits minimum. Le consommateur dépense 60-100€/mois en pots qu'il ne finit jamais.",
  narrative:
    "Ce n'est pas un accident de conception — c'est une architecture de profit. Plus on fragmente le besoin, plus on multiplie les SKUs, plus on multiplie le panier moyen. Ce modèle produit un effet secondaire dévastateur : le pixie dusting. Pour tenir chaque pot mono-besoin à 20€, le fabricant dose chaque actif au minimum cosmétique — juste assez pour l'écrire sur l'étiquette, jamais assez pour que ça fonctionne.",
  jaws: [
    "COMPLEXITÉ — trop de pots, trop de choix, trop de gélules : 1 personne sur 2 arrête avant la fin de la cure.",
    "INEFFICACITÉ — sous-dosage systémique qui empêche tout résultat mesurable : le consommateur conclut que « ça ne marche pas » et abandonne.",
  ],
};

export const ums: Mechanism = {
  type: "UMS",
  name: "Le Protocole Tout-en-Un",
  tagline: "Un sachet. 15-20 actifs cliniquement dosés. Testé lot par lot. 29€.",
  solutionNamed:
    "Un seul sachet quotidien remplace 3-5 pots. 15-20 actifs à dosages documentés par études publiées, dans des formes biodisponibles nommées (zinc bisglycinate, L-5-MTHF, sélénométhionine), testés par Eurofins avec résultats publiés en ligne lot par lot.",
  narrative:
    "Le Protocole Tout-en-Un est le premier mécanisme all-in-one français à dosages cliniques avec vérifiabilité radicale. Il résout simultanément les 3 couches du problème : la confusion (un sachet = plus de choix), la méfiance (vérifie toi-même) et le prix (tout en un = plus besoin de multi-pots). Ce n'est pas un claim — c'est un mécanisme NOMMÉ qui explique POURQUOI ça marche cette fois.",
};

export const mechanisms = { ump, ums };
