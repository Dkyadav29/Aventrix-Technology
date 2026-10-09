import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import Seo from '@components/Seo';

const NotFound = () => {
  return (
    <section className="relative overflow-hidden">
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noIndex
      />
      <div className="absolute inset-0 bg-grid mask-fade opacity-60" aria-hidden="true" />
      <div className="container-custom relative z-10 min-h-[70vh] flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <p className="font-display text-8xl md:text-9xl font-extrabold text-gradient leading-none">404</p>
          <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <FiArrowLeft size={18} />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-outline">
              <FiMail size={18} />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
