'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { cn } from '@/lib/cn';

export function FAQ() {
  const t = useTranslations('faq');
  const reduced = useReducedMotion();
  const items = t.raw('items') as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section ariaLabelledby="faq-title" className="light-section">
      <div className="container-center">
        <SectionHeading
          id="faq-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="border-b border-border">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-start"
                    >
                      <span className="text-lg font-medium text-ink">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-all duration-300',
                          isOpen && 'rotate-45 border-primary bg-primary text-primary-ink',
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pe-12 text-sm leading-relaxed text-ink-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
