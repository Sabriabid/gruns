"use client";

import Link from "next/link";
import type { LPFooterData } from "@/lib/lp-content";

interface Props {
  data: LPFooterData;
}

export default function LPFooter({ data }: Props) {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-brand-yellow font-bold text-2xl mb-1 text-center">
          {data.brand}
        </p>
        <p className="text-white/60 text-sm mb-8 text-center">{data.tagline}</p>

        {/* LP navigation */}
        <div className="mb-8">
          <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3 text-center">
            Toutes les pages
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {data.lpLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs">
            {data.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-6 text-sm">
            {data.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-white/60 hover:text-white transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-white/40 text-center">
            &copy; {new Date().getFullYear()} {data.brand}. Tous droits
            r&eacute;serv&eacute;s.
          </p>
        </div>
      </div>
    </footer>
  );
}
