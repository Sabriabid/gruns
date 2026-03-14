"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import {
  slideInLeft,
  slideInRight,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-[#4C1D95] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {content.promoBanner.headline}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            {content.promoBanner.subtitle}
          </p>
          <a
            href="#produit"
            className="inline-block bg-white text-brand-purple font-bold text-lg px-10 py-4 rounded-[10px] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
          >
            {content.promoBanner.cta}
          </a>
        </motion.div>

        {/* Product Image */}
        <motion.div
          className="flex-1 flex justify-center"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <Image
            src="/images/product-hero.jpeg"
            alt="Gomu — Édition limitée"
            width={450}
            height={450}
            className="rounded-2xl w-full max-w-[350px] lg:max-w-[450px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
