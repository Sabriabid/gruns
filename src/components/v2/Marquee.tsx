const DEFAULT_ITEMS = [
  "Halal & Vegan",
  "Tests Eurofins publiés",
  "Pectine de fruit",
  "Zéro proprietary blend",
  "15-20 actifs",
  "Dosages cliniques",
  "Zinc bisglycinate",
  "L-5-MTHF",
  "KSM-66 Ashwagandha",
  "Sélénométhionine",
  "Méthylcobalamine",
  "Sans sucre ajouté",
  "Sans gluten",
  "Sans gélatine",
];

function Row({ items }: { items: string[] }) {
  return (
    <>
      {items.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-6 px-6">
          <span className="font-display font-semibold text-[26px] md:text-[34px] leading-none tracking-display">
            {t}
          </span>
          <span className="text-gomu-purple-deep/60">✦</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] } = {}) {
  return (
    <section
      aria-hidden
      className="bg-gomu-chartreuse text-gomu-purple-deep border-y-2 border-gomu-purple-deep overflow-hidden py-4 md:py-5"
    >
      <div className="marquee-track whitespace-nowrap">
        <div className="inline-flex items-center">
          <Row items={items} />
        </div>
        <div className="inline-flex items-center">
          <Row items={items} />
        </div>
      </div>
    </section>
  );
}
