import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function StorySection() {
  const { t, language } = useLanguage();
  const isRw = language === 'rw';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
          
          {/* Left Headline */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143A22] leading-[1.15] mb-6">
              {t('storyHeading')}
            </h2>
            <p className="text-base sm:text-lg text-[#465349] leading-relaxed font-normal">
              {t('storyBody')}
            </p>
          </div>

          {/* Right Explanation & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-black/5 text-sm text-[#556358] leading-relaxed">
              <strong className="text-[#143A22] font-semibold block mb-1">
                {t('storyStatTitle')}
              </strong>
              {t('storyStatText')}
            </div>

            {/* Sand Quote Box */}
            <div className="bg-[#F2EFE8] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all hover:shadow-xs">
              <div className="text-4xl text-[#143A22]/20 font-serif leading-none absolute top-4 left-4 select-none">
                “
              </div>
              <blockquote className="relative z-10 pl-4 sm:pl-6 text-base sm:text-lg font-bold text-[#143A22] italic leading-relaxed">
                {t('storyQuote')}
              </blockquote>
              <div className="relative z-10 pl-4 sm:pl-6 mt-3 text-xs text-[#6A786E] font-medium">
                {t('storyQuoteAuthor')}
              </div>
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
