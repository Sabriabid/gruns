import clsx from "clsx";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { HealthSignal } from "@/lib/atlas/types";

const statusRing: Record<HealthSignal, string> = {
  green: "ring-atlas-success/40",
  orange: "ring-atlas-warning/40",
  red: "ring-atlas-danger/40",
};
const statusDot: Record<HealthSignal, string> = {
  green: "bg-atlas-success",
  orange: "bg-atlas-warning",
  red: "bg-atlas-danger",
};

function Sparkline({ points }: { points: number[] }) {
  if (!points.length) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const w = 80;
  const h = 24;
  const step = w / (points.length - 1 || 1);
  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-6 w-20 text-atlas-accent">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function AtlasStatBlock({
  label,
  value,
  unit,
  delta,
  deltaLabel,
  trend,
  status = "green",
  hint,
}: {
  label: string;
  value: string | number;
  unit?: string;
  delta?: number;
  deltaLabel?: string;
  trend?: number[];
  status?: HealthSignal;
  hint?: string;
}) {
  const DeltaIcon = delta === undefined ? Minus : delta > 0 ? TrendingUp : delta < 0 ? TrendingDown : Minus;
  const deltaColor =
    delta === undefined || delta === 0
      ? "text-atlas-muted"
      : delta > 0
      ? "text-atlas-success"
      : "text-atlas-danger";

  return (
    <div
      className={clsx(
        "rounded-xl border border-atlas-border bg-atlas-surface p-5 ring-1",
        statusRing[status]
      )}
    >
      <div className="flex items-center gap-2">
        <span className={clsx("h-1.5 w-1.5 rounded-full", statusDot[status])} />
        <span className="text-[11px] uppercase tracking-wider text-atlas-muted font-medium">
          {label}
        </span>
      </div>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-3xl font-bold text-atlas-text-strong tabular-nums leading-none">
          {value}
        </span>
        {unit && (
          <span className="text-sm text-atlas-muted mb-1">{unit}</span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <div className={clsx("flex items-center gap-1 text-xs", deltaColor)}>
          <DeltaIcon size={12} />
          <span className="font-medium tabular-nums">
            {delta !== undefined && delta > 0 ? "+" : ""}
            {delta !== undefined ? delta : "—"}
            {delta !== undefined && typeof delta === "number" && !deltaLabel?.includes("%") ? "" : ""}
          </span>
          {deltaLabel && <span className="text-atlas-muted">{deltaLabel}</span>}
        </div>
        {trend && <Sparkline points={trend} />}
      </div>
      {hint && (
        <div className="mt-2 text-[11px] text-atlas-muted leading-relaxed">
          {hint}
        </div>
      )}
    </div>
  );
}
