'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Typography, 
  Section, 
  Container, 
  Card, 
  Button,
  Link,
  Input,
  ScrollReveal 
} from '@/components/ui';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

const categories = ['All', 'Web Development', 'Design', 'Business', 'Technology'];

const articles = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
    category: 'Web Development',
    author: 'Michael Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Design Systems: Building Consistency at Scale',
    excerpt: 'Learn how to create and maintain design systems that ensure consistency across large-scale applications.',
    category: 'Design',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 3,
    title: 'How to Choose the Right Technology Stack for Your Startup',
    excerpt: 'A comprehensive guide to selecting the perfect technology stack that will grow with your business.',
    category: 'Business',
    author: 'Sarah Johnson',
    date: '2024-01-08',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: 'The Rise of AI in Web Development',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we build and maintain web applications.',
    category: 'Technology',
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 5,
    title: 'Optimizing Website Performance: A Complete Guide',
    excerpt: 'Learn proven strategies to improve your website\'s loading speed and overall performance.',
    category: 'Web Development',
    author: 'Michael Chen',
    date: '2024-01-03',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 6,
    title: 'User Experience Design: Beyond Pretty Interfaces',
    excerpt: 'Explore the psychology behind great UX design and how to create truly user-centered experiences.',
    category: 'Design',
    author: 'Emily Rodriguez',
    date: '2024-01-01',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
    featured: false
  }
];

const resources = [
  {
    title: 'Web Development Checklist',
    description: 'A comprehensive checklist to ensure your web projects meet all quality standards.',
    type: 'PDF Guide',
    icon: '📋',
    downloadUrl: '#'
  },
  {
    title: 'Design System Template',
    description: 'A complete Figma template for building consistent design systems.',
    type: 'Figma Template',
    icon: '🎨',
    downloadUrl: '#'
  },
  {
    title: 'Performance Optimization Toolkit',
    description: 'Tools and scripts to help you optimize your website\'s performance.',
    type: 'Code Package',
    icon: '⚡',
    downloadUrl: '#'
  },
  {
    title: 'Project Planning Template',
    description: 'Notion template for planning and managing web development projects.',
    type: 'Notion Template',
    icon: '📊',
    downloadUrl: '#'
  }
];

const tools = [
  {
    name: 'Figma',
    description: 'Our go-to design tool for creating beautiful interfaces and prototypes.',
    category: 'Design',
    url: 'https://figma.com',
    logo: '🎨'
  },
  {
    name: 'VS Code',
    description: 'The code editor we use for all our development projects.',
    category: 'Development',
    url: 'https://code.visualstudio.com',
    logo: '💻'
  },
  {
    name: 'Vercel',
    description: 'Our preferred platform for deploying Next.js applications.',
    category: 'Deployment',
    url: 'https://vercel.com',
    logo: '🚀'
  },
  {
    name: 'Notion',
    description: 'We use Notion for project management and documentation.',
    category: 'Productivity',
    url: 'https://notion.so',
    logo: '📝'
  },
  {
    name: 'Linear',
    description: 'Our issue tracking and project management tool.',
    category: 'Productivity',
    url: 'https://linear.app',
    logo: '📋'
  },
  {
    name: 'Framer Motion',
    description: 'The animation library we use for creating smooth interactions.',
    category: 'Development',
    url: 'https://framer.com/motion',
    logo: '✨'
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === category));
    }
  };

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <>
      {/* Hero Section */}
      <Section variant="gradient" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h1" align="center" className="mb-6">
              Resources &{' '}
              <span className="text-gradient">Insights</span>
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl mb-8">
              Discover valuable insights, tools, and resources to help you build 
              better digital experiences and grow your business.
            </Typography>
            <Button variant="primary" size="lg">
              <Link href="#newsletter">Subscribe to Updates</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Featured Articles */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Featured Articles
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Our latest insights and thoughts on web development, design, and digital strategy.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <Card className="overflow-hidden group cursor-pointer" hover animated>
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Typography variant="caption" component="span" className="px-3 py-1 bg-blue-600 text-white rounded-full">
                      Featured
                    </Typography>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-charcoal-500 mb-3">
                    <Typography variant="caption" component="span" className="px-2 py-1 bg-charcoal-100 rounded mr-3">
                      {article.category}
                    </Typography>
                    <Typography variant="caption">{article.readTime}</Typography>
                    <Typography variant="caption" className="mx-2">•</Typography>
                    <Typography variant="caption">{new Date(article.date).toLocaleDateString()}</Typography>
                  </div>

                  <Typography variant="h5" className="mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </Typography>

                  <Typography variant="body2" color="secondary" className="mb-4">
                    {article.excerpt}
                  </Typography>

                  <div className="flex items-center justify-between">
                    <Typography variant="caption" color="muted">
                      By {article.author}
                    </Typography>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* All Articles */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              All Articles
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Browse our complete collection of articles and insights.
            </Typography>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={activeCategory === category ? 'primary' : 'secondary'}
              className={activeCategory === category ? 'shadow-lg' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer h-full" hover animated>
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Typography variant="caption" component="span" className="px-2 py-1 bg-white/90 text-charcoal-700 rounded">
                        {article.category}
                      </Typography>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                      <Typography variant="caption">{article.readTime}</Typography>
                      <Typography variant="caption" className="mx-2">•</Typography>
                      <Typography variant="caption">{new Date(article.date).toLocaleDateString()}</Typography>
                    </div>

                    <Typography variant="h6" className="mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </Typography>

                    <Typography variant="caption" color="secondary" className="mb-4 line-clamp-3">
                      {article.excerpt}
                    </Typography>

                    <div className="flex items-center justify-between">
                      <Typography variant="caption" color="muted">
                        By {article.author}
                      </Typography>
                      <Typography variant="caption" className="text-blue-600 font-medium group-hover:underline">
                        Read More →
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Free Resources */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Free Resources
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Download our free templates, checklists, and tools to accelerate your projects.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <ScrollReveal key={resource.title} delay={index * 0.1}>
              <Card padding="md" className="text-center group" hover animated>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                
                <Typography variant="h6" className="mb-2">
                  {resource.title}
                </Typography>
                
                <Typography variant="caption" color="secondary" className="mb-4">
                  {resource.description}
                </Typography>

                <Typography variant="caption" color="accent" weight="medium" className="mb-4">
                  {resource.type}
                </Typography>

                <Button variant="outline" size="sm" fullWidth>
                  Download Free
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Tools We Use */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Tools We Use
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Discover the tools and technologies that power our development process.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.name} delay={index * 0.1}>
              <Link href={tool.url} external>
                <Card padding="md" className="group" hover animated>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {tool.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Typography variant="h6" className="group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </Typography>
                        <Typography variant="caption" className="px-2 py-1 bg-charcoal-100 text-charcoal-600 rounded">
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

      {/* Newsletter */}
      <Section id="newsletter" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" padding="lg">
        <ScrollReveal>
          <div className="text-center">
            <Typography variant="h2" align="center" className="mb-4 text-white">
              Stay Updated
            </Typography>
            <Typography variant="body1" align="center" className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-white">
              Subscribe to our newsletter and get the latest insights, resources, 
              and updates delivered to your inbox.
            </Typography>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 text-charcoal-950"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
              <Typography variant="caption" className="opacity-75 mt-4 text-white">
                No spam, unsubscribe at any time.
              </Typography>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
