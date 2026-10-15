import { PageContainer } from "@/components/layout/PageContainer";
import { EmptyState } from "@/components/feedback/EmptyState";

export interface StubPageProps {
  title: string;
  description?: string;
}

/**
 * Gabarit commun des pages "à venir" (Phase 2). Chaque page stub affiche
 * simplement son titre et un message explicite — la logique métier réelle
 * sera ajoutée phase par phase (cf. plan de développement validé).
 */
export function StubPage({ title, description = "Cette section sera développée dans une phase à venir." }: StubPageProps) {
  return (
    <PageContainer>
      <h1 className="mb-4 text-[22px] font-bold text-ink">{title}</h1>
      <EmptyState title="Bientôt disponible" description={description} />
    </PageContainer>
  );
}
