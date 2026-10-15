import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { MutualAidSummary } from "@/lib/types/mutualAid";

export interface MutualAidBannerProps {
  summary: MutualAidSummary;
}

/** Bandeau compact — le détail des annonces reste sur la page Entraide, pas sur l'accueil. */
export function MutualAidBanner({ summary }: MutualAidBannerProps) {
  const total = summary.requestsCount + summary.offersCount;

  return (
    <Link href="/entraide">
      <Card categoryColor="entraide" className="flex items-center gap-3 px-4 py-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-bg text-[16px]"
          aria-hidden="true"
        >
          🤝
        </div>
        <div>
          <p className="text-[14px] font-medium text-ink">
            {total} demande{total > 1 ? "s" : ""} et proposition{total > 1 ? "s" : ""} d&apos;entraide cette semaine
          </p>
          <p className="text-[13px] text-ink-secondary">Je recherche / Je propose · voir le quartier</p>
        </div>
      </Card>
    </Link>
  );
}
