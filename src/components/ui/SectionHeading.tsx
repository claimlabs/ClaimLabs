import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

/** Eyebrow + title + optional subtitle, left-aligned by default. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = 'start',
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
  align?: 'start' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-70" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={id} className="text-h2 mt-5 font-bold">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-ink-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
