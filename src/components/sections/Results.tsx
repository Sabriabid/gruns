import { content } from "@/lib/content";

export default function Results() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-brand-light-yellow rounded-3xl p-5 sm:p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-4">
              {content.results.title}
            </h2>
            <p className="text-brand-dark/60 max-w-3xl mx-auto">
              {content.results.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {content.results.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-green">
                  {stat.value}
                </span>
                <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-green/10 pt-4">
            <p className="text-center text-xs text-brand-dark/40 italic">
              {content.results.footnote}
            </p>
          </div>

          <div className="border-t border-brand-green/10 mt-6 pt-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-green text-center mb-4">
              {content.quality.title}
            </h3>
            <p className="text-brand-dark/60 text-center max-w-2xl mx-auto mb-8">
              {content.quality.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              {content.quality.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-bold">
                    ✕
                  </span>
                  <span className="text-sm text-brand-dark/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
