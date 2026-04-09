import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <Motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className={`glass-surface rounded-2xl ${scrolled ? 'shadow-xl' : ''}`}>
          <div className="flex items-center justify-between px-3 sm:px-5 py-3">
            <Motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('#home')}
              className="text-base sm:text-lg lg:text-xl font-semibold"
            >
              <span className="gradient-text">Obaid Zafar</span>
            </Motion.button>

            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {menuItems.map((item) => (
                <Motion.button
                  key={item.name}
                  whileHover={{ y: -1.5 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-[0.95rem] font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-white/75 dark:hover:bg-slate-800/60 transition-colors"
                >
                  {item.name}
                </Motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Motion.button
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-800/70 text-slate-800 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700/80"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Motion.button>

              <Motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2.5 rounded-xl bg-white/90 dark:bg-slate-800/70 text-slate-800 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700/80"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Motion.button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <Motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden border-t border-slate-200/70 dark:border-slate-700/70"
              >
                <nav className="grid grid-cols-2 gap-2 p-3">
                  {menuItems.map((item) => (
                    <Motion.button
                      key={item.name}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-white/85 dark:hover:bg-slate-800/80 transition-colors"
                    >
                      {item.name}
                    </Motion.button>
                  ))}
                </nav>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Motion.header>
  );
};

export default Header;
