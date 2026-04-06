"use client";

import { motion } from "framer-motion";
import type { LPStat } from "@/lib/lp-content";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

interface Props {
  data: LPStat[];
}

export default function LPSocialProofStats({ data }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-lp-green-900">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <p className="text-4xl lg:text-5xl font-black text-lp-accent mb-2">
                {stat.value}
              </p>
              <p className="text-white/80 text-sm lg:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
