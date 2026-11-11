import React from 'react';
import AboutHero from '../components/about/AboutHero';
import PhilosophySection from '../components/about/PhilosophySection';
import StudentSpotlights from '../components/about/StudentSpotlights';
import RwandaContextBanner from '../components/about/RwandaContextBanner';
import FieldGallery from '../components/about/FieldGallery';
import MissionVision from '../components/about/MissionVision';
import ImpactMilestones from '../components/about/ImpactMilestones';

export default function AboutPage({ onOpenPartnerModal }) {
  return (
    <>
      <AboutHero onOpenPartnerModal={onOpenPartnerModal} />
      <PhilosophySection />
      <StudentSpotlights />
      <RwandaContextBanner />
      <FieldGallery />
      <MissionVision />
      <ImpactMilestones onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}
