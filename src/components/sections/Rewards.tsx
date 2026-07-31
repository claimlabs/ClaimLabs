'use client';

import { useTranslations } from 'next-intl';
import { CalendarClock, SlidersHorizontal, Megaphone } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Leaderboard } from './Leaderboard';
import { CouponGenerator } from './CouponGenerator';

const FEATURES = [
  { key: 'lto', icon: CalendarClock },
  { key: 'odds', icon: SlidersHorizontal },
  { key: 'targeting', icon: Megaphone },
] as const;

export function Rewards() {
  const t = useTranslations('rewards');

  return (
    <Section id="rewards" ariaLabelledby="rewards-title">
      <div className="container-x">
        <SectionHeading
          id="rewards-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Leaderboard />
          </Reveal>
          <Reveal delay={0.08}>
            <CouponGenerator />
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {FEATURES.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <article className="h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lift cursor-default">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {t(`features.${key}.body`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
