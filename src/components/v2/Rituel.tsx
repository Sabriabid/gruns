import { Check, Droplet, Heart } from "lucide-react";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    time: "07:32",
    title: "Tu ouvres un sachet",
    body:
      "Un sachet quotidien, numéroté. Pas de doseur. Pas de cuillère. Pas de shaker.",
    icon: <Droplet size={22} />,
  },
  {
    time: "07:32:15",
    title: "Tu croques les 8 gummies",
    body: "Goût fruits rouges. Texture gommeuse. Base pectine, pas gélatine.",
    icon: <Heart size={22} />,
  },
  {
    time: "07:33",
    title: "C'est fini",
    body:
      "15 à 20 actifs dans le sang. Tu passes à ton café. Rendez-vous demain matin.",
    icon: <Check size={22} />,
  },
];

export default function Rituel() {
  return (
    <section
      id="rituel"
      className="relative bg-gomu-purple-deep text-gomu-cream py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.08] ph-stripes-cream pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="reveal max-w-[900px]">
          <Eyebrow tone="light">Un jour avec Gomu</Eyebrow>
          <h2 className="font-display font-bold tracking-display mt-4 text-[40px] md:text-[64px] lg:text-[76px] leading-[0.98]">
            30 secondes. Une fois.
            <br />
            <span className="hl-on-dark">Tu es tranquille pour la journée.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8 relative">
          <svg
            aria-hidden
            className="hidden md:block absolute top-[68px] left-0 right-0 w-full h-6 text-gomu-yellow/50"
            viewBox="0 0 1200 20"
            preserveAspectRatio="none"
          >
            <line
              x1="80"
              y1="10"
              x2="1120"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          {STEPS.map((s, i) => (
            <div key={i} className="reveal relative">
              <div className="relative flex items-center justify-center w-[120px] h-[120px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gomu-yellow"></div>
                <div className="relative font-display italic text-gomu-purple-deep text-[32px] md:text-[40px] leading-none tracking-display">
                  {i + 1}
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="font-mono text-[12px] uppercase tracking-cap text-gomu-chartreuse">
                  {s.time}
                </div>
                <h3 className="mt-2 font-display text-[24px] md:text-[28px] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-gomu-cream/80 max-w-[280px] mx-auto">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center font-display italic text-[22px] md:text-[28px] text-gomu-yellow max-w-[720px] mx-auto">
          &laquo;&nbsp;Un produit parfait que tu abandonnes en 15 jours ne vaut
          rien.
          <br />
          Un produit que tu prends tous les jours change tout.&nbsp;&raquo;
        </p>
      </div>
    </section>
  );
}
