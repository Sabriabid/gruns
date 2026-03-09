"use client";

import { content } from "@/lib/content";

export default function Statistics() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
          {/* Text side */}
          <div className="flex-1 p-5 sm:p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-green mb-3">
              {content.statistics.title}
            </h2>
            <p className="text-brand-dark/60 mb-10">
              {content.statistics.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              {content.statistics.stats.map((stat, i) => (
                <div key={i} className="flex-1">
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-green">
                    {stat.value}
                  </span>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#produit"
              className="inline-block bg-brand-green text-white font-bold px-8 py-3.5 rounded-[10px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
            >
              {content.statistics.cta}
            </a>
          </div>

          {/* Image side */}
          <div className="flex-1 bg-brand-green min-h-[200px] sm:min-h-[300px] flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-white p-8">
              <div className="text-7xl mb-4">🫴</div>
              <span className="text-3xl font-bold text-brand-yellow">
                {content.brand}
              </span>
              <p className="text-white/60 text-sm mt-2">
                Superfoods Greens Gummies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
