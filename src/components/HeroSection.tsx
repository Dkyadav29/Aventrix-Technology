import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import HeroDashboard from './HeroDashboard';

interface HeroSectionProps {
  title: string;
  /** Eyebrow badge (home) or breadcrumb label (page) */
  subtitle?: string;
  description?: string;
  /** 'home' is the full landing hero; 'page' is a compact header for inner pages */
  variant?: 'home' | 'page';
  /** Second headline line, rendered in a lighter tone (home variant) */
  titleAccent?: string;
  /** Short line under the headline, e.g. "Web. Mobile. AI. APIs." (home variant) */
  tagline?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  /** Short proof points shown under the buttons (home variant) */
  trustPoints?: string[];
  /** Optional buttons rendered under the description on the 'page' variant */
  actions?: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/** Backdrop for inner-page headers */
const PageBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-secondary-950 to-gray-950" />
    <div className="absolute inset-0 bg-grid mask-fade opacity-60" />
    <motion.div
      animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary-500/25 blur-3xl"
    />
    <motion.div
      animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-secondary-600/25 blur-3xl"
    />
  </div>
);

/** Quieter backdrop for the home hero: deep navy, a faint grid, two soft glows */
const HomeBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-secondary-950" />
    <div className="absolute inset-0 bg-grid mask-fade opacity-40" />
    <div className="absolute right-[-10%] top-[-20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.secondary.400/22%),transparent)]" />
    <div className="absolute bottom-[-30%] right-[10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.primary.500/18%),transparent)]" />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/[0.03] to-transparent" />
  </div>
);

const HeroSection = ({
  title,
  subtitle,
  description,
  variant = 'page',
  titleAccent,
  tagline,
  primaryCta = { label: 'Start a Project', to: '/contact' },
  secondaryCta = { label: 'View Our Work', to: '/portfolio' },
  trustPoints = ['Production-ready', 'API-first', 'Built to scale'],
  actions,
}: HeroSectionProps) => {
  if (variant === 'page') {
    return (
      <section className="dark relative overflow-hidden bg-gray-950 text-white">
        <PageBackdrop />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.nav
              variants={itemVariants}
              aria-label="Breadcrumb"
              className="mb-6 flex items-center justify-center gap-1.5 text-sm text-gray-400"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {subtitle && (
                <>
                  <FiChevronRight size={14} aria-hidden="true" />
                  <span className="text-primary-300" aria-current="page">
                    {subtitle}
                  </span>
                </>
              )}
            </motion.nav>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-white"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {actions && (
              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-col sm:flex-row gap-4 justify-center"
              >
                {actions}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="dark relative overflow-hidden bg-secondary-950 text-white">
      <HomeBackdrop />

      <div className="container-custom relative z-10 py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
          {/* Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[680px] mx-auto lg:mx-0 text-center lg:text-left"
          >
            {subtitle && (
              <motion.p variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
                  {subtitle}
                </span>
              </motion.p>
            )}

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-white"
            >
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-gray-100 via-primary-200 to-secondary-300 bg-clip-text text-transparent">
                    {titleAccent}
                  </span>
                </>
              )}
            </motion.h1>

            {tagline && (
              <motion.p
                variants={itemVariants}
                className="mt-5 text-lg sm:text-xl font-semibold tracking-wide text-primary-300"
              >
                {tagline}
              </motion.p>
            )}

            {description && (
              <motion.p
                variants={itemVariants}
                className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-[34rem] mx-auto lg:mx-0"
              >
                {description}
              </motion.p>
            )}

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                to={primaryCta.to}
                className="group btn btn-lg text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
              >
                {primaryCta.label}
                <FiArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to={secondaryCta.to} className="btn-ghost-light btn-lg">
                {secondaryCta.label}
              </Link>
            </motion.div>

            {trustPoints.length > 0 && (
              <motion.ul
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-400"
              >
                {trustPoints.map((point) => (
                  <li key={point} className="inline-flex items-center gap-2">
                    <FiCheckCircle className="text-primary-400" size={15} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative px-2 sm:px-6 lg:px-0"
            aria-hidden="true"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
