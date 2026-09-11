import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { Metrics } from "@/components/portfolio/Metrics";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { CvModal } from "@/components/portfolio/CvModal";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";
import { CONTACT } from "@/lib/portfolio-data";

const TITLE = "Elizabeth Kwarteng | Digital Marketing Consultant, Accra";
const DESCRIPTION =
  "Digital marketing consultant in Accra helping brands grow through strategy, content, social media, SEO, paid advertising and analytics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-warm">
      <SiteHeader onOpenCv={() => setCvOpen(true)} />
      <main>
        <Hero onOpenCv={() => setCvOpen(true)} />
        <Metrics />
        <About />
        <Services />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="no-print border-t border-navy/10 bg-warm py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-deep sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Elizabeth Kwarteng · Accra, Ghana</p>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-navy">
            {CONTACT.email}
          </a>
        </div>
      </footer>

      <WhatsAppButton />
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
      <Toaster position="top-center" />
    </div>
  );
}
