import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import Particles from '../Particles';

const Hero = () => {
  const { isDark } = useTheme();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const stats = [
    { label: 'Projects Delivered', value: '15+' },
    { label: 'Stacks Used', value: '10+' },
    { label: 'Focus Areas', value: 'IT + DevOps' },
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
    hidden: { y: 20, opacity: 1 },
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

  const handleOrbMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 14;

    setTilt({ x: rotateY, y: rotateX });
  };

  const resetOrbTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={isDark ? ['#22d3ee', '#38bdf8', '#f59e0b'] : ['#0c4a6e', '#0284c7', '#d97706']}
          particleCount={isDark ? 190 : 120}
          particleSpread={isDark ? 12 : 10}
          speed={isDark ? 0.14 : 0.08}
          particleBaseSize={isDark ? 135 : 95}
          moveParticlesOnHover={false}
          particleHoverFactor={0}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center"
        >
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <Motion.div variants={itemVariants}>
              <span className="hero-intro-chip inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                Building reliable products across IT Support, IoT, and Full-Stack Engineering
              </span>
            </Motion.div>

            <Motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-bold leading-tight">
                <span className="hero-title-primary block">
                  Modern Digital Solutions
                </span>
                <span className="block gradient-text">with an Engineering Mindset</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I am Muhammad Obaid Zafar, a final-year IT student focused on designing scalable systems, resilient support workflows, and production-ready web/mobile products with measurable impact.
              </p>
            </Motion.div>

            <Motion.div
              variants={itemVariants}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-colors"
              >
                Start a Conversation
              </Motion.button>

              <Motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Resume.pdf';
                  link.download = 'Muhammad_Obaid_Zafar_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-7 py-3 rounded-xl border border-amber-500/70 text-slate-900 dark:text-amber-200 bg-white/85 dark:bg-slate-900/50 hover:bg-amber-300/22 dark:hover:bg-amber-300/10 font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </Motion.button>
            </Motion.div>

            <Motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="card-surface rounded-xl px-4 py-3 text-left"
                >
                  <p className="text-xl font-semibold hero-stat-value">{item.value}</p>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </Motion.div>
          </div>

          <Motion.div variants={itemVariants} className="hero-orb-wrap">
            <Motion.div
              onMouseMove={handleOrbMove}
              onMouseLeave={resetOrbTilt}
              animate={{ rotateX: tilt.y, rotateY: tilt.x }}
              transition={{ type: 'spring', stiffness: 130, damping: 14, mass: 0.5 }}
              className="hero-orb"
            >
              <div className="hero-ring hero-ring-1"></div>
              <div className="hero-ring hero-ring-2"></div>
              <div className="hero-core">OZ</div>
              <span className="tech-tag">React</span>
              <span className="tech-tag">DevOps</span>
              <span className="tech-tag">IoT</span>
              <span className="tech-tag">Cloud</span>
            </Motion.div>
          </Motion.div>

          <Motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex justify-center mt-2"
          >
            <Motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={34} />
            </Motion.button>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
