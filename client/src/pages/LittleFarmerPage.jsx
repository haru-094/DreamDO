import React from 'react';
import ProgramHero from '../components/little-farmer/ProgramHero';
import CurriculumTimeline from '../components/little-farmer/CurriculumTimeline';
import DreamGoalTracker from '../components/little-farmer/DreamGoalTracker';
import WasteToFarmBlueprint from '../components/little-farmer/WasteToFarmBlueprint';
import KitShowcase from '../components/little-farmer/KitShowcase';
import PilotSpotlight from '../components/little-farmer/PilotSpotlight';
import SchoolBudgetCalculator from '../components/little-farmer/SchoolBudgetCalculator';
import ResourceCenter from '../components/little-farmer/ResourceCenter';
import TracksSection from '../components/little-farmer/TracksSection';
import CropCalculator from '../components/home/CropCalculator';
import ProgramFaq from '../components/little-farmer/ProgramFaq';
import CtaBanner from '../components/home/CtaBanner';

export default function LittleFarmerPage({ onOpenPartnerModal }) {
  return (
    <>
      <ProgramHero onOpenPartnerModal={onOpenPartnerModal} />
      <CurriculumTimeline />
      <DreamGoalTracker />
      <WasteToFarmBlueprint />
      <KitShowcase />
      <PilotSpotlight onOpenPartnerModal={onOpenPartnerModal} />
      <SchoolBudgetCalculator onOpenPartnerModal={onOpenPartnerModal} />
      <ResourceCenter onOpenPartnerModal={onOpenPartnerModal} />
      <TracksSection onOpenPartnerModal={onOpenPartnerModal} />
      <CropCalculator />
      <ProgramFaq onOpenPartnerModal={onOpenPartnerModal} />
      <CtaBanner onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}
