import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/v2/PageShell";
import PageHero from "@/components/v2/PageHero";
import Btn from "@/components/v2/Btn";
import { blogSlugs, getArticle } from "@/lib/blog";

// Static export: only the params below are emitted; any other slug 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Gomu`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — Gomu`,
      description: article.excerpt,
      locale: "fr_FR",
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.excerpt}
      />

      <article className="bg-gomu-cream py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-4 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gomu-purple-deep underline underline-offset-4 decoration-gomu-purple-deep/30 hover:decoration-gomu-purple-deep"
          >
            ← Retour au blog
          </Link>

          <div className="mt-8 md:mt-10">
            {article.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-display font-bold text-[26px] md:text-[34px] leading-[1.15] text-gomu-purple-deep mt-12 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="mt-5 space-y-3">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[17px] md:text-[18px] leading-[1.6] text-gomu-ink/85"
                      >
                        <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-gomu-purple-deep shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="text-[17px] md:text-[18px] leading-[1.7] text-gomu-ink/85 mt-5"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-14 md:mt-16 border-t border-gomu-purple-deep/15 pt-8">
            <div className="text-[13px] uppercase tracking-cap text-gomu-purple-deep/60 font-medium">
              {article.date} · {article.readingMinutes} min de lecture
            </div>
            <div className="mt-6">
              <Btn href="/#offre">
                Rejoindre la liste <ArrowRight size={18} />
              </Btn>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
