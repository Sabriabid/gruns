import Eyebrow from "./Eyebrow";
import Sticker from "./Sticker";

const PILLS = ["Vitamine D", "Zinc", "Magnésium", "Multi", "Fer", "Oméga-3"];

const STATS = [
  {
    num: "80%",
    label: "des Français carencés en vitamine D en hiver",
    src: "ANSES",
  },
  { num: "1/2", label: "abandonne sa cure avant la fin", src: "Alcimed" },
  {
    num: "60–100€",
    label: "dépensés chaque mois en multi-pots",
    src: "Estim. pharmacie",
  },
];

export default function Problem() {
  return (
    <section className="bg-gomu-cream py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="reveal max-w-[1100px]">
          <Eyebrow>Pourquoi on a créé Gomu</Eyebrow>
          <h2 className="font-display tracking-display mt-4 text-[40px] md:text-[72px] lg:text-[88px] leading-[0.98] text-gomu-purple-deep">
            Le problème n&apos;est pas toi.
            <br />
            <span className="relative inline-block">
              C&apos;est la{" "}
              <span className="italic">
                <span className="hl">fragmentation</span>
              </span>
              .
              <span className="absolute -right-[110px] top-[20%] hidden lg:block handwritten text-[22px] text-gomu-purple-1 -rotate-6">
                ↙ oui, <i>ce mot exact</i>
              </span>
            </span>
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal relative">
            <div className="relative aspect-square w-full max-w-[520px] rounded-[32px] bg-gomu-paper border border-gomu-purple-deep/15 overflow-hidden p-8 md:p-10">
              <div className="absolute inset-0 ph-stripes opacity-60"></div>
              <div className="relative grid grid-cols-3 grid-rows-2 gap-4 h-full">
                {PILLS.map((lbl) => (
                  <div
                    key={lbl}
                    className="relative rounded-[14px] bg-gomu-cream border border-gomu-purple-deep/20 flex flex-col items-center justify-center text-gomu-purple-deep/80"
                  >
                    <div className="absolute top-1 inset-x-3 h-2 rounded-sm bg-gomu-purple-deep/10"></div>
                    <div className="font-display italic text-[14px] md:text-[17px]">
                      {lbl}
                    </div>
                    <div className="mt-1 text-[9px] uppercase tracking-cap text-gomu-purple-deep/40">
                      60 gél.
                    </div>
                    <svg
                      viewBox="0 0 48 48"
                      className="absolute inset-0 m-auto w-12 h-12 text-rose-500/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="10" y1="10" x2="38" y2="38" />
                      <line x1="38" y1="10" x2="10" y2="38" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6">
              <Sticker rotate={10} color="yellow">
                Non merci.
              </Sticker>
            </div>
          </div>

          <div className="reveal">
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-gomu-ink/90 font-display">
              Pour couvrir tes besoins de base, l&apos;industrie française te
              vend{" "}
              <b className="text-gomu-purple-deep not-italic font-sans">
                5 pots différents
              </b>
              . 60 à 100€ par mois. 15 gélules à orchestrer chaque matin.
            </p>
            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.65] text-gomu-ink/80">
              Résultat :{" "}
              <span className="hl font-medium">
                1 personne sur 2 abandonne sa cure avant la fin.
              </span>{" "}
              Ce n&apos;est pas un problème de volonté — c&apos;est un modèle
              économique conçu pour te faire{" "}
              <i className="font-display">acheter plus</i> et prendre moins.
            </p>
            <p className="mt-6 handwritten text-[22px] text-gomu-purple-1">
              On a fait le compte. Tu paies pour oublier.
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-10 md:gap-4 border-t border-gomu-purple-deep/15 pt-16">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="reveal text-center md:border-l md:first:border-l-0 md:border-gomu-purple-deep/15 md:px-6"
            >
              <div className="font-display italic text-gomu-purple-deep leading-[0.9] text-[96px] md:text-[120px] lg:text-[140px] tracking-display">
                {s.num}
              </div>
              <div className="mt-5 text-[13px] md:text-[14px] leading-[1.5] text-gomu-ink/80 max-w-[260px] mx-auto">
                {s.label}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-cap text-gomu-purple-deep/50">
                Source : {s.src}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
