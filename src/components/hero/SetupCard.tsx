import { useTranslations } from 'next-intl';

const ROWS = ['games', 'launch', 'commitment'] as const;

export function SetupCard() {
  const t = useTranslations('hero.card');

  return (
    <div className="relative w-full max-w-md pb-10">
      <div className="-rotate-2 rounded-xl border border-[#141414]/10 bg-white p-6 text-[#141414] shadow-[0_24px_60px_-20px_rgba(20,20,20,0.25)] sm:p-8 rtl:rotate-2">
        <div className="flex items-baseline justify-between gap-4 border-b-2 border-[#141414] pb-4">
          <p className="whitespace-nowrap text-2xl font-bold">{t('label')}</p>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B675F]">
            {t('forLabel')}
          </p>
        </div>

        <dl>
          {ROWS.map((row) => (
            <div
              key={row}
              className="flex items-center justify-between gap-4 border-b border-[#141414]/15 py-4 text-sm sm:text-base"
            >
              <dt>{t(row)}</dt>
              <dd className="text-end text-[#6B675F]">{t(`${row}Value`)}</dd>
            </div>
          ))}
          <div className="pe-28 pt-5">
            <dt className="text-xl font-bold">{t('total')}</dt>
            <dd className="mt-1 text-sm text-[#6B675F] sm:text-base">{t('totalValue')}</dd>
          </div>
        </dl>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 end-4 flex h-28 w-28 rotate-12 items-center justify-center rounded-full bg-accent p-4 text-center text-xs font-bold uppercase leading-tight tracking-wider text-[#141414] shadow-lg rtl:-rotate-12"
      >
        {t('stamp')}
      </div>
    </div>
  );
}
