import React from 'react';
import ProgramHero from '../components/little-farmer/ProgramHero';
import CurriculumTimeline from '../components/little-farmer/CurriculumTimeline';
import KitShowcase from '../components/little-farmer/KitShowcase';
import TracksSection from '../components/little-farmer/TracksSection';
import CropCalculator from '../components/home/CropCalculator';
import ProgramFaq from '../components/little-farmer/ProgramFaq';
import CtaBanner from '../components/home/CtaBanner';

export default function LittleFarmerPage({ onOpenPartnerModal }) {
  return (
    <>
      <ProgramHero onOpenPartnerModal={onOpenPartnerModal} />
      <CurriculumTimeline />
      <KitShowcase />
      <TracksSection onOpenPartnerModal={onOpenPartnerModal} />
      <CropCalculator />
      <ProgramFaq onOpenPartnerModal={onOpenPartnerModal} />
      <CtaBanner onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}

