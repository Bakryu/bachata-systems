'use client';

import { motion } from 'framer-motion';
import { Container, Typography, Button } from '@/components/ui';
import { FaBook, FaLightbulb, FaRocket, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

export default function ResourcesHero() {
  const stats = [
    { value: '50+', label: 'Articles', icon: FaBook },
    { value: '20+', label: 'Free Resources', icon: FaDownload },
    { value: '15+', label: 'Tools & Guides', icon: FaRocket },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-brand-violet/5 to-brand-blue/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-violet/10 via-transparent to-transparent" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating icons */}
        <motion.div
          className="absolute top-20 left-[15%] text-4xl opacity-10"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          📚
        </motion.div>
        <motion.div
          className="absolute top-40 right-[20%] text-4xl opacity-10"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          💡
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[25%] text-4xl opacity-10"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          🚀
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-violet/10 border border-brand-violet/30 rounded-full mb-6"
            >
              <HiSparkles className="text-brand-violet" />
              <span className="text-brand-violet font-semibold text-sm">Knowledge Hub</span>
            </motion.div>

            {/* Heading */}
            <Typography variant="h1" className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Resources &{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-gold via-brand-violet to-brand-pink bg-clip-text text-transparent">
                  Insights
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-gold/20 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Discover valuable insights, tools, and resources to help you build better digital
              experiences and grow your business.
            </Typography>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <motion.button
                onClick={() => scrollToSection('articles')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-violet hover:from-brand-violet hover:to-brand-gold text-white font-bold text-lg rounded-2xl shadow-xl shadow-brand-gold/30 hover:shadow-brand-violet/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBook className="text-xl" />
                <span>Browse Articles</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('resources')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-background-secondary hover:bg-background-secondary/80 border-2 border-border-subtle hover:border-brand-gold text-text-primary font-bold text-lg rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-xl" />
                <span>Free Resources</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold via-brand-violet to-brand-blue opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl" />

                {/* Card */}
                <div className="relative bg-background-secondary/80 backdrop-blur-sm p-6 rounded-2xl border border-border-subtle group-hover:border-brand-gold/50 transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-violet/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-2xl text-brand-gold" />
                  </div>

                  {/* Value */}
                  <Typography
                    variant="h2"
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-gold to-brand-violet bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </Typography>

                  {/* Label */}
                  <Typography variant="body2" color="secondary" className="font-medium">
                    {stat.label}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
