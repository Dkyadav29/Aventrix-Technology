import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@components/HeroSection';
import GlassCard from '@components/GlassCard';
import SectionHeading from '@components/SectionHeading';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';
import {
  FiChevronDown,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiCheck,
  FiSend,
  FiDollarSign,
  FiHeart,
  FiHome,
  FiBookOpen,
  FiTrendingUp,
  FiSmile,
} from 'react-icons/fi';
import { mailtoLink } from '@utils/site';

const jobs = [
  {
    id: 'sr-dev',
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120K - $160K',
    description: 'We\'re looking for an experienced full-stack developer to lead our technical initiatives.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Strong database design skills',
      'Experience with cloud platforms (AWS/GCP)',
      'Team leadership experience',
    ],
    responsibilities: [
      'Develop and maintain scalable web applications',
      'Lead code reviews and mentor junior developers',
      'Collaborate with product and design teams',
      'Optimize application performance',
      'Contribute to architecture decisions',
    ],
  },
  {
    id: 'ui-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90K - $130K',
    description: 'Join our creative team to design beautiful user experiences.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma and design tools',
      'Strong portfolio of past work',
      'Understanding of user research',
      'Knowledge of accessibility standards',
    ],
    responsibilities: [
      'Design user interfaces and experiences',
      'Conduct user research and usability testing',
      'Create design systems and guidelines',
      'Collaborate with developers',
      'Iterate based on user feedback',
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$110K - $150K',
    description: 'Build innovative mobile applications for iOS and Android.',
    requirements: [
      '4+ years of mobile development',
      'Experience with React Native or Flutter',
      'Knowledge of iOS and Android platforms',
      'Strong problem-solving skills',
      'Experience with agile methodologies',
    ],
    responsibilities: [
      'Develop mobile applications',
      'Optimize app performance and battery usage',
      'Implement app security best practices',
      'Collaborate with backend team',
      'Release and manage app updates',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100K - $140K',
    description: 'Manage and optimize our cloud infrastructure and deployment processes.',
    requirements: [
      '3+ years of DevOps experience',
      'AWS or GCP expertise',
      'Experience with Docker and Kubernetes',
      'CI/CD pipeline experience',
      'Infrastructure as Code knowledge',
    ],
    responsibilities: [
      'Manage cloud infrastructure',
      'Implement CI/CD pipelines',
      'Monitor system performance',
      'Ensure security and compliance',
      'Automate deployment processes',
    ],
  },
];

const benefits = [
  { icon: <FiDollarSign />, title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
  { icon: <FiHeart />, title: 'Health Benefits', desc: 'Comprehensive health and wellness coverage' },
  { icon: <FiHome />, title: 'Remote Work', desc: 'Flexible work from home options' },
  { icon: <FiBookOpen />, title: 'Learning Budget', desc: 'Annual professional development budget' },
  { icon: <FiTrendingUp />, title: 'Clear Career Path', desc: 'Growth opportunities and mentorship' },
  { icon: <FiSmile />, title: 'Team Culture', desc: 'Collaborative and inclusive environment' },
];

const applyLink = (role: string) =>
  mailtoLink(
    `Application: ${role}`,
    `Hi Aventix team,\n\nI'd like to apply for the ${role} role.\n\n(Please attach your resume and a short note about yourself.)\n`
  );

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="Careers — Join Aventix"
        description="Open roles and benefits at Aventix, a development studio for web, mobile, and AI products."
        path="/careers"
      />
      {/* Hero */}
      <HeroSection
        title="Join Our Team"
        subtitle="Careers"
        description="Build your career with a company that values innovation and excellence"
      />

      {/* Benefits Section */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Benefits"
            title="Why Join Aventix"
            description="Benefits and opportunities that set us apart"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <GlassCard key={benefit.title} delay={index * 0.06} className="text-center">
                <span className="icon-tile mb-5">{benefit.icon}</span>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Open Roles"
            title="Open Positions"
            description="Find your next opportunity"
          />

          <div className="space-y-4 max-w-3xl mx-auto">
            {jobs.map((job, index) => {
              const open = expandedJob === job.id;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div
                    className={`surface overflow-hidden transition-colors ${
                      open ? 'border-primary-300 dark:border-primary-400/40' : ''
                    }`}
                  >
                    <button
                      type="button"
                      id={`job-button-${job.id}`}
                      aria-expanded={open}
                      aria-controls={`job-panel-${job.id}`}
                      onClick={() => setExpandedJob(open ? null : job.id)}
                      className="w-full text-left p-6 md:p-8"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="chip">
                              <FiBriefcase size={12} aria-hidden="true" />
                              {job.department}
                            </span>
                            <span className="chip">
                              <FiMapPin size={12} aria-hidden="true" />
                              {job.location}
                            </span>
                            <span className="chip">
                              <FiClock size={12} aria-hidden="true" />
                              {job.type}
                            </span>
                            <span className="chip-primary font-semibold">{job.salary}</span>
                          </div>
                        </div>
                        <span
                          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            open
                              ? 'rotate-180 bg-gradient-to-br from-primary-500 to-secondary-600 text-white'
                              : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                          }`}
                        >
                          <FiChevronDown size={18} />
                        </span>
                      </div>
                    </button>

                    {/* Expanded Details */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`job-panel-${job.id}`}
                          role="region"
                          aria-labelledby={`job-button-${job.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-6 border-t border-gray-200 dark:border-white/10 pt-6">
                            <div>
                              <h4 className="font-bold text-base mb-2 text-gray-900 dark:text-white">Description</h4>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-bold text-base mb-3 text-gray-900 dark:text-white">Requirements</h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req) => (
                                    <li key={req} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                                      <FiCheck className="mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-300" size={16} aria-hidden="true" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-base mb-3 text-gray-900 dark:text-white">Responsibilities</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp) => (
                                    <li key={resp} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-500" aria-hidden="true" />
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <a href={applyLink(job.title)} className="btn-primary w-full">
                              <FiSend size={18} />
                              Apply Now
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-secondary-500 to-secondary-700 px-6 py-14 md:px-16 md:py-20 text-center shadow-2xl shadow-primary-900/20"
          >
            <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">Don't See Your Role?</h2>
              <p className="mt-5 text-lg md:text-xl text-white/90">
                Send us your resume and tell us how you can contribute to our team.
              </p>
              <a href={applyLink('Open application')} className="btn-white btn-lg mt-9">
                <FiSend size={20} />
                Send Your Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Careers;
