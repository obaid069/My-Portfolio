import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Feel free to reach out to me for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-6"
          >
            <form className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-white mb-2">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-white mb-2">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-white mb-2">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
                  rows="5"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">obaidzafar234@mail.com</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Mobile</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">+92 3165539458</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h4>
              <a href="https://github.com/obaid069" className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">
                github.com/obaid069
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/muhammad-obaid-zafar-0086b9301/" className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200 break-all">
                linkedin.com/in/muhammad-obaid-zafar-0086b9301
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
