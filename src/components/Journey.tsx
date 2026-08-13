import { journey } from "../data/journey";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const statusStyle: Record<string, string> = {
  done: "bg-[var(--color-terminal)]",
  active: "bg-[var(--color-accent)]",
  planned: "bg-[var(--color-text-faint)]",
};

const statusLabel: Record<string, string> = {
  done: "Done",
  active: "In progress",
  planned: "Planned",
};

export function Journey() {
  return (
    <section id="journey" className="border-t border-[var(--color-border)] py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Learning Journey"
            heading="Always learning. Always building."
          />
        </Reveal>

        <div className="mt-12 max-w-2xl">
          {journey.map((year) => (
            <div key={year.year}>
              <p className="font-mono text-sm text-[var(--color-accent)]">{year.year}</p>
              <ul className="mt-4 space-y-4 border-l border-[var(--color-border)] pl-6">
                {year.items.map((item, i) => (
                  <Reveal key={item.label} delay={i * 70}>
                    <li className="relative flex items-start gap-3">
                      <span
                        className={`absolute -left-[27px] mt-1.5 h-2 w-2 rounded-full ring-4 ring-[var(--color-bg)] ${statusStyle[item.status]}`}
                        aria-hidden="true"
                      />
                      <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
                        <span className="text-[14px] text-[var(--color-text-muted)]">
                          {item.label}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-text-faint)]">
                          {statusLabel[item.status]}
                        </span>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
