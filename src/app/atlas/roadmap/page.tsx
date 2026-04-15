import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasStatBlock from "@/components/atlas/AtlasStatBlock";
import AtlasBadge, { mapStatusToTone } from "@/components/atlas/AtlasBadge";
import AtlasCallout from "@/components/atlas/AtlasCallout";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import { northStar, roadmapItems, risks } from "@/lib/atlas/roadmap";

function formatEUR(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M€`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K€`;
  return `${n}€`;
}

export default function RoadmapPage() {
  const byPriority = {
    P0: roadmapItems.filter((r) => r.priority === "P0"),
    P1: roadmapItems.filter((r) => r.priority === "P1"),
    P2: roadmapItems.filter((r) => r.priority === "P2"),
  };

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <AtlasBadge tone="accent">ROADMAP</AtlasBadge>
          <AtlasBadge tone="success">North Star : 100M€ en {northStar.targetYear}</AtlasBadge>
        </div>
        <h1 className="text-4xl font-bold text-atlas-text-strong leading-tight">
          100M€. <span className="text-atlas-accent">Décomposé, priorisé, daté.</span>
        </h1>
        <p className="mt-4 text-atlas-muted max-w-3xl leading-relaxed">
          Le chiffre est ambitieux. La décomposition le rend opérable. Chaque initiative ci-dessous
          est priorisée RICE, avec un impact € estimé et un trimestre cible.
        </p>
      </section>

      {/* North Star breakdown */}
      <section>
        <AtlasSectionHeader
          kicker="North Star"
          title="Décomposition mathématique"
          description="Du chiffre final aux métriques opérationnelles."
        />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <AtlasStatBlock
            label="Revenu cible"
            value={formatEUR(northStar.targetRevenueEUR)}
            status="green"
            hint={`En ${northStar.targetYear}`}
          />
          <AtlasStatBlock
            label="MRR cible"
            value={formatEUR(northStar.targetMRR)}
            status="orange"
            hint="~ 8,3M€ / mois récurrent"
          />
          <AtlasStatBlock
            label="Abonnés actifs"
            value={`${Math.round(northStar.targetActiveSubs / 1000)}K`}
            status="orange"
            hint="À 29€/mois moyenne mix sub/OT"
          />
          <AtlasStatBlock
            label="CAC max"
            value={`< ${northStar.maxCAC}€`}
            status="orange"
            hint={`ROAS ≥ ${northStar.minROAS}× · payback 6 mois`}
          />
        </div>
        <div className="mt-6">
          <AtlasCard variant="accent">
            <div className="text-[11px] uppercase tracking-wider text-atlas-accent font-semibold mb-3">
              Hypothèses de travail
            </div>
            <ul className="space-y-1.5 text-sm text-atlas-text">
              {northStar.assumptions.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-atlas-accent">›</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </AtlasCard>
        </div>
      </section>

      {/* Initiatives */}
      <section>
        <AtlasSectionHeader
          kicker="Initiatives"
          title={`${roadmapItems.length} initiatives priorisées`}
          description="RICE = Reach × Impact × Confidence / Effort. Impact € = estimation du revenu additionnel touché."
        />
        {(["P0", "P1", "P2"] as const).map((prio) => (
          <div key={prio} className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-atlas-text-strong">
                {prio} — {prio === "P0" ? "Blockers critiques" : prio === "P1" ? "Priorité forte" : "À planifier"}
              </h3>
              <AtlasBadge tone={prio === "P0" ? "danger" : prio === "P1" ? "warn" : "muted"}>
                {byPriority[prio].length} items
              </AtlasBadge>
            </div>
            <div className="space-y-3">
              {byPriority[prio].map((r) => (
                <AtlasCard
                  key={r.id}
                  variant={prio === "P0" ? "warn" : "default"}
                  className="!p-4"
                >
                  <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <AtlasBadge tone={mapStatusToTone(r.status)}>{r.status}</AtlasBadge>
                      <AtlasBadge tone="muted">{r.pillar}</AtlasBadge>
                      <AtlasBadge tone="muted">{r.dueQuarter}</AtlasBadge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-[11px] text-atlas-muted">
                        RICE : <span className="text-atlas-text-strong tabular-nums font-semibold">{r.rice.score}</span>
                      </div>
                      <div className="text-[11px] text-atlas-muted">
                        Impact €: <span className="text-atlas-success font-bold tabular-nums">{formatEUR(r.estimatedRevenueImpactEUR)}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-atlas-text-strong text-base leading-tight">
                    {r.title}
                  </h4>
                  <p className="mt-1 text-sm text-atlas-muted leading-relaxed">{r.description}</p>
                  {r.owner && (
                    <div className="mt-2 text-[11px] text-atlas-muted">
                      Owner : <span className="text-atlas-text">@{r.owner}</span>
                    </div>
                  )}
                </AtlasCard>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Risks */}
      <section>
        <AtlasSectionHeader
          kicker="Risques"
          title={`${risks.length} risques documentés`}
          description="Chaque risque a une mitigation explicite. Mise à jour mensuelle."
        />
        <div className="mt-6 space-y-3">
          {risks.map((r) => (
            <AtlasCallout
              key={r.id}
              tone={r.severity * r.likelihood >= 16 ? "crit" : r.severity * r.likelihood >= 9 ? "warn" : "info"}
              kicker={`${r.category.toUpperCase()} · S${r.severity} × L${r.likelihood}`}
              title={r.title}
            >
              <div className="mt-1">
                <span className="text-atlas-accent font-semibold">Mitigation : </span>
                {r.mitigation}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 max-w-md">
                <div>
                  <div className="text-[11px] text-atlas-muted mb-1">Sévérité</div>
                  <AtlasMiniBar value={r.severity} max={5} showValue={false} tone="danger" />
                </div>
                <div>
                  <div className="text-[11px] text-atlas-muted mb-1">Probabilité</div>
                  <AtlasMiniBar value={r.likelihood} max={5} showValue={false} tone="warn" />
                </div>
              </div>
            </AtlasCallout>
          ))}
        </div>
      </section>
    </div>
  );
}
