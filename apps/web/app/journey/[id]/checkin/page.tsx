import Link from "next/link";
import { PageShell } from "@avis/ui";
import { DemoNav } from "@/components/DemoNav";

export default async function CheckInPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageShell>
      <DemoNav />
      <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Pre-check-in
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Reservation {id} is ready for online check-in
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          This page is intentionally lightweight for the interview demo. It exists
          to show route-based journey steps in Next.js App Router and to reinforce
          the post-booking redirect use case from the role description.
        </p>

        <div className="mt-8">
          <Link href={`/journey/${id}`} className="text-sm font-semibold text-blue-700">
            ← Back to dashboard
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
