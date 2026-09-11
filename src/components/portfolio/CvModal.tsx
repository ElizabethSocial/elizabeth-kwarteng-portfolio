import { Printer, X } from "lucide-react";
import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  METRICS,
  SKILLS,
  TOOLSTACK,
} from "@/lib/portfolio-data";

export function CvModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-navy/70 p-4 backdrop-blur-sm sm:p-8">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
        <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-3 rounded-t-2xl border-b border-border bg-white px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Curriculum Vitae
            </p>
            <p className="text-sm text-slate-deep">Elizabeth Kwarteng</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-warm transition hover:bg-slate-deep"
            >
              <Printer className="size-4" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-slate-deep transition hover:bg-mist"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div id="cv-print" className="px-6 py-8 text-charcoal sm:px-10 sm:py-10">
          <header className="border-b border-navy/15 pb-6">
            <h1 className="text-3xl font-semibold text-navy">Elizabeth Kwarteng</h1>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-gold">
              Digital Marketing Consultant &amp; Strategic Communications Professional
            </p>
            <p className="mt-3 text-sm text-slate-deep">
              {CONTACT.email} · {CONTACT.emailAlt} · {CONTACT.location}
            </p>
          </header>

          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Profile
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-deep">
              Bilingual digital marketing and communications professional with 5+ years of
              experience across campaign planning, audience research, content execution, social
              media growth and analytics. Combines commercial marketing delivery with a
              background in international affairs and large-scale public engagement.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Selected Achievements
            </h2>
            <ul className="mt-2 grid gap-1 text-sm text-slate-deep sm:grid-cols-2">
              {METRICS.map((m) => (
                <li key={m.label}>
                  • {m.value.toLocaleString()}
                  {m.suffix} {m.label}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Experience
            </h2>
            <div className="mt-3 space-y-4">
              {EXPERIENCE.map((job) => (
                <div key={job.role + job.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-navy">
                      {job.role} — {job.org}
                    </p>
                    <p className="text-xs text-slate-deep">{job.period}</p>
                  </div>
                  <ul className="mt-1 space-y-1 text-sm text-slate-deep">
                    {job.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Skills
            </h2>
            <div className="mt-2 space-y-1 text-sm text-slate-deep">
              {SKILLS.map((s) => (
                <p key={s.group}>
                  <span className="font-semibold text-navy">{s.group}:</span>{" "}
                  {s.items.join(", ")}
                </p>
              ))}
              <p>
                <span className="font-semibold text-navy">Tools:</span> {TOOLSTACK.join(", ")}
              </p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              Education &amp; Credentials
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-deep">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  • {e.title} — {e.org}
                  {e.year ? ` (${e.year})` : ""}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
