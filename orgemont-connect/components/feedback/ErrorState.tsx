import { Button } from "@/components/ui/Button";

export interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Une erreur est survenue",
  description = "Le contenu n'a pas pu être chargé. Vérifie ta connexion et réessaie.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
      <p className="text-[16px] font-semibold text-danger">{title}</p>
      <p className="text-[14px] text-ink-secondary">{description}</p>
      {onRetry && (
        <Button variant="secondary" size="sm" className="mt-2" onClick={onRetry}>
          Réessayer
        </Button>
      )}
    </div>
  );
}
