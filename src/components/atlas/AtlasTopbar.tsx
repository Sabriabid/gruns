"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Lock } from "lucide-react";
import { atlasMeta } from "@/lib/atlas/meta";

function pathSegments(pathname: string): { label: string; href: string }[] {
  const parts = pathname.replace(/\/$/, "").split("/").filter(Boolean);
  if (parts[0] !== "atlas") return [];
  const segs: { label: string; href: string }[] = [{ label: "Atlas", href: "/atlas" }];
  let acc = "/atlas";
  for (let i = 1; i < parts.length; i++) {
    acc += `/${parts[i]}`;
    segs.push({ label: humanize(parts[i]), href: acc });
  }
  return segs;
}

function humanize(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function AtlasTopbar() {
  const pathname = usePathname();
  const segs = pathSegments(pathname);

  return (
    <div className="sticky top-0 z-30 border-b border-atlas-border bg-atlas-bg/80 backdrop-blur-md px-6 py-3 lg:px-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm min-w-0 overflow-hidden pl-12 lg:pl-0">
          {segs.map((s, i) => (
            <div key={s.href} className="flex items-center gap-2 min-w-0">
              {i > 0 && (
                <ChevronRight size={14} className="text-atlas-muted shrink-0" />
              )}
              {i === segs.length - 1 ? (
                <span className="text-atlas-text-strong font-medium truncate">
                  {s.label}
                </span>
              ) : (
                <Link
                  href={s.href}
                  className="text-atlas-muted hover:text-atlas-text truncate"
                >
                  {s.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-atlas-muted">
            <Lock size={11} />
            <span>Interne · noindex</span>
          </div>
          <div className="text-[11px] text-atlas-muted">
            MAJ {atlasMeta.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
}
