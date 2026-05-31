import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Card from '@components/Card';
import Button from '@components/Button';
import Newsletter from '@components/Newsletter';
import { FiArrowLeft } from 'react-icons/fi';

const ServiceDetails = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch from API
  const serviceDetails: Record<string, any> = {
    'web-development': {
      title: 'Web Development',
      description: 'Build powerful, scalable web applications using modern technologies.',
      icon: '🌐',
      overview: 'Our web development team specializes in creating high-performance applications that drive business growth.',
      benefits: [
        'Responsive and mobile-friendly designs',
        'Fast loading times and excellent performance',
        'SEO optimized for search engine visibility',
        'Secure and scalable architecture',
        'Ongoing maintenance and support',
      ],
      technologies: ['React', 'Vue.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      portfolio: [
        { name: 'E-commerce Platform', year: 2023 },
        { name: 'SaaS Dashboard', year: 2023 },
        { name: 'Content Management System', year: 2022 },
      ],
      pricing: {
        starter: 5000,
        professional: 15000,
        enterprise: 'Custom',
      },
    },
    'mobile-development': {
      title: 'Mobile Development',
      description: 'Create native and cross-platform mobile applications.',
      icon: '📱',
      overview: 'We develop feature-rich mobile apps that engage users and drive meaningful interactions.',
      benefits: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native',
        'App Store and Google Play optimization',
        'Push notifications and real-time features',
        'Analytics and user tracking',
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS'],
      portfolio: [
        { name: 'Fitness Tracking App', year: 2023 },
        { name: 'Social Commerce App', year: 2023 },
        { name: 'Banking App', year: 2022 },
      ],
      pricing: {
        starter: 10000,
        professional: 25000,
        enterprise: 'Custom',
      },
    },
  };

  const service = serviceDetails[id as string] || serviceDetails['web-development'];

  return (
    <div>
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link to="/services" className="flex items-center gap-2 text-primary-600 hover:gap-4 transition-all">
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-primary-100">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 mb-6">{service.overview}</p>
              <Button variant="primary" size="lg">
                Get a Quote
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card>
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary-600 text-xl font-bold">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Technologies We Use</h2>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {service.technologies.map((tech: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="px-6 py-3 bg-white rounded-full border-2 border-primary-600 text-primary-600 font-semibold shadow-md">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Recent Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {service.portfolio.map((project: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600">Year: {project.year}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Pricing Plans</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Object.entries(service.pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={index === 1 ? 'border-2 border-primary-600' : ''}>
                  <h3 className="text-2xl font-bold capitalize mb-4 text-center">{plan}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-6 text-center">
                    {typeof price === 'number' ? `$${price}` : String(price)}
                  </div>
                  <Button variant={index === 1 ? 'primary' : 'outline'} className="w-full" size="md">
                    Choose Plan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your project requirements and get a personalized quote.
            </p>
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default ServiceDetails;
