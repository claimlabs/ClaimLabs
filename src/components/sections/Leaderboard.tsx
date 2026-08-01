'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Trophy, Crown } from 'lucide-react';
import { cn } from '@/lib/cn';

type Period = 'weekly' | 'monthly';

// Deterministic sample scores per period (no hydration mismatch).
const SCORES: Record<Period, number[]> = {
  weekly: [8420, 7990, 7310, 6880, 6120],
  monthly: [31240, 29870, 27650, 24980, 22410],
};

// Locale-independent thousands separator so server and client output match.
function formatScore(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function Leaderboard() {
  const t = useTranslations('rewards.leaderboard');
  const reduced = useReducedMotion();
  const [period, setPeriod] = useState<Period>('weekly');
  const players = t.raw('players') as string[];
  const scores = SCORES[period];

  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
          {t('title')}
        </h3>
        <div
          className="inline-flex rounded-full border border-border bg-canvas p-0.5 text-xs min-h-[44px] items-center"
          role="group"
          aria-label={t('title')}
        >
          {(['weekly', 'monthly'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              aria-pressed={period === p}
              className={cn(
                'min-h-[2.75rem] rounded-full px-3 py-2 font-medium transition-colors',
                period === p
                  ? 'bg-primary text-primary-ink'
                  : 'text-ink-muted hover:text-ink',
              )}
            >
              {p === 'weekly' ? t('toggleWeekly') : t('toggleMonthly')}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-2 text-sm text-ink-muted">{t('body')}</p>

      <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-x-3 text-xs uppercase tracking-wider text-ink-muted/70">
        <span>{t('colRank')}</span>
        <span>{t('colPlayer')}</span>
        <span className="text-end">{t('colScore')}</span>
      </div>

      <ul className="mt-2 flex flex-col gap-1.5">
        <AnimatePresence mode="popLayout">
          {players.map((name, i) => (
            <motion.li
              key={`${period}-${name}`}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className={cn(
                'grid grid-cols-[auto_1fr_auto] items-center gap-x-3 rounded-md px-3 py-2.5',
                i === 0
                  ? 'bg-primary/10 ring-1 ring-primary/30'
                  : 'bg-surface-2',
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold',
                  i === 0
                    ? 'bg-accent text-canvas'
                    : 'bg-canvas text-ink-muted',
                )}
              >
                {i === 0 ? (
                  <Crown className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  i + 1
                )}
              </span>
              <span className="truncate text-sm font-medium">{name}</span>
              <span className="font-display text-sm font-bold tabular-nums text-ink">
                {formatScore(scores[i])}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
