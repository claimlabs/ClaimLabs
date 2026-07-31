import localFont from 'next/font/local';

/**
 * Display face — Clash Display, self-hosted from Fontshare woff2.
 * Body (Inter) and Arabic (IBM Plex Sans Arabic) are self-hosted via
 * plain @font-face in src/styles/fonts.css (no build-time network fetch),
 * and wired to --font-inter / --font-arabic-plex in tokens.css.
 */
export const clashDisplay = localFont({
  src: [
    { path: '../../public/fonts/ClashDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-clash',
  display: 'swap',
});
