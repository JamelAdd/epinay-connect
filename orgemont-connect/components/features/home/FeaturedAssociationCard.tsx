import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { FeaturedAssociation } from "@/lib/types/association";

export interface FeaturedAssociationCardProps {
  association: FeaturedAssociation;
}

export function FeaturedAssociationCard({ association }: FeaturedAssociationCardProps) {
  return (
    <Card>
      <div className="flex items-center gap-3 p-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[18px]"
          aria-hidden="true"
        >
          🏘️
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] text-ink-secondary">Association à l&apos;honneur</p>
          <h3 className="truncate text-[16px] font-semibold text-ink">{association.name}</h3>
          <p className="line-clamp-1 text-[13px] text-ink-secondary">{association.shortDescription}</p>
        </div>
      </div>
      <div className="border-t border-border px-4 py-2.5">
        <Link href={`/associations/${association.id}`} className="text-[14px] font-medium text-primary">
          En savoir plus
        </Link>
      </div>
    </Card>
  );
}
