"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import type { LPBuyBoxData } from "@/lib/lp-content";
import {
  scaleIn,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

interface Props {
  data: LPBuyBoxData;
}

export default function LPBuyBox({ data }: Props) {
  const [selected, setSelected] = useState<"subscription" | "one-time">(
    "subscription"
  );

  return (
    <section id="buy-box" className="py-16 lg:py-20 bg-lp-cream">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-lp-green-300/30 overflow-hidden"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          {/* Header */}
          <div className="bg-lp-green-500 text-white text-center py-4 px-6">
            <h2 className="text-xl font-bold">{data.productName}</h2>
          </div>

          <div className="p-6 lg:p-8">
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: data.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#F2E85C"
                    className="text-lp-accent"
                  />
                ))}
              </div>
              <span className="text-sm text-lp-text-muted">
                {data.reviewCount} avis
              </span>
            </div>

            {/* Product info */}
            <p className="text-center text-sm text-lp-text-muted mb-6">
              Saveur : {data.flavor} &middot; {data.format}
            </p>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {/* Subscription */}
              <button
                onClick={() => setSelected("subscription")}
                className={`w-full text-left rounded-xl p-4 border-2 transition-all cursor-pointer ${
                  selected === "subscription"
                    ? "border-lp-green-500 bg-lp-green-100/30"
                    : "border-gray-200 hover:border-lp-green-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lp-green-900">
                      {data.subscription.label}
                    </span>
                    <span className="bg-lp-accent text-lp-green-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      {data.subscription.badge}
                    </span>
                  </div>
                  <span className="bg-lp-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {data.subscription.discount}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-lp-green-700">
                    {data.subscription.price}
                  </span>
                  <span className="text-sm text-lp-text-muted">/mois</span>
                  <span className="text-sm text-lp-text-muted line-through">
                    {data.subscription.originalPrice}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {data.subscription.perks.map((perk, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-lp-text-muted"
                    >
                      <Check size={14} className="text-lp-green-500 shrink-0" />
                      {perk}
                    </div>
                  ))}
                </div>
              </button>

              {/* One-time */}
              <button
                onClick={() => setSelected("one-time")}
                className={`w-full text-left rounded-xl p-4 border-2 transition-all cursor-pointer ${
                  selected === "one-time"
                    ? "border-lp-green-500 bg-lp-green-100/30"
                    : "border-gray-200 hover:border-lp-green-300"
                }`}
              >
                <span className="font-bold text-lp-green-900">
                  {data.oneTime.label}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl font-bold text-lp-text">
                    {data.oneTime.price}
                  </span>
                  <span className="text-sm text-lp-text-muted">
                    ({data.oneTime.shipping})
                  </span>
                </div>
              </button>
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              className="block w-full bg-lp-green-500 hover:bg-lp-green-700 text-white text-center font-bold text-lg py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              whileTap={{ scale: 0.98 }}
            >
              {data.cta}
            </motion.a>

            {/* Anti-piege */}
            <p className="text-center text-xs text-lp-text-muted mt-4 leading-relaxed">
              {data.antiPiege}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
