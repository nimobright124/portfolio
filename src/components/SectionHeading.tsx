interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span>{index}</span>
        <span className="h-px w-8 bg-[var(--color-border-hover)]" />
        <span className="text-[var(--color-accent)]">{eyebrow}</span>
      </div>
      <h2 className="section-heading">{heading}</h2>
      {description && (
        <p
          className={`mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
