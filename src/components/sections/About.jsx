import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Server } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Google IT Support Certification',
      year: '2025',
      description: 'Comprehensive IT support and troubleshooting certification'
    },
    {
      icon: Award,
      title: "AWS Fundamentals By Coursera",
      year: '2025',
      description: 'Recognized for academic excellence at Air University'
    },
    {
      icon: Code,
      title: 'AI Models for Mobile Inference',
      year: '2024',
      description: 'Built custom AI models optimized for real-time mobile applications'
    },
    {
      icon: Server,
      title: 'CI/CD & Cloud Deployments',
      year: '2023-2024',
      description: 'Successfully completed multiple DevOps and cloud infrastructure projects'
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
          >
            Passionate about bridging the gap between cutting-edge technology and practical solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                A Multidisciplinary Tech Professional
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently pursuing my Bachelor of Science in Information Technolgy degree at Air University Islamabad (Main Campus).
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                My expertise spans across AI development, DevOps practices, system administration, and full-stack 
                web development. I'm passionate about creating intelligent applications that solve real-world problems 
                while maintaining robust, scalable infrastructure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Education</h4>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2022 - 2026</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Key Areas: Artificial Intelligence, DevOps, System Administration, Full Stack Development
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              Achievements & Certifications
            </motion.h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h4>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
