import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProgramFaq({ onOpenPartnerModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How much physical space does a school need for the Little Farmer program?',
      a: 'Very little! The Cone Garden was specifically engineered for compact spaces. It occupies less than 1 square meter (approximately 3 feet wide) and can grow 50+ seedlings simultaneously. It thrives on balconies, verandas, courtyards, or flat rooftops.',
    },
    {
      q: 'What age group is this program suitable for?',
      a: 'The core Little Farmer curriculum is tailored for children aged 6 to 14. We provide graduated mission tracks: Junior Explorers (ages 6–9) focus on plant care and tactile counting, while Young Entrepreneurs (ages 10–14) handle unit pricing, ledger accounting, and seed multiplication.',
    },
    {
      q: 'How does the "DreamDo Bank" work in practice?',
      a: 'Every student receives a physical DreamDo Saving Box and an accompanying paper ledger sheet. When crops are sold at the end of Week 4 (at school market days or to families), the proceeds are deposited directly into their bank. The student decides upfront what dream goal they are working toward (e.g., school books, a bicycle, sports shoes, or seed capital for their next batch).',
    },
    {
      q: 'Does it add significant workload for teachers?',
      a: 'Not at all. We provide comprehensive teacher coaching and pre-prepared 45-minute lesson plans aligned with standard STEM and life skills curriculums. Additionally, a dedicated DreamDo facilitator can support your campus sessions during the 4-week cohort.',
    },
    {
      q: 'What types of crops are grown?',
      a: 'We focus on fast-harvest, nutrient-dense crops that give kids immediate feedback: microgreens (radish, sunflower, peas) ready in 7–14 days, oyster mushrooms fruiting in 14–21 days, and leafy cone greens (spinach, kale, lettuce) ready in 25–28 days.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5D6B60] mt-2">
            Everything you need to know about implementing Little Farmer on your campus.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#143A22]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#143A22] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E25822]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white text-sm sm:text-base text-[#465349] leading-relaxed border-t border-black/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#5D6B60]">
            Have a question specific to your school or community?{' '}
            <button
              onClick={onOpenPartnerModal}
              className="font-bold text-[#143A22] underline hover:text-[#E25822] cursor-pointer"
            >
              Speak with a program coordinator
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}

