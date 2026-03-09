"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { content } from "@/lib/content";

export default function PressCarousel() {
  const [current, setCurrent] = useState(0);
  const items = content.press.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative flex items-center">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + items.length) % items.length)
            }
            className="shrink-0 w-11 h-11 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 text-center px-4 sm:px-8">
            <p className="text-base sm:text-lg italic text-brand-dark/70 mb-3">
              &ldquo;{items[current].quote}&rdquo;
            </p>
            <p className="text-2xl font-bold text-brand-dark tracking-tight">
              {items[current].source}
            </p>
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % items.length)}
            className="shrink-0 w-11 h-11 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                i === current ? "bg-brand-dark" : "bg-brand-dark/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
