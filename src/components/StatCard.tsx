import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <motion.div
        initial={{ count: 0 }}
        whileInView={{ count: parseInt(number.replace(/\D/g, '')) }}
        transition={{ duration: 2, delay }}
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2"
      >
        {number}
      </motion.div>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;
