import * as React from "react";

type Props = {
  eyebrow: string;
  title: string;
  message: string;
};

export function HeroBanner({ eyebrow, title, message }: Props) {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-8 text-black shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">{message}</p>
    </section>
  );
}
