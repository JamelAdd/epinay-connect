import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { NewsItem } from "@/lib/types/news";

export interface NewsListProps {
  items: NewsItem[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** 2 à 3 cartes maximum sur l'accueil, pas de flux infini (cf. design de l'accueil validé). */
export function NewsList({ items }: NewsListProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <Link key={item.id} href={`/actualites/${item.id}`}>
          <Card categoryColor={item.category}>
            <div className="flex flex-col gap-1 p-4">
              {/*
                Une actualité liée à un événement (eventAt renseigné) affiche la date
                DE L'ÉVÉNEMENT, pas la date de publication — sinon "Prochainement à
                Orgemont" afficherait la mauvaise date (bug corrigé en Phase 4).
              */}
              <p className="text-[12px] text-ink-secondary">
                {item.eventAt ? formatEventDate(item.eventAt) : formatDate(item.publishedAt)}
              </p>
              <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
              <p className="line-clamp-2 text-[14px] text-ink-secondary">{item.summary}</p>
              {item.location && <p className="text-[12px] font-medium text-primary">📍 {item.location}</p>}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
