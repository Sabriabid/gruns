"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((item, i) => (
        <div key={i} className="border-b border-brand-green/20">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
          >
            <span className="text-base sm:text-lg font-bold text-brand-dark pr-2 sm:pr-4">
              {item.question}
            </span>
            {openIndex === i ? (
              <Minus className="text-brand-green shrink-0" size={24} />
            ) : (
              <Plus className="text-brand-green shrink-0" size={24} />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-brand-dark/70 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
