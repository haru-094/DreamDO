import React from 'react';
import { FileText, Download, ArrowUpRight, BookOpen, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ResourceCenter({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const documents = [
    {
      title: isRw
        ? 'Inyandiko y’Igitekerezo: Ubusitani bw’Umunara mu Mashuri ya Leta'
        : 'Concept Note: Cone Gardens for Public Schools',
      subtitle: isRw
        ? 'Gahunda y’ubusitani bw’umunara mu bice by’icyaro n’inkambi z’impunzi mu Rwanda'
        : 'Cone Gardens for Public Schools in Rural and Marginalized Communities',
      type: 'PDF • 5 Pages',
      topics: ['HDPE Cone 20-yr Specs', '4 Tools System', 'School Rollout Formula'],
      actionLabel: isRw ? 'Saba Inyandiko Yuzuye' : 'Request Full Concept Note',
    },
    {
      title: isRw
        ? 'Inyandiko y’Igitekerezo: Gahunda y’Umuhinzi Muto i Masaka'
        : 'Initiative Concept Note: Sustainable Food Systems & Resilience',
      subtitle: isRw
        ? 'Ubushakashatsi n’icyiciro cy’igerageza mu Murenge wa Masaka, Kigali'
        : 'Child-centered social enterprise model and pilot benchmark in Masaka Sector, Kigali',
      type: 'PDF • 5 Pages',
      topics: ['Masaka Sector Pilot', 'Waste-to-Farm Engineering', 'Little Farmers Expo Day'],
      actionLabel: isRw ? 'Saba Inyandiko Yuzuye' : 'Request Full Concept Note',
    },
    {
      title: isRw
        ? 'Igitabo cy’Umwalimu: Imyigire y’Amatsinda Anyuranye'
        : 'Teacher’s Playbook: Mixed-Age Facilitator Guide',
      subtitle: isRw
        ? 'Uburyo bwo guhuza abana b’imyaka 10–14 nk’abajyanama b’abato (imyaka 6–9)'
        : 'Playbook for single facilitators running 10-child cohorts with Farm Mentors',
      type: 'Playbook • Sample',
      topics: ['Age-Differentiated Missions', 'Pest Diagnostics Guide', 'Ledger Accounting'],
      actionLabel: isRw ? 'Saba Icyitegererezo cy’Igitabo' : 'Request Playbook Sample',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'INYANDIKO ZA GAHUNDA' : 'PUBLICATIONS & DOWNLOADS'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <FileText size={12} />
              {isRw ? 'Ibyegeranyo Nyabyo' : 'Authentic Field Documents'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            {isRw
              ? 'Inyandiko n’Ibitabo bya Gahunda ya DreamDo.'
              : 'Resource Center & Strategic Concept Notes.'}
          </h2>

          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            {isRw
              ? 'Soma ku miterere irambuye ya gahunda ya DreamDo, ibiciro by’ibikoresho, n’ubushakashatsi bwakorewe mu Rwanda. Bigenewe amashuri, abafatanyabikorwa, n’abaterankunga.'
              : 'Access the complete methodology, cost structures, and research behind DreamDo Rwanda’s initiatives. Built for school boards, education partners, and impact investors.'}
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] border border-black/5 flex flex-col justify-between hover:border-[#143A22]/20 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#143A22] text-[#BAF035] flex items-center justify-center">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#E25822] bg-white px-2 py-0.5 rounded-md border border-black/5">
                    {doc.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#143A22] mb-1.5 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-[#5D6B60] leading-relaxed mb-4">
                  {doc.subtitle}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-black/5 mb-6">
                  {doc.topics.map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#143A22] font-medium">
                      <CheckCircle size={12} className="text-[#BAF035] shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (onOpenPartnerModal) {
                    onOpenPartnerModal({
                      type: 'community',
                      message: `Request for document: ${doc.title}`,
                    });
                  }
                }}
                className="w-full py-3 rounded-full text-xs font-bold text-[#143A22] bg-white hover:bg-[#143A22] hover:text-white transition-all border border-black/10 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>{doc.actionLabel}</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
