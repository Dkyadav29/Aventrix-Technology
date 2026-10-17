import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '@utils/site';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  /** Route or in-page anchor (e.g. "#contact-form") */
  primaryTo?: string;
  showWhatsApp?: boolean;
  whatsAppLabel?: string;
}

const CTASection = ({
  title,
  description,
  primaryLabel = 'Get Free Consultation',
  primaryTo = '/contact',
  showWhatsApp = true,
  whatsAppLabel = 'Chat on WhatsApp',
}: CTASectionProps) => {
  const primaryContent = (
    <>
      {primaryLabel}
      <FiArrowRight size={20} />
    </>
  );

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-secondary-500 to-secondary-700 px-6 py-14 md:px-16 md:py-20 text-center shadow-2xl shadow-primary-900/20"
        >
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary-300/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">{title}</h2>
            {description && (
              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">{description}</p>
            )}
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              {primaryTo.startsWith('#') ? (
                <a href={primaryTo} className="btn-white btn-lg">
                  {primaryContent}
                </a>
              ) : (
                <Link to={primaryTo} className="btn-white btn-lg">
                  {primaryContent}
                </Link>
              )}
              {showWhatsApp && (
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light btn-lg"
                >
                  <FaWhatsapp size={22} />
                  {whatsAppLabel}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
