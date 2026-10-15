import type { ReactNode } from "react";

export interface UnauthorizedStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export function UnauthorizedState({
  title = "Accès non autorisé",
  description = "Tu n'as pas les droits nécessaires pour accéder à cette page.",
  action,
}: UnauthorizedStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
      <p className="text-[16px] font-semibold text-ink">{title}</p>
      <p className="text-[14px] text-ink-secondary">{description}</p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
