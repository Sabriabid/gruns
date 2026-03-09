import { content } from "@/lib/content";
import { Heart, Shield, Zap, Brain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  gut: <Heart className="text-brand-green" size={32} />,
  shield: <Shield className="text-brand-green" size={32} />,
  energy: <Zap className="text-brand-green" size={32} />,
  brain: <Brain className="text-brand-green" size={32} />,
};

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-4">
            {content.benefits.title}
          </h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            {content.benefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Center gummy bear illustration */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="w-48 h-56 lg:w-56 lg:h-64 flex items-center justify-center">
              <div className="text-8xl lg:text-9xl opacity-90">🐻</div>
            </div>
          </div>

          {content.benefits.items.map((item, i) => (
            <div
              key={i}
              className={`text-center p-8 ${
                i % 2 === 0 ? "md:pr-32" : "md:pl-32"
              }`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green/10 mb-4">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-2">
                {item.title}
              </h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
