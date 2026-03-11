"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function Statistics() {
  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="bg-white rounded-3xl shadow-lg border border-brand-purple/5 overflow-hidden flex flex-col lg:flex-row"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          {/* Text side */}
          <div className="flex-1 p-6 sm:p-10 lg:p-14">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-brand-purple mb-3"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                {content.statistics.title}
              </motion.h2>
              <motion.p
                className="text-brand-dark/60 mb-10"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                {content.statistics.subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-8 mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                {content.statistics.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex-1"
                    variants={fadeInUp}
                    transition={defaultTransition}
                  >
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-purple">
                      {stat.value}
                    </span>
                    <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: 0.3 }}
              >
                <a
                  href="#produit"
                  className="inline-block bg-brand-purple text-white font-bold px-8 py-3.5 rounded-[10px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
                >
                  {content.statistics.cta}
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Image side */}
          <div className="flex-1 relative min-h-[300px] sm:min-h-[400px]">
            <Image
              src="/images/lifestyle-sachet.jpeg"
              alt="Personne ouvrant un sachet Gomu"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
