"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@avis/ui";

export default function HomePage() {
  const router = useRouter();
  const [reservationId, setReservationId] = useState("ABC123");

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Avis TATA Consulting customer journey demo
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Post-booking journey orchestration
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            This mini platform demonstrates a Next.js frontend, a NestJS BFF,
            shared component libraries, and a reusable journey engine that
            drives upgrade, pre-check-in, e-receipt, and biometric actions.
          </p>

          <form
            className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-[1fr_auto]"
            onSubmit={(event) => {
              event.preventDefault();
              router.push(`/journey/${reservationId}`);
            }}
          >
            <div>
              <label
                htmlFor="reservationId"
                className="text-sm font-semibold text-slate-700"
              >
                Reservation ID
              </label>
              <input
                id="reservationId"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none ring-0 transition focus:border-blue-500"
                value={reservationId}
                onChange={(event) => setReservationId(event.target.value.toUpperCase())}
                placeholder="ABC123"
              />
              <p className="mt-2 text-sm text-slate-500">
                Demo IDs: <span className="font-semibold">ABC123</span> or{" "}
                <span className="font-semibold">VIP777</span>
              </p>
            </div>

            <button
              type="submit"
              className="self-end rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Find reservation
            </button>
          </form>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Next.js App Router",
              body: "The frontend uses route-based customer journeys and typed data fetching.",
            },
            {
              title: "NestJS BFF",
              body: "The backend composes reservation and customer data before returning a UI-ready response.",
            },
            {
              title: "Shared packages",
              body: "Types, business rules, and UI components live in reusable monorepo packages.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          ))}
        </section>
      </div>
    </PageShell>
  );
}
