'use client';

import { motion, useReducedMotion } from 'framer-motion';

/* ─── SVG Fruit Illustrations ──────────────────────────────────────────── */

function Watermelon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#2d8a4e" />
      <circle cx="16" cy="16" r="11" fill="#4abe6b" />
      <circle cx="16" cy="16" r="9" fill="#e84040" />
      {/* seeds */}
      <ellipse cx="13" cy="14" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(-15 13 14)" />
      <ellipse cx="19" cy="13" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(10 19 13)" />
      <ellipse cx="16" cy="18" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(-5 16 18)" />
      {/* shine */}
      <ellipse cx="11" cy="11" rx="2.5" ry="1.5" fill="rgba(255,255,255,0.25)" transform="rotate(-30 11 11)" />
    </svg>
  );
}

function WatermelonLeft({ size = 32 }: { size?: number }) {
  return (
    <svg width={size / 2} height={size} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="wml-clip"><rect x="0" y="0" width="16" height="32" /></clipPath>
      <g clipPath="url(#wml-clip)">
        <circle cx="16" cy="16" r="14" fill="#2d8a4e" />
        <circle cx="16" cy="16" r="11" fill="#4abe6b" />
        <circle cx="16" cy="16" r="9" fill="#e84040" />
        <ellipse cx="13" cy="14" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(-15 13 14)" />
        <ellipse cx="9" cy="18" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(5 9 18)" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" strokeDasharray="1 0" opacity="0.6" />
      </g>
    </svg>
  );
}

function WatermelonRight({ size = 32 }: { size?: number }) {
  return (
    <svg width={size / 2} height={size} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="wmr-clip"><rect x="0" y="0" width="16" height="32" /></clipPath>
      <g clipPath="url(#wmr-clip)" transform="translate(-16,0)">
        <circle cx="16" cy="16" r="14" fill="#2d8a4e" />
        <circle cx="16" cy="16" r="11" fill="#4abe6b" />
        <circle cx="16" cy="16" r="9" fill="#e84040" />
        <ellipse cx="19" cy="13" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(10 19 13)" />
        <ellipse cx="22" cy="18" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(-8 22 18)" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
      </g>
    </svg>
  );
}

function Orange({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="17" r="13" fill="#f97316" />
      {/* peel texture lines */}
      <path d="M16 4 Q20 10 16 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M16 4 Q12 10 16 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M16 4 Q23 13 22 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M16 4 Q9 13 10 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* stem */}
      <rect x="14.5" y="2" width="3" height="4" rx="1.5" fill="#5c3d11" />
      {/* leaf */}
      <ellipse cx="19" cy="3.5" rx="3.5" ry="1.5" fill="#22c55e" transform="rotate(-20 19 3.5)" />
      {/* shine */}
      <ellipse cx="11" cy="11" rx="3" ry="2" fill="rgba(255,255,255,0.28)" transform="rotate(-35 11 11)" />
    </svg>
  );
}

function OrangeLeft({ size = 32 }: { size?: number }) {
  return (
    <svg width={size / 2} height={size} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="orl-clip"><rect x="0" y="0" width="16" height="32" /></clipPath>
      <g clipPath="url(#orl-clip)">
        <circle cx="16" cy="17" r="13" fill="#f97316" />
        <path d="M16 4 Q12 10 16 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.6" />
        {/* flesh segments */}
        <circle cx="16" cy="17" r="9" fill="#fed7aa" />
        <line x1="7" y1="17" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="9" y1="11" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="9" y1="23" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="8" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="26" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="4" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.5" />
      </g>
    </svg>
  );
}

function OrangeRight({ size = 32 }: { size?: number }) {
  return (
    <svg width={size / 2} height={size} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="orr-clip"><rect x="0" y="0" width="16" height="32" /></clipPath>
      <g clipPath="url(#orr-clip)" transform="translate(-16,0)">
        <circle cx="16" cy="17" r="13" fill="#f97316" />
        <path d="M16 4 Q20 10 16 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.6" />
        <circle cx="16" cy="17" r="9" fill="#fed7aa" />
        <line x1="25" y1="17" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="23" y1="11" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="23" y1="23" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="8" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="26" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="4" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.5" />
      </g>
    </svg>
  );
}

function Apple({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7 C10 7 5 12 5 18.5 C5 24.5 9 29 14 29 C15 29 15.5 28.5 16 28.5 C16.5 28.5 17 29 18 29 C23 29 27 24.5 27 18.5 C27 12 22 7 16 7Z" fill="#ef4444" />
      {/* left bump */}
      <path d="M16 7 C14 7 10 8 9 10 C11 9 14 8 16 7Z" fill="#dc2626" opacity="0.6" />
      {/* dividing line */}
      <path d="M16 8 C16 8 14 12 14 18 C14 22 15 26 16 28.5" stroke="#dc2626" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* stem */}
      <rect x="15" y="2" width="2.5" height="6" rx="1.25" fill="#5c3d11" />
      {/* leaf */}
      <ellipse cx="19.5" cy="4" rx="4" ry="1.8" fill="#22c55e" transform="rotate(-25 19.5 4)" />
      {/* shine */}
      <ellipse cx="10" cy="12" rx="3.5" ry="2" fill="rgba(255,255,255,0.3)" transform="rotate(-40 10 12)" />
    </svg>
  );
}

function AppleLeft({ size = 32 }: { size?: number }) {
  return (
    <svg width={size / 2} height={size} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="apl-clip"><rect x="0" y="0" width="16" height="32" /></clipPath>
      <g clipPath="url(#apl-clip)">
        <path d="M16 7 C10 7 5 12 5 18.5 C5 24.5 9 29 14 29 C15 29 15.5 28.5 16 28.5 C16.5 28.5 17 29 18 29 C23 29 27 24.5 27 18.5 C27 12 22 7 16 7Z" fill="#ef4444" />
        {/* flesh cross-section */}
        <path d="M16 7 L16 28.5" stroke="#fca5a5" strokeWidth="7" opacity="0.6" />
        <path d="M16 10 L16 28" stroke="#fef2f2" strokeWidth="3" opacity="0.5" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.5" />
      </g>
    </svg>
  );
}

function AppleRight({ size = 32 }: { size?: number }) {
  return (
    <svg width={size / 2} height={size} viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="apr-clip"><rect x="0" y="0" width="16" height="32" /></clipPath>
      <g clipPath="url(#apr-clip)" transform="translate(-16,0)">
        <path d="M16 7 C10 7 5 12 5 18.5 C5 24.5 9 29 14 29 C15 29 15.5 28.5 16 28.5 C16.5 28.5 17 29 18 29 C23 29 27 24.5 27 18.5 C27 12 22 7 16 7Z" fill="#ef4444" />
        <path d="M16 7 L16 28.5" stroke="#fca5a5" strokeWidth="7" opacity="0.6" />
        <path d="M16 10 L16 28" stroke="#fef2f2" strokeWidth="3" opacity="0.5" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ─── Splash Particles ──────────────────────────────────────────────────── */

const SPLASH_COLORS: Record<number, string[]> = {
  0: ['#e84040', '#4abe6b', '#fff'],   // watermelon
  1: ['#f97316', '#fed7aa', '#fff'],   // orange
  2: ['#ef4444', '#fca5a5', '#22c55e'], // apple
};

/* ─── French Fry SVG ────────────────────────────────────────────────────── */

function FrenchFry({ gradId }: { gradId: string }) {
  return (
    <svg width="12" height="40" viewBox="0 0 12 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="30%" stopColor="#fbbf24" />
          <stop offset="70%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>
      {/* body */}
      <rect x="1" y="2" width="10" height="36" rx="3" fill={`url(#${gradId})`} />
      {/* crispy patches */}
      <rect x="2" y="5" width="3" height="4" rx="1" fill="#92400e" opacity="0.5" />
      <rect x="7" y="14" width="3" height="3" rx="1" fill="#78350f" opacity="0.4" />
      <rect x="2" y="24" width="4" height="3" rx="1" fill="#92400e" opacity="0.45" />
      <rect x="6" y="30" width="3" height="4" rx="1" fill="#78350f" opacity="0.4" />
      {/* highlight */}
      <rect x="3" y="4" width="2" height="30" rx="1" fill="rgba(255,255,255,0.28)" />
    </svg>
  );
}

/* ─── Chili Pepper SVG ──────────────────────────────────────────────────── */

function ChiliPepper() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <path d="M17 6 C22 6 27 10 27 17 C27 23 23 29 17 30 C11 29 7 23 7 17 C7 10 12 6 17 6Z" fill="#dc2626" />
      {/* tip */}
      <path d="M17 30 C17 30 15 33 17 34 C19 33 17 30 17 30Z" fill="#b91c1c" />
      {/* sheen */}
      <ellipse cx="13" cy="13" rx="3" ry="5" fill="rgba(255,255,255,0.22)" transform="rotate(-20 13 13)" />
      {/* stem */}
      <path d="M17 6 C17 6 16 2 18 1 C20 2 19 5 17 6Z" fill="#15803d" />
      <path d="M17 5 C17 5 20 2 23 3" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* danger X */}
      <line x1="12" y1="14" x2="22" y2="22" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="14" x2="12" y2="22" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Fry Basket SVG ────────────────────────────────────────────────────── */

function FryBasket() {
  return (
    <svg width="68" height="34" viewBox="0 0 68 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* tapered trapezoid */}
      <path d="M4 2 L64 2 L56 32 L12 32 Z" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
      {/* rim cap */}
      <rect x="0" y="0" width="68" height="6" rx="3" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
      {/* vertical grid lines */}
      <line x1="17" y1="2" x2="15" y2="32" stroke="var(--color-primary)" strokeWidth="1" opacity="0.5" />
      <line x1="28" y1="2" x2="27" y2="32" stroke="var(--color-primary)" strokeWidth="1" opacity="0.5" />
      <line x1="39" y1="2" x2="40" y2="32" stroke="var(--color-primary)" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="2" x2="52" y2="32" stroke="var(--color-primary)" strokeWidth="1" opacity="0.5" />
      {/* horizontal grid lines */}
      <line x1="7" y1="12" x2="61" y2="12" stroke="var(--color-primary)" strokeWidth="1" opacity="0.45" />
      <line x1="10" y1="22" x2="58" y2="22" stroke="var(--color-primary)" strokeWidth="1" opacity="0.45" />
      {/* inner glow fill */}
      <path d="M4 2 L64 2 L56 32 L12 32 Z" fill="rgba(43,127,255,0.1)" />
    </svg>
  );
}

/* ─── Fruit config ──────────────────────────────────────────────────────── */

const fruitConfig = [
  {
    Whole:  Watermelon,
    Left:   WatermelonLeft,
    Right:  WatermelonRight,
    x:      '18%',
    delay:  0,
    score:  '+10',
    idx:    0,
  },
  {
    Whole:  Orange,
    Left:   OrangeLeft,
    Right:  OrangeRight,
    x:      '46%',
    delay:  0.8,
    score:  '+15',
    idx:    1,
  },
  {
    Whole:  Apple,
    Left:   AppleLeft,
    Right:  AppleRight,
    x:      '70%',
    delay:  1.6,
    score:  '+20',
    idx:    2,
  },
];

const CYCLE = 2.4;

/* ─── Fruit Slice Preview ───────────────────────────────────────────────── */

export function FruitSlicePreview() {
  const reduced = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden select-none" aria-hidden="true">
      {fruitConfig.map((f) => {
        const { Whole, Left, Right } = f;
        const splashColors = SPLASH_COLORS[f.idx];
        return (
          <span key={f.idx}>
            {/* Whole fruit — rises from bottom to apex */}
            <motion.div
              className="absolute bottom-5"
              style={{ left: f.x }}
              animate={reduced ? { y: -80 } : {
                y:       [0,    -115, -115,  -115],
                opacity: [0,     1,    1,     0   ],
                scale:   [0.5,   1,    1,     0.4 ],
              }}
              transition={reduced ? undefined : {
                duration: CYCLE, repeat: Infinity, delay: f.delay,
                times: [0, 0.38, 0.56, 0.7], ease: 'easeOut',
              }}
            >
              <Whole size={32} />
            </motion.div>

            {!reduced && (
              <>
                {/* Left half — peels off left after slash */}
                <motion.div
                  className="absolute bottom-5"
                  style={{ left: f.x }}
                  animate={{
                    y:       [0, -115, -115, -80 ],
                    x:       [0,    0,    0,  -30 ],
                    opacity: [0,    0,    1,    0 ],
                    rotate:  [0,    0,    0,  -55 ],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.55, 0.62, 1],
                  }}
                >
                  <Left size={32} />
                </motion.div>

                {/* Right half — peels off right after slash */}
                <motion.div
                  className="absolute bottom-5"
                  style={{ left: f.x }}
                  animate={{
                    y:       [0, -115, -115, -80 ],
                    x:       [0,    0,    0,   28 ],
                    opacity: [0,    0,    1,    0 ],
                    rotate:  [0,    0,    0,   55 ],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.55, 0.62, 1],
                  }}
                >
                  <Right size={32} />
                </motion.div>

                {/* Juice splash particles */}
                {splashColors.map((col, pi) => {
                  const angle = (pi / splashColors.length) * Math.PI;
                  const tx = Math.cos(angle) * 22 - 11;
                  const ty = -20 - Math.sin(angle) * 14;
                  return (
                    <motion.div
                      key={`sp-${f.idx}-${pi}`}
                      className="absolute bottom-5 h-2 w-2 rounded-full"
                      style={{ left: f.x, background: col }}
                      animate={{
                        x:       [0, 0, tx],
                        y:       [0, -115, -115 + ty],
                        opacity: [0, 0, 0, 1, 0],
                        scale:   [0, 0, 0, 1.2, 0],
                      }}
                      transition={{
                        duration: CYCLE, repeat: Infinity, delay: f.delay,
                        times: [0, 0.55, 0.62, 0.7, 0.9],
                      }}
                    />
                  );
                })}

                {/* Score pop */}
                <motion.span
                  className="absolute bottom-5 font-display text-xs font-bold text-white"
                  style={{ left: f.x }}
                  animate={{
                    y:       [0, -115, -140, -165],
                    opacity: [0,    0,    1,    0 ],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.55, 0.65, 0.9],
                  }}
                >
                  {f.score}
                </motion.span>
              </>
            )}
          </span>
        );
      })}

      {/* Diagonal slash streak — brighter */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute left-[-8%] top-[38%] h-[3px] w-[116%] origin-left"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.7) 80%, transparent 100%)',
            rotate: -14,
            filter: 'blur(0.4px)',
          }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: CYCLE, repeat: Infinity, delay: 0.95,
            times: [0, 0.18, 0.38, 0.55],
          }}
        />
      )}
    </div>
  );
}

/* ─── Catch the Fries Preview ───────────────────────────────────────────── */

const DROP_CYCLE = 5.6;

export function CatchFriesPreview() {
  const reduced = useReducedMotion();

  const drops = [
    { x: '20%', delay: 0,    good: true  },
    { x: '68%', delay: 1.4,  good: true  },
    { x: '44%', delay: 2.8,  good: false },
    { x: '82%', delay: 4.2,  good: true  },
  ];

  const basketStops = ['20%', '68%', '44%', '82%'];

  return (
    <div className="relative h-full w-full overflow-hidden select-none" aria-hidden="true">

      {/* Falling items */}
      {drops.map((d, i) => (
        <motion.div
          key={i}
          className="absolute top-1 flex flex-col items-center"
          style={{ left: d.x, x: '-50%' }}
          animate={reduced ? { y: 170 } : {
            y:       [-8,  -8,  170],
            opacity: [0,    1,    0],
          }}
          transition={reduced ? undefined : {
            duration: DROP_CYCLE,
            repeat:   Infinity,
            delay:    d.delay,
            times:    [0, 0.04, 0.72],
            ease:     ['linear', [0.4, 0, 1, 1]],
          }}
        >
          {d.good ? (
            <FrenchFry gradId={`fry-drop-${i}`} />
          ) : (
            <ChiliPepper />
          )}
        </motion.div>
      ))}

      {/* Score pops when basket catches */}
      {!reduced && drops.filter(d => d.good).map((d, i) => (
        <motion.span
          key={`sc-${i}`}
          className="pointer-events-none absolute font-display text-xs font-bold"
          style={{ left: d.x, bottom: '2.8rem', x: '-50%', color: 'var(--color-accent)' }}
          animate={{ y: [0, -30, -30], opacity: [0, 1, 0] }}
          transition={{
            duration: DROP_CYCLE,
            repeat: Infinity,
            delay: d.delay + DROP_CYCLE * 0.72 - 0.15,
            times: [0, 0.35, 1],
          }}
        >
          +10
        </motion.span>
      ))}

      {/* Basket */}
      <motion.div
        className="absolute bottom-3"
        style={{ x: '-50%' }}
        animate={reduced ? undefined : { left: basketStops }}
        transition={reduced ? undefined : {
          duration: DROP_CYCLE,
          repeat:   Infinity,
          ease:     'easeInOut',
          times:    [0, 0.25, 0.5, 0.75],
        }}
      >
        <FryBasket />
      </motion.div>
    </div>
  );
}
