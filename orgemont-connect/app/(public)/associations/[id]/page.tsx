import { StubPage } from "@/components/layout/StubPage";

export default function AssociationDetailPage({ params }: { params: { id: string } }) {
  return (
    <StubPage
      title="Fiche association"
      description={`Présentation complète de l'association — à venir en Phase 5. (id : ${params.id})`}
    />
  );
}
