import { motion } from 'framer-motion';
import HeroSection from '@components/HeroSection';
import Newsletter from '@components/Newsletter';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Our Portfolio"
        subtitle="Just Getting Started"
        description="We have recently launched and are excited to take on our first projects"
      />

      {/* Coming Soon Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-8xl mb-8">🚀</div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Portfolio Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We have just launched our services and are ready to bring your ideas to life.
              Our portfolio is currently empty — but that's where <span className="text-primary-600 font-semibold">your project</span> can be the first!
            </p>
            <p className="text-base text-gray-500 mb-10">
              We are committed to delivering high-quality work and building a strong track record one project at a time. Be our first client and get exclusive attention and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Start the First Project
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  View Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🎯',
                title: 'Dedicated Attention',
                description:
                  'As a new service, every project gets our full focus and commitment — no cutting corners.',
              },
              {
                icon: '💡',
                title: 'Fresh Perspective',
                description:
                  'We bring modern techniques and creative thinking to solve your business challenges.',
              },
              {
                icon: '🤝',
                title: 'Be Our First',
                description:
                  'Partner with us from the beginning and enjoy special pricing and a long-term relationship.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's work together and create a project we'll both be proud to showcase.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Portfolio;
