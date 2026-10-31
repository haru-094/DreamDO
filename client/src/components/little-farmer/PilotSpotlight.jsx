import React from 'react';
import { Award, TrendingUp, Users, CheckCircle2, Coins } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function PilotSpotlight({ onOpenPartnerModal }) {
  const investmentAreas = [
    {
      item: 'Cone Garden',
      covers: 'One durable HDPE vertical garden (lasts up to 20 years)',
      cost: '40,000 RWF',
      unit: 'per cone',
    },
    {
      item: 'Saving Box',
      covers: 'Physical wooden bank connecting harvest sales to savings',
      cost: '15,000 RWF',
      unit: 'per box',
    },
    {
      item: 'Training & Coaching',
      covers: 'Facilitator, teacher, and parent training with mentorship',
      cost: '100,000 RWF',
      unit: 'per training',
    },
    {
      item: 'Market Day & Expo',
      covers: 'Market Day set-up, student stalls, and community logistics',
      cost: '1,000,000 RWF',
      unit: 'per Market Day',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
              PILOT BENCHMARK • MASAKA SECTOR, KIGALI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
              The Little Farmers Expo Day & Social Enterprise Model.
            </h2>
            <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
              At the culmination of each harvest cycle, DreamDo hosts the Little Farmers Expo Day — a live commercial marketplace where participating youth showcase climate-smart yields, pitch their entrepreneurship journals, and activate personal savings accounts.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ImagePlaceholder
              src="/images/school-cone-garden.jpg"
              alt="Children participating in the Little Farmer school program in Rwanda"
              caption="School cone garden cohort in Rwanda — turning wasted spaces into food labs."
              badge="Masaka Sector Pilot"
              isAuthentic={true}
              aspectRatio="aspect-[16/10]"
              uploadNote="Photo: Little Farmers Expo Day"
            />
          </div>
        </div>

        {/* 4 Step Expo Process Flow */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 mb-16 shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#143A22] mb-6 font-mono">
            Flagship Event Flow
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Harvest Yields', desc: 'Displaying fresh amaranth, lettuce, and oyster mushrooms harvested directly by students.' },
              { step: '02', title: 'Presentation Skills', desc: 'Children pitch their learning journals, explaining water management and composting to visitors.' },
              { step: '03', title: 'Market Transactions', desc: 'Handling real money, making change, and selling Adoption Kits and organic compost.' },
              { step: '04', title: 'Savings Activation', desc: 'Depositing profits into personal DreamDo Banks to fund dream educational goals.' },
            ].map((s, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#E25822] mb-1 block">
                    STEP {s.step}
                  </span>
                  <h4 className="text-base font-bold text-[#143A22] mb-1.5">{s.title}</h4>
                  <p className="text-xs text-[#5D6B60] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment & Partner Packages Table */}
        <div className="bg-[#143A22] text-white rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono font-bold text-[#C0F038] tracking-widest uppercase block mb-1">
              TRANSPARENT UNIT ECONOMICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Fund a Cone Garden or Full School Package.
            </h3>
            <p className="text-sm text-white/70 mt-2">
              Partners can fund individual Cone Gardens, a set of Saving Boxes, facilitator trainings, or sponsor a complete School Market Day.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase font-mono text-[#C0F038]">
                  <th className="pb-3 pr-4">Investment Area</th>
                  <th className="pb-3 pr-4">What It Covers</th>
                  <th className="pb-3 pr-4">Unit Cost (RWF)</th>
                  <th className="pb-3">Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/90">
                {investmentAreas.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4 font-bold text-white">{row.item}</td>
                    <td className="py-4 pr-4 text-xs sm:text-sm text-white/70">{row.covers}</td>
                    <td className="py-4 pr-4 font-mono font-bold text-[#C0F038]">{row.cost}</td>
                    <td className="py-4 text-xs font-mono text-white/60">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-white/60">
              Formula: (Cones × 40k) + (Saving Boxes × 15k) + (Trainings × 100k) + (Market Days × 1M)
            </div>
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-3 rounded-full text-xs font-bold text-[#143A22] bg-[#C0F038] hover:bg-[#b0e028] transition-all cursor-pointer"
            >
              Sponsor a School Cohort
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

