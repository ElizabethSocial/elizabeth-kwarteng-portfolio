import { useState, type FormEvent } from "react";
import { Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { CONTACT, WHATSAPP_URL } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const message = String(data.get("message") ?? "");
    setSending(true);
    const body = encodeURIComponent(
      `Hi Elizabeth,\n\n${message}\n\n— ${name} (${String(data.get("email") ?? "")})`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Project enquiry from ${name}`,
    )}&body=${body}`;
    toast.success("Opening your email app with the message ready to send.");
    form.reset();
    setSending(false);
  };

  return (
    <section id="contact" className="bg-navy py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build a digital presence that performs."
            intro="Tell me about your brand, your audience and what you want to grow. I'll come back with a clear starting point."
            invert
          />

          <div className="mt-10 space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-emerald-brand/15 p-4 transition hover:bg-emerald-brand/25"
            >
              <MessageCircle className="size-5 text-emerald-brand" />
              <span>
                <span className="block text-sm font-semibold text-warm">WhatsApp</span>
                <span className="block text-sm text-warm/65">Start a direct conversation</span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 rounded-xl border border-warm/12 p-4 transition hover:border-gold/50"
            >
              <Mail className="size-5 text-gold" />
              <span>
                <span className="block text-sm font-semibold text-warm">Email</span>
                <span className="block text-sm text-warm/65">
                  {CONTACT.email} · {CONTACT.emailAlt}
                </span>
              </span>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-warm/12 p-4 transition hover:border-gold/50"
            >
              <Linkedin className="size-5 text-gold" />
              <span>
                <span className="block text-sm font-semibold text-warm">LinkedIn</span>
                <span className="block text-sm text-warm/65">Connect professionally</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-warm/12 p-4">
              <MapPin className="size-5 text-gold" />
              <span>
                <span className="block text-sm font-semibold text-warm">Location</span>
                <span className="block text-sm text-warm/65">{CONTACT.location}</span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="h-fit rounded-3xl bg-warm p-7 shadow-2xl sm:p-9"
        >
          <p className="font-display text-xl font-semibold text-navy">Send a message</p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-navy">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-navy">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-navy">
                What would you like to work on?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-gold"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-warm transition hover:bg-slate-deep disabled:opacity-60"
            >
              <Send className="size-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
