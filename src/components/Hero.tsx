import { ArrowRight, Mail } from "lucide-react";
import { profile, terminalLines } from "../data/profile";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {profile.heroEyebrow}
          </span>

          <h1 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.1] text-[var(--color-text)] sm:text-5xl lg:text-[3.25rem]">
            {profile.heroHeading}
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--color-text-muted)]">
            {profile.heroSubtext}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail className="h-4 w-4" strokeWidth={2} />
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <Terminal lines={terminalLines} />
      </div>
    </section>
  );
}
