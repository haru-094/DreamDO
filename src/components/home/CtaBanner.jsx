import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, ShoppingBag, School, HeartHandshake, Compass } from 'lucide-react';

export default function CtaBanner({ onOpenPartnerModal }) {
  const { t, language } = useLanguage();
  const isRw = language === 'rw';

  return (
    <section className="bg-[#C0F038] text-[#143A22] py-20 sm:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Headline */}
          <div className="lg:col-span-6">
            <div className="mb-4">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-[#143A22]/70 uppercase font-mono">
                {t('ctaTag')}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#143A22] leading-[1.08] mb-4">
              {t('ctaHeading1')}<br />
              {t('ctaHeading2')}
            </h2>

            <p className="text-base sm:text-lg text-[#143A22]/90 leading-relaxed font-medium max-w-lg">
              {t('ctaBody')}
            </p>
          </div>

          {/* Right Action Grid for 4 Pathways */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* 1. Get a Cone Garden */}
              <button
                onClick={() => onOpenPartnerModal && onOpenPartnerModal({
                  type: 'product',
                  message: isRw ? 'Ndashaka gutumiza Ubusitani bw’Umunara (Cone Garden).' : 'Inquiry: I would like to order a Cone Garden.',
                })}
                className="p-4 rounded-2xl bg-[#143A22] text-white hover:bg-[#1a4a2c] active:scale-98 transition-all flex items-center justify-between text-left shadow-sm cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#BAF035] uppercase font-bold">
                    {isRw ? 'INGO N’ABAHINZI' : 'Households'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold">{t('ctaButton1')}</div>
                </div>
                <ShoppingBag size={18} className="text-[#BAF035] shrink-0" />
              </button>

              {/* 2. Explore Little Farmer */}
              <Link
                to="/little-farmer"
                className="p-4 rounded-2xl bg-white text-[#143A22] hover:bg-black/5 active:scale-98 transition-all flex items-center justify-between text-left shadow-2xs cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#E25822] uppercase font-bold">
                    {isRw ? 'INTEGANYANYIGISHO' : 'Curriculum'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold">{t('ctaButton2')}</div>
                </div>
                <Compass size={18} className="text-[#143A22] shrink-0" />
              </Link>

              {/* 3. Bring DreamDo to Your School */}
              <button
                onClick={() => onOpenPartnerModal && onOpenPartnerModal({
                  type: 'school',
                  message: isRw ? 'Ubusabe bwo kuzana gahunda y’Umuhinzi Muto mu kigo cyacu.' : 'Inquiry: Bring Little Farmer to our school campus.',
                })}
                className="p-4 rounded-2xl bg-white text-[#143A22] hover:bg-black/5 active:scale-98 transition-all flex items-center justify-between text-left shadow-2xs cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#143A22]/70 uppercase font-bold">
                    {isRw ? 'AMASHURI N’ABARIMU' : 'Educators'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold">{t('ctaButton3')}</div>
                </div>
                <School size={18} className="text-[#143A22] shrink-0" />
              </button>

              {/* 4. Partner With Us */}
              <button
                onClick={() => onOpenPartnerModal && onOpenPartnerModal({
                  type: 'community',
                  message: isRw ? 'Ubufatanye bw’ikigo, CSR, cyangwa umushinga w’abaturage.' : 'Inquiry: Corporate CSR, community hub, or organizational partnership.',
                })}
                className="p-4 rounded-2xl bg-white text-[#143A22] hover:bg-black/5 active:scale-98 transition-all flex items-center justify-between text-left shadow-2xs cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#143A22]/70 uppercase font-bold">
                    {isRw ? 'ABAFATANYABIKORWA' : 'Partners & CSR'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold">{t('ctaButton4')}</div>
                </div>
                <HeartHandshake size={18} className="text-[#143A22] shrink-0" />
              </button>
            </div>

            {/* Target Audience List */}
            <div className="text-xs font-semibold text-[#143A22]/80 tracking-wide font-mono text-center sm:text-left">
              ✦ {t('ctaAudience')}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
