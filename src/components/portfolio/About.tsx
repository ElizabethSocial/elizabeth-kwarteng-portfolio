import { Quote } from "lucide-react";
import { TESTIMONIAL } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PILLARS = [
  {
    title: "Audience research",
    body: "Understanding who is listening, what they care about and where they spend attention.",
  },
  {
    title: "Campaign execution",
    body: "Turning strategy into shipped content, live ads and consistent publishing rhythm.",
  },
  {
    title: "Stakeholder management",
    body: "Aligning clients, partners and internal teams around one measurable objective.",
  },
  {
    title: "Analytics & optimisation",
    body: "Reading performance honestly and reallocating effort towards what converts.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-warm py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A data-driven marketer with a strategist's background."
            intro="Over 5+ years I've planned campaigns, researched audiences, produced content and measured performance — for commercial brands and for large-scale public engagement programmes."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-deep">
            <p>
              My work sits at the intersection of strategy and execution: I build the plan, then
              produce the content, run the channels and report on what it delivered. Bilingual in
              English and French, I'm comfortable communicating across markets and cultures.
            </p>
            <p>
              A background in international affairs and public-sector communications sharpened
              the fundamentals that commercial marketing runs on — rigorous audience research,
              disciplined message control, and delivery under real stakeholder scrutiny.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-navy/10 bg-white p-5">
                <p className="font-semibold text-navy">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-deep">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pt-10">
          <figure className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-10">
            <Quote className="size-10 text-gold" />
            <blockquote className="mt-6 font-display text-xl leading-relaxed text-warm sm:text-2xl">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-warm/15 pt-6">
              <p className="font-semibold text-warm">{TESTIMONIAL.name}</p>
              <p className="text-sm text-warm/65">{TESTIMONIAL.title}</p>
            </figcaption>
          </figure>

          <div className="mt-6 rounded-3xl border border-navy/10 bg-mist p-8">
            <p className="font-display text-lg italic text-navy">
              &ldquo;Be where your customers are, and speak their language.&rdquo;
            </p>
            <p className="mt-2 text-sm text-slate-deep">Elizabeth&apos;s working principle</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
