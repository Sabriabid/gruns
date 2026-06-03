import {
  Cherry,
  Citrus,
  Sprout,
  Sun,
  ShieldCheck,
  Brain,
  Leaf,
  Droplet,
  Moon,
} from "lucide-react";
import Eyebrow from "./Eyebrow";

// gruns "Tastes Like" / "Packed With" emoji-chip rows — here with lucide icons
// (consistent with the rest of v2; Gomu brand brief = SVG, not emoji).
const TASTE = [
  { icon: <Cherry size={16} />, label: "Fruits rouges" },
  { icon: <Citrus size={16} />, label: "Acidulé léger" },
  { icon: <Sprout size={16} />, label: "Base pectine de fruit" },
];

const PACKED = [
  { icon: <Sun size={16} />, label: "Vitamine D3" },
  { icon: <ShieldCheck size={16} />, label: "Zinc bisglycinate" },
  { icon: <Brain size={16} />, label: "B12 méthylée" },
  { icon: <Leaf size={16} />, label: "Ashwagandha KSM-66" },
  { icon: <Droplet size={16} />, label: "Inuline prébiotique" },
  { icon: <Moon size={16} />, label: "Magnésium" },
];

function Row({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ReactNode; label: string }[];
}) {
  return (
    <div className="reveal">
      <Eyebrow>{title}</Eyebrow>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((it, i) => (
          <span key={i} className="chip text-gomu-ink">
            <span className="text-gomu-purple-1">{it.icon}</span>
            {it.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TastesLike() {
  return (
    <section className="bg-gomu-cream py-20 md:py-28 border-t border-gomu-purple-deep/10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16">
        <Row title="Le goût" items={TASTE} />
        <Row title="Dedans" items={PACKED} />
      </div>
    </section>
  );
}
