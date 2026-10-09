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
  default: 'bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-card surface-hover',
  outline: 'border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] surface-hover',
  minimal: 'bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-white/5',
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
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <div className={`group relative h-full rounded-2xl p-6 md:p-8 transition-all duration-300 ${variantStyles[variant]} ${className}`}>
        {icon && (
          <div className="icon-tile mb-5 !w-auto min-w-[3rem] px-3 font-display font-extrabold transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        {badge && (
          <p className="mb-3 text-sm font-medium text-primary-700 dark:text-primary-300">
            {badge}
          </p>
        )}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {href && (
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-700 dark:text-primary-300 gap-2 group-hover:gap-3 transition-all">
            Learn more
            <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </motion.div>
  );

  return href && !href.startsWith('#') ? (
    <a href={href} className="block h-full">
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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 md:gap-6"
    >
      <div className="icon-tile">{icon}</div>
      <div className="flex-grow">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient mb-2">
        {value}
      </div>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </p>
    </motion.div>
  );
};
