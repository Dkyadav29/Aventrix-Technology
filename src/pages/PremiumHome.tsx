import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import GlassCard from '@components/GlassCard';
import ServiceCard from '@components/ServiceCard';
import StatCard from '@components/StatCard';
import Seo from '@components/Seo';
import { FiCode, FiSmartphone, FiZap, FiLink2, FiCpu, FiArrowRight, FiCheck, FiMessageCircle, FiMail } from 'react-icons/fi';

const PremiumHome = () => {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Aventix',
    url: 'https://aventix.dev',
    description:
      'Web development, Android & iOS apps, WordPress, API integration, software & load testing, and AI integration.',
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Android App Development',
      'iOS App Development',
      'WordPress Development',
      'Software Testing',
      'Load Testing',
      'API Integration',
      'AI Integration',
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <Seo
        title="Web, Mobile & AI Development Services"
        description="Aventix builds websites, Android & iOS apps, WordPress sites, API integrations, software & load testing, and AI-powered solutions for startups and businesses."
        path="/"
        jsonLd={servicesJsonLd}
      />
      {/* Hero Section */}
      <HeroSection
        title="Web, Mobile & AI Products — Built to Deliver"
        subtitle="Aventix Development Studio"
        description="We design and engineer fast, reliable digital products — from websites and mobile apps to WordPress, API integrations, and AI features."
        showWhatsApp={true}
      />

      {/* Quick Stats */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 dark:from-black via-primary-900 to-gray-900 dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StatCard number="5+" label="Tech Stacks" />
            <StatCard number="100%" label="Dedicated" delay={0.1} />
            <StatCard number="Fast" label="Turnaround" delay={0.2} />
            <StatCard number="24/7" label="Available" delay={0.3} />
          </div>
        </div>
      </section>

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
              What We Build
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              End-to-end product engineering across web, mobile, and AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                icon: <FiCode size={40} className="text-primary-400" />,
                title: 'Web Development',
                description: 'React, Next.js, Node.js — clean, fast, and scalable web apps',
              },
              {
                icon: <FiSmartphone size={40} className="text-secondary-400" />,
                title: 'Mobile Apps',
                description: 'Cross-platform apps for iOS & Android with React Native',
              },
              {
                icon: <FiZap size={40} className="text-primary-400" />,
                title: 'Automation',
                description: 'Scripts and bots to automate your repetitive workflows',
              },
              {
                icon: <FiLink2 size={40} className="text-secondary-400" />,
                title: 'API Integration',
                description: 'Connect your app to any third-party service or API',
              },
              {
                icon: <FiCpu size={40} className="text-primary-400" />,
                title: 'AI Features',
                description: 'ChatGPT and AI integrations to make your product smarter',
              },
              {
                icon: <FiZap size={40} className="text-secondary-400" />,
                title: 'UI/UX Design',
                description: 'Clean, responsive, and user-friendly interface design',
              },
            ].map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-600/50 transition-all"
            >
              View All Services
              <FiArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Aventix?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A focused studio that treats your product like our own
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Agile sprints with regular progress updates — no ghosting, no surprises' },
              { icon: '💼', title: 'Transparent Pricing', desc: 'Clear, fixed quotes tailored to your scope — no hidden fees, no surprise invoices' },
              { icon: '🎯', title: 'Direct Partnership', desc: 'Work directly with our team — no account managers, no slide decks, no handoffs' },
              { icon: '🛠️', title: 'Modern Tech Stack', desc: 'React, Next.js, React Native, Node.js, WordPress — battle-tested, modern tools' },
              { icon: '🔒', title: 'Honest Communication', desc: 'We tell you exactly where things stand — the good, the blockers, and the fixes' },
              { icon: '🤝', title: 'Long-Term Partnership', desc: 'Post-launch support and ongoing collaboration as your product grows' },
            ].map((item, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
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

      {/* Practice Projects / Portfolio Preview */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-3">
              A look at the kind of products we design and engineer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 mb-12">
            {[
              { emoji: '🌤️', title: 'Weather Dashboard', tech: 'React • OpenWeather API • Tailwind' },
              { emoji: '✅', title: 'Task Manager App', tech: 'React • Node.js • MongoDB' },
              { emoji: '💬', title: 'Chat Application', tech: 'React • Socket.io • Node.js' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="primary">
                  <div className="text-6xl mb-4">{project.emoji}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.tech}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600/10 transition-all"
            >
              View All Projects
              <FiArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fresh Start / First Client Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Built Different. Built for You.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A boutique studio offering what large agencies can't — focus, ownership, and a direct line to the people building your product
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '🛠️',
                title: 'Quality-First Engineering',
                desc: 'Clean architecture, modern stacks, full documentation, and code we\'re proud to hand off. Built to last, not to ship-and-forget.',
              },
              {
                icon: '💡',
                title: 'Your Project, Our Priority',
                desc: 'A focused engagement — direct attention from the team actually building your product, from kickoff through delivery.',
              },
              {
                icon: '💼',
                title: 'Fair, Project-Based Pricing',
                desc: 'Custom quotes scoped to your project — no inflated retainers, no surprise overages. You pay for value delivered.',
              },
            ].map((item, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Simple, transparent, and collaborative
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: '01', title: 'Understand', desc: 'We listen carefully to understand exactly what you need' },
              { num: '02', title: 'Plan', desc: 'Clear timeline, honest estimate, no guesswork' },
              { num: '03', title: 'Build', desc: 'Regular updates so you\'re never left in the dark' },
              { num: '04', title: 'Deliver', desc: 'Clean code, full handover, ongoing support' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="secondary" delay={index * 0.1}>
                  <div className="text-4xl font-bold text-secondary-400 mb-4 opacity-50">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {step.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-40 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-primary-600 font-semibold uppercase tracking-widest mb-3">TRANSPARENT PRICING</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Simple, Honest Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              No bloated retainers. No hidden fees. Just fair, fixed pricing for quality work.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-2 border-primary-200 dark:border-primary-800/50 rounded-3xl p-10 md:p-14 text-center"
            >
              <div className="text-6xl mb-6">💬</div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Every Project is Unique — Let's Talk
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Tell us what you need and we'll send back a clear, honest quote. No vague estimates, no surprise invoices.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: '🔍', title: 'Scope First', desc: 'We understand your requirements fully before quoting anything.' },
                  { icon: '📋', title: 'Clear Breakdown', desc: 'You get an itemized quote — every cost explained upfront.' },
                  { icon: '🔒', title: 'Fixed Price', desc: 'Once agreed, the price is locked. No surprise invoices.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  Get a Free Quote <FiArrowRight className="inline ml-2" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-center bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What's Included in Every Project?</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['100% Code Ownership', 'Clean Architecture', 'Full Documentation', 'Post-Launch Support'].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiCheck className="text-primary-600 w-4 h-4 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
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
              Ready to Build Something Together?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Tell us about your project and get a free, no-obligation consultation. We'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                <FiMail size={24} />
                Get in Touch
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                <FiMessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle size={32} />
      </motion.a>
    </div>
  );
};

export default PremiumHome;
