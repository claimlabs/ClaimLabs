'use client';

import { useTranslations } from 'next-intl';
import { Gamepad2, Gift, Store } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const STEPS = [
  { key: 'play', icon: Gamepad2 },
  { key: 'win', icon: Gift },
  { key: 'order', icon: Store },
] as const;

export function HowItWorks() {
  const t = useTranslations('how');

  return (
    <Section id="how" ariaLabelledby="how-title" className="relative">
      <div className="container-x">
        <SectionHeading
          id="how-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[16%] top-[3.25rem] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block"
          />
          {STEPS.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={i * 0.1}>
              <article className="relative h-full rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lift cursor-default">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-canvas shadow-glow">
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-bold text-surface-2 [-webkit-text-stroke:1px_var(--color-border)]">
                    {t(`steps.${key}.step`)}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {t(`steps.${key}.body`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
