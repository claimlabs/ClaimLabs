'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PartyPopper } from 'lucide-react';
import { Confetti } from './Confetti';
import { cn } from '@/lib/cn';

/**
 * Controlled-odds prize wheel. The weights model the "controlled rewards"
 * a restaurant configures — cheap rewards land often, jackpots rarely.
 * Fully playable: click / Enter / Space to spin, ARIA live result.
 */
const PRIZES = [
  { key: 'off10', weight: 30 },
  { key: 'freeDrink', weight: 18 },
  { key: 'off15', weight: 15 },
  { key: 'freeFries', weight: 12 },
  { key: 'vipPoints', weight: 12 },
  { key: 'freeDessert', weight: 6 },
  { key: 'buy1get1', weight: 4 },
  { key: 'off25', weight: 3 },
] as const;

const CX = 160;
const CY = 160;
const R = 150;
const SEG = 360 / PRIZES.length;

/** Point on the wheel at `deg` measured clockwise from the top (12 o'clock). */
function pointAt(deg: number, radius: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + radius * Math.sin(rad), y: CY - radius * Math.cos(rad) };
}

function segmentPath(i: number) {
  const a1 = i * SEG;
  const a2 = (i + 1) * SEG;
  const p1 = pointAt(a1, R);
  const p2 = pointAt(a2, R);
  return `M ${CX} ${CY} L ${p1.x} ${p1.y} A ${R} ${R} 0 0 1 ${p2.x} ${p2.y} Z`;
}

function weightedPick() {
  const total = PRIZES.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;
  for (let i = 0; i < PRIZES.length; i++) {
    r -= PRIZES[i].weight;
    if (r <= 0) return i;
  }
  return PRIZES.length - 1;
}

export function PrizeWheel() {
  const t = useTranslations('hero.wheel');
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [wonIndex, setWonIndex] = useState<number | null>(null);
  const [confettiKey, setConfettiKey] = useState(0);
  const reducedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const spin = useCallback(() => {
    if (spinning) return;
    const target = weightedPick();
    setWonIndex(null);
    setSpinning(true);

    // Land the target segment's centre under the top pointer.
    const mid = target * SEG + SEG / 2;
    const landing = (360 - mid) % 360;
    const reduced = reducedRef.current;
    const turns = reduced ? 0 : 5;
    const current = rotation;
    const base = current - (current % 360);
    const next = base + turns * 360 + landing + 360; // always increase

    setRotation(next);

    const duration = reduced ? 200 : 4200;
    timerRef.current = setTimeout(() => {
      setSpinning(false);
      setWonIndex(target);
      setConfettiKey((k) => k + 1);
    }, duration);
  }, [rotation, spinning]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      spin();
    }
  };

  const wonLabel =
    wonIndex !== null ? t(`prizes.${PRIZES[wonIndex].key}`) : null;

  return (
    <div className="relative flex w-full max-w-[420px] flex-col items-center">
      {/* Live region for screen readers */}
      <p className="sr-only" role="status" aria-live="polite">
        {wonLabel ? t('liveWin', { prize: wonLabel }) : ''}
      </p>

      <div className="relative aspect-square w-full">
        <Confetti fireKey={confettiKey} />

        {/* Pointer */}
        <div className="absolute left-1/2 top-1 z-20 -translate-x-1/2">
          <div
            className="h-0 w-0 border-x-[13px] border-t-[22px] border-x-transparent border-t-primary drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          />
        </div>

        {/* Wheel */}
        <svg
          viewBox="0 0 320 320"
          className="h-full w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          role="img"
          aria-label={t('srInstructions')}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? 'transform 4200ms cubic-bezier(0.16, 1, 0.3, 1)'
              : 'none',
          }}
        >
          <circle
            cx={CX}
            cy={CY}
            r={R + 6}
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="2"
          />
          {PRIZES.map((prize, i) => {
            const isWinner = wonIndex === i;
            const fill = isWinner
              ? 'var(--color-primary)'
              : i % 2 === 0
                ? 'rgba(var(--primary-rgb), 0.14)'
                : 'var(--color-surface-2)';
            const mid = i * SEG + SEG / 2;
            const lp = pointAt(mid, R * 0.62);
            return (
              <g key={prize.key}>
                <path
                  d={segmentPath(i)}
                  fill={fill}
                  stroke="var(--color-canvas)"
                  strokeWidth="2"
                  style={{ transition: 'fill 300ms ease' }}
                />
                <text
                  x={lp.x}
                  y={lp.y}
                  fill={isWinner ? 'var(--color-primary-ink)' : 'var(--color-ink)'}
                  fontSize="12.5"
                  fontWeight={isWinner ? 700 : 500}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${mid} ${lp.x} ${lp.y})`}
                  style={{ transition: 'fill 300ms ease' }}
                >
                  {t(`prizes.${prize.key}`)}
                </text>
              </g>
            );
          })}
          {/* pin dots around the rim */}
          {PRIZES.map((_, i) => {
            const p = pointAt(i * SEG, R);
            return (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="2.5"
                fill="var(--color-primary)"
                opacity="0.5"
              />
            );
          })}
        </svg>

        {/* Center hub / spin button */}
        <button
          onClick={spin}
          onKeyDown={onKey}
          disabled={spinning}
          aria-label={spinning ? t('spinning') : t('spin')}
          className={cn(
            'absolute left-1/2 top-1/2 z-20 flex h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-canvas bg-primary text-primary-ink shadow-glow transition-transform duration-200',
            !spinning && 'hover:scale-105 active:scale-95',
            spinning && 'cursor-wait',
          )}
        >
          <span className="font-display text-sm font-bold leading-none sm:text-base">
            {spinning ? '…' : t('spin')}
          </span>
        </button>
      </div>

      {/* Result / caption */}
      <div className="mt-5 min-h-[3.25rem] text-center">
        {wonLabel ? (
          <p className="flex items-center justify-center gap-2 text-lg font-semibold text-ink">
            <PartyPopper className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            {t('youWon')}{' '}
            <span className="text-primary glow-primary">{wonLabel}</span>
          </p>
        ) : (
          <p className="text-sm text-ink-muted">{t('label')}</p>
        )}
      </div>
    </div>
  );
}
