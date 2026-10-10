import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FiTrendingUp,
  FiShoppingBag,
  FiActivity,
  FiBookOpen,
  FiHome,
  FiCreditCard,
  FiTruck,
  FiBriefcase,
} from 'react-icons/fi';
import SectionHeading from './SectionHeading';

interface Industry {
  icon: IconType;
  title: string;
  desc: string;
}

const INDUSTRIES: Industry[] = [
  { icon: FiTrendingUp, title: 'Startups & SaaS', desc: 'MVPs, dashboards, and subscription products built to iterate fast.' },
  { icon: FiShoppingBag, title: 'E-commerce & Retail', desc: 'Storefronts, payment integrations, and inventory tooling.' },
  { icon: FiActivity, title: 'Healthcare', desc: 'Appointment, records, and patient-facing apps with privacy in mind.' },
  { icon: FiBookOpen, title: 'Education', desc: 'Learning platforms, course portals, and student apps.' },
  { icon: FiHome, title: 'Real Estate', desc: 'Listing sites, lead capture, and CRM integrations.' },
  { icon: FiCreditCard, title: 'Fintech', desc: 'Secure portals, reporting, and third-party API integrations.' },
  { icon: FiTruck, title: 'Logistics', desc: 'Tracking, scheduling, and operations dashboards.' },
  { icon: FiBriefcase, title: 'Agencies & Consultancies', desc: 'White-label development and overflow engineering capacity.' },
];

/** "Industries we serve" grid for the home page */
const Industries = () => (
  <section className="section section-muted" aria-labelledby="industries-heading">
    <div className="container-custom">
      <SectionHeading
        eyebrow="Industries"
        title="Who We Work With"
        description="From early-stage startups to established businesses, we adapt our process to your domain"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {INDUSTRIES.map(({ icon: Icon, title, desc }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="surface surface-hover flex gap-4 p-5"
          >
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-400/10 text-xl text-primary-700 dark:text-primary-300">
              <Icon aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Industries;
