import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="
        h-full rounded-2xl backdrop-blur-md
        bg-gradient-to-br from-white/10 to-white/5
        dark:from-white/5 dark:to-white/[0.02]
        border border-white/20 dark:border-white/10
        p-6 md:p-8 transition-all duration-300
        hover:shadow-2xl hover:border-primary-500/50
        dark:hover:border-primary-600/50
      ">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mb-4 text-4xl md:text-5xl"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
