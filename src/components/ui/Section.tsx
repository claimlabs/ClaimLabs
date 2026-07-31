import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

/** Section wrapper: anchor target with scroll offset for the sticky nav. */
export function Section({
  id,
  children,
  className,
  ariaLabelledby,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('section-y scroll-mt-20 md:scroll-mt-24', className)}
    >
      {children}
    </section>
  );
}
