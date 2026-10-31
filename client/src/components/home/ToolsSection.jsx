import React from 'react';

export default function ToolsSection() {
  const tools = [
    {
      num: '01',
      title: 'Cone Garden',
      desc: 'A scalable vertical grower for compact spaces.',
      spec: 'Holds up to 50+ seedlings in < 1m² space with closed-loop water efficiency.',
    },
    {
      num: '02',
      title: 'Mission Cards',
      desc: 'Bite-size, hands-on, week-by-week actions.',
      spec: 'Turn science, ecology, and math into gamified weekly missions for youth.',
    },
    {
      num: '03',
      title: 'Saving Box',
      desc: 'A place for earnings, goals and real investments.',
      spec: 'Teaches merit savings, ledger accounting, and goal tracking for dream purchases.',
    },
    {
      num: '04',
      title: 'Coaching',
      desc: 'Teachers, families and mentors grow together.',
      spec: 'In-person workshops and facilitator toolkits ensuring long-term sustainability.',
    },
  ];

  return (
    <section id="system" className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Summary */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="mb-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono">
                SMALL SPACE, SERIOUS IMPACT.
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              A garden is just<br className="hidden sm:inline" />
              the beginning.
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal mb-8 max-w-md">
              A simple set of tools turns school yard growing into a complete learning experience.
            </p>

            {/* Quick highlight badge */}
            <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C0F038] animate-ping" />
              <span className="text-xs text-white/80">
                Designed for Rwanda’s schools, rooftops, and urban backyards.
              </span>
            </div>
          </div>

          {/* Right 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {tools.map((item) => (
              <div
                key={item.num}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#C0F038]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-white/50 group-hover:text-[#C0F038] transition-colors mb-3 block">
                    {item.num}
                  </span>
                  
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="text-[11px] text-white/40 leading-normal">
                    {item.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

