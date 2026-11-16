'use client';

import { useEffect, useState } from 'react';
import type React from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { cn } from '@/lib/cn';

const SECTIONS = [
  { id: 'problem', key: 'problem' },
  { id: 'how', key: 'how' },
  { id: 'games', key: 'games' },
  { id: 'dashboard', key: 'dashboard' },
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#141414]/10 bg-[#F2F0EB] shadow-sm"
      style={{
        '--color-canvas': '#F2F0EB',
        '--color-ink': '#141414',
        '--color-ink-muted': '#6B675F',
        '--color-primary': '#141414',
        '--color-primary-ink': '#F2F0EB',
        '--color-surface': '#FAF9F6',
        '--color-surface-2': '#E8E5DE',
        '--color-border': 'rgba(20,20,20,0.12)',
        '--shadow-glow': 'none',
        '--shadow-glow-lg': 'none',
      } as React.CSSProperties}
    >
      <nav className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 md:h-[4.5rem] lg:ps-[clamp(1.5rem,9vw,9rem)] lg:pe-[clamp(1.5rem,5vw,4rem)]">
        <a href="#top" className="shrink-0" aria-label="ClaimLabs — home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full px-3 py-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                {t(s.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <Button href="#demo" size="md" className="hidden sm:inline-flex">
            {t('bookDemo')}
          </Button>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t('closeLabel') : t('menuLabel')}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#141414]/10 bg-[#F2F0EB] lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {t(s.key)}
                  </a>
                </li>
              ))}
              <li className="mt-3 px-3">
                <Button href="#demo" onClick={() => setOpen(false)}>
                  {t('bookDemo')}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
