'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const LOGOS = [
  { src: '/images/juhayna.png', alt: 'Juhayna' },
  { src: '/images/qasrelkababgi.png', alt: 'Qasr El Kababgi' },
  { src: '/images/nestle.png', alt: 'Nestlé' },
  { src: '/images/p-nashvile.png', alt: 'P. Nashville' },
] as const;

export function TrustedLogos({ className }: { className?: string }) {
  const t = useTranslations('proof');
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <div className={className}>
      <p className="text-center text-xs uppercase tracking-wider text-ink-muted/70">
        {t('logosTitle')}
      </p>
      <div className="relative mt-4 overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-12 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-12 bg-gradient-to-l from-canvas to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12">
          {doubled.map((logo, i) => (
            <Image
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className="h-10 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
