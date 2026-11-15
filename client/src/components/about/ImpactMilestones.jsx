import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function ImpactMilestones({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const metrics = [
    {
      value: '2,500+',
      label: isRw ? 'Abahinzi bato n’abazigama bahuguwe' : 'Young farmers & savers trained',
    },
    {
      value: '45+',
      label: isRw ? 'Amashuri n’abafatanyabikorwa mu muryango' : 'Schools and community partners',
    },
    {
      value: '100%',
      label: isRw ? 'Abanyeshuri babitsa muri Banki ya DreamDo' : 'Students deposit into DreamDo Bank',
    },
    {
      value: '18,000 kg',
      label: isRw ? 'Umusaruro w’imboga zasaruwe n’abana' : 'Fresh produce harvested by kids',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric counters banner */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/5 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
              {isRw ? 'IBYACOZWE MU RWANDA' : 'TRACK RECORD IN RWANDA'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
              {isRw
                ? 'Umusaruro ufatika mu bigo by’amashuri no mu ngo.'
                : 'Real results in schoolyards and households.'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-black/5 shadow-2xs">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#143A22] mb-1 font-mono">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm text-[#5D6B60] font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#C0F038] rounded-3xl p-8 sm:p-12 text-[#143A22] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#143A22]/70 block mb-1">
              {isRw ? 'FATANYA NATWE' : 'GET INVOLVED'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#143A22]">
              {isRw
                ? 'Dufashe gutera imbuto 10,000 zikurikira mu Rwanda hose.'
                : 'Help us plant the next 10,000 seeds across Rwanda.'}
            </h3>
            <p className="text-sm text-[#143A22]/80 mt-1 max-w-xl">
              {isRw
                ? 'Waba uri umurezi, umubyeyi, umuterankunga, cyangwa umuyobozi w’ikigo, hari umwanya wawe muri gahunda y’Umuhinzi Muto.'
                : 'Whether you are an educator, parent, donor, or school leader, there is a place for you in the Little Farmer movement.'}
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] transition-all shadow-sm cursor-pointer"
            >
              {isRw ? 'Fatanya Natwe' : 'Partner With Us'}
            </button>
            <Link
              to="/little-farmer"
              className="px-6 py-3.5 rounded-full text-xs font-bold text-[#143A22] bg-white hover:bg-black/5 transition-all shadow-2xs inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{isRw ? 'Reba Gahunda' : 'See Program'}</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
