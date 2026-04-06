"use client";

import { motion } from "framer-motion";
import type { LPHero as LPHeroData } from "@/lib/lp-content";
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
    <section className="py-12 lg:py-20 bg-lp-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <span className="inline-block bg-lp-accent text-lp-green-900 font-bold text-xs px-4 py-1.5 rounded-full mb-5">
              {data.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-lp-green-900 leading-tight mb-4">
              {data.headline}
            </h1>
            <p className="text-lg text-lp-text-muted mb-6">{data.subtitle}</p>
            <a
              href="#buy-box"
              className="inline-block bg-lp-green-500 hover:bg-lp-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {data.cta}
            </a>
            <p className="mt-5 text-sm text-lp-text-muted">{data.trustBar}</p>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            className="flex-1 w-full"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <div className="aspect-square bg-lp-green-100 rounded-2xl flex items-center justify-center p-8">
              <p className="text-lp-green-700 text-center text-sm font-medium">
                {data.imagePlaceholder}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
