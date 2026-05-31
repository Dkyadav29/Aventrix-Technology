import { motion } from 'framer-motion';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import GlassCard from '@components/GlassCard';
import Seo from '@components/Seo';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman', 'Vercel'] },
    { category: 'Learning', items: ['AWS', 'Docker', 'React Native', 'GraphQL', 'PostgreSQL'] },
  ];

  const values = [
    { title: 'Honest', description: 'We tell you what is and isn\'t possible — no over-promising, ever.' },
    { title: 'Reliable', description: 'Deadlines matter. We communicate proactively if anything changes.' },
    { title: 'Quality-First', description: 'Clean architecture, modern stacks, and code we\'re proud to hand off.' },
    { title: 'Collaborative', description: 'Your feedback shapes the product. We build with you, not just for you.' },
  ];

  const journey = [
    { year: '2022', event: 'Foundations laid — deep work on modern web technologies and product engineering' },
    { year: '2023', event: 'Shipped early projects across React, Node.js, and full-stack architectures' },
    { year: '2024', event: 'Expanded capabilities into mobile, WordPress, API integration, and testing' },
    { year: '2025', event: 'Launched Aventix — a focused studio for web, mobile & AI development' },
  ];

  return (
    <div>
      <Seo
        title="About Aventix — Web, Mobile & AI Development Studio"
        description="Aventix is a focused development studio building websites, Android & iOS apps, WordPress sites, API integrations, software & load testing, and AI-powered solutions."
        path="/about"
      />
      {/* Hero */}
      <HeroSection
        title="Built to Deliver. Driven by Detail."
        subtitle="About Aventix"
        description="We're a focused development studio building websites, mobile apps, and AI-powered products for startups and growing businesses."
      />

      {/* Personal Story */}
      <section className="py-24 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Aventix was started with a simple idea: every business — large or small — deserves a development
                partner that treats their product with the same care as their own. No bloated agencies, no faceless
                vendors. Just focused, dependable engineering.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                We work across web, mobile, WordPress, testing, API integration, and AI — the full stack of modern
                digital products. Every engagement is direct, transparent, and built around your goals, not ours.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We're small by design. That means you get senior-quality attention on your project, fast decisions,
                and an honest partner — not a slide deck and a sales rep.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="text-center bg-primary-50 dark:bg-primary-900/20">
                <div className="text-4xl mb-2">💡</div>
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">Full-Stack</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Expertise</div>
              </Card>
              <Card className="text-center bg-secondary-50 dark:bg-secondary-900/20">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-lg font-bold text-secondary-600 dark:text-secondary-400">Modern</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Tech Stack</div>
              </Card>
              <Card className="text-center bg-green-50 dark:bg-green-900/20">
                <div className="text-4xl mb-2">🤝</div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">Long-Term</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Partnership</div>
              </Card>
              <Card className="text-center bg-yellow-50 dark:bg-yellow-900/20">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">Fast</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Turnaround</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Tech Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The modern tools and frameworks we use to ship reliable products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">How We Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles we bring to every engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">A focused path toward building a development studio</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                  {index !== journey.length - 1 && (
                    <div className="w-1 h-16 bg-primary-200 dark:bg-primary-800 my-2" />
                  )}
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{item.year}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something You're Proud Of
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Transparent, project-based pricing and a partner who treats your product like their own.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
