import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography, Button } from '@/components/ui';

export default function FinalCTA() {
  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#F0B90B] via-[#2563EB] to-[#8B5CF6] blur-[128px] animate-slow-spin" />
        </div>
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Typography variant="h1" className="mb-8 text-white font-extrabold leading-tight">
            Let's Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B90B] to-[#2563EB]">
              Something Great
            </span>{' '}
            Together
          </Typography>
          <Typography variant="body1" className="mb-12 text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create something extraordinary that sets
            you apart from the competition.
          </Typography>

          {/* CTA Button with glow effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300" />
            <Button
              size="xl"
              className="relative bg-gradient-to-r from-[#F0B90B] to-[#2563EB] text-white font-bold py-6 px-12 text-lg"
            >
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
