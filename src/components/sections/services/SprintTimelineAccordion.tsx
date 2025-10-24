'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';
import {
  FaBullseye,
  FaSearchPlus,
  FaTools,
  FaPaintBrush,
  FaCode,
  FaRocket,
  FaLightbulb,
} from 'react-icons/fa';

interface ProcessStep {
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  glowClass: string;
  icon: React.ReactNode;
  keyPoints: string[];
  metrics?: string[];
}

const processSteps: ProcessStep[] = [
  {
    title: 'Definition of Objectives',
    description:
      'We start by identifying your business goals, audience needs, and project vision to ensure every decision aligns with measurable outcomes and long-term success.',
    colorClass: 'brand-gold',
    bgClass: 'bg-brand-gold/15 hover:bg-brand-gold/25',
    borderClass: 'border-brand-gold/40',
    textClass: 'text-brand-gold',
    glowClass: 'shadow-brand-gold/30',
    icon: <FaBullseye />,
    keyPoints: [
      'In-depth stakeholder interviews',
      'Business goals alignment',
      'Target audience profiling',
      'Success metrics definition',
      'Project scope & timeline',
      'Risk assessment planning',
    ],
    metrics: ['Project Vision', 'KPIs Defined', 'Roadmap Created'],
  },
  {
    title: 'Analysis & Exploration',
    description:
      "We research your market, competitors, and user behavior to uncover insights that shape the project's direction and reveal opportunities for innovation.",
    colorClass: 'brand-blue',
    bgClass: 'bg-brand-blue/15 hover:bg-brand-blue/25',
    borderClass: 'border-brand-blue/40',
    textClass: 'text-brand-blue',
    glowClass: 'shadow-brand-blue/30',
    icon: <FaSearchPlus />,
    keyPoints: [
      'Competitive landscape analysis',
      'Market trends research',
      'User behavior analytics',
      'Technical requirements audit',
      'Gap & opportunity identification',
      'Data-driven insights report',
    ],
    metrics: ['Market Research', 'User Insights', 'Strategic Plan'],
  },
  {
    title: 'Selection of Technologies',
    description:
      "We choose the most effective tools, frameworks, and platforms to ensure optimal performance, scalability, and future-ready solutions tailored to your project's needs.",
    colorClass: 'brand-violet',
    bgClass: 'bg-brand-violet/15 hover:bg-brand-violet/25',
    borderClass: 'border-brand-violet/40',
    textClass: 'text-brand-violet',
    glowClass: 'shadow-brand-violet/30',
    icon: <FaTools />,
    keyPoints: [
      'Tech stack evaluation',
      'Performance benchmarking',
      'Scalability planning',
      'Security considerations',
      'Integration capabilities',
      'Future-proofing strategy',
    ],
    metrics: ['Architecture Design', 'Tech Stack', 'Infrastructure'],
  },
  {
    title: 'Imaginative Design',
    description:
      "We transform ideas into engaging visual experiences, combining creativity and usability to craft intuitive interfaces that captivate users and reflect your brand's personality.",
    colorClass: 'brand-pink',
    bgClass: 'bg-brand-pink/15 hover:bg-brand-pink/25',
    borderClass: 'border-brand-pink/40',
    textClass: 'text-brand-pink',
    glowClass: 'shadow-brand-pink/30',
    icon: <FaPaintBrush />,
    keyPoints: [
      'Brand identity integration',
      'User journey mapping',
      'Wireframes & prototypes',
      'Visual design systems',
      'Accessibility standards',
      'Interactive animations',
    ],
    metrics: ['UI/UX Design', 'Prototypes', 'Design System'],
  },
  {
    title: 'Robust Development',
    description:
      'We turn designs into high-performance, secure, and scalable code, following best practices to ensure every feature works seamlessly across devices and platforms.',
    colorClass: 'brand-cyan',
    bgClass: 'bg-brand-cyan/15 hover:bg-brand-cyan/25',
    borderClass: 'border-brand-cyan/40',
    textClass: 'text-brand-cyan',
    glowClass: 'shadow-brand-cyan/30',
    icon: <FaCode />,
    keyPoints: [
      'Clean code architecture',
      'Responsive implementation',
      'API integration',
      'Security hardening',
      'Performance optimization',
      'Cross-platform testing',
    ],
    metrics: ['Code Quality', 'Test Coverage', 'Performance'],
  },
  {
    title: 'Launch & Expansion',
    description:
      'We deploy your project with precision, monitor its performance, and continuously refine and scale it to support growth, new features, and evolving business goals.',
    colorClass: 'brand-green',
    bgClass: 'bg-brand-green/15 hover:bg-brand-green/25',
    borderClass: 'border-brand-green/40',
    textClass: 'text-brand-green',
    glowClass: 'shadow-brand-green/30',
    icon: <FaRocket />,
    keyPoints: [
      'Strategic deployment',
      'Performance monitoring',
      'User feedback analysis',
      'Continuous optimization',
      'Feature expansion',
      'Growth scaling support',
    ],
    metrics: ['Live Deployment', 'Monitoring', 'Iteration'],
  },
];

export default function SprintTimelineAccordion() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <Section variant="default" padding="xl" className="bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent" />

        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-yellow/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="overline" className="text-accent-yellow mb-4 tracking-widest">
              Our Process
            </Typography>

            <Typography variant="h2" className="mb-6 text-text-primary text-center">
              From Vision to Reality
            </Typography>
            <Typography
              variant="body1"
              className="text-text-secondary max-w-3xl mx-auto text-center"
            >
              A comprehensive 6-step journey that transforms your ideas into powerful digital
              solutions. Each phase is carefully crafted to deliver exceptional results and
              sustainable growth.
            </Typography>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const isActive = index === activeIndex;
            const shouldShowContent = isMobile || isActive; // Always show on mobile

            return (
              <motion.div
                key={index}
                className="relative cursor-pointer group"
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl transition-opacity duration-500 blur-xl ${
                    isActive ? 'opacity-70' : 'opacity-0 group-hover:opacity-50'
                  } bg-gradient-to-br from-${step.colorClass}/25 to-${step.colorClass}/10`}
                />

                <motion.div
                  className={`relative rounded-3xl overflow-hidden bg-background-secondary/90 backdrop-blur-sm border-2 transition-all duration-400 ${
                    isActive
                      ? `border-${step.colorClass} ${step.glowClass} shadow-2xl`
                      : 'border-border-subtle'
                  }`}
                >
                  {/* Animated gradient border on top */}
                  <motion.div
                    className={`absolute top-0 left-0 h-1 w-full ${step.bgClass}`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                      {/* Number & Icon */}
                      <div className="flex-shrink-0">
                        <motion.div
                          className={`relative w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-2 md:mb-3 border-2 ${step.bgClass} ${step.borderClass} ${step.textClass}`}
                          animate={{
                            scale: isActive ? 1.1 : 1,
                            rotate: isActive ? [0, 5, -5, 0] : 0,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {step.icon}

                          {/* Ping effect when active */}
                          {isActive && (
                            <motion.div
                              className={`absolute inset-0 rounded-xl md:rounded-2xl border-2 ${step.borderClass.replace('/40', '')}`}
                              initial={{ opacity: 1, scale: 1 }}
                              animate={{ opacity: 0, scale: 1.5 }}
                              transition={{ duration: 1 }}
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 w-full">
                        <div className="mb-3">
                          <Typography
                            variant="h3"
                            className="text-xl md:text-2xl text-text-primary mb-2 group-hover:text-accent-yellow transition-colors"
                          >
                            {step.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            className="text-sm md:text-base text-text-secondary leading-relaxed"
                          >
                            {step.description}
                          </Typography>
                        </div>

                        {/* Metrics Pills */}
                        {step.metrics && (
                          <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            {step.metrics.map((metric, metricIndex) => (
                              <motion.span
                                key={metricIndex}
                                className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-semibold border ${step.bgClass} ${step.borderClass} ${step.textClass} transition-opacity`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: isActive ? 1 : 0.7, scale: 1 }}
                                transition={{ delay: metricIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {metric}
                              </motion.span>
                            ))}
                          </div>
                        )}

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {shouldShowContent && (
                            <motion.div
                              initial={
                                isMobile
                                  ? { height: 'auto', opacity: 1 }
                                  : { height: 0, opacity: 0 }
                              }
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={
                                isMobile
                                  ? { height: 'auto', opacity: 1 }
                                  : { height: 0, opacity: 0 }
                              }
                              transition={{ duration: isMobile ? 0 : 0.4, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <div className="mt-6 pt-6 border-t border-border-subtle">
                                <div className="text-xs md:text-sm font-semibold text-text-muted mb-4 uppercase tracking-wider">
                                  Key Activities
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                  {step.keyPoints.map((point, pointIndex) => (
                                    <motion.li
                                      key={pointIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: pointIndex * 0.08 }}
                                      className="flex items-start gap-2 md:gap-3 text-text-secondary"
                                    >
                                      <motion.span
                                        className={`flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-1.5 bg-${step.colorClass}`}
                                        animate={{
                                          scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                          duration: 2,
                                          repeat: Infinity,
                                          delay: pointIndex * 0.2,
                                        }}
                                      />
                                      <span className="text-xs md:text-sm leading-relaxed">
                                        {point}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-yellow/10 via-accent-purple/10 to-accent-blue/10 rounded-full border border-accent-yellow/30">
            <FaLightbulb className="text-accent-yellow" />
            <span className="text-text-secondary text-sm">
              Each step is tailored to your unique project requirements
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
