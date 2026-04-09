import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [tiltState, setTiltState] = useState({});

  const projects = [
    {
      name: 'BlinkFit Mobile Application',
      summary:
        'Cross-platform eye-health app that blends behavior analytics with practical wellness interventions for students and screen-heavy professionals.',
      role: 'Lead Mobile Developer',
      stack: ['React Native', 'TypeScript', 'Firebase', 'MediaPipe'],
      highlights: [
        'Implemented real-time blink and redness analysis workflow',
        'Designed offline-first sync model for unstable connectivity',
        'Integrated parental controls and biometric protection',
      ],
      impact: 'Created a reliable MVP with measurable screen-time awareness and healthy break adherence.',
    },
    {
      name: 'BlinkFit Product Website',
      summary:
        'High-conversion companion website built to communicate product value clearly and drive app discovery across desktop and mobile.',
      role: 'Frontend Developer',
      stack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      highlights: [
        'Structured storytelling flow around product outcomes',
        'Optimized layout for fast rendering and responsive readability',
        'Added trust signals through testimonial and feature sections',
      ],
      impact: 'Improved product clarity and made onboarding paths easier for new users.',
      link: 'https://www.blinkfit.site/',
    },
    {
      name: '.NET Core E-Commerce Platform',
      summary:
        'Full-featured commerce platform with secure authentication, role-based admin controls, and maintainable backend architecture.',
      role: 'Full Stack Developer',
      stack: ['.NET Core MVC', 'SQL Server', 'Authentication'],
      highlights: [
        'Implemented complete product and order lifecycle',
        'Built role-aware management interface for admin operations',
        'Integrated secure data model and transaction-safe flows',
      ],
      impact: 'Delivered a scalable foundation suitable for production growth and iterative feature releases.',
    },
  ];

  const handleCardMove = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

    setTiltState((prev) => ({
      ...prev,
      [index]: { rotateX, rotateY },
    }));
  };

  const resetCardTilt = (index) => {
    setTiltState((prev) => ({
      ...prev,
      [index]: { rotateX: 0, rotateY: 0 },
    }));
  };

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
    <section id="projects" className="py-14 sm:py-18 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <Motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Featured <span className="gradient-text">Case Studies</span>
          </Motion.h2>
          <Motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4"
          >
            Instead of listing everything, I highlight the work that best represents product thinking, engineering depth, and practical impact.
          </Motion.p>
        </Motion.div>

        <div className="grid gap-5 sm:gap-6 lg:gap-7 grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              onMouseMove={(event) => handleCardMove(index, event)}
              onMouseLeave={() => resetCardTilt(index)}
              style={{
                transform: `perspective(1100px) rotateX(${tiltState[index]?.rotateX || 0}deg) rotateY(${tiltState[index]?.rotateY || 0}deg)`,
              }}
              className="project-tilt card-surface rounded-[1.1rem] p-5 sm:p-6"
            >
              <div className="project-card-body flex flex-col h-full space-y-4">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{project.role}</p>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">{project.name}</h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-700 dark:text-slate-200 border-t border-slate-200/70 dark:border-slate-700/70 pt-4">
                  <span className="font-semibold">Impact:</span> {project.impact}
                </p>

                {project.link && (
                  <Motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-200 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Visit live project
                  </Motion.a>
                )}
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 sm:mt-10 flex justify-center"
        >
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-300/45 dark:border-cyan-400/35 bg-white/60 dark:bg-slate-900/55 text-slate-800 dark:text-slate-100 hover:bg-cyan-100/50 dark:hover:bg-cyan-500/10 transition-colors"
          >
            Want the full project archive?
            <ArrowRight size={16} />
          </button>
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
