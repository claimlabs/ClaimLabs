'use client';

import { useEffect, useMemo, useState } from 'react';

const COLORS = [
  'var(--color-primary)',
  'var(--color-accent)',
  'var(--color-success)',
  'var(--color-ink)',
];

/**
 * Lightweight one-shot confetti burst. Renders `count` pieces that fly
 * outward and fall, then reports completion. No canvas, no dependency.
 * Skips entirely when the user prefers reduced motion.
 */
export function Confetti({
  fireKey,
  count = 44,
}: {
  fireKey: number;
  count?: number;
}) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
  }, []);

  const pieces = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const dist = 60 + Math.random() * 120;
      return {
        id: i,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 40,
        rot: Math.random() * 720 - 360,
        delay: Math.random() * 0.08,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 6,
        round: Math.random() > 0.6,
      };
    });
  }, [count, fireKey]);

  if (reduced || fireKey === 0) return null;

  return (
    <div
      key={fireKey}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-visible"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute left-1/2 top-1/2"
          style={
            {
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.round ? '9999px' : '2px',
              animation: `confetti-fly 1100ms cubic-bezier(0.16,1,0.3,1) ${p.delay}s forwards`,
              // custom props consumed by the keyframes below
              ['--cx' as string]: `${p.x}px`,
              ['--cy' as string]: `${p.y}px`,
              ['--cr' as string]: `${p.rot}deg`,
            } as React.CSSProperties
          }
        />
      ))}
      <style>{`
        @keyframes confetti-fly {
          0%   { transform: translate(-50%, -50%) rotate(0deg) scale(0.6); opacity: 1; }
          70%  { opacity: 1; }
          100% {
            transform: translate(calc(-50% + var(--cx)), calc(-50% + var(--cy) + 80px)) rotate(var(--cr)) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
