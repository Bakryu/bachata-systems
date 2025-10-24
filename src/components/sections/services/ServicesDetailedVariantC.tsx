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

// Variant C: Modern Glassmorphism with Colorful Gradients
const ServiceCard = ({ service, index, categoryColor, glowColor, bgClass }: ServiceCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full perspective-1000"
    >
      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute -inset-10 opacity-60"
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, rgba(${glowColor}, 0.6), transparent)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-20 sm:w-28 h-20 sm:h-28 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, rgba(${glowColor}, 0.4), transparent)`,
          }}
        />
      </motion.div>

      {/* Glass Card */}
      <motion.div
        className="relative h-full backdrop-blur-2xl rounded-3xl p-6 sm:p-8 overflow-hidden border"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 100%)`,
          borderColor: `rgba(${glowColor}, 0.2)`,
        }}
        animate={{
          borderColor: isHovered ? `rgba(${glowColor}, 0.5)` : `rgba(${glowColor}, 0.2)`,
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
      >
        {/* Dynamic Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(
              circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(${glowColor}, 0.2) 0%, 
              transparent 50%
            )`,
          }}
        />

        {/* Mesh Gradient Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(at 20% 30%, rgba(${glowColor}, 0.3) 0px, transparent 50%),
              radial-gradient(at 80% 70%, rgba(${glowColor}, 0.2) 0px, transparent 50%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with Glass Effect */}
          <motion.div
            className="relative mb-4 sm:mb-6 inline-block"
            whileHover={{ scale: 1.1, rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl backdrop-blur-xl flex items-center justify-center border shadow-2xl"
              style={{
                background: `linear-gradient(135deg, rgba(${glowColor}, 0.3), rgba(${glowColor}, 0.1))`,
                borderColor: `rgba(${glowColor}, 0.4)`,
                boxShadow: `0 8px 32px rgba(${glowColor}, 0.3)`,
              }}
            >
              <motion.span
                className="text-white"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                }}
              >
                {iconMap[service.id]}
              </motion.span>
            </div>

            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full"
                style={{
                  background: `rgb(${glowColor})`,
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * 2 * Math.PI) / 3) * 40, 0],
                  y: [0, Math.sin((i * 2 * Math.PI) / 3) * 40, 0],
                  opacity: isHovered ? [0, 1, 0] : 0,
                  scale: isHovered ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Title with Gradient */}
          <div className="mb-2 sm:mb-3">
            <Typography
              variant="h3"
              className="text-lg sm:text-xl font-bold flex items-center gap-2 flex-wrap"
              style={{
                background: `linear-gradient(135deg, white 0%, rgba(${glowColor}, 1) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {service.title}
              <motion.span
                animate={{
                  rotate: [0, 360],
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 0.3 },
                }}
              >
                <FaStar className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: `rgb(${glowColor})` }} />
              </motion.span>
            </Typography>
          </div>

          {/* Description */}
          <Typography
            variant="body1"
            className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6"
          >
            {service.fullDescription}
          </Typography>

          {/* Features with Glass Bullets */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07 + idx * 0.1 }}
                className="flex items-start gap-2 sm:gap-3 group/item"
              >
                <motion.div
                  className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg backdrop-blur-xl flex items-center justify-center border mt-0.5"
                  style={{
                    background: `linear-gradient(135deg, rgba(${glowColor}, 0.3), rgba(${glowColor}, 0.1))`,
                    borderColor: `rgba(${glowColor}, 0.4)`,
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    boxShadow: `0 0 20px rgba(${glowColor}, 0.6)`,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCheckCircle
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    style={{ color: `rgb(${glowColor})` }}
                  />
                </motion.div>
                <span className="text-xs sm:text-sm text-gray-300 group-hover/item:text-white transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Glass CTA Button */}
          <motion.button
            className="relative w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl overflow-hidden backdrop-blur-xl border font-medium text-sm sm:text-base"
            style={{
              background: `linear-gradient(135deg, rgba(${glowColor}, 0.3), rgba(${glowColor}, 0.1))`,
              borderColor: `rgba(${glowColor}, 0.4)`,
              color: 'white',
            }}
            whileHover={{
              scale: 1.03,
              background: `linear-gradient(135deg, rgba(${glowColor}, 0.4), rgba(${glowColor}, 0.2))`,
              boxShadow: `0 8px 32px rgba(${glowColor}, 0.4)`,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)`,
              }}
              animate={{
                x: isHovered ? [-200, 200] : -200,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

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

        {/* Reflection Effect */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-10"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function ServicesDetailedVariantC() {
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
    },
    {
      id: 'design',
      label: 'Design',
      icon: FaPaintBrush,
      color: servicesData.design.glowColor,
    },
    {
      id: 'support',
      label: 'Support',
      icon: FaCogs,
      color: servicesData.support.glowColor,
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
      {/* Animated Mesh Gradient Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(${activeCategory.glowColor}, 0.3) 0px, transparent 50%),
              radial-gradient(at 50% 0%, rgba(${activeCategory.glowColor}, 0.2) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(${activeCategory.glowColor}, 0.25) 0px, transparent 50%),
              radial-gradient(at 0% 50%, rgba(${activeCategory.glowColor}, 0.15) 0px, transparent 50%),
              radial-gradient(at 100% 50%, rgba(${activeCategory.glowColor}, 0.2) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(${activeCategory.glowColor}, 0.25) 0px, transparent 50%),
              radial-gradient(at 50% 100%, rgba(${activeCategory.glowColor}, 0.3) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(${activeCategory.glowColor}, 0.2) 0px, transparent 50%),
              linear-gradient(180deg, #050510 0%, #000000 100%)
            `,
          }}
        />
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 sm:w-64 h-32 sm:h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(${activeCategory.glowColor}, 0.15), transparent 70%)`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            style={{
              background: `linear-gradient(135deg, white 0%, rgba(${activeCategory.glowColor}, 1) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <Typography
              variant="h1"
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-6"
            >
              Our Services
            </Typography>
          </motion.div>
          <Typography
            variant="body1"
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            Beautiful solutions crafted with precision and care
          </Typography>
        </motion.div>

        {/* Glass Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-16 px-4"
        >
          <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-2 p-2 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl w-full sm:w-auto shadow-2xl">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="relative px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabC"
                      className="absolute inset-0 backdrop-blur-xl rounded-xl border"
                      style={{
                        background: `linear-gradient(135deg, rgba(${tab.color}, 0.3), rgba(${tab.color}, 0.1))`,
                        borderColor: `rgba(${tab.color}, 0.4)`,
                        boxShadow: `0 8px 32px rgba(${tab.color}, 0.3)`,
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
                className="w-2 sm:w-3 h-12 sm:h-16 rounded-full backdrop-blur-xl border"
                style={{
                  background: `linear-gradient(180deg, rgba(${activeCategory.glowColor}, 0.8), rgba(${activeCategory.glowColor}, 0.4))`,
                  borderColor: `rgba(${activeCategory.glowColor}, 0.6)`,
                  boxShadow: `0 0 30px rgba(${activeCategory.glowColor}, 0.5)`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <div>
                <Typography
                  variant="h2"
                  className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2"
                  style={{
                    background: `linear-gradient(135deg, white 0%, rgba(${activeCategory.glowColor}, 1) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {activeCategory.title}
                </Typography>
                <Typography variant="body1" className="text-sm sm:text-xl text-gray-300">
                  {activeCategory.description}
                </Typography>
              </div>
            </div>

            {/* Services Grid */}
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
          <Typography variant="body1" className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
            Transform your vision into reality
          </Typography>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl backdrop-blur-xl font-bold border text-sm sm:text-base"
            style={{
              background: `linear-gradient(135deg, rgba(${activeCategory.glowColor}, 0.4), rgba(${activeCategory.glowColor}, 0.2))`,
              borderColor: `rgba(${activeCategory.glowColor}, 0.5)`,
              color: 'white',
              boxShadow: `0 8px 32px rgba(${activeCategory.glowColor}, 0.3)`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 12px 48px rgba(${activeCategory.glowColor}, 0.5)`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </Container>
    </Section>
  );
}
