import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'IT Support & Quality Assurance Intern',
      company: 'CPDI, Islamabad',
      period: 'July 2025 – August 2025',
      responsibilities: [
        'Provided technical support for hardware, software, and network issues, ensuring smooth daily operations.',
        'Assisted in troubleshooting system errors, managing user accounts, and maintaining IT documentation.',
        'Conducted software quality assurance testing and prepared reports to ensure system reliability.'
      ]
    },
    {
      title: 'Web Designer & Front-End Developer',
      company: 'Journey',
      period: 'January 2024 - March 2024',
      responsibilities: [
        'Developed responsive web interfaces with HTML, CSS, JavaScript, and React.js.',
        'Implemented CI/CD pipelines with GitHub Actions to streamline testing and deployments.',
        'Optimized websites for speed, scalability, and cross-device compatibility.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="py-14 sm:py-18 lg:py-22 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <Motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Work <span className="gradient-text">Experience</span>
          </Motion.h2>
          <Motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4"
          >
            Professional journey and hands-on experience in IT support, web development, and quality assurance.
          </Motion.p>
        </Motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="card-surface p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-gradient-to-br from-cyan-500 to-amber-400 p-3 rounded-lg flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-base sm:text-lg text-cyan-700 dark:text-cyan-300 font-medium">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <Calendar size={18} />
                  <span className="text-sm sm:text-base">{experience.period}</span>
                </div>
              </div>
              
              <div className="ml-0 md:ml-16">
                <ul className="space-y-2 sm:space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
