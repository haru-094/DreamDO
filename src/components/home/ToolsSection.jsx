import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Compass, Shield, BookOpen, Layers } from 'lucide-react';

export default function ToolsSection() {
  const { t, language } = useLanguage();
  const isRw = language === 'rw';

  const tools = [
    {
      num: '01',
      title: t('tool1Title'),
      role: t('tool1Role'),
      desc: t('tool1Desc'),
      icon: Layers,
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      badge: isRw ? 'Ubusitani bw’Umunara' : 'Vertical Cone Garden',
      uploadNote: isRw ? 'Ifoto: Ubusitani bw’Umunara ku Ishuri' : 'Photo: School Cone Garden',
    },
    {
      num: '02',
      title: t('tool2Title'),
      role: t('tool2Role'),
      desc: t('tool2Desc'),
      icon: BookOpen,
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Amakarita y’Imirimo' : 'Mission Playbook',
      uploadNote: isRw ? 'Ifoto: Amakarita y’Imirimo' : 'Photo: Mission cards / logbooks',
    },
    {
      num: '03',
      title: t('tool3Title'),
      role: t('tool3Role'),
      desc: t('tool3Desc'),
      icon: Shield,
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Isanduku ya DreamDo' : 'DreamDo Saving Box',
      uploadNote: isRw ? 'Ifoto: Isanduku yo Kuzigama' : 'Photo: Student Saving Box',
    },
    {
      num: '04',
      title: t('tool4Title'),
      role: t('tool4Role'),
      desc: t('tool4Desc'),
      icon: Compass,
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Amahugurwa n’Ubujyanama' : 'Facilitator Coaching',
      uploadNote: isRw ? 'Ifoto: Amahugurwa y’Abarimu' : 'Photo: Teacher & facilitator training',
    },
  ];

  return (
    <section id="system" className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono">
              {t('toolsTag')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t('toolsHeading')}
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed">
            {t('toolsBody')}
          </p>
        </div>

        {/* 4 Cards Grid - Presented as Learning Enablers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#C0F038]/40 transition-all duration-300"
              >
                <div>
                  {/* Photo Space Thumbnail */}
                  <div className="mb-5 overflow-hidden rounded-2xl">
                    <ImagePlaceholder
                      src={tool.imageSrc}
                      alt={tool.title}
                      aspectRatio="aspect-[4/3]"
                      badge={tool.badge}
                      isAuthentic={tool.isAuthentic}
                      uploadNote={tool.uploadNote}
                    />
                  </div>

                  {/* Number & Role Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#C0F038]">
                      {isRw ? 'UBURYO' : 'ENABLER'} {tool.num}
                    </span>
                    <span className="w-7 h-7 rounded-lg bg-white/10 text-[#C0F038] flex items-center justify-center">
                      <Icon size={14} />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {tool.title}
                  </h3>

                  <div className="text-xs font-mono font-semibold text-[#BAF035] mb-3">
                    {tool.role}
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-white/50">
                  <Sparkles size={11} className="text-[#C0F038]" />
                  <span>{isRw ? 'Ubufasha mu Myigire' : 'Educational Enabler'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
