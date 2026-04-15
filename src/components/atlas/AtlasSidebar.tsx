"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { atlasNavigation, type NavItem } from "@/lib/atlas/navigation";
import { atlasMeta } from "@/lib/atlas/meta";
import clsx from "clsx";

function isActive(pathname: string, href: string): boolean {
  if (href === "/atlas") return pathname === "/atlas" || pathname === "/atlas/";
  return pathname === href || pathname.startsWith(href + "/");
}

function NavLink({
  item,
  pathname,
  level = 0,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  level?: number;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;
  const active = isActive(pathname, item.href);
  const hasChildren = item.children && item.children.length > 0;
  const sectionOpen = hasChildren && pathname.startsWith(item.href);

  return (
    <div>
      <Link
        href={item.href}
        onClick={onNavigate}
        className={clsx(
          "group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
          level > 0 && "pl-8 text-[13px] text-atlas-muted",
          active
            ? "bg-atlas-surface-2 text-atlas-text-strong"
            : "text-atlas-muted hover:bg-atlas-surface hover:text-atlas-text"
        )}
      >
        <Icon size={level > 0 ? 14 : 16} className={clsx(active && "text-atlas-accent")} />
        <span className="flex-1 truncate">{item.label}</span>
        {item.badge && (
          <span className="rounded bg-atlas-danger/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-atlas-danger">
            {item.badge}
          </span>
        )}
      </Link>
      {hasChildren && sectionOpen && (
        <div className="mt-0.5 space-y-0.5">
          {item.children!.map((child) => (
            <NavLink
              key={child.href}
              item={child}
              pathname={pathname}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AtlasSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-40 rounded-md bg-atlas-surface p-2 text-atlas-text border border-atlas-border lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={18} />
      </button>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={close}
          aria-hidden
        />
      )}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-screen w-[260px] border-r border-atlas-border bg-atlas-surface flex flex-col transition-transform",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-atlas-border">
          <Link href="/atlas" className="flex items-center gap-2" onClick={close}>
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-atlas-accent to-atlas-accent-strong flex items-center justify-center text-white text-xs font-bold">
              G
            </div>
            <div>
              <div className="text-atlas-text-strong font-semibold text-sm leading-tight">
                Atlas
              </div>
              <div className="text-atlas-muted text-[10px] leading-tight uppercase tracking-wider">
                Gomu HQ · {atlasMeta.version}
              </div>
            </div>
          </Link>
          <button
            onClick={close}
            className="text-atlas-muted hover:text-atlas-text lg:hidden"
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {atlasNavigation.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} onNavigate={close} />
          ))}
        </nav>
        <div className="border-t border-atlas-border px-5 py-4">
          <div className="text-[11px] text-atlas-muted leading-relaxed">
            <div className="font-semibold text-atlas-text">🎯 North Star</div>
            <div className="mt-0.5">{atlasMeta.northStar.tagline}</div>
          </div>
        </div>
      </aside>
    </>
  );
}
