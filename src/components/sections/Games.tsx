'use client';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { FruitSlicePreview, CatchFriesPreview } from './GamePreviews';

const GAMES = [
  { key: 'fruit', Preview: FruitSlicePreview },
  { key: 'fries', Preview: CatchFriesPreview },
] as const;

export function Games() {
  const t = useTranslations('games');

  return (
    <Section id="games" ariaLabelledby="games-title">
      <div className="container-x">
        <SectionHeading
          id="games-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {GAMES.map(({ key, Preview }, i) => {
            const features = t.raw(`${key}.features`) as string[];
            return (
              <Reveal key={key} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-lift hover:border-primary/30 cursor-default">
                  {/* Animated screen */}
                  <div className="relative h-56 overflow-hidden border-b border-border bg-canvas bg-arcade-grid">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                      {t('playLabel')}
                    </span>
                    <span className="absolute end-4 top-4 z-10 rounded-full border border-border bg-surface/70 px-2.5 py-1 text-[0.65rem] font-medium text-ink-muted backdrop-blur">
                      {t('tag')}
                    </span>
                    <Preview />
                  </div>
                  {/* Details */}
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-bold">
                      {t(`${key}.name`)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {t(`${key}.tagline`)}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {t(`${key}.body`)}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-ink"
                        >
                          <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted/70">
          {t('previewNote')}
        </p>
      </div>
    </Section>
  );
}
