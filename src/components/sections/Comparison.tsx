"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import {
  fadeInUp,
  scaleIn,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function Comparison() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-3">
            {content.comparison.title}
          </h2>
          <p className="text-brand-dark/60 max-w-xl">
            {content.comparison.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <Image
            src="/images/comparison-table.jpeg"
            alt="Groms vs multivitamine générique vs poudre verte trop chère"
            width={800}
            height={800}
            className="rounded-2xl shadow-md w-full max-w-2xl h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
