import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

export default function SprintTimelineHorizontal() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Auto-advance active card
  React.useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % sprintSteps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered]);

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
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {sprintSteps.map((step, index) => (
          <motion.div
            key={index}
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${step.color}20, transparent)`,
              left: `${(index / sprintSteps.length) * 100}%`,
              top: '50%',
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
          <Typography variant="h2" className="mb-6 text-white text center">
            Two Week Sprint Cycle
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto text center">
            Our agile development process with daily scrum meetings ensures efficient and
            transparent project delivery
          </Typography>
        </div>

        <div className="relative">
          {/* Daily Scrum Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 right-0 h-24 bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-2xl mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F0B90B]/10 to-[#2563EB]/10" />
            <div className="relative h-full flex items-center justify-center gap-4">
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

          {/* Sprint Steps */}
          <div className="mt-36 flex justify-center items-start gap-6">
            {sprintSteps.map((step, index, length) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  scale: index === activeIndex ? 1.1 : 1,
                  translateX: index !== 0 && index === activeIndex ? '25%' : 0,
                  // zIndex: index === activeIndex ? 10 : sprintSteps.length - index,
                }}
                transition={{ duration: 0.5 }}
                className="group w-[300px] absolute top-0"
                style={{
                  left: `${index * 20}%`,
                }}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Connecting line */}
                <motion.div
                  className="absolute top-0 left-1/2 w-px h-24 -translate-x-1/2 -translate-y-[120px]"
                  style={{
                    background: `linear-gradient(to top, ${step.color}, transparent)`,
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />

                <div className="relative ">
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
                      <Typography variant="h6" className="text-white">
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
            ))}
          </div>

          {/* Timeline bar */}
          <motion.div
            className="mt-[250px] h-2 bg-white/10 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-full"
              initial={{ x: '-100%' }}
              animate={{
                x: isHovered ? `-${(4 - activeIndex) * 20}%` : '0%',
                background: sprintSteps[activeIndex].color,
              }}
              transition={{
                x: {
                  duration: isHovered ? 0.3 : 5,
                  // repeat: activeIndex === sprintSteps.length - 1 ? 0 : Infinity,
                  // repeatType: 'loop',
                },
                background: { duration: 0.5 },
              }}
            />
          </motion.div>

          {/* Sprint duration */}
          <motion.div
            className="mt-4 flex justify-between"
            animate={{
              color: isHovered ? sprintSteps[activeIndex].color : '#9CA3AF',
            }}
            transition={{ duration: 0.5 }}
          >
            <span>Day 1</span>
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Day 14</span>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
