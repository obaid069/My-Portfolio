import React from 'react';
import { motion as Motion } from 'framer-motion';
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
    <section id="skills" className="py-14 sm:py-18 lg:py-22 bg-transparent">
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
            My <span className="gradient-text">Skills</span>
          </Motion.h2>
          <Motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4"
          >
            A blend of creativity and technology, driven by curiosity and continuous learning.
          </Motion.p>
        </Motion.div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card-surface p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-amber-400 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <skill.icon className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">{skill.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{skill.description}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
