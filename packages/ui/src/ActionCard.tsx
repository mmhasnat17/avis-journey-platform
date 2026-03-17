import * as React from "react";

type Props = {
  title: string;
  description: string;
  status: "ready" | "complete" | "recommended";
  ctaLabel: string;
  href: string;
};

const statusStyles: Record<Props["status"], string> = {
  ready: "bg-slate-100 text-slate-700",
  complete: "bg-emerald-100 text-emerald-700",
  recommended: "bg-blue-100 text-blue-700",
};

export function ActionCard({
  title,
  description,
  status,
  ctaLabel,
  href,
}: Props) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mt-5 text-sm font-semibold text-blue-700">{ctaLabel} →</div>
    </a>
  );
}
