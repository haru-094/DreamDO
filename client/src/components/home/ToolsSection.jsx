import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function ToolsSection() {
  const tools = [
    {
      num: '01',
      title: 'Cone Garden',
      unitCost: '40,000 RWF',
      desc: 'A scalable vertical garden made from durable HDPE sheets. Engineered to last up to 20 years, producing food in < 1m² space where land is limited.',
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      badge: 'HDPE Cone Garden',
      uploadNote: 'Photo: School Cone Garden',
    },
    {
      num: '02',
      title: 'Mission Cards',
      unitCost: 'Curriculum Kit',
      desc: 'Bite-size, hands-on, week-by-week actions. Guides children through planting, care, soil layering, and the Plant Doctor diagnostic guides.',
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      badge: 'Learning Toolkit',
      uploadNote: 'Photo: Mission cards / logbooks',
    },
    {
      num: '03',
      title: 'Saving Box',
      unitCost: '15,000 RWF',
      desc: 'A physical wooden savings box that connects harvest and sales directly to saving. Teaches kids delayed gratification, budgeting, and reinvestment.',
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      badge: 'DreamDo Saving Box',
      uploadNote: 'Photo: Student Saving Box',
    },
    {
      num: '04',
      title: 'Coaching & Training',
      unitCost: '100,000 RWF',
      desc: 'Facilitators, teachers, and parents receive training and continuous mentorship to ensure gardens remain sustainable and productive year after year.',
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      badge: 'Facilitator Coaching',
      uploadNote: 'Photo: Teacher & facilitator training',
    },
  ];

  return (
    <section id="system" className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
          
          {/* Left Summary */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="mb-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono">
                PRACTICAL TOOLS, SERIOUS IMPACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              A garden is just<br className="hidden sm:inline" />
              the beginning.
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal mb-8 max-w-md">
              A complete package of four tools transforms schoolyard growing into an enduring learning asset that serves cohorts for up to 20 years.
            </p>

            {/* Quick highlight badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm space-y-1">
              <span className="text-xs font-bold text-[#C0F038] uppercase font-mono tracking-wider block">
                Social Enterprise Model
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Gardens are designed to run with locally available inputs after installation, with produce sales covering running costs and children’s savings.
              </p>
            </div>
          </div>

          {/* Right 2x2 Grid with Real Photos & Photo Spaces */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map((item) => (
              <div
                key={item.num}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#C0F038]/50 rounded-3xl p-5 sm:p-6 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <ImagePlaceholder
                      src={item.imageSrc}
                      alt={item.title}
                      badge={item.badge}
                      isAuthentic={item.isAuthentic}
                      aspectRatio="aspect-[16/10]"
                      uploadNote={item.uploadNote}
                      className="rounded-2xl"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-[#C0F038]">
                      TOOL {item.num}
                    </span>
                    <span className="text-xs font-mono bg-white/10 text-white/90 px-2 py-0.5 rounded-md">
                      {item.unitCost}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
                  <span>Durable Asset</span>
                  <span className="text-[#C0F038]">Full Package Support</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
