import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { HeroFeatured } from "@/components/features/home/HeroFeatured";
import { NewsList } from "@/components/features/home/NewsList";
import { FeaturedAssociationCard } from "@/components/features/home/FeaturedAssociationCard";
import { MutualAidBanner } from "@/components/features/home/MutualAidBanner";
import { Card } from "@/components/ui/Card";
import { mockFeaturedNews, mockNews } from "@/lib/mock/news";
import { mockFeaturedAssociation } from "@/lib/mock/associations";
import { mockMutualAidSummary } from "@/lib/mock/mutualAid";

export default function HomePage() {
  const recentNews = mockNews.filter((item) => item.id !== mockFeaturedNews.id).slice(0, 3);
  const works = mockNews.filter((item) => item.category === "travaux").slice(0, 2);

  return (
    <PageContainer className="flex flex-col gap-8">
      {/*
        Les actualités ci-dessous sont un contenu RÉEL (sourcé Ville d'Épinay-sur-Seine,
        cf. docs/SOURCES_PHASE4.md) — pas de bandeau "démonstration" ici, ce serait
        inexact. En revanche, "Association à l'honneur" et "Entraide" restent des
        exemples factices (aucune association/annonce réelle branchée avant les
        Phases 5 et 13) : ils portent leur propre badge "Aperçu" ci-dessous.
      */}

      <section aria-label="À la une">
        <HeroFeatured news={mockFeaturedNews} />
      </section>

      <section aria-label="Météo">
        <Card className="flex items-center justify-between px-3 py-3">
          <div>
            <p className="text-[12px] text-ink-secondary">Météo à Orgemont</p>
            <p className="text-[14px] font-medium text-ink-muted">Service à connecter</p>
          </div>
          <Badge tone="info">Bientôt</Badge>
        </Card>
      </section>

      <section aria-labelledby="section-prochainement" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 id="section-prochainement" className="text-[18px] font-bold text-ink">
            Prochainement à Orgemont
          </h2>
          <Link href="/actualites" className="text-[14px] font-medium text-primary">Voir tout</Link>
        </div>
        <NewsList items={mockNews.filter((item) => item.eventAt).slice(0, 2)} />
      </section>

      <section aria-labelledby="section-travaux" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 id="section-travaux" className="text-[18px] font-bold text-ink">Travaux & projets</h2>
          <span className="text-[12px] text-ink-secondary">Informations vérifiées</span>
        </div>
        {works.map((item) => (
          <Link key={item.id} href={`/actualites/${item.id}`}>
            <Card categoryColor={item.category}>
              <div className="p-4">
                <Badge tone="warning">Travaux</Badge>
                <h3 className="mt-2 text-[16px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-[14px] leading-5 text-ink-secondary">{item.summary}</p>
              </div>
            </Card>
          </Link>
        ))}
      </section>

      <section aria-labelledby="section-actualites" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 id="section-actualites" className="text-[18px] font-bold text-ink">Dernières actualités</h2>
          <Link href="/actualites" className="text-[14px] font-medium text-primary">Voir tout</Link>
        </div>
        <NewsList items={recentNews} />
        <p className="text-[12px] text-ink-secondary">
          Sources : Ville d&apos;Épinay-sur-Seine. Orgemont Connect est une initiative personnelle et
          indépendante, non officielle.
        </p>
      </section>

      <section aria-label="Association à l'honneur" className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge tone="info">Aperçu</Badge>
          <p className="text-[12px] text-ink-secondary">Exemple — aucune association réelle pour l&apos;instant</p>
        </div>
        <FeaturedAssociationCard association={mockFeaturedAssociation} />
      </section>

      <section aria-label="Entraide" className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge tone="info">Aperçu</Badge>
          <p className="text-[12px] text-ink-secondary">Exemple — aucune demande réelle pour l&apos;instant</p>
        </div>
        <MutualAidBanner summary={mockMutualAidSummary} />
      </section>
    </PageContainer>
  );
}
