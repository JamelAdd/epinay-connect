import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeTone = "success" | "warning" | "danger" | "info" | "neutral" | "accent";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger: "bg-danger-bg text-danger",
  info: "bg-info-bg text-info",
  neutral: "bg-surface-secondary text-ink-secondary",
  // Accent safran : texte foncé dessus (jamais blanc, cf. design system), à réserver
  // aux mises en avant fortes (À la une, catégorie Événement) pour rester rare.
  accent: "bg-accent/20 text-ink",
};

/**
 * Badge de statut/catégorie. Casse normale (jamais tout en majuscules),
 * fond pâle + texte dans la couleur pleine de l'état, conformément au design system.
 */
export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-semibold leading-[14px]",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
