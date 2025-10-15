import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

export default function SprintTimelineAlt() {
  const sprintSteps = [
    {
      number: '01',
      title: 'Sprint Planning',
      description: 'Setting goals and planning tasks for the next two weeks',
      color: '#F0B90B',
      icon: '📋',
      days: 'Day 1-3',
    },
    {
      number: '02',
      title: 'Design Phase',
      description: 'Creating wireframes and visual designs',
      color: '#2563EB',
      icon: '🎨',
      days: 'Day 3-5',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building and implementing features',
      color: '#8B5CF6',
      icon: '⚡',
      days: 'Day 5-8',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Quality assurance and bug fixing',
      color: '#F0B90B',
      icon: '🔍',
      days: 'Day 8-10',
    },
    {
      number: '05',
      title: 'Release',
      description: 'Deploying to production and gathering feedback',
      color: '#2563EB',
      icon: '🚀',
      days: 'Day 10-14',
    },
  ];

  return (
    <Section
      variant="default"
      padding="xl"
      className="bg-[#02021e] relative overflow-hidden min-h-screen"
    >
      {/* Animated orbit background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-white/5 rounded-full"
              style={{
                transform: `scale(${0.5 + i * 0.2})`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
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
        </div>

        {/* Sprint Circle */}
        <div className="relative max-w-6xl mx-auto h-[900px]">
          {/* Sprint steps in a circle - render first to be behind the center */}
          {sprintSteps.map((step, index) => {
            const angleInDegrees = (360 / sprintSteps.length) * index - 90;
            const angleInRadians = (angleInDegrees * Math.PI) / 180;
            const radius = 340; // Increased radius
            const x = Math.cos(angleInRadians) * radius;
            const y = Math.sin(angleInRadians) * radius;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  width: '280px',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connection line to center */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-px"
                  style={{
                    background: `linear-gradient(${angleInDegrees}deg, ${step.color}, transparent)`,
                    height: '160px', // Length of connection line
                    transformOrigin: 'top',
                    transform: `rotate(${angleInDegrees}deg) translateX(-50%)`,
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />

                <div className="relative group">
                  <motion.div
                    className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
                    style={{ background: step.color }}
                  />
                  <div className="relative p-6 bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                        style={{ background: step.color }}
                      >
                        {step.icon}
                      </div>
                      <Typography variant="h5" className="text-white">
                        {step.title}
                      </Typography>
                    </div>
                    <Typography variant="body2" className="text-gray-400 mb-4">
                      {step.description}
                    </Typography>
                    <div className="flex items-center gap-2">
                      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full w-full"
                          style={{ background: step.color }}
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '0%' }}
                          transition={{
                            duration: 1,
                            delay: index * 0.2,
                          }}
                        />
                      </div>
                      <Typography variant="caption" className="text-gray-400">
                        {step.days}
                      </Typography>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Center daily scrum element - render last to be on top */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full blur-xl bg-gradient-to-r from-[#F0B90B] to-[#2563EB]"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-[#02021e]/80 backdrop-blur-xl border border-white/10 p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center">
                <div className="text-3xl mb-2">⭐</div>
                <Typography variant="h5" className="text-white text-center mb-1">
                  Daily Scrum
                </Typography>
                <Typography variant="caption" className="text-gray-400 text-center">
                  15-minute sync
                  <br />
                  every morning
                </Typography>
              </div>
            </div>
          </motion.div>

          {/* Sprint steps in a circle */}
          {sprintSteps.map((step, index) => {
            // Calculate position on the circle
            const angleInDegrees = (360 / sprintSteps.length) * index - 90; // Start from top
            const angleInRadians = (angleInDegrees * Math.PI) / 180;
            const radius = 280; // Increased radius for better spacing
            const x = Math.cos(angleInRadians) * radius;
            const y = Math.sin(angleInRadians) * radius;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  width: '264px',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative group">
                  {/* Connection to center */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 w-px h-px"
                    style={{
                      background: `linear-gradient(to ${angleInRadians > Math.PI ? 'bottom' : 'top'}, ${step.color}, transparent)`,
                      transform: `rotate(${angleInDegrees}deg)`,
                      transformOrigin: 'center',
                      width: '150px',
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />

                  {/* Step content */}
                  <div className="relative w-64 p-6 bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-lg">
                    <motion.div
                      className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
                      style={{ background: step.color }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                          style={{ background: step.color }}
                        >
                          {step.icon}
                        </div>
                        <Typography variant="h5" className="text-white">
                          {step.title}
                        </Typography>
                      </div>
                      <Typography variant="body2" className="text-gray-400">
                        {step.description}
                      </Typography>

                      {/* Sprint duration indicator */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full w-full"
                            style={{ background: step.color }}
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '0%' }}
                            transition={{
                              duration: 1,
                              delay: index * 0.2,
                            }}
                          />
                        </div>
                        <Typography variant="caption" className="text-gray-400">
                          {index === 0
                            ? 'Day 1-3'
                            : index === 1
                              ? 'Day 3-5'
                              : index === 2
                                ? 'Day 5-8'
                                : index === 3
                                  ? 'Day 8-10'
                                  : 'Day 10-14'}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sprint cycle indicator */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
            <Typography variant="body2" className="text-gray-400 text-center">
              Each sprint cycle runs for two weeks, with daily scrum meetings ensuring continuous
              communication and progress tracking.
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
