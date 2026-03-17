"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { PageShell } from "@avis/ui";
import { DemoNav } from "@/components/DemoNav";
import { useJourney } from "@/hooks/useJourney";
import { VehicleClass } from "@avis/types";

const upgradeOptions: VehicleClass[] = ["SUV", "Luxury"];

export default function UpgradePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const reservationId = params.id;
  const { data, mutating, upgrade, error } = useJourney(reservationId);

  if (!data) {
    return (
      <PageShell>
        <DemoNav />
        <p className="text-sm text-slate-600">Loading upgrade options...</p>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <DemoNav />

      <div className="mx-auto max-w-4xl">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Vehicle upgrade
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Review upgrade options for reservation {data.reservation.id}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Current class:{" "}
            <span className="font-semibold">{data.reservation.vehicleClass}</span>
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {upgradeOptions.map((option) => (
              <button
                key={option}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-blue-400 hover:bg-white"
                disabled={mutating}
                onClick={async () => {
                  const result = await upgrade({ vehicleClass: option });
                  if (result) {
                    router.push(`/journey/${reservationId}`);
                  }
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Upgrade option
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">{option}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Demo mutation: update the reservation through the NestJS BFF and
                  return an updated dashboard state.
                </p>
              </button>
            ))}
          </div>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

          <div className="mt-8">
            <Link
              href={`/journey/${reservationId}`}
              className="text-sm font-semibold text-blue-700"
            >
              ← Back to dashboard
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
