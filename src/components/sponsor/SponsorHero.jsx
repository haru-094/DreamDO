import React from 'react';
import { HeartHandshake, School, Building2, Globe2, ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SponsorHero({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const scrollToCalculator = () => {
    const el = document.getElementById('sponsor-calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const partnerPillars = [
    {
      icon: School,
      title: isRw ? 'Ku Mashuri n’Abalimu' : 'Schools & Academies',
      desc: isRw
        ? 'Gushinga ubusitani bw’ikigo, guhugura abarimu, no kwinjiza ubuhinzi ngiro n’ubumenyi bw’imari mu masomo ya STEM.'
        : 'Turn school grounds into outdoor learning labs with teacher facilitator coaching and curricular STEM integration.',
    },
    {
      icon: Building2,
      title: isRw ? 'Ibigo by’Ubucuruzi & CSR' : 'Companies & ESG / CSR',
      desc: isRw
        ? 'Gushyigikira amashuri n’urubyiruko mu mishinga y’iterambere ry’ibiribwa, guhangana n’imihindagurikire, no guha agaciro raporo ya ESG.'
        : 'Sponsor school garden cohorts, fund community food security, and power verified measurable ESG and sustainability impact.',
    },
    {
      icon: Globe2,
      title: isRw ? 'Imiryango itegamiye kuri Leta' : 'Community Hubs & NGOs',
      desc: isRw
        ? 'Gushinga ubusitani bw’umunara buhaza intungamubiri mu nkambi z’impunzi no mu miryango ikennye ifite ubutaka buto.'
        : 'Deploy high-yield, compact food hubs for refugee communities, rural youth resilience, and cooperative nutrition programs.',
    },
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mb-12">
          {/* Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'UBUFATANYE N’INKUNGA Y’IBIGO' : 'INSTITUTIONAL COLLABORATION'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <HeartHandshake size={12} />
              {isRw ? 'Amashuri • Ibigo • Imiryango' : 'Schools • Companies • Communities'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
            {isRw
              ? 'Fatanya na DreamDo mu gushyigikira icyiciro gishya cy’abahinzi.'
              : 'Partner with DreamDo to empower the next generation of farmers.'}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-8">
            {isRw
              ? 'Waba uri ikigo cy’ishuri gishaka ubusitani bwo kwigiramo, ikigo cy’ubucuruzi gishaka gutera inkunga imishinga ya CSR n’imihindagurikire y’ikirere, cyangwa umuryango wita ku biribwa, DreamDo ifite uburyo bunoze bwo gufatanya bufite ibiciro bisobanutse 100%.'
              : 'Whether you are an educational institution building a campus garden, a company investing in impactful ESG and CSR initiatives, or a community organisation expanding food security, DreamDo provides structured, measurable, and 100% transparent partnership models.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={scrollToCalculator}
              className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-98 transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>{isRw ? 'Bara Ingengo y’Imari y’Ubufatanye' : 'Calculate Partnership Package'}</span>
              <ArrowDown size={14} />
            </button>
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#143A22] bg-white border border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
            >
              {isRw ? 'Vugana n’Itsinda ry’Ubufatanye' : 'Speak to Partnerships Team'}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-black/5 text-xs text-[#556358] font-medium font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Uburambe bw’imyaka 20 ya HDPE' : '20-year garden lifespan'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Uburezi bukurikiza amategeko' : 'Strict child safeguarding'}</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Ibiciro bisobanutse 100%' : '100% transparent unit economics'}</span>
            </div>
          </div>
        </div>

        {/* 3 Partner Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {partnerPillars.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-black/5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#143A22] text-[#BAF035] flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#143A22] mb-2">
                    {pill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6B60] leading-relaxed mb-4">
                    {pill.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-black/5 text-[11px] font-mono text-[#829286]">
                  ✦ Collaborative Pathway
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
