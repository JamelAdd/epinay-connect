/**
 * Fusionne des classes CSS conditionnelles.
 * Volontairement minimaliste (pas de dépendance externe type `clsx`/`tailwind-merge`
 * à ce stade du projet) pour garder la Phase 2 légère.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
