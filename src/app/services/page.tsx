'use client';

import React from 'react';
import CaseStudies from '@/components/sections/services/futuristic/CaseStudies';
import FinalCTA from '@/components/sections/services/futuristic/FinalCTA';

// Alternative variants
// import HeroFuturisticAlt from '@/components/sections/services/futuristic/variants/HeroFuturisticAlt';
import ServicesGridAlt from '@/components/sections/services/futuristic/variants/ServicesGridAlt';
import TechStackAlt from '@/components/sections/services/futuristic/variants/TechStackAlt';
import SprintTimelineAccordion from '@/components/sections/services/futuristic/variants/SprintTimelineAccordion';
import SprintTimelineCircular from '@/components/sections/services/futuristic/variants/SprintTimelineCircular';

export default function ServicesPage() {
  return (
    <>
      {/* <HeroFuturisticAlt /> */}
      <ServicesGridAlt />
      <SprintTimelineAccordion />
      <SprintTimelineCircular />

      <TechStackAlt />

      <CaseStudies />
      <FinalCTA />
    </>
  );
}
