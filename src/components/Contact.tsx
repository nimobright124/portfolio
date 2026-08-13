import { useState, type FormEvent } from "react";
import { Copy, Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently ignore, email is still visible/selectable.
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Contact"
            heading="Let's build something meaningful."
            description="Open to conversations about roles, collaboration, or interesting problems. Reach out directly or send a note below."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Direct links */}
          <Reveal delay={80}>
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleCopy}
                className="panel flex w-full items-center justify-between gap-3 p-4 text-left transition-colors duration-200 hover:border-[var(--color-border-hover)]"
                aria-label="Copy email address"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[var(--color-accent)]" strokeWidth={1.75} />
                  <span className="font-mono text-[13px] text-[var(--color-text)]">
                    {profile.email}
                  </span>
                </span>
                {copied ? (
                  <span className="flex items-center gap-1.5 text-[12px] text-[var(--color-terminal)]">
                    <Check className="h-3.5 w-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="h-3.5 w-3.5 text-[var(--color-text-faint)]" />
                )}
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="panel flex items-center gap-3 p-4 transition-colors duration-200 hover:border-[var(--color-border-hover)]"
              >
                <Github className="h-4 w-4 text-[var(--color-accent)]" strokeWidth={1.75} />
                <span className="font-mono text-[13px] text-[var(--color-text)]">
                  {profile.githubHandle}
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="panel flex items-center gap-3 p-4 transition-colors duration-200 hover:border-[var(--color-border-hover)]"
              >
                <Linkedin className="h-4 w-4 text-[var(--color-accent)]" strokeWidth={1.75} />
                <span className="font-mono text-[13px] text-[var(--color-text)]">
                  {profile.linkedinHandle}
                </span>
              </a>
            </div>
          </Reveal>

          {/* Form — frontend only, opens the user's mail client */}
          <Reveal delay={160}>
            <form onSubmit={handleSubmit} className="panel space-y-4 p-6">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3.5 py-2.5 text-[14px] text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-md border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3.5 py-2.5 text-[14px] text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                  placeholder="What would you like to build or discuss?"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
                <Send className="h-4 w-4" strokeWidth={2} />
              </button>
              <p className="text-[12px] text-[var(--color-text-faint)]">
                Opens your email client — this form doesn't store or transmit messages itself.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
