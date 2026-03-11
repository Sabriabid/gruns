"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import Accordion from "@/components/ui/Accordion";
import {
  slideInLeft,
  fadeInUp,
  staggerContainerSlow,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function FAQ() {
  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
          <motion.div
            className="lg:w-1/3 shrink-0"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">
              {content.faq.title}
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 w-full"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Accordion items={content.faq.items} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
