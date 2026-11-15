import React from 'react';
import { Target, Coins, Recycle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function PhilosophySection() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const pillars = [
    {
      icon: Target,
      tag: isRw ? '01 / INTEGO' : '01 / PURPOSE',
      title: isRw ? 'Birote. Bikore. Bizigamire.' : 'Dream it. Do it. Save for it.',
      desc: isRw
        ? 'Aho guha abana ibihembo bitavunikiye, tubafasha kwitorera intego z’ingirakamaro, gutegura imigambi ifatika, no kwishimira ibyo bagezeho binyuze mu maboko yabo.'
        : 'Instead of handing children passive rewards, we guide them to identify meaningful goals, formulate practical action plans, and take pride in self-earned outcomes.',
    },
    {
      icon: Coins,
      tag: isRw ? '02 / IMARI Y’UMWETE' : '02 / MERIT FINANCE',
      title: isRw ? 'Banki ya DreamDo' : 'The DreamDo Bank',
      desc: isRw
        ? 'Buri murimo, urugero rw’urubuto, no gucuruza ku isoko bihinduka ubwizigame bufatika. Mu kubitsa amafaranga binjije mu masanduku yabo, abana batozwa kwihangana no kwigirira icyizere mu mari.'
        : 'Every task, sprout, and market sale translates into merit-based savings. By saving their own earnings in personal bank boxes, children internalize delayed gratification and financial confidence.',
    },
    {
      icon: Recycle,
      tag: isRw ? '03 / KURENGERA IBIDUKIKIJE' : '03 / STEWARDSHIP',
      title: isRw ? 'Ubukungu Bukikije & Ubuhinzi Buhangana n’Imihindagurikire' : 'Circular & Climate Smart',
      desc: isRw
        ? 'Kuva ku ifumbire y’imborera n’ubusitani bw’umunara buzigama amazi kugeza ku bihumyo byezwa mu bisigazwa by’ibihingwa, urubyiruko ruhinduka abarinzi b’ibidukikije.'
        : 'From organic composting and water-recirculating cone gardens to oyster mushrooms grown on agricultural byproducts, youth become active stewards of environmental regeneration.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Quote Box */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/5 mb-20 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C0F038]/20 blur-2xl" />
          <div className="max-w-3xl relative z-10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-3 block">
              {isRw ? 'UKWEMERA KWACU NYAMUKURU' : 'OUR GUIDING BELIEF'}
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#143A22] leading-snug tracking-tight mb-4">
              {isRw
                ? '“Umwana uzigamira inzozi ze uyu munsi ni we muntu wubaka uruganda rukomeye ejo hazaza.”'
                : '“The child who saves for dream items today is the very same person who builds a company tomorrow.”'}
            </blockquote>
            <p className="text-sm sm:text-base text-[#5D6B60] leading-relaxed">
              {isRw
                ? 'Duhindura imyumvire yo gutegereza ibyo uhabwa ikaba ishema ryo gukora no gucuruza. Iyo abana biboneye isano iri hagati y’umwete, imikurire y’igihingwa, agaciro ku isoko, n’ubwizigame, icyizere cyabo kiyongera ubuziraherezo.'
                : 'We replace consumer passivity with producer pride. When children experience the direct causal chain between effort, biological growth, market valuation, and savings, their perception of what they can achieve expands permanently.'}
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div>
          <div className="mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#143A22]/70 uppercase font-mono block mb-2">
              {isRw ? 'UKO DUKORA' : 'HOW WE OPERATE'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
              {isRw ? 'Inkingi eshatu z’imyigire mu bikorwa.' : 'Three pillars of experiential growth.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl p-7 border border-black/5 flex flex-col justify-between group hover:border-[#143A22]/20 hover:shadow-xs transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#143A22] text-[#C0F038] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#E25822] tracking-widest uppercase block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#143A22] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D6B60] leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <Link
                      to="/little-farmer"
                      className="text-xs font-bold text-[#143A22] group-hover:text-[#E25822] flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isRw ? 'Reba uburyo bikorwamo' : 'See in action'}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
