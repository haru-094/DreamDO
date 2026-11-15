import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ProgramFaq({ onOpenPartnerModal }) {
  const [openIdx, setOpenIdx] = useState(0);
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const faqs = [
    {
      q: isRw
        ? 'Hakenewe umwanya ungana iki mu kigo cy’ishuri kugira ngo dutangize Umuhinzi Muto?'
        : 'How much physical space does a school need for the Little Farmer program?',
      a: isRw
        ? 'Umwanya muto cyane! Ubusitani bw’Umunara (Cone Garden) bwakorewe by’umwihariko ahantu hafite ubutaka buto. Bwihariye munsi ya metero kare 1 (< 1m²) kandi bushobora gukuzamo ibihingwa 50+ icyarimwe. Bukora neza ku mabaraza, mu kibuga cy’ishuri, cyangwa hejuru y’igisenge cy’inzu.'
        : 'Very little! The Cone Garden was specifically engineered for compact spaces. It occupies less than 1 square meter (approximately 3 feet wide) and can grow 50+ seedlings simultaneously. It thrives on balconies, verandas, courtyards, or flat rooftops.',
    },
    {
      q: isRw
        ? 'Ni ikihe cyiciro cy’imyaka y’abana iyi gahunda igenewe?'
        : 'What age group is this program suitable for?',
      a: isRw
        ? 'Integanyanyigisho y’Umuhinzi Muto yagenewe abana bafite imyaka iri hagati ya 6 na 14. Tugabanya imirimo mu byiciro bibiri: Abashakashatsi Bato (imyaka 6–9) bibanda ku kwita ku bimera no kubara ingano, n’Abikorera Bakiri Bato (imyaka 10–14) bashinzwe kugena ibiciro, ibaruramari mu gitabo cy’umutungo, no gukuza imbuto.'
        : 'The core Little Farmer curriculum is tailored for children aged 6 to 14. We provide graduated mission tracks: Junior Explorers (ages 6–9) focus on plant care and tactile counting, while Young Entrepreneurs (ages 10–14) handle unit pricing, ledger accounting, and seed multiplication.',
    },
    {
      q: isRw
        ? 'Ni gute "Banki ya DreamDo" ikora mu bikorwa bya buri munsi?'
        : 'How does the "DreamDo Bank" work in practice?',
      a: isRw
        ? 'Buri munyeshuri ahabwa Isanduku y’igiti yo kuzigama n’igitabo cy’ibaruramari. Iyo umusaruro ugurishijwe ku mpera z’Icyumweru cya 4 (ku isoko ry’ishuri cyangwa mu miryango), amafaranga ahita ashyirwa mu isanduku y’umwana. Umwana ahitamo intego y’inzozi ze hakiri kare (urugero: amakaye, igare, inkweto za siporo, cyangwa igishoro cy’ubundi buhinzi).'
        : 'Every student receives a physical DreamDo Saving Box and an accompanying paper ledger sheet. When crops are sold at the end of Week 4 (at school market days or to families), the proceeds are deposited directly into their bank. The student decides upfront what dream goal they are working toward (e.g., school books, a bicycle, sports shoes, or seed capital for their next batch).',
    },
    {
      q: isRw
        ? 'Ese iyi gahunda yaba yongerera umutwaro w’akazi abarimu basanzwe?'
        : 'Does it add significant workload for teachers?',
      a: isRw
        ? 'Hoya na gato. Duteza imbere abarimu binyuze mu kubahugura no kubaha imfashanyigisho zanditse z’iminota 45 zihuye n’integanyanyigisho ya STEM n’ubumenyi bw’ubuzima. Byongeye kandi, umufashamyigire wa DreamDo ashobora kuza gufatanya n’ishuri mu gihe cy’ibyumweru 4 by’amahugurwa.'
        : 'Not at all. We provide comprehensive teacher coaching and pre-prepared 45-minute lesson plans aligned with standard STEM and life skills curriculums. Additionally, a dedicated DreamDo facilitator can support your campus sessions during the 4-week cohort.',
    },
    {
      q: isRw
        ? 'Ni ibihe bihingwa bihingwa mu busitani bw’umunara?'
        : 'What types of crops are grown?',
      a: isRw
        ? 'Twibanda ku bihingwa byera vuba bifite intungamubiri nyinshi kugira ngo abana babone umusaruro wihuse: imboga nto (radish, tournesol, amashaza) zera mu minsi 7–14, ibihumyo by’ibijumba byera mu minsi 14–21, n’imboga z’amababi (epinari, dodo, salade) zera mu minsi 25–28.'
        : 'We focus on fast-harvest, nutrient-dense crops that give kids immediate feedback: microgreens (radish, sunflower, peas) ready in 7–14 days, oyster mushrooms fruiting in 14–21 days, and leafy cone greens (spinach, kale, lettuce) ready in 25–28 days.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            {isRw ? 'IBIBAZO N’IBISUBIZO' : 'QUESTIONS & ANSWERS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
            {isRw ? 'Ibibazo Bikunze Kubazwa' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm sm:text-base text-[#5D6B60] mt-2">
            {isRw
              ? 'Ibyo wifuza kumenya byose mbere yo gutangiza gahunda y’Umuhinzi Muto mu kigo cyawe.'
              : 'Everything you need to know about implementing Little Farmer on your campus.'}
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

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-[#FAF8F5] p-6 rounded-2xl border border-black/5">
          <p className="text-sm text-[#5D6B60] mb-3">
            {isRw ? 'Ufite ikindi kibazo cyihariye ku kigo cyawe?' : 'Have a specific question about your school or organization?'}
          </p>
          <button
            onClick={onOpenPartnerModal}
            className="text-xs font-bold text-[#143A22] hover:text-[#E25822] underline underline-offset-4 cursor-pointer"
          >
            {isRw ? 'Twandikire ubaze itsinda rya DreamDo →' : 'Contact our program team directly →'}
          </button>
        </div>

      </div>
    </section>
  );
}
