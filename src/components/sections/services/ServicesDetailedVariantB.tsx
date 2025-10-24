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

// Variant B: Neon Cyberpunk Style with Intense Glows
const ServiceCard = ({ service, index, categoryColor, glowColor, bgClass }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Neon Glow Effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl"
        style={{
          background: `linear-gradient(135deg, rgba(${glowColor}, 0.6), rgba(${glowColor}, 0.3))`,
        }}
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Card with Neon Border */}
      <motion.div
        className="relative h-full bg-black rounded-3xl p-6 sm:p-8 overflow-hidden"
        style={{
          boxShadow: isHovered
            ? `0 0 40px rgba(${glowColor}, 0.6), inset 0 0 20px rgba(${glowColor}, 0.1)`
            : `0 0 20px rgba(${glowColor}, 0.3)`,
        }}
        animate={{
          borderColor: isHovered ? `rgba(${glowColor}, 1)` : `rgba(${glowColor}, 0.5)`,
        }}
      >
        {/* Animated Border */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect
            className="w-full h-full"
            fill="none"
            stroke={`rgba(${glowColor}, 0.8)`}
            strokeWidth="2"
            rx="24"
            ry="24"
            strokeDasharray={isHovered ? '1000' : '20 20'}
            strokeDashoffset="0"
            style={{
              animation: isHovered ? 'dash 20s linear infinite' : 'none',
            }}
          />
        </svg>

        {/* Scanline Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
            backgroundSize: '100% 4px',
          }}
          animate={{
            y: isHovered ? [-100, 100] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Neon Icon */}
          <motion.div
            className="relative mb-4 sm:mb-6 inline-block"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border-2"
              style={{
                borderColor: `rgba(${glowColor}, 0.8)`,
                boxShadow: `0 0 30px rgba(${glowColor}, 0.6), inset 0 0 20px rgba(${glowColor}, 0.2)`,
                background: `rgba(${glowColor}, 0.1)`,
              }}
            >
              <motion.span
                className="text-white"
                animate={{
                  filter: isHovered
                    ? `drop-shadow(0 0 10px rgba(${glowColor}, 1))`
                    : 'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
                }}
              >
                {iconMap[service.id]}
              </motion.span>
            </motion.div>

            {/* Corner Accents */}
            {[0, 90, 180, 270].map((rotation, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 sm:w-4 sm:h-4"
                style={{
                  top: rotation === 0 || rotation === 90 ? -2 : 'auto',
                  bottom: rotation === 180 || rotation === 270 ? -2 : 'auto',
                  left: rotation === 0 || rotation === 270 ? -2 : 'auto',
                  right: rotation === 90 || rotation === 180 ? -2 : 'auto',
                  borderTop:
                    rotation === 0 || rotation === 90 ? `2px solid rgba(${glowColor}, 1)` : 'none',
                  borderLeft:
                    rotation === 0 || rotation === 270 ? `2px solid rgba(${glowColor}, 1)` : 'none',
                  borderRight:
                    rotation === 90 || rotation === 180
                      ? `2px solid rgba(${glowColor}, 1)`
                      : 'none',
                  borderBottom:
                    rotation === 180 || rotation === 270
                      ? `2px solid rgba(${glowColor}, 1)`
                      : 'none',
                }}
                animate={{
                  opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Title with Neon Glow */}
          <Typography
            variant="h3"
            className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2 flex-wrap"
            style={{
              color: 'white',
              textShadow: isHovered ? `0 0 20px rgba(${glowColor}, 0.8)` : 'none',
            }}
          >
            {service.title}
            <motion.span
              animate={{
                rotate: [0, 360],
                scale: isHovered ? [1, 1.3, 1] : 1,
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1 },
              }}
              style={{
                filter: `drop-shadow(0 0 8px rgba(${glowColor}, 1))`,
              }}
            >
              <FaStar className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: `rgb(${glowColor})` }} />
            </motion.span>
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6"
          >
            {service.fullDescription}
          </Typography>

          {/* Features with Neon Bullets */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 + idx * 0.1 }}
                className="flex items-start gap-2 sm:gap-3 group/feature"
              >
                <motion.div
                  className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center border mt-0.5"
                  style={{
                    borderColor: `rgba(${glowColor}, 0.6)`,
                    background: `rgba(${glowColor}, 0.1)`,
                    boxShadow: `0 0 10px rgba(${glowColor}, 0.3)`,
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0 0 20px rgba(${glowColor}, 0.8)`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    style={{ color: `rgb(${glowColor})` }}
                  />
                </motion.div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover/feature:text-white transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Neon CTA Button */}
          <motion.button
            className="relative w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl overflow-hidden border-2 font-medium text-sm sm:text-base"
            style={{
              borderColor: `rgba(${glowColor}, 0.8)`,
              background: `rgba(${glowColor}, 0.1)`,
              color: 'white',
              boxShadow: `0 0 20px rgba(${glowColor}, 0.4)`,
            }}
            whileHover={{
              background: `rgba(${glowColor}, 0.2)`,
              boxShadow: `0 0 40px rgba(${glowColor}, 0.8)`,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button Glow Animation */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(${glowColor}, 0.5), transparent)`,
              }}
              animate={{
                x: isHovered ? [-200, 200] : -200,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
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
      </motion.div>
    </motion.div>
  );
};

export default function ServicesDetailedVariantB() {
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
    <Section variant="default" padding="xl" className="relative overflow-hidden">
      {/* Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${activeCategory.glowColor}, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${activeCategory.glowColor}, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Neon Glow Accents */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(${activeCategory.glowColor}, 0.4), transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(${activeCategory.glowColor}, 0.3), transparent 70%)`,
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <Container className="relative z-10">
        {/* Header with Neon Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <Typography
            variant="h1"
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-6"
            style={{
              color: 'white',
              textShadow: `0 0 30px rgba(${activeCategory.glowColor}, 0.8), 0 0 60px rgba(${activeCategory.glowColor}, 0.4)`,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            Cutting-edge solutions powered by modern technology
          </Typography>
        </motion.div>

        {/* Neon Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-16 px-4"
        >
          <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="relative px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border-2 text-sm sm:text-base"
                  style={{
                    borderColor: isActive ? `rgba(${tab.color}, 1)` : `rgba(${tab.color}, 0.3)`,
                    background: isActive ? `rgba(${tab.color}, 0.1)` : 'transparent',
                    boxShadow: isActive ? `0 0 30px rgba(${tab.color}, 0.6)` : 'none',
                    color: 'white',
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 0 40px rgba(${tab.color}, 0.8)`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
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
                className="w-2 sm:w-3 h-12 sm:h-16 rounded-full"
                style={{
                  background: `rgb(${activeCategory.glowColor})`,
                  boxShadow: `0 0 30px rgba(${activeCategory.glowColor}, 0.8)`,
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
                    color: 'white',
                    textShadow: `0 0 20px rgba(${activeCategory.glowColor}, 0.6)`,
                  }}
                >
                  {activeCategory.title}
                </Typography>
                <Typography variant="body1" className="text-sm sm:text-xl text-gray-400">
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
            className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
            style={{
              color: 'white',
              textShadow: `0 0 20px rgba(${activeCategory.glowColor}, 0.6)`,
            }}
          >
            Ready to get started?
          </Typography>
          <Typography variant="body1" className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
            Let's create something extraordinary together
          </Typography>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border-2 text-sm sm:text-base"
            style={{
              borderColor: `rgb(${activeCategory.glowColor})`,
              background: `rgba(${activeCategory.glowColor}, 0.1)`,
              color: 'white',
              boxShadow: `0 0 30px rgba(${activeCategory.glowColor}, 0.5)`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 50px rgba(${activeCategory.glowColor}, 0.8)`,
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
