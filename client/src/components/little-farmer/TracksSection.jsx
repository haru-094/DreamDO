import React from 'react';
import { School, Home, Globe2, ArrowRight } from 'lucide-react';

export default function TracksSection({ onOpenPartnerModal }) {
  const tracks = [
    {
      icon: School,
      title: 'For Schools & Academies',
      kicker: 'CAMPUS PROGRAM',
      desc: 'Seamlessly embeds into science, mathematics, and extracurricular club time. Comes with teacher facilitator training and school market day setup.',
      highlight: 'Turn inactive school grounds into living classrooms.',
    },
    {
      icon: Home,
      title: 'For Families & Homes',
      kicker: 'HOUSEHOLD COACHING',
      desc: 'A home coaching model where a DreamDo coach visits weekly to guide parents and children through growing food on balconies and tracking savings.',
      highlight: 'Cultivate teamwork, chores, and financial habits at home.',
    },
    {
      icon: Globe2,
      title: 'For Communities & NGOs',
      kicker: 'SOCIAL IMPACT',
      desc: 'Subsidized community hubs empowering vulnerable, rural, and refugee youth with high-yield food security, nutrition, and income-generating skills.',
      highlight: 'Scalable community greenhouses for youth resilience.',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            HOW TO PARTICIPATE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight">
            Three tailored ways to bring Little Farmer to life.
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
                    <span>Inquire for this track</span>
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

