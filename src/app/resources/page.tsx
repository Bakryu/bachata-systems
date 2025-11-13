'use client';
import { Typography, Section, Card, Link, ScrollReveal } from '@/components/ui';
import ResourcesHero from '@/components/sections/resources/ResourcesHero';
import ServicesArticles from '@/components/sections/resources/ServicesArticles';

const tools = [
  {
    name: 'Figma',
    description: 'Our go-to design tool for creating beautiful interfaces and prototypes.',
    category: 'Design',
    url: 'https://figma.com',
    logo: '🎨',
  },
  {
    name: 'VS Code',
    description: 'The code editor we use for all our development projects.',
    category: 'Development',
    url: 'https://code.visualstudio.com',
    logo: '💻',
  },
  {
    name: 'Vercel',
    description: 'Our preferred platform for deploying Next.js applications.',
    category: 'Deployment',
    url: 'https://vercel.com',
    logo: '🚀',
  },
  {
    name: 'Notion',
    description: 'We use Notion for project management and documentation.',
    category: 'Productivity',
    url: 'https://notion.so',
    logo: '📝',
  },
  {
    name: 'Linear',
    description: 'Our issue tracking and project management tool.',
    category: 'Productivity',
    url: 'https://linear.app',
    logo: '📋',
  },
  {
    name: 'Framer Motion',
    description: 'The animation library we use for creating smooth interactions.',
    category: 'Development',
    url: 'https://framer.com/motion',
    logo: '✨',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <ResourcesHero />

      {/* Service Guides - Generated from servicesData */}
      <ServicesArticles />

      {/* Tools We Use */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Tools We Use
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              align="center"
              className="text-xl max-w-3xl mx-auto"
            >
              Discover the tools and technologies that power our development process.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.name} delay={0.2}>
              <Link href={tool.url} external>
                <Card padding="md" className="group" hover animated>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {tool.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Typography
                          variant="h6"
                          className="group-hover:text-blue-600 transition-colors"
                        >
                          {tool.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="px-2 py-1 bg-charcoal-100 text-charcoal-600 rounded"
                        >
                          {tool.category}
                        </Typography>
                      </div>
                      <Typography variant="caption" color="secondary">
                        {tool.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
