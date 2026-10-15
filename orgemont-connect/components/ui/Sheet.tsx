"use client";

import { type ReactNode, useEffect } from "react";

export interface SheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

/**
 * Panneau qui remonte du bas de l'écran — pattern mobile naturel, utilisé de
 * préférence à <Modal> pour les actions courantes sur smartphone
 * (ex. filtres, confirmation d'inscription, aperçu avant publication).
 */
export function Sheet({ open, onClose, title, children }: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-ink/40" aria-hidden="true" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-app rounded-t-xl border border-b-0 border-border bg-surface p-5 pb-8 shadow-floating"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" aria-hidden="true" />
        {title && <h2 className="mb-3 text-[18px] font-semibold text-ink">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
