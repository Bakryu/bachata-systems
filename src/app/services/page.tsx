'use client';

import React, { Suspense } from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesDetailed from '@/components/sections/services/ServicesDetailed';
import CaseStudies from '@/components/sections/services/CaseStudies';

// Original sections
import TechStack from '@/components/sections/services/TechStack';
import HomeCTA from '@/components/sections/HomeCTA';
import FAQ from '@/components/sections/FAQ';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Suspense fallback={<div className="py-20" />}>
        <ServicesDetailed />
      </Suspense>

      <TechStack />
      <CaseStudies />
      <FAQ page="services" />
      <HomeCTA />
    </>
  );
}
