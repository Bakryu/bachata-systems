'use client';
import { Suspense, lazy } from 'react';

import { motion } from 'framer-motion';
import { Typography, Section, Container, Card, Button, ScrollReveal } from '@/components/ui';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import WhoWeAre from '@/components/sections/WhoWeAre';
import WebDevSteps from '@/components/sections/WebDevSteps';

import FeaturedProjectsShowcase from '@/components/sections/FeaturedProjectsShowcase';
import ServicesPreview from '@/components/sections/ServicesPreview';

// Lazy load the Matrix component for better performance
const MatrixHero = lazy(() => import('@/components/three/MatrixHero'));

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section
        component="section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        padding="none"
        noContainer
      >
        {/* Background Matrix Animation */}
        <div className="absolute inset-0">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-background to-background-secondary" />
            }
          >
            <MatrixHero />
          </Suspense>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto backdrop-blur-sm bg-background/10 rounded-2xl p-8 md:p-12 border border-border-subtle/20 shadow-2xl shadow-black/20"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h1" align="center" className="mb-6">
                  We Build <span className="text-gradient">Web Experiences</span> That Matter
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  color="secondary"
                  align="center"
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                >
                  We&apos;re a creative digital agency helping startups and enterprises build
                  exceptional web experiences that drive results and inspire users.
                </Typography>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button variant="primary" size="lg" animated>
                  <a href="/contact">Start Your Project</a>
                </Button>
                <Button variant="outline" size="lg" animated>
                  <a href="/projects">View Our Work</a>
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </Section>

      <TrustedCompanies />

      <WhoWeAre />

      <ServicesPreview />

      <WebDevSteps />

      <FeaturedProjectsShowcase />

      {/* CTA Section */}
      <Section variant="gradient" className="text-text-primary" padding="lg">
        <ScrollReveal>
          <div className="text-center">
            <Typography variant="h2" align="center" className="mb-4 text-text-primary">
              Ready to Start Your Project?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-text-primary"
            >
              Let&apos;s work together to create something amazing. Get in touch with us today and
              let&apos;s discuss how we can help bring your vision to life.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <a href="/contact">Get Started Today</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-text-primary text-text-primary hover:bg-text-primary hover:text-background"
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
