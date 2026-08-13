import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)]">
      <div className="flex items-start justify-between gap-3">
        <span className="badge">{project.category}</span>
        {project.placeholder && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)]">
            Placeholder
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-medium text-[var(--color-text)]">
        {project.name}
      </h3>

      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-faint)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-[var(--color-border)] pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          >
            <Github className="h-3.5 w-3.5" strokeWidth={2} />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
