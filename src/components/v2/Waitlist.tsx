"use client";

import { ArrowRight, Check } from "lucide-react";
import Btn from "./Btn";
import Eyebrow from "./Eyebrow";
import { scrollToOffer } from "./scrollToOffer";

const PERKS = [
  "Premier mois à 20€ au lieu de 29€",
  "Tarif préférentiel garanti 12 mois",
  "Notification 72h avant l'ouverture officielle",
  "Accès aux rapports Eurofins dès la première production",
];

export default function Waitlist() {
  return (
    <section className="bg-gomu-cream py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center reveal">
        <Eyebrow className="justify-center">Pré-lancement · Q2 2026</Eyebrow>
        <h2 className="font-display font-bold tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
          Rejoins les <span className="hl">premiers</span> à tester Gomu.
        </h2>
        <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[640px] mx-auto">
          On lance au Q2 2026. Les 500 premiers inscrits bénéficient du tarif
          de lancement à 20€ le premier mois.
        </p>
      </div>

      <div className="max-w-[720px] mx-auto px-4 md:px-8 mt-14 reveal">
        <div className="relative rounded-[28px] bg-gomu-surface-dark text-gomu-cream border-2 border-gomu-yellow p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>
          <div className="relative">
            <div className="text-center">
              <div className="text-[12px] uppercase tracking-cap text-gomu-yellow font-medium">
                Liste d&apos;attente ouverte
              </div>
              <div className="mt-3 font-display italic text-gomu-cream text-[28px] md:text-[36px] leading-[1.15] tracking-display max-w-[480px] mx-auto">
                Notification 72h avant le lancement.
              </div>
            </div>

            <div className="mt-8 h-px bg-gomu-yellow/40"></div>

            <ul className="mt-8 space-y-3.5 text-[15px] max-w-[460px] mx-auto text-left">
              {PERKS.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-gomu-yellow text-gomu-purple-deep w-6 h-6 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <Btn onClick={scrollToOffer} onDark>
                Bloquer ma place à 20€ <ArrowRight size={18} />
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
