"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import Btn from "./Btn";
import Sticker from "./Sticker";
import Squiggle from "./Squiggle";
import HeroCarousel from "./HeroCarousel";
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

export default function Hero({
  eyebrow = DEFAULT_EYEBROW,
  h1 = DEFAULT_H1,
  subtitle,
  ctaHref = "/lp/un-sachet?source=homepage",
}: HeroProps = {}) {
  return (
    <section className="relative bg-gradient-to-b from-gomu-purple-deep to-gomu-purple-1 text-gomu-cream pt-[148px] md:pt-[168px] pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>

      <div className="absolute top-[140px] left-[3%] hidden lg:block pointer-events-none sticker-float">
        <svg
          viewBox="0 0 80 80"
          className="w-14 h-14 text-gomu-chartreuse"
          fill="currentColor"
          aria-hidden
        >
          <path d="M40 0 L46 34 L80 40 L46 46 L40 80 L34 46 L0 40 L34 34 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT — copy */}
          <div className="reveal text-center lg:text-left">
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-[12px] md:text-[13px] uppercase tracking-cap font-medium text-gomu-yellow">
              {eyebrow.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-x-3">
                  {i > 0 && <span className="text-gomu-yellow/50">·</span>}
                  <span>{item}</span>
                </span>
              ))}
            </div>

            <h1 className="font-display font-bold tracking-display mt-5 md:mt-6 text-[44px] sm:text-[60px] lg:text-[64px] xl:text-[80px] leading-[0.92]">
              {renderRich(h1, { onDark: true })}
            </h1>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-2.5 text-[14px] text-gomu-cream/85">
              <StarRating size={18} />
              <span>
                <b className="text-gomu-cream">[X]</b> avis · pré-lancement
              </span>
            </div>

            {subtitle ? (
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-gomu-cream/85 max-w-[560px] mx-auto lg:mx-0">
                {renderRich(subtitle, { onDark: true })}
              </p>
            ) : (
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-gomu-cream/85 max-w-[560px] mx-auto lg:mx-0">
                15 à 20 vitamines et minéraux à{" "}
                <span className="text-gomu-cream font-medium">dosages cliniques</span>. En formes
                biodisponibles. Base pectine de fruit, halal et vegan.
                <span className="block mt-2 italic font-display text-gomu-cream/75 text-[15px] md:text-[16px]">
                  Parce que 5 pots de vitamines dans le placard, on a déjà essayé.
                </span>
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-4 px-6 sm:px-0">
              <Btn href={ctaHref} onDark className="w-full sm:w-auto">
                Rejoindre la liste d&apos;attente <ArrowRight size={18} />
              </Btn>
              <a
                href="#ingredients"
                className="inline-flex items-center justify-center gap-1.5 text-[15px] text-gomu-cream/90 underline underline-offset-4 decoration-gomu-cream/40 hover:decoration-gomu-yellow hover:text-gomu-yellow transition-colors"
              >
                Voir la formule <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-6 inline-flex flex-col sm:flex-row gap-3 sm:gap-7 text-[13px] text-gomu-cream/80">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-gomu-yellow shrink-0" />
                <span>
                  Premier mois à <b className="text-gomu-cream">20€</b> · 500 premiers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-gomu-yellow shrink-0" />
                <span>Annulable en 2 clics</span>
              </div>
            </div>

            <HeroCarousel className="mt-9" />
          </div>

          {/* RIGHT — product photo + floating stickers */}
          <div className="relative reveal mx-auto w-full max-w-[520px]">
            <span
              className="sticker-float inline-block absolute -top-4 -right-1 sm:-right-3 z-10"
              style={{ animationDelay: "0s" }}
            >
              <Sticker rotate={8} color="chartreuse">
                30 sachets · 1 mois
              </Sticker>
            </span>
            <span
              className="sticker-float inline-block absolute -bottom-5 -left-1 sm:-left-3 z-10"
              style={{ animationDelay: "1.4s" }}
            >
              <Sticker rotate={-8} color="yellow">
                29€/mois
              </Sticker>
            </span>

            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden border-2 border-gomu-yellow/70 bg-gomu-cream">
              <Image
                src="/images/lifestyle-sachet.jpeg"
                alt="Un sachet Gomu tenu au-dessus d'une tasse de café"
                fill
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 480px, 100vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="hidden xl:block absolute -right-[104px] top-[42%] w-[104px] text-gomu-yellow">
              <div className="handwritten text-[20px] leading-tight">
                8 gummies
                <br />à mâcher
              </div>
              <Squiggle className="w-24 h-10 -ml-2 mt-1 rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
