'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Section, Card, Button } from '@/components/ui';
import { servicesData } from '@/data/services';
import { FaPaintBrush, FaCode, FaLifeRing } from 'react-icons/fa';
import Link from 'next/link';

// Icon mapping for categories
const categoryIcons = {
  design: FaPaintBrush,
  development: FaCode,
  support: FaLifeRing,
};

// Generate article previews from services data
const generateServiceArticles = () => {
  const articles: any[] = [];

  Object.values(servicesData).forEach(category => {
    category.services.forEach((service: any) => {
      articles.push({
        id: service.id,
        title: `Complete Guide to ${service.title}`,
        excerpt: service.fullDescription,
        category: category.title,
        categoryId: category.id,
        colorClass: category.colorClass,
        bgClass: category.bgClass,
        glowColor: category.glowColor,
        readTime: '8 min read',
        date: new Date().toISOString(),
        comingSoon: true, // Mark as coming soon since articles aren't written yet
        features: service.features || [],
      });
    });
  });

  return articles;
};

export default function ServicesArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const serviceArticles = generateServiceArticles();

  const categories = ['All', 'Design', 'Development', 'Support & Maintenance'];

  const filteredArticles =
    activeCategory === 'All'
      ? serviceArticles
      : serviceArticles.filter(article => article.category === activeCategory);

  return (
    <Section variant="muted" padding="lg">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" className="mb-4">
            Service Guides
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            align="center"
            className="text-xl max-w-3xl mx-auto"
          >
            In-depth articles and guides for each of our services. Coming soon!
          </Typography>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-gold text-background shadow-lg shadow-brand-gold/30'
                : 'bg-background-secondary text-text-secondary hover:bg-background-secondary/80 border border-border-subtle'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
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
          {filteredArticles.map((article, index) => {
            const CategoryIcon = categoryIcons[article.categoryId as keyof typeof categoryIcons];

            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/resources/${article.id}`}>
                  <Card
                    className="overflow-hidden group cursor-pointer h-full relative"
                    hover
                    animated
                  >
                    {/* Coming Soon Badge */}
                    {article.comingSoon && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-brand-gold text-background text-xs font-bold rounded-full shadow-lg">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Icon Header */}
                    <div
                      className={`relative overflow-hidden ${article.bgClass}/10 p-8 flex items-center justify-center`}
                    >
                      <motion.div
                        className={`w-20 h-20 rounded-2xl ${article.bgClass}/20 flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CategoryIcon className={`text-4xl ${article.colorClass}`} />
                      </motion.div>

                      {/* Category badge */}
                      <div className="absolute top-4 right-4">
                        <Typography
                          variant="caption"
                          component="span"
                          className={`px-3 py-1 ${article.bgClass}/20 ${article.colorClass} rounded-full font-semibold text-xs`}
                        >
                          {article.category}
                        </Typography>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Meta info */}
                      <div className="flex items-center text-sm text-text-muted mb-3">
                        <Typography variant="caption">{article.readTime}</Typography>
                        <Typography variant="caption" className="mx-2">
                          •
                        </Typography>
                        <Typography variant="caption">
                          {new Date(article.date).toLocaleDateString()}
                        </Typography>
                      </div>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        className={`mb-3 group-hover:${article.colorClass} transition-colors`}
                      >
                        {article.title}
                      </Typography>

                      {/* Excerpt */}
                      <Typography variant="body2" color="secondary" className="mb-4 line-clamp-3">
                        {article.excerpt}
                      </Typography>

                      {/* Features preview */}
                      {article.features && article.features.length > 0 && (
                        <div className="mb-4">
                          <Typography
                            variant="caption"
                            color="muted"
                            className="mb-2 block font-semibold"
                          >
                            Topics Covered:
                          </Typography>
                          <div className="flex flex-wrap gap-2">
                            {article.features.slice(0, 3).map((feature: string, idx: number) => (
                              <span
                                key={idx}
                                className={`px-2 py-1 text-xs ${article.bgClass}/10 ${article.colorClass} rounded`}
                              >
                                {feature}
                              </span>
                            ))}
                            {article.features.length > 3 && (
                              <span className="px-2 py-1 text-xs bg-background-secondary text-text-muted rounded">
                                +{article.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                        <Typography variant="caption" color="muted">
                          {article.comingSoon ? 'Article in progress' : 'Read full article'}
                        </Typography>
                        <Typography
                          variant="caption"
                          className={`${article.colorClass} font-medium ${!article.comingSoon && 'group-hover:underline'}`}
                        >
                          {article.comingSoon ? '🔔 Notify Me' : 'Read More →'}
                        </Typography>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      ></motion.div>
    </Section>
  );
}
