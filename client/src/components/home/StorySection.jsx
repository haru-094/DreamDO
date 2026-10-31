import React from 'react';

export default function StorySection() {
  return (
    <section id="approach" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker */}
        <div className="mb-4">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
            THE WHY
          </span>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Headline */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143A22] leading-[1.15]">
              Food shouldn’t be a mystery.
            </h2>
          </div>

          {/* Right Explanation & Quote */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#465349] leading-relaxed font-normal">
              Many children grow up knowing food only as something on a plate. Little Farmer helps them discover the people, care and choices behind every harvest — by letting them grow it themselves.
            </p>

            {/* Sand Quote Box */}
            <div className="bg-[#F2EFE8] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all hover:shadow-xs">
              <div className="text-4xl text-[#143A22]/20 font-serif leading-none absolute top-4 left-4 select-none">
                “
              </div>
              <blockquote className="relative z-10 pl-4 sm:pl-6 text-base sm:text-lg font-medium text-[#143A22] italic leading-relaxed">
                “I planted it, I cared for it, and I sold it.”
              </blockquote>
              <div className="relative z-10 pl-4 sm:pl-6 mt-3 text-xs text-[#6A786E] font-medium">
                — Keza, 9, Little Farmer graduate & savings pioneer
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

