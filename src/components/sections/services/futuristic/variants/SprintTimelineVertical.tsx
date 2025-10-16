import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

export default function SprintTimelineVertical() {
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
      {/* Background effects */}
      <div className="absolute inset-0">
        {sprintSteps.map((step, index) => (
          <motion.div
            key={index}
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${step.color}20, transparent)`,
              left: index % 2 === 0 ? '25%' : '75%',
              top: `${(index / sprintSteps.length) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        ))}
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

        <div className="relative max-w-4xl mx-auto">
          {/* Daily Scrum */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-72 bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F0B90B]/10 to-[#2563EB]/10 rounded-2xl" />
            <div className="relative flex items-center justify-center gap-4">
              <div className="text-3xl">⭐</div>
              <div className="text-center">
                <Typography variant="h5" className="text-white">
                  Daily Scrum
                </Typography>
                <Typography variant="caption" className="text-gray-400">
                  15-minute sync every morning
                </Typography>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mt-32 relative">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8 }}
            />

            {sprintSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative w-[250px]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex items-center gap-8 mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Connection to timeline */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-px"
                    style={{
                      background: step.color,
                      width: '100px',
                      transform: `translate(${index % 2 === 0 ? '-100%' : '0%'}, -50%)`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />

                  {/* Content */}
                  <div
                    className={`w-[calc(50%-60px)] relative group ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <motion.div
                      className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
                      style={{ background: step.color }}
                    />
                    <div className="relative p-6 bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-lg">
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {index % 2 === 1 && (
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                            style={{ background: step.color }}
                          >
                            {step.icon}
                          </div>
                        )}
                        <Typography variant="h5" className="text-white">
                          {step.title}
                        </Typography>
                        {index % 2 === 0 && (
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                            style={{ background: step.color }}
                          >
                            {step.icon}
                          </div>
                        )}
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

                  {/* Timeline marker */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{ background: step.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${step.color}` }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
