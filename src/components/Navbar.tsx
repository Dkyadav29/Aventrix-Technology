import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch {}
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock page scroll and listen for Escape only while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 text-white backdrop-blur-xl transition-all duration-300 border-b ${
        isScrolled || isOpen
          ? 'bg-gray-950/90 border-white/10 shadow-lg shadow-black/20'
          : 'bg-gray-950/60 border-white/5'
      }`}
    >
      <nav aria-label="Primary" className="container-custom">
        <div className="flex h-16 md:h-[4.5rem] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Aventix home"
            className="rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            <Logo onDark />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `relative block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive ? 'text-primary-300' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-primary-400/15"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Section: Dark Mode Toggle & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-100 hover:border-primary-400 hover:text-primary-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <Link to="/contact" className="btn-primary hidden sm:inline-flex !px-5 !py-2.5 text-sm">
              Get Free Consultation
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-100 hover:border-primary-400 hover:text-primary-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-1 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-primary-400/15 text-primary-300'
                            : 'text-gray-200 hover:bg-white/5 hover:text-white active:bg-white/10'
                        }`
                      }
                    >
                      {link.label}
                      <FiArrowRight size={16} className="opacity-50" />
                    </NavLink>
                  </li>
                ))}
                <li className="pt-3 sm:hidden">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Get Free Consultation
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary-500 to-secondary-500"
      />
    </header>
  );
};

export default Navbar;
