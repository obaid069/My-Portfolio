import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'C++', icon: Code, description: 'Strong foundation in system programming and algorithms.' },
    { name: 'Python', icon: Code, description: 'Proficient in scripting, automation, and data processing.' },
    { name: 'JavaScript', icon: Code, description: 'Modern ES6+ features and async programming.' },
    { name: '.NET Core', icon: Code, description: 'Building enterprise applications with ASP.NET Core MVC.' },
    { name: 'React.js', icon: Zap, description: 'Skilled in building modern web interfaces and mobile apps with React Native.' },
    { name: 'Node.js', icon: Zap, description: 'Backend development with Express.js and RESTful APIs.' },
    { name: 'Docker', icon: Server, description: 'Containerization and CI/CD pipeline automation.' },
    { name: 'Jenkins & GitHub Actions', icon: Server, description: 'Automated deployment pipelines and continuous integration.' },
    { name: 'AWS & Firebase', icon: Server, description: 'Cloud infrastructure, serverless functions, and authentication.' },
    { name: 'MongoDB & SQL', icon: Server, description: 'Database design, optimization, and management.' },
    { name: 'Git & GitLab', icon: Server, description: 'Version control and collaborative development workflows.' },
    { name: 'Networking', icon: Server, description: 'Configuration, installation, and maintenance of network devices and infrastructure.' }
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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4"
          >
            A blend of creativity and technology, driven by curiosity and continuous learning.
          </motion.p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <skill.icon className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
