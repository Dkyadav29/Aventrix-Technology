import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import SectionHeading from '@components/SectionHeading';
import ProcessSteps from '@components/ProcessSteps';
import ProjectMock from '@components/ProjectMock';
import GlassCard from '@components/GlassCard';
import CTASection from '@components/CTASection';
import Seo from '@components/Seo';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants/projects';
import {
  FiArrowRight,
  FiArrowDown,
  FiCheck,
  FiInfo,
  FiExternalLink,
  FiMonitor,
  FiLayers,
  FiSmartphone,
  FiPenTool,
  FiSettings,
  FiCloud,
  FiTarget,
  FiCpu,
  FiUsers,
  FiTrendingUp,
  FiEye,
  FiLifeBuoy,
} from 'react-icons/fi';

const capabilities = [
  {
    icon: <FiMonitor />,
    title: 'Web Applications',
    desc: 'Modern, responsive web applications designed for performance, usability, and scalability.',
    tags: ['React.js', 'Next.js', 'Node.js', 'API Development', 'Cloud'],
  },
  {
    icon: <FiLayers />,
    title: 'SaaS Platforms',
    desc: 'Scalable SaaS products with intuitive interfaces, secure authentication, dashboards, subscriptions, and integrations.',
    tags: ['Product Development', 'Dashboards', 'Authentication', 'Payments', 'APIs'],
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Applications',
    desc: 'User-friendly mobile experiences designed to help businesses connect with their customers wherever they are.',
    tags: ['Cross-Platform Apps', 'Mobile UI/UX', 'API Integration', 'Notifications'],
  },
  {
    icon: <FiPenTool />,
    title: 'UI/UX Design',
    desc: 'We turn complex ideas into simple, intuitive, and visually engaging digital experiences.',
    tags: ['Product Design', 'Wireframes', 'Prototypes', 'Design Systems', 'UX Research'],
  },
  {
    icon: <FiSettings />,
    title: 'Custom Software',
    desc: 'Purpose-built software that fits your business processes instead of forcing your business to adapt to generic tools.',
    tags: ['Business Automation', 'Internal Tools', 'CRM', 'Admin Systems', 'Integrations'],
  },
  {
    icon: <FiCloud />,
    title: 'Cloud & Technology',
    desc: 'Reliable infrastructure and modern development practices that help applications remain secure, maintainable, and ready to scale.',
    tags: ['Cloud Deployment', 'APIs', 'Databases', 'CI/CD', 'Monitoring'],
  },
];

const approach = [
  { num: '01', title: 'Discover', desc: 'We learn about your business, users, goals, and challenges.' },
  { num: '02', title: 'Plan', desc: 'We define the product structure, technical requirements, and development roadmap.' },
  { num: '03', title: 'Design', desc: 'We create intuitive interfaces and experiences designed around your users.' },
  { num: '04', title: 'Build', desc: 'Our development process turns the approved design into reliable, maintainable software.' },
  { num: '05', title: 'Launch', desc: 'We test, optimize, deploy, and prepare the product for real users.' },
  { num: '06', title: 'Grow', desc: 'After launch, we help improve, maintain, and scale your product as your business grows.' },
];

const reasons = [
  { icon: <FiTarget />, title: 'Business First', desc: 'We focus on solving the actual business problem, not simply writing code.' },
  { icon: <FiCpu />, title: 'Modern Technology', desc: 'We use modern frameworks, APIs, cloud infrastructure, and development practices.' },
  { icon: <FiUsers />, title: 'User Focused', desc: 'Every product is designed around a simple question: how can we make this easier for the people using it?' },
  { icon: <FiTrendingUp />, title: 'Built to Scale', desc: 'Our architecture is designed with future growth and maintainability in mind.' },
  { icon: <FiEye />, title: 'Transparent Process', desc: 'You stay informed throughout the project with clear communication and milestones.' },
  { icon: <FiLifeBuoy />, title: 'Long-Term Support', desc: 'We can continue improving, maintaining, and scaling your product after launch.' },
];

// Kept in line with the stack listed on the About page
const technology = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'HTML & CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'CI/CD'] },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(selectedCategory));

  const countFor = (category: string) =>
    category === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.categories.includes(category)).length;

  const filters = ['all', ...PROJECT_CATEGORIES.filter((c) => countFor(c) > 0)];

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="Portfolio — Web, SaaS & Mobile Products We Build"
        description="Explore the digital products and software solutions Aventix designs and builds: web applications, SaaS platforms, mobile apps, and custom business software."
        path="/portfolio"
      />
      {/* Hero */}
      <HeroSection
        title="Build. Transform. Scale."
        subtitle="Portfolio"
        description="We design and build modern software solutions that help businesses turn ideas into reliable digital products — from websites and SaaS platforms to mobile applications and custom business software."
        actions={
          <>
            <a href="#work" className="btn-primary btn-lg">
              View Our Work
              <FiArrowDown size={20} />
            </a>
            <Link to="/contact" className="btn-ghost-light btn-lg">
              Start a Project
              <FiArrowRight size={20} />
            </Link>
          </>
        }
      />

      {/* What We Build */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="What We Build"
            description="We create digital products and software solutions tailored to real business needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.06}>
                <span className="icon-tile mb-5">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="section section-muted scroll-mt-20">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected Projects"
            description="Explore some of the digital products and software solutions we design and develop."
          />

          {/* Honest framing for a new studio */}
          <div
            role="note"
            className="mx-auto mb-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-primary-200 dark:border-primary-400/20 bg-primary-50 dark:bg-primary-400/10 px-5 py-4 text-sm md:text-base text-primary-900 dark:text-primary-100"
          >
            <FiInfo className="mt-0.5 flex-shrink-0" size={20} aria-hidden="true" />
            <p>
              These are concept projects that show how we approach real products. Client work will be featured here as it ships — yours could be first.
            </p>
          </div>

          {/* Filters */}
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className={`pill ${active ? 'pill-active' : ''}`}
                >
                  {category === 'all' ? 'All Projects' : category}
                  <span className={`ml-2 text-xs ${active ? 'text-white/80' : 'text-gray-400'}`}>{countFor(category)}</span>
                </button>
              );
            })}
          </div>

          {/* Projects */}
          <motion.div layout className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="surface flex h-full flex-col overflow-hidden"
                >
                  <ProjectMock visual={project.visual} className="h-56 md:h-64" />

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600" aria-hidden="true">
                        ·
                      </span>
                      {project.categories.map((c) => (
                        <span key={c} className="chip-primary">
                          {c}
                        </span>
                      ))}
                      {project.kind === 'concept' && <span className="chip">Concept</span>}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{project.description}</p>

                    <div className="grid sm:grid-cols-[1fr_auto] gap-6 mt-auto">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                          What We Deliver
                        </h4>
                        <ul className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-1.5">
                          {project.delivered.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <FiCheck className="mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-300" size={14} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sm:text-right">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                          Technology
                        </h4>
                        <ul className="flex flex-wrap sm:justify-end gap-2 sm:max-w-[11rem]">
                          {project.technologies.map((tech) => (
                            <li key={tech} className="chip">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:gap-3 transition-all"
                      >
                        View Case Study
                        <FiExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            title="From Idea to Product"
            description="Great software starts with understanding the problem."
          />
          <ProcessSteps steps={approach} />
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Work With Us?"
            title="Software Built Around Your Business"
            description="We don't believe in one-size-fits-all solutions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.06}>
                <span className="icon-tile mb-5">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Technology"
            title="Modern Tools. Reliable Products."
            description="We work with modern technologies to build fast, scalable, and maintainable digital products."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technology.map((group, index) => (
              <GlassCard key={group.group} delay={index * 0.06}>
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{group.group}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary-700 dark:text-primary-300 hover:gap-3 transition-all">
              See everything we offer
              <FiArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have an idea? Let's build something great."
        description="Whether you're starting a new product, improving an existing platform, or looking to automate part of your business, we'd love to hear about it. Tell us what you're building, what problem you're trying to solve, and where you want to go."
        primaryLabel="Start a Project"
      />
    </div>
  );
};

export default Portfolio;
