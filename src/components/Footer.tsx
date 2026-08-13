import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { profile } from "../data/profile";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-sm font-semibold text-[var(--color-text)]"
          >
            <ShieldCheck className="h-4 w-4 text-[var(--color-accent)]" strokeWidth={1.75} aria-hidden="true" />
            {profile.name}
          </a>
          <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[var(--color-text-faint)]">
            {profile.role}. Building reliable software with a security-first mindset.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-mono text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Github className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Linkedin className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-col gap-2 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-[var(--color-text-faint)]">
          Designed &amp; built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
