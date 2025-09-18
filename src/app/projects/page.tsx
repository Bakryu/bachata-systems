'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

const categories = ['All', 'Web Development', 'UI/UX Design', 'E-commerce', 'Mobile App'];

const projects = [
  {
    id: 1,
    title: 'TechFlow E-commerce Platform',
    category: 'E-commerce',
    description: 'A modern e-commerce platform with advanced analytics, inventory management, and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    results: {
      metric1: { value: '300%', label: 'Sales Increase' },
      metric2: { value: '45%', label: 'Conversion Rate' },
      metric3: { value: '2.1s', label: 'Load Time' }
    },
    client: 'TechFlow Inc.',
    year: '2024',
    link: '/projects/techflow-ecommerce'
  },
  {
    id: 2,
    title: 'HealthCare Dashboard',
    category: 'Web Development',
    description: 'Comprehensive healthcare management system with patient tracking, appointment scheduling, and analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    results: {
      metric1: { value: '85%', label: 'Time Saved' },
      metric2: { value: '99.9%', label: 'Uptime' },
      metric3: { value: '500+', label: 'Daily Users' }
    },
    client: 'MedTech Solutions',
    year: '2024',
    link: '/projects/healthcare-dashboard'
  },
  {
    id: 3,
    title: 'FinanceApp Mobile Banking',
    category: 'Mobile App',
    description: 'Secure and intuitive mobile banking application with biometric authentication and real-time transactions.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    technologies: ['React Native', 'TypeScript', 'AWS', 'Blockchain'],
    results: {
      metric1: { value: '4.8★', label: 'App Store Rating' },
      metric2: { value: '1M+', label: 'Downloads' },
      metric3: { value: '0.01%', label: 'Error Rate' }
    },
    client: 'FinanceApp Ltd.',
    year: '2023',
    link: '/projects/financeapp-mobile'
  },
  {
    id: 4,
    title: 'EduLearn Platform',
    category: 'UI/UX Design',
    description: 'Educational platform redesign focusing on user experience and accessibility for students of all ages.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
    results: {
      metric1: { value: '60%', label: 'Engagement Increase' },
      metric2: { value: '40%', label: 'Task Completion' },
      metric3: { value: '95%', label: 'User Satisfaction' }
    },
    client: 'EduLearn Academy',
    year: '2023',
    link: '/projects/edulearn-platform'
  },
  {
    id: 5,
    title: 'RestaurantPro Management',
    category: 'Web Development',
    description: 'Complete restaurant management system with POS integration, inventory tracking, and staff scheduling.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Express.js', 'MySQL', 'Redis'],
    results: {
      metric1: { value: '50%', label: 'Order Processing Speed' },
      metric2: { value: '30%', label: 'Cost Reduction' },
      metric3: { value: '25%', label: 'Revenue Increase' }
    },
    client: 'RestaurantPro Chain',
    year: '2023',
    link: '/projects/restaurantpro-management'
  },
  {
    id: 6,
    title: 'FashionHub E-store',
    category: 'E-commerce',
    description: 'Luxury fashion e-commerce platform with AR try-on features and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    technologies: ['React', 'GraphQL', 'Shopify', 'AR.js'],
    results: {
      metric1: { value: '200%', label: 'Mobile Sales' },
      metric2: { value: '35%', label: 'Return Rate Reduction' },
      metric3: { value: '4.9★', label: 'Customer Rating' }
    },
    client: 'FashionHub Boutique',
    year: '2024',
    link: '/projects/fashionhub-estore'
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6">
                Our{' '}
                <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                Discover our portfolio of successful projects and the impact we've made 
                for businesses across various industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedCTA href="/contact" size="lg">
                  Start Your Project
                </AnimatedCTA>
                <AnimatedCTA href="/services" variant="outline" size="lg">
                  Our Services
                </AnimatedCTA>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-16 lg:top-20 z-40 border-b border-charcoal-200">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <AnimatedCTA variant="secondary" size="sm" className="w-full">
                        View Case Study
                      </AnimatedCTA>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-charcoal-950 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-charcoal-500">{project.year}</span>
                    </div>
                    
                    <p className="text-charcoal-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-charcoal-100 text-charcoal-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-charcoal-100 text-charcoal-600 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-charcoal-200">
                      {Object.entries(project.results).map(([key, result]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-charcoal-500">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Client */}
                    <div className="mt-4 pt-4 border-t border-charcoal-200">
                      <p className="text-sm text-charcoal-500">
                        Client: <span className="font-medium text-charcoal-700">{project.client}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-charcoal-950 mb-2">
                No projects found
              </h3>
              <p className="text-charcoal-600">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Our Project Approach
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Every project follows our proven methodology to ensure exceptional results 
                and client satisfaction.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'We dive deep into understanding your business, users, and market to create a solid foundation.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'We develop a comprehensive strategy and detailed project roadmap with clear milestones.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Design & Development',
                description: 'Our team brings your vision to life with beautiful design and robust development.',
                icon: '🚀'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We ensure a smooth launch and provide ongoing support to maximize your success.',
                icon: '🎯'
              }
            ].map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <motion.div
                  className="card p-6 text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-3">{step.title}</h3>
                  <p className="text-charcoal-600 text-sm">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about 
                working with us on their projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO',
                company: 'TechFlow Inc.',
                content: 'HaloAgency transformed our e-commerce platform beyond our expectations. The results speak for themselves - 300% increase in sales!',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                company: 'MedTech Solutions',
                content: 'The healthcare dashboard they built has revolutionized our operations. Exceptional quality and attention to detail.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Product Manager',
                company: 'FinanceApp Ltd.',
                content: 'Our mobile banking app achieved over 1M downloads thanks to their incredible work. Highly recommended!',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                <motion.div
                  className="card p-6"
                  whileHover={{ y: -3 }}
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
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  
                  <p className="text-charcoal-700 italic">"{testimonial.content}"</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join our growing list of satisfied clients. Let's work together to create 
              something amazing that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedCTA href="/contact" variant="secondary" size="lg">
                Get Started Today
              </AnimatedCTA>
              <AnimatedCTA href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Our Services
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
