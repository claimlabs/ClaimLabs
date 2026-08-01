'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { Button } from './ui/Button';
import { cn } from '@/lib/cn';

const SECTIONS = [
  { id: 'problem', key: 'problem' },
  { id: 'how', key: 'how' },
  { id: 'games', key: 'games' },
  { id: 'rewards', key: 'rewards' },
  { id: 'dashboard', key: 'dashboard' },
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#top" className="shrink-0" aria-label="LOYA GAME — home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {t(s.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Button href="#demo" size="md" className="hidden sm:inline-flex">
            {t('bookDemo')}
          </Button>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink lg:hidden"
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
            className="border-t border-border bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-lg text-ink-muted hover:bg-primary/10 hover:text-ink"
                  >
                    {t(s.key)}
                  </a>
                </li>
              ))}
              <li className="mt-3 flex items-center justify-between gap-3 px-3">
                <LanguageToggle />
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
