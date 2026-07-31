import type { Config } from 'tailwindcss';

/**
 * TOKEN-DRIVEN THEME
 * Every value below points at a CSS variable defined in src/styles/tokens.css.
 * To re-skin the entire brand, edit tokens.css — never hardcode values here.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink-muted)',
        primary: 'var(--color-primary)',
        'primary-ink': 'var(--color-primary-ink)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-body)',
        arabic: 'var(--font-arabic)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-lg': 'var(--shadow-glow-lg)',
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
        glass: 'var(--shadow-glass)',
      },
      spacing: {
        section: 'var(--space-section)',
      },
      maxWidth: {
        content: 'var(--max-content)',
      },
      transitionTimingFunction: {
        bounce: 'var(--ease-bounce)',
        out: 'var(--ease-out)',
      },
      keyframes: {
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'grid-pan': 'grid-pan 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
