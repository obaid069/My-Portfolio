import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'BlinkFit Mobile Application',
      description: 'A comprehensive cross-platform mobile application designed to monitor and improve eye health through intelligent tracking and automated interventions. Features include real-time blink detection using computer vision, automated eye redness analysis, comprehensive screen time monitoring with analytics, automated eye break reminders, parental control system, biometric security, and offline-first architecture with intelligent sync.',
      tech: 'React Native, Firebase, TypeScript, Computer Vision, MediaPipe',
      role: 'Lead Mobile Developer'
    },
    {
      name: 'BlinkFit Website',
      description: 'Companion website for the BlinkFit eye health monitoring app featuring responsive design, product information, user testimonials, download links, and informative content about eye health and digital wellbeing. Built with modern web technologies for optimal performance and user experience.',
      tech: 'React.js, Tailwind CSS, Responsive Design',
      role: 'Frontend Developer',
      link: 'https://www.blinkfit.site/'
    },
    {
      name: 'E-Commerce Website - .NET Core MVC',
      description: 'Full-featured ASP.NET Core MVC e-commerce web app with product management, shopping flow, user authentication, role-based admin controls, and secure SQL Server integration.',
      tech: '.NET Core, SQL Server, MVC Architecture',
      role: 'Full Stack Developer'
    },
    {
      name: 'CI/CD Pipeline Automation',
      description: 'Complete CI/CD pipeline using Docker, Jenkins, GitHub, and AWS EC2 for automated build, test, and deployment.',
      tech: 'Docker, Jenkins, GitHub Actions, AWS EC2',
      role: 'DevOps Engineer'
    },
    {
      name: 'IoT Smart Alert System',
      description: 'IoT-based system to monitor environmental/sensor data in real-time and trigger notifications for anomalies.',
      tech: 'IoT Sensors, Real-Time Monitoring',
      role: 'IoT Developer'
    },
    {
      name: 'Text-to-Image Generator',
      description: 'Web app that converts user-entered text into styled image outputs with custom fonts and colors. Users can download generated images.',
      tech: 'HTML, CSS, JavaScript, Canvas API',
      role: 'Web Developer'
    },
    {
      name: 'Campus Network Infrastructure',
      description: 'Designed and implemented a private network connecting 4 campuses using routers, switches, and proper segmentation. Configured NAT, DHCP, VLANs, and firewall rules.',
      tech: 'Cisco Packet Tracer, Networking',
      role: 'Network Engineer'
    },
    {
      name: 'Backup and Recovery in Windows Server 2022',
      description: 'Performed system-level data backup, restore, and scheduling using Windows Server tools and Acronis. Documented disaster recovery plans.',
      tech: 'Windows Server 2022, Acronis',
      role: 'System Administrator'
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
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
