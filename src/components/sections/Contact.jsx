import React from 'react';
import { motion as Motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-22 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Feel free to reach out to me for collaborations or just a friendly hello!
          </p>
        </Motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-6"
          >
            <form className="contact-panel p-4 sm:p-6 lg:p-8 rounded-xl">
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-100 mb-2">Name</label>
                <input
                  type="text"
                  className="contact-input mt-1 block w-full rounded-md px-3 py-2 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-100 mb-2">Email</label>
                <input
                  type="email"
                  className="contact-input mt-1 block w-full rounded-md px-3 py-2 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-100 mb-2">Message</label>
                <textarea
                  className="contact-input mt-1 block w-full rounded-md px-3 py-2 text-sm sm:text-base"
                  rows="5"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md shadow-md text-sm sm:text-base font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="card-surface p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Email</h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">obaidzafar234@mail.com</p>
            </div>
            <div className="card-surface p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Mobile</h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">+92 3165539458</p>
            </div>
            <div className="card-surface p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">GitHub</h4>
              <a href="https://github.com/obaid069" className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 hover:underline transition-colors duration-200">
                github.com/obaid069
              </a>
            </div>
            <div className="card-surface p-4 rounded-xl">
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/muhammad-obaid-zafar-0086b9301/" className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 hover:underline transition-colors duration-200 break-all">
                linkedin.com/in/muhammad-obaid-zafar-0086b9301
              </a>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
