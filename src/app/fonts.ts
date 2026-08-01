import localFont from 'next/font/local';

/**
 * Sora — variable font, self-hosted woff2 (latin + latin-ext subsets).
 * Serves as both display and body face for EN.
 * Arabic (IBM Plex Sans Arabic) remains in src/styles/fonts.css via @font-face.
 */
export const sora = localFont({
  src: [
    { path: '../../public/fonts/Sora-latin-ext.woff2', weight: '100 900', style: 'normal' },
    { path: '../../public/fonts/Sora-latin.woff2',     weight: '100 900', style: 'normal' },
  ],
  variable: '--font-sora',
  display: 'swap',
});
