'use client';

import Image from 'next/image';

const LOGOS = [
  { src: '/images/juhayna.png', alt: 'Juhayna' },
  { src: '/images/qasrelkababgi.png', alt: 'Qasr El Kababgi' },
  { src: '/images/nestle.png', alt: 'Nestlé' },
  { src: '/images/p-nashvile.png', alt: 'P. Nashville' },
];

const tripled = [...LOGOS, ...LOGOS, ...LOGOS];

export function MarqueeStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-10 sm:py-14">
      <p className="mb-10 text-center text-sm font-extrabold uppercase tracking-[0.25em] text-slate-500">
        Trusted by leading restaurants
      </p>

      <div
        className="relative overflow-hidden"
        style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)' }}
        aria-hidden="true"
      >
        <div
          className="flex w-max items-center gap-20"
          style={{ animation: 'marquee 18s linear infinite' }}
        >
          {tripled.map((logo, i) => (
            <div key={i} className="flex shrink-0 items-center px-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-16 w-auto object-contain sm:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
