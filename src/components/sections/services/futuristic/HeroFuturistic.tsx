import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography, Button } from '@/components/ui';

export default function HeroFuturistic() {
  return (
    <Section
      variant="default"
      padding="xl"
      className="min-h-screen bg-[#02021e] relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-24 rounded-full bg-gradient-to-r from-[#F0B90B] to-[#2563EB] blur-[128px]" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -left-24 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] blur-[128px]" />
      </div>

      {/* Main content */}
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
              WEB DEVELOPMENT STUDIO
            </Typography>
            <Typography variant="h1" className="mb-6 text-white font-extrabold leading-tight">
              Crafting Web{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B90B] to-[#2563EB]">
                Experiences
              </span>{' '}
              That Convert
            </Typography>
            <Typography variant="body1" className="mb-8 text-gray-400 max-w-xl">
              We blend cutting-edge technology with creative design to build digital solutions that
              drive growth and engagement. Experience the future of web development.
            </Typography>
            <div className="flex gap-4 items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F0B90B] to-[#2563EB] hover:from-[#2563EB] hover:to-[#8B5CF6] transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#02021e]/80 to-[#02021e]/40 backdrop-blur-xl border border-white/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0B90B]/10 to-[#2563EB]/10" />
              <div className="relative z-10">
                {/* Add your 3D or animated visual here */}
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#F0B90B]/20 to-[#2563EB]/20 animate-float" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-3xl opacity-10 blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
