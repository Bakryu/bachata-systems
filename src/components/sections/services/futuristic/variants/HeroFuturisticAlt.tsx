'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography, Button } from '@/components/ui';

export default function HeroFuturisticAlt() {
  return (
    <Section
      variant="default"
      padding="xl"
      className="min-h-screen bg-[#02021e] relative overflow-hidden"
    >
      {/* Dynamic grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.2 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 2,
              }}
              className="bg-gradient-to-br from-[#F0B90B]/10 to-[#2563EB]/10 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => {
          const [mounted, setMounted] = React.useState(false);
          const [animateProps, setAnimateProps] = React.useState({
            x: 0,
            y: 0,
            rotate: 0,
          });

          React.useEffect(() => {
            setMounted(true);
            if (typeof window !== 'undefined') {
              setAnimateProps({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 360,
              });
            }
          }, []);

          if (!mounted) return null;

          return (
            <motion.div
              key={i}
              initial={{ x: animateProps.x, y: animateProps.y, rotate: 0 }}
              animate={animateProps}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-32 h-32 bg-gradient-to-br from-[#F0B90B]/5 to-[#2563EB]/5 rounded-full blur-xl"
            />
          );
        })}
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Animated text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="overline"
              className="text-[#F0B90B] mb-4 tracking-widest relative inline-block"
            >
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-[#F0B90B]/20 to-[#2563EB]/20 blur"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              FUTURE OF WEB DEVELOPMENT
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mb-8"
          >
            <Typography variant="h1" className="text-white font-black tracking-tight">
              <span className="relative inline-block">
                Transforming
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F0B90B] to-[#2563EB]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B90B] via-[#2563EB] to-[#8B5CF6]">
                Ideas
              </span>{' '}
              into Digital Reality
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mb-12"
          >
            <Typography variant="body1" className="text-gray-400">
              We craft immersive digital experiences that push the boundaries of what's possible on
              the web. Experience the future of web development.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-x-4"
          >
            <Button size="lg" className="relative group">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#F0B90B] to-[#2563EB] rounded-lg opacity-50 group-hover:opacity-100 blur transition-opacity"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative">Start Your Journey</span>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="border border-[#2563EB]/30 text-[#2563EB] hover:bg-[#2563EB]/10"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
