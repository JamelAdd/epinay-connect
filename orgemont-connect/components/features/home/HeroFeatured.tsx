import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { NewsItem } from "@/lib/types/news";

export interface HeroFeaturedProps {
  news: NewsItem;
}

/** Un seul contenu mis en avant à la fois (cf. design de l'accueil validé) — pas de carrousel chargé. */
export function HeroFeatured({ news }: HeroFeaturedProps) {
  return (
    <Link href={`/actualites/${news.id}`} className="block">
      <Card className="overflow-hidden">
        <div className="flex h-40 items-center justify-center bg-surface-secondary text-ink-muted">
          {/* Emplacement image — pas d'image réelle en Phase 2 (données mock) */}
          <span className="text-[13px]">Image</span>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <Badge tone="accent">À la une</Badge>
            {news.source.type !== "plateforme" && (
              <span className="text-[12px] text-ink-secondary">{news.source.organizationName}</span>
            )}
          </div>
          <h2 className="text-[20px] font-bold leading-[26px] text-ink">{news.title}</h2>
          <p className="text-[14px] leading-[20px] text-ink-secondary">{news.summary}</p>
        </div>
      </Card>
    </Link>
  );
}
