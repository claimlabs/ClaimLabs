'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { PrizeWheel } from './PrizeWheel';

export function Hero() {
  const t = useTranslations('hero');
  const reduced = useReducedMotion();

  const stats = [
    { value: t('statValues.margin'), label: t('stats.marginLost'), tone: 'danger' },
    { value: t('statValues.data'), label: t('stats.ownData'), tone: 'primary' },
    { value: t('statValues.live'), label: t('stats.liveIn'), tone: 'ink' },
  ] as const;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36"
      aria-labelledby="hero-title"
    >
      {/* Arcade grid + glow backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-arcade-grid animate-grid-pan gradient-fade-b opacity-70" />
        <div className="absolute -top-60 start-1/4 h-[700px] w-[700px] rounded-full bg-primary/30 blur-[180px]" />
        <div className="absolute -top-20 end-0 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[180px]" />
        <div className="absolute bottom-0 start-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute top-1/2 start-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* Copy column */}
        <div className="text-center lg:text-start">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.10] px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t('badge')}
          </motion.span>

          <h1
            id="hero-title"
            className="text-display mt-6 font-bold tracking-tight"
          >
            <motion.span
              className="block"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {t('titleLine1')}
            </motion.span>
            <motion.span
              className={`block text-accent ${reduced ? '' : 'animate-glitch'}`}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t('titleLine2')}
            </motion.span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-lg text-ink-muted lg:mx-0"
          >
            {t('subhead')}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button href="#demo" size="lg">
              {t('ctaPrimary')}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </Button>
            <Button href="#how" size="lg" variant="secondary">
              {t('ctaSecondary')}
            </Button>
          </motion.div>

          {/* Stat strip */}
          <motion.dl
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-0 overflow-hidden rounded-2xl glass-card lg:mx-0 w-full"
          >
            {stats.map((s, i) => (
              <div key={s.label} className={`px-3 py-4 text-center sm:px-5 sm:py-5 lg:text-start ${i > 0 ? 'border-s border-border' : ''}`}>
                <dt
                  className={
                    s.tone === 'danger'
                      ? 'font-display text-xl font-bold text-danger sm:text-2xl md:text-3xl'
                      : s.tone === 'primary'
                        ? 'font-display text-xl font-bold text-primary sm:text-2xl md:text-3xl'
                        : 'font-display text-xl font-bold text-ink sm:text-2xl md:text-3xl'
                  }
                >
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Wheel column */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full flex-col items-center"
        >
          <PrizeWheel />
          <p className="mt-2 max-w-xs text-center text-xs text-ink-muted/80">
            {t('wheel.footnote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
