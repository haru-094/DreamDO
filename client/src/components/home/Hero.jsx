import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ShoppingBag, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroIllustration from './HeroIllustration';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero({ onOpenPartnerModal }) {
  const [viewMode, setViewMode] = useState('illustration'); // 'illustration' or 'real'
  const { t, language } = useLanguage();

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tag / Kicker & Slogan Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
                {t('heroTag')}
              </span>
              <span className="text-black/20 hidden sm:inline">•</span>
              <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
                <Sparkles size={11} className="text-[#143A22]" />
                {t('heroSlogan')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
              {t('heroTitle1')}<br />
              <span className="text-[#143A22]">{t('heroTitle2')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#465349] max-w-xl font-normal leading-relaxed mb-8">
              {t('heroSubtitle')}
            </p>

            {/* 3 Strategic CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              {/* Primary: Explore Little Farmer */}
              <Link
                to="/little-farmer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer gap-1.5"
              >
                <span>{t('heroCtaPrimary')}</span>
                <ArrowUpRight size={15} />
              </Link>

              {/* Secondary: Explore Our Products */}
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#143A22] bg-white border border-black/10 hover:bg-black/5 hover:border-black/20 transition-all cursor-pointer shadow-2xs gap-1.5"
              >
                <ShoppingBag size={14} className="text-[#E25822]" />
                <span>{t('heroCtaProducts')}</span>
              </button>

              {/* Tertiary: Partner With DreamDo */}
              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#556358] hover:text-[#143A22] hover:bg-black/5 transition-all cursor-pointer gap-1.5"
              >
                <HeartHandshake size={14} />
                <span>{t('heroCtaPartner')}</span>
              </button>
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
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'real'
                    ? 'bg-[#143A22] text-white shadow-2xs'
                    : 'text-[#5C6A60] hover:text-[#143A22]'
                }`}
              >
                {t('heroTogglePhoto')}
              </button>
            </div>

            {/* Visual Container */}
            <div className="w-full flex justify-center items-center">
              {viewMode === 'illustration' ? (
                <div className="w-full animate-in fade-in duration-300">
                  <HeroIllustration />
                </div>
              ) : (
                <div className="w-full max-w-[480px] animate-in fade-in duration-300">
                  <ImagePlaceholder
                    src="/images/school-cone-garden.jpg"
                    alt="Rwandan children at school vertical Cone Garden"
                    caption={t('heroPhotoCaption')}
                    badge={t('heroPilot')}
                    isAuthentic={true}
                    aspectRatio="aspect-square"
                    uploadNote="Photo: Rwandan school Cone Garden"
                  />
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
