'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { PrizeWheel } from './PrizeWheel';
import { TrustedLogos } from '../sections/TrustedLogos';

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

      <div className="container-x relative grid grid-cols-1 items-center gap-8 pb-20 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* Copy column */}
        <div className="min-w-0 overflow-hidden text-center lg:text-start">
          <h1
            id="hero-title"
            className="text-display font-bold tracking-tight"
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
            className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg lg:mx-0"
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
                      ? 'font-display text-lg font-bold text-danger sm:text-xl md:text-3xl'
                      : s.tone === 'primary'
                        ? 'font-display text-lg font-bold text-primary sm:text-xl md:text-3xl'
                        : 'font-display text-lg font-bold text-ink sm:text-xl md:text-3xl'
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

        {/* Trusted logos — mobile only (between copy & wheel) */}
        <TrustedLogos className="block lg:hidden" />

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
