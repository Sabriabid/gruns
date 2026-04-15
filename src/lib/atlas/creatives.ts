// =============================================================================
// Atlas Creatives — Reverse engineering Grüns + prompts Gomu
// Source: data/ANALYSE_CREA_GRUNS_PROMPTS_GOMU.md
// =============================================================================

export type FunnelStage = "TOF" | "MOF" | "BOF" | "TOF→MOF" | "MOF→BOF";
export type CreativeFormat = "1:1" | "9:16" | "16:9";

export interface GrunsCreative {
  id: number;
  title: string;
  angle: string;
  concept: string;
  funnelStage: FunnelStage;
  emotion: string;
  mechanic: string;
  strength: string;
  weakness: string;
  directlyTransposable?: boolean;
  transposeNote?: string;
  patternIds: number[];
}

export interface CreativePattern {
  id: number;
  name: string;
  oneLiner: string;
  creativeIds: number[];
  description: string;
  gomuTransposition: string;
}

export interface GomuCreativePrompt {
  id: number;
  name: string;
  gomuAngleName: string;
  gomuAngleId?: string; // link to angles.ts
  funnelStage: FunnelStage;
  format: CreativeFormat;
  grunsSourceIds: number[];
  imagePrompt: string;
  style: string;
  copy: {
    headline?: string;
    subheadline?: string;
    subline?: string;
    body?: string;
    badge?: string;
    cta?: string;
    [k: string]: string | string[] | undefined;
  };
  exclusiveFR?: boolean;
  note?: string;
}

// =============================================================================
// 17 GRÜNS CREATIVES (reverse engineered)
// =============================================================================

export const grunsCreatives: GrunsCreative[] = [
  {
    id: 1,
    title: "LOSE THE GUT, NOT YOUR METABOLISM",
    angle: "Perte de poids / soutien métabolique",
    concept:
      "Ours gummy 3D sur un tapis de course — anthropomorphisation du produit comme « compagnon fitness ». Callouts bénéfices en cercle (fibre prébiotique, adaptogènes, 20+ vitamines, 4.8★). Sub-headline : « No blender, no pills, no prep. »",
    funnelStage: "TOF",
    emotion: "Frustration (régimes qui ralentissent le métabolisme) → Espoir (solution qui cible les deux)",
    mechanic:
      "Le gummy bear animé crée de la sympathie + tapis de course ancre l'usage « fitness ». Les callouts périphériques fonctionnent comme des bullet points visuels sans casser le hero shot.",
    strength:
      "Le contraste headline « lose X, NOT Y » crée une tension résolue. Format scroll-stoppant grâce à l'ours 3D.",
    weakness: "Claim métabolique vague côté EFSA — non transposable en l'état pour le marché FR.",
    patternIds: [1],
  },
  {
    id: 2,
    title: "F*CK YOU, HAIR LOSS",
    angle: "Chute de cheveux — attaque émotionnelle directe",
    concept:
      "Typographie agressive + autocensure (« F*CK »), fond jaune saturé, product shot en bas. Sous-headline : ingrédients nommés (biotine, fer, zinc, vitamine D).",
    funnelStage: "TOF",
    emotion: "Colère → Empowerment (« je reprends le contrôle »)",
    mechanic:
      "Le vulgaire contrôlé (« F*CK ») brise le pattern de scroll. Jaune saturé = urgence visuelle. Ingrédients nommés en sous-headline donnent une crédibilité immédiate après le choc émotionnel.",
    strength: "Polarisant = mémorable. Le gap entre le ton agressif et le produit « healthy » crée de la curiosité.",
    weakness: "Risque de rejet par les audiences 40+ et les plateformes (modération Meta).",
    patternIds: [2],
  },
  {
    id: 3,
    title: "US VS THEM",
    angle: "Comparaison structurelle — pack de gummies vs 2 gummies classiques",
    concept:
      "Split screen déchiré (papier arraché), gauche = Grüns (✓ verts), droite = concurrence générique (✗ rouges). Comparaison : dosage, nombre vitamines, base pectine vs gélatine.",
    funnelStage: "MOF",
    emotion: "Frustration (alternatives inférieures) → Clarté (le choix est évident)",
    mechanic:
      "Format « Us vs Them » = template de comparaison le plus éprouvé en DTC. Papier déchiré ajoute texture + énergie. Checks/croix = système de lecture instantané.",
    strength: "Conviction immédiate pour le prospect en phase de décision. Transposable directement.",
    weakness: "Ne fonctionne pas en TOF — nécessite que le prospect connaisse déjà le concept « pack de gummies all-in-one ».",
    directlyTransposable: true,
    transposeNote: "Transposable directement → Angle Gomu #14 (22 Pots vs 1 Sachet)",
    patternIds: [5],
  },
  {
    id: 4,
    title: "HELP KEEP YOUR SH*T MOVING ON GLP-1",
    angle: "Companion GLP-1/Ozempic — constipation comme side effect",
    concept:
      "Product shot flottant avec gummy bears, 3 bullet points (fibre > 2 tasses brocoli, 20+ vitamines, 20 calories), CTA promo « -52% first order » en bannière basse.",
    funnelStage: "MOF→BOF",
    emotion: "Inconfort (effets secondaires GLP-1) → Soulagement (solution simple)",
    mechanic:
      "Trend-jacking du phénomène GLP-1/Ozempic. Vulgaire contrôlé (« SH*T ») attire l'attention. CTA promo en bas crée l'urgence de conversion.",
    strength: "Surfe sur une tendance massive (GLP-1 = recherche Google ×10 en 2 ans). Double effet : scroll-stopper + conversion.",
    weakness: "Très US-centric. Le marché GLP-1 français est plus petit et le ton vulgaire passe moins bien.",
    patternIds: [2, 3],
  },
  {
    id: 5,
    title: "Fiber is key for Weight Loss",
    angle: "Éducation — fibre et satiété",
    concept:
      "Slide de carousel éducatif, fond vert foncé, typographie serif dorée/jaune, flèche « swipe » en bas. Contenu pur : explication fibre → satiété → glycémie → contrôle des fringales.",
    funnelStage: "TOF",
    emotion: "Curiosité → « Ah, je savais pas » → Intérêt pour le produit (implicite)",
    mechanic:
      "Format « valeur d'abord » — pas de mention produit sur cette slide. Construit l'autorité avant de vendre. La flèche jaune incite au swipe (carousel).",
    strength: "Engagement organique élevé, partageable, positionne la marque en éducateur.",
    weakness: "Pas de branding visible, pas de conversion directe.",
    patternIds: [4],
  },
  {
    id: 6,
    title: "One of the Most Common Mistakes People Make When Cutting Calories",
    angle: "Native ad / Curiosité — format « article de presse »",
    concept:
      "Mimique d'un article de magazine (catégorie « Wellness », typographie éditoriale, sous-titre teaseur). Fond vert foncé avec cadre blanc = effet journal. Flèche swipe.",
    funnelStage: "TOF",
    emotion: "Curiosité (« quelle erreur ? ») → Auto-diagnostic (« c'est peut-être moi »)",
    mechanic:
      "Native advertising pattern — le cerveau ne détecte pas la pub, il lit un « article ». Le cadre blanc sur fond vert crée un contraste qui attire l'œil dans le feed.",
    strength: "CTR élevé car le cerveau traite ça comme du contenu, pas de la pub. Très malin.",
    weakness: "Peut décevoir si le carousel ne délivre pas de vraie valeur (attention au « clickbait feel »).",
    patternIds: [4],
  },
  {
    id: 7,
    title: "MEN ON GLP-1 BE LIKE",
    angle: "Meme / Humour — GLP-1 + chute de cheveux chez les hommes",
    concept:
      "Format meme basique (stick figure vs chad), texte en caps, humour communautaire. Le « perdant » perd ses cheveux, le « gagnant » tient un sachet Grüns.",
    funnelStage: "TOF",
    emotion: "Amusement → Identification (« c'est moi le gars de gauche ») → Curiosité produit",
    mechanic:
      "Le meme format désarme la résistance pub. C'est du contenu « peer-level », pas du brand content. Le disclaimer FDA en bas est le seul indice que c'est une pub.",
    strength: "Viralité potentielle massive (share + save), coût de production nul, authenticité organique.",
    weakness: "Audience très masculine, 18-35 ans. Ne touche pas Sarah/maman.",
    patternIds: [3],
  },
  {
    id: 8,
    title: "CARRY THE MTHFR GENE MUTATION? (v1 carré)",
    angle: "Science / Éducation — mutation MTHFR et vitamines méthylées",
    concept:
      "Gummy bears 3D en close-up, headline en caps bold, callout jaune en bas (folate méthylé + B12 méthylcobalamine). Version carré (feed).",
    funnelStage: "MOF",
    emotion: "« Ah, c'est pour ça que ça marchait pas » → Confiance (le produit a la bonne forme)",
    mechanic:
      "Hook ultra-spécifique qui filtre l'audience — seuls ceux qui connaissent MTHFR s'arrêtent. Le callout jaune fonctionne comme un « proof badge ». Le 3D gummy bear maintient l'identité visuelle.",
    strength: "Conversion élevée car audience pré-qualifiée. Positionne la marque comme scientifiquement rigoureuse.",
    weakness: "Audience niche (<5% de la pop connaît MTHFR). Volume limité.",
    directlyTransposable: true,
    transposeNote: "Directement transposable → L-5-MTHF + méthylcobalamine dans la formule Gomu",
    patternIds: [1],
  },
  {
    id: 9,
    title: "CARRY THE MTHFR GENE MUTATION? (v2 story)",
    angle: "Science / Éducation — version story 9:16",
    concept: "Même concept que #8 mais format story (9:16).",
    funnelStage: "MOF",
    emotion: "Même que #8",
    mechanic: "Même que #8 — adaptation format vertical",
    strength: "Format story = reach supérieur sur Instagram Stories + Reels.",
    weakness: "Même que #8",
    directlyTransposable: true,
    transposeNote: "Directement transposable → Angle Gomu #13 (Mutation MTHFR)",
    patternIds: [1],
  },
  {
    id: 10,
    title: "INVEST IN YOUR GUT BACTERIA",
    angle: "Santé intestinale — prébiotiques",
    concept:
      "Close-up gummy bears 3D, texte en overlay sur fond vert (highlight boxes), ton « conseil financier » appliqué à la santé.",
    funnelStage: "TOF",
    emotion: "Responsabilisation douce (« investis dans toi »)",
    mechanic:
      "La métaphore « investir » reframe la santé comme un asset, pas une corvée. Les highlight boxes vertes avec texte jaune = code visuel Grüns (recognition).",
    strength: "Positionnement positif (pas de douleur, pas de honte — juste un « bon geste »).",
    weakness: "Peu différenciant, message générique applicable à n'importe quel probiotique.",
    patternIds: [1],
  },
  {
    id: 11,
    title: "YOUR SIGN TO EAT MORE FIBER",
    angle: "Social media native — format « your sign to… »",
    concept:
      "Même visuel que créa 10 (close-up gummy bears), mais avec un copy trend-jacking (« your sign to… »). Format organique.",
    funnelStage: "TOF",
    emotion: "Amusement léger → Permission (« ok, j'ai eu mon signe »)",
    mechanic:
      "Format « your sign to… » = meme/trend récurrent sur Instagram/TikTok. Réduit la friction psychologique (« ce n'est pas une pub, c'est l'univers qui me parle »).",
    strength: "Coût de production nul, engagement organique, ton léger.",
    weakness: "Zéro conversion directe, pas de différenciation.",
    patternIds: [1],
  },
  {
    id: 12,
    title: "HITTING A CALORIE DEFICIT?",
    angle: "Déficit calorique + fibre pour satiété",
    concept:
      "Product shot (sachet + gummy bear 3D) + 3 bullet checks (contrôle fringales, régularité, satiété). Question en headline = interpellation directe.",
    funnelStage: "MOF",
    emotion: "Reconnaissance (« oui, c'est mon cas ») → Intérêt solution",
    mechanic:
      "La question en headline force l'auto-diagnostic. Les 3 checks en vert = pattern de lecture rapide. Product shot ancre la solution.",
    strength: "Très ciblé, haute pertinence pour l'audience fitness/régime.",
    weakness: "Niche (audience en déficit calorique actif).",
    patternIds: [1],
  },
  {
    id: 13,
    title: "WITHOUT / WITH GRÜNS",
    angle: "Avant/Après — transformation digestive",
    concept:
      "Split vertical, gauche = symptômes négatifs (ballonnements, irrégularité, inconfort), droite = bénéfices (moins ballonnements, régularité, happy gut, 20+ vitamines). Gummy bear 3D en centre.",
    funnelStage: "MOF",
    emotion: "Reconnaissance des symptômes → Projection dans la transformation",
    mechanic:
      "Format « sans/avec » = classique de la preuve sociale implicite. L'emoji 💩 ajoute humour et dédramatise. L'astérisque (*) = signal de conformité FTC/EFSA.",
    strength: "Très lisible, conversion MOF élevée, format éprouvé.",
    weakness: "Claims digestifs nécessitent des astérisques en France (EFSA/DGCCRF).",
    patternIds: [1, 5],
  },
  {
    id: 14,
    title: "OVER 50% OFF ENDING SOON",
    angle: "Promo / Urgence — gamme Kids",
    concept:
      "Dégradé rose-jaune, deux sachets Kids, bannière CTA « SHOP LIMITED-TIME SALE ». Urgence temporelle pure.",
    funnelStage: "BOF",
    emotion: "FOMO → Action immédiate",
    mechanic:
      "Aucune subtilité — pur direct response. Le dégradé coloré (rose/jaune/vert) = pattern Meta Ads éprouvé pour les promos. « ENDING SOON » crée l'urgence.",
    strength: "CTR et conversion élevés en retargeting.",
    weakness: "Zéro brand equity, zéro éducation. Ne marche qu'avec une audience déjà chaude.",
    transposeNote:
      "⚠️ À ÉVITER pour Gomu — exactement le type de faux mécanisme promo que la brand interdit. L'angle Gomu équivalent (Batch Limité) est transparent sur le POURQUOI du prix.",
    patternIds: [],
  },
  {
    id: 15,
    title: "Poop more 💩",
    angle: "Humour / Shock — santé digestive",
    concept:
      "Headline provocante + emoji, product shot central avec callouts radiaux (prébiotiques, fibre 6g, énergie, régularité), social proof en bas (20 000+ reviews).",
    funnelStage: "TOF→MOF",
    emotion: "Amusement → « Ah c'est vrai, j'ai ce problème » → Curiosité",
    mechanic:
      "Le choc du « Poop more » dans un contexte wellness crée un pattern interrupt massif. L'emoji 💩 est universellement reconnu. Les callouts autour du produit éduquent sans effort.",
    strength: "Mémorable, partageable, déstigmatise un sujet tabou.",
    weakness: "Risque de perception « pas sérieux » pour les audiences plus âgées.",
    patternIds: [1, 2],
  },
  {
    id: 16,
    title: "Dear Perimenopause",
    angle: "Storytelling / Lettre ouverte — périménopause",
    concept:
      "Format « lettre personnelle » avec une typographie manuscrite/éditoriale. Long copy émotionnel : identification des symptômes, déculpabilisation (« je ne deviens pas folle »), solution douce (nutrition, pas hormones). Product shot en bas.",
    funnelStage: "MOF",
    emotion: "Vulnérabilité → Reconnaissance → Soulagement → Permission",
    mechanic:
      "Le format « lettre » crée une intimité immédiate. Le « Dear Perimenopause, You're… a lot. » est un hook parfait (Masterson : Story Lead). Le long copy fonctionne car l'émotion maintient l'attention. Le produit n'arrive qu'à la fin — la confiance est construite AVANT.",
    strength:
      "Conversion très élevée sur l'audience cible. Engagement émotionnel maximal. Format facilement adaptable pour Gomu (Sarah, 35-45 ans).",
    weakness: "Audience ultra-niche, ne scale pas en volume.",
    directlyTransposable: true,
    transposeNote: "Directement transposable → Angle Gomu #4 (Maman Qui S'oublie), format lettre puissant en FR",
    patternIds: [6],
  },
  {
    id: 17,
    title: "Ozempic's New Bestie",
    angle: "Companion Ozempic — ballonnements et constipation",
    concept:
      "Typographie cursive élégante, ton léger (« bestie »), product shot + gummy bear 3D, sous-headline bénéfices + CTA implicite (« 1 pack a day → More 💩 »).",
    funnelStage: "TOF→MOF",
    emotion: "Légèreté → Reconnaissance du problème → Solution accessible",
    mechanic:
      "Le mot « Bestie » humanise le produit et crée une relation amicale (pas médicale). La typographie cursive donne un ton féminin/accessible. « Tastes good, feels even better » = closer sensoriel.",
    strength: "Positionnement intelligent — pas un concurrent d'Ozempic, un ALLIÉ. Ton léger qui dédramatise.",
    weakness: "Ozempic/GLP-1 est moins viral en France qu'aux US (pour l'instant).",
    patternIds: [1, 3],
  },
];

// =============================================================================
// 6 PATTERNS CRÉATIFS IDENTIFIÉS
// =============================================================================

export const creativePatterns: CreativePattern[] = [
  {
    id: 1,
    name: "Le Gummy Bear 3D comme Hero",
    oneLiner: "La mascotte anthropomorphique remplace le product shot",
    creativeIds: [1, 8, 9, 10, 11, 12, 13, 15, 17],
    description:
      "L'ours en gélatine 3D est la mascotte non-officielle de Grüns. Il remplace le product shot classique (sachet seul) par un personnage sympathique. 9 créas sur 17 (53%) l'utilisent — c'est le pattern dominant.",
    gomuTransposition:
      "Gomu réplique avec l'ours violet translucide 3D. Même logique : anthropomorphisation pour créer de la sympathie, scroll-stopping visuel, consistance brand à travers tous les formats.",
  },
  {
    id: 2,
    name: "Le Vulgaire Contrôlé",
    oneLiner: "Le langage cru brise le pattern wellness habituel",
    creativeIds: [2, 4, 15],
    description:
      "« F*CK », « SH*T », « Poop » — le langage cru désinhibe et attire l'attention dans un marché wellness habituellement policé. 3 créas sur 17.",
    gomuTransposition:
      "À adapter en français avec parcimonie — le marché FR est plus sensible au vulgaire en pub que le marché US. Une créa « Chie plus 💩 » pourrait fonctionner sur TikTok mais passerait mal sur Meta Kids + audiences 40+.",
  },
  {
    id: 3,
    name: "Le Trend-Jacking GLP-1 / Ozempic",
    oneLiner: "Surfing sur la vague sémaglutide pour capter une audience qualifiée",
    creativeIds: [4, 7, 17],
    description:
      "18% du mix créatif dédié au GLP-1. Grüns se positionne soit comme alternative (perte poids + métabolisme), soit comme companion (constipation Ozempic). Trend massive aux US.",
    gomuTransposition:
      "Applicable en FR mais marché GLP-1 2-3 ans derrière en adoption grand public. Mieux : attendre Q3/Q4 2026 pour trend-jacker, ou anticiper via « les effets cachés du semaglutide » en éducatif.",
  },
  {
    id: 4,
    name: "Le Format Éducatif (Carousel / Slide / Native Ad)",
    oneLiner: "Contenu valeur-first, branding invisible, autorité avant vente",
    creativeIds: [5, 6],
    description:
      "Slides éducatives avec fond vert foncé + typographie serif, ou mimique d'article de presse. Aucune mention produit sur la 1ère slide. Le cerveau ne détecte pas la pub.",
    gomuTransposition:
      "Parfaitement transposable pour Gomu. Format ultra-efficace pour construire l'autorité « on vulgarise la science » + native ads style magazine (Cashvertising — technique 6). Prompts 11 et 15 construits sur ce pattern.",
  },
  {
    id: 5,
    name: "La Comparaison Structurelle",
    oneLiner: "Us vs Them / Sans vs Avec — conversion MOF élevée",
    creativeIds: [3, 13],
    description:
      "Format « Us vs Them » (papier déchiré, checks verts vs croix rouges) ou « Sans / Avec » (avant/après transformation). Conversion élevée sur audience en phase de décision.",
    gomuTransposition:
      "Angle Gomu #14 (22 Pots vs 1 Sachet). Prompt 3 « Nous vs Eux » + Prompt 5 « Sans / Avec » construits sur ce pattern.",
  },
  {
    id: 6,
    name: "Le Storytelling Persona-Specific",
    oneLiner: "Long copy émotionnel format lettre — l'arme la plus puissante",
    creativeIds: [16],
    description:
      "« Dear Perimenopause » est la seule créa de ce type dans les 17 analysées. Long copy émotionnel, format lettre, identification profonde. Conversion massive sur l'audience cible (femmes 40+).",
    gomuTransposition:
      "C'est le format le plus sous-utilisé par Grüns et le plus puissant. Gomu peut pousser ce levier : « Chère charge mentale » (Prompt 6), « Cher placard de salle de bain », « Cher scepticisme »… Une créa lettre par avatar.",
  },
];

// =============================================================================
// 15 PROMPTS GOMU (production-ready)
// =============================================================================

export const gomuPrompts: GomuCreativePrompt[] = [
  {
    id: 1,
    name: "L'Objection Retournée (MTHFR)",
    gomuAngleName: "#13 Mutation MTHFR",
    funnelStage: "MOF",
    format: "1:1",
    grunsSourceIds: [8, 9],
    imagePrompt:
      "Product advertisement, square format 1:1. Two translucent dark purple gummy bears in 3D, close-up, one slightly behind the other, both looking at camera. Soft cream/beige gradient background transitioning to deep purple at the bottom third. Bold dark purple headline text at top: '40% de la population ne convertit pas l'acide folique.' Subheadline below: 'Tu as besoin de folate méthylé.' Small yellow rounded badge at bottom with dark purple text: 'L-5-MTHF 400μg + Méthylcobalamine — formes actives, dosages publiés.' Small disclaimer text at very bottom. Clean, premium supplement brand aesthetic, studio lighting, photorealistic gummy bears with purple translucent texture.",
    style: "photorealistic product photography, clean supplement advertising",
    copy: {
      headline: "40% de la population ne convertit pas l'acide folique.",
      subheadline: "Tu as besoin de folate méthylé.",
      badge: "L-5-MTHF 400μg + Méthylcobalamine — formes actives, dosages publiés.",
      cta: "gomu.fr",
    },
  },
  {
    id: 2,
    name: "Le Placard Qui Te Juge",
    gomuAngleName: "#1 Placard Silencieux",
    gomuAngleId: "a-placard",
    funnelStage: "TOF",
    format: "1:1",
    grunsSourceIds: [1],
    imagePrompt:
      "Product advertisement, square format 1:1. A single large translucent dark purple 3D gummy bear standing confidently next to an open bathroom cabinet showing 4-5 scattered supplement bottles and pots (some open, some half-empty, generic brands). The gummy bear is in sharp focus in the foreground, the messy cabinet is slightly blurred behind. Soft cream background. Bold dark purple headline text at top: '4 pots dans ton placard. Zéro dans ton corps.' Smaller text at bottom: 'Un sachet. Toute ta nutrition. 30 secondes.' Purple CTA button: 'gomu.fr'. Premium clean aesthetic, studio lighting.",
    style: "photorealistic product photography with lifestyle element",
    copy: {
      headline: "4 pots dans ton placard. Zéro dans ton corps.",
      subline: "Un sachet. Toute ta nutrition. 30 secondes.",
      cta: "gomu.fr",
    },
  },
  {
    id: 3,
    name: "Nous vs Eux",
    gomuAngleName: "#14 Comparaison Structurelle",
    gomuAngleId: "a-multi-pots",
    funnelStage: "MOF",
    format: "9:16",
    grunsSourceIds: [3],
    imagePrompt:
      "Product comparison advertisement, vertical story format 9:16. Split screen divided by a torn paper effect down the middle. LEFT SIDE (cream background): A purple Gomu sachet with yellow bear logo, surrounded by a few purple translucent gummy bears. Three green check marks with text: '✓ 15 actifs dosés pour fonctionner', '✓ Base pectine — vegan + halal natif', '✓ Chaque lot testé par Eurofins'. RIGHT SIDE (grey/dull background): 4-5 generic supplement bottles/pots scattered messily. Three red X marks with text: '✗ 60 ingrédients sous-dosés', '✗ Gélatine (origine non précisée)', '✗ Aucun test publié'. Bold dark purple headline at top spanning both sides: 'NOUS vs EUX'. Clean supplement brand aesthetic.",
    style: "comparison ad, torn paper divider, product photography",
    copy: {
      headline: "NOUS vs EUX",
      left_title: "1 sachet Gomu",
      left_checks: [
        "15 actifs dosés pour fonctionner",
        "Base pectine — vegan + halal natif",
        "Chaque lot testé par Eurofins",
      ],
      right_title: "4 pots dans ton placard",
      right_crosses: ["60 ingrédients sous-dosés", "Gélatine (origine non précisée)", "Aucun test publié"],
    },
  },
  {
    id: 4,
    name: "La Preuve Brute",
    gomuAngleName: "#5 Preuve Brute / Eurofins",
    gomuAngleId: "a-arnaque",
    funnelStage: "MOF→BOF",
    format: "1:1",
    grunsSourceIds: [8, 9],
    imagePrompt:
      "Product advertisement, square format 1:1. A single large translucent dark purple 3D gummy bear sitting centered, looking at camera, photorealistic with light reflections. Upper third: cream/beige background. Lower third: deep solid purple background. Bold dark purple headline text at top in large quotation marks: '« On sait même pas ce qu'il y a vraiment dedans. »' Below the gummy bear on the purple section, centered white text listing ingredients with dosages: 'Zinc bisglycinate — 10mg | Sélénométhionine — 55μg | Vitamine D3 — 25μg | L-5-MTHF — 400μg | Méthylcobalamine — forme active B12'. Below that, bold yellow text: 'Chaque dosage publié. Chaque lot testé par Eurofins. Vérifie toi-même.' Small 'gomu.fr' at bottom. Premium, clean, confident aesthetic.",
    style: "photorealistic product photography, split background cream/purple",
    copy: {
      headline: "« On sait même pas ce qu'il y a vraiment dedans. »",
      ingredients:
        "Zinc bisglycinate — 10mg\nSélénométhionine — 55μg\nVitamine D3 — 25μg\nL-5-MTHF — 400μg\nMéthylcobalamine — forme active B12",
      closer: "Chaque dosage publié.\nChaque lot testé par Eurofins.\nVérifie toi-même.",
      cta: "gomu.fr",
    },
  },
  {
    id: 5,
    name: "Sans / Avec Gomu",
    gomuAngleName: "Transformation digestive + bien-être",
    gomuAngleId: "a-digestion",
    funnelStage: "MOF",
    format: "9:16",
    grunsSourceIds: [13],
    imagePrompt:
      "Product advertisement, vertical story format 9:16. Split screen vertical divider. LEFT SIDE (slightly desaturated cream): Header 'SANS Gomu' in grey text. Listed symptoms in dark grey: 'Fatigue chronique', 'Transit irrégulier', '4 pots oubliés dans le placard', 'Aucune idée de ce que tu prends'. RIGHT SIDE (vibrant cream with subtle purple accent): Header 'AVEC Gomu' in deep purple text with a small yellow star. Listed benefits in purple: 'Énergie stable*', 'Transit régulier*', '1 sachet, 30 secondes', 'Dosages publiés, labo certifié'. CENTER: A large translucent purple 3D gummy bear sitting at the dividing line, overlapping both sides. Small asterisk disclaimer at bottom. Clean, premium aesthetic.",
    style: "before/after comparison, product photography, clean supplement ad",
    copy: {
      left_header: "SANS Gomu",
      left_items: [
        "Fatigue chronique",
        "Transit irrégulier",
        "4 pots oubliés dans le placard",
        "Aucune idée de ce que tu prends",
      ],
      right_header: "AVEC Gomu",
      right_items: [
        "Énergie stable*",
        "Transit régulier*",
        "1 sachet, 30 secondes",
        "Dosages publiés, labo certifié",
      ],
      disclaimer: "*Basé sur les ingrédients de la formule. Résultats individuels variables.",
    },
  },
  {
    id: 6,
    name: "Lettre à la Charge Mentale",
    gomuAngleName: "#4 Maman Qui S'oublie",
    gomuAngleId: "a-parents",
    funnelStage: "MOF",
    format: "9:16",
    grunsSourceIds: [16],
    imagePrompt:
      "Long copy advertisement, vertical story format 9:16. Warm cream/yellow background (#FFF9D6). Editorial letter format with elegant serif typography in dark purple. At top: 'Chère charge mentale,' in large italic serif. Body text in smaller serif: 'Tu prends beaucoup de place. Le matin c'est les cartables, le goûter, les rendez-vous. Le soir c'est les devoirs, le bain, le dîner. Quelque part entre les deux, j'ai oublié de prendre soin de moi. Pas par choix. Par manque de temps. Alors non, je ne vais pas rajouter 4 pots de compléments à ma routine. Mais 1 sachet en 30 secondes, ça je peux. Pas un miracle. Juste un geste. Pour moi, cette fois. Signé, Une maman de 34 ans qui commence à se compter dans l'équation.' At bottom: a purple Gomu sachet with yellow bear logo, slightly angled. Small 'gomu.fr' at very bottom.",
    style: "editorial letter format, warm tones, long copy ad, lifestyle supplement brand",
    copy: {
      salutation: "Chère charge mentale,",
      body: "Tu prends beaucoup de place.\n\nLe matin c'est les cartables, le goûter, les rendez-vous.\nLe soir c'est les devoirs, le bain, le dîner.\nQuelque part entre les deux, j'ai oublié de prendre soin de moi.\n\nPas par choix. Par manque de temps.\n\nAlors non, je ne vais pas rajouter 4 pots de compléments à ma routine.\nMais 1 sachet en 30 secondes, ça je peux.\n\nPas un miracle. Juste un geste.\nPour moi, cette fois.",
      signature: "Signé,\nUne maman de 34 ans qui commence à se compter dans l'équation.",
      cta: "gomu.fr",
    },
  },
  {
    id: 7,
    name: "L'Abonnement Sans Piège",
    gomuAngleName: "#8 Abonnement Sans Piège (anti-Lashilé)",
    funnelStage: "MOF→BOF",
    format: "1:1",
    grunsSourceIds: [],
    exclusiveFR: true,
    imagePrompt:
      "Product advertisement, square format 1:1. Clean cream background (#FFF9D6). At top, a fake notification/alert box styled like a phone screenshot with grey background: '🚨 Vous êtes abonné(e). Pour résilier, envoyez un courrier recommandé à...' with the text crossed out in red. Below, large bold dark purple text: 'Chez nous : annulable en 2 clics. Pas en 17 emails.' Three purple Gomu sachets with yellow bear logos arranged in a fan at bottom center, with a few scattered purple gummy bears. Below the sachets: '29€/mois. Sans engagement. Satisfait ou remboursé.' Purple rounded CTA button: 'Je teste à 20€'. Small 'gomu.fr' at bottom.",
    style: "clean product ad with UI element, trust-building creative, supplement brand",
    copy: {
      fake_alert: "🚨 Vous êtes abonné(e). Pour résilier, envoyez un courrier recommandé à...",
      headline: "Chez nous : annulable en 2 clics.\nPas en 17 emails.",
      subline: "29€/mois. Sans engagement. Satisfait ou remboursé.",
      cta: "Je teste à 20€",
      url: "gomu.fr",
    },
    note: "Exclusif FR — aucun équivalent Grüns. Exploite la faiblesse Grüns « dark pattern cancellation » (Trustpilot 1★).",
  },
  {
    id: 8,
    name: "Halal Natif",
    gomuAngleName: "Halal",
    gomuAngleId: "a-halal",
    funnelStage: "TOF→MOF",
    format: "1:1",
    grunsSourceIds: [],
    exclusiveFR: true,
    imagePrompt:
      "Product advertisement, square format 1:1. Cream background (#FFF9D6). Large bold dark purple headline at top: '90% de la gélatine en France est porcine.' Subheadline in slightly smaller purple text: 'L'étiquette ne dit pas laquelle.' Center: a single large translucent purple 3D gummy bear, photorealistic, sitting proudly on a cream surface. Below the bear, a yellow (#F2E85C) highlighted text block: 'Base pectine. Halal natif. Pas une adaptation — la conception.' At bottom: three small icons in a row (leaf icon 'Vegan', crescent icon 'Halal natif', French flag icon 'Fabriqué en France'). Small 'gomu.fr' at very bottom. Clean, confident, inclusive brand aesthetic.",
    style: "photorealistic product photography, inclusive supplement brand, clean layout",
    copy: {
      headline: "90% de la gélatine en France est porcine.",
      subheadline: "L'étiquette ne dit pas laquelle.",
      badge: "Base pectine. Halal natif. Pas une adaptation — la conception.",
      cta: "gomu.fr",
    },
    note: "Exclusif FR. ⚠️ Revoir l'icône « Fabriqué en France » vu le pivot MiC — à adapter en « Formulé en France » ou retirer.",
  },
  {
    id: 9,
    name: "Le Pixie Dusting",
    gomuAngleName: "#2 Industrie du Saupoudrage",
    gomuAngleId: "a-multi-pots",
    funnelStage: "TOF",
    format: "9:16",
    grunsSourceIds: [3, 5],
    imagePrompt:
      "Educational advertisement, vertical story format 9:16. Deep purple background covering the full frame. Large bold yellow (#F2E85C) serif headline at top: 'Le Pixie Dusting.' Subheadline in cream/white text below: 'L'arnaque que l'industrie espère que tu ne découvriras jamais.' Middle section: a graphic showing a generic supplement label with '60 ingrédients' highlighted, with a magnifying glass revealing tiny dosages (10mg maca, 5mg curcuma) — the numbers are comically small. Below: cream text: '60 ingrédients sur l'étiquette. Aucun dosé pour fonctionner. Ça s'appelle du saupoudrage.' Bottom section: A purple Gomu sachet. Yellow text: '15 actifs. Chaque dosage publié. Vérifie toi-même.' Yellow arrow pointing right (carousel swipe indicator). Small 'gomu.fr'.",
    style: "educational carousel slide, dark background, supplement industry exposé",
    copy: {
      headline: "Le Pixie Dusting.",
      subheadline: "L'arnaque que l'industrie espère que tu ne découvriras jamais.",
      body: "60 ingrédients sur l'étiquette.\nAucun dosé pour fonctionner.\nÇa s'appelle du saupoudrage.",
      closer: "15 actifs. Chaque dosage publié.\nVérifie toi-même.",
      cta: "gomu.fr",
    },
  },
  {
    id: 10,
    name: "Batch Limité",
    gomuAngleName: "#6 Premier Batch",
    funnelStage: "BOF",
    format: "1:1",
    grunsSourceIds: [],
    imagePrompt:
      "Direct response advertisement, square format 1:1. Clean cream background (#FFF9D6) with a thin dark purple border frame. Large bold dark purple serif headline centered at top: 'Premier batch. 5 000 unités. Prix de lancement réel.' Center: Three purple Gomu sachets with yellow bear logos arranged in a fan, with 5-6 scattered translucent purple gummy bears around them. The sachets look premium with a slight sheen. Below the product: large text showing '29€' crossed out with a line, arrow pointing to '20€ le premier mois' in bold purple. Smaller cream/grey text beneath: 'Sans engagement · Annulable en 2 clics · Satisfait ou remboursé'. Large purple rounded CTA button at bottom: 'Je teste à 20€'. Very small italic text: 'Pas de code promo bidon. Juste des maths : premier batch = prix d'acquisition.' Small 'gomu.fr'.",
    style: "direct response ad, premium supplement brand, clean layout with social proof",
    copy: {
      headline: "Premier batch.\n5 000 unités.\nPrix de lancement réel.",
      price_anchor: "29€ → 20€ le premier mois",
      trust_line: "Sans engagement · Annulable en 2 clics · Satisfait ou remboursé",
      cta: "Je teste à 20€",
      micro_copy: "Pas de code promo bidon. Juste des maths : premier batch = prix d'acquisition.",
      url: "gomu.fr",
    },
    note: "Anti-pattern Créa Grüns 14 (fausse urgence « ENDING SOON »). Ici on explique POURQUOI le prix.",
  },
  {
    id: 11,
    name: "Native Ad Éducatif",
    gomuAngleName: "Éducation / Curiosité",
    funnelStage: "TOF",
    format: "1:1",
    grunsSourceIds: [6],
    imagePrompt:
      "Native advertising style, square format 1:1. Deep purple background with a white rectangular 'article card' in the center taking up 70% of the frame. The card has a small purple category tag at top left: 'Nutrition'. Large bold black serif headline on the card: 'L'erreur que font 80% des Français avec leurs compléments alimentaires.' Smaller grey subheadline: 'Et pourquoi votre multivitamine ne change probablement rien.' The card looks like a real news article preview. Below the card on the purple background: a yellow (#F2E85C) arrow pointing right (swipe indicator). No product visible, no branding except subtle 'gomu.fr' in very small text at bottom corner. Editorial, premium feel.",
    style: "native advertising, editorial card, news article preview format",
    copy: {
      category: "Nutrition",
      headline: "L'erreur que font 80% des Français avec leurs compléments alimentaires.",
      subheadline: "Et pourquoi votre multivitamine ne change probablement rien.",
    },
  },
  {
    id: 12,
    name: "Ton Signe Microbiote",
    gomuAngleName: "Santé intestinale / Prébiotiques",
    funnelStage: "TOF",
    format: "1:1",
    grunsSourceIds: [10, 11],
    imagePrompt:
      "Brand awareness advertisement, square format 1:1. Extreme close-up of two translucent dark purple 3D gummy bears, slightly overlapping, filling 60% of the frame. Soft cream/beige blurred background. Bold text overlay in the center with purple highlight boxes behind yellow text: 'TON SIGNE' (first box) 'POUR NOURRIR' (second box) 'TON MICROBIOTE' (third box). The highlight boxes are deep purple rectangles with rounded corners, text is bright yellow (#F2E85C). No other text, no product shot, no CTA — pure brand/awareness. Clean, vibrant, Instagram-native feel.",
    style: "social media native, close-up product photography, bold text overlay",
    copy: {
      text_blocks: ["TON SIGNE", "POUR NOURRIR", "TON MICROBIOTE"],
    },
  },
  {
    id: 13,
    name: "Le Gummy Sur Tapis",
    gomuAngleName: "Format + Simplicité + Lifestyle",
    funnelStage: "TOF",
    format: "1:1",
    grunsSourceIds: [1],
    imagePrompt:
      "Brand advertisement, square format 1:1. A single large translucent dark purple 3D gummy bear in a dynamic running pose on a miniature treadmill. The gummy bear looks energetic and determined. Soft cream/beige background. Benefit callouts arranged around the bear with small arrows pointing to it: 'Inuline de chicorée — fibre prébiotique' (top left), 'Adaptogènes : rhodiola rosea' (top right), '15+ vitamines et minéraux' (bottom left), 'Base pectine — vegan + halal' (bottom right). Bold dark purple headline at top: 'LA NUTRITION COMPLÈTE. SANS L'EFFORT.' Subline at bottom: 'Pas de blender. Pas de gélules. 1 sachet. 30 secondes.' Small 'gomu.fr'. Clean, playful, premium.",
    style: "photorealistic 3D product character, playful supplement ad, benefit callouts",
    copy: {
      headline: "LA NUTRITION COMPLÈTE. SANS L'EFFORT.",
      callouts: [
        "Inuline de chicorée — fibre prébiotique",
        "Adaptogènes : rhodiola rosea",
        "15+ vitamines et minéraux",
        "Base pectine — vegan + halal",
      ],
      subline: "Pas de blender. Pas de gélules. 1 sachet. 30 secondes.",
      cta: "gomu.fr",
    },
  },
  {
    id: 14,
    name: "Le Meme Placard",
    gomuAngleName: "#1 Placard Silencieux (version meme)",
    gomuAngleId: "a-placard",
    funnelStage: "TOF",
    format: "9:16",
    grunsSourceIds: [7],
    imagePrompt:
      "Meme-style advertisement, vertical story format 9:16. White background, simple cartoon/illustration style. Bold dark purple caps text at top: 'LES FRANÇAIS ET LEURS COMPLÉMENTS :' Two-panel meme below. LEFT panel: a simple sad stick figure looking at an open cabinet with 5 supplement bottles, text above: 'ACHETER 5 POTS DIFFÉRENTS ET EN PRENDRE AUCUN'. The figure looks defeated. RIGHT panel: a confident stick figure wearing sunglasses holding a single purple sachet with a yellow bear on it, text above: 'TOUT AVOIR DANS 1 SACHET ET LE PRENDRE CHAQUE JOUR'. The figure looks cool and relaxed. Small disclaimer text at very bottom. Intentionally low-production, organic meme aesthetic.",
    style: "meme format, stick figure illustration, organic social media content",
    copy: {
      headline: "LES FRANÇAIS ET LEURS COMPLÉMENTS :",
      left_panel: "ACHETER 5 POTS DIFFÉRENTS ET EN PRENDRE AUCUN",
      right_panel: "TOUT AVOIR DANS 1 SACHET ET LE PRENDRE CHAQUE JOUR",
    },
  },
  {
    id: 15,
    name: "Carousel Zinc (éducatif)",
    gomuAngleName: "Éducation — Formes biodisponibles",
    funnelStage: "TOF",
    format: "1:1",
    grunsSourceIds: [5],
    imagePrompt:
      "Educational carousel slide, square format 1:1. Deep purple background covering full frame. Large elegant serif headline in yellow (#F2E85C): 'Ton zinc ne sert probablement à rien.' Smaller cream/white body text below: 'Le zinc oxyde — le plus utilisé dans les compléments — a un taux d'absorption de 15%. Le zinc bisglycinate : 45%. Même ingrédient. 3x plus efficace. L'étiquette ne fait pas la différence. Ton corps, si.' Yellow arrow pointing right at bottom (carousel swipe indicator). No product, no branding visible except very subtle 'gomu.fr' in bottom corner. Pure educational content, authoritative tone.",
    style: "educational carousel slide, dark background, serif typography, no product",
    copy: {
      headline: "Ton zinc ne sert probablement à rien.",
      body: "Le zinc oxyde — le plus utilisé dans les compléments — a un taux d'absorption de 15%.\n\nLe zinc bisglycinate : 45%.\n\nMême ingrédient. 3x plus efficace.\nL'étiquette ne fait pas la différence.\nTon corps, si.",
    },
  },
];

// =============================================================================
// AGGREGATES & HELPERS
// =============================================================================

export const funnelDistributionGruns: { stage: FunnelStage; count: number; pct: number }[] = [
  { stage: "TOF", count: 7, pct: 41 },
  { stage: "MOF", count: 6, pct: 35 },
  { stage: "TOF→MOF", count: 2, pct: 12 },
  { stage: "MOF→BOF", count: 1, pct: 6 },
  { stage: "BOF", count: 1, pct: 6 },
];

export const funnelDistributionGomu: { stage: FunnelStage; count: number; pct: number }[] = [
  { stage: "TOF", count: 7, pct: 47 },
  { stage: "MOF", count: 5, pct: 33 },
  { stage: "MOF→BOF", count: 2, pct: 13 },
  { stage: "BOF", count: 1, pct: 7 },
  { stage: "TOF→MOF", count: 1, pct: 7 },
];

export const creativeTakeaways: string[] = [
  "Le gummy bear 3D est utilisé dans 53% des créas Grüns — mascotte non-officielle. Gomu doit adopter le même pattern avec l'ours violet translucide comme personnage récurrent.",
  "Grüns alloue 41% de son mix créatif en TOF pur (éducation, humour, trend-jacking) — c'est cohérent avec une marque en phase de scaling agressif. Gomu vise le même ratio.",
  "Le storytelling persona-specific (créa 16 « Dear Perimenopause ») est l'arme la plus puissante de Grüns, utilisée une seule fois. Gomu peut multiplier : lettre par avatar (maman, sceptique, halal, burn-out).",
  "2 angles FR exclusifs dont Grüns n'a aucun équivalent : Halal Natif + Abonnement Sans Piège. Ce sont les deux moats structurels à matraquer.",
  "À éviter : le pattern « ENDING SOON / 52% OFF » (créa 14 Grüns) — contraire à la charte brand Gomu « pas de code promo bidon ». L'urgence doit être réelle (batch limité, supply).",
  "Le format native ad éditorial (créas 5 et 6 Grüns) a le meilleur CTR organique — 2 prompts Gomu construits sur ce pattern (11 et 15).",
];

export const funnelColor: Record<FunnelStage, "info" | "accent" | "warn" | "success" | "danger"> = {
  TOF: "info",
  "TOF→MOF": "accent",
  MOF: "accent",
  "MOF→BOF": "warn",
  BOF: "danger",
};
