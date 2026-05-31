import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const PADDING_MAP = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-40',
};

const VARIANT_MAP = {
  default: 'bg-white dark:bg-gray-900',
  dark: 'bg-gray-900 dark:bg-black text-white',
  gradient: 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white dark:from-black dark:via-gray-950 dark:to-black',
};

export const Section = ({
  children,
  className = '',
  variant = 'default',
  padding = 'lg',
}: SectionProps) => {
  return (
    <section className={`${VARIANT_MAP[variant]} ${PADDING_MAP[padding]} transition-colors duration-300 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  description,
  centered = true,
  className = '',
}: SectionTitleProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 md:mb-20 ${className}`}>
      {subtitle && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg md:text-xl ${centered ? 'mx-auto max-w-2xl' : ''} text-gray-600 dark:text-gray-300 leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GAP_MAP = {
  sm: 'gap-4 md:gap-6',
  md: 'gap-6 md:gap-8',
  lg: 'gap-8 md:gap-12',
};

const COL_MAP = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

export const Grid = ({ children, cols = 3, gap = 'md', className = '' }: GridProps) => {
  return (
    <div className={`grid ${COL_MAP[cols]} ${GAP_MAP[gap]} ${className}`}>
      {children}
    </div>
  );
};
