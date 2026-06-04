"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { scrollToOffer } from "./scrollToOffer";

const NAV: Array<[string, string]> = [
  ["produit", "Le sachet"],
  ["ingredients", "Ingrédients"],
  ["rituel", "Le rituel"],
  ["faq", "FAQ"],
];

/**
 * Site header. Two variants:
 *  - "home" (default): in-page anchors (#produit…) + scroll-to-offer button.
 *    Behaviour identical to the original homepage header.
 *  - "page": used by standalone content pages (Carrières, Presse…). Anchors and
 *    the CTA become root-relative (/#produit, /#offre) so they navigate back to
 *    the homepage, and the logo links to `/`.
 */
export default function Header({
  variant = "home",
}: {
  variant?: "home" | "page";
} = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const isPage = variant === "page";
  const base = isPage ? "/" : "";
  const logoHref = isPage ? "/" : "#";

  const ctaDesktopCls = `hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-200 ${
    scrolled
      ? "bg-gomu-purple-deep text-gomu-cream shadow-[0_4px_0_rgba(59,10,94,0.25)] hover:-translate-y-0.5 hover:bg-gomu-purple-1"
      : "bg-gomu-yellow text-gomu-purple-deep shadow-[0_4px_0_rgba(59,10,94,0.3)] hover:-translate-y-0.5 hover:bg-gomu-chartreuse"
  }`;

  return (
    <>
      <header
        className={`fixed top-10 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gomu-cream/95 backdrop-blur-sm shadow-[0_2px_20px_-8px_rgba(59,10,94,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center">
          <nav
            className={`hidden md:flex items-center gap-2 text-[14px] font-medium transition-colors ${
              scrolled ? "text-gomu-purple-deep" : "text-gomu-cream"
            }`}
          >
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={`${base}#${id}`}
                className={`rounded-full px-3.5 py-1.5 transition-colors ${
                  scrolled
                    ? "hover:bg-gomu-purple-deep/8"
                    : "hover:bg-gomu-cream/15"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <span className="md:hidden" aria-hidden />

          <a
            href={logoHref}
            className={`justify-self-center font-display font-bold text-[30px] leading-none tracking-tight transition-colors ${
              scrolled ? "text-gomu-purple-deep" : "text-gomu-cream"
            }`}
          >
            Gomu<span className="text-gomu-chartreuse">.</span>
          </a>

          <div className="justify-self-end flex items-center gap-3">
            {isPage ? (
              <Link href="/#offre" className={ctaDesktopCls}>
                Rejoindre la liste <ArrowRight size={16} />
              </Link>
            ) : (
              <button onClick={scrollToOffer} className={ctaDesktopCls}>
                Rejoindre la liste <ArrowRight size={16} />
              </button>
            )}
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
            <span className="font-display font-bold text-[26px] text-gomu-purple-deep">
              Gomu<span className="text-gomu-chartreuse">.</span>
            </span>
            <button aria-label="Fermer" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6 text-[22px] font-display text-gomu-purple-deep">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                onClick={() => setOpen(false)}
                href={`${base}#${id}`}
              >
                {label}
              </a>
            ))}
          </nav>
          {isPage ? (
            <Link
              href="/#offre"
              onClick={() => setOpen(false)}
              className="mt-10 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream px-6 py-4 text-[15px] font-medium"
            >
              Rejoindre la liste <ArrowRight size={16} />
            </Link>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                scrollToOffer();
              }}
              className="mt-10 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream px-6 py-4 text-[15px] font-medium"
            >
              Rejoindre la liste <ArrowRight size={16} />
            </button>
          )}
        </aside>
      </div>
    </>
  );
}
