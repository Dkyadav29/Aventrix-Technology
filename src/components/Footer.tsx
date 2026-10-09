import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub, FiArrowUp, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import type { IconType } from 'react-icons';
import { SITE, SOCIALS, whatsappLink } from '@utils/site';
import { SERVICES } from '../constants/services';

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

const services = SERVICES.slice(0, 6);

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_ICONS: Record<string, IconType> = {
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  github: FiGithub,
  instagram: FiInstagram,
};

const socials = SOCIALS.map((s) => ({ ...s, icon: SOCIAL_ICONS[s.id] }));

const linkClass =
  'inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark relative overflow-hidden bg-gray-950 text-gray-100 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-primary-600/10 blur-3xl" aria-hidden="true" />

      <div className="container-custom relative z-10 pt-16 md:pt-20">
        {/* Stats */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 text-center"
            >
              <dt className="order-2 text-sm font-medium text-gray-400">{stat.label}</dt>
              <dd className="order-1 font-display text-2xl md:text-3xl font-extrabold text-gradient mb-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 pb-14">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-3">
            <Link to="/" aria-label="Aventix home" className="inline-block mb-5 rounded-lg">
              <Logo onDark />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A focused development studio building web, mobile, WordPress, and AI-powered products for startups and growing businesses.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-600 hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Company</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors break-all"
                >
                  <FiMail size={16} className="flex-shrink-0 text-primary-400" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <FiPhone size={16} className="flex-shrink-0 text-primary-400" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={16} className="flex-shrink-0 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Aventix. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              Back to Top
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
