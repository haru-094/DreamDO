import React from 'react';
import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import StorySection from '../components/home/StorySection';
import StepsSection from '../components/home/StepsSection';
import ToolsSection from '../components/home/ToolsSection';
import CropCalculator from '../components/home/CropCalculator';
import CtaBanner from '../components/home/CtaBanner';

export default function HomePage({ onOpenPartnerModal }) {
  return (
    <>
      <Hero onOpenPartnerModal={onOpenPartnerModal} />
      <StatsBar />
      <StorySection />
      <StepsSection />
      <ToolsSection />
      <CropCalculator />
      <CtaBanner onOpenPartnerModal={onOpenPartnerModal} />
    </>
  );
}

