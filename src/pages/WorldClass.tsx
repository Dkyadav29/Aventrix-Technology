import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiSmartphone,
  FiCode,
  FiTrendingUp,
  FiZap,
  FiLayers,
  FiDatabase,
  FiShield,
  FiUsers,
  FiTarget,
  FiMessageSquare,
  FiCheck,
  FiGitBranch,
  FiActivity,
} from 'react-icons/fi';
import { Section, SectionTitle, Grid } from '@components/Premium/Section';
import { PremiumCard, Feature, Stat } from '@components/Premium/Cards';
import { PremiumButton, Badge } from '@components/Premium/Button';

const WorldClass = () => {
  // Animated background elements
  const BgBlob = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
    <motion.div
      animate={{
        y: [0, 30, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
      }}
      className={`absolute ${x} ${y} h-72 w-72 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl`}
    />
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section variant="gradient" padding="xl" className="relative overflow-hidden">
        <BgBlob delay={0} x="top-20" y="right-0" />
        <BgBlob delay={2} x="bottom-0" y="left-1/3" />

        <div className="relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <Badge variant="primary">✨ Now accepting Q2 projects</Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              Build. Scale. Automate. Grow.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              We create high-performance apps, automation systems, and digital growth solutions for ambitious teams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <PremiumButton variant="primary" size="lg">
                Start Your Project
                <FiArrowRight size={20} />
              </PremiumButton>
              <PremiumButton variant="outline" size="lg">
                View Our Work
              </PremiumButton>
            </motion.div>

            {/* Trust statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-700/50 flex items-center gap-4 text-sm text-gray-300"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 ring-2 ring-gray-900"
                  />
                ))}
              </div>
              <span>
                Trusted by <strong className="text-white">50+ companies</strong> to deliver high-impact solutions
              </span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section variant="default" padding="md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8">
            Trusted by innovative startups and growing businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Startup Co', 'TechFlow', 'GrowthHub', 'Digital Labs', 'InnovateLabs'].map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-400 dark:text-gray-500 font-semibold text-sm"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section variant="gradient" padding="lg" className="relative overflow-hidden">
        <BgBlob delay={0} x="top-1/2" y="right-0" />

        <div className="relative z-10">
          <SectionTitle
            subtitle="What We Do"
            title="Complete Digital Solutions"
            description="From mobile apps to enterprise automation, we deliver end-to-end technology solutions"
          />

          <div className="space-y-16">
            {/* Services by Category */}
            {[
              {
                category: 'Mobile & Web',
                services: [
                  {
                    icon: <FiSmartphone />,
                    title: 'iOS & Android Apps',
                    description: 'Native and cross-platform mobile applications with seamless UX',
                  },
                  {
                    icon: <FiCode />,
                    title: 'Web Development',
                    description: 'Modern web apps built with React, Next.js, and cloud infrastructure',
                  },
                ],
              },
              {
                category: 'Business Solutions',
                services: [
                  {
                    icon: <FiUsers />,
                    title: 'HR Management Systems',
                    description: 'Complete HRIS platforms with payroll, leave, and attendance',
                  },
                  {
                    icon: <FiDatabase />,
                    title: 'Custom Software',
                    description: 'Tailored enterprise solutions built for your specific needs',
                  },
                ],
              },
              {
                category: 'Growth & Performance',
                services: [
                  {
                    icon: <FiTrendingUp />,
                    title: 'SEO & Marketing',
                    description: 'Strategic SEO and digital marketing to drive growth',
                  },
                  {
                    icon: <FiLayers />,
                    title: 'AI & Automation',
                    description: 'Intelligent automation and AI-powered solutions',
                  },
                ],
              },
              {
                category: 'Advanced Tech',
                services: [
                  {
                    icon: <FiZap />,
                    title: 'API Integration',
                    description: 'Seamless integration with third-party APIs and services',
                  },
                  {
                    icon: <FiShield />,
                    title: 'Testing & QA',
                    description: 'Comprehensive testing to ensure quality and reliability',
                  },
                ],
              },
            ].map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIdx * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8">{group.category}</h3>
                <Grid cols={2} gap="md">
                  {group.services.map((service, idx) => (
                    <PremiumCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={idx * 0.05}
                      variant="outline"
                      className="border-gray-600 hover:border-primary-500/50"
                    />
                  ))}
                </Grid>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section variant="default" padding="lg">
        <SectionTitle
          subtitle="Why We Stand Out"
          title="Trusted by Industry Leaders"
          description="We combine technical excellence with business understanding to deliver real results"
        />

        <Grid cols={3} gap="lg">
          {[
            {
              icon: '50+',
              title: 'Projects Delivered',
              description: 'Successful projects across diverse industries and scales',
            },
            {
              icon: '⚡',
              title: 'Fast Delivery',
              description: 'Rapid development without compromising quality or security',
            },
            {
              icon: '📈',
              title: 'Scalable Architecture',
              description: 'Built to grow with your business, from MVP to enterprise',
            },
            {
              icon: '👥',
              title: 'Dedicated Support',
              description: '24/7 support and maintenance to keep your systems running',
            },
            {
              icon: '💰',
              title: 'Cost-Effective',
              description: 'Flexible pricing models that work for startups and enterprises',
            },
            {
              icon: '🛡️',
              title: 'Secure & Compliant',
              description: 'Enterprise-grade security and industry compliance standards',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <PremiumCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="minimal"
              />
            </motion.div>
          ))}
        </Grid>
      </Section>

      {/* Portfolio/Case Studies */}
      <Section variant="gradient" padding="lg" className="relative overflow-hidden">
        <BgBlob delay={1} x="top-0" y="left-0" />

        <div className="relative z-10">
          <SectionTitle
            subtitle="Our Work"
            title="Projects that Delivered Results"
            centered={true}
          />

          <Grid cols={3} gap="lg">
            {[
              {
                title: 'E-Commerce Platform',
                result: 'Increased sales by 150%',
                description: 'Scalable marketplace with real-time inventory and payment processing',
                tech: ['React', 'Node.js', 'MongoDB'],
              },
              {
                title: 'HR Management System',
                result: '40% efficiency improvement',
                description: 'Complete HRIS with payroll, attendance, and performance tracking',
                tech: ['React', 'Django', 'PostgreSQL'],
              },
              {
                title: 'Mobile Banking App',
                result: '100k+ daily users',
                description: 'Secure mobile banking application with advanced security features',
                tech: ['React Native', 'Firebase', 'Stripe'],
              },
              {
                title: 'Automation Platform',
                result: 'Saved 500+ hours/month',
                description: 'Workflow automation tool that reduced manual processes',
                tech: ['Next.js', 'Python', 'AWS'],
              },
              {
                title: 'Analytics Dashboard',
                result: 'Real-time insights',
                description: 'Enterprise analytics platform with ML-powered predictions',
                tech: ['React', 'D3.js', 'TensorFlow'],
              },
              {
                title: 'API Infrastructure',
                result: '99.99% uptime',
                description: 'Scalable API infrastructure serving millions of requests',
                tech: ['Node.js', 'Kubernetes', 'AWS'],
              },
            ].map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="group relative overflow-hidden rounded-xl border border-gray-600 bg-white/5 backdrop-blur-sm p-6 hover:border-primary-500/50 transition-all duration-300">
                  <div className="mb-4">
                    <Badge variant="primary">{project.result}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </Grid>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="default" padding="lg">
        <SectionTitle
          subtitle="What Clients Say"
          title="Proven Track Record"
          description="Don't just take our word for it"
        />

        <Grid cols={3} gap="lg">
          {[
            {
              name: 'Aditya Sharma',
              role: 'Founder, TechFlow',
              quote:
                'They delivered our MVP in 6 weeks. The quality of work and communication was exceptional. Highly recommended.',
              rating: 5,
            },
            {
              name: 'Priya Desai',
              role: 'CTO, GrowthHub',
              quote:
                'Best technical partner we could ask for. They understand not just code but also our business goals.',
              rating: 5,
            },
            {
              name: 'Rahul Kapoor',
              role: 'CEO, Digital Labs',
              quote:
                'Scaled our platform from 1k to 100k users. Their architecture decisions proved invaluable.',
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <PremiumCard
                title={testimonial.name}
                description={testimonial.quote}
                badge={testimonial.role}
                variant="outline"
              />
            </motion.div>
          ))}
        </Grid>
      </Section>

      {/* Process Section */}
      <Section variant="gradient" padding="lg" className="relative overflow-hidden">
        <BgBlob delay={2} x="bottom-0" y="right-1/4" />

        <div className="relative z-10">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="A streamlined approach to deliver exceptional results"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description:
                    'We dive deep into your vision, goals, and requirements to create a detailed roadmap',
                  icon: <FiTarget />,
                },
                {
                  step: '02',
                  title: 'Design & Architecture',
                  description:
                    'We design scalable solutions with modern architecture and best practices',
                  icon: <FiGitBranch />,
                },
                {
                  step: '03',
                  title: 'Agile Development',
                  description:
                    'Rapid development with weekly sprints, demos, and continuous feedback',
                  icon: <FiActivity />,
                },
                {
                  step: '04',
                  title: 'Launch & Support',
                  description:
                    'Seamless deployment and ongoing support to ensure long-term success',
                  icon: <FiCheck />,
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 md:gap-8"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    {idx < 3 && <div className="h-12 w-1 bg-gradient-to-b from-primary-600 to-transparent mt-4" />}
                  </div>
                  <div className="pt-2 flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section variant="default" padding="lg">
        <Grid cols={4} gap="lg">
          <Stat value="50+" label="Projects Delivered" delay={0} />
          <Stat value="100%" label="Client Satisfaction" delay={0.1} />
          <Stat value="4.9/5" label="Average Rating" delay={0.2} />
          <Stat value="24/7" label="Support Available" delay={0.3} />
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" padding="xl" className="relative overflow-hidden">
        <BgBlob delay={0} x="top-0" y="right-0" />
        <BgBlob delay={2} x="bottom-0" y="left-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Build Your Next Big Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10"
          >
            Let s discuss how we can help you achieve your goals with technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <PremiumButton variant="primary" size="lg">
              Get Free Consultation
              <FiArrowRight size={20} />
            </PremiumButton>
            <PremiumButton variant="secondary" size="lg">
              <FiMessageSquare size={20} />
              Chat on WhatsApp
            </PremiumButton>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default WorldClass;
