import { ArrowDown, ShieldCheck } from "lucide-react";
import { securityFlow, securityAreas } from "../data/journey";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CybersecurityMindset() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-t border-[var(--color-border)] py-24 sm:py-28"
    >
      <div className="grid-bg absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Cybersecurity"
            heading="Security isn't an afterthought."
            description="I'm developing a security-first engineering mindset — treating every layer of an application as a trust boundary worth thinking about."
          />
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Flow diagram */}
          <Reveal delay={80}>
            <div className="panel p-6">
              <p className="eyebrow mb-6">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
                Security Mindset
              </p>
              <div className="flex flex-col items-stretch">
                {securityFlow.map((step, i) => (
                  <div key={step.label}>
                    <div className="flex items-center justify-between rounded-md border border-[var(--color-border)] bg-[var(--color-panel-2)] px-4 py-3">
                      <span className="font-mono text-[13px] text-[var(--color-text)]">
                        {step.label}
                      </span>
                      <span className="hidden text-right text-[11px] text-[var(--color-text-faint)] sm:block">
                        {step.detail}
                      </span>
                    </div>
                    {i < securityFlow.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <ArrowDown
                          className="h-3.5 w-3.5 text-[var(--color-text-faint)]"
                          strokeWidth={1.75}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Areas of focus */}
          <Reveal delay={160}>
            <div className="flex h-full flex-col justify-center">
              <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                This isn't about offensive tooling or a hacker aesthetic — it's about understanding
                the fundamentals well enough that they shape how I write software from the start.
                Areas I'm actively developing knowledge in:
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {securityAreas.map((area) => (
                  <span key={area} className="badge">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
