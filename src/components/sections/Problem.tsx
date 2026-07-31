'use client';

import { useTranslations } from 'next-intl';
import { Receipt, EyeOff, Heart } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const CARDS = [
  { key: 'tax', icon: Receipt },
  { key: 'data', icon: EyeOff },
  { key: 'social', icon: Heart },
] as const;

export function Problem() {
  const t = useTranslations('problem');

  return (
    <Section id="problem" ariaLabelledby="problem-title">
      <div className="container-x">
        <SectionHeading
          id="problem-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <article className="group h-full rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-danger/30 hover:-translate-y-1 hover:shadow-lift cursor-default">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-danger/10 text-danger">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-bold text-danger">
                    {t(`cards.${key}.stat`)}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {t(`cards.${key}.body`)}
                </p>
                <p className="mt-5 text-xs uppercase tracking-wider text-ink-muted/70">
                  {t(`cards.${key}.statLabel`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-3xl border-s-2 border-primary ps-5 text-xl font-medium text-ink md:text-2xl">
            {t('kicker')}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
