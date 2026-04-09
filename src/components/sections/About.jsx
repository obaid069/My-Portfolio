import React from 'react';
import { motion as Motion } from 'framer-motion';
import { GraduationCap, Award, Code, Server } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Technical Support Fundamentals (Google)',
      year: '2025',
      description: 'Acquired foundational IT skills including troubleshooting, customer service, networking, system administration, and security'
    },
    {
      icon: Award,
      title: 'AWS Fundamentals Specialization',
      year: '2024',
      description: 'Explored core AWS services, ETL pipelines, and big data processing frameworks within the AWS ecosystem'
    },
    {
      icon: Award,
      title: 'Google Project Management',
      year: '2024',
      description: 'Applied modern project life cycle phases, focusing on tools and strategies to improve planning, execution, and delivery'
    },
    {
      icon: Server,
      title: 'DevOps & Full-Stack Projects',
      year: '2024-2025',
      description: 'Successfully completed multiple DevOps, full-stack, and IoT infrastructure projects'
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
    <section id="about" className="py-14 sm:py-18 lg:py-22 bg-transparent">
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
            About <span className="gradient-text">Me</span>
          </Motion.h2>
          <Motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4"
          >
            Passionate about bridging the gap between cutting-edge technology and practical solutions
          </Motion.p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Description */}
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <Motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                A Multidisciplinary Tech Professional
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Currently pursuing my Bachelor of Science in Information Technology degree at Air University Islamabad (September 2022 - July 2026).
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                My expertise spans across IT Support, IoT, System Administration, Full-Stack Development, and DevOps practices. 
                Skilled in troubleshooting hardware, software, and network issues across Windows and Linux environments. 
                Proficient with cloud platforms like AWS and Firebase, and experienced in building full-stack applications using React.js, 
                Node.js, MongoDB, and .NET Core.
              </p>
            </Motion.div>

            <Motion.div variants={itemVariants} className="card-surface p-4 sm:p-6 rounded-xl">
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Education</h4>
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                  Bachelor of Science in Information Technology
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Air University Islamabad</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">September 2022 - July 2026</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Key Areas: IT Support, IoT, System Administration, Full Stack Development, DevOps, Networking
                </p>
              </div>
            </Motion.div>
          </Motion.div>

          {/* Right Column - Achievements */}
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <Motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6"
            >
              Achievements & Certifications
            </Motion.h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="card-surface p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-gradient-to-br from-cyan-500 to-amber-400 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                            {achievement.title}
                          </h4>
                          <span className="text-sm text-cyan-700 dark:text-cyan-300 font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
