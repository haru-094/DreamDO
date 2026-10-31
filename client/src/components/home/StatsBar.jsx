import React from 'react';

export default function StatsBar() {
  const stats = [
    {
      value: '6–14',
      label: 'years old young makers',
    },
    {
      value: '4',
      label: 'practical learning weeks',
    },
    {
      value: '20 yrs',
      label: 'garden life with care',
    },
  ];

  return (
    <section className="bg-[#143A22] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Title */}
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              A whole food system,<br className="hidden sm:inline" />
              in a schoolyard.
            </h2>
          </div>

          {/* Right 3 Stat Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

