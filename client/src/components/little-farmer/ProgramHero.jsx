import React from 'react';
import { Sprout, CheckCircle2, Clock, ShieldCheck, ArrowDown, MapPin } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function ProgramHero({ onOpenPartnerModal }) {
  const scrollToCurriculum = () => {
    const el = document.getElementById('curriculum');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
                FLAGSHIP INITIATIVE
              </span>
              <span className="text-black/20">•</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <MapPin size={11} />
                Masaka Sector Pilot, Kigali
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
              Where green thumbs meet financial smarts.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-8">
              A 4-week experiential program transforming children aged 6–14 into active food producers and savers. Through durable HDPE Cone Gardens, waste-to-farm engineering, and the DreamDo Saving Box, students learn biological sciences and financial literacy from the ground up.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenPartnerModal}
                className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Bring Program to Your School
              </button>
              <button
                onClick={scrollToCurriculum}
                className="px-5 py-3 rounded-full text-xs font-semibold text-[#143A22] bg-black/5 hover:bg-black/10 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Curriculum</span>
                <ArrowDown size={14} />
              </button>
            </div>

            {/* Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-black/5">
              <div className="flex items-center gap-2 text-xs font-medium text-[#556358]">
                <CheckCircle2 size={16} className="text-[#143A22]" />
                <span>Ages 6 to 14 years old</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#556358]">
                <Clock size={16} className="text-[#143A22]" />
                <span>4 weeks (3 hrs/session)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#556358]">
                <ShieldCheck size={16} className="text-[#143A22]" />
                <span>Durable 20-yr HDPE cone</span>
              </div>
            </div>
          </div>

          {/* Right Hero Field Photo */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              src="/images/school-cone-garden.jpg"
              alt="Rwandan children gathered around their school vertical Cone Garden"
              caption="Children at a school cone garden in Rwanda — learning food production firsthand."
              badge="Real School Cohort"
              isAuthentic={true}
              aspectRatio="aspect-[4/3]"
              uploadNote="Photo: Rwandan school Cone Garden"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
