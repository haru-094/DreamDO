import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroIllustration from './HeroIllustration';

export default function Hero({ onOpenPartnerModal }) {
  const scrollToSteps = (e) => {
    e.preventDefault();
    const element = document.querySelector('#steps');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#6A786E] uppercase">
                DREAMDO RWANDA / LITTLE FARMER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
              Little hands.<br />
              Big harvests.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#465349] max-w-xl font-normal leading-relaxed mb-8">
              A hands-on food and money journey for the next generation — from the first seed to a first sale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12">
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#143A22] hover:bg-[#1d4f30] active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Bring Little Farmer to your school
              </button>

              <Link
                to="/little-farmer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#143A22] hover:text-[#E25822] transition-colors py-2 group cursor-pointer"
              >
                <span>Explore the Little Farmer program</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Footnote / Micro tag */}
            <div className="pt-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#86968B] uppercase">
                BUILT FOR RWANDA • SCALED FOR IMPACT
              </span>
            </div>
          </div>

          {/* Right Hero Graphic Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}

