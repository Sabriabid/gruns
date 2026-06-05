"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import Btn from "./Btn";
import Sticker from "./Sticker";
import StarRating from "@/components/ui/StarRating";
import { renderRich, type RichText } from "@/components/lp-v2/richText";

// Homepage defaults — kept here so src/app/page.tsx renders with zero props.
const DEFAULT_EYEBROW = ["Testé par Eurofins", "Halal & Vegan"];
const DEFAULT_H1: RichText = [
  ["Un sachet."],
  [{ t: "Toute", hl: true, italic: true }, { t: " ta nutrition.", italic: true }],
];

interface HeroProps {
  /** Trust chips joined by "·". */
  eyebrow?: string[];
  h1?: RichText;
  /** When provided, renders a single clean paragraph (LP pages). When omitted,
   *  the homepage's two-part subtitle (with its italic sub-line) is used. */
  subtitle?: RichText;
  /** Primary CTA target. Homepage → the control LP; LP pages → "#offre". */
  ctaHref?: string;
}

// gruns hero DA: one centered column (eyebrow → giant headline → subtitle → big
// pill CTA → star rating → trust checks), then a full-bleed lifestyle photo
// flush to the section's bottom edge, with the offer stickers straddling it.
export default function Hero({
  eyebrow = DEFAULT_EYEBROW,
  h1 = DEFAULT_H1,
  subtitle,
  ctaHref = "/lp/un-sachet?source=homepage",
}: HeroProps = {}) {
  return (
    <section className="relative bg-gradient-to-b from-gomu-surface-dark to-gomu-purple-1 text-gomu-cream pt-[132px] md:pt-[156px] pb-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>

      <div className="absolute top-[130px] left-[4%] hidden lg:block pointer-events-none sticker-float">
        <svg
          viewBox="0 0 80 80"
          className="w-14 h-14 text-gomu-chartreuse"
          fill="currentColor"
          aria-hidden
        >
          <path d="M40 0 L46 34 L80 40 L46 46 L40 80 L34 46 L0 40 L34 34 Z" />
        </svg>
      </div>
      <div className="absolute top-[200px] right-[5%] hidden lg:block pointer-events-none sticker-float [animation-delay:1.2s]">
        <svg
          viewBox="0 0 80 80"
          className="w-10 h-10 text-gomu-yellow/80"
          fill="currentColor"
          aria-hidden
        >
          <path d="M40 0 L46 34 L80 40 L46 46 L40 80 L34 46 L0 40 L34 34 Z" />
        </svg>
      </div>

      {/* CENTERED copy column */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 relative text-center reveal">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] md:text-[13px] uppercase tracking-cap font-medium text-gomu-yellow">
          {eyebrow.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-x-3">
              {i > 0 && <span className="text-gomu-yellow/50">·</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>

        <h1 className="font-display font-bold tracking-display mt-5 md:mt-6 text-[42px] sm:text-[62px] md:text-[82px] lg:text-[100px] leading-[0.9]">
          {renderRich(h1, { onDark: true })}
        </h1>

        {subtitle ? (
          <p className="mt-6 text-[17px] md:text-[20px] leading-[1.55] text-gomu-cream/85 max-w-[600px] mx-auto">
            {renderRich(subtitle, { onDark: true })}
          </p>
        ) : (
          <p className="mt-6 text-[17px] md:text-[20px] leading-[1.55] text-gomu-cream/85 max-w-[600px] mx-auto">
            15 à 20 vitamines et minéraux à{" "}
            <span className="text-gomu-cream font-medium">dosages cliniques</span>. En formes
            biodisponibles. Base pectine de fruit, halal et vegan.
            <span className="block mt-2 italic font-display text-gomu-cream/75 text-[15px] md:text-[17px]">
              Parce que 5 pots de vitamines dans le placard, on a déjà essayé.
            </span>
          </p>
        )}

        <div className="mt-9 flex flex-col items-center gap-5 px-4 sm:px-0">
          <Btn
            href={ctaHref}
            onDark
            className="w-full sm:w-auto sm:min-w-[360px]"
          >
            Rejoindre la liste d&apos;attente <ArrowRight size={18} />
          </Btn>

          <div className="flex items-center gap-2.5 text-[14px] text-gomu-cream/85">
            <StarRating size={18} />
            <span>
              <b className="text-gomu-cream">[X]</b> avis · pré-lancement
            </span>
          </div>
        </div>

        <div className="mt-6 inline-flex flex-col sm:flex-row gap-3 sm:gap-7 text-[13px] text-gomu-cream/80">
          <div className="flex items-center justify-center gap-2">
            <Check size={16} className="text-gomu-yellow shrink-0" />
            <span>
              Premier mois à <b className="text-gomu-cream">20€</b> · 500 premiers
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Check size={16} className="text-gomu-yellow shrink-0" />
            <span>Annulable en 2 clics</span>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#ingredients"
            className="inline-flex items-center gap-1.5 text-[15px] text-gomu-cream/90 underline underline-offset-4 decoration-gomu-cream/40 hover:decoration-gomu-yellow hover:text-gomu-yellow transition-colors"
          >
            Voir la formule <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* FULL-BLEED lifestyle photo, flush to the section's bottom edge */}
      <div className="relative mt-12 md:mt-16">
        <span
          className="sticker-float inline-block absolute left-[5%] sm:left-[10%] lg:left-[18%] -top-4 z-10 hidden sm:block"
          style={{ animationDelay: "0s" }}
        >
          <Sticker rotate={-7} color="chartreuse">
            30 sachets · 1 mois
          </Sticker>
        </span>
        <span
          className="sticker-float inline-block absolute right-[5%] sm:right-[10%] lg:right-[18%] -top-4 z-10 hidden sm:block"
          style={{ animationDelay: "1.4s" }}
        >
          <Sticker rotate={7} color="yellow">
            29€/mois
          </Sticker>
        </span>

        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
          <Image
            src="/images/lifestyle-sachet.jpeg"
            alt="Un sachet Gomu tenu au-dessus d'une tasse de café"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
