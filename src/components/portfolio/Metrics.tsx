import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { METRICS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <p ref={ref} className="font-display text-4xl font-semibold text-warm">
      {display.toLocaleString()}
      <span className="text-gold">{suffix}</span>
    </p>
  );
}

export function Metrics() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="Results measured, not claimed."
          intro="Campaign outcomes from audience growth, engagement and public participation programmes."
          invert
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="group rounded-2xl border border-warm/10 bg-warm/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-warm/10"
            >
              <Counter value={metric.value} suffix={metric.suffix} />
              <p className="mt-3 text-sm font-medium text-warm/85">{metric.label}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-brand/15 px-2.5 py-1 text-xs font-medium text-emerald-brand">
                <TrendingUp className="size-3.5" />
                {metric.trend}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
