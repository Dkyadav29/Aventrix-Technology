import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: 'default' | 'primary' | 'secondary';
}

const GlassCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  variant = 'default',
}: GlassCardProps) => {
  const variants = {
    default: 'bg-white/10 border border-white/20 dark:bg-white/5 dark:border-white/10',
    primary: 'bg-primary-500/10 border border-primary-500/20 dark:bg-primary-600/10 dark:border-primary-600/20',
    secondary: 'bg-secondary-500/10 border border-secondary-500/20 dark:bg-secondary-600/10 dark:border-secondary-600/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={`
        rounded-2xl backdrop-blur-md p-6 md:p-8
        ${variants[variant]}
        transition-all duration-300
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
