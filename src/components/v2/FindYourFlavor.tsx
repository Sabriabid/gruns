"use client";

import { ArrowRight } from "lucide-react";
import { scrollToOffer } from "./scrollToOffer";
import Eyebrow from "./Eyebrow";

// gruns "Find Your Flavor" 4-product grid — but Gomu has ONE SKU. We map the 4
// cards to the 4 real angle entry-points (same as Footer LP_LINKS); each leads
// to the same sachet. No invented products.
const CARDS: { name: string; badge: string; href: string }[] = [
  { name: "Le sachet quotidien", badge: "Populaire", href: "/lp/un-sachet" },
  { name: "Halal natif", badge: "Halal & Vegan", href: "/lp/halal" },
  { name: "Tout-en-un", badge: "5 pots → 1", href: "/lp/tout-en-un" },
  { name: "Le rituel", badge: "Format gummy", href: "/lp/le-rituel" },
];

export default function FindYourFlavor() {
  return (
    <section className="bg-gomu-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center reveal">
          <Eyebrow className="justify-center">
            Un produit, plusieurs portes d&apos;entrée
          </Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[60px] lg:text-[72px] leading-[1] text-gomu-purple-deep">
            Trouve <span className="hl">ton angle</span>.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-gomu-ink/75 max-w-[560px] mx-auto">
            Une seule formule. Une seule saveur. Choisis la raison qui te parle —
            tu tombes sur le même sachet.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="reveal card-pop bg-gomu-paper border border-gomu-purple-deep/10 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square bg-gomu-purple-deep ph-stripes-cream flex items-center justify-center">
                <span className="absolute top-3 left-3 rounded-full bg-gomu-yellow text-gomu-purple-deep text-[11px] uppercase tracking-cap font-semibold px-2.5 py-1">
                  {c.badge}
                </span>
                <span className="text-[11px] uppercase tracking-cap text-gomu-cream/50">
                  [PHOTO : sachet]
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-[20px] leading-tight text-gomu-purple-deep">
                  {c.name}
                </h3>
                <div className="mt-1 text-[14px] text-gomu-ink/70">
                  <b className="text-gomu-purple-deep">20€</b> 1er mois{" "}
                  <span className="line-through text-gomu-ink/40">29€</span>
                </div>
                <div className="mt-auto pt-5 flex flex-col gap-2">
                  <button
                    onClick={scrollToOffer}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gomu-purple-deep text-gomu-cream px-4 py-2.5 text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-gomu-purple-1"
                  >
                    Rejoindre la liste <ArrowRight size={15} />
                  </button>
                  <a
                    href={c.href}
                    className="text-center text-[13px] text-gomu-purple-deep underline underline-offset-4 decoration-gomu-purple-deep/30 hover:decoration-gomu-purple-deep"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
