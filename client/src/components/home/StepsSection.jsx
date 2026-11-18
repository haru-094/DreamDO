import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, FlaskConical, Lightbulb, Sparkles, ShieldCheck } from 'lucide-react';

export default function StepsSection() {
  const { t, language } = useLanguage();
  const isRw = language === 'rw';

  const steps = [
    {
      num: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      detail: t('step1Detail'),
      icon: Compass,
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Young hands holding seed and soil during Week 1',
      uploadNote: 'Photo: Child testing soil / seeds',
    },
    {
      num: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      detail: t('step2Detail'),
      icon: FlaskConical,
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Lush green seedlings growing in container gardens',
      uploadNote: 'Photo: Drip irrigation & plant care',
    },
    {
      num: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      detail: t('step3Detail'),
      icon: Lightbulb,
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      imageSrc: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Freshly harvested crops and mushrooms in student hands',
      uploadNote: 'Photo: Harvesting dodo / oyster mushrooms',
    },
    {
      num: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      detail: t('step4Detail'),
      icon: Sparkles,
      pillColor: 'bg-[#E25822]',
      textColor: 'text-white',
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Coins and savings ledger for DreamDo Bank deposit',
      uploadNote: 'Photo: Child with Saving Box & coins',
    },
  ];

  return (
    <section id="approach-steps" className="bg-[#FBF9F4] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {t('stepsTag')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143A22] leading-tight mb-4">
            {t('stepsHeading')}
          </h2>

          <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
            {t('stepsSubtitle')}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-black/5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Space Thumbnail */}
                  <div className="mb-5 overflow-hidden rounded-2xl">
                    <ImagePlaceholder
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      aspectRatio="aspect-[4/3]"
                      uploadNote={step.uploadNote}
                      badge={`${step.num} • ${step.title}`}
                    />
                  </div>

                  {/* Header & Number Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#E25822] uppercase">
                      STAGE {step.num}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#143A22]/5 text-[#143A22] flex items-center justify-center">
                      <Icon size={16} />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#143A22] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#143A22]/80 leading-normal mb-3">
                    {step.desc}
                  </p>

                  <p className="text-xs text-[#5D6B60] leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-mono text-[#829286] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BAF035]" />
                  <span>Practical Learning Experience</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Safeguard & Child Protection Note */}
        <div className="rounded-2xl bg-white p-5 sm:p-6 border border-black/10 flex items-start gap-3 shadow-2xs">
          <ShieldCheck size={20} className="text-[#143A22] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#556358] leading-relaxed">
            <strong className="text-[#143A22] font-semibold">
              {isRw ? 'Icyitonderwa cyo Kurengera Umwana mu Burezi: ' : 'Educational Safeguard & Child Protection: '}
            </strong>
            {t('stepsSafeguardNote')}
          </p>
        </div>

      </div>
    </section>
  );
}
