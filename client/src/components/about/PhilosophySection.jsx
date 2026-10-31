import React from 'react';
import { Target, Coins, Recycle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhilosophySection() {
  const pillars = [
    {
      icon: Target,
      tag: '01 / PURPOSE',
      title: 'Dream it. Do it. Save for it.',
      desc: 'Instead of handing children passive rewards, we guide them to identify meaningful goals, formulate practical action plans, and take pride in self-earned outcomes.',
    },
    {
      icon: Coins,
      tag: '02 / MERIT FINANCE',
      title: 'The DreamDo Bank',
      desc: 'Every task, sprout, and market sale translates into merit-based savings. By saving their own earnings in personal bank boxes, children internalize delayed gratification and financial confidence.',
    },
    {
      icon: Recycle,
      tag: '03 / STEWARDSHIP',
      title: 'Circular & Climate Smart',
      desc: 'From organic composting and water-recirculating cone gardens to oyster mushrooms grown on agricultural byproducts, youth become active stewards of environmental regeneration.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Quote Box */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/5 mb-20 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C0F038]/20 blur-2xl" />
          <div className="max-w-3xl relative z-10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-3 block">
              OUR GUIDING BELIEF
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#143A22] leading-snug tracking-tight mb-4">
              “The child who saves for dream items today is the very same person who builds a company tomorrow.”
            </blockquote>
            <p className="text-sm sm:text-base text-[#5D6B60] leading-relaxed">
              We replace consumer passivity with producer pride. When children experience the direct causal chain between effort, biological growth, market valuation, and savings, their perception of what they can achieve expands permanently.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div>
          <div className="mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#143A22]/70 uppercase font-mono block mb-2">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
              Three pillars of experiential growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl p-7 border border-black/5 flex flex-col justify-between group hover:border-[#143A22]/20 hover:shadow-xs transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#143A22] text-[#C0F038] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#E25822] tracking-widest uppercase block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#143A22] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#5D6B60] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

