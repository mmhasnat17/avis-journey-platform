import Link from "next/link";
import { PageShell } from "@avis/ui";
import { DemoNav } from "@/components/DemoNav";

export default async function EReceiptPage({
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
          E-receipt
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Digital receipt preferences
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          This route shows how additional customer journey steps can be modeled as
          separate destinations. In a full implementation, this page would submit a
          mutation to the BFF and persist the customer preference.
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
