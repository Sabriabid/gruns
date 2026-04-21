import clsx from "clsx";

type Variant = "default" | "accent" | "warn" | "crit" | "success" | "info";

const variantClasses: Record<Variant, string> = {
  default: "bg-atlas-surface border-atlas-border",
  accent: "bg-atlas-surface border-atlas-accent/40 ring-1 ring-atlas-accent/20",
  warn: "bg-atlas-warning/5 border-atlas-warning/30",
  crit: "bg-atlas-danger/5 border-atlas-danger/30",
  success: "bg-atlas-success/5 border-atlas-success/30",
  info: "bg-atlas-info/5 border-atlas-info/30",
};

export default function AtlasCard({
  variant = "default",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "rounded-xl border p-5",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
