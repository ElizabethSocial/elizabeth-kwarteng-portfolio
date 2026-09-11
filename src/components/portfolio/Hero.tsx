import { ArrowRight, Download, MapPin } from "lucide-react";
import portrait from "@/assets/portrait.asset.json";
import { CREDIBILITY } from "@/lib/portfolio-data";

export function Hero({ onOpenCv }: { onOpenCv: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-warm pt-32 pb-20 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs font-medium text-slate-deep">
            <span className="size-1.5 rounded-full bg-emerald-brand" />
            Available for consulting &amp; freelance projects
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Digital Marketing Strategies That Turn{" "}
            <span className="relative whitespace-nowrap text-gold">Attention Into Action.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-deep">
            I help brands strengthen their digital presence through strategic content, social
            media, SEO, paid advertising and data-driven marketing solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-warm transition hover:bg-slate-deep"
            >
              View My Work <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-medium text-navy transition hover:border-gold hover:text-gold"
            >
              Let&apos;s Work Together
            </a>
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-slate-deep underline-offset-4 transition hover:text-navy hover:underline"
            >
              <Download className="size-4" /> Download CV
            </button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-slate-deep">
            <MapPin className="size-4 text-gold" /> Accra, Ghana · Bilingual (English &amp;
            French)
          </div>

          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 border-t border-navy/10 pt-6">
            {CREDIBILITY.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-deep">
                  {item}
                </span>
                {i < CREDIBILITY.length - 1 ? (
                  <span className="hidden h-3 w-px bg-navy/15 sm:block" />
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 to-navy/10 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/10 bg-mist shadow-xl">
            <img
              src={portrait.url}
              alt="Elizabeth Kwarteng, Digital Marketing Consultant, professional portrait"
              className="aspect-[4/5] w-full object-cover"
              width={860}
              height={1075}
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-lg">
            <p className="font-display text-2xl font-semibold text-navy">5+ yrs</p>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-deep">
              Marketing &amp; Communications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
