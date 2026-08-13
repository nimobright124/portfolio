export type ProjectCategory =
  | "Web Development"
  | "Software Engineering"
  | "Cybersecurity"
  | "Experiments";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  placeholder?: boolean;
}

// Replace these with real projects. Keep the shape the same —
// every field maps directly into the ProjectCard component.
export const projects: Project[] = [
  {
    name: "Project One",
    description:
      "Short description of what this project does, the problem it solves, and any interesting technical decisions behind it.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    github:"",
    placeholder: true,
  },
  {
    name: "Project Two",
    description:
      "Short description of what this project does, the problem it solves, and any interesting technical decisions behind it.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    category: "Software Engineering",
    github: " ",
    placeholder: true,
  },
  {
    name: "Project Three",
    description:
      "Short description of a security-focused build — a scanner, a hardened auth flow, a lab writeup, or a defensive tool.",
    technologies: ["Python", "Linux"],
    category: "Cybersecurity",
    github: " ",
    placeholder: true,
  },
];
