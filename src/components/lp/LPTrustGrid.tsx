"use client";

import { motion } from "framer-motion";
import { FlaskConical, Flag, Leaf, CircleCheckBig } from "lucide-react";
import type { LPTrustItem } from "@/lib/lp-content";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  flask: <FlaskConical size={28} className="text-brand-purple" />,
  flag: <Flag size={28} className="text-brand-purple" />,
  leaf: <Leaf size={28} className="text-brand-purple" />,
  "check-circle": <CircleCheckBig size={28} className="text-brand-purple" />,
};

interface Props {
  data: LPTrustItem[];
}

export default function LPTrustGrid({ data }: Props) {
  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-brand-purple text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          Pourquoi nous faire confiance
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex gap-4"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                {iconMap[item.icon] || iconMap.flask}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-dark/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
