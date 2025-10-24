'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  FaPaintBrush,
  FaLaptopCode,
  FaBullhorn,
  FaMobileAlt,
  FaRocket,
  FaCode,
  FaLightbulb,
  FaComments,
  FaCogs,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa';
import { servicesData, servicesArray } from '@/data/services';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';

const iconMap: Record<string, React.ReactNode> = {
  'ui-ux-design': <FaPaintBrush className="w-6 h-6 sm:w-8 sm:h-8" />,
  'web-design': <FaLaptopCode className="w-6 h-6 sm:w-8 sm:h-8" />,
  'landing-page-design': <FaBullhorn className="w-6 h-6 sm:w-8 sm:h-8" />,
  'mobile-app-design': <FaMobileAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
  'web-development': <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
  'software-development': <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />,
  'mvp-development': <FaLightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
  'chatbot-development': <FaComments className="w-6 h-6 sm:w-8 sm:h-8" />,
  'cms-development': <FaCogs className="w-6 h-6 sm:w-8 sm:h-8" />,
};

interface ServiceCardProps {
  service: any;
  index: number;
  categoryColor: string;
  glowColor: string;
  bgClass: string;
}

// Variant A: Vibrant Gradient Cards with Bold Colors
const ServiceCard = ({ service, index, categoryColor, glowColor, bgClass }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -30 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Vibrant Gradient Card */}
      <motion.div
        className="relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${glowColor}, 0.25) 0%, rgba(${glowColor}, 0.05) 100%)`,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            border: `2px solid rgba(${glowColor}, 0.3)`,
          }}
          animate={{
            borderColor: isHovered ? `rgba(${glowColor}, 0.8)` : `rgba(${glowColor}, 0.3)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Colorful Blob Background */}
        <motion.div
          className={`absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 ${bgClass} rounded-full blur-3xl opacity-30`}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with Vibrant Background */}
          <motion.div
            className="relative mb-4 sm:mb-6 inline-block"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-2xl`}
              style={{
                background: `linear-gradient(135deg, rgba(${glowColor}, 0.4), rgba(${glowColor}, 0.6))`,
                boxShadow: `0 10px 30px rgba(${glowColor}, 0.4)`,
              }}
            >
              <span className="text-white">{iconMap[service.id]}</span>
            </div>

            {/* Pulse Ring */}
            <motion.div
              className={`absolute inset-0 rounded-2xl ${bgClass}`}
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          </motion.div>

          {/* Title */}
          <Typography
            variant="h3"
            className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white flex items-center gap-2 flex-wrap"
          >
            {service.title}
            <motion.span
              className={categoryColor}
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.span>
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6"
          >
            {service.fullDescription}
          </Typography>

          {/* Features */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 + idx * 0.1 }}
                className="flex items-start gap-2 sm:gap-3"
              >
                <motion.div
                  className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center mt-0.5"
                  style={{
                    background: `rgba(${glowColor}, 0.3)`,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCheckCircle className="text-white w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </motion.div>
                <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="relative w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl overflow-hidden text-white font-medium text-sm sm:text-base"
            style={{
              background: `linear-gradient(135deg, rgba(${glowColor}, 0.5), rgba(${glowColor}, 0.7))`,
              boxShadow: `0 8px 20px rgba(${glowColor}, 0.3)`,
            }}
            whileHover={{ scale: 1.03, boxShadow: `0 12px 30px rgba(${glowColor}, 0.5)` }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex items-center justify-between">
              <span>View Details</span>
              <motion.span
                animate={{
                  x: isHovered ? [0, 5, 0] : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ServicesDetailedVariantA() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('development');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['development', 'design', 'support'].includes(tabParam)) {
      setActiveTab(tabParam);
      setTimeout(() => {
        const element = document.getElementById('services-detailed');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  const activeCategory = useMemo(() => {
    return servicesArray.find(cat => cat.id === activeTab) || servicesData.development;
  }, [activeTab]);

  const tabs = [
    {
      id: 'development',
      label: 'Development',
      icon: FaRocket,
      color: servicesData.development.glowColor,
      bgClass: servicesData.development.bgClass,
    },
    {
      id: 'design',
      label: 'Design',
      icon: FaPaintBrush,
      color: servicesData.design.glowColor,
      bgClass: servicesData.design.bgClass,
    },
    {
      id: 'support',
      label: 'Support',
      icon: FaCogs,
      color: servicesData.support.glowColor,
      bgClass: servicesData.support.bgClass,
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tabId);
    router.push(`/services?${params.toString()}`, { scroll: false });
  };

  return (
    <Section id="services-detailed" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Vibrant Gradient Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, rgba(${activeCategory.glowColor}, 0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(${activeCategory.glowColor}, 0.25), transparent 50%), linear-gradient(180deg, #0a0a14 0%, #000000 100%)`,
          }}
        />
      </AnimatePresence>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <Typography
            variant="h1"
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-6"
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            Comprehensive solutions designed to transform your digital presence
          </Typography>
        </motion.div>

        {/* Tab Navigation - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-16 px-4"
        >
          <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-2 p-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl w-full sm:w-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="relative px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabA"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(${tab.color}, 0.4), rgba(${tab.color}, 0.6))`,
                        boxShadow: `0 8px 30px rgba(${tab.color}, 0.4)`,
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-white">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{tab.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <motion.div
                className={`w-2 sm:w-3 h-12 sm:h-16 rounded-full`}
                style={{
                  background: `linear-gradient(180deg, rgba(${activeCategory.glowColor}, 1), rgba(${activeCategory.glowColor}, 0.5))`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <div>
                <Typography
                  variant="h2"
                  className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2"
                >
                  {activeCategory.title}
                </Typography>
                <Typography variant="body1" className="text-sm sm:text-xl text-gray-400">
                  {activeCategory.description}
                </Typography>
              </div>
            </div>

            {/* Services Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {activeCategory.services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  categoryColor={activeCategory.colorClass}
                  glowColor={activeCategory.glowColor}
                  bgClass={activeCategory.bgClass}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-20 px-4"
        >
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4"
          >
            Ready to get started?
          </Typography>
          <Typography variant="body1" className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
            Let's discuss how we can help bring your project to life
          </Typography>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-violet text-white font-bold text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </Container>
    </Section>
  );
}
