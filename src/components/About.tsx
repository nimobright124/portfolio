import { profile, principles } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="01" eyebrow="About" heading="A developer who thinks about what could go wrong." />
        </Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={80}>
            <div className="space-y-5">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <p className="eyebrow mb-5">Developer Philosophy</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="panel p-4 transition-colors duration-200 hover:border-[var(--color-border-hover)]"
                  >
                    <h3 className="font-display text-sm font-medium text-[var(--color-text)]">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-muted)]">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
