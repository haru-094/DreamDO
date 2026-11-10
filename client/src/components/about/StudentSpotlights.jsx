import React from 'react';
import { Award, UserCheck, Heart, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function StudentSpotlights() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const profiles = [
    {
      name: 'Eric Nshimyumuremyi',
      age: isRw ? 'Imyaka 13' : '13 Years Old',
      role: isRw ? 'Umujyanama mu Buhinzi (Farm Mentor)' : 'Farm Mentor (Ages 10–14)',
      cohort: isRw ? 'Ikigo cy’Ishuri cya Masaka' : 'Masaka Sector Pilot Cohort',
      harvest: '14.5 kg Dodo & Oyster Mushrooms',
      saved: '18,500 RWF',
      goal: isRw ? 'Ibitabo by’Ishuri n’Imbuto z’Igihembwe cya 2' : 'Secondary Prep Books & Seedling Reinvestment',
      quote: isRw
        ? '“Kuba umujyanama w’abato byanyigishije kubara inyungu no kubereka uko bita ku bimera bitanyanze.”'
        : '“Guiding younger students taught me how to calculate real market margins and teach proper drainage without wasting soil.”',
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Umujyanama Mukuru' : 'Senior Farm Mentor',
    },
    {
      name: 'Keza Umutoni',
      age: isRw ? 'Imyaka 8' : '8 Years Old',
      role: isRw ? 'Umuhinzi Muto (Junior Grower)' : 'Junior Grower (Ages 6–9)',
      cohort: isRw ? 'Gahunda y’Ibanze mu Muryango' : 'Household & School Garden',
      harvest: '6.2 kg Baby Spinach & Radish',
      saved: '12,000 RWF',
      goal: isRw ? 'Isakoshi y’Ishuri n’Amakaye' : 'New School Bag & Color Pens',
      quote: isRw
        ? '“Naragihinze, ndacyitaho, kandi ndakigurisha ku munsi w’isoko. Iki cyari igihembo cy’amaboko yanjye!”'
        : '“I planted it, I cared for it, and I sold it on Market Day. This was earned with my own two hands!”',
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Umuhinzi w’Imena' : 'Junior Pioneer',
    },
    {
      name: 'Marie Chantal Mukamana',
      age: isRw ? 'Umwalimu' : 'Educator & Facilitator',
      role: isRw ? 'Umwalimu Ushinzwe Umuhinzi Muto' : 'Teacher Playbook Facilitator',
      cohort: isRw ? 'Ishuri ribanza rya Leta' : 'Public Primary Partner School',
      harvest: '120+ Student Participants',
      saved: '100% Student Bank Accounts Active',
      goal: isRw ? 'Guhugura Abalimu 10 b’Akarere' : 'District Teacher Guild Lead',
      quote: isRw
        ? '“Abana batindaga mu ishuri kubera inzara noneho ubu bitabira guhinga kuko bazi ko bivamo ibiribwa n’amafaranga.”'
        : '“Students who used to lose focus in class are now passionate champions because they see direct dignity in agriculture.”',
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Umwalimu w’Icyitegererezo' : 'Certified Facilitator',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'UBUHAMYA BW’ABANA N’ABALIMU' : 'HUMAN VOICES & MENTORSHIP'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <UserCheck size={12} />
              {isRw ? 'Uburyo bwo Guhuza Imyaka' : 'Mixed-Age Mentorship'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            {isRw
              ? 'Abana n’Abarimu Bahindura Amateka y’Ubuhinzi mu Rwanda.'
              : 'The Faces of Young Agricultural Agency.'}
          </h2>

          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            {isRw
              ? 'DreamDo ihuza abana bakuru (imyaka 10–14) nk’abajyanama b’abato (imyaka 6–9). Bafatanya kwiga ubumenyi bw’isi, gucunga imibare, no kuzigama muri Banki ya DreamDo.'
              : 'Our single-facilitator playbook pairs older children (10–14) as "Farm Mentors" with younger peers (6–9), transforming peer teamwork into life skills, leadership, and shared savings.'}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/5 shadow-2xs flex flex-col justify-between hover:shadow-sm transition-all"
            >
              <div>
                <div className="mb-5">
                  <ImagePlaceholder
                    src={p.imageSrc}
                    alt={p.name}
                    badge={p.badge}
                    aspectRatio="aspect-[4/3]"
                    uploadNote="Photo: Student in garden"
                    className="rounded-2xl"
                  />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-[#143A22]">
                    {p.name}
                  </h3>
                  <span className="text-xs font-mono text-[#6A786E]">
                    {p.age}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-[#E25822] mb-3">
                  {p.role}
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-[#465349] italic leading-relaxed mb-6 bg-[#FAF8F5] p-3.5 rounded-xl border border-black/5">
                  {p.quote}
                </blockquote>

                {/* Metrics */}
                <div className="space-y-1.5 pt-3 border-t border-black/5 text-xs font-mono">
                  <div className="flex justify-between text-[#556358]">
                    <span>{isRw ? 'Umusaruro:' : 'Harvest Yield:'}</span>
                    <span className="font-bold text-[#143A22]">{p.harvest}</span>
                  </div>
                  <div className="flex justify-between text-[#556358]">
                    <span>{isRw ? 'Ayazigamwe:' : 'Total Saved:'}</span>
                    <span className="font-bold text-[#BAF035] bg-[#143A22] px-1.5 py-0.5 rounded text-[11px]">{p.saved}</span>
                  </div>
                  <div className="flex justify-between text-[#556358]">
                    <span>{isRw ? 'Inzozi Zagezweho:' : 'Dream Achieved:'}</span>
                    <span className="font-semibold text-[#143A22]">{p.goal}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-black/5 text-[10px] text-[#86968B] font-mono">
                ✦ {p.cohort}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
