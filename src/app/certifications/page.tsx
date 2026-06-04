import type { Metadata } from "next";
import {
  ShieldCheck,
  Leaf,
  FlaskConical,
  Factory,
  Pill,
  Ban,
  Check,
  ArrowRight,
} from "lucide-react";
import PageShell from "@/components/v2/PageShell";
import PageHero from "@/components/v2/PageHero";
import Eyebrow from "@/components/v2/Eyebrow";
import Btn from "@/components/v2/Btn";

export const metadata: Metadata = {
  title: "Certifications & qualité — Gomu",
  description:
    "Halal et vegan par construction, tests Eurofins lot par lot, fabrication aux normes UE. Chaque claim de Gomu est vérifiable — la preuve, pas la promesse. Certains labels officiels sont en cours d'obtention avant le lancement Q2 2026.",
  openGraph: {
    title: "Certifications & qualité — Gomu",
    description:
      "La preuve, pas la promesse. Halal et vegan par construction, tests Eurofins publiés par numéro de lot, fabrication aux normes européennes.",
    locale: "fr_FR",
    type: "website",
  },
};

type Status = "Par construction" | "Dès le lancement" | "En cours";

const STATUS_STYLES: Record<Status, string> = {
  "Par construction":
    "bg-gomu-chartreuse/30 text-gomu-purple-deep border-gomu-purple-deep/20",
  "Dès le lancement":
    "bg-gomu-yellow/35 text-gomu-purple-deep border-gomu-purple-deep/20",
  "En cours":
    "bg-gomu-purple-deep/8 text-gomu-purple-deep/75 border-gomu-purple-deep/20",
};

const CERTS: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  body: string;
  status: Status;
}[] = [
  {
    icon: ShieldCheck,
    title: "Halal",
    body: "La base est en pectine de fruit, pas en gélatine. Le produit est halal par construction. On travaille avec un organisme certificateur halal français pour apposer le logo officiel sur le packaging.",
    status: "En cours",
  },
  {
    icon: Leaf,
    title: "Vegan",
    body: "Zéro gélatine, zéro ingrédient d'origine animale. La gélification vient de la pectine de fruit. Rien à compenser, rien à certifier en plus — c'est vegan par construction.",
    status: "Par construction",
  },
  {
    icon: FlaskConical,
    title: "Tests Eurofins, lot par lot",
    body: "Chaque lot est analysé par Eurofins, laboratoire indépendant. Dosages réels, contaminants, pureté. Les rapports sont publiés en ligne et consultables par numéro de lot.",
    status: "Dès le lancement",
  },
  {
    icon: Factory,
    title: "Fabrication dans l'UE",
    body: "Produit dans un atelier européen soumis aux normes sanitaires de l'Union. On ne te promet pas un certificat nominatif tape-à-l'œil : on te donne les rapports d'analyse, qui valent mieux qu'un logo.",
    status: "Dès le lancement",
  },
  {
    icon: Pill,
    title: "Dosages cliniques, formes biodisponibles",
    body: "Pas de poudre décorative. Zinc bisglycinate, folate sous forme L-5-MTHF, B12 méthylcobalamine — des formes que ton corps absorbe vraiment, à des dosages qui ont un sens.",
    status: "Par construction",
  },
  {
    icon: Ban,
    title: "Sans gélatine, sans colorants artificiels",
    body: "Pas de gélatine, pas de colorants azoïques. La couleur vient de concentrés de fruits et de légumes. La formule exacte sera publiée au lancement, étiquette complète à l'appui.",
    status: "Par construction",
  },
];

const TESTS = [
  "Dosages réels vérifiés pour chaque vitamine et minéral",
  "99+ pesticides recherchés",
  "4 métaux lourds : plomb, cadmium, mercure, arsenic",
  "9 contaminants microbiens",
  "Publication systématique par numéro de lot, sans filtre ni tri",
];

const HONESTY = [
  "Tant que la première production n'est pas sortie, on ne peut pas te montrer de vrai rapport ni de logo halal officiel — et on ne va pas en fabriquer un faux.",
  "La certification halal officielle et les premiers rapports Eurofins seront publiés dès la première production, prévue au Q2 2026.",
  "D'ici là, ce qui est halal et vegan l'est par construction : c'est dans la recette, pas dans un tampon.",
];

export default function CertificationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Certifications & contrôles qualité"
        title={
          <>
            La <span className="hl-on-dark">preuve</span>,
            <br />
            pas la promesse.
          </>
        }
        subtitle="Chaque claim qu'on fait est vérifiable. On préfère te donner des rapports d'analyse plutôt que des superlatifs — et on te dit honnêtement ce qui est déjà acquis et ce qui arrive au lancement."
      >
        <Btn href="/#offre" onDark>
          Rejoindre la liste <ArrowRight size={18} />
        </Btn>
      </PageHero>

      {/* Grille de certifications */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="reveal max-w-[860px]">
            <Eyebrow>Nos standards</Eyebrow>
            <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
              Ce qu&apos;on <span className="hl">tient</span>, noir sur blanc.
            </h2>
            <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[640px]">
              Chaque case ci-dessous porte un statut honnête. &laquo;&nbsp;Par
              construction&nbsp;&raquo; veut dire que c&apos;est inscrit dans la
              recette. &laquo;&nbsp;En cours&nbsp;&raquo; veut dire qu&apos;on y
              travaille avant le lancement.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {CERTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="reveal card-pop bg-gomu-paper border border-gomu-purple-deep/10 p-7 md:p-8 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-12 h-12 rounded-full bg-gomu-purple-deep text-gomu-cream flex items-center justify-center shrink-0">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <span
                      className={`text-[11px] uppercase tracking-cap font-medium px-3 py-1.5 rounded-full border ${STATUS_STYLES[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] md:text-[24px] leading-[1.15] text-gomu-purple-deep mt-5">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] md:text-[15.5px] leading-[1.6] text-gomu-ink/80">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ce qu'on teste, lot par lot */}
      <section className="bg-gomu-surface-dark text-gomu-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-12 md:gap-16 items-center">
            <div className="reveal">
              <Eyebrow tone="light">Tests Eurofins</Eyebrow>
              <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-cream">
                Ce qu&apos;on teste,
                <br />
                <span className="hl-on-dark">lot par lot</span>.
              </h2>
              <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-cream/80 max-w-[520px]">
                À chaque production, un laboratoire indépendant passe le lot au
                crible. On ne publie pas un résumé arrangé : on publie le
                rapport.
              </p>
            </div>

            <div className="reveal">
              <ul className="space-y-3.5">
                {TESTS.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[16px] md:text-[17px] leading-[1.5] text-gomu-cream/95"
                  >
                    <span className="mt-0.5 rounded-full bg-gomu-yellow text-gomu-purple-deep w-6 h-6 flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <figure className="mt-10 pl-6 border-l-[3px] border-gomu-yellow">
                <blockquote className="font-display italic text-[24px] md:text-[30px] leading-[1.2] text-gomu-cream tracking-display">
                  &laquo;&nbsp;On ne te demande pas de nous croire.
                  <br />
                  On te demande de{" "}
                  <span className="hl-on-dark">vérifier</span>.&nbsp;&raquo;
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc de transparence honnête */}
      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="reveal card-pop-yellow bg-gomu-paper border border-gomu-purple-deep/10 p-8 md:p-12">
            <Eyebrow>En toute transparence</Eyebrow>
            <h2 className="font-display font-bold tracking-display mt-4 text-[30px] md:text-[44px] leading-[1.05] text-gomu-purple-deep">
              Avant le premier lot,
              <br />
              voilà où on en est.
            </h2>
            <ul className="mt-8 space-y-5">
              {HONESTY.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[16px] md:text-[17px] leading-[1.6] text-gomu-ink/85"
                >
                  <span className="mt-0.5 rounded-full bg-gomu-purple-deep text-gomu-cream w-6 h-6 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-gomu-surface-dark text-gomu-cream py-20 md:py-32">
        <div className="reveal max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Eyebrow tone="light" className="justify-center">
            Lancement Q2 2026
          </Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-cream">
            Sois là quand <span className="hl-on-dark">la preuve</span> arrive.
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-cream/80 max-w-[560px] mx-auto">
            Rejoins la liste d&apos;attente : tu seras prévenu dès la
            publication des premiers rapports Eurofins et du logo halal
            officiel.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Btn href="/#offre" onDark>
              Rejoindre la liste <ArrowRight size={18} />
            </Btn>
            <Btn href="/#faq" variant="secondary" onDark>
              Lire la FAQ
            </Btn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
