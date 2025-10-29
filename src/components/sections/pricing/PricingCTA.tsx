'use client';

import { Typography, Section, Button, Link, ScrollReveal } from '@/components/ui';

export default function PricingCTA() {
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" padding="lg">
      <ScrollReveal>
        <div className="text-center">
          <Typography variant="h2" align="center" className="mb-4 text-white">
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-white"
          >
            Have questions about which plan is right for you? Let&apos;s discuss your project and
            find the perfect solution for your needs.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
