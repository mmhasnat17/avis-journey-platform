import Link from "next/link";

export function DemoNav() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Avis Journey Platform
        </p>
        <h1 className="mt-1 text-xl font-bold text-slate-900">
          UI Engineer Demo - Mohammed Motahar Hasnat
        </h1>
      </div>

      <Link
        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
        href="/"
      >
        New lookup
      </Link>
    </header>
  );
}
