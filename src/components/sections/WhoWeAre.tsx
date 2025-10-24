'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaPalette, FaRocket } from 'react-icons/fa';
import { Section, Container, Typography, ScrollReveal } from '@/components/ui';

const expertiseAreas = [
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technologies and creative solutions',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    borderClass: 'border-brand-gold',
  },
  {
    icon: <FaPalette />,
    title: 'Design',
    description: 'Crafting beautiful, intuitive interfaces that users love',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    borderClass: 'border-brand-violet',
  },
  {
    icon: <FaRocket />,
    title: 'Performance',
    description: 'Building fast, scalable solutions that drive real business results',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue',
    borderClass: 'border-brand-blue',
  },
];

export default function WhoWeAre() {
  return (
    <Section variant="default" padding="xl" className="relative overflow-hidden">
      {/* Background Abstract Visuals */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                className="text-brand-gold mb-4 tracking-wider uppercase"
              >
                About Us
              </Typography>
              <Typography variant="h2" className="mb-6">
                Who We Are
              </Typography>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          {/* Text Content */}
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Typography variant="body1" className="text-text-secondary text-lg leading-relaxed">
                We are a{' '}
                <span className="text-brand-gold font-semibold">forward-thinking web studio</span>{' '}
                that has been crafting digital experiences since{' '}
                <span className="text-brand-gold font-semibold">2020</span>. Our team has
                successfully delivered{' '}
                <span className="text-brand-violet font-semibold">2 global-scale products</span>,
                and we're now expanding to partner with startups and businesses of all sizes.
              </Typography>

              <Typography variant="body1" className="text-text-secondary text-lg leading-relaxed">
                We combine{' '}
                <span className="text-brand-blue font-semibold">technical expertise</span> with{' '}
                <span className="text-brand-violet font-semibold">creative insight</span> to build
                products that are not only functional but truly impactful — helping businesses grow,
                connect, and stand out in the digital space.
              </Typography>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <Typography variant="h3" className="text-brand-gold mb-2">
                    5+
                  </Typography>
                  <Typography variant="body2" className="text-text-muted">
                    Years
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <Typography variant="h3" className="text-brand-violet mb-2">
                    2
                  </Typography>
                  <Typography variant="body2" className="text-text-muted">
                    Global Products
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <Typography variant="h3" className="text-brand-blue mb-2">
                    Now
                  </Typography>
                  <Typography variant="body2" className="text-text-muted">
                    Expanding
                  </Typography>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Visual Element */}
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-gold/10 via-brand-violet/10 to-brand-blue/10 border border-border-subtle backdrop-blur-sm">
                {/* Abstract Geometric Shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-48 h-48 border-4 border-brand-gold/30 rounded-full"
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-64 h-64 border-4 border-brand-violet/20"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  />
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute w-32 h-32 bg-brand-blue/20 rounded-lg rotate-45"
                  />
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(240,185,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(240,185,11,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-brand-gold text-background px-6 py-3 rounded-full shadow-lg shadow-brand-gold/30 backdrop-blur-sm border border-brand-gold/20"
              >
                <Typography variant="body2" className="font-bold text-sm">
                  Since 2020
                </Typography>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => (
            <ScrollReveal key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group bg-background-secondary border ${area.borderClass} border-opacity-20 rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-opacity-50 hover:shadow-xl hover:shadow-current`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 ${area.bgClass} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${area.bgClass} bg-opacity-20 ${area.borderClass} border-2 ${area.colorClass} text-2xl md:text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {area.icon}
                </div>

                {/* Content */}
                <Typography variant="h4" className="mb-3 text-text-primary">
                  {area.title}
                </Typography>
                <Typography variant="body2" className="text-text-secondary leading-relaxed">
                  {area.description}
                </Typography>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className={`absolute bottom-6 right-6 ${area.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
