// ─────────────────────────────────────────────────────────────
// CENTRAL CONFIG — edit this file to personalize the entire site.
// Nothing below should need to be touched in components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "YOUR NAME",
  role: "Software Developer & Cybersecurity Learner",
  location: "YOUR LOCATION",
  email: "your@email.com",
  github: "https://github.com/YOUR_GITHUB",
  githubHandle: "github.com/YOUR_GITHUB",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
  linkedinHandle: "linkedin.com/in/YOUR_LINKEDIN",
  // Optional — leave empty string to hide from Contact section
  twitter: "",

  heroEyebrow: "SOFTWARE DEVELOPER • CYBERSECURITY",
  heroHeading: "Building secure software for the modern web.",
  heroSubtext:
    "I'm a software developer and cybersecurity learner focused on building reliable, secure, and useful digital experiences — and on understanding the systems behind them well enough to protect them.",

  aboutParagraphs: [
    "I build software because I like taking a vague problem and turning it into something people can actually use — a form that works the first time, an interface that gets out of the way, an API that does what it says.",
    "Cybersecurity pulls me in for a related reason: most of what makes software good is invisible until it fails. Understanding how systems break is what makes me better at building ones that don't.",
    "I learn by building. Every project on this site exists because I wanted to understand something specific — a protocol, a pattern, a class of vulnerability — and the fastest way to understand it was to build it myself.",
  ],
} as const;

export const principles = [
  {
    title: "Build with purpose",
    description: "Every feature should answer a real need, not pad a portfolio.",
  },
  {
    title: "Security by design",
    description: "Think about failure modes and trust boundaries from the first line of code, not after.",
  },
  {
    title: "Learn continuously",
    description: "The stack changes faster than any single skill set — staying curious is the actual skill.",
  },
  {
    title: "Keep things simple",
    description: "Clarity beats cleverness. Simple systems are easier to secure and easier to maintain.",
  },
  {
    title: "Solve real problems",
    description: "I'd rather ship something small that works than something impressive that doesn't.",
  },
] as const;

export const terminalLines = [
  "developer@portfolio:~$ whoami",
  "Software Developer",
  "Cybersecurity Learner",
  "Problem Solver",
  "Lifelong Learner",
] as const;
