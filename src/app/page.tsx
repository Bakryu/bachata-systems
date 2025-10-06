"use client";

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Section,
  Container,
  Card,
  Button,
  ScrollReveal,
} from "@/components/ui";

// Lazy load the Matrix component for better performance
const MatrixHero = lazy(() => import("@/components/three/MatrixHero"));

// Trusted companies logos (placeholder)

const trustedCompanies = [
  "DreamHost",
  "StartupX",
  "InnovateLab",
  "DigitalFlow",
  "CloudSync",
  "DataVision",
];

// Services preview
const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    icon: "🚀",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that creates meaningful and delightful experiences.",
    icon: "🎨",
  },
  {
    title: "Startup MVP",
    description:
      "Rapid prototyping and development to validate your business ideas.",
    icon: "💡",
  },
  {
    title: "Support & Maintenance",
    description:
      "Ongoing support to keep your digital products running smoothly.",
    icon: "🛠️",
  },
];

// Featured projects
const featuredProjects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution with advanced analytics and user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "SaaS Dashboard",
    description:
      "Comprehensive dashboard for data visualization and business intelligence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking experience with modern design.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["React Native", "TypeScript", "AWS"],
  },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    company: "TechStartup Inc.",
    content:
      "HaloAgency transformed our vision into a stunning digital product. Their attention to detail and technical expertise exceeded our expectations.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "Working with HaloAgency was a game-changer. They delivered a scalable solution that helped us grow our user base by 300%.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section
        component="section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        padding="none"
        noContainer
      >
        {/* Background Matrix Animation */}
        <div className="absolute inset-0">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-background to-background-secondary" />
            }
          >
            <MatrixHero />
          </Suspense>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto backdrop-blur-sm bg-background/10 rounded-2xl p-8 md:p-12 border border-border-subtle/20 shadow-2xl shadow-black/20"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h1" align="center" className="mb-6">
                  We Build{" "}
                  <span className="text-gradient">Web Experiences</span> That
                  Matter
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  color="secondary"
                  align="center"
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                >
                  We&apos;re a creative digital agency helping startups and
                  enterprises build exceptional web experiences that drive
                  results and inspire users.
                </Typography>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button variant="primary" size="lg" animated>
                  <a href="/contact">Start Your Project</a>
                </Button>
                <Button variant="outline" size="lg" animated>
                  <a href="/projects">View Our Work</a>
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </Section>

      {/* Trusted Companies */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="relative border border-solid rounded-3xl border-text-secondary p-4 lg:p-12">
            <div className="absolute bg-background px-4 xl:px-6 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
              <Typography variant="body1" color="secondary" className="text-lg">
                Trusted by innovative companies
              </Typography>
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
                    <Typography variant="body1" color="muted" weight="semibold">
                      {company}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Services Preview */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Our Services
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              align="center"
              className="text-xl max-w-3xl mx-auto"
            >
              We offer comprehensive digital solutions to help your business
              thrive in the digital landscape.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Card
                padding="lg"
                className="text-center group hover:shadow-xl transition-all duration-300"
                hover
                animated
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <Typography variant="h6" className="mb-3">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {service.description}
                </Typography>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="md">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Featured Projects */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              align="center"
              className="text-xl max-w-3xl mx-auto"
            >
              Discover some of our recent work and the impact we&apos;ve made
              for our clients.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <Card
                className="overflow-hidden group cursor-pointer"
                hover
                animated
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <Typography variant="h6" className="mb-2">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="secondary"
                    className="mb-4"
                  >
                    {project.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Typography
                        key={tag}
                        variant="caption"
                        component="span"
                        className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full"
                      >
                        {tag}
                      </Typography>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="md">
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonials */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              What Our Clients Say
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              align="center"
              className="text-xl max-w-3xl mx-auto"
            >
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about working with us.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.2}>
              <Card padding="lg" hover animated>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <Typography variant="h6" weight="semibold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="secondary">
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" className="italic">
                  &quot;{testimonial.content}&quot;
                </Typography>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" className="text-text-primary" padding="lg">
        <ScrollReveal>
          <div className="text-center">
            <Typography
              variant="h2"
              align="center"
              className="mb-4 text-text-primary"
            >
              Ready to Start Your Project?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-text-primary"
            >
              Let&apos;s work together to create something amazing. Get in touch
              with us today and let&apos;s discuss how we can help bring your
              vision to life.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <a href="/contact">Get Started Today</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-text-primary text-text-primary hover:bg-text-primary hover:text-background"
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
