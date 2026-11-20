import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';
import { TrendingUp, Users, Compass, Award } from 'lucide-react';

export default function StorySection() {
  const { t, language } = useLanguage();
  const isRw = language === 'rw';

  const nisrStats = [
    {
      value: t('storyStat1Val'),
      label: t('storyStat1Label'),
      icon: TrendingUp,
    },
    {
      value: t('storyStat2Val'),
      label: t('storyStat2Label'),
      icon: Users,
    },
    {
      value: t('storyStat3Val'),
      label: t('storyStat3Label'),
      icon: Compass,
    },
    {
      value: t('storyStat4Val'),
      label: t('storyStat4Label'),
      icon: Award,
    },
  ];

  return (
    <section id="approach" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker */}
        <div className="mb-4">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
            {t('storyTag')}
          </span>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
          
          {/* Left Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143A22] leading-[1.15] mb-6">
              {t('storyHeading')}
            </h2>
            <p className="text-base sm:text-lg text-[#465349] leading-relaxed font-normal mb-6">
              {t('storyBody')}
            </p>

            {/* Sand Quote Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-black/5 relative overflow-hidden">
              <div className="text-4xl text-[#143A22]/20 font-serif leading-none absolute top-3 left-4 select-none">
                “
              </div>
              <blockquote className="relative z-10 pl-5 text-base sm:text-lg font-bold text-[#143A22] italic leading-snug">
                {t('storyQuote')}
              </blockquote>
              <div className="relative z-10 pl-5 mt-2 text-xs text-[#6A786E] font-medium font-mono">
                {t('storyQuoteAuthor')}
              </div>
            </div>
          </div>

          {/* Right Verified NISR Statistics Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-black/10 rounded-2xl p-6 sm:p-7 bg-[#FAF8F5]">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#143A22] font-mono">
                  {t('storyStatTitle')}
                </span>
                <span className="text-[10px] font-mono text-[#E25822] bg-[#E25822]/10 px-2 py-0.5 rounded-full font-bold">
                  Official Indicators
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nisrStats.map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <div key={i} className="p-4 rounded-xl bg-white border border-black/5 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#143A22] font-mono">
                          {st.value}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-[#143A22]/5 text-[#143A22] flex items-center justify-center">
                          <Icon size={14} />
                        </div>
                      </div>
                      <p className="text-xs text-[#5D6B60] leading-snug">
                        {st.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-[#839187] font-mono mt-4 pt-3 border-t border-black/5">
                {isRw
                  ? 'Imibare yemejwe n’Ikigo cy’Igihugu cy’Ibarurishamibare (NISR).'
                  : 'Verified against National Institute of Statistics of Rwanda (NISR) publications.'}
              </p>
            </div>
          </div>

        </div>

        {/* Realistic Field Photo Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <ImagePlaceholder
            src="/images/school-cone-garden.jpg"
            alt="School children interacting around a multi-tier vertical Cone Garden"
            caption={isRw ? "Abanyeshuri b'i Rwanda bakorera hamwe ku munara w'ubusitani mu kigo cy'ishuri." : "Students in Rwanda gathered around a school Cone Garden, inspecting daily growth."}
            badge={isRw ? "Ubusitani bw'Ishuri" : "School Cone Garden"}
            isAuthentic={true}
            aspectRatio="aspect-[16/10]"
            uploadNote="Photo: Rwandan students at Cone Garden"
          />
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=800&q=80"
            alt="Hands nurturing healthy green seedling sprout in rich soil"
            caption={isRw ? "Kwiga mu bikorwa: Buri mwana yitondera igihingwa cye kuva ku rubuto." : "Hands-on learning: Every child tends their own plant from seed to maturity."}
            badge={isRw ? "Ubumenyi bw'Ubutaka" : "Hands-On Soil Science"}
            aspectRatio="aspect-[16/10]"
            uploadNote="Add student seed-planting photo"
          />
        </div>

      </div>
    </section>
  );
}
