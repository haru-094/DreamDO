import React, { useState } from 'react';

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Meet the food system.',
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      detail: 'Explore soil biology, seeds, sunlight, water conservation, and why local food security matters.',
    },
    {
      num: '02',
      title: 'Grow',
      desc: 'Plant, care and problem-solve.',
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      detail: 'Establish daily care routines, observe seedling progress, manage pest challenges, and build patience.',
    },
    {
      num: '03',
      title: 'Harvest',
      desc: 'See effort become something real.',
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      detail: 'Celebrate tangible yields — cleanly cut microgreens, fresh oyster mushrooms, weighing and washing produce.',
    },
    {
      num: '04',
      title: 'Sell & save',
      desc: "Price, earn and choose what's next.",
      pillColor: 'bg-[#E25822]',
      textColor: 'text-white',
      detail: 'Participate in campus market days, price crops responsibly, and deposit earnings into the DreamDo Bank.',
    },
  ];

  return (
    <section id="steps" className="bg-[#FBF9F4] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              LEARNING BY DOING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143A22] leading-tight mb-4">
            From seed to self-belief.
          </h2>

          <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
            Every step connects practical growing with confidence, enterprise and everyday choices.
          </p>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, index) => {
            const isHovered = activeStep === index;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-black/5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Number Badge Circle */}
                  <div
                    className={`w-9 h-9 rounded-full ${step.pillColor} ${step.textColor} flex items-center justify-center font-bold text-xs mb-6 shadow-xs transition-transform duration-300 group-hover:scale-110`}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#143A22] mb-2">
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#5D6B60] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Micro Detail on Hover/Active */}
                <div className="pt-3 border-t border-black/5">
                  <p className="text-xs text-[#829286] leading-normal">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

