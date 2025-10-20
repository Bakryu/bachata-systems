'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';
import { FaClipboardList, FaPalette, FaCode, FaSearch, FaRocket } from 'react-icons/fa';

interface SprintStep {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  days: string;
  details: string[];
}

const sprintSteps: SprintStep[] = [
  {
    title: 'Sprint Planning',
    description: 'Setting goals and planning tasks for the next two weeks',
    color: '#F0B90B',
    icon: <FaClipboardList />,
    days: 'Day 1',
    details: [
      'Define sprint goals and objectives',
      'Break down features into user stories',
      'Estimate task complexity and time',
      'Assign responsibilities to team members',
    ],
  },
  {
    title: 'Design Phase',
    description: 'Creating wireframes and visual designs',
    color: '#2563EB',
    icon: <FaPalette />,
    days: 'Day 2-5',
    details: [
      'Create wireframes and mockups',
      'Design user interface components',
      'Establish design system guidelines',
      'Review and iterate on feedback',
    ],
  },
  {
    title: 'Development',
    description: 'Building and implementing features',
    color: '#8B5CF6',
    icon: <FaCode />,
    days: 'Day 5-12',
    details: [
      'Write clean, maintainable code',
      'Implement responsive layouts',
      'Integrate APIs and backend services',
      'Daily standup meetings and progress tracking',
    ],
  },
  {
    title: 'Testing',
    description: 'Quality assurance and bug fixing',
    color: '#10B981',
    icon: <FaSearch />,
    days: 'Day 12-14',
    details: [
      'Perform unit and integration testing',
      'Cross-browser compatibility checks',
      'Mobile responsiveness testing',
      'Fix bugs and optimize performance',
    ],
  },
  {
    title: 'Release',
    description: 'Deploying to production and gathering feedback',
    color: '#EF4444',
    icon: <FaRocket />,
    days: 'Day 14',
    details: [
      'Deploy to production environment',
      'Monitor performance and errors',
      'Gather user feedback',
      'Plan next sprint improvements',
    ],
  },
];

export default function SprintTimelineAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % sprintSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleCardHover = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    setIsHovered(false);
  };

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0B90B]/5 via-transparent to-[#2563EB]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/10 via-transparent to-transparent" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
              SPRINT SYSTEM
            </Typography>
            <Typography variant="h2" className="mb-6 text-white">
              Two Week Sprint Cycle
            </Typography>
            <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
              Our agile development process with daily scrum meetings ensures efficient and
              transparent project delivery
            </Typography>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {sprintSteps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                className="relative cursor-pointer group"
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-white/10"
                  style={{
                    backgroundColor: 'rgba(2, 2, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                  }}
                  animate={{
                    borderColor: isActive ? step.color : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: isActive
                      ? `0 0 30px ${step.color}40, 0 0 60px ${step.color}20`
                      : '0 0 0 rgba(0, 0, 0, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress bar */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 w-full"
                    style={{ backgroundColor: step.color, transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                        style={{
                          backgroundColor: `${step.color}20`,
                          border: `2px solid ${step.color}40`,
                          color: step.color,
                        }}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor: isActive ? `${step.color}30` : `${step.color}20`,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <Typography
                              variant="h3"
                              className="text-white mb-1 group-hover:text-[#F0B90B] transition-colors"
                            >
                              {step.title}
                            </Typography>
                            <Typography variant="body2" className="text-gray-400">
                              {step.description}
                            </Typography>
                          </div>
                          <motion.div
                            className="flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundColor: `${step.color}20`,
                              color: step.color,
                            }}
                            animate={{
                              backgroundColor: isActive ? `${step.color}30` : `${step.color}20`,
                            }}
                          >
                            {step.days}
                          </motion.div>
                        </div>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {step.details.map((detail, detailIndex) => (
                                    <motion.li
                                      key={detailIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: detailIndex * 0.1 }}
                                      className="flex items-start gap-2 text-gray-300"
                                    >
                                      <span
                                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                                        style={{ backgroundColor: step.color }}
                                      />
                                      <span className="text-sm">{detail}</span>
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

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {sprintSteps.map((step, index) => (
            <motion.button
              key={index}
              className="relative w-12 h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              onClick={() => {
                setActiveIndex(index);
                setIsHovered(true);
              }}
              onMouseLeave={handleCardLeave}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: step.color, transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: index === activeIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
