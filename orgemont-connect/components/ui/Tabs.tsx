"use client";

import { cn } from "@/lib/utils/cn";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
}

export function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div role="tablist" className="flex gap-1 rounded-md bg-surface-secondary p-1">
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            className={cn(
              "flex-1 rounded-sm px-3 py-2 text-[14px] font-medium transition-colors",
              active ? "bg-surface text-primary shadow-sm" : "text-ink-secondary hover:text-ink"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
