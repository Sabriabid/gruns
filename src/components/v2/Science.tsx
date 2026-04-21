import Eyebrow from "./Eyebrow";

type Card = {
  kicker: string;
  body: React.ReactNode;
  stat: string;
};

const CARDS: Card[] = [
  {
    kicker: "Zinc bisglycinate vs zinc oxyde",
    body: (
      <>
        Ce qu&apos;il y a dans Gomu : <b>zinc bisglycinate</b>. Ce qu&apos;il y
        a ailleurs : souvent du zinc oxyde, moins cher à produire. Absorption
        jusqu&apos;à <span className="hl">3× supérieure</span>.
      </>
    ),
    stat: "3×",
  },
  {
    kicker: "L-5-MTHF vs acide folique",
    body: (
      <>
        <span className="hl">40% de la population européenne</span> porte la
        mutation du gène MTHFR — convertit mal l&apos;acide folique
        synthétique. On utilise directement la forme active.
      </>
    ),
    stat: "40%",
  },
  {
    kicker: "KSM-66 Ashwagandha",
    body: (
      <>
        La forme la plus étudiée : <span className="hl">24+ essais cliniques</span>,
        standardisée 5% withanolides. Dosage déclaré, pas de
        &laquo;&nbsp;proprietary blend&nbsp;&raquo;.
      </>
    ),
    stat: "24+",
  },
];

export default function Science() {
  return (
    <section className="bg-gomu-cream py-20 md:py-32 border-t border-gomu-purple-deep/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="reveal max-w-[1000px]">
          <Eyebrow>La forme &gt; le dosage brut</Eyebrow>
          <h2 className="font-display tracking-display mt-4 text-[40px] md:text-[64px] lg:text-[76px] leading-[0.98] text-gomu-purple-deep">
            La <span className="italic">forme</span> compte plus
            <br />
            que le dosage brut.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className="reveal rounded-3xl bg-gomu-paper border border-black/5 p-8 md:p-9 flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-[12px] uppercase tracking-cap text-gomu-purple-deep/70 font-medium">
                  {c.kicker}
                </div>
                <div className="font-display italic text-gomu-purple-deep text-[44px] md:text-[56px] leading-none tracking-display">
                  {c.stat}
                </div>
              </div>
              <div className="mt-5 h-px bg-gomu-purple-deep/10"></div>
              <p className="mt-5 text-[15.5px] leading-[1.65] text-gomu-ink/90">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
