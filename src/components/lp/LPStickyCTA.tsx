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
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-cream/95 backdrop-blur-sm border-t border-brand-purple/10 p-3"
        >
          <a
            href="#buy-box"
            className="block w-full bg-brand-purple text-white text-center font-bold text-base py-3.5 rounded-[10px] transition-all shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Profiter de l&apos;offre -30%
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
