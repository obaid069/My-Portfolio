import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import Particles from '../Particles';

const Hero = () => {
  const { isDark } = useTheme();
  
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

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-slate-900 dark:via-gray-900 dark:to-indigo-900 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div style={{ width: '100%', height: '1000px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Particles
          particleColors={isDark ? ['#60a5fa', '#a78bfa', '#34d399'] : ['#1e40af', '#7c3aed', '#059669', '#dc2626', '#ea580c']}
          particleCount={400}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={300}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-20 w-full pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-75"
              ></motion.div>
              <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
                OZ9
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                Muhammad Obaid Zafar
              </span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
              IT Support | IoT | System Administrator | Full Stack Developer | DevOps Engineer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-2"
          >
            Final-year IT student with hands-on experience in IT Support, IoT, System Administration, Full-Stack Development, and DevOps practices. 
            Skilled in troubleshooting hardware, software, and network issues across Windows and Linux environments. Experienced in building and deploying 
            full-stack applications and integrating CI/CD pipelines with Docker, Jenkins, and GitHub Actions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 xs:px-8 py-2.5 xs:py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm xs:text-base pointer-events-auto"
            >
              Get In Touch
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Resume.pdf';
                link.download = 'Muhammad_Obaid_Zafar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-6 xs:px-8 py-2.5 xs:py-3 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all duration-300 flex items-center gap-2 text-sm xs:text-base pointer-events-auto"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8 sm:mt-12 md:mt-16"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors pointer-events-auto"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
