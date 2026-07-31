import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-primary active:translate-y-px disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-ink shadow-glow hover:scale-[1.03] hover:brightness-105',
  secondary:
    'bg-surface-2 text-ink border border-border hover:border-primary/50 hover:bg-surface hover:scale-[1.02]',
  ghost: 'text-ink hover:text-primary hover:bg-primary/10',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-8 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    'href' | 'className'
  >;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<'button'>,
    'className'
  >;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, href, ...rest } =
      props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
