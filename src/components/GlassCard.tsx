import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: 'default' | 'primary' | 'secondary';
}

const variants = {
  default: 'bg-white border-gray-200 dark:bg-white/[0.04] dark:border-white/10',
  primary:
    'bg-gradient-to-br from-primary-50/80 to-white border-primary-100 dark:from-primary-400/10 dark:to-white/[0.02] dark:border-primary-400/20',
  secondary:
    'bg-gradient-to-br from-secondary-50/80 to-white border-secondary-100 dark:from-secondary-400/10 dark:to-white/[0.02] dark:border-secondary-400/20',
};

const GlassCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  variant = 'default',
}: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {/* Hover lift lives on the inner element so it doesn't fight the entrance transform */}
      <div
        className={`
          h-full rounded-2xl border p-6 md:p-8 shadow-card dark:backdrop-blur-md
          ${variants[variant]}
          ${hover ? 'surface-hover' : ''}
          ${className}
        `}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
