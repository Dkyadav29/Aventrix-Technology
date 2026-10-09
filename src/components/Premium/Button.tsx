import { motion, MotionProps } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

interface PremiumButtonProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Internal route — rendered as a router link (no full page reload) */
  to?: string;
  /** External URL */
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30',
  secondary: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md hover:shadow-lg',
  outline: 'border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white bg-white/60 dark:bg-white/5 hover:border-primary-500 dark:hover:border-primary-400',
  ghost: 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm font-medium rounded-lg',
  md: 'px-6 py-3 text-base font-semibold rounded-xl',
  lg: 'px-8 py-4 text-lg font-semibold rounded-xl',
};

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', to, href, target, rel, onClick, ...motionProps }, ref) => {
    const classes = `inline-flex items-center justify-center gap-2 transition-shadow duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (to) {
      return (
        <Link
          to={to}
          className={`${classes} !transition-all hover:scale-[1.02] active:scale-[0.98]`}
        >
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type="button"
        className={classes}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

PremiumButton.displayName = 'PremiumButton';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className = '' }: BadgeProps) => {
  const variants = {
    primary: 'bg-primary-50 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300 ring-1 ring-inset ring-primary-200 dark:ring-primary-400/20',
    secondary: 'bg-secondary-50 dark:bg-secondary-400/10 text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-200 dark:ring-secondary-400/20',
    outline: 'border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className = '' }: TagProps) => {
  return (
    <span className={`chip ${className}`}>
      {children}
    </span>
  );
};

interface DotProps {
  className?: string;
}

export const Dot = ({ className = '' }: DotProps) => {
  return <div className={`h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 ${className}`} />;
};
