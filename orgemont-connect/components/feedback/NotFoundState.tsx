import Link from "next/link";
import { Button } from "@/components/ui/Button";

export interface NotFoundStateProps {
  title?: string;
  description?: string;
}

export function NotFoundState({
  title = "Page introuvable",
  description = "Ce contenu n'existe pas ou a été retiré.",
}: NotFoundStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
      <p className="text-[16px] font-semibold text-ink">{title}</p>
      <p className="text-[14px] text-ink-secondary">{description}</p>
      <Link href="/" className="mt-2">
        <Button variant="secondary" size="sm">
          Retour à l&apos;accueil
        </Button>
      </Link>
    </div>
  );
}
