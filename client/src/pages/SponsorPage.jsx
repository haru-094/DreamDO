import React from 'react';
import SponsorHero from '../components/sponsor/SponsorHero';
import SchoolBudgetCalculator from '../components/little-farmer/SchoolBudgetCalculator';
import PilotSpotlight from '../components/little-farmer/PilotSpotlight';
import ResourceCenter from '../components/little-farmer/ResourceCenter';
import CtaBanner from '../components/home/CtaBanner';

export default function SponsorPage({ onOpenPartnerModal }) {
  return (
    <>
      <SponsorHero onOpenPartnerModal={onOpenPartnerModal} />
      <SchoolBudgetCalculator onOpenPartnerModal={onOpenPartnerModal} />
      <PilotSpotlight onOpenPartnerModal={onOpenPartnerModal} />
      <ResourceCenter onOpenPartnerModal={onOpenPartnerModal} />
      <CtaBanner onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}

