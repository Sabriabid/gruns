"use client";

import { useEffect, useState } from "react";

// Rotating one-liner + dots (gruns hero-carousel nod). Honest claims only.
// Index 0 renders deterministically on the server; the interval starts after
// mount and is skipped under prefers-reduced-motion.
const SLIDES = [
  "15–20 actifs à dosages cliniques",
  "Base pectine de fruit — halal & vegan natif",
  "Tests Eurofins publiés lot par lot (à venir)",
];

export default function HeroCarousel({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`flex flex-col items-center lg:items-start gap-3 ${className}`}
    >
      <div className="relative h-6 w-full max-w-[420px]">
        {SLIDES.map((s, idx) => (
          <span
            key={idx}
            aria-hidden={idx !== i}
            className={`absolute inset-0 text-center lg:text-left text-[14px] text-gomu-cream/80 transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Argument ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === i ? "w-6 bg-gomu-yellow" : "w-2 bg-gomu-cream/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
