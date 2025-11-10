'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, Typography, Button, Section } from '@/components/ui';
import {
  FaPaintBrush,
  FaCode,
  FaLifeRing,
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaCalendar,
  FaQuoteLeft,
  FaLightbulb,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import Link from 'next/link';
import { ArticleData, ArticleSection } from '@/data/articles';

// Icon mapping for categories
const categoryIcons = {
  design: FaPaintBrush,
  development: FaCode,
  support: FaLifeRing,
};

interface ArticleContentProps {
  service: any;
  category: any;
  relatedServices: any[];
  articleData?: ArticleData;
}

export default function ArticleContent({
  service,
  category,
  relatedServices,
  articleData,
}: ArticleContentProps) {
  const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons];

  // If we have article data, use it; otherwise show basic service info
  const hasArticleContent = !!articleData;

  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${category.bgClass}/5 via-transparent to-transparent`}
        />
        <motion.div
          className={`absolute top-1/4 right-1/4 w-96 h-96 ${category.bgClass}/10 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Link href="/resources">
              <Button
                variant="ghost"
                leftIcon={<FaArrowLeft />}
                className="mb-8 text-slate-400 hover:text-white"
              >
                Back to Resources
              </Button>
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6"
            >
              <CategoryIcon className={`text-xl ${category.iconColor}`} />
              <span className="text-sm font-medium text-slate-300">{category.title}</span>
            </motion.div>

            {/* Title */}
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
            >
              {service.title}
            </Typography>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-8">
              {hasArticleContent && (
                <>
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{articleData.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{articleData.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{articleData.readTime} min read</span>
                  </div>
                </>
              )}
              {!hasArticleContent && (
                <>
                  <span>📝 Complete Guide</span>
                  <span>•</span>
                  <span>👤 SoftKerr Team</span>
                  <span>•</span>
                  <span>📅 Updated Oct 2025</span>
                  <span>•</span>
                  <span>⏱️ 8 min read</span>
                </>
              )}
            </div>

            {/* Subtitle or Short Description */}
            <Typography variant="body1" className="text-slate-300 max-w-3xl text-lg">
              {hasArticleContent ? articleData.subtitle : service.shortDescription}
            </Typography>
          </motion.div>
        </Container>
      </Section>

      {/* Cover Image Section (if article data exists) */}
      {hasArticleContent && (
        <Section className="py-0">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <CategoryIcon className={`text-6xl ${category.iconColor} mb-4 mx-auto`} />
                  <Typography variant="h3" className="text-slate-400">
                    {service.title}
                  </Typography>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Article Introduction / Overview */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {hasArticleContent && (
              <>
                <Typography
                  variant="body1"
                  className="text-slate-300 leading-relaxed text-lg mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-brand-gold first-letter:mr-2 first-letter:float-left"
                >
                  {articleData.introduction}
                </Typography>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {articleData.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}

            {!hasArticleContent && (
              <Typography variant="body1" className="text-slate-300 leading-relaxed text-lg">
                {service.fullDescription}
              </Typography>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Article Content Sections */}
      {hasArticleContent && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
              {articleData.sections.map((section: ArticleSection, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {section.type === 'heading' && (
                    <Typography
                      variant="h2"
                      className="text-2xl md:text-3xl font-bold mb-6 mt-12 first:mt-0"
                    >
                      {section.content as string}
                    </Typography>
                  )}

                  {section.type === 'paragraph' && (
                    <Typography
                      variant="body1"
                      className="text-slate-300 leading-relaxed text-lg mb-6"
                    >
                      {section.content as string}
                    </Typography>
                  )}

                  {section.type === 'list' && (
                    <div className="mb-8">
                      {section.title && (
                        <Typography
                          variant="h3"
                          className="text-xl font-semibold mb-4 text-slate-200"
                        >
                          {section.title}
                        </Typography>
                      )}
                      <ul className="space-y-3">
                        {(section.content as string[]).map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <FaCheckCircle
                              className={`${category.iconColor} text-lg mt-1 flex-shrink-0`}
                            />
                            <Typography className="text-slate-300">{item}</Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.type === 'quote' && (
                    <div
                      className={`relative p-6 md:p-8 rounded-xl bg-gradient-to-br ${category.bgClass}/5 border-l-4 ${category.borderClass} my-8`}
                    >
                      <FaQuoteLeft className={`${category.iconColor} text-3xl mb-4 opacity-50`} />
                      <Typography
                        variant="body1"
                        className="text-slate-200 italic text-lg leading-relaxed"
                      >
                        {section.content as string}
                      </Typography>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Key Takeaways (if article data exists) */}
      {hasArticleContent && articleData.keyTakeaways && (
        <Section className="bg-slate-900/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaLightbulb className="text-3xl text-brand-gold" />
                <Typography variant="h2" className="text-3xl font-bold">
                  Key Takeaways
                </Typography>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {articleData.keyTakeaways.map((takeaway: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30"
                  >
                    <span className="text-brand-gold font-bold text-lg">✓</span>
                    <Typography className="text-slate-300">{takeaway}</Typography>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* What's Included Section (if no article data) */}
      {!hasArticleContent && service.features && (
        <Section className="bg-slate-900/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-12 text-center">
                What's Included
              </Typography>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {service.features?.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-colors"
                  >
                    <FaCheckCircle className={`${category.iconColor} text-xl mt-1 flex-shrink-0`} />
                    <Typography className="text-slate-300">{feature}</Typography>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Our Process Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Process
            </Typography>
            <Typography
              variant="body1"
              className="text-slate-400 text-center mb-12 max-w-2xl mx-auto text-lg"
            >
              We follow a proven methodology to deliver exceptional results
            </Typography>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  step: 1,
                  title: 'Discovery & Planning',
                  description:
                    'We analyze your requirements and create a detailed project roadmap.',
                },
                {
                  step: 2,
                  title: 'Design & Development',
                  description: 'Our team brings your vision to life with cutting-edge technology.',
                },
                {
                  step: 3,
                  title: 'Testing & Review',
                  description: 'Rigorous quality assurance ensures everything works perfectly.',
                },
                {
                  step: 4,
                  title: 'Launch & Support',
                  description: 'We deploy your project and provide ongoing maintenance.',
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full ${category.bgClass} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {process.step}
                  </div>
                  <div>
                    <Typography variant="h3" className="text-xl font-semibold mb-2">
                      {process.title}
                    </Typography>
                    <Typography className="text-slate-400">{process.description}</Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-brand-gold/5 to-brand-cyan/10" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <HiSparkles className="text-5xl text-brand-gold mx-auto mb-6" />
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" className="text-slate-300 mb-8 text-lg">
              Let's discuss your project and create something amazing together.
            </Typography>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacts">
                <Button variant="shimmer" glowColor="gold" size="lg" className="px-8">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="px-8">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section className="bg-slate-900/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Related Services
              </Typography>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService: any, index: number) => (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/resources/${relatedService.id}`}>
                      <div className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-brand-gold/10">
                        <CategoryIcon className={`text-3xl ${category.iconColor} mb-4`} />
                        <Typography variant="h3" className="text-xl font-semibold mb-3">
                          {relatedService.title}
                        </Typography>
                        <Typography className="text-slate-400 mb-4">
                          {relatedService.shortDescription}
                        </Typography>
                        <span className="text-brand-gold group-hover:translate-x-2 transition-transform inline-block">
                          Learn More →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </Section>
      )}
    </>
  );
}
