import React, { useState } from 'react';
import { BookOpen, Droplets, Scissors, Banknote, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function CurriculumTimeline() {
  const [selectedWeek, setSelectedWeek] = useState(0);

  const weeks = [
    {
      weekNum: 'WEEK 01',
      title: 'Waste Becomes a Farm',
      theme: 'Container Engineering & Sowing',
      icon: BookOpen,
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Recycled containers, sacks, and bottles turned into growing beds',
      uploadNote: 'Photo: Sorting waste & assembling gardens',
      summary: 'Children sort household waste, drill drainage holes, and construct bottle, sack, and bucket gardens alongside setting up the Cone Garden.',
      activities: [
        'Waste-to-Farm conversion: transforming plastic bottles and sacks into self-draining pots',
        'Cone Garden setup: assembling durable HDPE vertical sheets in a compact 1m² space',
        'Embryology lesson: dissecting seeds to understand water activation and root geotropism',
        'Setting the Dream Goal: deciding what each child will save for with their harvest profit',
      ],
      skills: ['Waste Recycling', 'Soil Science Basics', 'Goal Setting'],
    },
    {
      weekNum: 'WEEK 02',
      title: 'Building Soil & Planting',
      theme: 'Compost Chemistry & Seed Depths',
      icon: Droplets,
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Children layering compost and planting seeds in soil',
      uploadNote: 'Photo: Layering mini-compost bucket',
      summary: 'Learners layer organic food scraps into mini-compost buckets and plant fast-growing indigenous crops like dodo (amaranth), lettuce, and spinach.',
      activities: [
        'Mini-compost bucket creation: balancing green nitrogen scraps with dry carbon matter',
        'Sowing dodo (amaranth), spinach, and oyster mushroom blocks at precise seed depths',
        'Daily watering schedules: calculating ml of water needed per plant to prevent evaporation',
        'Mixed-age mentoring: older children (10–14) guide younger partners (6–9) on gentle handling',
      ],
      skills: ['Composting Chemistry', 'Companion Planting', 'Peer Mentorship'],
    },
    {
      weekNum: 'WEEK 03',
      title: 'Smart Care & The Plant Doctor',
      theme: 'Low-Tech Irrigation & Analog AI',
      icon: Scissors,
      imageSrc: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Young learners checking plant leaves and drip irrigation',
      uploadNote: 'Photo: Analog AI plant decision tree',
      summary: 'Children build gravity drip irrigation, make organic garlic-chili sprays, and use a screen-free "Decision Tree" flowchart to diagnose plant health.',
      activities: [
        'Building DIY drip irrigation using recycled bottles and cotton wicks',
        'The Plant Doctor: diagnosing leaf discoloration, pests, and moisture levels',
        'Analog AI Explorer: screen-free decision tree flowchart introducing algorithmic if/then logic',
        'Brewing natural garlic, neem, and chili organic pesticide spray',
      ],
      skills: ['Computational Logic', 'Drip Irrigation', 'Organic Pest Control'],
    },
    {
      weekNum: 'WEEK 04',
      title: 'Market Day & Harvest',
      theme: 'Live Commerce & DreamDo Bank',
      icon: Banknote,
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Children with harvest produce and saving boxes at school market',
      uploadNote: 'Photo: Live Market Day & Saving Box',
      summary: 'The grand finale. Children harvest baby greens, calculate production costs and fair prices, run a live campus market stall, and deposit earnings.',
      activities: [
        'Harvesting baby dodo greens and oyster mushrooms with food safety hygiene',
        'Packaging with Adoption Kits (containers parents take home) and organic compost',
        'Market Day Pitch: presenting harvest journals, explaining pricing, and making transactions',
        'The DreamDo Bank deposit ceremony: recording savings in personal ledgers',
      ],
      skills: ['Sales & Negotiation', 'Profit Calculation', 'Financial Self-Reliance'],
    },
  ];

  return (
    <section id="curriculum" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            THE 4-WEEK PROGRAM PLAYBOOK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            Curriculum designed for real hands and real results.
          </h2>
          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            Delivered in 4 weekly sessions (3 hours per session) for cohorts of 10 children, led by a trained facilitator with age-differentiated tasks for ages 6–14.
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

        {/* Selected Week Detail Card with Photo Placeholder */}
        {(() => {
          const current = weeks[selectedWeek];
          return (
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-black/5 shadow-2xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description & Activities */}
                <div className="lg:col-span-7 space-y-4">
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

                  <div className="bg-white rounded-2xl p-5 border border-black/5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#E25822] mb-3">
                      Hands-On Tasks in This Session:
                    </div>
                    <ul className="space-y-2.5">
                      {current.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#465349]">
                          <span className="w-4 h-4 rounded-full bg-[#C0F038] text-[#143A22] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {current.skills.map((s, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#143A22]">
                          ✓ {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Photo Card */}
                <div className="lg:col-span-5">
                  <ImagePlaceholder
                    src={current.imageSrc}
                    alt={current.imageAlt}
                    badge={`${current.weekNum} Activity`}
                    aspectRatio="aspect-[4/3]"
                    uploadNote={current.uploadNote}
                    caption={current.theme}
                    className="rounded-2xl"
                  />
                  <div className="mt-3 p-3 bg-white/70 rounded-xl border border-black/5 text-[11px] text-[#6A786E]">
                    <strong className="text-[#143A22]">Mixed-age pairing:</strong> Older children (10–14) act as "Farm Mentors" supporting younger peers (6–9).
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
