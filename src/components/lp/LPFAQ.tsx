"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";
import type { LPFAQItem } from "@/lib/lp-content";
import { fadeInUp, defaultTransition, defaultViewport } from "@/lib/animations";

interface Props {
  data: LPFAQItem[];
}

export default function LPFAQ({ data }: Props) {
  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <motion.div
            className="lg:w-1/3 shrink-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">
              Questions fr&eacute;quentes
            </h2>
          </motion.div>

          <div className="flex-1 w-full">
            <Accordion items={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
