import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import Newsletter from '@components/Newsletter';
import Button from '@components/Button';

const Home = () => {
  const features = [
    {
      id: 1,
      title: 'Speed to Market',
      description: 'Launch your MVP in weeks, not months. Move fast without breaking things.',
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Startup Mentality',
      description: 'We get startups. Lean, agile, and focused on shipping real value.',
      icon: '🎯',
    },
    {
      id: 3,
      title: 'Scalable Code',
      description: 'Build once, scale infinitely. Architecture that grows with your business.',
      icon: '📈',
    },
    {
      id: 4,
      title: 'Partnership Approach',
      description: 'We\'re invested in your success. Your wins are our wins.',
      icon: '🤝',
    },
  ];

  const services = [
    { id: 1, title: 'Product Development', description: 'Full-stack development from concept to launch' },
    { id: 2, title: 'MVP Building', description: 'Get to market fast with lean, validated products' },
    { id: 3, title: 'Design & UX', description: 'User-first design that drives engagement' },
    { id: 4, title: 'DevOps & Scaling', description: 'Infrastructure that handles hockey-stick growth' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Full-Stack Development Services"
        title="Websites, Mobile Apps & AI Solutions — Built to Deliver"
        description="Web development, Android & iOS apps, WordPress, software & load testing, API integration, and AI integration — practical solutions, delivered with care."
      />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Why Startups Choose Us
          </motion.h2>
          <p className="section-subtitle">
            We\'ve helped 100+ startups go from idea to IPO-ready. Here\'s what makes us different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Core Services
          </motion.h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to accelerate your digital transformation journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="primary" size="lg">
              View All Services
              <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            How We Work
          </motion.h2>
          <p className="section-subtitle">
            Our streamlined process gets your MVP to market in weeks, not months
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your vision, market, and goals' },
              { step: '02', title: 'Strategy', desc: 'We map the MVP scope, tech stack, and timeline' },
              { step: '03', title: 'Build', desc: 'Our team ships fast with weekly demos and feedback loops' },
              { step: '04', title: 'Launch', desc: 'We deploy, monitor, and prepare you for growth' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full">
                  <div className="text-5xl font-bold text-primary-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Trusted by Startup Founders
          </motion.h2>
          <p className="section-subtitle">
            See what founders are saying about building with BuildHub
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah Chen',
                role: 'Founder, TechFlow',
                quote: 'BuildHub helped us launch our MVP in 6 weeks. Best decision ever.',
                avatar: '👩‍💼',
              },
              {
                name: 'Mike Johnson',
                role: 'CEO, DataSync',
                quote: 'The team gets startup life. No unnecessary complexity, just shipping fast.',
                avatar: '👨‍💼',
              },
              {
                name: 'Priya Sharma',
                role: 'Founder, AI Studio',
                quote: 'They scaled our infrastructure from 100 to 1M users. Incredibly skilled.',
                avatar: '👩‍💼',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-primary-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Your Next Unicorn?
            </h2>
            <p className="text-xl text-secondary-100 mb-10 max-w-2xl mx-auto">
              Join 100+ successful startups that turned their vision into reality with us.
            </p>
            <Button variant="primary" size="lg">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
