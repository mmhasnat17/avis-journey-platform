import * as React from "react";

type Props = {
  reservationId: string;
  lastName: string;
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  vehicleClass: string;
  loyaltyTier: string;
};

export function ReservationSummary(props: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Reservation</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {props.reservationId}
          </h2>
          <p className="mt-1 text-sm text-slate-600">Last name: {props.lastName}</p>
        </div>

        <div className="rounded-xl bg-slate-100 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Loyalty
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{props.loyaltyTier}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Pickup
          </p>
          <p className="mt-1 text-sm text-slate-900">{props.pickupLocation}</p>
          <p className="text-sm text-slate-600">{formatDate(props.pickupDate)}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Return
          </p>
          <p className="mt-1 text-sm text-slate-900">{formatDate(props.returnDate)}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Vehicle
          </p>
          <p className="mt-1 text-sm text-slate-900">{props.vehicleClass}</p>
        </div>
      </div>
    </section>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
