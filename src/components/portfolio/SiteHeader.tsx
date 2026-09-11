import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader({ onOpenCv }: { onOpenCv: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy/10 bg-warm/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-navy">
            Elizabeth Kwarteng
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-gold sm:block" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-deep transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onOpenCv}
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition hover:border-gold hover:text-gold"
          >
            <Download className="size-4" /> Download CV
          </button>
          <a
            href="#contact"
            className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-warm transition hover:bg-slate-deep"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex size-10 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-navy/10 bg-warm px-5 pb-6 pt-4 lg:hidden">
          <nav className="grid gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-deep hover:bg-mist hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenCv();
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-4 py-2.5 text-sm font-medium text-navy"
            >
              <Download className="size-4" /> Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-navy px-4 py-2.5 text-center text-sm font-medium text-warm"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
