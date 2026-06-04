export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  date: string;
  body: BlogBlock[];
}

export const ARTICLES: BlogArticle[] = [
  {
    slug: "dosages-minerais-gummy",
    title:
      "Pourquoi 25% des AJR en minéraux dans un gummy (et pourquoi ce n'est pas un défaut)",
    excerpt:
      "On t'explique la contrainte physique du format gummy, pourquoi on assume des minéraux à 25% des AJR, et pourquoi parier sur la compliance bat la perfection sur le papier.",
    category: "Formulation",
    readingMinutes: 6,
    date: "Mars 2026",
    body: [
      {
        type: "p",
        text: "Première question qu'on nous pose, presque toujours : « pourquoi vos minéraux ne sont qu'à 25% des AJR alors que telle gélule affiche 100% ? » C'est une bonne question, et on préfère y répondre franchement plutôt que de la cacher sous un argumentaire marketing. La réponse courte : c'est une contrainte physique du format gummy, on l'assume, et on pense que c'est le bon compromis pour la plupart des gens.",
      },
      {
        type: "h2",
        text: "La contrainte physique du gummy",
      },
      {
        type: "p",
        text: "Un gummy, c'est avant tout une matrice : de la pectine de fruit, un peu de sucre ou d'édulcorant, de l'eau, des arômes, et tes actifs. Il y a une limite physique à la quantité de minéraux que tu peux y charger avant que la texture, le goût ou la stabilité ne s'effondrent. Les minéraux sont lourds et souvent amers ou métalliques en bouche. Pour caser 100% des AJR de magnésium ou de zinc dans une matrice mâchable, il faudrait soit un gummy énorme et immangeable, soit en avaler une dizaine — et là on a perdu l'intérêt du format.",
      },
      {
        type: "p",
        text: "Une gélule de 800 mg n'a pas ce problème : c'est une poudre compactée, on peut y mettre beaucoup plus de matière. Mais une gélule, c'est aussi un truc qu'on oublie de prendre, qu'on a du mal à avaler, qu'on relègue au fond du placard. Le gummy résout ce problème-là. Chaque format a ses forces et ses limites, et on a choisi le nôtre en connaissance de cause.",
      },
      {
        type: "h2",
        text: "Compliance > perfection sur le papier",
      },
      {
        type: "p",
        text: "Voilà notre conviction de fond : le meilleur complément, c'est celui que tu prends vraiment. Tous les jours. Sans y penser. Un produit dosé à 100% que tu abandonnes au bout de quinze jours t'apporte, sur l'année, beaucoup moins qu'un produit dosé à 25% que tu prends 350 jours sur 365. La régularité écrase la dose unitaire. C'est de l'arithmétique, pas du marketing.",
      },
      {
        type: "p",
        text: "On parie donc sur le format plaisir : un sachet de 8 gummies le matin, un goût agréable, un geste simple. Si tu prends le produit, il travaille. S'il finit oublié dans un tiroir, le dosage parfait ne sert à rien.",
      },
      {
        type: "h2",
        text: "Ce qu'on ne sacrifie pas",
      },
      {
        type: "ul",
        items: [
          "Les vitamines sont dosées à 100% des AJR — elles, le format le permet sans problème.",
          "Les formes minérales sont biodisponibles : par exemple le zinc bisglycinate, mieux absorbé que l'oxyde de zinc qu'on trouve dans beaucoup de produits bas de gamme.",
          "Le folate est sous forme L-5-MTHF (folate actif), la B12 sous forme méthylcobalamine.",
          "Chaque lot est analysé par Eurofins et le rapport est publié par numéro de lot dès le lancement.",
        ],
      },
      {
        type: "p",
        text: "Autrement dit : 25% des AJR d'un minéral bien absorbé peut faire mieux, dans ton sang, que 100% d'un minéral mal absorbé. La forme compte autant que le chiffre sur l'étiquette. On préfère un dosage honnête et assimilable à un gros chiffre flatteur mais peu utile.",
      },
      {
        type: "p",
        text: "Important : un complément ne remplace pas une alimentation variée et équilibrée, et ne se substitue pas à un avis médical. Si tu as une carence diagnostiquée, parles-en à ton médecin — un gummy quotidien n'est pas un traitement.",
      },
    ],
  },
  {
    slug: "halal-vegan-pectine",
    title: "Halal & vegan par construction : pectine de fruit vs gélatine",
    excerpt:
      "Pourquoi notre base en pectine de fruit rend nos gummies halal et vegan sans certification ajoutée — et où en est la certification officielle.",
    category: "Ingrédients",
    readingMinutes: 5,
    date: "Mars 2026",
    body: [
      {
        type: "p",
        text: "La plupart des gummies que tu connais sont fabriqués à base de gélatine. La gélatine, c'est une protéine animale, le plus souvent extraite de peau et d'os de porc ou de bœuf. C'est efficace, pas cher, et ça donne cette texture rebondie classique. Mais ça pose deux problèmes : ce n'est ni halal (sauf gélatine bovine certifiée, rare), ni vegan. Nous, on a fait un autre choix dès le départ.",
      },
      {
        type: "h2",
        text: "La pectine, c'est quoi ?",
      },
      {
        type: "p",
        text: "La pectine est une fibre naturellement présente dans les fruits — surtout dans les pommes et les agrumes. C'est elle qui fait prendre une confiture. En gélifiant, elle remplace parfaitement la gélatine pour fabriquer un gummy mâchable et stable. La texture est légèrement différente, un peu plus tendre, mais beaucoup la trouvent même plus agréable.",
      },
      {
        type: "p",
        text: "Surtout, la pectine est 100% végétale. Aucun ingrédient d'origine animale n'entre dans notre base. Ce n'est pas une option « vegan » qu'on a rajoutée par-dessus une recette animale : c'est la fondation même du produit.",
      },
      {
        type: "h2",
        text: "Pourquoi « par construction » et pas « par certification »",
      },
      {
        type: "p",
        text: "Quand un produit est halal et vegan par construction, ça veut dire que c'est vrai du fait même de sa composition, indépendamment d'un logo. Il n'y a pas de gélatine porcine, pas d'ingrédient animal, pas d'alcool dans la recette : il n'y a donc rien à « rendre » halal ou vegan après coup. La nature des ingrédients suffit à le garantir.",
      },
      {
        type: "ul",
        items: [
          "Base gélifiante : pectine de fruit, 100% végétale.",
          "Aucune gélatine, aucun ingrédient d'origine animale dans la formule.",
          "Pas d'alcool comme support d'arôme.",
          "Halal et vegan découlent directement de cette composition.",
        ],
      },
      {
        type: "h2",
        text: "Et la certification officielle ?",
      },
      {
        type: "p",
        text: "Soyons clairs : à l'heure où on écrit ceci, le logo halal officiel n'est pas encore apposé sur le packaging. On travaille avec un organisme certificateur halal français pour faire valider la chaîne de production et obtenir l'apposition du logo dès le lancement. La certification confirme ce que la composition garantit déjà — elle ne le crée pas.",
      },
      {
        type: "p",
        text: "On préfère te dire « la certification est en cours » plutôt que d'afficher un badge qu'on n'a pas encore. C'est une règle qu'on s'est fixée : on ne revendique que ce qui est vrai aujourd'hui, et on annonce honnêtement ce qui arrive.",
      },
    ],
  },
  {
    slug: "biodisponibilite-formes",
    title: "Biodisponibilité : pourquoi la forme compte plus que la dose",
    excerpt:
      "Zinc bisglycinate vs oxyde, folate L-5-MTHF, B12 méthylcobalamine : un même nutriment peut être très bien ou très mal absorbé selon sa forme chimique.",
    category: "Science",
    readingMinutes: 7,
    date: "Avril 2026",
    body: [
      {
        type: "p",
        text: "On regarde tous le gros chiffre sur l'étiquette : « 100% des AJR ». Mais ce chiffre décrit ce qu'il y a dans le gummy, pas ce qui arrive réellement dans ton sang. Entre les deux, il y a l'absorption — et l'absorption dépend énormément de la forme chimique du nutriment. C'est ce qu'on appelle la biodisponibilité.",
      },
      {
        type: "h2",
        text: "Biodisponibilité, en clair",
      },
      {
        type: "p",
        text: "La biodisponibilité, c'est la fraction d'un nutriment ingéré que ton organisme parvient effectivement à absorber et à utiliser. Deux produits peuvent afficher le même dosage et délivrer des quantités très différentes une fois digérés. La forme sous laquelle le nutriment est lié change sa solubilité, sa stabilité dans l'estomac, et la facilité avec laquelle il traverse la paroi intestinale.",
      },
      {
        type: "h2",
        text: "Le zinc : bisglycinate vs oxyde",
      },
      {
        type: "p",
        text: "Le zinc est l'exemple parfait. L'oxyde de zinc est la forme la moins chère, donc la plus répandue dans les produits bas de gamme — mais c'est aussi l'une des moins bien absorbées. Le zinc bisglycinate, où le zinc est lié à deux molécules de glycine, est généralement bien mieux assimilé. On a choisi le bisglycinate, même s'il coûte plus cher, parce qu'un zinc bien absorbé à dose modérée bat un zinc mal absorbé à dose élevée.",
      },
      {
        type: "h2",
        text: "Le folate : L-5-MTHF plutôt qu'acide folique",
      },
      {
        type: "p",
        text: "L'acide folique est la forme synthétique classique de la vitamine B9. Pour être utilisé, il doit d'abord être converti par ton organisme en folate actif. Or une partie de la population convertit moins efficacement cet acide folique. On utilise donc directement le L-5-MTHF, la forme déjà active du folate, qui ne nécessite pas cette étape de conversion.",
      },
      {
        type: "h2",
        text: "La B12 : méthylcobalamine",
      },
      {
        type: "p",
        text: "Même logique pour la vitamine B12. On a retenu la méthylcobalamine, une forme directement disponible pour l'organisme, plutôt que de viser uniquement le plus gros chiffre affichable. L'idée est constante d'un nutriment à l'autre : privilégier la forme que ton corps utilise vraiment.",
      },
      {
        type: "ul",
        items: [
          "Zinc : bisglycinate, mieux absorbé que l'oxyde.",
          "Folate (B9) : L-5-MTHF, forme active, pas d'acide folique à convertir.",
          "B12 : méthylcobalamine, directement disponible.",
          "Vitamine C : sous forme acérola, source naturelle de vitamine C.",
        ],
      },
      {
        type: "p",
        text: "C'est pour ça qu'on répète qu'un dosage modéré dans une bonne forme peut faire mieux qu'un gros dosage dans une mauvaise forme. La dose remplit le tableau nutritionnel ; la forme décide de ce qui finit réellement utilisable par ton corps.",
      },
      {
        type: "p",
        text: "Rappel honnête : ces choix de formes visent une meilleure assimilation, pas un effet thérapeutique. Un complément alimentaire ne soigne ni ne prévient aucune maladie, et ne remplace pas une alimentation variée. En cas de doute ou de traitement en cours, demande conseil à un professionnel de santé.",
      },
    ],
  },
];

export const blogSlugs = ARTICLES.map((a) => a.slug);

export function getArticle(slug: string): BlogArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
