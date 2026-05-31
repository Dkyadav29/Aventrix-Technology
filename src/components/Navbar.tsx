import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useScrollLock, useMediaQuery } from '@hooks/index';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const { lock, unlock } = useScrollLock();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch {}
    }
  }, [isDark]);

  const toggleMenu = () => {
    if (!isOpen) {
      lock();
    } else {
      unlock();
    }
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl md:text-4xl">⚡</span>
            <span className="hidden sm:inline">Aventix</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right Section: Dark Mode Toggle & CTA */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* CTA Button Desktop */}
            {!isMobile && (
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 text-sm"
              >
                Get Free Consultation
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <button 
                onClick={toggleMenu} 
                className="text-2xl text-gray-700 dark:text-gray-300 p-2"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div className="mt-4 space-y-4 border-t border-white/20 dark:border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="block w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
