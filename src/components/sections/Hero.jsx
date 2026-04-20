import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Sparkles } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import Particles from '../Particles';

const Hero = () => {
  const { isDark } = useTheme();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const stats = [
    { label: 'Production Projects', value: '18+' },
    { label: 'Domains Covered', value: 'IT + DevOps' },
    { label: 'Domains Covered', value: ' Cloud + Full Stack' },
  ];

  const automationRules = [
    'Prioritize incidents by SLA tier',
    'Trigger deployment checks after fixes',
    'Route alerts by domain ownership',
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

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBoardMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 7;

    setTilt({ x: rotateY, y: rotateX });
  };

  const resetBoardTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Muhammad_Obaid_Zafar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={isDark ? ['#4cffcb', '#32e6ff', '#84f2ff'] : ['#31c4a2', '#2bc0df', '#67d9ef']}
          particleCount={isDark ? 120 : 90}
          particleSpread={9}
          speed={isDark ? 0.1 : 0.08}
          particleBaseSize={96}
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
          className="grid lg:grid-cols-[1.03fr_0.97fr] gap-10 lg:gap-14 items-center"
        >
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <Motion.div variants={itemVariants}>
              <span className="hero-intro-chip inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                <Sparkles size={15} />
              </span>
            </Motion.div>

            <Motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-bold leading-tight">
                <span className="hero-title-primary block">
                  I Build Product Systems
                </span>
                <span className="block gradient-text">That Think, Adapt, and Ship Fast</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I am Muhammad Obaid Zafar, a final-year IT engineer focused on resilient support workflows, scalable full-stack architecture, and practical automation that improves delivery speed.
              </p>
            </Motion.div>

            <Motion.div
              variants={itemVariants}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-primary px-7 py-3 rounded-xl font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-colors"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Motion.button>

              <Motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="cta-secondary px-7 py-3 rounded-xl font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-colors"
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
                  className="hero-stat-card px-4 py-3 text-left"
                >
                  <p className="text-base sm:text-lg font-semibold hero-stat-value">{item.value}</p>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </Motion.div>
          </div>

          <Motion.div variants={itemVariants} className="hero-board-wrap">
            <Motion.div
              onMouseMove={handleBoardMove}
              onMouseLeave={resetBoardTilt}
              animate={{ rotateX: tilt.y, rotateY: tilt.x }}
              transition={{ type: 'spring', stiffness: 130, damping: 16, mass: 0.55 }}
              className="workflow-board"
            >
              <div className="workflow-grid"></div>
              <span className="workflow-status">Live orchestration</span>

              <article className="workflow-node node-top">
                <p className="workflow-node-label">User Channel</p>
                <h4>Support Intake</h4>
                <p>Requests are captured, classified, and prioritized in real time.</p>
              </article>

              <article className="workflow-node node-left">
                <p className="workflow-node-label">Stack Branch</p>
                <h4>Frontend</h4>
                <p>React interface updates with accessible, measurable UI states.</p>
              </article>

              <article className="workflow-node node-main">
                <p className="workflow-node-label">Primary Agent</p>
                <h4>Obaid System Core</h4>
                <p>Bridges IT support signals, deployment logs, and product priorities.</p>
              </article>

              <article className="workflow-node node-right">
                <p className="workflow-node-label">Stack Branch</p>
                <h4>DevOps</h4>
                <p>Pipelines, rollout safeguards, and uptime checks stay in sync.</p>
              </article>

              <div className="workflow-panel node-bottom">
                <p className="workflow-node-label">Automation Rules</p>
                {automationRules.map((rule, index) => (
                  <div key={rule} className="workflow-rule">
                    <span className="workflow-rule-index">{index + 1}</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              <span className="workflow-link link-top"></span>
              <span className="workflow-link link-left"></span>
              <span className="workflow-link link-right"></span>
              <span className="workflow-link link-bottom"></span>
              <div className="workflow-glow"></div>
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
