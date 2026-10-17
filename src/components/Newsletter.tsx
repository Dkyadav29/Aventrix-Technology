import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiMail } from 'react-icons/fi';
import Button from './Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setEmail('');
    setLoading(false);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="dark relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-12 md:px-16 md:py-16"
        >
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-500/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary-600/25 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="icon-tile mb-6">
              <FiMail />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Stay Ahead With Industry Insights
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get expert tips, industry trends, and exclusive updates delivered to your inbox. Join 5000+ industry leaders.
            </p>

            <div aria-live="polite">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-secondary-400/30 bg-secondary-400/10 px-6 py-4 font-medium text-secondary-300"
                >
                  <FiCheckCircle size={20} />
                  Thank you for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="field-input flex-1"
                  />
                  <Button variant="primary" size="md" loading={loading} type="submit">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
