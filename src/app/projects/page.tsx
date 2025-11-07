'use client';

import ProjectHero from '@/components/sections/projects/ProjectHero';
import Project from '@/components/sections/projects/Project';
import ProjectCTA from '@/components/sections/projects/ProjectCTA';

import { projects } from '@/data/projects';
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
      <ProjectCTA />
    </>
  );
}
