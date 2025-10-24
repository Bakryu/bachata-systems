'use client';

import React, { Suspense } from 'react';
import CaseStudies from '@/components/sections/services/CaseStudies';
import FinalCTA from '@/components/sections/services/FinalCTA';

import ServicesDetailed from '@/components/sections/services/ServicesDetailed'; // Tabbed Layout

// Original sections
import SprintTimelineAccordion from '@/components/sections/services/SprintTimelineAccordion';
import SprintTimelineCircular from '@/components/sections/services/SprintTimelineCircular';
import TechStackA from '@/components/sections/services/TechStackA';

// Loading component for Suspense
function ServicesLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white text-xl">Loading services...</div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={<ServicesLoading />}>
        <ServicesDetailed />
      </Suspense>

      <SprintTimelineAccordion />
      <SprintTimelineCircular />
      <TechStackA />
      <CaseStudies />
      <FinalCTA />
    </>
  );
}
