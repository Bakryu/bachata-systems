import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography, Button } from '@/components/ui';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
    <div className="relative bg-[#02021e]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
      <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-r from-[#F0B90B] to-[#2563EB] p-[1px]">
        <div className="w-full h-full rounded-xl bg-[#02021e] flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <Typography variant="h4" className="mb-3 text-white">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-400 mb-6">
        {description}
      </Typography>
      <Button
        variant="ghost"
        className="text-[#F0B90B] hover:text-[#2563EB] transition-colors duration-300"
      >
        Learn More →
      </Button>
    </div>
  </motion.div>
);

export default function ServicesGrid() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies and best practices.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging digital experiences.',
    },
    {
      icon: '🛍️',
      title: 'E-commerce',
      description: 'Scalable online stores with seamless checkout and powerful management tools.',
    },
    {
      icon: '⚡',
      title: 'Web Apps',
      description: 'Progressive web applications that work across all devices and platforms.',
    },
    {
      icon: '📊',
      title: 'Optimization',
      description: 'Performance optimization and SEO to maximize your web presence.',
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Ongoing support and updates to keep your website running smoothly.',
    },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] top-0 left-1/4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] blur-[128px]" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
            OUR SERVICES
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Comprehensive Digital Solutions
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end web development services to help your
            business thrive in the digital world.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
