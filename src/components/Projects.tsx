import { projects } from "../data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--color-border)] py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Projects"
            heading="Things I've built."
            description="A mix of web development, software engineering, and security-focused work. Replace these with your own — the data shape is designed for it."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
