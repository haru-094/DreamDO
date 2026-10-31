import React from 'react';
import { Layers, Check, Sparkles } from 'lucide-react';

export default function KitShowcase() {
  const tools = [
    {
      name: 'Vertical Cone Garden',
      tag: 'GROWTH HARDWARE',
      desc: 'Engineered for dense urban schools and homes. Recirculating vertical irrigation system holding 50+ seedlings in under 1 square meter footprint.',
      features: ['Food-grade UV-safe polymer', 'Gravity-assisted water distribution', 'Indoor & outdoor adaptable'],
    },
    {
      name: 'Mission Cards & Logbook',
      tag: 'CURRICULUM SYSTEM',
      desc: '28 daily illustrated bite-sized challenges connecting biology, math, weather measurement, and ethical teamwork.',
      features: ['Daily checklists & observation charts', 'Vocabulary & ecosystem prompts', 'Reflection journal prompts'],
    },
    {
      name: 'The DreamDo Saving Box',
      tag: 'MERIT SAVINGS VAULT',
      desc: 'A physical wooden bank with a double-entry ledger sheet where every harvest sale deposit is countersigned and saved toward a target dream.',
      features: ['Physical dual-key locking mechanism', 'Personal savings goal ledger', 'Builds tactile habit of saving'],
    },
    {
      name: 'Starter Seed & Substrate Pack',
      tag: 'BIOLOGICAL INPUTS',
      desc: 'Heirloom fast-growing seeds and sterile oyster mushroom substrate inoculated for fast, reliable, and high-yield student success.',
      features: ['Sunflower, radish, & kale seeds', 'Pre-inoculated oyster mushroom fruiting block', 'Organic seedling starter soil'],
    },
  ];

  return (
    <section className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono mb-2 block">
            THE HARDWARE & LEARNING KIT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything needed to launch a school food enterprise.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Little Farmer is not just a digital concept — it is a physical, tactile system delivered directly to classrooms and families in Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tools.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-[#C0F038]/50 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#C0F038] uppercase block mb-2">
                  {t.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.name}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {t.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                {t.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                    <Check size={14} className="text-[#C0F038] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

