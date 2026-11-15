import React, { useState } from 'react';
import { ArrowUpRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroIllustration from './HeroIllustration';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero({ onOpenPartnerModal }) {
  const [viewMode, setViewMode] = useState('illustration'); // 'illustration' or 'real'
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#6A786E] uppercase font-mono">
                {t('heroTag')}
              </span>
              <span className="text-black/20">•</span>
              <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2 py-0.5 rounded-full">
                {t('heroPilot')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
              {t('heroTitle1')}<br />
              {t('heroTitle2')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#465349] max-w-xl font-normal leading-relaxed mb-8">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10">
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#143A22] hover:bg-[#1d4f30] active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                {t('heroCtaPrimary')}
              </button>

              <Link
                to="/little-farmer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#143A22] hover:text-[#E25822] transition-colors py-2 group cursor-pointer"
              >
                <span>{t('heroCtaSecondary')}</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Footnote / Micro tag */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#86968B] uppercase font-mono">
                {t('heroFootnote')}
              </span>
            </div>
          </div>

          {/* Right Column: Toggle between Figma Concept & Real Field Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* View Switcher Toggle */}
            <div className="mb-4 inline-flex items-center gap-1 bg-white p-1 rounded-full border border-black/10 shadow-2xs">
              <button
                onClick={() => setViewMode('illustration')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'illustration'
                    ? 'bg-[#143A22] text-white shadow-2xs'
                    : 'text-[#5C6A60] hover:text-[#143A22]'
                }`}
              >
                {t('heroToggleConcept')}
              </button>
              <button
                onClick={() => setViewMode('real')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'real'
                    ? 'bg-[#BAF035] text-[#143A22] font-bold shadow-2xs'
                    : 'text-[#5C6A60] hover:text-[#143A22]'
                }`}
              >
                <Camera size={13} />
                <span>{t('heroTogglePhoto')}</span>
              </button>
            </div>

            {/* Display Graphic or Photo */}
            <div className="w-full">
              {viewMode === 'illustration' ? (
                <HeroIllustration />
              ) : (
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  <ImagePlaceholder
                    src="/images/school-cone-garden.jpg"
                    alt="Rwandan children gathered around an HDPE Cone Garden at school"
                    caption={t('heroPhotoCaption')}
                    badge={language === 'rw' ? 'Ifoto Nyakuri' : 'Authentic Field Photo'}
                    isAuthentic={true}
                    aspectRatio="aspect-[4/3]"
                    uploadNote="Photo: Concept Note Page 1"
                  />
                  <div className="text-center mt-2.5">
                    <span className="text-[11px] text-[#718075] italic">
                      {language === 'rw'
                        ? 'Ubusitani bw’umunara wa HDPE mu kigo cy’ishuri, Kigali'
                        : 'Durable HDPE Cone Garden in action with school cohort, Kigali'}
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
