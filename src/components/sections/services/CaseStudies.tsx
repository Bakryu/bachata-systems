import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography, Button } from '@/components/ui';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, description, image, tags, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
    <div className="relative bg-[#02021e]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0B90B]/10 to-[#2563EB]/10" />
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div>
        <Typography variant="h4" className="mb-3 text-white">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-400 mb-4">
          {description}
        </Typography>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-white/5 text-[#F0B90B] border border-[#F0B90B]/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="ghost"
          className="text-[#F0B90B] hover:text-[#2563EB] transition-colors duration-300"
        >
          View Case Study →
        </Button>
      </div>
    </div>
  </motion.div>
);

export default function CaseStudies() {
  const cases = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution with seamless checkout experience.',
      image: '/project1.jpg',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with real-time data visualization.',
      image: '/project2.jpg',
      tags: ['React', 'TypeScript', 'GraphQL'],
    },
    {
      title: 'Educational Platform',
      description: 'Interactive learning platform with video streaming.',
      image: '/project3.jpg',
      tags: ['Node.js', 'PostgreSQL', 'AWS'],
    },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bottom-0 left-1/4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] blur-[128px]" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
            CASE STUDIES
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Our Recent Projects
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped our clients achieve their
            digital goals.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <CaseStudy key={index} {...study} delay={0.2} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
