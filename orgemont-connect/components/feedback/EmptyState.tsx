import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

/**
 * "Un écran vide est une invitation à agir" : toujours accompagner l'état
 * vide d'un message clair et, si possible, d'une action.
 */
export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
      <p className="text-[16px] font-semibold text-ink">{title}</p>
      {description && <p className="text-[14px] text-ink-secondary">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
