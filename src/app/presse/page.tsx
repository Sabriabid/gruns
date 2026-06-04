import type { Metadata } from "next";
import { ArrowRight, Mail, FileText, Palette, ImageIcon, Shapes } from "lucide-react";
import PageShell from "@/components/v2/PageShell";
import PageHero from "@/components/v2/PageHero";
import Btn from "@/components/v2/Btn";
import Eyebrow from "@/components/v2/Eyebrow";

export const metadata: Metadata = {
  title: "Presse — Gomu",
  description:
    "Espace presse Gomu : fiche d'identité, histoire de la marque et kit média sur demande. Tout ce qu'il faut pour parler de nous, honnêtement.",
  openGraph: {
    title: "Presse — Gomu",
    description:
      "Espace presse Gomu : fiche d'identité, histoire de la marque et kit média sur demande.",
    locale: "fr_FR",
    type: "website",
  },
};

const MAILTO_PRESSE =
  "mailto:contact@gomudaily.com?subject=Demande%20presse";
const MAILTO_KIT =
  "mailto:contact@gomudaily.com?subject=Demande%20kit%20presse";

const HERO = {
  subtitle:
    "Tout ce qu'il faut pour parler de nous, sans rien inventer. Voici la fiche d'identité de Gomu, notre histoire et de quoi écrire juste. Une question, une interview, un visuel ? Écris-nous.",
};

// Fiche d'identité — uniquement des faits établis dans le brief.
const EN_BREF: { k: string; v: string }[] = [
  { k: "Catégorie", v: "Compléments alimentaires — gummies de nutrition quotidienne" },
  { k: "Lancement", v: "Prévu au deuxième trimestre 2026 (Q2 2026)" },
  {
    k: "Format",
    v: "1 sachet chaque matin — 8 gummies à base de pectine, 15 à 20 actifs",
  },
  {
    k: "Composition",
    v: "15 à 20 vitamines & minéraux à dosages cliniques, sous formes biodisponibles",
  },
  {
    k: "Prix",
    v: "Abonnement à 29 €/mois, annulable en deux clics",
  },
  {
    k: "Particularités",
    v: "Halal & vegan par construction (base pectine de fruit, sans gélatine) — chaque lot analysé par Eurofins",
  },
  { k: "Marché", v: "France" },
  {
    k: "Statut",
    v: "Pré-lancement — inscriptions ouvertes sur la liste d'attente",
  },
];

// Récit de marque honnête — fondateurs gardés génériques.
const HISTOIRE: string[] = [
  "Le marché du complément alimentaire est l'un des plus opaques qui soit. Des étiquettes floues, des dosages « propriétaires » qu'on ne peut pas vérifier, des promesses qui dépassent largement ce que la science autorise. On pouvait difficilement faire confiance — alors on a voulu construire l'inverse.",
  "Gomu est né d'une idée simple, presque obstinée : et si une marque de nutrition publiait tout ? Pas un argument marketing, mais la règle de base. C'est pour ça que chaque lot est analysé par Eurofins et que les résultats sont publiés en ligne, accessibles par numéro de lot. Tu n'as pas à nous croire : tu peux vérifier.",
  "Le reste découle de la même exigence. Une base pectine de fruit plutôt que de la gélatine, ce qui rend le produit halal et vegan par construction. Des formes biodisponibles à dosages cliniques plutôt que des poudres décoratives. Un abonnement clair, annulable en deux clics, sans piège.",
  "Nous sommes une jeune équipe fondatrice, encore en pré-lancement. Nous n'avons pas encore de chiffres de vente à brandir, ni de prix à exhiber. Ce que nous avons, c'est une conviction et une méthode : la transparence radicale dans un marché qui en manque cruellement. Lancement prévu au deuxième trimestre 2026.",
];

// Contenu du kit média — disponible sur demande, pas de liens inventés.
const KIT: { icon: typeof FileText; title: string; desc: string }[] = [
  {
    icon: ImageIcon,
    title: "Logo (PNG & SVG)",
    desc: "Le wordmark Gomu en versions claire et foncée, vectoriel et bitmap haute résolution.",
  },
  {
    icon: Palette,
    title: "Palette de couleurs",
    desc: "Les codes de la marque — violet profond, crème, jaune — avec les usages recommandés.",
  },
  {
    icon: Shapes,
    title: "Visuels produit",
    desc: "Rendus du sachet et des gummies, à utiliser en édito comme en illustration.",
  },
  {
    icon: FileText,
    title: "Fiche presse (PDF)",
    desc: "Le récapitulatif factuel : catégorie, format, composition, prix, particularités, dates.",
  },
];

const KIT_INTRO =
  "Notre kit média est disponible sur demande. Écris-nous et nous t'envoyons l'ensemble par e-mail, en haute définition.";

const PRESSE_OUTRO =
  "Pas encore de communiqué publié, pas encore de couverture presse à présenter — nous sommes en pré-lancement, et nous préférons te le dire. Pour une interview, une demande de visuels ou une question sur la marque, l'équipe fondatrice te répond directement.";

export default function PressePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Espace presse"
        title={
          <>
            Gomu en <span className="hl-on-dark">deux minutes</span>.
          </>
        }
        subtitle={HERO.subtitle}
      >
        <Btn href={MAILTO_PRESSE} onDark>
          Contact presse <ArrowRight size={18} />
        </Btn>
      </PageHero>

      {/* 1. En bref — fiche d'identité */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="reveal max-w-7xl mx-auto px-4 md:px-8">
          <Eyebrow>En bref</Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
            La fiche <span className="hl">d&apos;identité</span>.
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[640px]">
            Les faits, rien que les faits. À jour au pré-lancement.
          </p>

          <dl className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gomu-purple-deep/10 rounded-[28px] overflow-hidden border border-gomu-purple-deep/10">
            {EN_BREF.map((row) => (
              <div key={row.k} className="bg-gomu-paper p-6 md:p-7">
                <dt className="text-[11px] uppercase tracking-cap text-gomu-purple-deep/55 font-medium">
                  {row.k}
                </dt>
                <dd className="mt-2 text-[16px] md:text-[17px] leading-[1.5] text-gomu-ink/90">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. L'histoire */}
      <section className="bg-gomu-surface-dark text-gomu-cream py-20 md:py-32">
        <div className="reveal max-w-4xl mx-auto px-4 md:px-8">
          <Eyebrow tone="light">L&apos;histoire</Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-cream">
            Pourquoi <span className="hl-on-dark">Gomu</span> existe.
          </h2>
          <div className="mt-8 md:mt-10 space-y-6">
            {HISTOIRE.map((p, i) => (
              <p
                key={i}
                className="text-[17px] md:text-[19px] leading-[1.65] text-gomu-cream/80"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Kit média */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="reveal max-w-7xl mx-auto px-4 md:px-8">
          <Eyebrow>Kit média</Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
            De quoi écrire <span className="hl">juste</span>.
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[640px]">
            {KIT_INTRO}
          </p>

          <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {KIT.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-pop bg-gomu-paper border border-gomu-purple-deep/10 p-6 md:p-7"
                >
                  <span className="inline-flex w-11 h-11 rounded-full bg-gomu-purple-deep text-gomu-cream items-center justify-center">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display font-bold text-[19px] md:text-[20px] leading-[1.1] text-gomu-purple-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-gomu-ink/75">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Btn href={MAILTO_KIT}>
              Demander le kit média <ArrowRight size={18} />
            </Btn>
          </div>
        </div>
      </section>

      {/* 4. Bientôt dans la presse — placeholder honnête */}
      <section className="bg-gomu-surface-dark text-gomu-cream py-20 md:py-28">
        <div className="reveal max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Eyebrow tone="light" className="justify-center">
            Bientôt dans la presse
          </Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[32px] md:text-[48px] lg:text-[56px] leading-[1.02] text-gomu-cream max-w-[820px] mx-auto">
            On garde la place <span className="hl-on-dark">au chaud</span>.
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-cream/75 max-w-[560px] mx-auto">
            Aucune couverture pour le moment — on est en pré-lancement, et on
            préfère un mur vide à un mur de fausses citations.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-28 md:w-32 rounded-md bg-gomu-cream/8 border border-gomu-cream/10 flex items-center justify-center text-[9px] uppercase tracking-cap text-gomu-cream/35"
              >
                [LOGO]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact presse + CTA */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="reveal max-w-4xl mx-auto px-4 md:px-8">
          <div className="card-pop-yellow p-8 md:p-12 lg:p-14">
            <Eyebrow>Contact presse</Eyebrow>
            <h2 className="font-display font-bold tracking-display mt-4 text-[32px] md:text-[48px] lg:text-[52px] leading-[1.02] text-gomu-purple-deep">
              On te répond <span className="hl">vite</span>.
            </h2>
            <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[620px]">
              {PRESSE_OUTRO}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <Btn href={MAILTO_PRESSE}>
                <Mail size={18} /> Écrire à la presse
              </Btn>
              <a
                href={MAILTO_PRESSE}
                className="text-[15px] font-medium text-gomu-purple-deep underline underline-offset-4 decoration-gomu-purple-deep/30 hover:decoration-gomu-purple-deep"
              >
                contact@gomudaily.com
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-gomu-purple-deep/15">
              <p className="text-[15px] leading-[1.6] text-gomu-ink/70 max-w-[560px]">
                Tu veux suivre le lancement de l&apos;intérieur ? Rejoins la
                liste d&apos;attente — on y partage les coulisses avant tout le
                monde.
              </p>
              <div className="mt-5">
                <Btn href="/#offre" variant="secondary">
                  Rejoindre la liste <ArrowRight size={18} />
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
