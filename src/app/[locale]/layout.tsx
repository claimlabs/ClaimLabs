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
  const baseUrl = 'https://www.claimlabs.online';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s · ClaimLabs`,
    },
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      siteName: 'ClaimLabs',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ClaimLabs' }],
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

  return (
    <html
      lang={locale}
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
