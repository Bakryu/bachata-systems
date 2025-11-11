'use client';

import { motion } from 'framer-motion';
import { Container, Section, Typography, Button } from '@/components/ui';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

// Template type definition
interface PageTemplate {
  title?: string;
  description?: string;
  desc?: string;
  content?: Array<{
    title?: string;
    description?: string;
    listTitle?: string;
    list?: (string | React.ReactNode)[];
    listFooter?: string;
  }>;
  footer?: string;
  lastUpdated?: string;
}

interface ResourcePageClientProps {
  pageData: PageTemplate;
}

export default function ResourcePageClient({ pageData }: ResourcePageClientProps) {
  // Use desc as fallback for description
  const description = pageData.description || pageData.desc;

  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Link href="/">
              <Button
                variant="ghost"
                leftIcon={<FaArrowLeft />}
                className="mb-8 text-slate-400 hover:text-white"
              >
                Back to Home
              </Button>
            </Link>

            {/* Title */}
            {pageData.title && (
              <Typography
                variant="h1"
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
              >
                {pageData.title}
              </Typography>
            )}

            {/* Description */}
            {description && (
              <Typography variant="body1" className="text-slate-300 max-w-3xl text-lg">
                {description}
              </Typography>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Content Sections */}
      {pageData.content && pageData.content.length > 0 && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
              {pageData.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="space-y-4"
                >
                  {/* Section Title */}
                  {section.title && (
                    <Typography
                      variant="h2"
                      className="text-2xl md:text-3xl font-bold text-slate-100 mb-4"
                    >
                      {section.title}
                    </Typography>
                  )}

                  {/* Section Description */}
                  {section.description && (
                    <Typography
                      variant="body1"
                      className="text-slate-300 leading-relaxed text-lg whitespace-pre-line"
                    >
                      {section.description}
                    </Typography>
                  )}

                  {/* List Title */}
                  {section.listTitle && (
                    <Typography
                      variant="body1"
                      className="text-slate-300 leading-relaxed text-lg mt-4"
                    >
                      {section.listTitle}
                    </Typography>
                  )}

                  {/* List Items */}
                  {section.list && section.list.length > 0 && (
                    <ul className="space-y-3 mt-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle className="text-brand-gold text-lg mt-1 flex-shrink-0" />
                          <Typography className="text-slate-300">
                            {typeof item === 'string' ? item : item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* List Footer */}
                  {section.listFooter && (
                    <Typography
                      variant="body1"
                      className="text-slate-300 leading-relaxed text-lg mt-4"
                    >
                      {section.listFooter}
                    </Typography>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Footer Section */}
      {pageData.footer && (
        <Section className="bg-slate-900/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Typography variant="body1" className="text-slate-300 leading-relaxed text-lg">
                {pageData.footer}
              </Typography>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Last Updated */}
      {pageData.lastUpdated && (
        <Section className="py-8">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Typography variant="body2" className="text-slate-500 text-center">
                {pageData.lastUpdated}
              </Typography>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
