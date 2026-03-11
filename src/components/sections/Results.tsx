"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function Results() {
  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-brand-light-yellow rounded-3xl p-5 sm:p-8 lg:p-12">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              {content.results.title}
            </h2>
            <p className="text-brand-dark/60 max-w-3xl mx-auto">
              {content.results.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {content.results.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-green">
                  {stat.value}
                </span>
                <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="border-t border-brand-green/10 pt-4">
            <p className="text-center text-xs text-brand-dark/40 italic">
              {content.results.footnote}
            </p>
          </div>

          {/* Clinical stats image */}
          <motion.div
            className="mt-8 flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <Image
              src="/images/clinical-stats.jpeg"
              alt="Étude clinique Groms — résultats"
              width={700}
              height={700}
              className="rounded-2xl shadow-sm w-full max-w-2xl h-auto"
            />
          </motion.div>

          {/* Timeline expectations */}
          <motion.div
            className="mt-8 flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <Image
              src="/images/timeline-expectations.jpeg"
              alt="À quoi s'attendre après avoir pris Groms"
              width={700}
              height={700}
              className="rounded-2xl shadow-sm w-full max-w-2xl h-auto"
            />
          </motion.div>

          <div className="border-t border-brand-green/10 mt-8 pt-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-green text-center mb-4">
              {content.quality.title}
            </h3>
            <p className="text-brand-dark/60 text-center max-w-2xl mx-auto mb-8">
              {content.quality.subtitle}
            </p>
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-lg mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {content.quality.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  variants={fadeIn}
                  transition={defaultTransition}
                >
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-bold">
                    ✕
                  </span>
                  <span className="text-sm text-brand-dark/70">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
