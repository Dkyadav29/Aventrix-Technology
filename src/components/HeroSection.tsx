import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';

const ROTATING_SERVICES = [
  'Web Development',
  'Android Apps',
  'iOS Apps',
  'WordPress Sites',
  'Software & Load Testing',
  'API Integration',
  'AI Integration',
];

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  showWhatsApp?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  showWhatsApp = true,
}: HeroSectionProps) => {
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setServiceIndex((i) => (i + 1) % ROTATING_SERVICES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-24 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black" />
      
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/30 rounded-full blur-3xl opacity-30"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl opacity-30"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Subtitle / Badge */}
          {subtitle && (
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md text-sm font-semibold text-primary-300 dark:text-primary-400">
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent leading-tight"
          >
            {title}
          </motion.h1>

          {/* Rotating Services */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold"
          >
            <span className="text-gray-300">We build</span>
            <span className="relative inline-flex items-center min-h-[1.75rem] sm:min-h-[2rem] md:min-h-[2.25rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_SERVICES[serviceIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent whitespace-nowrap"
                >
                  {ROTATING_SERVICES[serviceIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 flex-wrap"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary-600/50 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
              <FiArrowRight size={20} />
            </Link>
            
            {showWhatsApp && (
              <a
                href="https://wa.me/916203075626?text=I%20want%20to%20discuss%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 dark:border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <FiMessageCircle size={20} />
                Chat on WhatsApp
              </a>
            )}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-6 py-3 rounded-lg bg-white/5 dark:bg-white/[0.02] border border-white/10 dark:border-white/5 backdrop-blur-md"
          >
            <p className="text-sm text-gray-300 dark:text-gray-400">
              ✓ Premium Quality • ✓ On-Time Delivery • ✓ Transparent Pricing
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-2 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
