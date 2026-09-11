import { useState } from "react";
import { Expand, X } from "lucide-react";
import { CASE_STUDIES } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : CASE_STUDIES[openIndex];

  return (
    <section id="work" className="bg-warm py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies & Work"
          title="Client campaigns, from brief to published asset."
          intro="Selected promotional campaigns delivered for Ghanaian brands across retail, food and furniture."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.client} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="relative block overflow-hidden bg-mist"
                  aria-label={`View ${study.client} campaign flyer`}
                >
                  <img
                    src={study.image}
                    alt={`${study.client} campaign flyer designed by Elizabeth Kwarteng`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-navy/50 opacity-0 transition group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-warm px-4 py-2 text-sm font-medium text-navy">
                      <Expand className="size-4" /> View campaign
                    </span>
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {study.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{study.client}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-deep">
                    {study.objective}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className="mt-4 self-start text-sm font-medium text-navy underline-offset-4 hover:text-gold hover:underline"
                  >
                    Read the case study
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-navy/75 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-warm/90 text-navy transition hover:bg-warm"
            >
              <X className="size-4" />
            </button>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-mist p-6 sm:p-8">
                <img
                  src={active.image}
                  alt={`${active.client} campaign flyer, full view`}
                  className="mx-auto max-h-[70vh] w-full rounded-xl object-contain shadow-lg"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {active.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-navy">{active.client}</h3>

                <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-deep">
                  <div>
                    <p className="font-semibold text-navy">Campaign objective</p>
                    <p className="mt-1">{active.objective}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Audience targeting</p>
                    <p className="mt-1">{active.audience}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Channels used</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {active.channels.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Original flyer copy</p>
                    <p className="mt-1 rounded-xl border border-navy/10 bg-mist p-4 italic">
                      {active.flyerText}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Results summary</p>
                    <div className="mt-2 grid gap-2">
                      {active.results.map((r) => (
                        <div
                          key={r.metric}
                          className="flex items-center justify-between rounded-lg border border-navy/10 px-4 py-2.5"
                        >
                          <span className="text-xs uppercase tracking-[0.12em] text-slate-deep">
                            {r.metric}
                          </span>
                          <span className="text-sm font-semibold text-emerald-brand">
                            {r.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
