import clsx from "clsx";

export default function AtlasSectionHeader({
  kicker,
  title,
  description,
  id,
  className,
  actions,
}: {
  kicker?: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div id={id} className={clsx("scroll-mt-24", className)}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          {kicker && (
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-atlas-accent mb-2">
              {kicker}
            </div>
          )}
          <h2 className="text-2xl lg:text-3xl font-bold text-atlas-text-strong">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-atlas-muted max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}
