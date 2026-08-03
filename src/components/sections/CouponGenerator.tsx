'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, Copy, Check } from 'lucide-react';

const PRIZES = ['FREEFRIES', 'DRINK', 'SAVE15', 'DESSERT', 'BOGO', 'SAVE25'];

function randomCode() {
  const prize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `CL-${prize}-${suffix}`;
}

export function CouponGenerator() {
  const t = useTranslations('rewards.coupon');
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setCopied(false);
    setCode(randomCode());
  };

  const copy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <Ticket className="h-5 w-5 text-primary" aria-hidden="true" />
        {t('title')}
      </h3>
      <p className="mt-2 text-sm text-ink-muted">{t('body')}</p>

      {/* Ticket display */}
      <div className="relative mt-6 flex items-center justify-center rounded-md border border-dashed border-primary/40 bg-canvas p-6">
        {/* notches */}
        <span className="absolute -start-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-surface" />
        <span className="absolute -end-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-surface" />
        <AnimatePresence mode="wait">
          {code ? (
            <motion.span
              key={code}
              initial={{ opacity: 0, scale: 0.9, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="break-all font-display text-base font-bold tracking-wider text-primary glow-primary sm:text-xl md:text-2xl"
            >
              {code}
            </motion.span>
          ) : (
            <span className="text-sm text-ink-muted">{t('hint')}</span>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={generate}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-ink transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          {t('generate')}
        </button>
        <button
          onClick={copy}
          disabled={!code}
          aria-label={copied ? t('copied') : 'Copy code'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary/50 disabled:opacity-40"
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
