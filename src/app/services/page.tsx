'use client';

import { motion } from 'framer-motion';

import { Typography, Section, Container, Card, Button, ScrollReveal } from '@/components/ui';
import Link from '@/components/ui/Link';

const services = [
  {
    id: 'design',
    title: 'UI/UX Design',
    subtitle: 'User-Centered Design Solutions',
    description: 'We create intuitive, beautiful interfaces that users love and businesses need.',
    icon: '🎨',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Usability Testing',
      'Mobile-First Design',
      'Accessibility Compliance',
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle', 'Framer'],
    href: '/services/design',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    id: 'development',
    title: 'Web Development',
    subtitle: 'Modern Web Applications',
    description: 'We build scalable, performant web applications using cutting-edge technologies.',
    icon: '💻',
    features: [
      'Frontend Development',
      'Backend Architecture',
      'Database Design',
      'API Development',
      'Performance Optimization',
      'DevOps & Deployment',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    href: '/services/development',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business goals, target audience, and project requirements through detailed consultations.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'We develop a comprehensive strategy that aligns with your objectives and creates a roadmap for success.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Our design team creates beautiful, functional interfaces that provide exceptional user experiences.',
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Development',
    description:
      'We build your solution using modern technologies, ensuring scalability, performance, and maintainability.',
    icon: '⚡',
  },
  {
    step: '05',
    title: 'Testing',
    description:
      'Rigorous testing ensures your product works flawlessly across all devices and browsers.',
    icon: '🧪',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'We deploy your solution and provide ongoing support to ensure continued success.',
    icon: '🚀',
  },
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

import React from 'react';
import HeroFuturistic from '@/components/sections/services/futuristic/HeroFuturistic';
import ServicesGrid from '@/components/sections/services/futuristic/ServicesGrid';
import WorkflowTimeline from '@/components/sections/services/futuristic/WorkflowTimeline';
import TechStack from '@/components/sections/services/futuristic/TechStack';
import CaseStudies from '@/components/sections/services/futuristic/CaseStudies';
import FinalCTA from '@/components/sections/services/futuristic/FinalCTA';

// Alternative variants
// import HeroFuturisticAlt from '@/components/sections/services/futuristic/variants/HeroFuturisticAlt';
import ServicesGridAlt from '@/components/sections/services/futuristic/variants/ServicesGridAlt';
import TechStackAlt from '@/components/sections/services/futuristic/variants/TechStackAlt';
import SprintTimelineAccordion from '@/components/sections/services/futuristic/variants/SprintTimelineAccordion';
import SprintTimelineCircular from '@/components/sections/services/futuristic/variants/SprintTimelineCircular';
import SprintTimelineCards from '@/components/sections/services/futuristic/variants/SprintTimelineCards';

export default function ServicesPage() {
  // Toggle between different variants
  const useAlternativeVersions = true;

  return (
    <main className="bg-[#02021e]">
      {useAlternativeVersions ? (
        <>
          {/* <HeroFuturisticAlt /> */}
          <ServicesGridAlt />
          <SprintTimelineAccordion />
          <SprintTimelineCircular />
          <SprintTimelineCards />
          <TechStackAlt />
        </>
      ) : (
        <>
          <HeroFuturistic />
          <ServicesGrid />
          <WorkflowTimeline />
          <TechStack />
        </>
      )}
      <CaseStudies />
      <FinalCTA />
    </main>
  );
}
