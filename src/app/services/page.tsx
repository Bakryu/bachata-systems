'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

const services = [
  {
    id: 'design',
    title: 'UI/UX Design',
    subtitle: 'User-Centered Design Solutions',
    description: 'We create intuitive, beautiful interfaces that users love and businesses need.',
    icon: '🎨',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Usability Testing',
      'Mobile-First Design',
      'Accessibility Compliance'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle', 'Framer'],
    href: '/services/design',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    id: 'development',
    title: 'Web Development',
    subtitle: 'Modern Web Applications',
    description: 'We build scalable, performant web applications using cutting-edge technologies.',
    icon: '💻',
    features: [
      'Frontend Development',
      'Backend Architecture',
      'Database Design',
      'API Development',
      'Performance Optimization',
      'DevOps & Deployment'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    href: '/services/development',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultations.',
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive strategy that aligns with your objectives and creates a roadmap for success.',
    icon: '📋'
  },
  {
    step: '03',
    title: 'Design',
    description: 'Our design team creates beautiful, functional interfaces that provide exceptional user experiences.',
    icon: '🎨'
  },
  {
    step: '04',
    title: 'Development',
    description: 'We build your solution using modern technologies, ensuring scalability, performance, and maintainability.',
    icon: '⚡'
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous testing ensures your product works flawlessly across all devices and browsers.',
    icon: '🧪'
  },
  {
    step: '06',
    title: 'Launch',
    description: 'We deploy your solution and provide ongoing support to ensure continued success.',
    icon: '🚀'
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6">
                Our{' '}
                <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                We offer comprehensive digital solutions to help your business thrive in the digital landscape. 
                From design to development, we've got you covered.
              </p>
              <AnimatedCTA href="/contact" size="lg">
                Start Your Project
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.2}>
                <motion.div
                  className="card overflow-hidden group cursor-pointer h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`${service.bgColor} p-8 relative`}>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal-950">{service.title}</h3>
                        <p className={`${service.textColor} font-medium`}>{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-charcoal-600 mb-6">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal-950 mb-3">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-charcoal-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal-950 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white rounded-full text-sm text-charcoal-600 border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={service.href}>
                      <AnimatedCTA variant="outline" className="w-full">
                        Learn More
                      </AnimatedCTA>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                We follow a proven methodology that ensures successful project delivery 
                and exceptional results every time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <motion.div
                  className="card p-6 text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-charcoal-950 mb-3">{step.title}</h3>
                  <p className="text-charcoal-600">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Our track record speaks for itself. We've helped businesses of all sizes 
                achieve their digital goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-charcoal-600 font-medium">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                We have experience working across various industries, bringing specialized 
                knowledge to every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Education', icon: '🎓' },
              { name: 'Finance', icon: '💰' },
              { name: 'Real Estate', icon: '🏠' },
              { name: 'Technology', icon: '💻' },
              { name: 'Non-Profit', icon: '❤️' },
              { name: 'Entertainment', icon: '🎬' }
            ].map((industry, index) => (
              <ScrollReveal key={industry.name} delay={index * 0.05}>
                <motion.div
                  className="card p-6 text-center group"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-charcoal-950">{industry.name}</h3>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss your project and see how we can help you achieve your goals. 
              Get in touch with us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedCTA href="/contact" variant="secondary" size="lg">
                Start Your Project
              </AnimatedCTA>
              <AnimatedCTA href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Our Work
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
