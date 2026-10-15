import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Conteneur de page : centré, largeur max "app" (mobile-first), avec le
 * padding bas nécessaire pour ne jamais passer sous la bottom navigation.
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn("mx-auto w-full max-w-app px-4 pb-24 pt-4", className)}>
      {children}
    </main>
  );
}
