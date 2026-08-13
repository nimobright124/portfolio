import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface TerminalProps {
  lines: readonly string[];
}

export function Terminal({ lines }: TerminalProps) {
  const reducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reducedMotion ? lines.length : 0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(lines.length);
      return;
    }

    setVisibleLines(0);
    const timers: number[] = [];
    lines.forEach((_, i) => {
      const t = window.setTimeout(() => setVisibleLines(i + 1), 350 + i * 420);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [lines, reducedMotion]);

  return (
    <div className="panel animate-fade-up relative mx-auto w-full max-w-md overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]" style={{ animationDelay: "150ms" }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-panel-2)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#5d626b]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5d626b]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5d626b]/50" />
        <span className="ml-2 font-mono text-[11px] text-[var(--color-text-faint)]">
          session — zsh
        </span>
      </div>

      {/* Body */}
      <div className="min-h-[220px] px-5 py-6 font-mono text-[13px] leading-7">
        {lines.map((line, i) => {
          const isPrompt = i === 0;
          const shown = i < visibleLines;
          return (
            <div
              key={line + i}
              className="transition-opacity duration-300"
              style={{ opacity: shown ? 1 : 0 }}
            >
              {isPrompt ? (
                <span className="text-[var(--color-terminal)]">{line}</span>
              ) : (
                <span className="text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-text-faint)]">→ </span>
                  {line}
                </span>
              )}
            </div>
          );
        })}
        <span
          className="mt-1 inline-block h-4 w-2 bg-[var(--color-terminal)] align-middle"
          style={{
            opacity: visibleLines >= lines.length ? undefined : 0,
            animation: reducedMotion ? "none" : "blink 1.1s step-end infinite",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
