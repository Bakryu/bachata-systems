import { FC } from 'react';
import { Button, Container, ScrollReveal, Typography } from '@/components/ui';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics: {
    icon: string;
    value: string;
    label: string;
  }[];
}

const projects: Project[] = [
  {
    title: 'DreamHost Panel',
    description:
      'A modern, intuitive control panel for DreamHost users to manage websites, domains, and hosting with ease. Features include one-click installs, advanced DNS management, and real-time resource monitoring.',
    image: '/projects/dreamhost.jpg',
    category: 'Web Hosting',
    technologies: ['React', 'TypeScript', 'GraphQL', 'AWS'],
    metrics: [
      { icon: '�️', value: '99.99%', label: 'Uptime' },
      { icon: '⚡', value: '1s', label: 'Avg. Response' },
      { icon: '🔒', value: '100%', label: 'SSL Coverage' },
    ],
  },
  {
    title: 'Prom.ua Marketplace',
    description:
      'A robust shopping cart and marketplace app for Prom.ua, enabling seamless product discovery, secure checkout, and real-time order tracking for millions of users and merchants.',
    image: '/projects/promua.jpg',
    category: 'Marketplace',
    technologies: ['Vue.js', 'Node.js', 'Redis', 'PostgreSQL'],
    metrics: [
      { icon: '�', value: '2M+', label: 'Monthly Orders' },
      { icon: '👨‍💼', value: '100K+', label: 'Active Sellers' },
      { icon: '�', value: '24h', label: 'Avg. Delivery' },
    ],
  },
  {
    title: 'Heineken Real Child',
    description:
      'A digital platform for Heineken’s “Real Child” subsidiary, focused on responsible drinking education and community engagement. Includes interactive campaigns, event management, and analytics dashboards for impact measurement.',
    image: '/projects/heineken.jpg',
    category: 'Corporate Social Responsibility',
    technologies: ['Next.js', 'Firebase', 'D3.js', 'Cloud Functions'],
    metrics: [
      { icon: '🌍', value: '12+', label: 'Countries Impacted' },
      { icon: '�', value: '500K+', label: 'Users Reached' },
      { icon: '🎉', value: '120+', label: 'Events Hosted' },
    ],
  },
];

// Variant 3: Interactive Showcase
export const FeaturedProjectsShowcase: FC = () => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Typography variant="h2" className="mb-4 text-text-primary text-center">
            Featured Projects
          </Typography>
          <Typography variant="body1" className="text-text-secondary max-w-2xl mx-auto">
            Discover some of our recent work and the impact we've made for our clients.
          </Typography>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background gradients */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-accent-purple/5 to-transparent"
                style={{
                  clipPath:
                    index % 2 === 0
                      ? 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)'
                      : 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)',
                }}
              />

              <div
                className={`flex flex-col gap-8 lg:gap-0 lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Content side */}
                <div className="lg:w-1/2 lg:px-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-accent-yellow/10 text-accent-yellow text-sm font-medium mb-4 transition-colors duration-300 group-hover:bg-accent-yellow/20 group-hover:text-accent-purple">
                      {project.category}
                    </div>

                    <Typography
                      variant="h3"
                      className="text-text-primary mb-4 group-hover:text-accent-yellow transition-colors duration-300"
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300"
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background-secondary rounded-full text-sm text-text-secondary border border-border-subtle transition-all duration-300 group-hover:bg-accent-yellow/20 group-hover:text-accent-yellow group-hover:border-accent-yellow cursor-pointer hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="text-center p-4 bg-background-secondary rounded-xl border border-border-subtle transition-all duration-300 group-hover:border-accent-yellow group-hover:bg-accent-yellow/10 hover:scale-105 cursor-pointer"
                        >
                          <div className="text-2xl mb-2">{metric.icon}</div>
                          <div className="text-accent-yellow font-bold mb-1 group-hover:text-accent-purple transition-colors duration-300">
                            {metric.value}
                          </div>
                          <div className="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Image side */}
                <div className="lg:w-1/2 relative group transition-all duration-300 hover:scale-[1.03] hover:z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    {/* Placeholder for project image */}
                    <div className="aspect-video rounded-2xl overflow-hidden bg-background-secondary border border-border-subtle group-hover:border-accent-yellow transition-colors duration-300 shadow-lg group-hover:shadow-accent-yellow/40">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/10 via-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="md">
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default FeaturedProjectsShowcase;
