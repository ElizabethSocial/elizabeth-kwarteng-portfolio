import { SKILLS, TOOLSTACK } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Tech Stack"
          title="The capability set behind the campaigns."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-gold" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                    {group.group}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-navy/10 bg-mist px-3 py-1.5 text-xs font-medium text-slate-deep transition hover:border-gold hover:text-navy"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={350}>
            <div className="h-full rounded-2xl bg-navy p-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-gold" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-warm">
                  Toolstack
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {TOOLSTACK.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-warm/15 px-3 py-1.5 text-xs font-medium text-warm/85"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
