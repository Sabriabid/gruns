import { Check, X } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Sticker from "./Sticker";

type Row = {
  label: string;
  tag: string;
  verdict: string;
  good: boolean;
  sticker: React.ReactNode | null;
};

const ROWS: Row[] = [
  {
    label: "Le sachet Gomu",
    tag: "NOUS",
    verdict: "Un sachet. 15-20 actifs. 29€/mois.",
    good: true,
    sticker: (
      <>
        Oui, <i>tout</i> ici.
      </>
    ),
  },
  {
    label: "Gummies pharmacie",
    tag: "PLACEBO",
    verdict: "2-3 vitamines à dosages symboliques. Sucre.",
    good: false,
    sticker: null,
  },
  {
    label: "Cure personnalisée",
    tag: "USINE À GAZ",
    verdict: "45-60€/mois. 6 à 10 gélules à trier.",
    good: false,
    sticker: null,
  },
  {
    label: "Multi-pots pharmacie",
    tag: "DÉFAITE",
    verdict: "5 pots, 60-100€/mois, 1 sur 2 abandonne.",
    good: false,
    sticker: "Le piège.",
  },
];

export default function Comparatif() {
  return (
    <section className="bg-gomu-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="reveal max-w-[1100px]">
          <Eyebrow>Le tour d&apos;horizon</Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[40px] md:text-[64px] lg:text-[80px] leading-[0.98] text-gomu-purple-deep">
            Pourquoi Gomu est <span className="hl">différent</span> — et pas
            juste un de plus.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:gap-5">
          {ROWS.map((r, i) => (
            <div
              key={i}
              className={`reveal relative card-pop border overflow-hidden ${
                r.good
                  ? "bg-gomu-surface-dark text-gomu-cream border-gomu-surface-dark"
                  : "bg-gomu-paper text-gomu-ink border-black/5"
              }`}
            >
              <div className="grid md:grid-cols-[1fr_auto_1.3fr_auto] items-center gap-4 md:gap-8 px-6 md:px-10 py-7 md:py-8">
                <div>
                  <div
                    className={`text-[11px] uppercase tracking-cap ${
                      r.good ? "text-gomu-yellow" : "text-gomu-purple-deep/60"
                    }`}
                  >
                    {r.tag}
                  </div>
                  <div className="mt-1 font-display italic text-[26px] md:text-[36px] leading-[1.05] tracking-display">
                    {r.label}
                  </div>
                </div>
                <div
                  className={`hidden md:block h-16 w-px ${
                    r.good ? "bg-gomu-cream/20" : "bg-gomu-purple-deep/15"
                  }`}
                ></div>
                <p
                  className={`text-[16px] md:text-[18px] leading-[1.5] ${
                    r.good ? "text-gomu-cream/90" : "text-gomu-ink/80"
                  } font-display`}
                >
                  {r.verdict}
                </p>
                <div className="flex items-center justify-end">
                  {r.good ? (
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gomu-yellow text-gomu-purple-deep">
                      <Check size={26} strokeWidth={2.5} />
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gomu-ink/5 text-gomu-ink/40">
                      <X size={22} strokeWidth={2.25} />
                    </span>
                  )}
                </div>
              </div>
              {r.sticker && (
                <div className="absolute top-3 right-4 md:top-4 md:right-16">
                  <Sticker
                    rotate={r.good ? 6 : -8}
                    color={r.good ? "chartreuse" : "yellow"}
                    className="!text-[14px] md:!text-[16px]"
                  >
                    {r.sticker}
                  </Sticker>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
