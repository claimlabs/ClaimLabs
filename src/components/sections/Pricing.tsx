'use client';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { cn } from '@/lib/cn';

const TIERS = [
  { key: 'starter', popular: false },
  { key: 'growth', popular: true },
  { key: 'pro', popular: false },
] as const;

function TierCard({
  tierKey,
  popular,
  t,
}: {
  tierKey: string;
  popular: boolean;
  t: ReturnType<typeof useTranslations<'pricing'>>;
}) {
  const features = t.raw(`tiers.${tierKey}.features`) as string[];

  const inner = (
    <article
      className={cn(
        'relative flex h-full flex-col p-7',
        popular ? 'rounded-2xl bg-canvas' : 'rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-primary/30',
      )}
    >
      {popular && (
        <span className="absolute -top-[1.125rem] start-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-bold text-white shadow-glow rtl:translate-x-1/2">
          {t('popular')}
        </span>
      )}

      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-xl font-bold">
          {t(`tiers.${tierKey}.name`)}
        </h3>
        <span className="rounded border border-dashed border-primary/40 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-primary/70">
          {t('placeholderBadge')}
        </span>
      </div>

      <p className="mt-2 text-sm text-ink-muted">
        {t(`tiers.${tierKey}.tagline`)}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-display text-3xl font-bold sm:text-4xl">
          {t(`tiers.${tierKey}.price`)}
        </span>
        <span className="text-sm text-ink-muted">{t('perMonth')}</span>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="text-ink">{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href="#demo"
        variant={popular ? 'primary' : 'secondary'}
        className="mt-8 w-full"
      >
        {t('cta')}
      </Button>
    </article>
  );

  if (popular) {
    return (
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-primary to-accent p-[1.5px] shadow-glow-lg lg:-translate-y-3">
        {inner}
      </div>
    );
  }

  return inner;
}

export function Pricing() {
  const t = useTranslations('pricing');

  return (
    <Section id="pricing" ariaLabelledby="pricing-title" className="bg-surface/60">
      <div className="container-x">
        <SectionHeading
          id="pricing-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {TIERS.map(({ key, popular }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <TierCard tierKey={key} popular={popular} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
