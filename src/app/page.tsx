'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

// Lazy load the 3D component for better performance
const Hero3D = lazy(() => import('@/components/three/Hero3D'));

// Trusted companies logos (placeholder)
const trustedCompanies = [
  'TechCorp', 'StartupX', 'InnovateLab', 'DigitalFlow', 'CloudSync', 'DataVision'
];

// Services preview
const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: '🚀',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates meaningful and delightful experiences.',
    icon: '🎨',
  },
  {
    title: 'Startup MVP',
    description: 'Rapid prototyping and development to validate your business ideas.',
    icon: '💡',
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your digital products running smoothly.',
    icon: '🛠️',
  },
];

// Featured projects
const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced analytics and user experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'SaaS Dashboard',
    description: 'Comprehensive dashboard for data visualization and business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience with modern design.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    tags: ['React Native', 'TypeScript', 'AWS'],
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup',
    company: 'TechStartup Inc.',
    content: 'HaloAgency transformed our vision into a stunning digital product. Their attention to detail and technical expertise exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLab',
    content: 'Working with HaloAgency was a game-changer. They delivered a scalable solution that helped us grow our user base by 300%.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background 3D Scene */}
        <div className="absolute inset-0 hidden md:block">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50" />}>
            <Hero3D />
          </Suspense>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-950 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Build{' '}
              <span className="text-gradient">Web Experiences</span>
              {' '}That Matter
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-charcoal-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're a creative digital agency helping startups and enterprises 
              build exceptional web experiences that drive results and inspire users.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedCTA href="/contact" size="lg">
                Start Your Project
              </AnimatedCTA>
              <AnimatedCTA href="/projects" variant="outline" size="lg">
                View Our Work
              </AnimatedCTA>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="w-6 h-10 border-2 border-charcoal-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-charcoal-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-charcoal-600 text-lg">Trusted by innovative companies</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {trustedCompanies.map((company, index) => (
                <motion.div
                  key={company}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-12 flex items-center justify-center">
                    <span className="text-charcoal-400 font-semibold text-lg">{company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                We offer comprehensive digital solutions to help your business thrive in the digital landscape.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-600">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <AnimatedCTA href="/services" variant="outline">
                View All Services
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Discover some of our recent work and the impact we've made for our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <motion.div
                  className="card overflow-hidden group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal-950 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <AnimatedCTA href="/projects" variant="outline">
                View All Projects
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.2}>
                <motion.div
                  className="card p-8"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-charcoal-950">{testimonial.name}</h4>
                      <p className="text-charcoal-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-charcoal-700 italic">"{testimonial.content}"</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's work together to create something amazing. Get in touch with us today 
              and let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedCTA href="/contact" variant="secondary" size="lg">
                Get Started Today
              </AnimatedCTA>
              <AnimatedCTA href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Pricing
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
