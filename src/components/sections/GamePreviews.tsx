'use client';

import { motion, useReducedMotion } from 'framer-motion';

/* ─── SVG Fruit Illustrations ──────────────────────────────────────────── */

function Watermelon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#2d8a4e" />
      <circle cx="16" cy="16" r="11" fill="#4abe6b" />
      <circle cx="16" cy="16" r="9" fill="#e84040" />
      <ellipse cx="13" cy="14" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(-15 13 14)" />
      <ellipse cx="19" cy="13" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(10 19 13)" />
      <ellipse cx="16" cy="18" rx="1.1" ry="1.6" fill="#1a1a1a" transform="rotate(-5 16 18)" />
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
        <line x1="16" y1="2" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
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
      <path d="M16 4 Q20 10 16 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M16 4 Q12 10 16 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M16 4 Q23 13 22 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M16 4 Q9 13 10 17" stroke="#ea6c08" strokeWidth="0.8" fill="none" opacity="0.5" />
      <rect x="14.5" y="2" width="3" height="4" rx="1.5" fill="#5c3d11" />
      <ellipse cx="19" cy="3.5" rx="3.5" ry="1.5" fill="#22c55e" transform="rotate(-20 19 3.5)" />
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
        <circle cx="16" cy="17" r="9" fill="#fed7aa" />
        <line x1="7" y1="17" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="9" y1="11" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="9" y1="23" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
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
        <circle cx="16" cy="17" r="9" fill="#fed7aa" />
        <line x1="25" y1="17" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="23" y1="11" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="23" y1="23" x2="16" y2="17" stroke="#f97316" strokeWidth="0.7" opacity="0.7" />
        <line x1="16" y1="4" x2="16" y2="30" stroke="#fff" strokeWidth="0.8" opacity="0.5" />
      </g>
    </svg>
  );
}

function Apple({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7 C10 7 5 12 5 18.5 C5 24.5 9 29 14 29 C15 29 15.5 28.5 16 28.5 C16.5 28.5 17 29 18 29 C23 29 27 24.5 27 18.5 C27 12 22 7 16 7Z" fill="#ef4444" />
      <path d="M16 8 C16 8 14 12 14 18 C14 22 15 26 16 28.5" stroke="#dc2626" strokeWidth="0.8" fill="none" opacity="0.5" />
      <rect x="15" y="2" width="2.5" height="6" rx="1.25" fill="#5c3d11" />
      <ellipse cx="19.5" cy="4" rx="4" ry="1.8" fill="#22c55e" transform="rotate(-25 19.5 4)" />
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

/* ─── Fry Bunch SVG ─────────────────────────────────────────────────────── */

function FryBunch() {
  return (
    <svg width="58" height="54" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fb-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="45%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#BF360C" />
        </linearGradient>
        <linearGradient id="fb-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="45%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <linearGradient id="fb-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="45%" stopColor="#FF8F00" />
          <stop offset="100%" stopColor="#BF360C" />
        </linearGradient>
      </defs>
      {/* Drop shadow */}
      <ellipse cx="29" cy="51" rx="18" ry="3.5" fill="rgba(0,0,0,0.28)" />
      {/* Back-row fries (slightly darker) */}
      <rect x="11" y="12" width="5" height="26" rx="2.5" fill="url(#fb-c)" opacity="0.85" transform="rotate(-22 13.5 25)" />
      <rect x="40" y="12" width="5" height="26" rx="2.5" fill="url(#fb-c)" opacity="0.85" transform="rotate(22 42.5 25)" />
      {/* Main fan of fries */}
      <rect x="10" y="8" width="5.5" height="32" rx="2.75" fill="url(#fb-a)" transform="rotate(-30 12.75 24)" />
      <rect x="17" y="3" width="5.5" height="36" rx="2.75" fill="url(#fb-b)" transform="rotate(-15 19.75 21)" />
      <rect x="24" y="1" width="5.5" height="38" rx="2.75" fill="url(#fb-a)" transform="rotate(0 26.75 20)" />
      <rect x="31" y="3" width="5.5" height="36" rx="2.75" fill="url(#fb-b)" transform="rotate(15 33.75 21)" />
      <rect x="38" y="8" width="5.5" height="32" rx="2.75" fill="url(#fb-a)" transform="rotate(30 40.75 24)" />
      {/* Highlight sheen on front fries */}
      <rect x="25.5" y="3" width="1.5" height="18" rx="0.75" fill="rgba(255,255,255,0.35)" transform="rotate(0 26.25 12)" />
      <rect x="18.5" y="6" width="1.5" height="14" rx="0.75" fill="rgba(255,255,255,0.25)" transform="rotate(-15 19.25 13)" />
    </svg>
  );
}

/* ─── Red Fry Box SVG ───────────────────────────────────────────────────── */

function RedFryBox() {
  return (
    <svg width="74" height="62" viewBox="0 0 74 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box shadow */}
      <ellipse cx="37" cy="60" rx="28" ry="3" fill="rgba(0,0,0,0.3)" />
      {/* Box body */}
      <path d="M9 20 L65 20 L58 57 L16 57 Z" fill="#C62828" />
      {/* Front crease / fold panel */}
      <path d="M9 20 L65 20 L65 31 L9 31 Z" fill="#B71C1C" />
      {/* Top highlight */}
      <path d="M9 20 L65 20 L65 24 L9 24 Z" fill="#EF5350" opacity="0.5" />
      {/* Side shadow */}
      <path d="M9 20 L16 57 L22 57 L15 20 Z" fill="rgba(0,0,0,0.18)" />
      {/* Box rim */}
      <path d="M5 15 L69 15 L65 22 L9 22 Z" fill="#E53935" />
      {/* Subtle vertical lines on front panel */}
      <line x1="30" y1="22" x2="28" y2="56" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
      <line x1="44" y1="22" x2="46" y2="56" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
      {/* Fries peeking above rim */}
      <rect x="16" y="5"  width="4.5" height="14" rx="2.25" fill="#FFA726" />
      <rect x="22" y="2"  width="4.5" height="17" rx="2.25" fill="#FFB300" />
      <rect x="28" y="0"  width="4.5" height="19" rx="2.25" fill="#FFCC02" />
      <rect x="34" y="1"  width="4.5" height="18" rx="2.25" fill="#FFB300" />
      <rect x="40" y="3"  width="4.5" height="16" rx="2.25" fill="#FFA726" />
      <rect x="46" y="6"  width="4.5" height="13" rx="2.25" fill="#FF8F00" />
      <rect x="12" y="7"  width="3.5" height="12" rx="1.75" fill="#FF8F00" />
      {/* Fry highlights */}
      <rect x="29.5" y="2" width="1.5" height="8" rx="0.75" fill="rgba(255,255,255,0.35)" />
      <rect x="23.5" y="4" width="1.5" height="6" rx="0.75" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}

/* ─── Fruit config ──────────────────────────────────────────────────────── */

const FRUIT_SIZE = 46;
const CYCLE = 2.8;

const fruitConfig = [
  { Whole: Watermelon, Left: WatermelonLeft, Right: WatermelonRight, x: '12%', delay: 0,    score: '+10', idx: 0, splashColors: ['#e84040', '#4abe6b', '#fff'] },
  { Whole: Orange,     Left: OrangeLeft,     Right: OrangeRight,     x: '45%', delay: 0.93, score: '+15', idx: 1, splashColors: ['#f97316', '#fed7aa', '#fff'] },
  { Whole: Apple,      Left: AppleLeft,      Right: AppleRight,      x: '70%', delay: 1.87, score: '+20', idx: 2, splashColors: ['#ef4444', '#fca5a5', '#22c55e'] },
];

/* ─── Fruit Slice Preview ───────────────────────────────────────────────── */

export function FruitSlicePreview() {
  const reduced = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden select-none" aria-hidden="true">

      {/* ── Black background with arcade grid + orange glow ── */}
      <div className="absolute inset-0" style={{ background: '#141414' }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,79,31,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,79,31,0.07) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 46%, rgba(255,79,31,0.13) 0%, transparent 62%)',
      }} />

      {/* ── Fruit items ── */}
      {fruitConfig.map((f) => {
        const { Whole, Left, Right } = f;
        return (
          <span key={f.idx}>
            {/* Whole fruit — rises, pauses at apex */}
            <motion.div
              className="absolute bottom-4"
              style={{ left: f.x }}
              animate={reduced ? { y: -100 } : {
                y:       [0,   -132, -132,  -132],
                opacity: [0,      1,    1,     0],
                scale:   [0.7,  1.1,    1,   0.2],
              }}
              transition={reduced ? undefined : {
                duration: CYCLE, repeat: Infinity, delay: f.delay,
                times: [0, 0.38, 0.57, 0.66],
              }}
            >
              <Whole size={FRUIT_SIZE} />
            </motion.div>

            {!reduced && (
              <>
                {/* Full-width Fruit Ninja blade — starts 100px left of fruit, spans 300px */}
                <motion.div
                  className="absolute bottom-4 pointer-events-none"
                  style={{ left: `calc(${f.x} - 100px)`, originX: 0 }}
                  animate={{
                    y:       [0,   -132, -132, -132, -132],
                    scaleX:  [0,      0,  0.05,   1,    0],
                    opacity: [0,      0,    0,    1,    0],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.38, 0.50, 0.58, 0.67],
                  }}
                >
                  <div style={{
                    width: 300,
                    height: 5,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 18%, white 38%, rgba(220,245,255,1) 62%, rgba(255,255,255,0.5) 80%, transparent 100%)',
                    transform: 'rotate(-34deg)',
                    transformOrigin: 'left center',
                    borderRadius: '0 3px 3px 0',
                    boxShadow: '0 0 11px 5px rgba(255,255,255,0.65), 0 0 28px 11px rgba(150,220,255,0.42), 0 0 55px 18px rgba(150,220,255,0.15)',
                    filter: 'blur(0.3px)',
                  }} />
                </motion.div>

                {/* Left half — flies left + rotates */}
                <motion.div
                  className="absolute bottom-4"
                  style={{ left: f.x }}
                  animate={{
                    y:       [0, -132, -132,  -85],
                    x:       [0,    0,    0,  -58],
                    opacity: [0,    0,    1,    0],
                    rotate:  [0,    0,    0,  -75],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.62, 0.67, 1],
                  }}
                >
                  <Left size={FRUIT_SIZE} />
                </motion.div>

                {/* Right half — flies right + rotates */}
                <motion.div
                  className="absolute bottom-4"
                  style={{ left: f.x }}
                  animate={{
                    y:       [0, -132, -132,  -85],
                    x:       [0,    0,    0,   58],
                    opacity: [0,    0,    1,    0],
                    rotate:  [0,    0,    0,   75],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.62, 0.67, 1],
                  }}
                >
                  <Right size={FRUIT_SIZE} />
                </motion.div>

                {/* Amber/orange juice particles */}
                {[0, 1, 2, 3, 4].map((pi) => {
                  const angle = (pi / 5) * Math.PI * 1.6 + 0.2;
                  const dist = 24 + pi * 9;
                  const tx = Math.cos(angle) * dist - 12;
                  const ty = -16 - Math.sin(angle) * 20;
                  const col = ['#FF6B00', '#FFB300', '#FF8C00', '#FFCA28', '#FF6B00'][pi];
                  return (
                    <motion.div
                      key={`sp-${f.idx}-${pi}`}
                      className="absolute bottom-4 rounded-full"
                      style={{ left: f.x, background: col, width: 7, height: 7 }}
                      animate={{
                        x:       [0,    0,    0,  tx],
                        y:       [0, -132, -132, -132 + ty],
                        opacity: [0,    0,    0,   1,   0],
                        scale:   [0,    0,    0, 1.4,   0],
                      }}
                      transition={{
                        duration: CYCLE, repeat: Infinity, delay: f.delay,
                        times: [0, 0.60, 0.62, 0.72, 0.93],
                      }}
                    />
                  );
                })}

                {/* Score pop */}
                <motion.span
                  className="absolute bottom-4 font-display text-sm font-bold"
                  style={{ left: f.x, color: '#FFE082', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                  animate={{
                    y:       [0, -132, -160, -185],
                    opacity: [0,    0,    1,    0],
                  }}
                  transition={{
                    duration: CYCLE, repeat: Infinity, delay: f.delay,
                    times: [0, 0.62, 0.72, 0.96],
                  }}
                >
                  {f.score}
                </motion.span>
              </>
            )}
          </span>
        );
      })}

      {/* ── 2× COMBO popup ── */}
      {!reduced && (
        <motion.div
          style={{
            position: 'absolute', left: '30%', bottom: '32%', zIndex: 9,
            pointerEvents: 'none', textAlign: 'center',
          }}
          animate={{
            y:       [30, 30,  0,  0, -22],
            opacity: [0,   0,  1,  1,   0],
          }}
          transition={{
            duration: CYCLE * 3, repeat: Infinity, delay: 0.93,
            times: [0, 0.28, 0.33, 0.68, 0.82],
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: '#FFCC02', textShadow: '0 0 14px rgba(255,200,0,0.7), 0 2px 4px rgba(0,0,0,0.8)', letterSpacing: '0.04em' }}>
            2x COMBO
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#FFE082', textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
            +28
          </div>
        </motion.div>
      )}

      {/* ── Lives (bottom-left) ── */}
      <div style={{
        position: 'absolute', bottom: 8, left: 8, zIndex: 8,
        display: 'flex', gap: 3,
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{ fontSize: 13, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
            🌶️
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Catch the Fries Preview ───────────────────────────────────────────── */

// Full loop: 6 s — 2 good fries + 1 chili, staggered by 2 s each
const TOTAL = 6.0;

// Basket left-position keyframes over the 6 s loop.
// Basket pre-positions itself BEFORE the fry arrives, then slides away for the chili.
const BASKET_LEFTS = ['22%', '22%', '68%', '68%', '84%', '84%', '22%'];
const BASKET_TIMES = [0,     0.20,   0.30,  0.53,  0.63,  0.95,  1.0 ];

// Basket scaleY squish timed to the two catch moments (t≈0.20 and t≈0.53 of the 6 s loop)
const SQUISH_Y    = [1,  1,  0.75, 1.12, 1,   1,  0.75, 1.12, 1,   1  ];
const SQUISH_T    = [0, 0.17, 0.21, 0.27, 0.34, 0.50, 0.54, 0.60, 0.67, 1.0];

const DROPS = [
  { x: '22%', good: true,  startFrac: 0,     endFrac: 0.20 }, // catch at real t=1.2 s
  { x: '68%', good: true,  startFrac: 0.333, endFrac: 0.20 }, // catch at real t=3.2 s
  { x: '44%', good: false, startFrac: 0.667, endFrac: 0.22 }, // miss  at real t=5.32 s
];

export function CatchFriesPreview() {
  const reduced = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden select-none" aria-hidden="true">

      {/* ── Black background with stripes + orange glow ── */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #1F1E1C 0%, #141414 100%)' }}>
        {/* Diagonal stripe texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-58deg, transparent, transparent 18px, rgba(255,79,31,0.04) 18px, rgba(255,79,31,0.04) 19px)',
        }} />
        {/* Central radial glow */}
        <div className="absolute" style={{
          top: '28%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 180, height: 180, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,79,31,0.15) 0%, transparent 70%)',
        }} />
      </div>

      {/* ── Falling fry bunches ── */}
      {DROPS.map((d, i) => (
        <motion.div
          key={i}
          className="absolute top-0 flex flex-col items-center"
          style={{ left: d.x, x: '-50%' }}
          animate={reduced ? { y: 160 } : {
            y:       [-10, -10, d.good ? 138 : 170],
            opacity: [0,    1,  0],
          }}
          transition={reduced ? undefined : {
            duration: TOTAL,
            repeat:   Infinity,
            delay:    d.startFrac * TOTAL,
            times:    [0, 0.04, d.endFrac],
          }}
        >
          <FryBunch />
        </motion.div>
      ))}

      {/* ── Catch ripple ── */}
      {!reduced && DROPS.filter(d => d.good).map((d, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="pointer-events-none absolute rounded-full border-2"
          style={{
            left: d.x, bottom: '2.8rem', x: '-50%', y: '50%',
            borderColor: 'rgba(255,200,100,0.8)',
            width: 52, height: 52,
          }}
          animate={{ opacity: [0, 0, 0, 0.9, 0], scale: [0.2, 0.2, 0.2, 1.8, 0] }}
          transition={{
            duration: TOTAL, repeat: Infinity, delay: d.startFrac * TOTAL,
            times: [0, 0.17, 0.19, 0.25, 0.40],
          }}
        />
      ))}

      {/* ── Score pop ── */}
      {!reduced && DROPS.filter(d => d.good).map((d, i) => (
        <motion.span
          key={`sc-${i}`}
          className="pointer-events-none absolute font-display text-sm font-bold"
          style={{ left: d.x, bottom: '4rem', x: '-50%', color: '#FFE082' }}
          animate={{ y: [0, 0, -36, -36], opacity: [0, 0, 1, 0] }}
          transition={{
            duration: TOTAL, repeat: Infinity, delay: d.startFrac * TOTAL,
            times: [0, 0.19, 0.30, 0.52],
          }}
        >
          +10
        </motion.span>
      ))}

      {/* ── Red fry box — outer slides, inner squishes ── */}
      <motion.div
        className="absolute bottom-2"
        style={{ x: '-50%' }}
        animate={reduced ? undefined : { left: BASKET_LEFTS }}
        transition={reduced ? undefined : {
          duration: TOTAL, repeat: Infinity, times: BASKET_TIMES, ease: 'easeInOut',
        }}
      >
        <motion.div
          style={{ transformOrigin: 'bottom center' }}
          animate={reduced ? undefined : { scaleY: SQUISH_Y }}
          transition={reduced ? undefined : {
            duration: TOTAL, repeat: Infinity, times: SQUISH_T,
          }}
        >
          <RedFryBox />
        </motion.div>
      </motion.div>
    </div>
  );
}
