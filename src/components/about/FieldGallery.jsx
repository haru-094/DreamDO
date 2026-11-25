import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function FieldGallery() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const galleryItems = [
    {
      title: isRw ? 'G.S. Kinyinya — Gutera Ubusitani' : 'G.S. Kinyinya — Student Cohort',
      desc: isRw
        ? 'Abanyeshuri ba Groupe Scolaire Kinyinya i Kigali batera imboga mu busitani bw’umunara bwa HDPE bukoranywe ubuhanga.'
        : 'Students at Groupe Scolaire Kinyinya in Kigali planting their multi-tier HDPE vertical Cone Garden.',
      imageSrc: '/images/school-kinyinya-planting.jpg',
      isAuthentic: true,
      badge: isRw ? 'G.S. Kinyinya' : 'G.S. Kinyinya, Kigali',
      uploadNote: isRw ? 'Ifoto: G.S. Kinyinya' : 'Photo: G.S. Kinyinya cohort',
    },
    {
      title: isRw ? 'Ubusitani bw’Umunara mu Bipangu' : 'Urban Compound Deployments',
      desc: isRw
        ? 'Ubusitani buhagaritse buramba mu bipangu by’i Kigali no mu turere tw’icyaro, bwubakiwe kuramba kugeza ku myaka 20 mu mwanya muto.'
        : 'Durable vertical gardens in compounds and school grounds across Rwanda, engineered for a 20-year lifespan in < 1m² space.',
      imageSrc: '/images/urban-compound-cone-gardens.jpg',
      isAuthentic: true,
      badge: isRw ? 'Ubusitani mu Bipangu' : 'Urban Compounds',
      uploadNote: isRw ? 'Ifoto: Ubusitani mu Bipangu' : 'Photo: Urban compound gardens',
    },
    {
      title: isRw ? 'Umusaruro Mwiza w’Amashu n’Imboga' : 'Abundant High-Yield Harvest',
      desc: isRw
        ? 'Umusaruro mwinshi w’amashu n’imboga z’intungamubiri zikura ku munara w’ubusitani binyuze mu gukoresha neza ubutaka n’amazi.'
        : 'High-density production of healthy cabbages and greens thriving vertically with efficient gravity drip watering.',
      imageSrc: '/images/cone-garden-mature-cabbages.jpg',
      isAuthentic: true,
      badge: isRw ? 'Umusaruro Mwiza' : 'High-Yield Harvest',
      uploadNote: isRw ? 'Ifoto: Amashu akuze ku munara' : 'Photo: Mature Cone Garden cabbages',
    },
    {
      title: isRw ? 'G.S. St Aloys Musanze — Ibyishimo' : 'G.S. St Aloys Musanze — Celebration',
      desc: isRw
        ? 'Abanyeshuri b’i Musanze bishimira intsinzi n’ubumenyi bungutse ku busitani bwabo bw’umunara wa DreamDo.'
        : 'Students at G.S. St Aloys Musanze proudly celebrating their vertical garden and hands-on agricultural milestones.',
      imageSrc: '/images/school-musanze-celebration.jpg',
      isAuthentic: true,
      badge: isRw ? 'G.S. St Aloys Musanze' : 'G.S. St Aloys Musanze',
      uploadNote: isRw ? 'Ifoto: Abanyeshuri bishimye' : 'Photo: Student celebration',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            {isRw ? 'AMAFOTO NYAYO YO MU MIRIMA MU RWANDA' : 'VISUAL DISPATCHES FROM RWANDA'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            {isRw
              ? 'Umuhinzi Muto mu bikorwa mu mashuri no mu miryango.'
              : 'Little Farmer in action across schools and communities.'}
          </h2>
          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            {isRw
              ? 'Abana nyabo, ubutaka nyabwo, n’ubugurisha nyabwo. Reba uko inkingi zacu enye zihindura ibibuga by’ishuri ahantu ho kwigira heza.'
              : 'Real children, real soil, and real transactions. See how our four pillars transform everyday schoolyards into thriving learning hubs.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between">
              <div className="mb-4">
                <ImagePlaceholder
                  src={item.imageSrc}
                  alt={item.title}
                  badge={item.badge}
                  isAuthentic={item.isAuthentic}
                  aspectRatio="aspect-[4/3]"
                  uploadNote={item.uploadNote}
                  className="rounded-2xl"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#143A22] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5D6B60] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
