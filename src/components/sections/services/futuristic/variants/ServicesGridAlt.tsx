import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography } from '@/components/ui';

export default function ServicesGridAlt() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building modern, responsive websites with cutting-edge technologies',
      icon: '💻',
      color: '#F0B90B',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences',
      icon: '🎨',
      color: '#2563EB',
    },
    {
      title: 'E-commerce',
      description: 'Developing scalable online shopping solutions',
      icon: '🛍️',
      color: '#8B5CF6',
    },
    {
      title: 'Web Apps',
      description: 'Building powerful progressive web applications',
      icon: '⚡',
      color: '#F0B90B',
    },
    {
      title: 'Optimization',
      description: 'Improving performance and search engine rankings',
      icon: '📊',
      color: '#2563EB',
    },
    {
      title: 'Maintenance',
      description: 'Providing ongoing support and updates',
      icon: '🔧',
      color: '#8B5CF6',
    },
  ];

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <pattern id="grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="url(#gradient)" strokeWidth="0.5" />
          </pattern>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0B90B" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
              OUR EXPERTISE
            </Typography>
            <Typography variant="h2" className="mb-6 text-white text-center">
              Services that Drive Innovation
            </Typography>
            <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto text-center">
              Discover our comprehensive range of web development services designed to transform
              your digital presence.
            </Typography>
          </motion.div>
        </div>

        <div className="relative">
          {/* Hexagonal grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Hexagon shape */}
                <div className="absolute inset-0 transform -skew-x-12">
                  <div
                    className="w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${service.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Glowing border */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-50 blur transition duration-300 scale-[1.05] transform -skew-x-12"
                  style={{
                    background: `linear-gradient(45deg, ${service.color}, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-8 h-full">
                  <div className="mb-4 text-3xl">{service.icon}</div>
                  <Typography
                    variant="h4"
                    className="mb-3 text-white group-hover:text-[#F0B90B] transition-colors duration-300"
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    {service.description}
                  </Typography>

                  {/* Animated line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
                    style={{
                      background: `linear-gradient(to right, ${service.color}, transparent)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            style={{ mask: 'url(#mask)', WebkitMask: 'url(#mask)' }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0B90B" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <g stroke="url(#lineGradient)" strokeWidth="1" fill="none">
              <motion.path
                d="M 100 100 L 300 200 L 500 100 L 700 200"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M 200 300 L 400 400 L 600 300"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </g>
          </svg>
        </div>
      </Container>
    </Section>
  );
}
