export type SkillLevel = "using" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

// level "using" = actively working with this
// level "learning" = currently developing skills in this — rendered as "Learning"
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces people actually enjoy using.",
    skills: [
      { name: "HTML & CSS", level: "using" },
      { name: "JavaScript", level: "using" },
      { name: "TypeScript", level: "using" },
      { name: "React", level: "using" },
      { name: "Vite", level: "using" },
      { name: "Tailwind CSS", level: "using" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "The layer that has to be right.",
    skills: [
      { name: "Node.js", level: "using" },
      { name: "REST APIs", level: "using" },
      { name: "Databases", level: "learning" },
      { name: "Authentication", level: "learning" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Languages I write and reason in.",
    skills: [
      { name: "JavaScript", level: "using" },
      { name: "TypeScript", level: "using" },
      { name: "Python", level: "learning" },
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    description: "The mindset I bring to everything above.",
    skills: [
      { name: "Networking Fundamentals", level: "learning" },
      { name: "Linux", level: "learning" },
      { name: "Web Security", level: "learning" },
      { name: "OWASP Concepts", level: "learning" },
      { name: "Secure Coding", level: "learning" },
      { name: "Authentication & Authorization", level: "learning" },
    ],
  },
];
