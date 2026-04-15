import Link from "next/link";
import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge from "@/components/atlas/AtlasBadge";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import AtlasLinkGrid from "@/components/atlas/AtlasLinkGrid";
import { grunsDeepDive, grunsSections } from "@/lib/atlas/gruns";
import { iconMap } from "@/lib/atlas/navigation";
import type { LinkGridItem } from "@/components/atlas/AtlasLinkGrid";
import type { LucideIcon } from "lucide-react";

export default function GrunsOverviewPage() {
  const g = grunsDeepDive;
  const business = g.business;

  const sectionLinks: LinkGridItem[] = grunsSections.map((s) => {
    const Icon = (iconMap as Record<string, LucideIcon>)[s.icon] as LucideIcon | undefined;
    return {
      label: s.title,
      description: s.oneLiner,
      href: `/atlas/gruns/${s.key}`,
      icon: Icon,
      badge:
        s.confidence === "high"
          ? "Confiance haute"
          : s.confidence === "med"
          ? "Confiance partielle"
          : "Scaffold — à remplir",
    };
  });

  const scorecardEntries = Object.entries(g.scorecard) as [keyof typeof g.scorecard, number][];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <AtlasBadge tone="accent">ESPIONNAGE</AtlasBadge>
          <AtlasBadge tone="success">Exit Unilever 1,2 Md$</AtlasBadge>
          <AtlasBadge tone="info">Research phase : {g.meta.researchPhase}</AtlasBadge>
          <AtlasBadge tone="muted">MAJ {g.meta.lastUpdated}</AtlasBadge>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-atlas-text-strong leading-tight">
          Grüns — le cas d&apos;école qu&apos;on <span className="text-atlas-accent">refait en mieux</span>.
        </h1>
        <p className="mt-4 text-atlas-muted max-w-3xl leading-relaxed">
          Fondé en 2023 par {business.founders[0].name}, racheté par Unilever pour 1,2 Md$ en 2025.
          ~$50M levés en 3 ans. 1M+ « membres » revendiqués. 85K+ avis claim on-site vs 2 080 Trustpilot réels.
          Ce hub documente leur système chirurgicalement — business, produit, LPs, funnel, copy, pubs, offre, social proof, email, CX — et identifie les failles à exploiter.
        </p>
      </section>

      {/* Scorecard */}
      <section>
        <AtlasSectionHeader
          kicker="Scorecard"
          title="Où ils sont forts. Où on les bat."
          description="Notation qualitative 0-10 par axe — pour cadrer les priorités de contre-stratégie."
        />
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {scorecardEntries.map(([k, v]) => (
            <AtlasCard key={k} className="!p-4">
              <div className="text-[11px] uppercase tracking-wider text-atlas-muted font-semibold mb-3">
                {k}
              </div>
              <div className="text-3xl font-bold text-atlas-text-strong tabular-nums">
                {v}
                <span className="text-atlas-muted text-base">/10</span>
              </div>
              <div className="mt-3">
                <AtlasMiniBar value={v} showValue={false} tone={v >= 8 ? "danger" : v >= 6 ? "warn" : "success"} />
              </div>
            </AtlasCard>
          ))}
        </div>
      </section>

      {/* Key facts quickview */}
      <section>
        <AtlasSectionHeader kicker="Key facts" title="Faits saillants vérifiés" />
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <AtlasCard variant="info">
            <div className="text-[11px] uppercase tracking-wider text-atlas-info font-semibold mb-3">
              Trajectoire
            </div>
            <ul className="space-y-2 text-sm text-atlas-text">
              <li>🪴 Idée née été 2022 (shake greens en poudre)</li>
              <li>💰 F&F $400K → Pre-seed $1.8M (août 2023)</li>
              <li>🚀 Lancement Amazon déc. 2023</li>
              <li>🌱 Seed $6M (fév. 2024)</li>
              <li>🏬 Distribution Sprouts, Target, Walmart</li>
              <li>📈 Series B à $500M valorisation (2025)</li>
              <li>🔥 Exit Unilever $1,2 Md (2025)</li>
            </ul>
          </AtlasCard>
          <AtlasCard variant="accent">
            <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
              Produit & market
            </div>
            <ul className="space-y-2 text-sm text-atlas-text">
              <li>💊 60+ ingrédients · 21 vit/min · 6g fibre prébiotique</li>
              <li>📦 28 sachets/boîte · 2 goûts · 2 options sucre</li>
              <li>💵 $59.99 sub vs $79.99 OT (-25%)</li>
              <li>🌟 Claim : 4.8★ 85K+ avis on-site</li>
              <li>⚠️ Réel Trustpilot : 4.6★ 2 080 avis</li>
              <li>🎿 Celebrity : Shaun White (3× Olympic gold)</li>
              <li>📰 PR : theSkimm, Glamour, Bon Appétit</li>
            </ul>
          </AtlasCard>
        </div>
      </section>

      {/* Top weaknesses teaser */}
      <section>
        <AtlasSectionHeader
          kicker="Battle card"
          title="Faiblesses exploitables (top 3)"
          description="Les leviers immédiats pour différencier Gomu vs Grüns."
        />
        <div className="mt-6 space-y-3">
          {g.weaknesses
            .filter((w) => w.priority >= 4)
            .slice(0, 3)
            .map((w) => (
              <AtlasCallout
                key={w.id}
                tone="opportunity"
                kicker={`P${w.priority} · ${w.category.toUpperCase()}`}
                title={w.weakness}
              >
                <div className="mt-1">
                  <span className="text-atlas-success font-semibold">→ Avantage Gomu : </span>
                  {w.gomuAdvantage}
                </div>
                {w.exploitLPSlugs.length > 0 && (
                  <div className="mt-2 flex items-center gap-1 flex-wrap">
                    <span className="text-[11px] text-atlas-muted">LPs : </span>
                    {w.exploitLPSlugs.map((slug) => (
                      <code key={slug} className="text-[11px] text-atlas-accent font-mono">
                        /lp/{slug}
                      </code>
                    ))}
                  </div>
                )}
              </AtlasCallout>
            ))}
          <div>
            <Link
              href="/atlas/gruns/weaknesses"
              className="text-atlas-accent hover:underline text-sm font-medium"
            >
              → Voir les {g.weaknesses.length} faiblesses (battle card complète)
            </Link>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section>
        <AtlasSectionHeader
          kicker="Deep-dive"
          title="12 sections d'espionnage"
          description="Chaque section est une fiche de renseignement autonome — data structurée + sources + takeaways."
        />
        <div className="mt-6">
          <AtlasLinkGrid items={sectionLinks} cols={3} />
        </div>
      </section>
    </div>
  );
}
