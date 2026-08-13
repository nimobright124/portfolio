import { Github, GitBranch, GitPullRequest, Star } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const placeholderStats = [
  { icon: GitBranch, label: "Repositories", note: "connect API" },
  { icon: Star, label: "Stars", note: "connect API" },
  { icon: GitPullRequest, label: "Contributions", note: "connect API" },
];

export function OpenSource() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Open Source"
            heading="See how I build."
            description="Most of what I make lives in the open. This block is wired up as a static placeholder — ready for a live GitHub API integration."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-stretch">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex flex-1 flex-col items-start justify-between gap-6 p-6 transition-colors duration-200 hover:border-[var(--color-border-hover)] sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-panel-2)]">
                  <Github className="h-5 w-5 text-[var(--color-text)]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-display text-base font-medium text-[var(--color-text)]">
                    {profile.githubHandle}
                  </p>
                  <p className="text-[13px] text-[var(--color-text-faint)]">
                    Source code, experiments, and work in progress
                  </p>
                </div>
              </div>
              <span className="btn-secondary shrink-0">Visit GitHub</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {placeholderStats.map((stat, i) => (
            <Reveal key={stat.label} delay={150 + i * 80}>
              <div className="panel flex items-center gap-4 p-5">
                <stat.icon className="h-5 w-5 shrink-0 text-[var(--color-accent)]" strokeWidth={1.75} />
                <div>
                  <p className="font-mono text-lg text-[var(--color-text)]">—</p>
                  <p className="text-[12px] text-[var(--color-text-faint)]">
                    {stat.label} · {stat.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
