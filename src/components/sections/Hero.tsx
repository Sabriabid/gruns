"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import StarRating from "@/components/ui/StarRating";
import { ShieldCheck } from "lucide-react";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
        {/* Left column */}
        <motion.div
          className="flex-1 max-w-xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className="flex items-center gap-2 mb-4"
            variants={fadeIn}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <StarRating rating={5} size={18} />
            <span className="text-sm text-brand-dark/70">
              <strong>4.8</strong> étoiles &bull; <strong>85K+</strong> avis
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            {content.hero.headline}{" "}
            <span className="text-brand-purple">
              {content.hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-brand-dark/70 mb-6 sm:mb-8 leading-relaxed"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <a
              href="#produit"
              className="inline-block bg-brand-purple text-white font-bold text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[10px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 mb-4"
            >
              {content.hero.cta}
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <p className="text-sm text-brand-dark/60 mb-3">
              {content.hero.subCta}
            </p>

            <div className="flex items-center gap-2 text-sm text-brand-purple">
              <ShieldCheck size={18} />
              <span className="font-medium">{content.hero.guarantee}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column - Product photo */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          variants={fadeIn}
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
              alt="Gomu - Gommes aux Superaliments"
              width={500}
              height={500}
              className="rounded-3xl shadow-[0_20px_60px_-12px_rgba(124,58,237,0.25)] w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
