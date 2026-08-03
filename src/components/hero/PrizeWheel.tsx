'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PartyPopper, RotateCw, Trophy, Lock } from 'lucide-react';
import { Confetti } from './Confetti';
import { cn } from '@/lib/cn';

const PRIZES = [
  { key: 'off10', weight: 30, color: '#3B82F6' },
  { key: 'freeDrink', weight: 18, color: '#F97316' },
  { key: 'off15', weight: 15, color: '#3B82F6' },
  { key: 'freeFries', weight: 12, color: '#EF4444' },
  { key: 'vipPoints', weight: 12, color: '#F59E0B' },
  { key: 'freeDessert', weight: 6, color: '#3B82F6' },
  { key: 'buy1get1', weight: 4, color: '#22C55E' },
  { key: 'off25', weight: 3, color: '#F97316' },
] as const;

const CX = 160;
const CY = 160;
const R = 140;
const SEG = 360 / PRIZES.length;

const SCORE_TARGET = 150;
const SCORE_INCREMENT_MIN = 8;
const SCORE_INCREMENT_MAX = 18;
const TICK_MS = 120;
const TICKS_TO_WIN = 12;

type GameState = 'select' | 'playing' | 'won' | 'unlocked';

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

  const [gameState, setGameState] = useState<GameState>('select');
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const scoreTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickCountRef = useRef(0);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (scoreTimerRef.current) clearInterval(scoreTimerRef.current);
    };
  }, []);

  const startGame = useCallback((game: string) => {
    setActiveGame(game);
    setGameState('playing');
    setScore(0);
    tickCountRef.current = 0;

    scoreTimerRef.current = setInterval(() => {
      tickCountRef.current += 1;
      const increment = Math.floor(
        Math.random() * (SCORE_INCREMENT_MAX - SCORE_INCREMENT_MIN + 1) + SCORE_INCREMENT_MIN,
      );
      setScore((prev) => {
        const next = prev + increment;
        if (tickCountRef.current >= TICKS_TO_WIN) {
          if (scoreTimerRef.current) clearInterval(scoreTimerRef.current);
          setGameState('won');
          setTimeout(() => setGameState('unlocked'), 1400);
          return Math.max(next, SCORE_TARGET);
        }
        return next;
      });
    }, TICK_MS);
  }, []);

  const spin = useCallback(() => {
    if (spinning || gameState !== 'unlocked') return;
    const target = weightedPick();
    setWonIndex(null);
    setSpinning(true);

    const mid = target * SEG + SEG / 2;
    const landing = (360 - mid) % 360;
    const reduced = reducedRef.current;
    const turns = reduced ? 0 : 5;
    const current = rotation;
    const base = current - (current % 360);
    const next = base + turns * 360 + landing + 360;

    setRotation(next);

    const duration = reduced ? 200 : 4200;
    timerRef.current = setTimeout(() => {
      setSpinning(false);
      setWonIndex(target);
      setConfettiKey((k) => k + 1);
    }, duration);
  }, [rotation, spinning, gameState]);

  const resetGame = useCallback(() => {
    setGameState('select');
    setActiveGame(null);
    setScore(0);
    setWonIndex(null);
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      spin();
    }
  };

  const wonLabel =
    wonIndex !== null ? t(`prizes.${PRIZES[wonIndex].key}`) : null;

  const isLocked = gameState !== 'unlocked';

  return (
    <div className="relative flex w-full max-w-[420px] flex-col items-center">
      <p className="sr-only" role="status" aria-live="polite">
        {wonLabel ? t('liveWin', { prize: wonLabel }) : ''}
      </p>

      {/* Phone mockup container */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px]">

        {/* Floating badge: Score target (right) */}
        <div
          className={cn(
            'absolute -end-2 top-1/4 z-30 flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:-end-8 sm:px-4 sm:py-2 transition-colors duration-300',
            gameState === 'unlocked' ? 'bg-emerald-500' : 'bg-amber-500',
          )}
          aria-hidden="true"
        >
          {gameState === 'unlocked' ? (
            <RotateCw className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
          ) : (
            <Trophy className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
          )}
          <span className="text-[0.6rem] font-semibold text-white sm:text-xs">
            {gameState === 'unlocked'
              ? t('spinTheWheel')
              : t('scoreTarget', { target: SCORE_TARGET })}
          </span>
        </div>

        {/* Phone frame */}
        <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-white/10 bg-canvas shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* Phone notch */}
          <div className="mx-auto h-5 w-24 rounded-b-xl bg-canvas" aria-hidden="true" />

          {/* Wheel area */}
          <div className="relative flex flex-col items-center px-4 pb-6 pt-2">
            <Confetti fireKey={confettiKey} />

            <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[280px]">
              {/* Pointer */}
              <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
                <div
                  className="h-0 w-0 border-x-[10px] border-t-[18px] border-x-transparent border-t-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                  aria-hidden="true"
                />
              </div>

              {/* Wheel SVG */}
              <svg
                viewBox="0 0 320 320"
                className={cn(
                  'h-full w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-[filter] duration-500',
                  isLocked && 'brightness-50 saturate-50',
                )}
                role="img"
                aria-label={t('srInstructions')}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning
                    ? 'transform 4200ms cubic-bezier(0.16, 1, 0.3, 1)'
                    : 'none',
                }}
              >
                {/* Outer ring */}
                <circle cx={CX} cy={CY} r={R + 8} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />

                {PRIZES.map((prize, i) => {
                  const isWinner = wonIndex === i;
                  const mid = i * SEG + SEG / 2;
                  const lp = pointAt(mid, R * 0.62);
                  return (
                    <g key={prize.key}>
                      <path
                        d={segmentPath(i)}
                        fill={isWinner ? '#FACC15' : prize.color}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                        style={{ transition: 'fill 300ms ease' }}
                      />
                      <text
                        x={lp.x}
                        y={lp.y}
                        fill="white"
                        fontSize="11"
                        fontWeight={700}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${mid} ${lp.x} ${lp.y})`}
                        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
                      >
                        {t(`prizes.${prize.key}`)}
                      </text>
                    </g>
                  );
                })}

                {/* Light dots around rim */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (360 / 24) * i;
                  const p = pointAt(angle, R + 2);
                  return (
                    <circle
                      key={i}
                      cx={Math.round(p.x * 100) / 100}
                      cy={Math.round(p.y * 100) / 100}
                      r="2"
                      fill="white"
                      opacity={i % 3 === 0 ? 0.9 : 0.4}
                    />
                  );
                })}
              </svg>

              {/* Lock overlay on wheel when locked */}
              {isLocked && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-black/60 backdrop-blur-sm">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <p className="mt-2 rounded-full bg-black/50 px-3 py-1 text-[0.65rem] font-semibold text-white backdrop-blur-sm sm:text-xs">
                    {t('playToUnlock')}
                  </p>
                </div>
              )}

              {/* Center hub / spin button */}
              <button
                onClick={spin}
                onKeyDown={onKey}
                disabled={spinning || isLocked}
                aria-label={spinning ? t('spinning') : isLocked ? t('playToUnlock') : t('spin')}
                className={cn(
                  'absolute left-1/2 top-1/2 z-20 flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[3px] border-white/30 bg-white text-slate-900 shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-transform duration-200',
                  !spinning && !isLocked && 'hover:scale-110 active:scale-95',
                  (spinning || isLocked) && 'cursor-not-allowed opacity-60',
                )}
              >
                <span className="font-display text-[0.6rem] font-bold leading-none sm:text-xs">
                  {spinning ? '...' : t('spin')}
                </span>
              </button>
            </div>

            {/* Game selection / score / CTA area */}
            <div className="mt-4 w-full">
              {/* STATE: select — show game cards */}
              {gameState === 'select' && (
                <div className="flex flex-col items-center gap-3">
                  <p className="font-display text-xs font-bold text-ink sm:text-sm">
                    {t('chooseGame')}
                  </p>
                  <div className="flex w-full gap-2">
                    <button
                      onClick={() => startGame('fries')}
                      className="group flex flex-1 flex-col items-center gap-1.5 rounded-xl border border-border bg-surface-2 p-3 transition-all hover:border-accent/50 hover:bg-surface hover:shadow-lg active:scale-[0.97]"
                    >
                      <span className="text-2xl" role="img" aria-hidden="true">🍟</span>
                      <span className="text-[0.65rem] font-semibold text-ink sm:text-xs">{t('catchTheFries')}</span>
                    </button>
                    <button
                      onClick={() => startGame('fruit')}
                      className="group flex flex-1 flex-col items-center gap-1.5 rounded-xl border border-border bg-surface-2 p-3 transition-all hover:border-accent/50 hover:bg-surface hover:shadow-lg active:scale-[0.97]"
                    >
                      <span className="text-2xl" role="img" aria-hidden="true">🍉</span>
                      <span className="text-[0.65rem] font-semibold text-ink sm:text-xs">{t('fruitySlice')}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STATE: playing — show live score */}
              {gameState === 'playing' && (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[0.65rem] font-medium text-ink-muted sm:text-xs">
                    {activeGame === 'fries' ? t('catchTheFries') : t('fruitySlice')}
                  </p>
                  <div className="relative h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-150"
                      style={{ width: `${Math.min((score / SCORE_TARGET) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="font-display text-2xl font-bold tabular-nums text-ink">
                    {score}
                    <span className="text-sm font-normal text-ink-muted"> / {SCORE_TARGET}</span>
                  </p>
                </div>
              )}

              {/* STATE: won — celebration before unlock */}
              {gameState === 'won' && (
                <div className="flex flex-col items-center gap-1">
                  <p className="font-display text-sm font-bold text-accent sm:text-base">
                    {t('youEarnedSpin')}
                  </p>
                  <p className="text-xs text-ink-muted">{t('unlocking')}</p>
                </div>
              )}

              {/* STATE: unlocked — spin CTA */}
              {gameState === 'unlocked' && (
                <div className="text-center">
                  <div className="min-h-[2.5rem]">
                    {wonLabel ? (
                      <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-ink">
                        <PartyPopper className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {t('youWon')}{' '}
                        <span className="text-accent">{wonLabel}</span>
                      </p>
                    ) : (
                      <p className="font-display text-sm font-bold text-ink sm:text-base">
                        {t('spinNow')}
                      </p>
                    )}
                  </div>
                  {wonLabel ? (
                    <button
                      onClick={resetGame}
                      className="mt-2 inline-flex h-10 w-full max-w-[200px] items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-surface-2 font-display text-sm font-semibold text-ink transition-all duration-200 hover:border-accent/50 hover:bg-surface sm:h-11"
                    >
                      {t('playAgain')}
                    </button>
                  ) : (
                    <button
                      onClick={spin}
                      disabled={spinning}
                      className={cn(
                        'mt-2 inline-flex h-10 w-full max-w-[200px] items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-surface-2 font-display text-sm font-semibold text-ink transition-all duration-200 sm:h-11',
                        !spinning && 'hover:border-accent/50 hover:bg-surface',
                        spinning && 'cursor-wait opacity-60',
                      )}
                    >
                      {spinning ? t('spinning') : t('spinTheWheel')}
                      {!spinning && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 11L12 6L17 11M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 12 12)" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative blobs behind phone */}
        <div className="pointer-events-none absolute -start-8 top-1/3 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-[60px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -end-8 bottom-1/4 -z-10 h-32 w-32 rounded-full bg-primary/15 blur-[50px]" aria-hidden="true" />
      </div>

      {/* Caption below phone */}
      <p className="mt-3 max-w-xs text-center text-xs text-ink-muted/80">
        {t('footnote')}
      </p>
    </div>
  );
}
