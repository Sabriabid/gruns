import clsx from "clsx";

type Tone =
  | "neutral"
  | "accent"
  | "success"
  | "warn"
  | "danger"
  | "info"
  | "muted";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-atlas-surface-2 text-atlas-text border-atlas-border",
  accent: "bg-atlas-accent/15 text-atlas-accent border-atlas-accent/30",
  success: "bg-atlas-success/15 text-atlas-success border-atlas-success/30",
  warn: "bg-atlas-warning/15 text-atlas-warning border-atlas-warning/30",
  danger: "bg-atlas-danger/15 text-atlas-danger border-atlas-danger/30",
  info: "bg-atlas-info/15 text-atlas-info border-atlas-info/30",
  muted: "bg-transparent text-atlas-muted border-atlas-border",
};

export default function AtlasBadge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function mapStatusToTone(status: string): Tone {
  const s = status.toLowerCase();
  if (s === "live" || s === "done" || s === "winner") return "success";
  if (s === "wip" || s === "build" || s === "qa" || s === "next" || s === "in_test") return "info";
  if (s === "blocked" || s === "killed" || s === "crit") return "danger";
  if (s === "paused" || s === "warn") return "warn";
  if (s === "draft" || s === "backlog") return "muted";
  return "neutral";
}
