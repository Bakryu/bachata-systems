import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ number, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative"
  >
    {/* Connector line */}
    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-[#F0B90B] to-[#2563EB] opacity-20" />

    <div className="relative flex gap-8">
      {/* Step number */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-full blur" />
        <div className="relative w-12 h-12 rounded-full bg-[#02021e] border border-white/10 flex items-center justify-center">
          <Typography
            variant="h4"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B90B] to-[#2563EB]"
          >
            {number}
          </Typography>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <Typography variant="h4" className="mb-3 text-white">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-400">
          {description}
        </Typography>
      </div>
    </div>
  </motion.div>
);

export default function WorkflowTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We start by understanding your business goals, target audience, and project requirements to create a detailed roadmap.',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description:
        'Our designers create intuitive user interfaces and interactive prototypes that align with your brand identity.',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Using modern technologies and best practices, we bring your design to life with clean, efficient code.',
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description:
        'Rigorous testing ensures your website performs flawlessly across all devices and browsers.',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description:
        'We handle the deployment process and provide ongoing maintenance to keep your website running smoothly.',
    },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bottom-0 right-1/4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] blur-[128px]" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
            OUR WORKFLOW
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            How We Build Success
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            A streamlined process that delivers results, from initial concept to final deployment
            and beyond.
          </Typography>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <TimelineStep key={index} {...step} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
