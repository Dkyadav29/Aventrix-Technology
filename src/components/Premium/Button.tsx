import { motion, MotionProps } from 'framer-motion';
import React from 'react';

interface PremiumButtonProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-600/50 dark:hover:shadow-primary-600/30',
  secondary: 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:shadow-lg',
  outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800',
  ghost: 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm font-medium rounded-lg',
  md: 'px-6 py-3 text-base font-semibold rounded-lg',
  lg: 'px-8 py-4 text-lg font-semibold rounded-xl',
};

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', href, target, rel, onClick, ...motionProps }, ref) => {
    const classes = `inline-flex items-center justify-center gap-2 transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

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
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300',
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
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${className}`}>
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
