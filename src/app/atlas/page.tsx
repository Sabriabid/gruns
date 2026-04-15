import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasStatBlock from "@/components/atlas/AtlasStatBlock";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge from "@/components/atlas/AtlasBadge";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import AtlasLinkGrid from "@/components/atlas/AtlasLinkGrid";
import { dashboardSnapshot } from "@/lib/atlas/dashboard";
import { atlasMeta } from "@/lib/atlas/meta";
import {
  Flame,
  Target,
  Activity,
  Rocket,
  Package,
  Megaphone,
} from "lucide-react";
import type { LinkGridItem } from "@/components/atlas/AtlasLinkGrid";

function formatEUR(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M€`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K€`;
  return `${n}€`;
}

export default function AtlasOverviewPage() {
  const snap = dashboardSnapshot;
  const progressPct = (snap.northStar.currentMRR / snap.northStar.targetMRR) * 100;

  const quickLinks: LinkGridItem[] = [
    {
      label: "Brand hub",
      description:
        "Mission, positionnement, One Belief, UMP/UMS, avatars, angles, offre, garantie, voix du client.",
      href: "/atlas/brand",
      icon: Flame,
    },
    {
      label: "Espionnage Grüns",
      description:
        "12 sections deep-dive : business, produit, 90+ LPs, funnel, offre, copy, ads, social proof, SEO, email, CX, faiblesses.",
      href: "/atlas/gruns",
      icon: Target,
      badge: "Cœur du projet",
    },
    {
      label: "Status projet",
      description:
        "Kanban des 10 LPs, stack tech, état de consommation des 17 docs brand.",
      href: "/atlas/status",
      icon: Activity,
    },
    {
      label: "Roadmap 100M€",
      description:
        "North Star décomposée, initiatives priorisées RICE, risques, Q2/Q3/Q4 2026.",
      href: "/atlas/roadmap",
      icon: Rocket,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero North Star */}
      <section>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <AtlasBadge tone="accent">ATLAS — Command Center</AtlasBadge>
          <AtlasBadge tone="muted">{atlasMeta.version}</AtlasBadge>
          <AtlasBadge tone="info">MAJ {snap.asOf}</AtlasBadge>
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold text-atlas-text-strong leading-tight">
          {atlasMeta.northStar.tagline}
        </h1>
        <p className="mt-3 text-atlas-muted max-w-3xl leading-relaxed">
          Tout le savoir Gomu au même endroit. Brand, espionnage Grüns, status
          projet, roadmap 100M€. Un hub interne, non-indexé, éditable. Pour ne
          rien laisser au hasard.
        </p>

        <div className="mt-6">
          <AtlasCard variant="accent">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold">
                  North Star — Revenu cible {atlasMeta.northStar.targetYear}
                </div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-atlas-text-strong tabular-nums">
                    {formatEUR(snap.northStar.targetEUR)}
                  </span>
                  <span className="text-atlas-muted">/ an</span>
                </div>
                <div className="mt-1 text-sm text-atlas-muted">
                  = {formatEUR(snap.northStar.targetMRR)} MRR · ~280K abonnés · CAC &lt; 45€
                </div>
              </div>
              <div className="w-full md:w-80">
                <AtlasMiniBar
                  label="Progression MRR"
                  value={progressPct}
                  max={100}
                  showValue
                  tone={progressPct < 10 ? "danger" : progressPct < 50 ? "warn" : "success"}
                />
                <div className="mt-2 text-[11px] text-atlas-muted">
                  {formatEUR(snap.northStar.currentMRR)} actuel / {formatEUR(snap.northStar.targetMRR)} cible
                </div>
              </div>
            </div>
          </AtlasCard>
        </div>
      </section>

      {/* KPIs grid */}
      <section>
        <AtlasSectionHeader
          kicker="KPIs"
          title="Snapshot"
          description="État actuel. Le rouge signale des données manquantes ou des blockers à lever."
        />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {snap.kpis.map((k) => (
            <AtlasStatBlock
              key={k.key}
              label={k.label}
              value={k.value}
              unit={k.unit}
              status={k.status}
              hint={k.hint}
              delta={k.delta}
              deltaLabel={k.deltaLabel}
              trend={k.trend}
            />
          ))}
        </div>
      </section>

      {/* Alerts */}
      <section>
        <AtlasSectionHeader
          kicker="Bottlenecks"
          title={`Alertes — ${snap.alerts.length}`}
          description="À lever en priorité. Classé par sévérité."
        />
        <div className="mt-6 space-y-3">
          {snap.alerts.map((a, i) => (
            <AtlasCallout
              key={i}
              tone={a.severity === "crit" ? "crit" : a.severity === "warn" ? "warn" : "info"}
              title={a.title}
              kicker={
                a.severity === "crit"
                  ? "CRITIQUE"
                  : a.severity === "warn"
                  ? "Attention"
                  : "Info"
              }
            >
              {a.body}
              {a.link && (
                <div className="mt-2">
                  <a
                    href={a.link.href}
                    className="text-atlas-accent hover:underline font-medium"
                  >
                    → {a.link.label}
                  </a>
                </div>
              )}
            </AtlasCallout>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section>
        <AtlasSectionHeader kicker="Explorer" title="Les 4 hubs de l'Atlas" />
        <div className="mt-6">
          <AtlasLinkGrid items={quickLinks} cols={2} />
        </div>
      </section>

      {/* Recent activity */}
      <section>
        <AtlasSectionHeader
          kicker="Journal"
          title="Derniers mouvements"
          description="Ce qui a changé récemment dans le projet."
        />
        <AtlasCard className="mt-6">
          <ul className="divide-y divide-atlas-border">
            {snap.recentActivity.map((a, i) => (
              <li key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                <span className="text-[11px] text-atlas-muted tabular-nums w-20 shrink-0 pt-0.5">
                  {a.date}
                </span>
                <AtlasBadge
                  tone={
                    a.type === "lp"
                      ? "info"
                      : a.type === "ad"
                      ? "accent"
                      : a.type === "content"
                      ? "success"
                      : "muted"
                  }
                >
                  {a.type === "lp" ? (
                    <Package size={10} />
                  ) : a.type === "ad" ? (
                    <Megaphone size={10} />
                  ) : a.type === "content" ? (
                    <Flame size={10} />
                  ) : null}
                  {a.type}
                </AtlasBadge>
                <span className="flex-1 text-sm text-atlas-text">{a.label}</span>
              </li>
            ))}
          </ul>
        </AtlasCard>
      </section>
    </div>
  );
}
