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
  flask: <FlaskConical size={28} className="text-lp-green-500" />,
  flag: <Flag size={28} className="text-lp-green-500" />,
  leaf: <Leaf size={28} className="text-lp-green-500" />,
  "check-circle": <CircleCheckBig size={28} className="text-lp-green-500" />,
};

interface Props {
  data: LPTrustItem[];
}

export default function LPTrustGrid({ data }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-lp-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-lp-green-900 text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          Pourquoi nous faire confiance
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              className="bg-lp-green-100/50 border border-lp-green-300/30 rounded-xl p-6 flex gap-4"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="shrink-0 mt-1">
                {iconMap[item.icon] || iconMap.flask}
              </div>
              <div>
                <h3 className="font-bold text-lp-green-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-lp-text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
