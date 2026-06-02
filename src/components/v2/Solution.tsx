import Image from "next/image";
import { Zap, Shield, Droplet, Moon } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { renderRich, type RichText } from "@/components/lp-v2/richText";
import type { BenefitKey } from "@/lib/lp-angles";

// Icons are JSX (non-serializable) so they live here, keyed by BenefitKey.
// The per-angle config only supplies `order: BenefitKey[]` (plain data).
const BENEFIT_REGISTRY: Record<
  BenefitKey,
  { icon: React.ReactNode; title: string; body: string }
> = {
  energie: {
    icon: <Zap size={24} />,
    title: "Énergie durable",
    body: "Complexe B complet (méthylcobalamine, L-5-MTHF, B6 P5P), vitamine C acérola, KSM-66 Ashwagandha.",
  },
  immunite: {
    icon: <Shield size={24} />,
    title: "Immunité",
    body: "Vitamine D3, zinc bisglycinate (absorbé 3× mieux que l'oxyde), sélénométhionine.",
  },
  digestion: {
    icon: <Droplet size={24} />,
    title: "Digestion",
    body: "Fibres prébiotiques (inuline de chicorée), base pectine de fruit.",
  },
  serenite: {
    icon: <Moon size={24} />,
    title: "Sérénité & récupération",
    body: "Rhodiola rosea, magnésium, B6 active (P5P).",
  },
};

const DEFAULT_ORDER: BenefitKey[] = ["energie", "immunite", "digestion", "serenite"];

interface SolutionProps {
  eyebrow?: string;
  headline?: RichText;
  intro?: RichText;
  order?: BenefitKey[];
}

export default function Solution({
  eyebrow = "Le protocole tout-en-un",
  headline,
  intro,
  order = DEFAULT_ORDER,
}: SolutionProps = {}) {
  const cards = order.map((k) => BENEFIT_REGISTRY[k]);

  return (
    <section
      id="produit"
      className="relative bg-gomu-purple-deep text-gomu-cream py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="reveal max-w-[1100px]">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h2 className="font-display tracking-display mt-4 text-[40px] md:text-[72px] lg:text-[88px] leading-[0.98]">
            {headline ? (
              renderRich(headline, { onDark: true })
            ) : (
              <>
                Un sachet. Chaque matin. 30 secondes.
                <br />
                <span className="italic">
                  <span className="hl-on-dark">C&apos;est tout.</span>
                </span>
              </>
            )}
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-[1.6] text-gomu-cream/85 max-w-[720px]">
            {intro ? (
              renderRich(intro, { onDark: true })
            ) : (
              <>
                Tout ce que tu achètes aujourd&apos;hui en 5 pots — dans un seul sachet. Dosages
                cliniques. Formes biodisponibles. Tests Eurofins par lot.
              </>
            )}
          </p>
        </div>

        <div className="reveal mt-12 md:mt-16 relative rounded-[32px] overflow-hidden border border-gomu-purple-3/40 aspect-[16/9] md:aspect-[21/9] max-w-[1100px]">
          <Image
            src="/images/product-hero.jpeg"
            alt="Pochette Gomu et sachets individuels"
            fill
            sizes="(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 18%" }}
          />
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((b, i) => (
            <div
              key={i}
              className="reveal rounded-3xl bg-gomu-purple-1/20 border border-gomu-purple-3/40 p-7 md:p-9 hover:bg-gomu-purple-1/25 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-full bg-gomu-yellow text-gomu-purple-deep w-12 h-12 flex items-center justify-center">
                  {b.icon}
                </span>
                <h3 className="font-display text-[24px] md:text-[28px] leading-tight">{b.title}</h3>
              </div>
              <p className="mt-5 text-[15px] leading-[1.6] text-gomu-cream/85">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
