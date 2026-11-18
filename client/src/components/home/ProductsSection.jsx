import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sprout, 
  Layers, 
  HelpCircle, 
  BookOpen, 
  PlayCircle, 
  ArrowUpRight, 
  ShoppingBag, 
  CheckCircle2,
  Users
} from 'lucide-react';

export default function ProductsSection({ onOpenPartnerModal }) {
  const { t, language } = useLanguage();
  const isRw = language === 'rw';

  const products = [
    {
      id: 'cone-garden',
      title: t('prod1Title'),
      tag: t('prod1Tag'),
      desc: t('prod1Desc'),
      cta: t('prod1Cta'),
      icon: Layers,
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      badge: isRw ? 'Ubusitani bwa HDPE' : 'Durable HDPE Cone',
      features: isRw
        ? ['Kuramba kugeza ku myaka 20', 'Buhagarara mu mwanya muto (< 1m²)', 'Bufata ingemwe 50+']
        : ['Up to 20-year lifespan', 'Footprint < 1m² footprint', 'Holds 50+ seedlings'],
      actionType: 'modal',
      modalMessage: isRw
        ? 'Ndashaka kumenya byinshi no gutumiza Ubusitani bw’Umunara (Cone Garden).'
        : 'I would like to enquire about ordering the Cone Garden vertical system.',
    },
    {
      id: 'advisory',
      title: t('prod2Title'),
      tag: t('prod2Tag'),
      desc: t('prod2Desc'),
      cta: t('prod2Cta'),
      icon: HelpCircle,
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Ubujyanama' : 'On-Site Advisory',
      features: isRw
        ? ['Gusuzuma ahantu ho guhinga', 'Guhitamo ibihingwa biboneye', 'Gukurikirana umusaruro']
        : ['Site suitability assessment', 'Crop & water planning', 'Ongoing growing support'],
      actionType: 'modal',
      modalMessage: isRw
        ? 'Ndashaka ubufasha n’ubujyanama bwo gushinga ubusitani (Garden Setup Advisory).'
        : 'I would like to book a Garden Setup Advisory session.',
    },
    {
      id: 'seedlings',
      title: t('prod3Title'),
      tag: t('prod3Tag'),
      desc: t('prod3Desc'),
      cta: t('prod3Cta'),
      icon: Sprout,
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Ingemwe zo Gutera' : 'Ready Seedlings',
      features: isRw
        ? ['Dodo, epinari, salade z’intungamubiri', 'Ingemwe zikura vuba', 'Uburyo bwo kuzitubura']
        : ['Nutrient-dense greens & herbs', 'Hardened nursery seedlings', 'Seedling multiplication advice'],
      actionType: 'modal',
      modalMessage: isRw
        ? 'Ndashaka gutumiza ingemwe zo gutera (Seedlings & Multiplication).'
        : 'I would like to order vegetable seedlings and multiplication materials.',
    },
    {
      id: 'playbook',
      title: t('prod4Title'),
      tag: t('prod4Tag'),
      desc: t('prod4Desc'),
      cta: t('prod4Cta'),
      icon: BookOpen,
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Igitabo cy’Imyigire' : 'Playbook Guide',
      features: isRw
        ? ['Imirimo 28 ifite amashusho', 'Gusuzuma indwara z’ibihingwa', 'Ibikorwa byo gukorera mu rugo no ku ishuri']
        : ['28 illustrated hands-on missions', 'Plant Doctor diagnostic guides', 'Home & classroom friendly'],
      actionType: 'modal',
      modalMessage: isRw
        ? 'Ndashaka kubona igitabo cy’Umuhinzi Muto (Little Farmer Playbook).'
        : 'I would like to purchase the DreamDo Little Farmer Playbook.',
    },
    {
      id: 'youtube',
      title: t('prod5Title'),
      tag: t('prod5Tag'),
      desc: t('prod5Desc'),
      cta: t('prod5Cta'),
      icon: PlayCircle,
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Amashusho y’Abakuru' : 'For Adult & Home Growers',
      features: isRw
        ? ['Yagenewe ababyeyi n’abahinzi bakuru', 'Inyigisho zo guhinga mu rugo', 'Kwereka ibikorwa byose mu mashusho']
        : ['Designed for parents & adult growers', 'Practical step-by-step videos', '100% free community access'],
      actionType: 'link',
      url: 'https://www.youtube.com/@dreamdoafrica',
    },
  ];

  const handleAction = (item) => {
    if (item.actionType === 'modal' && onOpenPartnerModal) {
      onOpenPartnerModal({
        type: 'parent',
        message: item.modalMessage,
      });
    } else if (item.actionType === 'link' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="products" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {t('productsTag')}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <ShoppingBag size={12} />
              {isRw ? 'Ibisubizo Bifatika' : 'Available for Order'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143A22] leading-tight mb-4">
            {t('productsHeading')}
          </h2>

          <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
            {t('productsSubtitle')}
          </p>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => {
            const Icon = item.icon;
            const isFeatured = item.id === 'cone-garden';

            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#143A22] text-white shadow-md lg:scale-[1.02] border-2 border-[#BAF035]/60'
                    : 'bg-[#FAF8F5] text-[#143A22] border border-black/5 shadow-2xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Photo Space / Image */}
                  <div className="mb-5 overflow-hidden rounded-2xl">
                    <ImagePlaceholder
                      src={item.imageSrc}
                      alt={item.title}
                      aspectRatio="aspect-[16/10]"
                      badge={item.badge}
                      isAuthentic={item.isAuthentic}
                    />
                  </div>

                  {/* Kicker Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                      isFeatured ? 'text-[#BAF035]' : 'text-[#E25822]'
                    }`}>
                      {item.tag}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isFeatured ? 'bg-white/10 text-[#BAF035]' : 'bg-[#143A22]/5 text-[#143A22]'
                    }`}>
                      <Icon size={16} />
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                    isFeatured ? 'text-white' : 'text-[#143A22]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isFeatured ? 'text-white/80' : 'text-[#556358]'
                  }`}>
                    {item.desc}
                  </p>

                  {/* Key Highlights */}
                  <div className={`space-y-2 mb-6 pt-4 border-t ${
                    isFeatured ? 'border-white/10' : 'border-black/5'
                  }`}>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 size={13} className={isFeatured ? 'text-[#BAF035]' : 'text-[#143A22]'} />
                        <span className={isFeatured ? 'text-white/90' : 'text-[#465349]'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <button
                  onClick={() => handleAction(item)}
                  className={`w-full py-3.5 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                    isFeatured
                      ? 'bg-[#BAF035] text-[#143A22] hover:bg-[#aee628] active:scale-98'
                      : 'bg-[#143A22] text-white hover:bg-[#1a4a2c] active:scale-98'
                  }`}
                >
                  <span>{item.cta}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
