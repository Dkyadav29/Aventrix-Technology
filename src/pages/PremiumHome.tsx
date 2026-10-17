import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import GlassCard from '@components/GlassCard';
import ServiceCard from '@components/ServiceCard';
import StatCard from '@components/StatCard';
import SectionHeading from '@components/SectionHeading';
import CTASection from '@components/CTASection';
import ProcessSteps from '@components/ProcessSteps';
import Seo from '@components/Seo';
import ProjectMock from '@components/ProjectMock';
import TechStack from '@components/TechStack';
import Industries from '@components/Industries';
import Testimonials from '@components/Testimonials';
import Accordion from '@components/Accordion';
import { HOME_FAQS } from '../constants/faq';
import { SERVICES } from '../constants/services';
import { PROJECTS } from '../constants/projects';
import {
  FiZap,
  FiArrowRight,
  FiCheck,
  FiBriefcase,
  FiTarget,
  FiTool,
  FiShield,
  FiUsers,
  FiAward,
  FiHeart,
  FiTag,
  FiSearch,
  FiClipboard,
  FiLock,
  FiMessageCircle,
} from 'react-icons/fi';

const featuredServices = SERVICES.slice(0, 6);

// How the work is actually done. Keep these honest: every line is a commitment clients can hold us to.
const reasons = [
  { icon: <FiTool />, title: 'Version control & code review', desc: 'Every change goes through Git and a pull-request review before it reaches your product.' },
  { icon: <FiShield />, title: 'Testing before release', desc: 'Automated and manual testing on a staging environment, so releases ship without surprises.' },
  { icon: <FiZap />, title: 'Weekly demos', desc: 'Short sprints with a working demo each week. You see progress, not status reports.' },
  { icon: <FiBriefcase />, title: 'Fixed-scope quotes', desc: 'A written scope and a fixed price before work starts. Changes are quoted, never slipped in.' },
  { icon: <FiTarget />, title: 'Documentation & handover', desc: 'Readable code, setup docs and full access to every repo and account we create for you.' },
  { icon: <FiUsers />, title: 'Support after launch', desc: 'A post-launch support window on every project, then a maintenance plan if you want one.' },
];

const featuredProjects = PROJECTS.slice(0, 3);

const differentiators = [
  {
    icon: <FiAward />,
    title: 'Quality-First Engineering',
    desc: 'Clean architecture, modern stacks, full documentation, and code we\'re proud to hand off. Built to last, not to ship-and-forget.',
  },
  {
    icon: <FiHeart />,
    title: 'Your Project, Our Priority',
    desc: 'A focused engagement — direct attention from the team actually building your product, from kickoff through delivery.',
  },
  {
    icon: <FiTag />,
    title: 'Fair, Project-Based Pricing',
    desc: 'Custom quotes scoped to your project — no inflated retainers, no surprise overages. You pay for value delivered.',
  },
];

const steps = [
  { num: '01', title: 'Understand', desc: 'We listen carefully to understand exactly what you need' },
  { num: '02', title: 'Plan', desc: 'Clear timeline, honest estimate, no guesswork' },
  { num: '03', title: 'Build', desc: 'Regular updates so you\'re never left in the dark' },
  { num: '04', title: 'Deliver', desc: 'Clean code, full handover, ongoing support' },
];

const pricingPoints = [
  { icon: <FiSearch />, title: 'Scope First', desc: 'We understand your requirements fully before quoting anything.' },
  { icon: <FiClipboard />, title: 'Clear Breakdown', desc: 'You get an itemized quote — every cost explained upfront.' },
  { icon: <FiLock />, title: 'Fixed Price', desc: 'Once agreed, the price is locked. No surprise invoices.' },
];

const included = ['100% Code Ownership', 'Clean Architecture', 'Full Documentation', 'Post-Launch Support'];

const PremiumHome = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="Web, Mobile & AI Development Services"
        description="Aventix builds websites, Android & iOS apps, WordPress sites, API integrations, software & load testing, and AI-powered solutions for startups and businesses."
        path="/"
      />
      {/* Hero Section */}
      <HeroSection
        variant="home"
        subtitle="Accepting new projects"
        title="Web, Mobile & AI Software"
        titleAccent="Engineered to Scale."
        tagline="For startups, SMEs and product teams"
        description="Aventix designs, builds and maintains production software for startups and growing businesses: web platforms, mobile apps, API integrations and AI features, delivered with clean code and clear communication."
        primaryCta={{ label: 'Start a Project', to: '/contact' }}
        secondaryCta={{ label: 'View Our Work', to: '/portfolio' }}
        trustPoints={['Production-ready', 'API-first', 'Built to scale']}
      />

      {/* Quick Stats */}
      <section className="relative z-10 -mt-8 md:-mt-10" aria-label="At a glance">
        <div className="container-custom">
          <div className="surface grid grid-cols-2 md:grid-cols-4 gap-y-8 py-8 md:py-10 md:divide-x divide-gray-200 dark:divide-white/10 dark:bg-gray-900 max-w-5xl mx-auto">
            <StatCard number="8" label="Service lines" />
            <StatCard number="24h" label="First reply" delay={0.1} />
            <StatCard number="100%" label="Code ownership" delay={0.2} />
            <StatCard number="Fixed" label="Price quotes" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <TechStack />

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Services"
            title="What We Build"
            description="End-to-end product engineering across web, mobile, and AI"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={<service.icon />}
                title={service.title}
                description={service.description}
                href={`/services/${service.id}`}
                delay={index * 0.08}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Services
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How we work"
            title="Engineering You Can Rely On"
            description="The practices behind every project we ship, from the first commit to the handover"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.08}>
                <span className="icon-tile mb-5">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
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

      {/* Portfolio Preview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Work"
            description="A look at the kind of products we design and engineer"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/portfolio#work"
                  className="group surface surface-hover flex h-full flex-col overflow-hidden"
                >
                  <ProjectMock visual={project.visual} className="h-44" />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.slice(0, 1).map((c) => (
                        <span key={c} className="chip-primary">
                          {c}
                        </span>
                      ))}
                      {project.kind === 'concept' && <span className="chip">Concept</span>}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="btn-outline">
              View All Projects
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials (renders only when the API returns approved entries) */}
      <Testimonials />

      {/* Industries */}
      <Industries />

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Process"
            title="How We Work"
            description="Simple, transparent, and collaborative"
          />

          <ProcessSteps steps={steps} />
        </div>
      </section>

      {/* What makes us different */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            title="Built Different. Built for You."
            description="A boutique studio offering what large agencies can't — focus, ownership, and a direct line to the people building your product"
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1}>
                <span className="icon-tile mb-5">{item.icon}</span>
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

      {/* Pricing Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Transparent Pricing"
            title="Simple, Honest Pricing"
            description="No bloated retainers. No hidden fees. Just fair, fixed pricing for quality work."
          />

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-primary-100 dark:border-primary-400/20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-400/10 dark:via-white/[0.02] dark:to-secondary-400/10 p-8 md:p-14 text-center shadow-card"
            >
              <span className="icon-tile !h-16 !w-16 !text-3xl !rounded-2xl mb-6">
                <FiMessageCircle />
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Every Project is Unique — Let's Talk
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Tell us what you need and we'll send back a clear, honest quote. No vague estimates, no surprise invoices.
              </p>

              <div className="grid sm:grid-cols-3 gap-5 mb-10 text-left">
                {pricingPoints.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/60 p-6"
                  >
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-400/10 text-xl text-primary-700 dark:text-primary-300">
                      {item.icon}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary btn-lg">
                Get a Free Quote
                <FiArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="surface mt-8 p-8 text-center"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What's Included in Every Project?</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {included.map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-400/15 text-secondary-700 dark:text-secondary-300">
                      <FiCheck size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-muted" aria-labelledby="home-faq-heading">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQ"
                title="Questions, Answered"
                description="The things most clients ask before starting a project with us"
                align="left"
                className="!mb-6"
              />
              <Link to="/faq" className="btn-outline">
                Read All FAQs
                <FiArrowRight size={20} />
              </Link>
            </div>
            <Accordion items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Build Something Together?"
        description="Tell us about your project and get a free, no-obligation consultation. We'll respond within 24 hours."
        primaryLabel="Get in Touch"
      />
    </div>
  );
};

export default PremiumHome;
