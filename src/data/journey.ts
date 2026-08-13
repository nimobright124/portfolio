export interface JourneyItem {
  label: string;
  status: "done" | "active" | "planned";
}

export interface JourneyYear {
  year: string;
  items: JourneyItem[];
}

export const journey: JourneyYear[] = [
  {
    year: "2026",
    items: [
      { label: "Strengthening frontend engineering fundamentals", status: "active" },
      { label: "Building full-stack projects end to end", status: "active" },
      { label: "Learning cybersecurity fundamentals", status: "active" },
      { label: "Exploring networking and Linux", status: "planned" },
      { label: "Practicing secure coding patterns", status: "planned" },
    ],
  },
];

export const securityFlow = [
  { label: "Application", detail: "Where the logic lives" },
  { label: "Authentication", detail: "Confirming who someone is" },
  { label: "Authorization", detail: "Confirming what they can do" },
  { label: "Input Validation", detail: "Trusting nothing by default" },
  { label: "Secure APIs", detail: "Least privilege at every boundary" },
  { label: "Data Protection", detail: "Encryption in transit and at rest" },
] as const;

export const securityAreas = [
  "Networking",
  "Linux",
  "Web Security",
  "Secure Development",
  "Authentication",
  "Authorization",
  "OWASP",
  "Vulnerability Awareness",
  "Defensive Security",
] as const;
