import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function StepsSection() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Meet the food system.',
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      detail: 'Soil biology, seed embryology, sunlight, water conservation, and local crop nutrition.',
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Young hands holding seed and soil during Week 1',
      uploadNote: 'Photo: Child testing soil / seeds',
    },
    {
      num: '02',
      title: 'Grow',
      desc: 'Plant, care and problem-solve.',
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      detail: 'Establishing daily watering routines, building DIY drip irrigation, and natural garlic-chili spray.',
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Lush green seedlings growing in container gardens',
      uploadNote: 'Photo: Drip irrigation & plant care',
    },
    {
      num: '03',
      title: 'Harvest',
      desc: 'See effort become something real.',
      pillColor: 'bg-[#C0F038]',
      textColor: 'text-[#143A22]',
      detail: 'Cutting fresh amaranth (dodo) and microgreens cleanly, batch weighing, and hygiene standards.',
      imageSrc: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Freshly harvested crops and mushrooms in student hands',
      uploadNote: 'Photo: Harvesting dodo / oyster mushrooms',
    },
    {
      num: '04',
      title: 'Sell & save',
      desc: "Price, earn and choose what's next.",
      pillColor: 'bg-[#E25822]',
      textColor: 'text-white',
      detail: 'Calculating unit profit, hosting school Market Day, and depositing coins into the DreamDo Saving Box.',
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Coins and savings ledger for DreamDo Bank deposit',
      uploadNote: 'Photo: Child with Saving Box & coins',
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
            The learning journey: Understand → Grow → Harvest → Consume / Sell → Earn → Save → Reinvest. Every step connects practical agriculture with real financial agency.
          </p>
        </div>

        {/* 4 Cards Grid with Photo Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-5 border border-black/5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Placeholder Card */}
                <div className="mb-4">
                  <ImagePlaceholder
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    badge={`Step ${step.num}`}
                    aspectRatio="aspect-[4/3]"
                    uploadNote={step.uploadNote}
                    className="rounded-2xl"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-7 h-7 rounded-full ${step.pillColor} ${step.textColor} flex items-center justify-center font-bold text-xs shadow-xs`}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#143A22]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs font-semibold text-[#143A22]/80 mb-2">
                  {step.desc}
                </p>

                <p className="text-xs text-[#5D6B60] leading-relaxed mb-4">
                  {step.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-[#829286] font-mono">
                <span>Phase {step.num} of 04</span>
                <span className="text-[#143A22] font-semibold">Active Cycle</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
