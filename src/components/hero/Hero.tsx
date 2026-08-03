'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export function Hero() {
  const t = useTranslations('hero');
  const reduced = useReducedMotion();

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

      <div className="relative grid w-full grid-cols-1 items-center gap-8 pb-20 px-[clamp(1.5rem,5vw,3.5rem)] sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:ps-[clamp(1.5rem,9vw,9rem)] lg:pe-[clamp(1.5rem,5vw,4rem)]">
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
              className="block text-accent"
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
            className="mt-6 mx-auto max-w-xl text-base text-ink-muted sm:text-lg lg:mx-0"
          >
            {t('subhead')}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button href="#demo" size="lg">
              {t('ctaPrimary')}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
            </Button>
            <Button href="#how" size="lg" variant="secondary">
              {t('ctaSecondary')}
            </Button>
          </motion.div>
        </div>

        {/* App screenshot column */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full items-center justify-center lg:justify-end lg:-me-16 lg:overflow-visible"
        >
          <Image
            src="/images/loya-hero.png"
            alt="ClaimLabs mobile app showing spin wheel, leaderboard, and rewards"
            width={800}
            height={960}
            priority
            className="w-full max-w-sm mx-auto lg:mx-0 lg:w-[120%] lg:max-w-[1100px]"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
