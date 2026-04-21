import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export interface LinkGridItem {
  label: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
}

export default function AtlasLinkGrid({
  items,
  cols = 3,
}: {
  items: LinkGridItem[];
  cols?: 2 | 3 | 4;
}) {
  const gridClass =
    cols === 2
      ? "md:grid-cols-2"
      : cols === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-3 ${gridClass}`}>
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <Link
            key={it.href}
            href={it.href}
            className="group relative rounded-xl border border-atlas-border bg-atlas-surface p-5 transition-all hover:border-atlas-accent/50 hover:bg-atlas-surface-2"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                {Icon && (
                  <div className="h-8 w-8 rounded-md bg-atlas-accent/15 flex items-center justify-center text-atlas-accent">
                    <Icon size={16} />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-atlas-text-strong">
                    {it.label}
                  </div>
                  {it.badge && (
                    <div className="text-[10px] uppercase tracking-wider text-atlas-accent font-medium">
                      {it.badge}
                    </div>
                  )}
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-atlas-muted group-hover:text-atlas-accent transition-colors"
              />
            </div>
            {it.description && (
              <p className="mt-3 text-sm text-atlas-muted leading-relaxed">
                {it.description}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}
