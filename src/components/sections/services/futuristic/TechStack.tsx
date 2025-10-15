import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

interface TechItemProps {
  name: string;
  icon: string;
  delay?: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3, delay }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
    <div className="relative flex flex-col items-center p-6 bg-[#02021e]/80 backdrop-blur-xl rounded-2xl border border-white/10">
      <div className="text-4xl mb-3">{icon}</div>
      <Typography variant="body2" className="text-gray-400 text-center">
        {name}
      </Typography>
    </div>
  </motion.div>
);

export default function TechStack() {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🔲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'AWS', icon: '☁️' },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] top-0 right-1/4 rounded-full bg-gradient-to-r from-[#F0B90B] to-[#2563EB] blur-[128px]" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
            TECHNOLOGIES
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Built with Modern Tech Stack
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, performant, and maintainable web
            applications.
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechItem key={index} {...tech} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
