"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import Btn from "./Btn";
import Sticker from "./Sticker";
import Squiggle from "./Squiggle";
import { scrollToOffer } from "./scrollToOffer";

export default function Hero() {
  return (
    <section className="relative bg-gomu-purple-deep text-gomu-cream pt-[120px] md:pt-[140px] pb-14 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>

      <div className="absolute top-[120px] left-[5%] hidden md:block pointer-events-none">
        <svg
          viewBox="0 0 80 80"
          className="w-16 h-16 text-gomu-chartreuse"
          fill="currentColor"
          aria-hidden
        >
          <path d="M40 0 L46 34 L80 40 L46 46 L40 80 L34 46 L0 40 L34 34 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="text-center reveal">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] md:text-[13px] uppercase tracking-cap font-medium text-gomu-yellow">
            <span>Fabriqué en France</span>
            <span className="text-gomu-yellow/50">·</span>
            <span>Testé par Eurofins</span>
            <span className="text-gomu-yellow/50">·</span>
            <span>Halal &amp; Vegan</span>
          </div>
        </div>

        <h1 className="font-display font-normal tracking-display mt-6 md:mt-8 text-center text-[48px] sm:text-[68px] md:text-[104px] lg:text-[128px] leading-[0.9]">
          Un sachet.
          <br />
          <span className="italic">
            <span className="hl-on-dark">Toute</span> ta nutrition.
          </span>
        </h1>

        <div className="relative mt-10 md:mt-14 max-w-[720px] mx-auto">
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-8 z-10 hidden sm:block">
            <Sticker rotate={8} color="chartreuse">
              30 sachets · 1 mois
            </Sticker>
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 z-10 hidden sm:block">
            <Sticker rotate={-8} color="yellow">
              29€/mois
            </Sticker>
          </div>

          <div className="relative w-full aspect-square max-w-[560px] mx-auto rounded-[32px] overflow-hidden border-2 border-gomu-yellow/70 bg-gomu-cream">
            <Image
              src="/images/lifestyle-sachet.jpeg"
              alt="Un sachet Gomu tenu au-dessus d'une tasse de café"
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 100vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="hidden lg:block absolute -right-[120px] top-[40%] w-[110px] text-gomu-yellow">
            <div className="handwritten text-[20px] leading-tight">
              8 gummies
              <br />à mâcher
            </div>
            <Squiggle className="w-24 h-10 -ml-2 mt-1 rotate-180" />
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center reveal">
          <p className="text-[17px] md:text-[20px] leading-[1.55] text-gomu-cream/85 max-w-[640px] mx-auto">
            15 à 20 vitamines et minéraux à{" "}
            <span className="text-gomu-cream font-medium">
              dosages cliniques
            </span>
            . En formes biodisponibles. Base pectine de fruit, halal et vegan.
            <span className="block mt-2 italic font-display text-gomu-cream/75 text-[15px] md:text-[17px]">
              Parce que 5 pots de vitamines dans le placard, on a déjà essayé.
            </span>
          </p>

          <div className="mt-9 md:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Btn onClick={scrollToOffer} onDark>
              Bloquer ma place à 20€ <ArrowRight size={18} />
            </Btn>
            <a
              href="#ingredients"
              className="inline-flex items-center gap-1.5 text-[15px] text-gomu-cream/90 underline underline-offset-4 decoration-gomu-cream/40 hover:decoration-gomu-yellow hover:text-gomu-yellow transition-colors"
            >
              Voir la formule <ArrowDown size={16} />
            </a>
          </div>

          <div className="mt-7 inline-flex flex-col sm:flex-row gap-3 sm:gap-7 text-[13px] text-gomu-cream/80">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-gomu-yellow shrink-0" />
              <span>
                Premier mois à <b className="text-gomu-cream">20€</b> · 500
                premiers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-gomu-yellow shrink-0" />
              <span>Annulable en 2 clics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
