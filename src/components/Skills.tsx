import { skillCategories } from "../data/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-border)] py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Skills"
            heading="What I build with — and what I'm building next."
            description="Not everything here is mastered. Skills marked “Learning” are genuinely in progress, not padding."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 80}>
              <div className="panel h-full p-5 transition-colors duration-200 hover:border-[var(--color-border-hover)]">
                <h3 className="font-display text-base font-medium text-[var(--color-text)]">
                  {category.title}
                </h3>
                <p className="mt-1 text-[13px] text-[var(--color-text-faint)]">
                  {category.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <span className="text-[13px] text-[var(--color-text-muted)]">
                        {skill.name}
                      </span>
                      {skill.level === "learning" && (
                        <span className="badge shrink-0">Learning</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
