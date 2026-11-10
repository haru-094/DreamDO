import React, { useState } from 'react';
import { Target, Coins, CheckCircle2, Lock, Sparkles, Trophy, ArrowRight } from 'lucide-react';

export default function DreamGoalTracker() {
  const dreamGoals = [
    {
      id: 'supplies',
      title: 'School Starter Kit',
      category: 'Education',
      costRwf: 12000,
      icon: '🎒',
      desc: 'Set of 6 notebooks, pens, colored pencils, and a geometry set for primary school.',
      childStory: 'Aline, 8, Gasabo District',
    },
    {
      id: 'lamp',
      title: 'Solar Study Lamp',
      category: 'Household',
      costRwf: 18000,
      icon: '💡',
      desc: 'Rechargeable LED desk lamp ensuring evening homework without paraffin smoke.',
      childStory: 'Faustin, 11, Masaka Sector',
    },
    {
      id: 'seeds',
      title: 'Home Agribusiness Kit',
      category: 'Reinvestment',
      costRwf: 15000,
      icon: '🌱',
      desc: '3 additional vertical container bags + 5 seed packs to launch a backyard garden at home.',
      childStory: 'Eric, 13 (Farm Mentor), Kigali',
    },
    {
      id: 'uniform',
      title: 'School Uniform & Shoes',
      category: 'Dignity',
      costRwf: 24000,
      icon: '👟',
      desc: 'Tailored school uniform fabric and durable all-weather walking shoes.',
      childStory: 'Grace, 10, Rural Partner School',
    },
  ];

  const [selectedGoalId, setSelectedGoalId] = useState('supplies');
  const [currentWeek, setCurrentWeek] = useState(4); // 1 to 4

  const activeGoal = dreamGoals.find((g) => g.id === selectedGoalId) || dreamGoals[0];

  // Cumulative earnings progression based on active week
  const weekDeposits = [
    { week: 1, label: 'Week 1: Sowing', amount: 0, note: 'Goal pledged in ledger. 0 RWF earned.' },
    { week: 2, label: 'Week 2: Care & Compost', amount: 1500, note: 'Early seedling adoption kits sold to parents: +1,500 RWF' },
    { week: 3, label: 'Week 3: First Cut Harvest', amount: 4500, note: 'Oyster mushroom bags & microgreens harvest: +3,000 RWF' },
    { week: 4, label: 'Week 4: Expo Day Sales', amount: activeGoal.costRwf, note: 'Full Market Day harvest & compost packs sold: Goal achieved!' },
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
              MERIT-BASED FINANCIAL LITERACY
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <Coins size={12} />
              The DreamDo Saving Box
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            Dream it. Do it. Save for it.
          </h2>

          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            In standard programs, children are passive beneficiaries. At DreamDo, children identify their personal dream goal on Day 1, then convert <span className="font-semibold text-[#143A22]">biological growth, market sales, and daily diligence</span> into real coins locked in their wooden Saving Box.
          </p>
        </div>

        {/* Goal Selector Grid */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-[#143A22] font-mono block mb-3">
            1. CHOOSE A STUDENT’S DREAM GOAL
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dreamGoals.map((g) => {
              const isSelected = selectedGoalId === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoalId(g.id)}
                  className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#143A22] shadow-sm ring-2 ring-[#143A22]'
                      : 'bg-white/60 border-black/10 hover:bg-white text-[#5D6B60]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{g.icon}</span>
                      <span className="text-[11px] font-mono font-bold text-[#143A22] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-black/5">
                        {g.costRwf.toLocaleString()} RWF
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#143A22] mb-1 leading-snug">
                      {g.title}
                    </h4>
                    <p className="text-xs text-[#6A786E] leading-relaxed mb-3">
                      {g.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/5 text-[10px] text-[#86968B] font-mono">
                    ✦ Dreamer: {g.childStory}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Week Progress Interactive Simulator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Timeline Scrubber */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#143A22] font-mono block mb-3">
                  2. SIMULATE HARVEST PROGRESS ACROSS 4 WEEKS
                </label>

                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((w) => (
                    <button
                      key={w}
                      onClick={() => setCurrentWeek(w)}
                      className={`py-3 px-2 rounded-xl text-center font-mono transition-all cursor-pointer ${
                        currentWeek === w
                          ? 'bg-[#143A22] text-white font-bold shadow-xs'
                          : 'bg-[#FAF8F5] text-[#556358] hover:bg-black/5'
                      }`}
                    >
                      <div className="text-[10px] uppercase opacity-70">Week</div>
                      <div className="text-base font-bold">{w}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#556358]">Progress toward {activeGoal.title}:</span>
                  <span className="font-bold text-[#143A22]">{progressPercent}% Funded</span>
                </div>
                <div className="w-full h-3 bg-black/10 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#143A22] via-[#2F7348] to-[#BAF035] rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#718075] font-mono">
                  <span>Saved: {currentSaved.toLocaleString()} RWF</span>
                  <span>Goal: {activeGoal.costRwf.toLocaleString()} RWF</span>
                </div>
              </div>

              {/* Weekly Ledger Entry Card */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#E25822]">
                  <span>{currentDeposit.label}</span>
                  <span className="text-[#143A22]">Status: {currentWeek === 4 ? 'Goal Achieved 🎉' : 'In Progress'}</span>
                </div>
                <p className="text-xs text-[#556358] leading-relaxed">
                  {currentDeposit.note}
                </p>
              </div>

            </div>

            {/* Right: The Physical Wooden Saving Box & Ledger */}
            <div className="lg:col-span-6 bg-[#143A22] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              
              <div className="space-y-6">
                
                {/* Vault Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Lock size={15} className="text-[#BAF035]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BAF035]">
                      DreamDo Bank Ledger Vault
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/50">
                    Dual-Key Secured
                  </span>
                </div>

                {/* Big Amount Saved Display */}
                <div>
                  <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider block mb-1">
                    CURRENT ACCUMULATED SAVINGS
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {currentSaved.toLocaleString()}
                    </span>
                    <span className="text-sm font-mono text-[#BAF035] font-bold">RWF</span>
                  </div>
                  <div className="text-xs text-white/70 mt-1">
                    {remaining === 0 ? (
                      <span className="text-[#BAF035] font-semibold flex items-center gap-1">
                        <CheckCircle2 size={13} />
                        Goal 100% self-funded through student agriculture!
                      </span>
                    ) : (
                      <span>Need {remaining.toLocaleString()} RWF more to purchase {activeGoal.title}</span>
                    )}
                  </div>
                </div>

                {/* Countersigned Ledger Table */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white/50 border-b border-white/10 pb-1.5 flex justify-between">
                    <span>ENTRY</span>
                    <span>AMOUNT</span>
                    <span>SIGNATURE</span>
                  </div>
                  <div className="flex justify-between text-white/90">
                    <span>Deposit Week 1–{currentWeek}</span>
                    <span className="text-[#BAF035]">+{currentSaved.toLocaleString()} RWF</span>
                    <span className="text-white/70">✓ Mentor Verified</span>
                  </div>
                </div>

                {/* Certificate Banner if reached */}
                {currentWeek === 4 && (
                  <div className="p-3.5 rounded-xl bg-[#BAF035] text-[#143A22] flex items-center gap-2.5 animate-in fade-in duration-300">
                    <Trophy size={20} className="shrink-0 text-[#143A22]" />
                    <div className="text-xs leading-tight">
                      <strong className="block font-bold">Young Maker Certificate Ready!</strong>
                      Child withdraws funds to buy {activeGoal.title}.
                    </div>
                  </div>
                )}

              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                <span>Physical Wood Saving Box (Unit Cost: 15,000 RWF)</span>
                <span className="text-[#BAF035]">100% Merit</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

