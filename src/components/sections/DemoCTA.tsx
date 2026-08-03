'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, PartyPopper } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

export function DemoCTA() {
  const t = useTranslations('demo');
  const reduced = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const points = t.raw('points') as string[];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired — simulate a successful lead capture.
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 900);
  };

  const fieldClass =
    'w-full rounded-md border border-border bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary';

  return (
    <Section id="demo" ariaLabelledby="demo-title" className="light-section">
      <div className="container-x">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-canvas p-5 sm:p-8 md:p-12 lg:grid-cols-2">
          {/* Left: pitch */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t('eyebrow')}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="demo-title" className="text-h2 mt-5 font-bold">
                {t('title')}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-ink-muted">{t('subtitle')}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-7 flex flex-col gap-3">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-4 sm:p-6 md:p-8">
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
                    <h3 className="mt-5 text-xl font-semibold">
                      {t('form.successTitle')}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">
                      {t('form.successBody')}
                    </p>
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
                    className="flex flex-col gap-4"
                    noValidate={false}
                  >
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        {t('form.name')}
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder={t('form.namePlaceholder')}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lead-restaurant"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        {t('form.restaurant')}
                      </label>
                      <input
                        id="lead-restaurant"
                        name="restaurant"
                        type="text"
                        required
                        placeholder={t('form.restaurantPlaceholder')}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lead-contact"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        {t('form.contact')}
                      </label>
                      <input
                        id="lead-contact"
                        name="contact"
                        type="text"
                        required
                        placeholder={t('form.contactPlaceholder')}
                        className={fieldClass}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-ink shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60"
                    >
                      {submitting ? t('form.submitting') : t('form.submit')}
                    </button>
                    <p className="text-center text-xs text-ink-muted/70">
                      {t('form.disclaimer')}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
