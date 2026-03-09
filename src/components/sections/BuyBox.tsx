"use client";

import { content } from "@/lib/content";
import StarRating from "@/components/ui/StarRating";
import EmailCapture from "@/components/ui/EmailCapture";
import {
  Check,
  Truck,
  Clock,
  ShieldCheck,
  Leaf,
  Apple,
  Pill,
  Flower2,
  Sprout,
  Cherry,
} from "lucide-react";

const packedIcons = [
  <Sprout key="v" size={18} className="text-brand-green" />,
  <Cherry key="f" size={18} className="text-red-500" />,
  <Pill key="vm" size={18} className="text-brand-yellow" />,
  <Flower2 key="a" size={18} className="text-purple-500" />,
  <Leaf key="h" size={18} className="text-green-600" />,
  <Apple key="ax" size={18} className="text-red-400" />,
];

export default function BuyBox() {
  return (
    <section id="produit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange text-white font-bold text-sm px-5 py-1.5 rounded-full mb-4">
            {content.buybox.badge}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-3">
            {content.buybox.title}
          </h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto mb-4">
            {content.buybox.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={5} size={18} />
            <span className="text-sm text-brand-dark/60">
              <strong>4.8</strong> étoiles | <strong>85K</strong> avis |{" "}
              <strong>1M+</strong> membres
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left - Product visual */}
          <div className="flex-1">
            <div className="bg-brand-green rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-brand-yellow text-brand-dark text-center py-2 font-bold text-sm">
                🔥 OFFRE DE LANCEMENT — PLACES LIMITÉES 🔥
              </div>
              <div className="p-8 flex flex-col items-center">
                <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mb-6">
                  <span className="text-5xl">🐻</span>
                </div>
                <span className="text-5xl font-bold text-brand-yellow mb-2">
                  {content.brand}
                </span>
                <span className="text-white/80 text-sm uppercase tracking-widest mb-6">
                  Nutrition Complète
                </span>

                <div className="w-full space-y-3 text-white text-sm">
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <Clock size={18} /> Full-body health benefits
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <ShieldCheck size={18} /> Soutient la santé intestinale
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <Leaf size={18} /> Énergie sans crash
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <Truck size={18} /> Bon goût, sans compromis
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping info */}
            <div className="flex items-center justify-center gap-8 mt-6 text-sm text-brand-dark/60">
              <div className="flex items-center gap-2">
                <Truck size={16} /> Livraison Gratuite
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> Expédition 24h
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> Garantie 30j
              </div>
            </div>
          </div>

          {/* Right - Signup / Price */}
          <div className="flex-1 w-full">
            {/* Price indicator */}
            <div className="bg-brand-cream rounded-2xl border-2 border-brand-green p-6 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-brand-green">
                  {content.buybox.price}
                </span>
                <span className="text-brand-dark/50 text-sm">
                  {content.buybox.priceNote}
                </span>
              </div>

              <div className="space-y-2.5 mb-6">
                {content.buybox.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-brand-dark/70"
                  >
                    <Check size={16} className="text-brand-green shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <EmailCapture
                placeholder={content.buybox.emailPlaceholder}
                buttonText={content.buybox.cta}
                successMessage={content.buybox.successMessage}
              />
            </div>

            {/* Tastes Like */}
            <div className="mb-6">
              <h3 className="font-bold text-brand-dark mb-3">
                {content.buybox.tastesLike.title}
              </h3>
              <div className="flex gap-6">
                {content.buybox.tastesLike.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center text-2xl">
                      {i === 0 ? "🍃" : i === 1 ? "🍓" : "🥬"}
                    </div>
                    <span className="text-xs text-brand-dark/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packed With */}
            <div>
              <h3 className="font-bold text-brand-dark mb-3">
                {content.buybox.packedWith.title}
              </h3>
              <div className="space-y-2">
                {content.buybox.packedWith.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-brand-dark/70"
                  >
                    {packedIcons[i]}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
