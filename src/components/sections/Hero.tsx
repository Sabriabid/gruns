"use client";

import Image from "next/image";
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

        {/* Right column - Product photo */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/product-hero.jpeg"
            alt="Groms - Gommes aux Superaliments Verts"
            width={500}
            height={500}
            className="rounded-3xl shadow-2xl w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
