"use client";

import { cn } from "@/lib/utils/cn";

export interface FilterChip {
  value: string;
  label: string;
}

export interface FilterBarProps {
  chips: FilterChip[];
  activeValues: string[];
  onToggle: (value: string) => void;
}

/**
 * Barre de filtres à puces (chips), défilement horizontal — utilisée par
 * exemple sur les actualités (quartier, association, catégorie, date) ou les commerces.
 */
export function FilterBar({ chips, activeValues, onToggle }: FilterBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filtres">
      {chips.map((chip) => {
        const active = activeValues.includes(chip.value);
        return (
          <button
            key={chip.value}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(chip.value)}
            className={cn(
              "shrink-0 rounded-sm border px-3 py-1.5 text-[14px] font-medium transition-colors",
              active
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-ink-secondary hover:border-primary/40"
            )}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
