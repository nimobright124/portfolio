import { useScrollProgress } from "../hooks/useScrollProgress";

const BAR_SEGMENTS = 10;

export function ScanLine() {
  const progress = useScrollProgress();
  const filled = Math.round((progress / 100) * BAR_SEGMENTS);

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2 lg:flex"
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--color-text-faint)]">
        SCANNING
      </span>
      <div className="font-mono text-[10px] tracking-[0.1em] text-[var(--color-accent)]">
        {Array.from({ length: BAR_SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={i < filled ? "text-[var(--color-accent)]" : "text-[var(--color-border)]"}
          >
            █
          </span>
        ))}
      </div>
      <span className="font-mono text-[10px] text-[var(--color-text-faint)]">
        {String(progress).padStart(3, "0")}%
      </span>
      <div className="relative mt-1 h-24 w-px bg-[var(--color-border)]">
        <div
          className="absolute left-1/2 w-px -translate-x-1/2 bg-[var(--color-accent)] transition-[height] duration-150"
          style={{ height: `${progress}%`, top: 0 }}
        />
      </div>
    </div>
  );
}
