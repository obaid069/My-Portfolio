import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-obaid-zafar-0086b9301/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/obaid069',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:obaidzafar234@gmail.com',
      label: 'Email'
    },
  ];

  return (
    <Motion.footer
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      className="py-7 sm:py-9 bg-transparent text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
          {socialLinks.map((social) => (
            <Motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="glass-surface text-slate-600 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-200 p-2 rounded-lg"
            >
              <social.icon size={20} className="sm:w-6 sm:h-6" />
            </Motion.a>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Obaid Zafar. All rights reserved.
        </p>
      </div>
    </Motion.footer>
  );
};

export default Footer;
