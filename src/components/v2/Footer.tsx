"use client";

import { Fragment, useState } from "react";
import { ArrowRight } from "lucide-react";

// Live landing pages (config: src/lib/lp-angles.ts). Keep in sync with the
// slugs served by app/lp/[slug]/page.tsx — any other slug 404s under export.
const LP_LINKS: Array<[string, string]> = [
  ["Le sachet quotidien", "/lp/un-sachet"],
  ["Halal natif", "/lp/halal"],
  ["Tout-en-un", "/lp/tout-en-un"],
  ["Le rituel", "/lp/le-rituel"],
];

export default function Footer() {
  const [nlEmail, setNlEmail] = useState("");

  return (
    <footer className="bg-gomu-ink text-gomu-cream pt-16 md:pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-10 md:gap-12">
        <div>
          <div className="font-display font-bold text-[40px] leading-none text-gomu-cream">
            Gomu<span className="text-gomu-chartreuse">.</span>
          </div>
          <p className="mt-5 text-[14px] leading-[1.6] text-gomu-cream/60 max-w-[260px]">
            Nutrition quotidienne. Testée par Eurofins. Pensée pour toi.
          </p>
        </div>
        <div>
          <div className="text-[12px] uppercase tracking-cap text-gomu-cream/50 mb-4">
            Découvrir
          </div>
          <ul className="space-y-2.5 text-[14.5px] text-gomu-cream/85">
            <li>
              <a href="#" className="hover:text-gomu-yellow">
                Notre histoire
              </a>
            </li>
            <li>
              <a href="#science" className="hover:text-gomu-yellow">
                La science
              </a>
            </li>
            <li>
              <a href="#produit" className="hover:text-gomu-yellow">
                Ingrédients
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gomu-yellow">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[12px] uppercase tracking-cap text-gomu-cream/50 mb-4">
            Contact
          </div>
          <ul className="space-y-2.5 text-[14.5px] text-gomu-cream/85">
            <li>
              <a href="#" className="hover:text-gomu-yellow">
                Service client
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@gomudaily.com"
                className="hover:text-gomu-yellow"
              >
                contact@gomudaily.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gomu-yellow">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gomu-yellow">
                CGV
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[12px] uppercase tracking-cap text-gomu-cream/50 mb-4">
            Newsletter
          </div>
          <p className="text-[14.5px] text-gomu-cream/85 mb-4">
            Reste informé du lancement
          </p>
          <div className="flex items-center gap-2 border-b border-gomu-cream/30 focus-within:border-gomu-yellow transition-colors pb-2">
            <input
              type="email"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="ton@email.com"
              className="flex-1 bg-transparent text-gomu-cream placeholder-gomu-cream/40 outline-none text-[14.5px]"
            />
            <button
              aria-label="S'inscrire"
              className="text-gomu-cream hover:text-gomu-yellow"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-14 pt-8 border-t border-gomu-cream/15">
        <div className="text-[12px] uppercase tracking-cap text-gomu-cream/40 mb-4">
          Landing pages · angles
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {LP_LINKS.map(([lbl, href], i) => (
            <Fragment key={i}>
              <a
                href={href}
                className="text-[13px] text-gomu-cream/60 hover:text-gomu-yellow"
              >
                {lbl}
              </a>
              {i < LP_LINKS.length - 1 && (
                <span className="text-gomu-cream/25 text-[13px]">·</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-gomu-cream/60">
        <div>© 2026 Gomu. Tous droits réservés.</div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>Halal &amp; Vegan</span>
          <span className="text-gomu-cream/25">·</span>
          <span>Tests Eurofins</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 text-[11px] leading-[1.6] text-gomu-cream/45 italic">
        Les compléments alimentaires ne se substituent pas à une alimentation
        variée et équilibrée ni à un mode de vie sain. À tenir hors de portée
        des enfants. Ne pas dépasser la dose journalière recommandée.
      </div>
    </footer>
  );
}
