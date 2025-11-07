'use client';

import { motion } from 'framer-motion';
import { Typography, Container, Button, Link, ScrollReveal } from '@/components/ui';
import { HiSparkles } from 'react-icons/hi';
import { FaProjectDiagram, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';

export default function ProjectHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #2563EB 1px, transparent 1px),
                           linear-gradient(to bottom, #2563EB 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-yellow/20 rounded-full blur-3xl"
        animate={{
          x: [-36, 36, -36],
          y: [-36, 36, -36],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-8">
                <HiSparkles className="text-accent-blue" />
                <span className="text-sm font-medium text-accent-blue">Featured Case Studies</span>
              </div>

              <Typography variant="h1" className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold">
                Projects That{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-yellow bg-clip-text text-transparent">
                    Define
                  </span>
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-accent-blue/30 via-accent-purple/30 to-accent-yellow/30 -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>{' '}
                Excellence
              </Typography>

              <Typography
                variant="body1"
                className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Explore our portfolio of transformative digital solutions. Each project represents
                our commitment to innovation, quality, and measurable business impact.
              </Typography>

              {/* Stats Bar */}
              <motion.div
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <FaProjectDiagram className="text-3xl text-accent-blue" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-2">
                    150+
                  </div>
                  <div className="text-sm text-text-secondary">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <FaStar className="text-3xl text-accent-yellow" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-purple to-accent-yellow bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-sm text-text-secondary">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <FaUsers className="text-3xl text-accent-purple" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent mb-2">
                    50M+
                  </div>
                  <div className="text-sm text-text-secondary">Users Impacted</div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  <Link href="/contacts">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent-blue/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
