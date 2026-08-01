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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 8px 0px rgba(var(--primary-rgb), 0.5), 0 0 24px -4px rgba(var(--primary-rgb), 0.3)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(var(--primary-rgb), 0.7), 0 0 60px -4px rgba(var(--primary-rgb), 0.5)' },
        },
        glitch: {
          '0%, 82%, 100%': { clipPath: 'none', transform: 'none' },
          '83%': { clipPath: 'polygon(0 8%, 100% 8%, 100% 38%, 0 38%)', transform: 'translateX(-4px)' },
          '84%': { clipPath: 'polygon(0 55%, 100% 55%, 100% 80%, 0 80%)', transform: 'translateX(4px)' },
          '85%': { clipPath: 'none', transform: 'translateX(-2px)' },
          '86%': { clipPath: 'polygon(0 20%, 100% 20%, 100% 48%, 0 48%)', transform: 'translateX(3px)' },
          '87%': { clipPath: 'none', transform: 'none' },
        },
      },
      animation: {
        'grid-pan': 'grid-pan 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        marquee: 'marquee 28s linear infinite',
        'neon-pulse': 'neon-pulse 2.4s ease-in-out infinite',
        glitch: 'glitch 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
