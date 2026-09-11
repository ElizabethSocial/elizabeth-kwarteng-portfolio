import { useState } from "react";
import {
  BarChart3,
  Check,
  Compass,
  PenLine,
  Search,
  Share2,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Compass,
  Share2,
  PenLine,
  Search,
  Target,
  BarChart3,
};

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Six ways I move a brand forward."
          intro="Each engagement is scoped around a measurable objective, with clear deliverables and reporting."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Compass;
            const open = active === service.no;
            return (
              <Reveal key={service.no} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setActive(open ? null : service.no)}
                  className={cn(
                    "flex h-full w-full flex-col rounded-2xl border bg-white p-7 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl",
                    open ? "border-gold shadow-xl" : "border-navy/10",
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-warm">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm font-semibold text-gold">
                      {service.no}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-deep">
                    {service.summary}
                  </p>

                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <ul className="overflow-hidden space-y-2 border-t border-navy/10 pt-4 text-sm text-slate-deep">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-emerald-brand" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {open ? "Hide deliverables" : "View deliverables"}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
