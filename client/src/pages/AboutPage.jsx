import React from 'react';
import AboutHero from '../components/about/AboutHero';
import PhilosophySection from '../components/about/PhilosophySection';
import FieldGallery from '../components/about/FieldGallery';
import MissionVision from '../components/about/MissionVision';
import ImpactMilestones from '../components/about/ImpactMilestones';

export default function AboutPage({ onOpenPartnerModal }) {
  return (
    <>
      <AboutHero onOpenPartnerModal={onOpenPartnerModal} />
      <PhilosophySection />
      <FieldGallery />
      <MissionVision />
      <ImpactMilestones onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}
