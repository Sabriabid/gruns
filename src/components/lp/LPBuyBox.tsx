"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Truck, Clock, ShieldCheck } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import type { LPBuyBoxData } from "@/lib/lp-content";
import {
  scaleIn,
  slideInLeft,
  slideInRight,
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
    <section id="buy-box" className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <span className="inline-block bg-brand-orange text-white font-bold text-sm px-5 py-1.5 rounded-full mb-4">
            Offre de lancement
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-purple mb-3">
            {data.productName}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={5} size={18} />
            <span className="text-sm text-brand-dark/60">
              <strong>4.8</strong> &eacute;toiles | <strong>{data.reviewCount}</strong> avis
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left — Product image */}
          <motion.div
            className="flex-1"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <Image
              src="/images/product-buybox.jpeg"
              alt="Gomu — Offre de lancement"
              width={600}
              height={600}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mt-6 text-xs sm:text-sm text-brand-dark/60">
              <div className="flex items-center gap-2">
                <Truck size={16} /> Livraison Gratuite
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> Exp&eacute;dition 24h
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> Garantie 30j
              </div>
            </div>
          </motion.div>

          {/* Right — Pricing */}
          <motion.div
            className="flex-1 w-full"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <div className="bg-brand-cream rounded-2xl border-2 border-brand-purple shadow-[0_0_20px_rgba(124,58,237,0.08)] p-6">
              <p className="text-sm text-brand-dark/60 mb-5">
                Saveur : {data.flavor} &middot; {data.format}
              </p>

              <div className="space-y-3 mb-6">
                {/* Subscription */}
                <button
                  onClick={() => setSelected("subscription")}
                  className={`w-full text-left rounded-xl p-4 border-2 transition-all cursor-pointer ${
                    selected === "subscription"
                      ? "border-brand-purple bg-white"
                      : "border-brand-purple/10 bg-white/50 hover:border-brand-purple/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-brand-dark">
                        {data.subscription.label}
                      </span>
                      <span className="bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-0.5 rounded-full">
                        {data.subscription.badge}
                      </span>
                    </div>
                    <span className="bg-brand-purple text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {data.subscription.discount}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-brand-purple">
                      {data.subscription.price}
                    </span>
                    <span className="text-sm text-brand-dark/50">/mois</span>
                    <span className="text-sm text-brand-dark/50 line-through">
                      {data.subscription.originalPrice}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {data.subscription.perks.map((perk, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-brand-dark/70"
                      >
                        <Check size={16} className="text-brand-purple shrink-0" />
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
                      ? "border-brand-purple bg-white"
                      : "border-brand-purple/10 bg-white/50 hover:border-brand-purple/30"
                  }`}
                >
                  <span className="font-bold text-brand-dark">
                    {data.oneTime.label}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl font-bold text-brand-dark">
                      {data.oneTime.price}
                    </span>
                    <span className="text-sm text-brand-dark/50">
                      ({data.oneTime.shipping})
                    </span>
                  </div>
                </button>
              </div>

              {/* CTA */}
              <motion.a
                href="#"
                className="block w-full bg-brand-purple text-white text-center font-bold text-lg py-4 rounded-[10px] transition-all shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]"
                whileTap={{ scale: 0.98 }}
              >
                {data.cta}
              </motion.a>

              <p className="text-center text-xs text-brand-dark/50 mt-4 leading-relaxed">
                {data.antiPiege}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
