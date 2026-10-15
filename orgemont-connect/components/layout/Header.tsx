import Link from "next/link";
import { currentDistrict } from "@/lib/config/district";
import Image from "next/image";

/**
 * Header : fond clair (pas de bandeau terracotta plein, cf. design system),
 * logo + nom à gauche, notifications + profil à droite.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-app items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/orgemont-connect-icon.png" alt="" width={36} height={36} className="rounded-lg" priority />
          <span className="text-[16px] font-bold text-ink">{currentDistrict.appName}</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/notifications"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-secondary hover:bg-surface-secondary"
          >
            <BellIcon />
          </Link>
          <Link
            href="/profil"
            aria-label="Mon profil"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-secondary hover:bg-surface-secondary"
          >
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 16v-5a6 6 0 1 0-12 0v5l-1.5 2.5h15L18 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 19c1.2-3.2 4-4.8 7-4.8s5.8 1.6 7 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
