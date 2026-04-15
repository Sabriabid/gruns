import AtlasBadge from "./AtlasBadge";

export interface KanbanCard {
  id: string;
  title: string;
  subtitle?: string;
  owner?: string;
  badges?: { label: string; tone?: "accent" | "success" | "warn" | "danger" | "info" | "muted" | "neutral" }[];
  blocker?: string;
}

export default function AtlasKanbanColumn({
  title,
  count,
  tone = "muted",
  cards,
}: {
  title: string;
  count: number;
  tone?: "accent" | "success" | "warn" | "danger" | "info" | "muted" | "neutral";
  cards: KanbanCard[];
}) {
  return (
    <div className="flex flex-col min-w-[260px] w-full">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-atlas-text-strong text-sm uppercase tracking-wide">
            {title}
          </h3>
          <AtlasBadge tone={tone}>{count}</AtlasBadge>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        {cards.length === 0 && (
          <div className="rounded-lg border border-dashed border-atlas-border p-4 text-center text-[11px] text-atlas-muted">
            Vide
          </div>
        )}
        {cards.map((c) => (
          <div
            key={c.id}
            className="rounded-lg border border-atlas-border bg-atlas-surface p-3 hover:border-atlas-accent/40 transition-colors"
          >
            <div className="text-sm font-medium text-atlas-text-strong">
              {c.title}
            </div>
            {c.subtitle && (
              <div className="mt-1 text-[11px] text-atlas-muted leading-relaxed">
                {c.subtitle}
              </div>
            )}
            {c.blocker && (
              <div className="mt-2 rounded bg-atlas-danger/10 border border-atlas-danger/20 px-2 py-1 text-[11px] text-atlas-danger">
                🚧 {c.blocker}
              </div>
            )}
            <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-1 flex-wrap">
                {c.badges?.map((b, i) => (
                  <AtlasBadge key={i} tone={b.tone || "muted"}>
                    {b.label}
                  </AtlasBadge>
                ))}
              </div>
              {c.owner && (
                <span className="text-[10px] text-atlas-muted">
                  @{c.owner}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
