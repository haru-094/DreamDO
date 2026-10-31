import React from 'react';
import { Compass, Lightbulb, Users, Award } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mission Left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono">
              MISSION STATEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Equipping every child with practical life skills through hands-on discovery.
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-normal">
              To equip children with financial literacy, entrepreneurial thinking, and personal responsibility through experiential, activity-based learning that connects to their unique strengths and community needs.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs uppercase font-mono tracking-wider text-[#C0F038] font-bold">
                The Vision
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                To be Africa’s leading platform for experiential childhood development — empowering every child to live purposefully, grow confidently, and contribute meaningfully to their communities and the world.
              </p>
            </div>
          </div>

          {/* Right Values Matrix */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Compass,
                title: 'Action-First Learning',
                desc: 'Children learn best with their hands in soil, measuring rainfall, and counting market earnings.',
              },
              {
                icon: Award,
                title: 'Dignity of Labor',
                desc: 'Farming and food production are respected, high-tech, noble endeavors of enterprise.',
              },
              {
                icon: Users,
                title: 'Community Ecosystem',
                desc: 'Uniting parents, teachers, elders, and young entrepreneurs in shared growth.',
              },
              {
                icon: Lightbulb,
                title: 'Financial Agency',
                desc: 'Teaching real valuation, cost calculations, budgeting, and long-term savings from age 6.',
              },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#C0F038]/10 text-[#C0F038] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{v.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{v.desc}</p>
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

