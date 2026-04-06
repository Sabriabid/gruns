"use client";

import { motion } from "framer-motion";
import type { LPTimelineStep } from "@/lib/lp-content";
import {
  fadeInUp,
  staggerContainerSlow,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

interface Props {
  data: LPTimelineStep[];
}

export default function LPTimeline({ data }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-lp-cream">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-lp-green-900 text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          Ce que tu peux attendre
        </motion.h2>

        <motion.div
          className="relative"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-lp-green-300" />

          <div className="space-y-10">
            {data.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 relative"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                {/* Circle */}
                <div className="w-12 h-12 rounded-full bg-lp-green-500 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <span className="text-xs font-bold tracking-wider text-lp-green-500 uppercase">
                    {step.period}
                  </span>
                  <h3 className="text-lg font-bold text-lp-green-900 mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lp-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
