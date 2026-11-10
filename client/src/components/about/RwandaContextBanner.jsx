import React from 'react';
import { TrendingDown, Users, Briefcase, Award, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function RwandaContextBanner() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const stats = [
    {
      metric: '65%',
      label: isRw ? 'Uruhare rw’ubuhinzi mu mirimo mu Rwanda' : 'Share of Rwandan national employment in agriculture',
      source: 'Rwanda 2022 Census',
    },
    {
      metric: '55–62',
      label: isRw ? 'Impuzandengo y’imyaka y’abahinzi mu Rwanda' : 'Average age of Rwandan small-scale subsistence farmers',
      source: 'Agri Household Survey 2024',
    },
    {
      metric: '<14%',
      label: isRw ? 'Urubyiruko (16–30) ruri mu buhinzi' : 'Share of youth aged 16–30 in the agricultural workforce',
      source: 'National Labor Data',
    },
    {
      metric: '90%',
      label: isRw ? 'Ababyeyi n’urubyiruko batazi amahirwe y’ubuhinzi' : 'Parents and youth unaware of economic opportunities in agribusiness',
      source: 'DreamDo Formative Survey (Kigali)',
    },
  ];

  return (
    <section className="bg-[#143A22] text-white py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#BAF035] uppercase font-mono mb-2 block">
            {isRw ? 'UKURI KW’UBUHINZI MU RWANDA' : 'THE RWANDAN CONTEXT & NATIONAL PRIORITIES'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {isRw
              ? 'Ubuhinzi ni ubukungu nyamukuru, ariko urubyiruko rurabura.'
              : 'Agriculture is the main economy, but farmers are old and youth are missing.'}
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            {isRw
              ? 'Mu gihe Abanyarwanda bangana na 65% batunzwe n’ubuhinzi, urubyiruko rwifuza indi mirimo kubera ko rubona ubuhinzi nk’umurimo w’abashaje n’abakene. DreamDo ikemura iki kibazo hakiri kare.'
              : 'Across Africa, 12 million young people enter the job market each year while only 3.1 million jobs are created. Without early, positive exposure before career choices are fixed, the pipeline of future food leaders continues to narrow.'}
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#BAF035] tracking-tight mb-2">
                  {item.metric}
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                  {item.label}
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] text-white/40 font-mono">
                {item.source}
              </div>
            </div>
          ))}
        </div>

        {/* Senior Planning Process Quote (Sakina Usengimana, PSTA5) */}
        <div className="bg-white/[0.04] rounded-3xl p-8 sm:p-10 border border-white/10 relative">
          <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#BAF035] uppercase">
              {isRw ? 'IJAMBO RYA GAHUNDA Y’UBUHINZI MU RWANDA (PSTA5)' : 'ALIGNMENT WITH RWANDA PSTA5 STRATEGY'}
            </span>
            <blockquote className="text-base sm:text-xl font-medium text-white italic leading-relaxed">
              {isRw
                ? '“Ni ngombwa gusobanura no koroshya imvugo dukoresha mu buhinzi n’imirire, cyane cyane niba dushaka gukurura urubyiruko. Iyo tuvuze imirire myiza, bisobanura iki? Imihindagurikire y’ikirere ivuze iki ku bihingwa byacu? Tugomba koroshya ubutumwa tukabwereka abana hakiri kare.”'
                : '“It’s important to clarify and simplify the language we use in food system approaches, especially if we want to engage young people. When we talk about nutrition, what does this involve? What does climate change mean for food systems transformation in our country? We need to simplify the messages and show youth how they can be involved.”'}
            </blockquote>
            <div className="text-xs text-white/60 font-mono">
              — Sakina Usengimana, Senior Voice in Rwanda’s PSTA5 Food Systems Planning Process
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
