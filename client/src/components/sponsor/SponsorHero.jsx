import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SponsorHero({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const scrollToCalculator = () => {
    const el = document.getElementById('sponsor-calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'INKUNGA N’UBUFATANYE' : 'PARTNERSHIPS & SPONSORSHIP'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <HeartHandshake size={12} />
              {isRw ? 'Amashuri ya Leta n’Impunzi' : 'Rural & Refugee Public Schools'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
            {isRw
              ? 'Tera inkunga ikigo cy’ishuri. Hindura ejo hazaza h’abana.'
              : 'Sponsor a School Garden. Invest in Future Food Leaders.'}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-8">
            {isRw
              ? 'Tanga ibikoresho birambye by’imyaka 20 (Cone Gardens), amasanduku yo kuzigama, n’amahugurwa y’abarimu mu mashuri akeneye ubufasha mu Rwanda. Igiciro cya buri kintu kirasobanutse 100% nta bwiru.'
              : 'Fund durable 20-year Cone Gardens, student Saving Boxes, and facilitator mentorship for under-resourced public and refugee-hosting schools across Rwanda. 100% transparent unit economics.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={scrollToCalculator}
              className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-98 transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>{isRw ? 'Bara Igiciro cy’Inkunga' : 'Calculate Sponsorship Package'}</span>
              <ArrowDown size={14} />
            </button>
            <button
              onClick={onOpenPartnerModal}
              className="px-5 py-3 rounded-full text-xs font-semibold text-[#143A22] bg-white border border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
            >
              {isRw ? 'Vugana natwe ako kanya' : 'Speak to Partnerships Team'}
            </button>
          </div>

          {/* Key Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-black/5 text-xs text-[#556358] font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Uburambe bw’imyaka 20' : '20-year garden lifespan'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Kuzigama 100% bishingiye ku mwete' : '100% merit-based savings'}</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Icyiciro cy’imibare gisobanutse' : 'Transparent unit costs'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

