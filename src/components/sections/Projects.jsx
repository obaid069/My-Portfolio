import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'BlinkFit',
      description: 'AI-Based Eye Health  App - Real-time eye tracking and health monitoring.',
      tech: 'React Native, TensorFlow Lite, MediaPipe, Firebase',
      role: 'Lead AI Developer'
    },
    {
      name: 'AI Cosmetics',
      description: 'E-Commerce Web App - Full-stack cosmetic store with admin panel.',
      tech: 'React.js, Node.js, MongoDB, Tailwind CSS',
      role: 'Full Stack Developer'
    },
    {
      name: 'DevOps CI/CD Pipeline',
      description: 'Automated deployment pipeline - Complete CI/CD solution from GitHub to AWS EC2 deployment.',
      tech: 'GitHub Actions, Jenkins, Docker, AWS EC2',
      role: 'DevOps Engineer'
    },
    {
      name: "Smart Home Automation",
      description: "An IoT-based system that allows users to control home appliances remotely through web and mobile applications.",
      tech: "Hardware (Arduino, sensors, actuators) and Software ",
      role: "IoT Developer"
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
          >
            A showcase of my development journey, filled with creativity and technology.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col space-y-3">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-600 dark:bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                  <span className="inline-block bg-green-600 dark:bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
