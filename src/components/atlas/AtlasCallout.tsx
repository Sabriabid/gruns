import clsx from "clsx";
import { Info, AlertTriangle, AlertOctagon, Zap, Target } from "lucide-react";

type Tone = "info" | "warn" | "crit" | "opportunity" | "insight";

const config: Record<Tone, { icon: typeof Info; className: string; label: string }> = {
  info: {
    icon: Info,
    className: "bg-atlas-info/5 border-atlas-info/30 text-atlas-info",
    label: "Info",
  },
  warn: {
    icon: AlertTriangle,
    className: "bg-atlas-warning/5 border-atlas-warning/30 text-atlas-warning",
    label: "Warning",
  },
  crit: {
    icon: AlertOctagon,
    className: "bg-atlas-danger/5 border-atlas-danger/30 text-atlas-danger",
    label: "Critical",
  },
  opportunity: {
    icon: Zap,
    className: "bg-atlas-success/5 border-atlas-success/30 text-atlas-success",
    label: "Opportunité",
  },
  insight: {
    icon: Target,
    className: "bg-atlas-accent/5 border-atlas-accent/30 text-atlas-accent",
    label: "Insight",
  },
};

export default function AtlasCallout({
  tone = "info",
  title,
  children,
  kicker,
  className,
}: {
  tone?: Tone;
  title?: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { icon: Icon, className: toneClass, label } = config[tone];
  return (
    <div className={clsx("rounded-lg border p-4", toneClass, className)}>
      <div className="flex items-start gap-3">
        <Icon size={18} className="mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-wider font-semibold opacity-80">
            {kicker || label}
          </div>
          {title && (
            <div className="mt-0.5 font-semibold text-atlas-text-strong">
              {title}
            </div>
          )}
          <div className="mt-1 text-sm text-atlas-text leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
