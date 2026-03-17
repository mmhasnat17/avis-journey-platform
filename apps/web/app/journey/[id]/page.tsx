import { ActionCard, HeroBanner, PageShell, ReservationSummary } from "@avis/ui";
import { DemoNav } from "@/components/DemoNav";
import { StatusList } from "@/components/StatusList";
import { getJourney } from "@/lib/api";

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getJourney(id);

  return (
    <PageShell>
      <DemoNav />

      <div className="space-y-6">
        <HeroBanner
          eyebrow={data.banner.eyebrow}
          title={data.banner.title}
          message={data.banner.message}
        />

        <ReservationSummary
          reservationId={data.reservation.id}
          lastName={data.reservation.lastName}
          pickupLocation={data.reservation.pickupLocation}
          pickupDate={data.reservation.pickupDate}
          returnDate={data.reservation.returnDate}
          vehicleClass={data.reservation.vehicleClass}
          loyaltyTier={data.customer.loyaltyTier}
        />

        <section>
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Journey actions
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Recommended next steps
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {data.actions.map((action) => (
              <ActionCard
                key={action.id}
                title={action.title}
                description={action.description}
                status={action.status}
                ctaLabel={action.ctaLabel}
                href={action.href}
              />
            ))}
          </div>
        </section>

        <StatusList
          customerName={data.customer.name}
          biometricEligible={data.customer.biometricEligible}
          eReceiptEnabled={data.customer.eReceiptEnabled}
        />
      </div>
    </PageShell>
  );
}
