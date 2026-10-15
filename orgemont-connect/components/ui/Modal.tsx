"use client";

import { type ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils/cn";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

/**
 * Modal centrée classique — réservée aux écrans larges / confirmations courtes.
 * Sur mobile, préférer <Sheet> (panneau qui remonte du bas), plus naturel au toucher.
 */
export function Modal({ open, onClose, title, children }: ModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/40"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative w-full max-w-app rounded-lg border border-border bg-surface p-5 shadow-floating"
        )}
      >
        {title && <h2 className="mb-3 text-[18px] font-semibold text-ink">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
