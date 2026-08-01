'use client';

const ITEMS = [
  { text: 'FRUIT SLICE',       accent: true  },
  { text: 'CATCH THE FRIES',   accent: false },
  { text: 'LIVE LEADERBOARDS', accent: true  },
  { text: 'COUPON CODES',      accent: false },
  { text: 'OWN YOUR CUSTOMER', accent: true  },
  { text: 'LAUNCH IN 1 DAY',   accent: false },
  { text: 'REWARDS YOU CONTROL', accent: true },
  { text: 'ZERO AGGREGATOR CUT', accent: false },
];

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mx-6 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40"
    />
  );
}

export function MarqueeStrip() {
  /* Duplicate items so the animation loops seamlessly */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-primary/20 bg-canvas py-3"
      style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}
    >
      {/* top neon line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      {/* bottom neon line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-xs font-bold tracking-[0.2em]"
              style={{
                color: item.accent ? 'var(--color-primary)' : 'var(--color-accent)',
                textShadow: item.accent
                  ? '0 0 12px rgba(var(--primary-rgb), 0.6)'
                  : '0 0 12px rgba(var(--accent-rgb), 0.6)',
              }}
            >
              {item.text}
            </span>
            <Bullet />
          </span>
        ))}
      </div>
    </div>
  );
}
