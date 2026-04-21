"use client";

import Image from "next/image";
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
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="bg-brand-light-yellow rounded-3xl p-5 sm:p-8 lg:p-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {data.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-purple mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-brand-dark/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/clinical-stats.jpeg"
              alt="Statistiques cliniques Gomu"
              width={600}
              height={300}
              className="rounded-2xl shadow-sm w-full max-w-2xl h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
