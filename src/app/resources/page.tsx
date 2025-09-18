'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
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
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6">
                Resources &{' '}
                <span className="text-gradient">Insights</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                Discover valuable insights, tools, and resources to help you build 
                better digital experiences and grow your business.
              </p>
              <AnimatedCTA href="#newsletter" size="lg">
                Subscribe to Updates
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Our latest insights and thoughts on web development, design, and digital strategy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <motion.article
                  className="card overflow-hidden group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                      <span className="px-2 py-1 bg-charcoal-100 rounded text-xs mr-3">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-charcoal-950 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-charcoal-600 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal-500">
                        By {article.author}
                      </span>
                      <AnimatedCTA variant="outline" size="sm">
                        Read More
                      </AnimatedCTA>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                All Articles
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Browse our complete collection of articles and insights.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                {category}
              </button>
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
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group cursor-pointer"
                  whileHover={{ y: -3 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/90 text-charcoal-700 text-xs rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-charcoal-500 mb-3">
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-charcoal-950 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-charcoal-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal-500">
                        By {article.author}
                      </span>
                      <span className="text-blue-600 text-sm font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Free Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Free Resources
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Download our free templates, checklists, and tools to accelerate your projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <ScrollReveal key={resource.title} delay={index * 0.1}>
                <motion.div
                  className="card p-6 text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-charcoal-600 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="text-xs text-blue-600 font-medium mb-4">
                    {resource.type}
                  </div>

                  <AnimatedCTA variant="outline" size="sm" className="w-full">
                    Download Free
                  </AnimatedCTA>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Tools We Use
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Discover the tools and technologies that power our development process.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <ScrollReveal key={tool.name} delay={index * 0.1}>
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 group block"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {tool.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-charcoal-950 group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-charcoal-100 text-charcoal-600 rounded">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-charcoal-600 text-sm">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Subscribe to our newsletter and get the latest insights, resources, 
              and updates delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-charcoal-950 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <AnimatedCTA variant="secondary" size="lg">
                  Subscribe
                </AnimatedCTA>
              </div>
              <p className="text-sm opacity-75 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
