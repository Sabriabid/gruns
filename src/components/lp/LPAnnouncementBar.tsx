"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  text: string;
  emoji: string;
}

export default function LPAnnouncementBar({ text, emoji }: Props) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-brand-orange to-[#ffa04d] text-brand-dark text-center text-sm font-bold relative overflow-hidden"
        >
          <div className="py-2.5 px-10">
            <span>{emoji} {text}</span>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark/50 hover:text-brand-dark cursor-pointer"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
