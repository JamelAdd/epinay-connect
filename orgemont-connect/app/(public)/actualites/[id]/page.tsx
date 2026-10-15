import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { mockNews } from "@/lib/mock/news";
import { CATEGORY_LABELS, CATEGORY_BADGE_TONE } from "@/lib/config/categories";

export default function ActualiteDetailPage({ params }: { params: { id: string } }) {
  const item = mockNews.find((news) => news.id === params.id);
  if (!item) notFound();

  return (
    <PageContainer className="flex flex-col gap-5">
      <Link href="/actualites" className="text-[14px] font-medium text-primary">← Toutes les actualités</Link>
      <article className="flex flex-col gap-4">
        <Badge tone={CATEGORY_BADGE_TONE[item.category]}>{CATEGORY_LABELS[item.category]}</Badge>
        <h1 className="text-[28px] font-bold leading-8 text-ink">{item.title}</h1>
        {item.eventAt && <p className="text-[15px] font-semibold text-primary">{new Date(item.eventAt).toLocaleString("fr-FR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}</p>}
        {item.location && <p className="text-[14px] text-ink-secondary">📍 {item.location}</p>}
        <p className="text-[16px] leading-7 text-ink">{item.summary}</p>
        {item.source.type !== "plateforme" && (
          <div className="rounded-xl bg-surface-secondary p-4">
            <p className="text-[12px] font-semibold text-ink">Source</p>
            <p className="mt-1 text-[13px] text-ink-secondary">{item.source.organizationName}</p>
            {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[13px] font-medium text-primary">Voir la source officielle ↗</a>}
          </div>
        )}
      </article>
    </PageContainer>
  );
}
