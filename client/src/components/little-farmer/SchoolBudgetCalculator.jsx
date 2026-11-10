import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SchoolBudgetCalculator({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  // State for the 4 formula variables
  const [cones, setCones] = useState(2);
  const [boxes, setBoxes] = useState(20);
  const [trainings, setTrainings] = useState(1);
  const [marketDays, setMarketDays] = useState(1);

  // Unit costs from Concept Note Page 5
  const COST_CONE = 40000;
  const COST_BOX = 15000;
  const COST_TRAINING = 100000;
  const COST_MARKET_DAY = 1000000;
  const RWF_PER_USD = 1350;

  const totalCones = cones * COST_CONE;
  const totalBoxes = boxes * COST_BOX;
  const totalTrainings = trainings * COST_TRAINING;
  const totalMarketDays = marketDays * COST_MARKET_DAY;

  const grandTotalRwf = totalCones + totalBoxes + totalTrainings + totalMarketDays;
  const grandTotalUsd = Math.round(grandTotalRwf / RWF_PER_USD);

  const presets = [
    {
      name: isRw ? 'Icyiciro cy’Ishuri Rimwe' : 'Single Classroom Pilot',
      tag: isRw ? 'Gahunda Nto' : 'Starter Pilot',
      cones: 1,
      boxes: 10,
      trainings: 1,
      marketDays: 0,
      desc: isRw ? 'Icyiciro cy’abana 10 n’umunara umwe w’ubusitani.' : 'Ideal for one teacher and 10 students starting with 1 Cone Garden.',
    },
    {
      name: isRw ? 'Itsinda Ryuzuye ry’Urungano' : 'Full Grade Cohort',
      tag: isRw ? 'Irakunzwe Cyane' : 'Most Popular',
      cones: 3,
      boxes: 30,
      trainings: 2,
      marketDays: 1,
      desc: isRw ? 'Abanyeshuri 30, iminara 3 n’umunsi mukuru w’isoko ry’ibicuruzwa.' : '30 students, 3 Cone Gardens, 2 teacher trainings, and 1 full campus Market Day.',
    },
    {
      name: isRw ? 'Ikigo cy’Icyitegererezo mu Karere' : 'District Anchor Campus',
      tag: isRw ? 'Impinduka Nini' : 'High Impact',
      cones: 6,
      boxes: 60,
      trainings: 4,
      marketDays: 2,
      desc: isRw ? 'Abanyeshuri 60, iminara 6 n’amasoko abiri yo guhinga no gucuruza.' : 'Full school transformation supporting 60+ young makers and 2 community Market Days.',
    },
  ];

  const applyPreset = (p) => {
    setCones(p.cones);
    setBoxes(p.boxes);
    setTrainings(p.trainings);
    setMarketDays(p.marketDays);
  };

  const handlePledge = () => {
    const summary = isRw
      ? `Ubusabe bwo gutera inkunga ikigo cy'ishuri:
- Iminara y'Ubusitani (Cone Gardens): ${cones} (${(cones * COST_CONE).toLocaleString()} RWF)
- Amasanduku yo Kuzigama (Saving Boxes): ${boxes} (${(boxes * COST_BOX).toLocaleString()} RWF)
- Amahugurwa y'Abalimu (Trainings): ${trainings} (${(trainings * COST_TRAINING).toLocaleString()} RWF)
- Iminsi y'Isoko ry'Abana (Market Days): ${marketDays} (${(marketDays * COST_MARKET_DAY).toLocaleString()} RWF)
Igiteranyo cyose: ${grandTotalRwf.toLocaleString()} RWF (~$${grandTotalUsd.toLocaleString()} USD)`
      : `School Sponsorship Package Inquiry:
- Cone Gardens: ${cones} (${(cones * COST_CONE).toLocaleString()} RWF)
- Saving Boxes: ${boxes} (${(boxes * COST_BOX).toLocaleString()} RWF)
- Teacher Trainings: ${trainings} (${(trainings * COST_TRAINING).toLocaleString()} RWF)
- Campus Market Days: ${marketDays} (${(marketDays * COST_MARKET_DAY).toLocaleString()} RWF)
Total Investment: ${grandTotalRwf.toLocaleString()} RWF (~$${grandTotalUsd.toLocaleString()} USD)`;

    if (onOpenPartnerModal) {
      onOpenPartnerModal({
        type: 'community',
        message: summary,
      });
    }
  };

  return (
    <section id="sponsor-calculator" className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'IKIBALISHO CYO GUTERA INKUNGA' : 'TRANSPARENT UNIT ECONOMICS'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <Calculator size={12} />
              {isRw ? 'Icyemezo cya Gahunda Page 5' : 'Official Formula (Concept Note P. 5)'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            {isRw
              ? 'Kubakira Ikigo cy’Ishuri Umushinga w’Ubusitani n’Imari.'
              : 'Build a Custom School Sponsorship Package.'}
          </h2>

          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            {isRw
              ? 'Shyiramo umubare w’abanyeshuri n’ibikoresho wifuza guha ikigo cy’ishuri mu cyaro cyangwa mu nkambi z’impunzi mu Rwanda. Kubara bikurikiza igiciro nyacyo cya gahunda ya DreamDo.'
              : 'Select your target school size and learning assets. Calculate the exact sponsorship required to empower Rwandan public and refugee schools, with 100% transparent itemized unit costs.'}
          </p>
        </div>

        {/* Quick Presets */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#143A22] font-mono mb-3">
            {isRw ? 'HITAMO ICYICIRO CYIHUSE CYANGWA WIKORERE ICYAWE:' : '1. SELECT A PRESET OR CUSTOMIZE BELOW:'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {presets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => applyPreset(p)}
                className="p-5 rounded-2xl border border-black/10 bg-white hover:border-[#143A22] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#E25822] bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-black/5">
                      {p.tag}
                    </span>
                    <span className="text-xs text-[#6A786E] font-mono">
                      {p.cones} {isRw ? 'iminara' : 'cones'} • {p.boxes} {isRw ? 'amasanduku' : 'boxes'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#143A22] mb-1 group-hover:text-[#E25822] transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-xs text-[#5D6B60] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-black/5 text-[11px] font-bold text-[#143A22] flex items-center justify-between">
                  <span>{isRw ? 'Koresha iki cyiciro' : 'Apply Package'}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* The Live Interactive Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Sliders / Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Item 1: Cone Gardens */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="text-sm font-bold text-[#143A22]">
                      {isRw ? 'Ubusitani bw’Umunara (HDPE Cone Garden)' : 'Durable HDPE Cone Gardens'}
                    </h5>
                    <p className="text-[11px] text-[#6A786E]">
                      {isRw ? 'Uburambe bw’imyaka 20 • 40,000 RWF ku busitani bumwe' : '20-year lifespan • 40,000 RWF per cone unit'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCones(Math.max(1, cones - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-sm min-w-[24px] text-center">{cones}</span>
                    <button
                      onClick={() => setCones(cones + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right text-xs font-mono font-bold text-[#143A22]">
                  = {totalCones.toLocaleString()} RWF
                </div>
              </div>

              {/* Item 2: Saving Boxes */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="text-sm font-bold text-[#143A22]">
                      {isRw ? 'Amasanduku yo Kuzigama (Saving Boxes)' : 'Student Wooden Saving Boxes'}
                    </h5>
                    <p className="text-[11px] text-[#6A786E]">
                      {isRw ? 'Gufasha umwana umwe kuzigama • 15,000 RWF ku isanduku' : '1 box per child + ledger • 15,000 RWF per box'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setBoxes(Math.max(5, boxes - 5))}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-sm min-w-[28px] text-center">{boxes}</span>
                    <button
                      onClick={() => setBoxes(boxes + 5)}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right text-xs font-mono font-bold text-[#143A22]">
                  = {totalBoxes.toLocaleString()} RWF
                </div>
              </div>

              {/* Item 3: Trainings */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="text-sm font-bold text-[#143A22]">
                      {isRw ? 'Amahugurwa y’Abalimu n’Abafasha (Trainings)' : 'Facilitator & Teacher Trainings'}
                    </h5>
                    <p className="text-[11px] text-[#6A786E]">
                      {isRw ? 'Guhugura abarimu n’ababyeyi • 100,000 RWF ku mahugurwa' : 'Teacher & parent mentorship • 100,000 RWF per cohort training'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTrainings(Math.max(1, trainings - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-sm min-w-[24px] text-center">{trainings}</span>
                    <button
                      onClick={() => setTrainings(trainings + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right text-xs font-mono font-bold text-[#143A22]">
                  = {totalTrainings.toLocaleString()} RWF
                </div>
              </div>

              {/* Item 4: Market Days */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="text-sm font-bold text-[#143A22]">
                      {isRw ? 'Umunsi Mukuru w’Isoko ry’Abana (Market Days)' : 'Campus Market Day Set-up & Logistics'}
                    </h5>
                    <p className="text-[11px] text-[#6A786E]">
                      {isRw ? 'Guhuza abana n’abaguzi nyabo • 1,000,000 RWF ku munsi w’isoko' : 'Community stalls, logistics & buyers • 1,000,000 RWF per Market Day'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMarketDays(Math.max(0, marketDays - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-sm min-w-[24px] text-center">{marketDays}</span>
                    <button
                      onClick={() => setMarketDays(marketDays + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-black/10 font-bold text-xs hover:bg-black/5 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right text-xs font-mono font-bold text-[#143A22]">
                  = {totalMarketDays.toLocaleString()} RWF
                </div>
              </div>

            </div>

            {/* Right Summary Card with Grand Total */}
            <div className="lg:col-span-5 bg-[#143A22] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              
              <div className="space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <HeartHandshake size={16} className="text-[#BAF035]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BAF035]">
                      {isRw ? 'INCAMAKE Y’INKUNGA' : 'SPONSORSHIP SUMMARY'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/50">
                    {isRw ? 'Gahunda y’Ishuri' : 'Full School Package'}
                  </span>
                </div>

                {/* Big Total */}
                <div>
                  <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider block mb-1">
                    {isRw ? 'IGITERANYO CYOSE CY’INKUNGA' : 'TOTAL INVESTMENT REQUIRED'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                      {grandTotalRwf.toLocaleString()}
                    </span>
                    <span className="text-sm font-mono text-[#BAF035] font-bold">RWF</span>
                  </div>
                  <div className="text-sm text-white/70 font-mono mt-1">
                    ≈ ${grandTotalUsd.toLocaleString()} USD
                  </div>
                </div>

                {/* Line Item Breakdown */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-white/70">
                    <span>{cones} × Cone Gardens</span>
                    <span>{totalCones.toLocaleString()} RWF</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>{boxes} × Saving Boxes</span>
                    <span>{totalBoxes.toLocaleString()} RWF</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>{trainings} × Teacher Trainings</span>
                    <span>{totalTrainings.toLocaleString()} RWF</span>
                  </div>
                  {marketDays > 0 && (
                    <div className="flex justify-between text-white/70">
                      <span>{marketDays} × Campus Market Day</span>
                      <span>{totalMarketDays.toLocaleString()} RWF</span>
                    </div>
                  )}
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={handlePledge}
                  className="w-full py-4 rounded-full text-xs sm:text-sm font-bold text-[#143A22] bg-[#BAF035] hover:bg-[#a6db29] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <HeartHandshake size={16} />
                  <span>{isRw ? 'Tanga Ubusabe bwo Gutera Inkunga' : 'Pledge This Sponsorship Package'}</span>
                </button>

              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-white/50 flex items-center justify-between">
                <span>{isRw ? 'Icyiciro gituma abana 100% bazigama' : '100% funds direct hardware & training'}</span>
                <span className="text-[#BAF035]">DreamDo Social Enterprise</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
