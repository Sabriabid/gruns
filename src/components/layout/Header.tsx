"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User } from "lucide-react";
import { content } from "@/lib/content";

export default function Header() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <nav className="flex items-center gap-2">
          <a
            href="#produit"
            className="text-sm font-medium text-brand-dark border border-brand-green rounded-full px-4 py-1.5 hover:bg-brand-green hover:text-white transition-colors"
          >
            Découvrir
          </a>
        </nav>

        <a
          href="#"
          className="text-2xl font-bold text-brand-green tracking-tight"
        >
          {content.brand}
        </a>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-brand-dark hover:text-brand-green transition-colors cursor-pointer rounded-lg" aria-label="Compte">
            <User size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-brand-dark hover:text-brand-green transition-colors cursor-pointer rounded-lg" aria-label="Panier">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#produit"
              className="bg-brand-green text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-brand-dark transition-colors flex items-center gap-1"
            >
              {content.nav.cta} →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
