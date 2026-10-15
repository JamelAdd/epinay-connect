import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { currentDistrict } from "@/lib/config/district";

export default function AProposPage() {
  return (
    <PageContainer className="flex flex-col gap-4">
      <h1 className="text-[22px] font-bold text-ink">À propos de {currentDistrict.appName}</h1>

      <Card>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-[14px] leading-[20px] text-ink">{currentDistrict.independencePositioning}</p>
          <p className="text-[14px] leading-[20px] text-ink-secondary">
            Les associations, commerces et autres acteurs locaux peuvent être partenaires de
            l&apos;application, mais ils n&apos;en sont pas propriétaires.
          </p>
        </div>
      </Card>

      <p className="text-[13px] text-ink-secondary">
        Cette page sera complétée (mentions légales, politique de confidentialité, contact) au fil des
        phases suivantes.
      </p>
    </PageContainer>
  );
}
