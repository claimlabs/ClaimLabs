'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PartyPopper, Zap, ShieldCheck, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const TRUST = [
  { icon: Zap,         label: 'Live in 1 day'     },
  { icon: ShieldCheck, label: 'No commitment'      },
  { icon: Clock,       label: 'Setup in minutes'   },
] as const;

export function DemoCTA() {
  const t = useTranslations('demo');
  const reduced = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 900);
  };

  const fieldClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 outline-none transition-colors focus:border-primary focus:bg-white/8';

  return (
    <Section id="demo" ariaLabelledby="demo-title">
      <div className="container-x">
        <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface via-surface/80 to-canvas p-8 sm:p-12 shadow-lift">

          {/* Glow blob */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />

          <Reveal>
            <div className="relative mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                {t('eyebrow')}
              </p>
              <h2 id="demo-title" className="text-4xl font-bold leading-tight">
                Turn your restaurant<br />
                <span className="text-primary">into a game.</span>
              </h2>
              <p className="mt-3 text-sm text-ink-muted">
                Fill in your details — we&apos;ll reach out within 24 hours.
              </p>
              <div className="mt-5 flex items-center justify-center gap-5">
                {TRUST.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                    <Icon className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-ink shadow-glow">
                    <PartyPopper className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{t('form.successTitle')}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{t('form.successBody')}</p>
                  <button
                    onClick={() => setDone(false)}
                    className="mt-6 text-sm font-medium text-primary hover:underline"
                  >
                    {t('form.another')}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="flex flex-col gap-3"
                  noValidate={false}
                >
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={t('form.namePlaceholder')}
                    className={fieldClass}
                  />
                  <input
                    id="lead-restaurant"
                    name="restaurant"
                    type="text"
                    required
                    placeholder={t('form.restaurantPlaceholder')}
                    className={fieldClass}
                  />
                  <input
                    id="lead-contact"
                    name="contact"
                    type="text"
                    required
                    placeholder={t('form.contactPlaceholder')}
                    className={fieldClass}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 inline-flex h-13 items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-ink shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60"
                  >
                    {submitting ? t('form.submitting') : t('form.submit')}
                  </button>
                  <p className="text-center text-xs text-ink-muted/60">
                    {t('form.disclaimer')}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
