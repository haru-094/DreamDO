import React, { useState } from 'react';
import { BookOpen, Droplets, Scissors, Banknote } from 'lucide-react';

export default function CurriculumTimeline() {
  const [selectedWeek, setSelectedWeek] = useState(0);

  const weeks = [
    {
      weekNum: 'WEEK 01',
      title: 'Understand & Sowing',
      theme: 'The Seed & Soil Mystery',
      icon: BookOpen,
      badgeColor: 'bg-[#C0F038]',
      summary: 'Demystifying where nutrition comes from. Children set up the Cone Garden, test soil moisture, and sow their first seeds.',
      activities: [
        'Seed dissection: Understanding embryology and water activation',
        'Cone Garden assembly: Building the vertical water channel system',
        'Germination logs: Charting expected sprout dates for microgreens & oyster mushrooms',
        'Setting the Dream Goal: What will you save your harvest earnings toward?',
      ],
      skills: ['Plant Biology', 'Water Circulation', 'Goal Setting'],
    },
    {
      weekNum: 'WEEK 02',
      title: 'Daily Care & Problem-Solving',
      theme: 'Patience & Daily Routine',
      icon: Droplets,
      badgeColor: 'bg-[#C0F038]',
      summary: 'Establishing steady discipline. Learners conduct morning moisture checks, monitor sunlight exposure, and document growth stages.',
      activities: [
        'Daily watering schedules and water conservation metrics',
        'Spotting nutrient deficiencies and managing pests with organic companion planting',
        'Mushroom misting: Regulating humidity in mushroom fruiting chambers',
        'Mid-cycle math: Calculating daily growth rate in centimeters',
      ],
      skills: ['Daily Discipline', 'Scientific Observation', 'Ecosystem Care'],
    },
    {
      weekNum: 'WEEK 03',
      title: 'The Harvest & Quality Control',
      theme: 'Effort Becomes Tangible',
      icon: Scissors,
      badgeColor: 'bg-[#C0F038]',
      summary: 'Reaping the rewards of weeks of care. Learners harvest with sterile scissors, clean produce, and calculate total yield.',
      activities: [
        'Harvesting protocols: Cutting microgreens cleanly above root line',
        'Weighing and batch sorting: Using digital scales and recording yields',
        'Packaging with biodegradable wraps and handwritten Little Farmer labels',
        'Nutritional taste testing: Sampling fresh homegrown food with classmates',
      ],
      skills: ['Quality Standards', 'Food Hygiene', 'Data Recording'],
    },
    {
      weekNum: 'WEEK 04',
      title: 'Market Day & The DreamDo Bank',
      theme: 'From First Harvest to First Sale',
      icon: Banknote,
      badgeColor: 'bg-[#E25822] text-white',
      summary: 'The culmination of the journey. Children host a campus market stall, sell their produce to teachers and parents, and save earnings.',
      activities: [
        'Pricing & Unit Economics: Cost per punnet vs market demand in Kigali',
        'Campus Market Stall: Customer interaction, sales pitches, and making change',
        'The DreamDo Bank Deposit: Counting net profit and locking funds in savings boxes',
        'Graduation Ceremony: Receiving the Young Maker Certificate and Badge',
      ],
      skills: ['Sales & Customer Service', 'Accounting & Profit', 'Delayed Gratification'],
    },
  ];

  return (
    <section id="curriculum" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            THE 4-WEEK CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            A step-by-step pathway from seed to first deposit.
          </h2>
          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            Click through each week of the Little Farmer curriculum to see how biological science and entrepreneurial finance weave into every session.
          </p>
        </div>

        {/* Week Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {weeks.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWeek(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedWeek === idx
                  ? 'border-[#143A22] bg-[#FAF8F5] shadow-sm ring-1 ring-[#143A22]'
                  : 'border-black/10 bg-white hover:bg-black/5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-[#E25822]">
                  {w.weekNum}
                </span>
                <span className={`w-2.5 h-2.5 rounded-full ${selectedWeek === idx ? 'bg-[#143A22]' : 'bg-black/10'}`} />
              </div>
              <div className="text-sm font-bold text-[#143A22] leading-tight">
                {w.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Week Detail Card */}
        {(() => {
          const current = weeks[selectedWeek];
          const Icon = current.icon;
          return (
            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/5 shadow-2xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#143A22] text-white text-xs font-mono font-bold">
                      {current.weekNum}
                    </span>
                    <span className="text-xs font-semibold text-[#66746A]">
                      {current.theme}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22]">
                    {current.title}
                  </h3>

                  <p className="text-base text-[#465349] leading-relaxed">
                    {current.summary}
                  </p>

                  <div className="pt-4">
                    <div className="text-xs font-bold text-[#143A22] uppercase tracking-wider mb-2">
                      Core Competencies Mastered
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.skills.map((s, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#143A22]">
                          ✓ {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-black/5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E25822] mb-4">
                    Hands-On Activities in This Module
                  </div>
                  <ul className="space-y-3">
                    {current.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#465349]">
                        <span className="w-5 h-5 rounded-full bg-[#C0F038]/60 text-[#143A22] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}

