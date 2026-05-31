import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import Button from '@components/Button';
import Newsletter from '@components/Newsletter';
import { FiArrowRight } from 'react-icons/fi';

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

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
    { icon: '💰', title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive health and wellness coverage' },
    { icon: '🏠', title: 'Remote Work', desc: 'Flexible work from home options' },
    { icon: '📚', title: 'Learning Budget', desc: 'Annual professional development budget' },
    { icon: '🎯', title: 'Clear Career Path', desc: 'Growth opportunities and mentorship' },
    { icon: '🎉', title: 'Team Culture', desc: 'Collaborative and inclusive environment' },
  ];

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Join Our Team"
        subtitle="Careers"
        description="Build your career with a company that values innovation and excellence"
      />

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="section-title">Why Join ServiceCo</h2>
          <p className="section-subtitle">Benefits and opportunities that set us apart</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">Find your next opportunity</p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <button
                    onClick={() =>
                      setExpandedJob(expandedJob === job.id ? null : job.id)
                    }
                    className="w-full text-left"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            {job.department}
                          </span>
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            📍 {job.location}
                          </span>
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                          <span className="text-primary-600 font-semibold">
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedJob === job.id ? 90 : 0 }}
                      >
                        <FiArrowRight className="w-6 h-6 text-primary-600" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedJob === job.id ? 'auto' : 0,
                      opacity: expandedJob === job.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t space-y-4">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Description</h4>
                        <p className="text-gray-600">{job.description}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-2">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex gap-2 text-gray-600">
                              <span className="text-primary-600">✓</span> {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-2">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-2 text-gray-600">
                              <span className="text-primary-600">•</span> {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="primary" size="md" className="w-full">
                        Apply Now
                      </Button>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold mb-6">Don't See Your Role?</h2>
            <p className="text-xl mb-8 opacity-90">
              Send us your resume and tell us how you can contribute to our team.
            </p>
            <Button variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Send Your Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Careers;
