"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface NavItem {
  href: string;
  label: string;
  icon: (active: boolean) => JSX.Element;
}

const items: NavItem[] = [
  { href: "/", label: "Accueil", icon: (a) => <HomeIcon active={a} /> },
  { href: "/actualites", label: "Actualités", icon: (a) => <NewsIcon active={a} /> },
  { href: "/entraide", label: "Entraide", icon: (a) => <HeartIcon active={a} /> },
  { href: "/profil", label: "Profil", icon: (a) => <UserIcon active={a} /> },
];

/**
 * Navigation basse fixe, 5 entrées maximum (cf. design system).
 * pb-safe gère l'encoche/zone de sécurité en bas d'écran (iOS notamment).
 */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface pb-[env(safe-area-inset-bottom)]"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex h-16 w-full max-w-app items-stretch justify-between px-2">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center justify-center gap-1"
              aria-current={active ? "page" : undefined}
            >
              <span className={cn(active ? "text-primary" : "text-ink-muted")}>{item.icon(active)}</span>
              <span
                className={cn(
                  "text-[11px] font-medium",
                  active ? "text-primary" : "text-ink-muted"
                )}
              >
                {item.label}
              </span>
              {active && <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.12 : 0}
      />
    </svg>
  );
}

function NewsIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="4.5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.12 : 0}
      />
      <path d="M7.5 9h9M7.5 12.5h9M7.5 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 19.5s-7-4.35-7-9.6A4.4 4.4 0 0 1 12 7.1a4.4 4.4 0 0 1 7 2.8c0 5.25-7 9.6-7 9.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.12 : 0}
      />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="8.5"
        r="3.25"
        stroke="currentColor"
        strokeWidth="1.8"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.12 : 0}
      />
      <path
        d="M5 19c1.2-3.2 4-4.8 7-4.8s5.8 1.6 7 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
