import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background Soft Sage Circle */}
      <div className="absolute inset-4 sm:inset-6 bg-[#C4E2CE] rounded-full transition-transform duration-700 hover:scale-[1.02]"></div>

      {/* Floating Lime Sun / Orb */}
      <div 
        className="absolute top-4 right-10 sm:top-6 sm:right-16 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D8F243] shadow-sm animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Small Floating Dots */}
      <div className="absolute bottom-12 left-16 sm:left-24 w-3.5 h-3.5 rounded-full bg-[#E25822] shadow-sm" />
      <div className="absolute bottom-12 right-16 sm:right-24 w-3 h-3 rounded-full bg-[#143A22] opacity-80" />

      {/* Vertical Planter Tower Illustration */}
      <div className="relative z-10 flex flex-col items-center animate-float-slow">
        <svg 
          viewBox="0 0 240 290" 
          className="w-56 sm:w-64 md:w-72 drop-shadow-md"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Cap */}
          <rect x="70" y="18" width="100" height="14" rx="7" fill="#143A22" />

          {/* Core Planter Body */}
          <rect x="76" y="30" width="88" height="205" rx="6" fill="#E26A45" />

          {/* Tier 1 - Sprouting Tray */}
          {/* Sprouts Tier 1 */}
          <g transform="translate(0, 0)">
            {/* Sprout Left */}
            <path d="M92 48 V34 M88 32 C88 28 92 27 94 30 C94 33 90 35 88 32 Z M92 34 C94 30 98 31 98 34 C96 37 93 36 92 34 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
            {/* Sprout Center */}
            <path d="M120 48 V33 M116 31 C116 27 120 26 122 29 C122 32 118 34 116 31 Z M120 33 C122 29 126 30 126 33 C124 36 121 35 120 33 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
            {/* Sprout Right */}
            <path d="M148 48 V34 M144 32 C144 28 148 27 150 30 C150 33 146 35 144 32 Z M148 34 C150 30 154 31 154 34 C152 37 149 36 148 34 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
          </g>
          {/* Tray Shelf 1 (White rounded pill) */}
          <rect x="67" y="47" width="106" height="20" rx="10" fill="#FFFFFF" stroke="#E6E0D6" strokeWidth="1" />

          {/* Tier 2 - Sprouting Tray */}
          <g transform="translate(0, 60)">
            {/* Sprout Left */}
            <path d="M92 48 V34 M88 32 C88 28 92 27 94 30 C94 33 90 35 88 32 Z M92 34 C94 30 98 31 98 34 C96 37 93 36 92 34 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
            {/* Sprout Center */}
            <path d="M120 48 V33 M116 31 C116 27 120 26 122 29 C122 32 118 34 116 31 Z M120 33 C122 29 126 30 126 33 C124 36 121 35 120 33 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
            {/* Sprout Right */}
            <path d="M148 48 V34 M144 32 C144 28 148 27 150 30 C150 33 146 35 144 32 Z M148 34 C150 30 154 31 154 34 C152 37 149 36 148 34 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
          </g>
          {/* Tray Shelf 2 */}
          <rect x="67" y="107" width="106" height="20" rx="10" fill="#FFFFFF" stroke="#E6E0D6" strokeWidth="1" />

          {/* Tier 3 - Sprouting Tray */}
          <g transform="translate(0, 120)">
            {/* Sprout Left */}
            <path d="M92 48 V34 M88 32 C88 28 92 27 94 30 C94 33 90 35 88 32 Z M92 34 C94 30 98 31 98 34 C96 37 93 36 92 34 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
            {/* Sprout Center */}
            <path d="M120 48 V33 M116 31 C116 27 120 26 122 29 C122 32 118 34 116 31 Z M120 33 C122 29 126 30 126 33 C124 36 121 35 120 33 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
            {/* Sprout Right */}
            <path d="M148 48 V34 M144 32 C144 28 148 27 150 30 C150 33 146 35 144 32 Z M148 34 C150 30 154 31 154 34 C152 37 149 36 148 34 Z" stroke="#143A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#163A24" />
          </g>
          {/* Tray Shelf 3 */}
          <rect x="67" y="167" width="106" height="20" rx="10" fill="#FFFFFF" stroke="#E6E0D6" strokeWidth="1" />

          {/* Bottom Planter Base */}
          <rect x="72" y="232" width="96" height="12" rx="6" fill="#143A22" />
        </svg>

        {/* Pinned Pill Badge: GROW • SELL • SAVE */}
        <div className="mt-1 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200/80 shadow-sm">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#143A22] uppercase">
            GROW • SELL • SAVE
          </span>
        </div>
      </div>
    </div>
  );
}

