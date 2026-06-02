import { Check } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { renderRich, type RichText } from "@/components/lp-v2/richText";

const DEFAULT_FRAMING: RichText = [
  [
    "Chaque lot analysé par Eurofins. Résultats publiés en ligne, accessibles par numéro de lot. Aucune marque française de gummies ne fait ça aujourd'hui.",
  ],
];

const LINES = [
  { k: "Vitamine D3", v: "25 µg" },
  { k: "Vitamine C (acérola)", v: "80 mg" },
  { k: "Zinc bisglycinate", v: "2.5 mg" },
  { k: "L-5-MTHF (folate actif)", v: "400 µg" },
  { k: "KSM-66 Ashwagandha", v: "300 mg" },
  { k: "Plomb", v: "<0.01 ppm" },
  { k: "Mercure", v: "<0.005 ppm" },
];

const CHECKLIST = [
  "Dosages réels vérifiés pour chaque vitamine et minéral",
  "99+ pesticides testés",
  "4 métaux lourds (plomb, cadmium, mercure, arsenic)",
  "9 contaminants microbiens",
  "Publication systématique, sans filtre ni tri",
];

export default function Transparence({
  framingLine = DEFAULT_FRAMING,
}: {
  framingLine?: RichText;
} = {}) {
  return (
    <section className="bg-gomu-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="reveal max-w-[1100px]">
          <Eyebrow>Transparence radicale</Eyebrow>
          <h2 className="font-display tracking-display mt-4 text-[40px] md:text-[64px] lg:text-[80px] leading-[0.98] text-gomu-purple-deep">
            Ce qui est sur l&apos;étiquette
            <br />
            <span className="italic">
              <span className="hl">est dans</span>
            </span>{" "}
            le produit.
          </h2>
          <p className="mt-7 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/80 max-w-[680px]">
            {renderRich(framingLine, { onDark: false })}
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-16 items-center">
          <div className="reveal">
            <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-cap text-gomu-purple-deep/55 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gomu-purple-deep/40"></span>
              Exemple illustratif
            </div>
            <div className="rounded-3xl bg-gomu-paper text-gomu-ink overflow-hidden border border-gomu-purple-deep/10 shadow-[0_30px_60px_-30px_rgba(59,10,94,0.25)]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gomu-purple-deep/15 bg-gomu-cream">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gomu-purple-deep text-gomu-cream flex items-center justify-center font-display italic text-[14px]">
                  E
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-cap text-gomu-purple-deep/70">
                    Eurofins · Rapport d&apos;analyse
                  </div>
                  <div className="font-mono text-[13px] font-medium">
                    LOT #GMU-2026-001
                  </div>
                </div>
              </div>
              <div className="text-[11px] uppercase tracking-cap text-gomu-purple-deep/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Conforme
              </div>
            </div>
            <div className="p-6 md:p-7">
              <div className="font-mono text-[12.5px] md:text-[13px] leading-[1.9] text-gomu-ink/90 space-y-0.5">
                {LINES.map((l, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="shrink-0">{l.k}</span>
                    <span className="flex-1 border-b border-dotted border-gomu-purple-deep/25 translate-y-[-3px]"></span>
                    <span className="shrink-0 tabular-nums">{l.v}</span>
                    <Check size={14} className="text-emerald-600" />
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>

          <div className="reveal">
            <div className="text-[12px] uppercase tracking-cap text-gomu-purple-deep/70 mb-5 font-medium">
              Ce qu&apos;on teste, lot par lot
            </div>
            <ul className="space-y-3.5">
              {CHECKLIST.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[16px] leading-[1.5] text-gomu-ink/90"
                >
                  <span className="mt-0.5 rounded-full bg-gomu-purple-deep text-gomu-cream w-6 h-6 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <figure className="mt-10 pl-6 border-l-[3px] border-gomu-purple-deep">
              <blockquote className="font-display italic text-[26px] md:text-[32px] leading-[1.2] text-gomu-purple-deep tracking-display">
                &laquo;&nbsp;On ne te demande pas de nous croire.
                <br />
                On te demande de <span className="hl">vérifier</span>.&nbsp;&raquo;
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
