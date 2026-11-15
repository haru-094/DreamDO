import React, { useState } from 'react';
import { Target, Coins, CheckCircle2, Lock, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DreamGoalTracker() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const dreamGoals = [
    {
      id: 'supplies',
      title: isRw ? 'Ibikoresho by’Ishuri' : 'School Starter Kit',
      category: isRw ? 'Uburezi' : 'Education',
      costRwf: 12000,
      icon: '🎒',
      desc: isRw
        ? 'Amakaye 6, amakaramu, amakaramu y’amabara, n’ibikoresho bya géométrie by’amashuri abanza.'
        : 'Set of 6 notebooks, pens, colored pencils, and a geometry set for primary school.',
      childStory: isRw ? 'Aline, imyaka 8, Akarere ka Gasabo' : 'Aline, 8, Gasabo District',
    },
    {
      id: 'lamp',
      title: isRw ? 'Itara ry’Izuba ryo Gusoma' : 'Solar Study Lamp',
      category: isRw ? 'Urugo' : 'Household',
      costRwf: 18000,
      icon: '💡',
      desc: isRw
        ? 'Itara rya LED ryaka hakoreshejwe izuba rifasha gukora imikoro yo mu rugo nijoro nta mwotsi wa peterori.'
        : 'Rechargeable LED desk lamp ensuring evening homework without paraffin smoke.',
      childStory: isRw ? 'Faustin, imyaka 11, Umurenge wa Masaka' : 'Faustin, 11, Masaka Sector',
    },
    {
      id: 'seeds',
      title: isRw ? 'Ibikoresho by’Ubuhinzi bwo mu Rugo' : 'Home Agribusiness Kit',
      category: isRw ? 'Kongera Gushora' : 'Reinvestment',
      costRwf: 15000,
      icon: '🌱',
      desc: isRw
        ? 'Imifuka 3 yo guhingamo mu rugo + amapaki 5 y’imbuto zo gutangira ubusitani mu rugo.'
        : '3 additional vertical container bags + 5 seed packs to launch a backyard garden at home.',
      childStory: isRw ? 'Eric, imyaka 13 (Umujyanama mu Buhinzi), Kigali' : 'Eric, 13 (Farm Mentor), Kigali',
    },
    {
      id: 'uniform',
      title: isRw ? 'Impuzankano y’Ishuri n’Inkweto' : 'School Uniform & Shoes',
      category: isRw ? 'Agaciro n’Ishema' : 'Dignity',
      costRwf: 24000,
      icon: '👟',
      desc: isRw
        ? 'Igitambaro cy’impuzankano y’ishuri idoze neza n’inkweto ziramba zo kugendana mu gihe cyose.'
        : 'Tailored school uniform fabric and durable all-weather walking shoes.',
      childStory: isRw ? 'Grace, imyaka 10, Ishuri ryo mu Cyaro' : 'Grace, 10, Rural Partner School',
    },
  ];

  const [selectedGoalId, setSelectedGoalId] = useState('supplies');
  const [currentWeek, setCurrentWeek] = useState(4); // 1 to 4

  const activeGoal = dreamGoals.find((g) => g.id === selectedGoalId) || dreamGoals[0];

  // Cumulative earnings progression based on active week
  const weekDeposits = [
    {
      week: 1,
      label: isRw ? 'Icyumweru 1: Gutera' : 'Week 1: Sowing',
      amount: 0,
      note: isRw ? 'Intego yanditswe mu gitabo. 0 RWF yinjiye.' : 'Goal pledged in ledger. 0 RWF earned.',
    },
    {
      week: 2,
      label: isRw ? 'Icyumweru 2: Kwitaho & Ifumbire' : 'Week 2: Care & Compost',
      amount: 1500,
      note: isRw
        ? 'Uduce tw’ingemwe two gutahana twaguzwe n’ababyeyi: +1,500 RWF'
        : 'Early seedling adoption kits sold to parents: +1,500 RWF',
    },
    {
      week: 3,
      label: isRw ? 'Icyumweru 3: Isarura rya Mbere' : 'Week 3: First Cut Harvest',
      amount: 4500,
      note: isRw
        ? 'Imifuka y’ibihumyo n’imboga nto zasaruwe: +3,000 RWF'
        : 'Oyster mushroom bags & microgreens harvest: +3,000 RWF',
    },
    {
      week: 4,
      label: isRw ? 'Icyumweru 4: Umunsi w’Isoko' : 'Week 4: Expo Day Sales',
      amount: activeGoal.costRwf,
      note: isRw
        ? 'Umusaruro wose wo ku Munsi w’Isoko n’ifumbire byagurishijwe: Intego igezweho!'
        : 'Full Market Day harvest & compost packs sold: Goal achieved!',
    },
  ];

  const currentDeposit = weekDeposits[currentWeek - 1];
  const currentSaved = currentDeposit.amount;
  const progressPercent = Math.min(100, Math.round((currentSaved / activeGoal.costRwf) * 100));
  const remaining = Math.max(0, activeGoal.costRwf - currentSaved);

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'UBUMENYI BW’IMARI NYABWO' : 'MERIT-BASED FINANCIAL LITERACY'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <Coins size={12} />
              {isRw ? 'Banki ya DreamDo' : 'DreamDo Bank Vault'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            {isRw
              ? 'Buri faranga rizize ribonwa n’ishema ry’umurimo.'
              : 'Every franc saved is earned with pride.'}
          </h2>

          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            {isRw
              ? 'Binyuranye n’amasomo y’amagambo gusa, Umuhinzi Muto ahuza kwihangana no kugera ku ntego ifatika. Abana bitorera intego mu Cyumweru cya 1, bakandika amafaranga binjije mu gitabo cyabo, maze bakagura ibyo bifuza nyuma y’Umunsi w’Isoko.'
              : 'Unlike abstract lectures, Little Farmer links delayed gratification to tangible personal goals. Children choose a goal in Week 1, record weekly deposits in their passbook, and unlock their purchase after Market Day.'}
          </p>
        </div>

        {/* Goals Selector Cards */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#143A22] font-mono mb-4">
            {isRw ? '1. HITAMO INZOZI Z’UMWANA:' : '1. SELECT A CHILD’S DREAM GOAL:'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dreamGoals.map((g) => {
              const isSelected = g.id === selectedGoalId;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoalId(g.id)}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#143A22] bg-[#143A22] text-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30 text-[#143A22]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{g.icon}</span>
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#FAF8F5] text-[#E25822]'
                      }`}>
                        {g.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-1">{g.title}</h3>
                    <p className={`text-xs leading-relaxed mb-3 ${
                      isSelected ? 'text-white/80' : 'text-[#556358]'
                    }`}>
                      {g.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-baseline justify-between">
                    <span className="text-xs font-mono font-semibold opacity-70">
                      {isRw ? 'Igiciro:' : 'Target:'}
                    </span>
                    <span className={`font-mono font-extrabold text-sm ${
                      isSelected ? 'text-[#BAF035]' : 'text-[#143A22]'
                    }`}>
                      {g.costRwf.toLocaleString()} RWF
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Passbook Ledger Simulation */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-black/5 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#E25822] tracking-wider uppercase block">
                {isRw ? '2. REBA URUGENDO RWO KUZIGAMA MU BYUMWERU 4' : '2. SIMULATE 4-WEEK PASSBOOK ACCUMULATION'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#143A22]">
                {activeGoal.title} — {activeGoal.childStory}
              </h3>
            </div>
            
            {/* Week Stepper Buttons */}
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1.5 rounded-xl border border-black/5">
              {[1, 2, 3, 4].map((wk) => (
                <button
                  key={wk}
                  onClick={() => setCurrentWeek(wk)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currentWeek === wk
                      ? 'bg-[#143A22] text-white shadow-2xs'
                      : 'text-[#6A786E] hover:bg-black/5'
                  }`}
                >
                  {isRw ? `W${wk}` : `W${wk}`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Ledger Card */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-black/5">
                <div className="flex justify-between items-center text-xs font-mono text-[#6A786E] mb-2">
                  <span>{currentDeposit.label}</span>
                  <span className="text-[#143A22] font-bold">
                    {progressPercent}% {isRw ? 'byagezweho' : 'Achieved'}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-black/10 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-[#143A22] via-[#2F6B43] to-[#BAF035] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex justify-between items-baseline text-xs font-mono">
                  <div>
                    <span className="text-[#6A786E] block text-[11px]">
                      {isRw ? 'Amafaranga Ari mu Isanduku:' : 'Current Savings in Bank:'}
                    </span>
                    <span className="text-xl font-bold text-[#143A22]">
                      {currentSaved.toLocaleString()} RWF
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#6A786E] block text-[11px]">
                      {isRw ? 'Ayasigaye ngo Agere ku Ntego:' : 'Remaining to Goal:'}
                    </span>
                    <span className="text-sm font-semibold text-[#E25822]">
                      {remaining > 0 ? `${remaining.toLocaleString()} RWF` : (isRw ? 'Intego Yagezweho!' : 'Goal Achieved!')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-white border border-black/10 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#143A22]/10 text-[#143A22] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-xs text-[#556358] leading-relaxed">
                  <strong className="text-[#143A22] font-semibold">
                    {isRw ? 'Ibyanditswe mu Gitabo cy’Umutungo:' : 'Ledger Entry:'}{' '}
                  </strong>
                  {currentDeposit.note}
                </p>
              </div>
            </div>

            {/* Right Goal Achievement Status */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-black/5 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-2xs flex items-center justify-center text-3xl mb-3">
                {progressPercent === 100 ? '🎉' : activeGoal.icon}
              </div>
              <h4 className="text-base font-bold text-[#143A22] mb-1">
                {progressPercent === 100
                  ? (isRw ? 'Intego Yashobotse Kwishyurwa!' : 'Dream Goal Unlocked!')
                  : (isRw ? 'Bikomeje Kwiyongera...' : 'Building Toward Goal...')}
              </h4>
              <p className="text-xs text-[#556358] max-w-xs mb-4">
                {progressPercent === 100
                  ? (isRw
                      ? `Umwana yaguze ${activeGoal.title} ku mafaranga ${activeGoal.costRwf.toLocaleString()} RWF yakoreye ubwe.`
                      : `Child purchases their ${activeGoal.title} with 100% self-earned harvest revenue.`)
                  : (isRw
                      ? 'Abana biga ko kwihangana no gukora cyane bitanga umusaruro ufatika.'
                      : 'Students learn delayed gratification and the pride of self-reliance.')}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#143A22] text-[#BAF035]">
                <Trophy size={12} />
                <span>{isRw ? 'Banki ya DreamDo' : 'DreamDo Passbook Verified'}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
