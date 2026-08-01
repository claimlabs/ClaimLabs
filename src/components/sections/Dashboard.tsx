'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Gamepad2,
  BadgeCheck,
  Repeat,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const KPIS = [
  { key: 'plays', icon: Gamepad2 },
  { key: 'redemptions', icon: BadgeCheck },
  { key: 'returning', icon: Repeat },
  { key: 'revenue', icon: TrendingUp },
] as const;

// Deterministic sample series (plays scaled down, redemptions absolute-ish).
const PLAYS = [62, 74, 58, 90, 82, 96, 100];
const REDEMPTIONS = [30, 38, 26, 44, 40, 52, 58];

export function Dashboard() {
  const t = useTranslations('dashboard');
  const reduced = useReducedMotion();
  const days = t.raw('days') as string[];
  const campaigns = t.raw('campaigns') as { name: string; metric: string }[];

  return (
    <Section id="dashboard" ariaLabelledby="dashboard-title" className="bg-surface/60">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="dashboard-title"
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
          <Reveal>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {t('tag')}
            </span>
          </Reveal>
        </div>

        {/* Mock dashboard panel */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface shadow-lift">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-danger/70" />
              <span className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="h-3 w-3 rounded-full bg-ink-muted/40" />
              <span className="ms-3 text-xs text-ink-muted">
                app.loyagame.com / analytics
              </span>
              <span className="ms-auto inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                {t('live')}
              </span>
            </div>

            <div className="grid gap-5 p-3 sm:p-5 lg:grid-cols-[1.5fr_1fr]">
              {/* Left: KPIs + chart */}
              <div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {KPIS.map(({ key, icon: Icon }) => (
                    <div
                      key={key}
                      className="rounded-lg border border-border bg-canvas p-4"
                    >
                      <Icon
                        className="h-4 w-4 text-ink-muted"
                        aria-hidden="true"
                      />
                      <p className="mt-3 font-display text-xl font-bold sm:text-2xl">
                        {t(`kpiValues.${key}`)}
                      </p>
                      <p className="mt-1 truncate text-[0.7rem] text-ink-muted">
                        {t(`kpis.${key}`)}
                      </p>
                      <p className="mt-1.5 inline-flex items-center gap-0.5 text-xs font-semibold text-success">
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        {t(`kpiDeltas.${key}`)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="mt-4 rounded-lg border border-border bg-canvas p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{t('chartTitle')}</h3>
                    <div className="flex items-center gap-4 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
                        {t('chartLegendPlays')}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
                        {t('chartLegendRedemptions')}
                      </span>
                    </div>
                  </div>
                  <div
                    className="mt-5 flex h-40 items-end justify-between gap-2"
                    role="img"
                    aria-label={t('chartTitle')}
                  >
                    {days.map((day, i) => (
                      <div
                        key={day}
                        className="flex flex-1 flex-col items-center gap-1.5"
                      >
                        <div className="flex h-32 w-full items-end justify-center gap-1">
                          <motion.span
                            className="w-1/2 rounded-t bg-primary"
                            initial={reduced ? false : { height: 0 }}
                            whileInView={{ height: `${PLAYS[i]}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                          />
                          <motion.span
                            className="w-1/2 rounded-t bg-accent"
                            initial={reduced ? false : { height: 0 }}
                            whileInView={{ height: `${REDEMPTIONS[i]}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.05 + 0.08 }}
                          />
                        </div>
                        <span className="text-[0.65rem] text-ink-muted">
                          {day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: top campaigns */}
              <div className="rounded-lg border border-border bg-canvas p-5">
                <h3 className="text-sm font-semibold">{t('campaignsTitle')}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {campaigns.map((c, i) => (
                    <li key={c.name} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{c.name}</p>
                        <p className="text-xs text-ink-muted">{c.metric}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-md border border-dashed border-border p-4 text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    {t('kpiValues.returning')}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">
                    {t('kpis.returning')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-xs text-ink-muted/70">{t('note')}</p>
      </div>
    </Section>
  );
}
