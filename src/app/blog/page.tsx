import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/v2/PageShell";
import PageHero from "@/components/v2/PageHero";
import Eyebrow from "@/components/v2/Eyebrow";
import { ARTICLES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Gomu",
  description:
    "Le journal Gomu : on t'explique la formulation, les ingrédients et la science de nos gummies, sans bullshit et sans promesse miracle.",
  openGraph: {
    title: "Blog — Gomu",
    description:
      "Le journal Gomu : on t'explique la formulation, les ingrédients et la science de nos gummies, sans bullshit et sans promesse miracle.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Le journal"
        title={
          <>
            On t&apos;explique tout,{" "}
            <span className="hl-on-dark">sans bullshit</span>.
          </>
        }
        subtitle="Formulation, ingrédients, biodisponibilité. Des articles éducatifs et prudents — pas de promesse miracle, pas de jargon inutile."
      />

      <section className="bg-gomu-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="reveal grid gap-7 md:gap-8 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <a
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card-pop bg-gomu-paper border border-gomu-purple-deep/10 p-7 md:p-8 flex flex-col transition-transform duration-200 hover:-translate-y-1 group"
              >
                <Eyebrow className="mb-4">{a.category}</Eyebrow>
                <h2 className="font-display font-bold tracking-display text-[24px] md:text-[26px] leading-[1.1] text-gomu-purple-deep">
                  {a.title}
                </h2>
                <p className="mt-4 text-[15.5px] md:text-[16px] leading-[1.6] text-gomu-ink/80 flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-gomu-purple-deep/15 pt-5">
                  <span className="text-[13px] uppercase tracking-cap text-gomu-purple-deep/60 font-medium">
                    {a.readingMinutes} min · {a.date}
                  </span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gomu-purple-deep text-gomu-cream transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
