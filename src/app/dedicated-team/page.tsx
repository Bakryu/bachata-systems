'use client';

import DedicatedTeamHero from '@/components/sections/DedicatedTeamHero';
import HowWeWork from '@/components/sections/HowWeWork';
import SprintTimelineCircular from '@/components/sections/services/SprintTimelineCircular';
import TeamMembers from '@/components/sections/TeamMembers';
import FAQ from '@/components/sections/FAQ';
import HomeCTA from '@/components/sections/HomeCTA';

export default function TeamPage() {
  return (
    <>
      <DedicatedTeamHero />
      <TeamMembers />
      <HowWeWork />
      <SprintTimelineCircular />
      <FAQ page="dedicated-team" />
      <HomeCTA />
    </>
  );
}
