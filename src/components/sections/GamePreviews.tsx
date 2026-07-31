'use client';

import { motion, useReducedMotion } from 'framer-motion';

const CYCLE = 2.4;

/** Fruit Slice: fruits arc up, slash cuts them, halves fly apart with score pop */
export function FruitSlicePreview() {
  const reduced = useReducedMotion();

  const fruits = [
    { color: 'var(--color-danger)',  x: '18%', delay: 0,    score: '+10' },
    { color: 'var(--color-primary)', x: '46%', delay: 0.8,  score: '+15' },
    { color: 'var(--color-accent)',  x: '70%', delay: 1.6,  score: '+20' },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden select-none" aria-hidden="true">
      {fruits.map((f, i) => (
        <span key={i}>
          {/* Whole fruit — rises from bottom to apex */}
          <motion.div
            className="absolute bottom-5 h-8 w-8 rounded-full"
            style={{ left: f.x, background: f.color, boxShadow: `0 0 20px ${f.color}` }}
            animate={reduced ? { y: -80 } : {
              y:       [0,    -115, -115,  -115],
              opacity: [0,     1,    1,     0   ],
              scale:   [0.5,   1,    1,     0.4 ],
            }}
            transition={reduced ? undefined : {
              duration: CYCLE, repeat: Infinity, delay: f.delay,
              times: [0, 0.38, 0.56, 0.7], ease: 'easeOut',
            }}
          />

          {/* Left half — peels off left after slash */}
          {!reduced && (
            <motion.div
              className="absolute bottom-5 h-8 w-4 rounded-l-full"
              style={{ left: f.x, background: f.color }}
              animate={{
                y:       [0, -115, -115, -80 ],
                x:       [0,    0,    0,  -28 ],
                opacity: [0,    0,    1,    0 ],
                rotate:  [0,    0,    0,  -50 ],
              }}
              transition={{
                duration: CYCLE, repeat: Infinity, delay: f.delay,
                times: [0, 0.55, 0.62, 1],
              }}
            />
          )}

          {/* Right half — peels off right after slash */}
          {!reduced && (
            <motion.div
              className="absolute bottom-5 h-8 w-4 rounded-r-full"
              style={{ left: f.x, background: f.color }}
              animate={{
                y:       [0, -115, -115, -80 ],
                x:       [0,    0,    0,   26 ],
                opacity: [0,    0,    1,    0 ],
                rotate:  [0,    0,    0,   50 ],
              }}
              transition={{
                duration: CYCLE, repeat: Infinity, delay: f.delay,
                times: [0, 0.55, 0.62, 1],
              }}
            />
          )}

          {/* Score pop */}
          {!reduced && (
            <motion.span
              className="absolute bottom-5 font-display text-xs font-bold"
              style={{ left: f.x, color: f.color }}
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
          )}
        </span>
      ))}

      {/* Diagonal slash streak */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute left-[-8%] top-[38%] h-[2.5px] w-[116%] origin-left"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 30%, var(--color-primary) 50%, rgba(255,255,255,0.85) 70%, transparent 100%)',
            rotate: -14,
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

const DROP_CYCLE = 5.6;

/** Catch the Fries: items drop with gravity from top, basket slides to catch */
export function CatchFriesPreview() {
  const reduced = useReducedMotion();

  const drops = [
    { x: '20%', delay: 0,    good: true  },
    { x: '68%', delay: 1.4,  good: true  },
    { x: '44%', delay: 2.8,  good: false },
    { x: '82%', delay: 4.2,  good: true  },
  ];

  // Basket chases the good drops
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
            ease:     ['linear', [0.4, 0, 1, 1]], // snap-appear then accelerate down
          }}
        >
          {d.good ? (
            /* Fry stick */
            <div
              className="h-10 w-2.5 rounded-full"
              style={{
                background: 'var(--color-accent)',
                boxShadow: '0 0 14px var(--color-accent)',
              }}
            />
          ) : (
            /* Bomb / bad item */
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white"
              style={{
                background: 'var(--color-danger)',
                boxShadow: '0 0 14px var(--color-danger)',
              }}
            >
              ✕
            </div>
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
        className="absolute bottom-4 h-7 w-16 rounded-b-2xl border-2"
        style={{
          x: '-50%',
          borderColor: 'var(--color-primary)',
          background: 'rgba(43,127,255,0.15)',
          boxShadow: '0 0 16px rgba(43,127,255,0.4)',
        }}
        animate={reduced ? undefined : { left: basketStops }}
        transition={reduced ? undefined : {
          duration: DROP_CYCLE,
          repeat:   Infinity,
          ease:     'easeInOut',
          times:    [0, 0.25, 0.5, 0.75],
        }}
      />
    </div>
  );
}
