import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.footer
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      className="py-6 sm:py-8 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 p-2 rounded-lg"
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Obaid Zafar. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
