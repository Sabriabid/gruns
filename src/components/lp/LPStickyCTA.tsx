"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LPStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-lp-green-300/30 p-3"
        >
          <a
            href="#buy-box"
            className="block w-full bg-lp-green-500 hover:bg-lp-green-700 text-white text-center font-bold text-base py-3.5 rounded-full transition-all shadow-lg"
          >
            Profiter de l&apos;offre -30%
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
