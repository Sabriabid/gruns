"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LPReason as LPReasonData } from "@/lib/lp-content";
import {
  slideInLeft,
  slideInRight,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

const reasonImages = [
  "/images/benefits-lifestyle.jpeg",
  "/images/lifestyle-sachet.jpeg",
  "/images/clinical-stats.jpeg",
  "/images/timeline-expectations.jpeg",
  "/images/social-proof.jpeg",
  "/images/comparison-table.jpeg",
];

interface Props {
  data: LPReasonData;
  index: number;
}

export default function LPReason({ data, index }: Props) {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-white" : "bg-brand-cream";
  const imgSrc = reasonImages[index % reasonImages.length];

  return (
    <section className={`py-24 lg:py-28 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 sm:gap-12 lg:gap-16`}
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
            <span className="text-6xl lg:text-7xl font-bold text-brand-purple/10">
              {data.number}
            </span>
            <span className="block text-xs font-bold tracking-widest text-brand-purple uppercase mt-2 mb-3">
              {data.category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 leading-tight">
              {data.title}
            </h2>
            <p className="text-brand-dark/60 leading-relaxed text-base lg:text-lg">
              {data.content}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 w-full"
            variants={isEven ? slideInRight : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <Image
              src={imgSrc}
              alt={data.title}
              width={600}
              height={450}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
