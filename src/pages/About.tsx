import { motion } from 'framer-motion';
import HeroSection from '@components/HeroSection';
import GlassCard from '@components/GlassCard';
import SectionHeading from '@components/SectionHeading';
import CTASection from '@components/CTASection';
import Seo from '@components/Seo';
import {
  FiLayers,
  FiCpu,
  FiUsers,
  FiZap,
  FiMonitor,
  FiServer,
  FiTool,
  FiBookOpen,
  FiShield,
  FiClock,
  FiAward,
  FiMessageCircle,
} from 'react-icons/fi';

const skills = [
  { category: 'Frontend', icon: <FiMonitor />, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
  { category: 'Backend', icon: <FiServer />, items: ['Node.js', 'Express', 'Python', 'REST APIs', 'MongoDB'] },
  { category: 'Tools', icon: <FiTool />, items: ['Git', 'VS Code', 'Figma', 'Postman', 'Vercel'] },
  { category: 'Learning', icon: <FiBookOpen />, items: ['AWS', 'Docker', 'React Native', 'GraphQL', 'PostgreSQL'] },
];

const values = [
  { icon: <FiShield />, title: 'Honest', description: 'We tell you what is and isn\'t possible — no over-promising, ever.' },
  { icon: <FiClock />, title: 'Reliable', description: 'Deadlines matter. We communicate proactively if anything changes.' },
  { icon: <FiAward />, title: 'Quality-First', description: 'Clean architecture, modern stacks, and code we\'re proud to hand off.' },
  { icon: <FiMessageCircle />, title: 'Collaborative', description: 'Your feedback shapes the product. We build with you, not just for you.' },
];

const journey = [
  { year: '2022', event: 'Foundations laid — deep work on modern web technologies and product engineering' },
  { year: '2023', event: 'Shipped early projects across React, Node.js, and full-stack architectures' },
  { year: '2024', event: 'Expanded capabilities into mobile, WordPress, API integration, and testing' },
  { year: '2025', event: 'Launched Aventix — a focused studio for web, mobile & AI development' },
];

const highlights = [
  {
    icon: <FiLayers />,
    title: 'Full-Stack',
    label: 'Expertise',
    tile: 'bg-primary-50 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300',
  },
  {
    icon: <FiCpu />,
    title: 'Modern',
    label: 'Tech Stack',
    tile: 'bg-secondary-50 text-secondary-700 dark:bg-secondary-400/10 dark:text-secondary-300',
  },
  {
    icon: <FiUsers />,
    title: 'Long-Term',
    label: 'Partnership',
    tile: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
  },
  {
    icon: <FiZap />,
    title: 'Fast',
    label: 'Turnaround',
    tile: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
  },
];

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="About Aventix — Web, Mobile & AI Development Studio"
        description="Aventix is a focused development studio building websites, Android & iOS apps, WordPress sites, API integrations, software & load testing, and AI-powered solutions."
        path="/about"
      />
      {/* Hero */}
      <HeroSection
        title="Built to Deliver. Driven by Detail."
        subtitle="About"
        description="We're a focused development studio building websites, mobile apps, and AI-powered products for startups and growing businesses."
      />

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">About Aventix</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <div className="space-y-4 prose-body text-base md:text-lg">
                <p>
                  Aventix was started with a simple idea: every business — large or small — deserves a development
                  partner that treats their product with the same care as their own. No bloated agencies, no faceless
                  vendors. Just focused, dependable engineering.
                </p>
                <p>
                  We work across web, mobile, WordPress, testing, API integration, and AI — the full stack of modern
                  digital products. Every engagement is direct, transparent, and built around your goals, not ours.
                </p>
                <p>
                  We're small by design. That means you get senior-quality attention on your project, fast decisions,
                  and an honest partner — not a slide deck and a sales rep.
                </p>
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {highlights.map((item, index) => (
                <li
                  key={item.title}
                  className={`surface surface-hover p-6 text-center ${index % 2 === 1 ? 'sm:mt-8' : 'sm:mb-8'}`}
                >
                  <span className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.tile}`}>
                    {item.icon}
                  </span>
                  <div className="font-display text-lg font-bold text-gray-900 dark:text-white">{item.title}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{item.label}</div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Technology"
            title="Our Tech Stack"
            description="The modern tools and frameworks we use to ship reliable products"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((group, index) => (
              <GlassCard key={group.category} delay={index * 0.08}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="icon-tile !h-10 !w-10 !text-lg">{group.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Values"
            title="How We Work"
            description="The principles we bring to every engagement"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.08} className="text-center">
                <span className="icon-tile mb-5">{value.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Timeline"
            title="Our Journey"
            description="A focused path toward building a development studio"
          />

          <ol className="relative max-w-2xl mx-auto">
            {journey.map((item, index) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-5 md:gap-6 pb-8 last:pb-0"
              >
                {index !== journey.length - 1 && (
                  <span
                    className="absolute left-[1.0625rem] top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400/30"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 shadow-lg shadow-primary-500/30"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <div className="surface flex-1 p-5 md:p-6">
                  <div className="font-display text-xl font-extrabold text-gradient">{item.year}</div>
                  <p className="mt-1 font-medium text-gray-800 dark:text-gray-200 leading-relaxed">{item.event}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Build Something You're Proud Of"
        description="Transparent, project-based pricing and a partner who treats your product like their own."
        primaryLabel="Let's Talk"
      />
    </div>
  );
};

export default About;
