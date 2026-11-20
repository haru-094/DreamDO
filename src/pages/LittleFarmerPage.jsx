import React from 'react';
import ProgramHero from '../components/little-farmer/ProgramHero';
import CurriculumTimeline from '../components/little-farmer/CurriculumTimeline';
import DreamGoalTracker from '../components/little-farmer/DreamGoalTracker';
import KitShowcase from '../components/little-farmer/KitShowcase';
import TracksSection from '../components/little-farmer/TracksSection';
import ProgramFaq from '../components/little-farmer/ProgramFaq';
import CtaBanner from '../components/home/CtaBanner';

export default function LittleFarmerPage({ onOpenPartnerModal }) {
  return (
    <>
      <ProgramHero onOpenPartnerModal={onOpenPartnerModal} />
      <CurriculumTimeline />
      <DreamGoalTracker />
      <KitShowcase />
      <TracksSection onOpenPartnerModal={onOpenPartnerModal} />
      <ProgramFaq onOpenPartnerModal={onOpenPartnerModal} />
      <CtaBanner onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}
