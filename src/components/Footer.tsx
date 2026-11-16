'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Linkedin, Facebook, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const t = useTranslations('footer');

  const columns = [
    {
      title: t('cols.product'),
      links: [
        { label: t('links.how'), href: '#how' },
        { label: t('links.games'), href: '#games' },
        { label: t('links.dashboard'), href: '#dashboard' },
      ],
    },
    {
      title: t('cols.company'),
      links: [
        { label: t('links.about'), href: '#' },
        { label: t('links.contact'), href: '#demo' },
        { label: t('links.careers'), href: '#' },
      ],
    },
    {
      title: t('cols.legal'),
      links: [
        { label: t('links.privacy'), href: '#' },
        { label: t('links.terms'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-canvas">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              {t('tagline')}
            </p>
            <div className="mt-6 flex items-center gap-3" aria-label={t('socialNote')}>
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="Social link (placeholder)"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-muted transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-ink-muted sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${t('email')}`}
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t('email')}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t('region')}
            </span>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-muted/60">
          © {new Date().getFullYear()} ClaimLabs. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
