'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { SetupCard } from './SetupCard';

export function Hero() {
  const t = useTranslations('hero');
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="light-section relative overflow-hidden pt-24 sm:pt-28 md:pt-36"
      aria-labelledby="hero-title"
    >
      {/* Arcade grid + glow backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-arcade-grid animate-grid-pan gradient-fade-b opacity-70" />
      </div>

      <div className="relative grid w-full grid-cols-1 items-center gap-8 pb-20 px-[clamp(1.5rem,5vw,3.5rem)] sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:ps-[clamp(1.5rem,9vw,9rem)] lg:pe-[clamp(1.5rem,5vw,4rem)]">
        {/* Copy column */}
        <div className="min-w-0 max-w-3xl overflow-hidden text-start">
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
              className="block"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t('titleLine2')}
              <span className="text-accent">.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-ink-muted sm:text-lg"
          >
            {t('subhead')}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-start gap-3"
          >
            <Button href="#demo" size="lg">
              {t('ctaPrimary')}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full items-center justify-center lg:justify-end"
        >
          <SetupCard />
        </motion.div>
      </div>
    </section>
  );
}
