'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const GAMES = [
  { key: 'fruit', image: '/images/GAME 1.png', w: 1762, h: 893 },
  { key: 'fries', image: '/images/GAME 2.png', w: 1909, h: 824 },
] as const;

export function Games() {
  const t = useTranslations('games');

  return (
    <Section id="games" ariaLabelledby="games-title" className="light-section">
      <div className="container-x">
        <SectionHeading
          id="games-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_480px]">
          {/* Left: two game cards stacked */}
          <div className="flex flex-col gap-6">
            {GAMES.map(({ key, image, w, h }, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <div className="w-full overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={t(`${key}.name`)}
                    width={w}
                    height={h}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: tall portrait image */}
          <Reveal delay={0.2}>
            <div className="w-full overflow-hidden rounded-2xl max-h-[420px] lg:max-h-none">
              <Image
                src="/images/GAME 3.png"
                alt="Game experience on mobile"
                width={768}
                height={1376}
                sizes="560px"
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          {t('previewNote')}
        </p>
      </div>
    </Section>
  );
}
