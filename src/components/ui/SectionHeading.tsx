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
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent shadow-[0_0_12px_rgba(var(--accent-rgb),0.2)]">
          <span className="eyebrow-dot relative h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={id} className="text-h2 mt-5 font-bold">
          <span className="gradient-text">{title.split(' ')[0]}</span>
          {title.includes(' ') ? ' ' + title.split(' ').slice(1).join(' ') : ''}
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
