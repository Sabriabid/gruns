"use client";

import { content } from "@/lib/content";
import StarRating from "@/components/ui/StarRating";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        {/* Left column */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={5} size={18} />
            <span className="text-sm text-brand-dark/70">
              <strong>4.8</strong> étoiles &bull; <strong>85K+</strong> avis
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {content.hero.headline}{" "}
            <span className="text-brand-green">
              {content.hero.headlineAccent}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-brand-dark/70 mb-6 sm:mb-8 leading-relaxed">
            {content.hero.subtitle}
          </p>

          <a
            href="#produit"
            className="inline-block bg-brand-green text-white font-bold text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[10px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 mb-4"
          >
            {content.hero.cta}
          </a>

          <p className="text-sm text-brand-dark/60 mb-3">
            {content.hero.subCta}
          </p>

          <div className="flex items-center gap-2 text-sm text-brand-green">
            <ShieldCheck size={18} />
            <span className="font-medium">{content.hero.guarantee}</span>
          </div>
        </div>

        {/* Right column - Product visual placeholder */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-96 lg:w-[420px] lg:h-[500px]">
            {/* Main pouch */}
            <div className="absolute inset-0 bg-brand-green rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 transform rotate-[-3deg]">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🐻</span>
              </div>
              <span className="text-4xl font-bold text-brand-yellow mb-2">
                {content.brand}
              </span>
              <span className="text-white/80 text-xs uppercase tracking-widest mb-4">
                Nutrition Complète
              </span>
              <div className="bg-white/15 rounded-xl px-4 py-2 text-white text-sm font-medium">
                Superfoods Greens Gummies
              </div>
              <div className="mt-4 text-white/60 text-xs">
                28 sachets quotidiens
              </div>
            </div>

            {/* Secondary pouch */}
            <div className="hidden sm:flex absolute -right-4 -bottom-4 w-48 h-60 bg-brand-green/80 rounded-2xl shadow-xl flex-col items-center justify-center p-4 transform rotate-[8deg]">
              <span className="text-2xl font-bold text-brand-yellow">
                {content.brand}
              </span>
              <span className="text-white/60 text-[10px] uppercase tracking-wider mt-1">
                Superfoods
              </span>
            </div>

            {/* Floating gummy bears */}
            <div className="hidden sm:block absolute -top-4 -left-4 text-4xl animate-bounce">
              🍬
            </div>
            <div className="hidden sm:block absolute top-12 -right-8 text-3xl animate-bounce delay-300">
              🍬
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
