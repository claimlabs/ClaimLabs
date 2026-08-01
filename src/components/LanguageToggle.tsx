'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/cn';

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: 'en' | 'ar') => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className={cn(
        'inline-flex min-h-[2.75rem] items-center rounded-full border border-border bg-surface/60 p-0.5 text-sm',
        isPending && 'opacity-60',
        className,
      )}
      role="group"
      aria-label={t('langLabel')}
    >
      <Languages
        className="mx-1.5 h-4 w-4 text-ink-muted"
        aria-hidden="true"
        strokeWidth={1.75}
      />
      {(['en', 'ar'] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => switchTo(lng)}
          aria-pressed={locale === lng}
          className={cn(
            'min-h-[2.75rem] rounded-full px-2.5 py-1 font-medium transition-colors duration-200',
            locale === lng
              ? 'bg-primary text-primary-ink'
              : 'text-ink-muted hover:text-ink',
          )}
        >
          {lng === 'en' ? 'EN' : 'ع'}
        </button>
      ))}
    </div>
  );
}
