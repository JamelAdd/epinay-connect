import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { mockNews } from "@/lib/mock/news";
import { CATEGORY_LABELS, CATEGORY_BADGE_TONE } from "@/lib/config/categories";

export default function ActualitesPage() {
  return (
    <PageContainer className="flex flex-col gap-5">
      <div>
        <h1 className="text-[28px] font-bold text-ink">Actualités d’Orgemont</h1>
        <p className="mt-1 text-[14px] leading-5 text-ink-secondary">Les informations utiles, les travaux, les événements et la vie du quartier.</p>
      </div>
      <div className="flex flex-col gap-3">
        {mockNews.map((item) => (
          <Link key={item.id} href={`/actualites/${item.id}`}>
            <Card categoryColor={item.category}>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge tone={CATEGORY_BADGE_TONE[item.category]}>{CATEGORY_LABELS[item.category]}</Badge>
                  <span className="text-[12px] text-ink-secondary">{new Date(item.publishedAt).toLocaleDateString("fr-FR")}</span>
                </div>
                <h2 className="text-[17px] font-semibold text-ink">{item.title}</h2>
                <p className="mt-1 text-[14px] leading-5 text-ink-secondary">{item.summary}</p>
                {item.location && <p className="mt-2 text-[12px] font-medium text-primary">📍 {item.location}</p>}
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <p className="text-[12px] leading-5 text-ink-secondary">Sources : Ville d’Épinay-sur-Seine. Orgemont Connect est une initiative personnelle et indépendante, non officielle.</p>
    </PageContainer>
  );
}
