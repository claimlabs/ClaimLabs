import { cn } from '@/lib/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex select-none items-center font-display text-2xl font-black tracking-tight text-ink',
        className,
      )}
      aria-label="ClaimLabs"
    >
      claimlabs
    </span>
  );
}
