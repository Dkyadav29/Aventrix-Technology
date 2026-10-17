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
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-36',
};

// The dark and gradient variants are always dark, so they carry the `dark`
// class to make everything inside them render with dark-mode styles.
const VARIANT_MAP = {
  default: 'bg-white dark:bg-gray-950',
  dark: 'dark bg-gray-950 text-white',
  gradient: 'dark bg-gradient-to-br from-gray-950 via-secondary-950 to-gray-950 text-white',
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
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <p className="eyebrow mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${centered ? 'mx-auto max-w-2xl' : ''} text-gray-600 dark:text-gray-300 leading-relaxed`}>
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
  lg: 'gap-6 md:gap-10',
};

const COL_MAP = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
};

export const Grid = ({ children, cols = 3, gap = 'md', className = '' }: GridProps) => {
  return (
    <div className={`grid ${COL_MAP[cols]} ${GAP_MAP[gap]} ${className}`}>
      {children}
    </div>
  );
};
