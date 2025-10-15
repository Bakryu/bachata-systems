import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

export default function TechStackAlt() {
  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Node.js', color: '#339933' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'GraphQL', color: '#E535AB' },
    { name: 'AWS', color: '#FF9900' },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#F0B90B" fillOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
            TECHNOLOGIES
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Powered by Modern Tech Stack
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable and performant applications
          </Typography>
        </motion.div>

        {/* 3D rotating cylinder */}
        <div className="relative h-[600px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="relative preserve-3d"
            >
              {technologies.map((tech, index) => {
                const angle = (index / technologies.length) * 360;
                return (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(200px)`,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="relative group">
                      {/* Glowing background */}
                      <motion.div
                        className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                        style={{ background: tech.color }}
                      />

                      {/* Content */}
                      <div className="relative bg-[#02021e]/80 backdrop-blur-xl border border-white/10 p-6 rounded-lg">
                        <Typography variant="h5" className="text-white mb-2">
                          {tech.name}
                        </Typography>

                        {/* Animated border */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 w-full"
                          style={{ background: tech.color }}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Reflection effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#02021e] to-transparent" />
        </div>
      </Container>
    </Section>
  );
}
