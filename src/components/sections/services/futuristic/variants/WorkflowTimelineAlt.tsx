import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

export default function WorkflowTimelineAlt() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your goals and requirements',
      color: '#F0B90B',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Planning the perfect solution',
      color: '#2563EB',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating stunning user interfaces',
      color: '#8B5CF6',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building with modern technologies',
      color: '#F0B90B',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Ensuring perfect functionality',
      color: '#2563EB',
    },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-64 h-64 rounded-full opacity-30 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${steps[index].color}20, transparent)`,
              left: `${(index / steps.length) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
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
            OUR PROCESS
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            How We Work
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </Typography>
        </div>

        {/* Spiral timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <motion.path
                d="M 100,200 C 300,100 700,300 900,200"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F0B90B" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative px-4 ${index % 2 === 0 ? 'pt-0 pb-32' : 'pt-32 pb-0'}`}
              >
                {/* Step number with glowing effect */}
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 rounded-full blur-lg"
                    style={{ background: step.color }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <Typography variant="h5" className="mb-2 text-white">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    {step.description}
                  </Typography>
                </div>

                {/* Connecting line */}
                <motion.div
                  className="absolute left-1/2 w-px"
                  style={{
                    background: `linear-gradient(to bottom, ${step.color}, transparent)`,
                    top: index % 2 === 0 ? '4rem' : '0',
                    bottom: index % 2 === 0 ? '0' : '4rem',
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
