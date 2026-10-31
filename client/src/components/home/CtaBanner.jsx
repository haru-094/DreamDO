import React from 'react';

export default function CtaBanner({ onOpenPartnerModal }) {
  return (
    <section className="bg-[#C0F038] text-[#143A22] py-20 sm:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Headline */}
          <div className="lg:col-span-6">
            <div className="mb-4">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-[#143A22]/70 uppercase font-mono">
                LET’S GROW THIS TOGETHER
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#143A22] leading-[1.08]">
              Plant the idea.<br />
              Grow the future.
            </h2>
          </div>

          {/* Right Action & Subtext */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            <p className="text-base sm:text-lg text-[#143A22]/90 leading-relaxed font-medium mb-8 max-w-lg">
              Bring Little Farmer to a school or community. Partner with DreamDo to make practical learning part of every child’s story.
            </p>

            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-95 transition-all shadow-md hover:shadow-lg cursor-pointer mb-5"
            >
              Reach out to partner with us
            </button>

            {/* Target Audience List */}
            <div className="text-xs font-semibold text-[#143A22]/70 tracking-wide">
              Schools <span className="opacity-40">•</span> Families <span className="opacity-40">•</span> Community partners
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

