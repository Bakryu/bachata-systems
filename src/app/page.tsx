'use client';

import WhoWeAre from '@/components/sections/WhoWeAre';
import FeaturedProjectsShowcase from '@/components/sections/FeaturedProjectsShowcase';
import ServicesPreview from '@/components/sections/ServicesPreview';
import OurProceses from '@/components/sections/OurProceses';
import HomeCTA from '@/components/sections/HomeCTA';
import { title } from 'process';
import { desc, footer } from 'framer-motion/client';
import { list } from 'postcss';

export default function HomePage() {
  return (
    <>
      {/* Hero + Who We Are combined section */}
      <WhoWeAre />

      <ServicesPreview />
      <OurProceses />

      <FeaturedProjectsShowcase />

      {/* CTA Section */}
      <HomeCTA />
    </>
  );
}
