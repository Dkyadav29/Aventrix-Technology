import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-4"
    >
      <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient mb-1">
        {number}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;
