"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { content } from "@/lib/content";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bg-gradient-to-r from-brand-orange to-[#ffa04d] text-brand-dark py-2.5 px-4 relative"
          exit={{ opacity: 0, height: 0, overflow: "hidden" }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <span className="font-bold text-sm">
              🍊 {content.announcement.text} 🔥
            </span>
            <CountdownTimer targetDate={content.announcement.countdownEnd} />
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark/60 hover:text-brand-dark cursor-pointer"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
