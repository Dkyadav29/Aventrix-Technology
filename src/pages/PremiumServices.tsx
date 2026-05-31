import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import ServiceCard from '@components/ServiceCard';
import GlassCard from '@components/GlassCard';
import Seo from '@components/Seo';
import { FiCode, FiSmartphone, FiZap, FiLink2, FiCpu, FiArrowRight } from 'react-icons/fi';

const PremiumServices = () => {
  const services = [
    {
      icon: <FiCode size={40} className="text-primary-400" />,
      title: 'Web Development',
      description: 'React, Next.js, Node.js - Custom web solutions built for scale and performance.',
    },
    {
      icon: <FiSmartphone size={40} className="text-primary-400" />,
      title: 'Mobile App Development',
      description: 'iOS & Android apps using React Native and Flutter for maximum reach.',
    },
    {
      icon: <FiZap size={40} className="text-secondary-400" />,
      title: 'Automation & Bots',
      description: 'Selenium automation, Trading bots, Web scraping - Automate your workflow.',
    },
    {
      icon: <FiLink2 size={40} className="text-secondary-400" />,
      title: 'API Integration',
      description: 'REST APIs, Webhooks, Third-party integrations - Connect your systems.',
    },
    {
      icon: <FiCpu size={40} className="text-primary-400" />,
      title: 'AI Solutions',
      description: 'ChatGPT integration, Machine Learning models, Custom AI solutions.',
    },
    {
      icon: <FiZap size={40} className="text-secondary-400" />,
      title: 'DevOps & Scaling',
      description: 'AWS, Docker, Kubernetes - Deploy and scale with confidence.',
    },
  ];

  return (
    <div>
      <Seo
        title="Services — Web, Mobile, WordPress, Testing & AI"
        description="Full-stack development services: web apps, Android & iOS apps, WordPress, API integration, software & load testing, and AI integration."
        path="/services"
      />
      {/* Hero */}
      <HeroSection
        title="Services Built for Your Success"
        subtitle="Complete Development Solutions"
        description="From concept to scale, we provide end-to-end development services for startups and enterprises."
        showWhatsApp={true}
      />

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose BuildHub
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We&apos;re not just developers - we&apos;re your technology partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: '⚡ Fast Delivery', desc: '4-8 weeks for MVP, agile sprints, rapid iterations' },
              { title: '💼 Transparent Pricing', desc: 'Custom quotes scoped to your project. Flexible payment milestones, no lock-in.' },
              { title: '🎯 Custom Solutions', desc: 'Tailored to your business, not off-the-shelf templates' },
              { title: '👨‍💻 Expert Team', desc: 'Ex-Google, Ex-Apple developers with startup experience' },
              { title: '24/7 Support', desc: 'Always available for emergencies and support' },
              { title: '📈 Scaling Ready', desc: 'Built for growth from day one, handles 10x without rewrite' },
            ].map((item, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-600 via-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-grid-pattern"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join 50+ successful startups and enterprises that trust BuildHub for their technology needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Schedule Your Free Consultation
              <FiArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumServices;
