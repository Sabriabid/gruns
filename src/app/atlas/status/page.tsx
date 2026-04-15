import AtlasCard from "@/components/atlas/AtlasCard";
import AtlasSectionHeader from "@/components/atlas/AtlasSectionHeader";
import AtlasBadge, { mapStatusToTone } from "@/components/atlas/AtlasBadge";
import AtlasKanbanColumn, {
  type KanbanCard,
} from "@/components/atlas/AtlasKanbanColumn";
import AtlasMiniBar from "@/components/atlas/AtlasMiniBar";
import { lpStatus, stackItems, dataDocStatus } from "@/lib/atlas/status";

export default function StatusPage() {
  // Group LPs by status
  const groups: Record<string, KanbanCard[]> = {
    draft: [],
    build: [],
    qa: [],
    live: [],
    paused: [],
  };
  for (const lp of lpStatus) {
    const card: KanbanCard = {
      id: lp.slug,
      title: lp.title,
      subtitle: lp.url ? `gomudaily.com${lp.url}` : undefined,
      owner: lp.owner,
      blocker: lp.blocker,
      badges: [
        ...lp.trafficSources.map((t) => ({ label: t, tone: "muted" as const })),
      ],
    };
    if (groups[lp.status]) groups[lp.status].push(card);
  }

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <AtlasBadge tone="info">STATUS PROJET</AtlasBadge>
          <AtlasBadge tone="muted">MAJ 2026-04-15</AtlasBadge>
        </div>
        <h1 className="text-4xl font-bold text-atlas-text-strong leading-tight">
          Où on en est. <span className="text-atlas-accent">Ce qui avance, ce qui bloque.</span>
        </h1>
      </section>

      {/* LP Kanban */}
      <section>
        <AtlasSectionHeader
          kicker="LPs"
          title="Tracker des 10 landing pages"
          description="Chaque LP = 1 angle. Toutes les LPs pointent vers le même produit (1 SKU)."
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto">
          <AtlasKanbanColumn title="Draft" count={groups.draft.length} tone="muted" cards={groups.draft} />
          <AtlasKanbanColumn title="Build" count={groups.build.length} tone="info" cards={groups.build} />
          <AtlasKanbanColumn title="QA" count={groups.qa.length} tone="warn" cards={groups.qa} />
          <AtlasKanbanColumn title="Live" count={groups.live.length} tone="success" cards={groups.live} />
          <AtlasKanbanColumn title="Paused" count={groups.paused.length} tone="muted" cards={groups.paused} />
        </div>
      </section>

      {/* Stack */}
      <section>
        <AtlasSectionHeader
          kicker="Stack technique"
          title={`${stackItems.length} outils`}
          description="État des outils et plateformes. Le « planned » doit être branché avant le premier euro de pub."
        />
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {stackItems.map((s) => (
            <AtlasCard key={s.name} className="!p-4">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <div className="font-semibold text-atlas-text-strong text-sm">
                  {s.name}
                </div>
                <AtlasBadge tone={mapStatusToTone(s.status)}>{s.status}</AtlasBadge>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-atlas-muted">
                {s.category}
              </div>
              <div className="mt-2 text-[13px] text-atlas-text">{s.usage}</div>
              {s.notes && (
                <div className="mt-2 text-[11px] text-atlas-muted leading-relaxed">
                  {s.notes}
                </div>
              )}
            </AtlasCard>
          ))}
        </div>
      </section>

      {/* Data docs consumption */}
      <section>
        <AtlasSectionHeader
          kicker="Data brand"
          title={`${dataDocStatus.length} docs stratégiques`}
          description="Taille totale : ~650 Ko de stratégie + verbatims. % consommé = part réellement exploitée dans les LPs / Atlas / pubs."
        />
        <AtlasCard className="mt-6">
          <div className="space-y-3">
            {dataDocStatus.map((d) => (
              <div key={d.path}>
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <div className="min-w-0">
                    <code className="text-[11px] text-atlas-muted font-mono">
                      {d.path}
                    </code>
                    <div className="font-medium text-atlas-text-strong text-sm">
                      {d.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <AtlasBadge tone="muted">{d.sizeKb} Ko</AtlasBadge>
                    <span className="text-[11px] text-atlas-muted tabular-nums w-10 text-right">
                      {d.consumedPct}%
                    </span>
                  </div>
                </div>
                <div className="mt-1.5">
                  <AtlasMiniBar
                    value={d.consumedPct}
                    max={100}
                    showValue={false}
                    tone={d.consumedPct >= 70 ? "success" : d.consumedPct >= 40 ? "accent" : "warn"}
                  />
                </div>
              </div>
            ))}
          </div>
        </AtlasCard>
      </section>
    </div>
  );
}
