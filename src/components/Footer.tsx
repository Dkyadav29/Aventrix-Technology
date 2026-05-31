import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const stats = [
    { label: 'Code Ownership', value: '100%' },
    { label: 'Initial Consultation', value: 'Free' },
    { label: 'Project Pricing', value: 'Fixed' },
    { label: 'Tech Stack', value: 'Modern' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  const services = [
    { label: 'Web Development', href: '/services' },
    { label: 'Android & iOS Apps', href: '/services' },
    { label: 'WordPress Development', href: '/services' },
    { label: 'API Integration', href: '/services' },
    { label: 'Software & Load Testing', href: '/services' },
    { label: 'AI Integration', href: '/services' },
  ];

  const legal = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const socials = [
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-950 text-gray-100 border-t border-white/10">
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
              <span className="text-3xl">⚡</span>
              <span>Aventix</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A focused development studio building web, mobile, WordPress, and AI-powered products for startups and growing businesses.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    {link.label}
                    <FiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    {service.label}
                    <FiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    {item.label}
                    <FiArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <p className="font-semibold text-white mb-1">Email</p>
                <a href="mailto:dkyadav2905@gmail.com" className="hover:text-primary-400 transition-colors">
                  dkyadav2905@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <p className="font-semibold text-white mb-1">Phone</p>
                <a href="tel:+916203075626" className="hover:text-primary-400 transition-colors">
                  +91 62030 75626
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Aventix. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <a href="#top" className="hover:text-primary-400 transition-colors">
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
