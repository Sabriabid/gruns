import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Eye,
  HeartHandshake,
  FlaskConical,
  Leaf,
  TrendingUp,
  PackageCheck,
  PenLine,
  MessageCircle,
} from "lucide-react";
import PageShell from "@/components/v2/PageShell";
import PageHero from "@/components/v2/PageHero";
import Btn from "@/components/v2/Btn";
import Eyebrow from "@/components/v2/Eyebrow";

export const metadata: Metadata = {
  title: "Carrières — Gomu",
  description:
    "Rejoindre Gomu : on construit une marque de nutrition honnête, en pré-lancement. Petite équipe, mission claire, candidatures spontanées bienvenues.",
  openGraph: {
    title: "Carrières — Gomu",
    description:
      "Rejoindre Gomu : on construit une marque de nutrition honnête, en pré-lancement. Petite équipe, candidatures spontanées bienvenues.",
    locale: "fr_FR",
    type: "website",
  },
};

const MISSION = [
  "Gomu, c'est un sachet de gummies chaque matin et une promesse simple : ce qui est sur l'étiquette est dans le produit. Pas de chiffres gonflés, pas de buzzwords, pas de fausses certifications.",
  "On est une toute petite équipe, encore en pré-lancement (prévu au Q2 2026). On préfère le dire franchement : il y a tout à construire. Si l'idée d'une marque de nutrition qui parie sur la transparence plutôt que sur le marketing te parle, on devrait se parler.",
];

const VALUES: {
  icon: typeof Eye;
  title: string;
  desc: string;
}[] = [
  {
    icon: Eye,
    title: "Transparence radicale",
    desc: "Chaque lot analysé par Eurofins, rapports publiés par numéro de lot. On ne demande pas qu'on nous croie — on demande qu'on vérifie. En interne, c'est pareil : on dit les choses.",
  },
  {
    icon: HeartHandshake,
    title: "Honnêteté avant le marketing",
    desc: "On ne survend rien. Pas de miracle en 3 jours, pas de chiffres inventés. Si une chose n'existe pas encore, on dit qu'elle n'existe pas encore. C'est aussi vrai dans nos offres d'emploi.",
  },
  {
    icon: FlaskConical,
    title: "Qualité clinique",
    desc: "Formes biodisponibles, dosages assumés, formule lisible. On préfère un produit qu'on prend tous les jours à un produit parfait sur le papier qu'on abandonne en 15 jours.",
  },
  {
    icon: Leaf,
    title: "Halal & vegan natif",
    desc: "Base pectine de fruit, pas de gélatine. Halal et vegan par construction, pas par certification rajoutée après coup. On construit comme ça depuis le premier jour.",
  },
];

const CULTURE = [
  "On publie nos tests, même quand c'est inconfortable. La transparence n'est pas une campagne, c'est le produit.",
  "On dit la vérité sur les dosages, les délais et ce qu'on sait faire — en interne comme dehors.",
  "On construit lentement et bien. Pas de croissance à tout prix avant d'avoir un produit dont on est fiers.",
  "Remote-friendly. On juge ce que tu livres, pas le nombre d'heures passées en visio.",
  "Peu de réunions, beaucoup d'écrit. Une décision qui se justifie par écrit est une décision qui tient.",
  "On respecte le client comme on respecte un proche : annulation en 2 clics, jamais de petites lignes piégées.",
];

const PROFILS: {
  icon: typeof TrendingUp;
  title: string;
  desc: string;
}[] = [
  {
    icon: TrendingUp,
    title: "Growth & acquisition",
    desc: "Faire connaître une marque honnête sans tomber dans les promesses faciles. Bientôt.",
  },
  {
    icon: PackageCheck,
    title: "Qualité & supply",
    desc: "Suivre les lots, les analyses Eurofins et la chaîne d'approvisionnement. Au lancement.",
  },
  {
    icon: PenLine,
    title: "Contenu & social",
    desc: "Raconter le produit, la science et les coulisses sans bullshit. Au lancement.",
  },
  {
    icon: MessageCircle,
    title: "Service client",
    desc: "Répondre vite, avec honnêteté, et défendre l'expérience membre. Au lancement.",
  },
];

const MAILTO =
  "mailto:contact@gomudaily.com?subject=Candidature%20spontan%C3%A9e";

export default function Carrieres() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Carrières · bientôt"
        title={
          <>
            Construis la marque de nutrition la plus{" "}
            <span className="hl-on-dark">honnête</span> de France.
          </>
        }
        subtitle="Petite équipe, mission claire, encore en pré-lancement (Q2 2026). On n'a pas de poste publié pour l'instant — mais on lit chaque candidature spontanée."
      >
        <Btn href={MAILTO} onDark>
          Candidature spontanée <ArrowRight size={18} />
        </Btn>
      </PageHero>

      {/* Pourquoi Gomu */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="reveal max-w-[860px]">
            <Eyebrow>Pourquoi Gomu</Eyebrow>
            <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
              Une mission simple, <span className="hl">tenue</span> au quotidien.
            </h2>
            <div className="mt-7 space-y-5 max-w-[680px]">
              {MISSION.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-20 reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="card-pop bg-gomu-paper p-7 md:p-8 border border-gomu-purple-deep/10"
                >
                  <span className="inline-flex w-12 h-12 rounded-full bg-gomu-purple-deep text-gomu-cream items-center justify-center">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[21px] md:text-[23px] leading-[1.15] text-gomu-purple-deep mt-5">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-gomu-ink/75">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comment on bosse */}
      <section className="bg-gomu-cream py-20 md:py-32 border-t border-gomu-purple-deep/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start">
            <div className="reveal">
              <Eyebrow>Comment on bosse</Eyebrow>
              <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[52px] lg:text-[60px] leading-[1] text-gomu-purple-deep">
                Nos <span className="hl">principes</span>.
              </h2>
              <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[420px]">
                Pas de charte affichée pour faire joli. Juste la façon dont on
                prend nos décisions, tous les jours.
              </p>
            </div>

            <div className="reveal">
              <ul className="space-y-4">
                {CULTURE.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 text-[16px] md:text-[17px] leading-[1.55] text-gomu-ink/90"
                  >
                    <span className="mt-0.5 rounded-full bg-gomu-purple-deep text-gomu-cream w-7 h-7 flex items-center justify-center shrink-0">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pas encore de poste ouvert */}
      <section className="bg-gomu-surface-dark text-gomu-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="reveal max-w-[820px]">
            <Eyebrow tone="light">On joue franc-jeu</Eyebrow>
            <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-cream">
              Pas encore de poste{" "}
              <span className="hl-on-dark">ouvert</span>.
            </h2>
            <p className="mt-7 text-[17px] md:text-[19px] leading-[1.6] text-gomu-cream/80 max-w-[640px]">
              On est en pré-lancement. Pour l&apos;instant, on n&apos;a aucun
              poste publié, et on préfère te le dire plutôt que d&apos;ouvrir de
              fausses annonces. Les candidatures spontanées, elles, sont les
              bienvenues — on les garde et on revient vers toi quand un besoin
              se précise.
            </p>
            <p className="mt-5 text-[15px] uppercase tracking-cap text-gomu-cream/60 font-medium">
              Les profils qu&apos;on cherchera au lancement
            </p>
          </div>

          <div className="mt-10 reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PROFILS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-[24px] bg-gomu-cream/[0.04] border border-gomu-cream/15 p-7"
                >
                  <span className="inline-flex w-11 h-11 rounded-full bg-gomu-yellow text-gomu-purple-deep items-center justify-center">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[20px] md:text-[22px] leading-[1.15] text-gomu-cream mt-5">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.55] text-gomu-cream/70">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 reveal">
            <Btn href={MAILTO} onDark>
              Envoyer une candidature spontanée <ArrowRight size={18} />
            </Btn>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center reveal">
          <Eyebrow className="justify-center">Avant de candidater</Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
            Découvre d&apos;abord <span className="hl">le produit</span>.
          </h2>
          <p className="mt-7 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[600px] mx-auto">
            La meilleure façon de comprendre comment on bosse, c&apos;est de
            regarder ce qu&apos;on construit. Le produit n&apos;est pas encore en
            vente — rejoins la liste pour suivre le lancement de près.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Btn href="/#offre">
              Rejoindre la liste <ArrowRight size={18} />
            </Btn>
            <Btn href={MAILTO} variant="secondary">
              Candidature spontanée
            </Btn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
