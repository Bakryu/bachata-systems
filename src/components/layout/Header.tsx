'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from '../ui/Link';
import { Logo } from '../Logo';
import { Typography } from '../ui';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Dedicated Team', href: '/dedicated-team/' },
  { name: 'Resources', href: '/resources/' },
  { name: 'Pricing', href: '/pricing/' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-lg "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <AnimatedLogo variant="bladeWave" className="text-brand-gold w-12 h-12" /> */}
            <Logo className="text-brand-gold w-12 h-12" />
            <Typography
              variant="h4"
              className="text-brand-gold font-orbitron font-black tracking-wide"
            >
              SoftKerr
            </Typography>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-accent-yellow'
                    : 'text-text-secondary hover:text-accent-yellow'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-yellow"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block ml-4">
            {/* Variant 2: Glassmorphic Button with Orbiting Dots */}
            <Link
              href="/contacts"
              className="group relative inline-flex items-center px-7 py-2 font-semibold text-text-primary bg-background-secondary/60 backdrop-blur-md rounded-2xl shadow-xl border border-brand-gold/60 hover:border-brand-gold transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              }}
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="drop-shadow-lg">Contact Us</span>
                {/* <AnimatedLogo variant="pulse" className="text-brand-gold w-8 h-8" /> */}
              </span>
              {/* Glass shine */}
              <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                <span className="absolute left-[-60%] top-0 w-1/2 h-full bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0 opacity-60 animate-shine3d" />
              </span>
              <style jsx>{`
                @keyframes shine3d {
                  0% {
                    left: -60%;
                  }
                  100% {
                    left: 120%;
                  }
                }
                .animate-shine3d {
                  animation: shine3d 2.5s linear infinite;
                }
              `}</style>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-accent-yellow transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                className="w-6 h-0.5 bg-current block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 2 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current block mt-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current block mt-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -2 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden"
          initial={false}
          animate={isMobileMenuOpen ? 'open' : 'closed'}
          variants={{
            open: { height: 'auto', opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="py-4 space-y-4 border-t border-border-subtle">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-accent-yellow'
                    : 'text-text-secondary hover:text-accent-yellow'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact" className="w-full">
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
