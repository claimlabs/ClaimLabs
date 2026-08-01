import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { sora } from '../fonts';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const baseUrl = 'https://loyagame.com';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s · LOYA GAME`,
    },
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: { en: '/', ar: '/ar' },
    },
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      siteName: 'LOYA GAME',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'LOYA GAME' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={sora.variable}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
