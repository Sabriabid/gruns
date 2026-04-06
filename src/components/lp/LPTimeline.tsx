"use client";

import Image from "next/image";
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
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-brand-purple text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          Ce que tu peux attendre
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            className="flex-1 relative"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-purple/20" />

            <div className="space-y-10">
              {data.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 relative"
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <span className="text-xs font-bold tracking-wider text-brand-purple uppercase">
                      {step.period}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-brand-dark/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <Image
              src="/images/timeline-expectations.jpeg"
              alt="Timeline des résultats Gomu"
              width={600}
              height={400}
              className="rounded-2xl shadow-sm w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
