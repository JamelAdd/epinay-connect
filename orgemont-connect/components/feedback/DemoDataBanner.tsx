import { Badge } from "@/components/ui/Badge";

/**
 * Bandeau obligatoire tant que l'écran affiche des données MOCK.
 * À retirer uniquement quand l'écran est branché sur de vraies données
 * Firestore (Phase 3 et suivantes).
 */
export function DemoDataBanner() {
  return (
    <div className="flex items-center gap-2 rounded-md bg-info-bg px-3 py-2">
      <Badge tone="info">Aperçu</Badge>
      <p className="text-[13px] text-ink-secondary">
        Données de démonstration — ce contenu n&apos;est pas réel.
      </p>
    </div>
  );
}
