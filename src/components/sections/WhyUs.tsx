'use client';

import { useTranslations } from 'next-intl';
import { ShieldCheck, Database, Zap, SlidersHorizontal } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const REASONS = [
  { key: 'data',       icon: Zap,                accent: 'Skill-based' },
  { key: 'commission', icon: ShieldCheck,         accent: 'Your brand' },
  { key: 'speed',      icon: Database,            accent: 'Real rewards' },
  { key: 'control',    icon: SlidersHorizontal,  accent: 'Full control' },
] as const;

export function WhyUs() {
  const t = useTranslations('whyUs');

  return (
    <Section ariaLabelledby="whyus-title" className="light-section">
      <div className="container-x">
        <SectionHeading
          id="whyus-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {REASONS.map(({ key, icon: Icon, accent }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-4 lg:p-7">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 lg:h-12 lg:w-12">
                  <Icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mb-1 text-xl font-bold tracking-tight text-ink lg:text-3xl">
                  {accent}
                </p>
                <h3 className="mb-2 text-sm font-semibold text-ink lg:text-base">
                  {t(`reasons.${key}.title`)}
                </h3>
                <p className="hidden text-sm leading-relaxed text-ink-muted lg:block">
                  {t(`reasons.${key}.body`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
