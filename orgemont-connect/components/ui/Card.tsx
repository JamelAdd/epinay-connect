import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
import type { NewsCategory } from "@/lib/types/common";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Couleur de la barre latérale indiquant la catégorie du contenu.
   * Optionnelle : une carte générique (ex. commerce) peut ne pas en avoir.
   */
  categoryColor?: NewsCategory | "evenement" | "entraide" | "neutre";
}

const categoryColorClasses: Record<NonNullable<CardProps["categoryColor"]>, string> = {
  quartier: "before:bg-primary",
  association: "before:bg-primary",
  solidarite: "before:bg-success",
  commerces: "before:bg-accent",
  culture: "before:bg-primary",
  sport: "before:bg-primary",
  education: "before:bg-primary",
  "info-pratique": "before:bg-info",
  "carnet-du-quartier": "before:bg-ink-secondary",
  travaux: "before:bg-warning",
  autre: "before:bg-ink-muted",
  evenement: "before:bg-accent",
  entraide: "before:bg-success",
  neutre: "before:bg-border",
};

/**
 * Carte du design system : fond blanc, bordure fine (pas d'ombre par défaut),
 * radius lg (16px), avec une fine barre de catégorie optionnelle sur le bord gauche.
 */
export function Card({ categoryColor, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-surface",
        categoryColor &&
          "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 " +
            categoryColorClasses[categoryColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}
