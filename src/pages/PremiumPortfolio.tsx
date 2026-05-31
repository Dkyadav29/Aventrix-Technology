import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import GlassCard from '@components/GlassCard';
import Seo from '@components/Seo';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location search, 5-day forecast, and clean UI',
      category: 'web',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      image: '🌤️',
      link: '#',
      type: 'Personal Project',
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Full-stack to-do app with user auth, CRUD operations, and drag-and-drop',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '✅',
      link: '#',
      type: 'Personal Project',
    },
    {
      id: 4,
      title: 'Chat Application',
      description: 'Real-time messaging app with rooms, online status, and emoji support',
      category: 'web',
      tech: ['React', 'Socket.io', 'Node.js'],
      image: '💬',
      link: '#',
      type: 'Personal Project',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'This very website — built from scratch with React, TypeScript, and Tailwind',
      category: 'web',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '🌐',
      link: '#',
      type: 'Personal Project',
    },
    {
      id: 6,
      title: 'REST API with Auth',
      description: 'Backend API with JWT authentication, rate limiting, and full CRUD endpoints',
      category: 'backend',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: '🔐',
      link: '#',
      type: 'Practice Project',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'backend', label: 'Backend' },
  ];

  return (
    <div>
      <Seo
        title="Portfolio — Projects & Case Studies"
        description="Selected web, mobile, and AI projects built with React, Node.js, WordPress, and more."
        path="/portfolio"
      />
      {/* Hero */}
      <HeroSection
        title="Projects I've Built"
        subtitle="My Portfolio"
        description="Practice projects, personal work, and things I've built while learning. Real client work coming soon!"
        showWhatsApp={false}
      />

      {/* Notice Banner */}
      <section className="py-8 bg-yellow-50 dark:bg-yellow-900/20 border-y border-yellow-200 dark:border-yellow-800/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-yellow-800 dark:text-yellow-300 font-medium">
            🚀 I'm actively growing this portfolio. These are personal & practice projects — your project could be the first real client work featured here!
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard variant="primary" hover={true} delay={index * 0.1}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-5xl">{project.image}</div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-4 transition-all text-sm"
                  >
                    <FiGithub size={16} />
                    View on GitHub
                    <FiExternalLink size={14} />
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First Client CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Project Could Be First Here
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              I'm ready to work on real projects. Let's build something and make it the centerpiece of my portfolio.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Let's Start a Project
              <FiArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
