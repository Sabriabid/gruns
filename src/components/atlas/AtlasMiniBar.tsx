import clsx from "clsx";

export default function AtlasMiniBar({
  value,
  max = 10,
  label,
  showValue = true,
  tone = "accent",
}: {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  tone?: "accent" | "success" | "warn" | "danger";
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const toneClass = {
    accent: "bg-atlas-accent",
    success: "bg-atlas-success",
    warn: "bg-atlas-warning",
    danger: "bg-atlas-danger",
  }[tone];

  return (
    <div>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs text-atlas-muted mb-1.5">
          {label && <span>{label}</span>}
          {showValue && (
            <span className="tabular-nums text-atlas-text">
              {value}
              <span className="text-atlas-muted">/{max}</span>
            </span>
          )}
        </div>
      )}
      <div className="h-1.5 w-full rounded-full bg-atlas-surface-2 overflow-hidden">
        <div
          className={clsx("h-full rounded-full transition-all", toneClass)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
