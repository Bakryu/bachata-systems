'use client';

import ProjectHero from '@/components/sections/projects/ProjectHero';
import HomeCTA from '@/components/sections/HomeCTA';
import Projects from '@/components/sections/projects/Projects';
// Project data from FeaturedProjectsShowcase

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section - New Design */}
      <ProjectHero />

      {/* Projects */}
      <Projects />

      {/* CTA Section */}
      <HomeCTA />
    </>
  );
}
