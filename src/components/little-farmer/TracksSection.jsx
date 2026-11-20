import React from 'react';
import { School, Home, Globe2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TracksSection({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const tracks = [
    {
      icon: School,
      title: isRw ? 'Ku Mashuri n’Ibigo by’Uburezi' : 'For Schools & Academies',
      kicker: isRw ? 'GAHUNDA Y’IKIGO CY’ISHURI' : 'CAMPUS PROGRAM',
      desc: isRw
        ? 'Ihuza neza n’amasomo ya siyansi, imibare, n’amasaha y’amatsinda y’abanyeshuri (clubs). Izana n’amahugurwa y’abarimu no gutegura isoko ry’ikigo.'
        : 'Seamlessly embeds into science, mathematics, and extracurricular club time. Comes with teacher facilitator training and school market day setup.',
      highlight: isRw ? 'Hindura ubusitani bw’ikigo amashuri nyakuri y’ubuzima.' : 'Turn inactive school grounds into living classrooms.',
    },
    {
      icon: Home,
      title: isRw ? 'Ku Miryango n’Ingo' : 'For Families & Homes',
      kicker: isRw ? 'UBUFASHA MU RUGO' : 'HOUSEHOLD COACHING',
      desc: isRw
        ? 'Umufashamyigire wa DreamDo asura urugo buri cyumweru akereka ababyeyi n’abana uko bahinga imboga ku mabaraza no gukurikirana ubwizigame.'
        : 'A home coaching model where a DreamDo coach visits weekly to guide parents and children through growing food on balconies and tracking savings.',
      highlight: isRw ? 'Kuza ubufatanye, imirimo yo mu rugo, n’ingeso yo kuzigama.' : 'Cultivate teamwork, chores, and financial habits at home.',
    },
    {
      icon: Globe2,
      title: isRw ? 'Ku Miryango itari iya Leta & Sosiyete Sivile' : 'For Communities & NGOs',
      kicker: isRw ? 'IMPINDUKA MU MURYANGO' : 'SOCIAL IMPACT',
      desc: isRw
        ? 'Gushinga ubusitani bufasha urubyiruko rwo mu nkambi z’impunzi n’imiryango ikennye kugira umutekano w’ibiribwa, intungamubiri, n’uburyo bwo kwinjiza amafaranga.'
        : 'Subsidized community hubs empowering vulnerable, rural, and refugee youth with high-yield food security, nutrition, and income-generating skills.',
      highlight: isRw ? 'Ubusitani bwagutse bwo guhangana n’ubukene n’imihindagurikire y’ikirere.' : 'Scalable community greenhouses for youth resilience.',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            {isRw ? 'UBURYO BWO KWITABIRA' : 'HOW TO PARTICIPATE'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight">
            {isRw
              ? 'Uburyo butatu bwo kwinjira muri gahunda y’Umuhinzi Muto.'
              : 'Three tailored ways to bring Little Farmer to life.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tracks.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-black/5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#143A22] text-[#C0F038] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#E25822] uppercase block mb-1">
                    {t.kicker}
                  </span>
                  <h3 className="text-xl font-bold text-[#143A22] mb-3">
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#5D6B60] leading-relaxed mb-6">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <div className="text-xs font-semibold text-[#143A22] mb-4">
                    ✦ {t.highlight}
                  </div>
                  <button
                    onClick={onOpenPartnerModal}
                    className="w-full py-2.5 rounded-full text-xs font-bold text-[#143A22] bg-[#FAF8F5] hover:bg-[#143A22] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isRw ? 'Saba ibisobanuro kuri iki' : 'Inquire for this track'}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
