import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  /** Short list of highlights shown under the description */
  features?: string[];
  /** Route to the details page; renders a "Learn more" link when present */
  href?: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, href, delay = 0 }: ServiceCardProps) => {
  const body = (
    <>
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300 ring-1 ring-primary-100 dark:ring-white/10 transition-transform duration-300 group-hover:scale-110 [&>svg]:h-7 [&>svg]:w-7">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
              <FiCheck className="mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-300" size={16} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 group-hover:gap-3 transition-all">
          Learn more
          <FiArrowRight size={16} aria-hidden="true" />
        </span>
      )}
    </>
  );

  const cardClass = 'surface surface-hover flex h-full flex-col p-6 md:p-8';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      {href ? (
        <Link to={href} className={cardClass} aria-label={`${title} — learn more`}>
          {body}
        </Link>
      ) : (
        <div className={cardClass}>{body}</div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
