"use client";

import { motion } from "framer-motion";
import type { LPReason as LPReasonData } from "@/lib/lp-content";
import {
  slideInLeft,
  slideInRight,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

interface Props {
  data: LPReasonData;
  index: number;
}

export default function LPReason({ data, index }: Props) {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-lp-white" : "bg-lp-cream";

  return (
    <section className={`py-14 lg:py-20 ${bgClass}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
        >
          {/* Content */}
          <motion.div
            className="flex-1"
            variants={isEven ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <span className="text-6xl lg:text-7xl font-black text-lp-green-100">
              {data.number}
            </span>
            <span className="block text-xs font-bold tracking-widest text-lp-green-500 uppercase mt-2 mb-3">
              {data.category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-lp-green-900 mb-4 leading-tight">
              {data.title}
            </h2>
            <p className="text-lp-text-muted leading-relaxed text-base lg:text-lg">
              {data.content}
            </p>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            className="flex-1 w-full"
            variants={isEven ? slideInRight : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <div className="aspect-[4/3] bg-lp-green-100 rounded-2xl flex items-center justify-center p-6">
              <p className="text-lp-green-700 text-center text-sm font-medium">
                {data.imagePlaceholder || "Illustration"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
