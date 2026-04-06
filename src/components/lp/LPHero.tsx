"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LPHero as LPHeroData } from "@/lib/lp-content";
import StarRating from "@/components/ui/StarRating";
import {
  slideInLeft,
  slideInRight,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

interface Props {
  data: LPHeroData;
}

export default function LPHero({ data }: Props) {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 max-w-xl text-center lg:text-left"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <span className="inline-block bg-brand-orange text-white font-bold text-sm px-5 py-1.5 rounded-full mb-5">
              {data.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-4">
              {data.headline}
            </h1>
            <p className="text-base sm:text-lg text-brand-dark/70 leading-relaxed mb-6">
              {data.subtitle}
            </p>
            <a
              href="#buy-box"
              className="inline-block bg-brand-purple text-white font-bold text-lg px-8 py-4 rounded-[10px] transition-all shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              {data.cta}
            </a>
            <div className="mt-5 flex items-center justify-center lg:justify-start gap-2">
              <StarRating rating={5} size={16} />
              <span className="text-sm text-brand-dark/60">{data.trustBar}</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/product-hero.jpeg"
                alt="Gomu — Nutrition complète"
                width={500}
                height={500}
                className="rounded-3xl shadow-[0_20px_60px_-12px_rgba(124,58,237,0.25)] max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
