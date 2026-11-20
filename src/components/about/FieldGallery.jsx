import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function FieldGallery() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const galleryItems = [
    {
      title: isRw ? 'Guhindura Imyanda Umurima' : 'Waste-to-Farm Engineering',
      desc: isRw
        ? 'Abana bahindura amacupa ya pulasitiki, imifuka, n’amajerekani imirima itanga umusaruro ifite uburyo bwo kumeneka amazi n’ifumbire y’imborera.'
        : 'Children convert plastic bottles, sacks, and jerrycans into productive growing containers with proper drainage and compost layering.',
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      badge: isRw ? 'Imyanda Ihinduka Umurima' : 'Waste-to-Farm',
      uploadNote: isRw ? 'Ifoto: Ubusitani bw’imifuka n’amacupa' : 'Photo: Sacks & bottle gardens',
    },
    {
      title: isRw ? 'Ubusitani bw’Umunara mu Mashuri (HDPE)' : 'School HDPE Cone Gardens',
      desc: isRw
        ? 'Ubusitani buhagaritse buramba mu mashuri ya leta i Kigali no mu turere tw’icyaro, bwubakiwe kuramba kugeza ku myaka 20 bukabungabungwa byoroshye.'
        : 'Our durable vertical gardens in public schools across Kigali and rural districts, built to last up to 20 years with light maintenance.',
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      badge: isRw ? 'Ubusitani bw’Ishuri' : 'Cone Garden Deployment',
      uploadNote: isRw ? 'Ifoto: Ubusitani bw’Umunara ku Ishuri' : 'Photo: School Cone Garden',
    },
    {
      title: isRw ? 'Kwitaho & Muganga w’Ibihingwa' : 'Smart Care & The Plant Doctor',
      desc: isRw
        ? 'Abana biga kuvomera mu gutonyanga hakoreshejwe amazi make, gusuzuma ibyonnyi, no gukora imiti y’umwimerere y’itunguru ry’umweru n’urusenda.'
        : 'Children learn resource-efficient drip irrigation, pest troubleshooting, and make natural garlic-chili sprays for plant health.',
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=800&q=80',
      badge: isRw ? 'Muganga w’Ibihingwa' : 'The Plant Doctor',
      uploadNote: isRw ? 'Ifoto: Kuvomera no gusuzuma ibihingwa' : 'Photo: Drip irrigation & inspection',
    },
    {
      title: isRw ? 'Umunsi w’Isoko & Kumurika Umusaruro' : 'Market Day & Expo Day',
      desc: isRw
        ? 'Ku mpera za buri gipimo, abahinzi bakiri bato bamurika umusaruro, bagasobanura ibitabo byabo by’umutungo, bakabitsa inyungu nyazo muri Banki ya DreamDo.'
        : 'At the end of every cycle, young farmers showcase produce, pitch their learning journals, and deposit real earnings into the DreamDo Bank.',
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      badge: isRw ? 'Umunsi Mukuru w’Isoko' : 'Little Farmers Expo Day',
      uploadNote: isRw ? 'Ifoto: Ubugurisha ku Munsi w’Isoko' : 'Photo: Market Day transactions',
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
