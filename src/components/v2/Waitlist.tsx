"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Btn from "./Btn";
import Eyebrow from "./Eyebrow";
import { scrollToOffer } from "./scrollToOffer";

const PERKS = [
  "Premier mois à 20€ au lieu de 29€",
  "Tarif bloqué à vie",
  "Notification 72h avant l'ouverture officielle",
  "Accès aux rapports Eurofins dès le jour du lancement",
];

export default function Waitlist({ count }: { count: number }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplayed(Math.round(count * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [count]);

  const pct = Math.min(100, (count / 500) * 100);

  return (
    <section className="bg-gomu-cream py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center reveal">
        <Eyebrow className="justify-center">Pré-lancement · Q2 2026</Eyebrow>
        <h2 className="font-display tracking-display mt-4 text-[36px] md:text-[56px] lg:text-[64px] leading-[1] text-gomu-purple-deep">
          Rejoins les <span className="italic">premiers</span> à tester Gomu.
        </h2>
        <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[640px] mx-auto">
          On lance au Q2 2026. Les 500 premiers inscrits bénéficient du tarif
          de lancement à 20€ le premier mois — et bloquent leur prix à vie.
        </p>
      </div>

      <div ref={ref} className="max-w-[720px] mx-auto px-4 md:px-8 mt-14 reveal">
        <div className="relative rounded-[28px] bg-gomu-purple-deep text-gomu-cream border-2 border-gomu-yellow p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-display italic text-gomu-yellow text-[72px] md:text-[96px] leading-none tracking-display tabular-nums">
                {displayed}
              </span>
              <span className="font-display text-gomu-cream/60 text-[28px] md:text-[36px]">
                / 500
              </span>
            </div>
            <div className="mt-3 text-[12px] uppercase tracking-cap text-gomu-cream/80 text-center">
              Personnes déjà inscrites
            </div>

            <div className="mt-8 h-1.5 rounded-full bg-gomu-cream/15 overflow-hidden">
              <div
                className="h-full bg-gomu-yellow grow-bar"
                style={
                  {
                    "--w": `${pct}%`,
                    width: `${pct}%`,
                  } as React.CSSProperties
                }
              ></div>
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
