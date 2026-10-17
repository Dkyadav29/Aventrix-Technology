import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '@utils/site';

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The footer has its own contact links and back-to-top, so step out of its way
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: '0px 0px -120px 0px' }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!footerVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {showTop && (
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-lg hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                aria-label="Back to top"
                title="Back to top"
              >
                <FiArrowUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* The contact page has its own WhatsApp buttons; keep the form unobstructed */}
          {pathname !== '/contact' && (
            <motion.a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative h-14 w-14 inline-flex items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30"
              aria-label="Chat on WhatsApp"
            >
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-white dark:text-gray-900">
                Chat on WhatsApp
              </span>
              <FaWhatsapp size={28} />
            </motion.a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;
