import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import Newsletter from '@components/Newsletter';
import Button from '@components/Button';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'mvp-development',
      title: 'MVP Development',
      description: 'Ship your MVP in weeks, not months. We build lean, validated products fast.',
      icon: '🚀',
      features: ['Fast Turnaround', 'Lean Stack', 'Validated Tech', 'Future-Proof'],
    },
    {
      id: 'full-stack',
      title: 'Full-Stack Development',
      description: 'From frontend to backend, we build complete, production-ready applications.',
      icon: '⚙️',
      features: ['React/Vue Frontend', 'Node.js/Python Backend', 'Database Design', 'API Development'],
    },
    {
      id: 'product-design',
      title: 'Product Design',
      description: 'User-first design that drives engagement and conversion.',
      icon: '🎨',
      features: ['UX Research', 'Wireframes', 'High-Fidelity Design', 'Design Systems'],
    },
    {
      id: 'scaling-infrastructure',
      title: 'Scaling & DevOps',
      description: 'Infrastructure that grows with your hockey-stick growth.',
      icon: '📈',
      features: ['AWS/GCP Setup', 'CI/CD Pipelines', 'Database Optimization', 'Performance Tuning'],
    },
    {
      id: 'technical-advisory',
      title: 'Technical Advisory',
      description: 'Expert guidance when you need a technical co-founder perspective.',
      icon: '💡',
      features: ['Architecture Review', 'Tech Stack Selection', 'Fundraising Support', 'Team Building'],
    },
    {
      id: 'dedicated-team',
      title: 'Dedicated Teams',
      description: 'An extended engineering team working as your team.',
      icon: '👥',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Optimization', 'Security Updates'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Services Built for Startups"
        subtitle="Our Expertise"
        description="Everything you need to go from idea to scale. Fast, lean, and startup-focused."
      />

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            How Startups Succeed With Us
          </motion.h2>
          <p className="section-subtitle">
            From idea to Series A. The exact services your startup needs at each stage.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-primary-600">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/services/${service.id}`}>
                    <Button variant="outline" size="md" className="w-full">
                      Learn More
                      <FiArrowRight />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Proven Process</h2>
          <p className="section-subtitle">We follow a structured, transparent approach to ensure your success</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Discovery', desc: 'Understanding your goals and requirements in detail' },
              { step: 2, title: 'Planning', desc: 'Creating a detailed roadmap and timeline' },
              { step: 3, title: 'Execution', desc: 'Building and implementing your solution' },
              { step: 4, title: 'Delivery', desc: 'Launching and ensuring success' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss which service is right for your business and create a plan for success.
            </p>
            <Button variant="primary" size="lg">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Services;
