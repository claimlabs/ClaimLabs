'use client';

import { useTranslations } from 'next-intl';
import { Wrench, GraduationCap, Rocket, Zap } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const STEPS = [
  { key: 'setup', icon: Wrench },
  { key: 'train', icon: GraduationCap },
  { key: 'launch', icon: Rocket },
] as const;

export function Training() {
  const t = useTranslations('training');

  return (
    <Section ariaLabelledby="training-title" className="light-section">
      <div className="container-x">
        <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-surface to-canvas p-8 shadow-card md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading
              id="training-title"
              eyebrow={t('eyebrow')}
              title={t('title')}
              subtitle={t('subtitle')}
            />
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Zap className="h-4 w-4" aria-hidden="true" />
                {t('badge')}
              </span>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <div className="flex h-full gap-4 rounded-lg border border-border bg-surface/60 p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-ink">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {t(`steps.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {t(`steps.${key}.body`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
