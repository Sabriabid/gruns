"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { openWaitlist } from "@/components/v2/waitlistStore";

/**
 * Mobile-only sticky CTA for the landing pages. Appears after a short scroll
 * and scrolls to the in-page Offre (waitlist capture) — same behaviour as the
 * Header CTA. CSS transform for show/hide (no framer-motion in the LP bundle).
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden bg-gomu-cream/95 backdrop-blur-sm border-t border-gomu-purple-deep/10 p-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={openWaitlist}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream py-3.5 text-[15px] font-medium hover:bg-gomu-purple-1 transition-colors"
      >
        Rejoindre la liste d&apos;attente <ArrowRight size={16} />
      </button>
    </div>
  );
}
