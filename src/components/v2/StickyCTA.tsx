"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { scrollToOffer } from "./scrollToOffer";

/**
 * Homepage sticky CTA (gruns DA — gruns keeps a persistent "Try Grüns" pill on
 * every page). Appears after a short scroll and jumps to the in-page Offre
 * (waitlist capture), same target as the Header CTA. Mobile → full-width bottom
 * bar; desktop → floating pill bottom-right.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile — full-width bottom bar */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 md:hidden bg-gomu-cream/95 backdrop-blur-sm border-t border-gomu-purple-deep/10 p-3 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={scrollToOffer}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream py-3.5 text-[15px] font-semibold shadow-[0_4px_0_rgba(59,10,94,0.25)]"
        >
          Rejoindre la liste · 20€ <ArrowRight size={16} />
        </button>
      </div>

      {/* Desktop — floating pill bottom-right */}
      <button
        onClick={scrollToOffer}
        className={`hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream pl-6 pr-5 py-4 text-[15px] font-semibold shadow-[0_10px_30px_-8px_rgba(59,10,94,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gomu-purple-1 ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Rejoindre la liste <ArrowRight size={16} />
      </button>
    </>
  );
}
