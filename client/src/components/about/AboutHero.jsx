import React from 'react';
import { Sparkles, MapPin, Heart } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function AboutHero({ onOpenPartnerModal }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
                OUR MISSION & PURPOSE
              </span>
              <span className="text-black/20">•</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#68766C] flex items-center gap-1">
                <MapPin size={12} className="text-[#E25822]" />
                Kigali, Rwanda
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.1] mb-6">
              Building Africa’s next generation of thinkers, growers, and builders.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-6">
              DreamDo Africa is a child-centered social enterprise designed to build long-term food security, climate resilience, and economic self-reliance from the ground up. While standard interventions target adults, DreamDo intentionally equips children aged 6+ with practical agricultural, nutrition, and financial literacy skills.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-black/5 mb-8 text-xs text-[#5D6B60] leading-relaxed">
              <strong className="text-[#143A22]">Our Core Insight:</strong> A child who has never grown food cannot understand food security. A child who has never sold a harvest cannot understand value chains. A child who has never composted cannot understand climate resilience. And a child who has never earned cannot understand why saving matters.
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                Partner with DreamDo
              </button>
              <div className="flex items-center gap-2 text-xs text-[#6A786E] font-medium bg-white px-4 py-2.5 rounded-full border border-black/5">
                <Sparkles size={14} className="text-[#E25822]" />
                <span>Operating from ALU Campus, Kigali</span>
              </div>
            </div>
          </div>

          {/* Right Visual Photo Card */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              src="/images/school-cone-garden.jpg"
              alt="School children at an HDPE vertical cone garden in Rwanda"
              caption="DreamDo Little Farmer in action: Children managing their school vertical garden in Rwanda."
              badge="Authentic Program Photo"
              isAuthentic={true}
              aspectRatio="aspect-[4/3]"
              uploadNote="Photo: Little Farmer School Cohort"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
