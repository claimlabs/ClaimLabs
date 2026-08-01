import { cn } from '@/lib/cn';

/**
 * LOYA wordmark. The "O" is rendered as an arcade token (loyalty × game).
 * Pure type + token colors so it re-skins with the brand.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex select-none items-center font-display text-xl font-bold tracking-tight text-ink',
        className,
      )}
      aria-label="LOYA"
    >
      <span>L</span>
      <span
        className="mx-[1px] inline-flex h-[0.9em] w-[0.9em] items-center justify-center rounded-full border-[3px] border-primary align-middle"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
      <span>YA</span>
    </span>
  );
}
