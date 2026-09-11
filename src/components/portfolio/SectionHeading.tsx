import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  invert = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  invert?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-tight sm:text-4xl",
          invert ? "text-warm" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-warm/70" : "text-slate-deep",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
