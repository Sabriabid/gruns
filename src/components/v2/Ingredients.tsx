import Eyebrow from "./Eyebrow";

type Row = {
  name: string;
  form: string;
  role: string;
  dose: string;
  ajr: string;
  note: string;
};

const LIST: Row[] = [
  {
    name: "Vitamine D3",
    form: "Cholécalciférol",
    role: "Immunité · os",
    dose: "25 µg",
    ajr: "500%",
    note: "80% des Français carencés en hiver.",
  },
  {
    name: "Vitamine C",
    form: "Acérola bio",
    role: "Antioxydant · énergie",
    dose: "80 mg",
    ajr: "100%",
    note: "Forme naturelle, pas synthétique.",
  },
  {
    name: "Folate (B9)",
    form: "L-5-MTHF (Quatrefolic®)",
    role: "Sang · neurones",
    dose: "400 µg",
    ajr: "200%",
    note: "Forme active — compatible MTHFR.",
  },
  {
    name: "Vitamine B12",
    form: "Méthylcobalamine",
    role: "Énergie · nerfs",
    dose: "5 µg",
    ajr: "200%",
    note: "Bioactive, pas de cyanocobalamine.",
  },
  {
    name: "Vitamine B6",
    form: "Pyridoxal-5-phosphate (P5P)",
    role: "Neurotransmetteurs",
    dose: "1.4 mg",
    ajr: "100%",
    note: "Forme coenzyme directe.",
  },
  {
    name: "Zinc",
    form: "Bisglycinate chélaté",
    role: "Immunité · peau",
    dose: "2.5 mg",
    ajr: "25%",
    note: "Jusqu'à 3× mieux absorbé que l'oxyde.",
  },
  {
    name: "Sélénium",
    form: "Sélénométhionine",
    role: "Antioxydant · thyroïde",
    dose: "27.5 µg",
    ajr: "50%",
    note: "Forme organique, biodisponible.",
  },
  {
    name: "Iode",
    form: "Iodure de potassium",
    role: "Thyroïde",
    dose: "37.5 µg",
    ajr: "25%",
    note: "Dosage français (pas US).",
  },
  {
    name: "Magnésium",
    form: "Oxyde + bisglycinate",
    role: "Muscle · sommeil",
    dose: "93 mg",
    ajr: "25%",
    note: "Compliance > dosage max.",
  },
  {
    name: "Ashwagandha",
    form: "KSM-66® standardisé 5%",
    role: "Stress · récup.",
    dose: "300 mg",
    ajr: "—",
    note: "24+ essais cliniques publiés.",
  },
  {
    name: "Rhodiola rosea",
    form: "Extrait 3% rosavines",
    role: "Énergie mentale",
    dose: "150 mg",
    ajr: "—",
    note: "Adaptogène documenté.",
  },
  {
    name: "Inuline",
    form: "Chicorée bio",
    role: "Fibres prébiotiques",
    dose: "500 mg",
    ajr: "—",
    note: "Nourrit le microbiote.",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-gomu-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="reveal max-w-[1100px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>La formule, sans langue de bois</Eyebrow>
            <h2 className="font-display tracking-display mt-4 text-[40px] md:text-[64px] lg:text-[80px] leading-[0.98] text-gomu-purple-deep">
              Chaque actif. Chaque <span className="italic">forme</span>.
              <br />
              Chaque dose.
            </h2>
          </div>
          <p className="text-[15px] md:text-[16px] leading-[1.6] text-gomu-ink/75 max-w-[360px] font-display italic">
            Pas de proprietary blend. Pas de &laquo;&nbsp;complexe vitaminé&nbsp;&raquo;. Les
            vrais noms, les vraies quantités.
          </p>
        </div>

        <div className="mt-12 reveal rounded-3xl bg-gomu-paper border border-black/5 overflow-hidden">
          <div className="hidden md:grid grid-cols-[1.4fr_1.4fr_1.2fr_0.8fr_0.6fr] gap-4 px-8 py-5 border-b border-gomu-purple-deep/15 text-[11px] uppercase tracking-cap text-gomu-purple-deep/60">
            <span>Actif</span>
            <span>Forme</span>
            <span>Rôle</span>
            <span>Par sachet</span>
            <span className="text-right">AJR</span>
          </div>
          {LIST.map((it, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 md:grid-cols-[1.4fr_1.4fr_1.2fr_0.8fr_0.6fr] gap-x-4 gap-y-2 px-5 md:px-8 py-5 border-b last:border-b-0 border-gomu-purple-deep/10 ${
                i % 2 === 0 ? "bg-gomu-paper" : "bg-gomu-cream/50"
              } hover:bg-gomu-yellow/20 transition-colors`}
            >
              <div className="col-span-2 md:col-span-1">
                <div className="font-display italic text-[20px] md:text-[22px] leading-none text-gomu-purple-deep">
                  {it.name}
                </div>
                <div className="mt-1 md:hidden text-[13px] text-gomu-ink/70">
                  {it.form}
                </div>
              </div>
              <div className="hidden md:block text-[14px] text-gomu-ink/85 leading-[1.4]">
                {it.form}
              </div>
              <div className="text-[13px] md:text-[14px] text-gomu-ink/70 leading-[1.4]">
                <span className="md:hidden text-[10px] uppercase tracking-cap text-gomu-purple-deep/50 block">
                  Rôle
                </span>
                {it.role}
              </div>
              <div className="text-[13px] md:text-[14px] font-mono text-gomu-purple-deep font-medium">
                <span className="md:hidden text-[10px] uppercase tracking-cap text-gomu-purple-deep/50 block font-sans">
                  Dose
                </span>
                {it.dose}
              </div>
              <div className="col-span-2 md:col-span-1 md:text-right text-[12px] text-gomu-ink/60 font-mono flex md:block items-baseline gap-2">
                <span className="uppercase tracking-cap text-[10px] text-gomu-purple-deep/50">
                  AJR
                </span>
                <span>{it.ajr}</span>
                <span className="md:hidden flex-1 text-right italic font-sans text-gomu-ink/60 text-[12px]">
                  {it.note}
                </span>
              </div>
              <p className="hidden md:block col-span-5 -mt-1 text-[13px] italic text-gomu-ink/55 font-display">
                ↳ {it.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[12px] text-gomu-ink/55 max-w-[900px]">
          Vitamines dosées à 100% des AJR · minéraux à 25% (contrainte format
          gummy, compensée par les formes biodisponibles). Ashwagandha
          déconseillé aux personnes souffrant de troubles thyroïdiens ou
          hépatiques, aux femmes enceintes ou allaitantes (avis ANSES, avril
          2024).
        </p>
      </div>
    </section>
  );
}
