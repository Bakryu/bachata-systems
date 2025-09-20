'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Typography, 
  Section, 
  Container, 
  Card, 
  Button,
  ScrollReveal 
} from '@/components/ui';
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
      <Section variant="gradient" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h1" align="center" className="mb-6">
              Our{' '}
              <span className="text-gradient">Services</span>
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl mb-8">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape. 
              From design to development, we&apos;ve got you covered.
            </Typography>
            <AnimatedCTA href="/contact" size="lg">
              Start Your Project
            </AnimatedCTA>
          </div>
        </ScrollReveal>
      </Section>

      {/* Services Grid */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.2}>
              <Card className="overflow-hidden group cursor-pointer h-full" hover animated>
                <div className={`${service.bgColor} p-8 relative`}>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <Typography variant="h4" className="mb-1">{service.title}</Typography>
                      <Typography variant="body2" className={`${service.textColor} font-medium`}>{service.subtitle}</Typography>
                    </div>
                  </div>
                  <Typography variant="body2" color="secondary" className="mb-6">{service.description}</Typography>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <Typography variant="h6" className="mb-3">What&apos;s Included:</Typography>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <Typography variant="caption" className="text-green-500 mr-2">✓</Typography>
                          <Typography variant="caption" color="secondary">{feature}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <Typography variant="h6" className="mb-3">Technologies:</Typography>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          variant="caption"
                          component="span"
                          className="px-3 py-1 bg-white rounded-full border"
                          color="secondary"
                        >
                          {tech}
                        </Typography>
                      ))}
                    </div>
                  </div>

                  <Link href={service.href}>
                    <Button variant="outline" fullWidth>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Our Process
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery 
              and exceptional results every time.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.1}>
              <Card padding="md" className="text-center group" hover animated>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <Typography variant="h4" color="accent" className="mb-2">{step.step}</Typography>
                <Typography variant="h5" className="mb-3">{step.title}</Typography>
                <Typography variant="body2" color="secondary">{step.description}</Typography>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Why Choose Us
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Our track record speaks for itself. We&apos;ve helped businesses of all sizes 
              achieve their digital goals.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Typography variant="h2" color="accent" className="mb-2">
                  {stat.number}
                </Typography>
                <Typography variant="body2" color="secondary" weight="medium">{stat.label}</Typography>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Industries We Serve
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              We have experience working across various industries, bringing specialized 
              knowledge to every project.
            </Typography>
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
              <Card padding="md" className="text-center group" hover animated>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <Typography variant="h6" weight="semibold">{industry.name}</Typography>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" padding="lg">
        <ScrollReveal>
          <div className="text-center">
            <Typography variant="h2" align="center" className="mb-4 text-white">
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" align="center" className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-white">
              Let&apos;s discuss your project and see how we can help you achieve your goals. 
              Get in touch with us today for a free consultation.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/projects">View Our Work</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
