import React, { useState } from 'react';
import { Sprout, Coins, Calendar, TrendingUp, Sparkles } from 'lucide-react';

export default function CropCalculator() {
  const [cropType, setCropType] = useState('microgreens');
  const [studentsCount, setStudentsCount] = useState(15);

  const cropData = {
    microgreens: {
      name: 'Sunflower Microgreens',
      days: 10,
      yieldPerStudent: 0.8, // kg
      pricePerKg: 4000, // RWF
      description: 'Superfast turnaround — perfect for showing kids rapid results.',
    },
    mushrooms: {
      name: 'Oyster Mushrooms',
      days: 18,
      yieldPerStudent: 1.5, // kg
      pricePerKg: 3500, // RWF
      description: 'Grown on recycled organic substrate bags in dark humid corners.',
    },
    veggies: {
      name: 'Crisp Lettuce & Greens',
      days: 28,
      yieldPerStudent: 2.0, // kg
      pricePerKg: 2000, // RWF
      description: 'Classic vertical cone garden crops supplying school lunches and homes.',
    },
  };

  const selected = cropData[cropType];
  const totalHarvestKg = (studentsCount * selected.yieldPerStudent).toFixed(1);
  const totalEarningsRwf = Math.round(totalHarvestKg * selected.pricePerKg);
  const perStudentSavings = Math.round(totalEarningsRwf / studentsCount);

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/5 shadow-xs">
          
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143A22]/5 text-[#143A22] text-xs font-semibold mb-3">
              <Sparkles size={13} className="text-[#E25822]" />
              Interactive Impact Calculator
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22] tracking-tight">
              See the harvest-to-savings formula in action.
            </h3>
            <p className="text-sm sm:text-base text-[#556358] mt-2">
              Calculate how a single 4-week cohort turns seeds, daily care, and market day sales into real savings in the DreamDo Bank.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Crop Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#68766C] mb-2">
                  Choose Crop
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'microgreens', label: 'Microgreens', icon: '🌱' },
                    { id: 'mushrooms', label: 'Mushrooms', icon: '🍄' },
                    { id: 'veggies', label: 'Cone Greens', icon: '🥬' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setCropType(btn.id)}
                      className={`p-3 rounded-xl border text-left flex flex-col items-start transition-all cursor-pointer ${
                        cropType === btn.id
                          ? 'border-[#143A22] bg-[#143A22] text-white shadow-xs'
                          : 'border-black/10 bg-white text-[#143A22] hover:bg-black/5'
                      }`}
                    >
                      <span className="text-lg mb-1">{btn.icon}</span>
                      <span className="text-xs font-semibold leading-tight">{btn.label}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#6F7C73] mt-2 italic">
                  {selected.description}
                </p>
              </div>

              {/* Number of Learners Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#68766C]">
                    Cohort Size (Students)
                  </label>
                  <span className="text-base font-bold text-[#143A22] bg-[#FAF8F5] px-3 py-1 rounded-md border border-black/5">
                    {studentsCount} students
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={studentsCount}
                  onChange={(e) => setStudentsCount(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#143A22]"
                />
                <div className="flex justify-between text-[11px] text-[#839187] mt-1 font-mono">
                  <span>5 (Single club)</span>
                  <span>30 (Full class)</span>
                  <span>60 (Grade cohort)</span>
                </div>
              </div>

            </div>

            {/* Results Card */}
            <div className="lg:col-span-6 bg-[#F4F0E6] rounded-2xl p-6 sm:p-8 border border-black/5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E25822] mb-4">
                Estimated Cycle Outcomes
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="bg-white/90 p-4 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#68766C] mb-1">
                    <Calendar size={14} className="text-[#143A22]" />
                    <span>Days to Harvest</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#143A22]">
                    {selected.days} <span className="text-xs font-normal text-[#68766C]">days</span>
                  </div>
                </div>

                <div className="bg-white/90 p-4 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#68766C] mb-1">
                    <Sprout size={14} className="text-[#143A22]" />
                    <span>Total Harvest</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#143A22]">
                    {totalHarvestKg} <span className="text-xs font-normal text-[#68766C]">kg produce</span>
                  </div>
                </div>

                <div className="bg-white/90 p-4 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#68766C] mb-1">
                    <Coins size={14} className="text-[#E25822]" />
                    <span>Cohort Revenue</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#143A22]">
                    {totalEarningsRwf.toLocaleString()} <span className="text-xs font-normal text-[#68766C]">RWF</span>
                  </div>
                </div>

                <div className="bg-white/90 p-4 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-[#68766C] mb-1">
                    <TrendingUp size={14} className="text-[#143A22]" />
                    <span>Per Student Bank</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#143A22]">
                    {perStudentSavings.toLocaleString()} <span className="text-xs font-normal text-[#68766C]">RWF</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#5D6B60] pt-2 border-t border-black/5">
                <span>Earned through student effort, care, & market trade.</span>
                <span className="font-semibold text-[#143A22]">100% Merit-based</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

