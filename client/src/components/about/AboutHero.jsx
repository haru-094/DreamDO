import React from 'react';
import { Sparkles, MapPin, Heart } from 'lucide-react';

export default function AboutHero({ onOpenPartnerModal }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
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
          <p className="text-lg sm:text-xl text-[#465349] leading-relaxed mb-8">
            DreamDo Africa operates at the intersection of early childhood development, sustainable agriculture, and real-world financial literacy. We believe that when children produce their own food and manage their own earnings, they discover lifelong agency.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              Partner with DreamDo
            </button>
            <div className="flex items-center gap-2 text-xs text-[#6A786E] font-medium bg-white px-4 py-2.5 rounded-full border border-black/5">
              <Sparkles size={14} className="text-[#E25822]" />
              <span>Founded at African Leadership University (ALU)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

