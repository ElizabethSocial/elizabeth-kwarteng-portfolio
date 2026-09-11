import { GraduationCap } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="bg-warm py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Five years of marketing, communications and delivery."
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative border-l border-navy/12 pl-8">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.role + job.org} delay={i * 80}>
                <div className="relative pb-10 last:pb-0">
                  <span
                    className={cn(
                      "absolute -left-[2.3rem] top-1.5 size-3 rounded-full border-2 border-warm",
                      job.highlight ? "bg-gold" : "bg-navy/30",
                    )}
                  />
                  <div
                    className={cn(
                      "rounded-2xl border p-6",
                      job.highlight
                        ? "border-gold/50 bg-gold/[0.06]"
                        : "border-navy/10 bg-white",
                    )}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-navy">{job.role}</h3>
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-deep">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gold">{job.org}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-deep">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-2xl bg-navy p-7">
              <div className="flex items-center gap-3 text-warm">
                <GraduationCap className="size-5 text-gold" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                  Education &amp; Credentials
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                {EDUCATION.map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "rounded-xl border p-5",
                      item.highlight
                        ? "border-gold/50 bg-gold/10"
                        : "border-warm/12 bg-warm/5",
                    )}
                  >
                    <p className="font-semibold text-warm">{item.title}</p>
                    <p className="mt-1 text-sm text-warm/65">
                      {item.org}
                      {item.year ? ` · ${item.year}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
