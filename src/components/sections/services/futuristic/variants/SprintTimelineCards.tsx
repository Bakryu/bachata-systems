'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';
import { FaClipboardList, FaPalette, FaCode, FaSearch, FaRocket } from 'react-icons/fa';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

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

export default function SprintTimelineCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex(prev => (prev + 1) % sprintSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % sprintSteps.length);
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 3000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + sprintSteps.length) % sprintSteps.length);
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 3000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(240, 185, 11, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
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

        {/* Main Card Display */}
        <div className="relative h-[500px] flex items-center justify-center mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              className="absolute w-full max-w-3xl"
            >
              <div
                className="relative rounded-3xl p-8 border-2"
                style={{
                  backgroundColor: 'rgba(2, 2, 30, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderColor: sprintSteps[activeIndex].color,
                  boxShadow: `0 0 60px ${sprintSteps[activeIndex].color}40`,
                }}
              >
                {/* Decorative corner elements */}
                <div
                  className="absolute top-0 left-0 w-20 h-20 rounded-tl-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${sprintSteps[activeIndex].color}40 0%, transparent 100%)`,
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-br-3xl"
                  style={{
                    background: `linear-gradient(-45deg, ${sprintSteps[activeIndex].color}40 0%, transparent 100%)`,
                  }}
                />

                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6"
                    style={{
                      backgroundColor: `${sprintSteps[activeIndex].color}20`,
                      border: `3px solid ${sprintSteps[activeIndex].color}`,
                      color: sprintSteps[activeIndex].color,
                    }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {sprintSteps[activeIndex].icon}
                  </motion.div>

                  {/* Step Number */}
                  <div
                    className="px-4 py-1 rounded-full text-sm font-bold mb-4"
                    style={{
                      backgroundColor: `${sprintSteps[activeIndex].color}30`,
                      color: sprintSteps[activeIndex].color,
                    }}
                  >
                    {sprintSteps[activeIndex].days}
                  </div>

                  {/* Title */}
                  <Typography variant="h2" className="text-white mb-4">
                    {sprintSteps[activeIndex].title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body1" className="text-gray-400 mb-8 max-w-xl">
                    {sprintSteps[activeIndex].description}
                  </Typography>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {sprintSteps[activeIndex].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-left"
                      >
                        <div
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            backgroundColor: `${sprintSteps[activeIndex].color}30`,
                            color: sprintSteps[activeIndex].color,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HiArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HiArrowRight className="text-2xl" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3">
          {sprintSteps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
                setIsHovered(true);
                setTimeout(() => setIsHovered(false), 3000);
              }}
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: index === activeIndex ? step.color : 'rgba(255, 255, 255, 0.2)',
                }}
                animate={{
                  scale: index === activeIndex ? 1.5 : 1,
                }}
                whileHover={{ scale: 1.2 }}
              />
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">{step.title}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
