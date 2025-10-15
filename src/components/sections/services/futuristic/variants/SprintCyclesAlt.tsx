import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

const SprintCycle = ({
  number,
  color,
  delay = 0,
}: {
  number: number;
  color: string;
  delay?: number;
}) => {
  const labels = ['DESIGN', 'BUILD', 'QA'];
  const radius = 120;
  const center = { x: radius + 40, y: radius + 40 };

  return (
    <div className="relative w-[320px] h-[320px] group">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-2xl opacity-20"
        style={{ background: color }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay,
        }}
      />

      {/* Rotating outer ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, ${color}00, ${color}40, ${color}00)`,
          }}
        />
      </motion.div>

      {/* Static ring with labels */}
      <div className="absolute inset-0">
        {labels.map((label, index) => {
          const angle = (index * 360) / labels.length;
          const angleInRad = (angle * Math.PI) / 180;
          const x = center.x + radius * Math.cos(angleInRad - Math.PI / 2);
          const y = center.y + radius * Math.sin(angleInRad - Math.PI / 2);

          return (
            <div
              key={label}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: x,
                top: y,
              }}
            >
              <motion.div
                className="px-4 py-2 rounded-full bg-[#02021e]/80 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + index * 0.1 }}
              >
                <Typography variant="caption" className="text-white font-medium whitespace-nowrap">
                  {label}
                </Typography>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Center content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        <div className="relative group-hover:scale-105 transition-transform duration-300">
          <motion.div
            className="absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: color }}
          />
          <div className="relative bg-[#02021e]/80 backdrop-blur-xl border border-white/10 p-6 rounded-full">
            <Typography variant="h4" className="text-white text-center mb-1">
              {number}
            </Typography>
            <Typography variant="body2" className="text-gray-400 text-center whitespace-nowrap">
              Sprint ({number * 2} weeks)
            </Typography>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Arrow = ({ color, delay = 0 }: { color: string; delay?: number }) => (
  <div className="flex-1 flex items-center justify-center px-4">
    <motion.div
      className="w-full h-px relative"
      style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="absolute right-0 -translate-y-1/2 w-3 h-3"
        style={{
          borderTop: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          transform: 'rotate(45deg)',
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: -32 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <Typography variant="caption" className="text-gray-400 whitespace-nowrap">
          PLANNING → RELEASE
        </Typography>
      </motion.div>
    </motion.div>
  </div>
);

export default function SprintCyclesAlt() {
  return (
    <Section
      variant="default"
      padding="xl"
      className="bg-[#02021e] relative overflow-hidden min-h-screen"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full origin-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{
                  background: `radial-gradient(circle at ${50 + i * 20}% ${
                    50 + i * 20
                  }%, #38BDF820, #34D39920, #FBBF2420)`,
                  transform: `scale(${0.5 + i * 0.2})`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#38BDF8] mb-4 tracking-widest">
            DEVELOPMENT PROCESS
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Agile Sprint Cycles
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            Our development process follows an agile methodology with three interconnected sprint
            cycles, ensuring continuous delivery and improvement
          </Typography>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <SprintCycle number={1} color="#38BDF8" delay={0} />
          <Arrow color="#34D399" delay={0.2} />
          <SprintCycle number={2} color="#34D399" delay={0.4} />
          <Arrow color="#FBBF24" delay={0.6} />
          <SprintCycle number={3} color="#FBBF24" delay={0.8} />
        </div>

        {/* Final deployment arrow */}
        <motion.div
          className="mt-12 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="bg-[#02021e]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                🚀
              </motion.div>
              <Typography variant="body2" className="text-gray-400 text-center">
                FINAL DEPLOYMENT
              </Typography>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
