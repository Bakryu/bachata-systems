'use client';

import ProjectHero from '@/components/sections/projects/ProjectHero';
import Project from '@/components/sections/projects/Project';

import { projects } from '@/data/projects';
import HomeCTA from '@/components/sections/HomeCTA';
// Project data from FeaturedProjectsShowcase

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section - New Design */}
      <ProjectHero />

      {/* Projects */}
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}

      {/* CTA Section */}
      <HomeCTA />
    </>
  );
}
