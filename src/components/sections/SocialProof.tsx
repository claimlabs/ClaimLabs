'use client';

import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { TrustedLogos } from './TrustedLogos';

export function SocialProof() {
  const t = useTranslations('proof');

  return (
    <Section ariaLabelledby="proof-title">
      <div className="container-x">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t('eyebrow')}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 id="proof-title" className="text-h2 mt-5 max-w-2xl font-bold">
            {t('title')}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-10 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] p-8 shadow-card md:p-12">
            <Quote
              className="h-10 w-10 text-primary/40 rtl:-scale-x-100"
              aria-hidden="true"
            />
            <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
              {'“'}{t('quote')}{'”'}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 font-display text-lg font-bold text-primary"
                aria-hidden="true"
              >
                {'★'}
              </span>
              <div>
                <p className="font-semibold">{t('author')}</p>
                <p className="text-sm text-ink-muted">{t('role')}</p>
              </div>
              <span className="ms-auto rounded-full border border-dashed border-border px-3 py-1 text-[0.65rem] text-ink-muted/70">
                {t('placeholderNote')}
              </span>
            </figcaption>
          </figure>
        </Reveal>

      </div>
    </Section>
  );
}
