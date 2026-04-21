"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { scrollToOffer } from "./scrollToOffer";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gomu-cream/95 backdrop-blur-sm shadow-[0_2px_20px_-8px_rgba(59,10,94,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
          <a
            href="#"
            className={`font-display italic font-semibold text-[30px] leading-none tracking-tight transition-colors ${
              scrolled ? "text-gomu-purple-deep" : "text-gomu-cream"
            }`}
          >
            Gomu<span className="text-gomu-chartreuse">.</span>
          </a>
          <nav
            className={`hidden md:flex items-center gap-9 text-[15px] transition-colors ${
              scrolled ? "text-gomu-purple-deep/85" : "text-gomu-cream/85"
            }`}
          >
            <a href="#produit" className="hover:opacity-100 opacity-90">
              Le sachet
            </a>
            <a href="#ingredients" className="hover:opacity-100 opacity-90">
              Ingrédients
            </a>
            <a href="#rituel" className="hover:opacity-100 opacity-90">
              Le rituel
            </a>
            <a href="#faq" className="hover:opacity-100 opacity-90">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToOffer}
              className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
                scrolled
                  ? "bg-gomu-purple-deep text-gomu-cream hover:bg-gomu-purple-1"
                  : "bg-gomu-yellow text-gomu-purple-deep hover:bg-gomu-chartreuse"
              }`}
            >
              Rejoindre la liste <ArrowRight size={16} />
            </button>
            <button
              className={`md:hidden transition-colors ${
                scrolled ? "text-gomu-purple-deep" : "text-gomu-cream"
              }`}
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gomu-ink/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-gomu-cream p-6 shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display italic font-semibold text-[26px] text-gomu-purple-deep">
              Gomu<span className="text-gomu-chartreuse">.</span>
            </span>
            <button aria-label="Fermer" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6 text-[22px] font-display text-gomu-purple-deep">
            <a onClick={() => setOpen(false)} href="#produit">
              Le sachet
            </a>
            <a onClick={() => setOpen(false)} href="#ingredients">
              Ingrédients
            </a>
            <a onClick={() => setOpen(false)} href="#rituel">
              Le rituel
            </a>
            <a onClick={() => setOpen(false)} href="#faq">
              FAQ
            </a>
          </nav>
          <button
            onClick={() => {
              setOpen(false);
              scrollToOffer();
            }}
            className="mt-10 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream px-6 py-4 text-[15px] font-medium"
          >
            Rejoindre la liste <ArrowRight size={16} />
          </button>
        </aside>
      </div>
    </>
  );
}
