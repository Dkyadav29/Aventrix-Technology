import { motion } from 'framer-motion';
import React from 'react';

interface PremiumCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  badge?: string;
  delay?: number;
  className?: string;
  variant?: 'default' | 'outline' | 'minimal';
}

const variantStyles = {
  default: 'bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-lg',
  outline: 'border-2 border-gray-200 dark:border-gray-700 bg-transparent hover:border-primary-500 dark:hover:border-primary-400',
  minimal: 'bg-transparent border-0 hover:bg-gray-50 dark:hover:bg-gray-800/30',
};

export const PremiumCard = ({
  icon,
  title,
  description,
  href,
  badge,
  delay = 0,
  className = '',
  variant = 'default',
}: PremiumCardProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={variant !== 'minimal' ? { y: -4 } : {}}
      className={`group relative h-full rounded-xl p-6 md:p-8 transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
          {badge}
        </span>
      )}
      
      {icon && (
        <motion.div
          whileHover={variant !== 'minimal' ? { scale: 1.1, rotate: 5 } : {}}
          className="mb-4 text-3xl md:text-4xl"
        >
          {icon}
        </motion.div>
      )}
      
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
      
      {href && (
        <motion.a
          href={href}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 gap-2 group-hover:gap-3 transition-all"
        >
          Learn more
          <span>→</span>
        </motion.a>
      )}
    </motion.div>
  );

  return href && !href.startsWith('#') ? (
    <a href={href}>
      {content}
    </a>
  ) : (
    content
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const Feature = ({ icon, title, description, delay = 0 }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 md:gap-6"
    >
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xl">
          {icon}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

interface StatProps {
  value: string;
  label: string;
  delay?: number;
}

export const Stat = ({ value, label, delay = 0 }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </p>
    </motion.div>
  );
};
