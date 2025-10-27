'use client';

import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesDetailed from '@/components/sections/services/ServicesDetailed';
import CaseStudies from '@/components/sections/services/CaseStudies';

// Original sections
import TechStackA from '@/components/sections/services/TechStackA';
import HomeCTA from '@/components/sections/HomeCTA';
import FAQ from '@/components/sections/FAQ';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetailed />

      <TechStackA />
      <CaseStudies />
      <FAQ page="services" />
      <HomeCTA />
    </>
  );
}
