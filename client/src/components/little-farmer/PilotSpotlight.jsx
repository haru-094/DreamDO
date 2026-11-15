import React from 'react';
import { Award, TrendingUp, Users, CheckCircle2, Coins } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function PilotSpotlight({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const investmentAreas = [
    {
      item: isRw ? 'Ubusitani bw’Umunara (Cone Garden)' : 'Cone Garden',
      covers: isRw ? 'Umunara umwe wa HDPE uramba imyaka 20' : 'One durable HDPE vertical garden (lasts up to 20 years)',
      cost: '40,000 RWF',
      unit: isRw ? 'kuri buri munara' : 'per cone',
    },
    {
      item: isRw ? 'Isanduku yo Kuzigama (Saving Box)' : 'Saving Box',
      covers: isRw ? 'Isanduku y’igiti ifunze n’igitabo cy’umutungo' : 'Physical wooden bank connecting harvest sales to savings',
      cost: '15,000 RWF',
      unit: isRw ? 'kuri buri sanduku' : 'per box',
    },
    {
      item: isRw ? 'Amahugurwa n’Ubujyanama' : 'Training & Coaching',
      covers: isRw ? 'Amahugurwa y’abarimu, abafashamyigire n’ababyeyi' : 'Facilitator, teacher, and parent training with mentorship',
      cost: '100,000 RWF',
      unit: isRw ? 'kuri buri hugurwa' : 'per training',
    },
    {
      item: isRw ? 'Umunsi w’Isoko ry’Abana (Market Day)' : 'Market Day & Expo',
      covers: isRw ? 'Gutegura amaduka y’abana, imizigo n’abafatanyabikorwa' : 'Market Day set-up, student stalls, and community logistics',
      cost: '1,000,000 RWF',
      unit: isRw ? 'kuri buri munsi w’isoko' : 'per Market Day',
    },
  ];

  const steps = [
    {
      step: '01',
      title: isRw ? 'Kumurika Umusaruro' : 'Produce Stalls',
      desc: isRw
        ? 'Abanyeshuri bategura amaduka yabo, bakerekana imboga za dodo n’ibihumyo byakuzwe mu miryango no ku ishuri.'
        : 'Students set up branded stalls showcasing crisp microgreens, oyster mushrooms, and leafy cone greens.',
    },
    {
      step: '02',
      title: isRw ? 'Kugena Ibiciro no Kubara' : 'Margin Defense',
      desc: isRw
        ? 'Abana basobanurira abaguzi ibiciro bishingiye ku mafaranga yose yakoreshejwe n’igihe bimaze bikura.'
        : 'Children present their harvest journals, defending their unit prices based on calculated input costs.',
    },
    {
      step: '03',
      title: isRw ? 'Gucuruza no Kumvikana' : 'Live Commerce',
      desc: isRw
        ? 'Ababyeyi, abaturanyi, n’abashyitsi bagura umusaruro w’abana bakoresheje amafaranga nyayo.'
        : 'Parents, community members, and educators purchase fresh produce using physical currency.',
    },
    {
      step: '04',
      title: isRw ? 'Kubitsa muri Banki' : 'Bank Deposits',
      desc: isRw
        ? 'Buri munyeshuri abitsa inyungu ze mu Isanduku ya DreamDo, akandika umubare mu gitabo cy’ibaruramari.'
        : 'Every franc earned is deposited into personal Saving Boxes and countersigned in student passbooks.',
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
              {isRw ? 'IGERAGEZA MU MURENGE WA MASAKA, KIGALI' : 'PILOT BENCHMARK • MASAKA SECTOR, KIGALI'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
              {isRw
                ? 'Umunsi Mukuru w’Isoko ry’Abahinzi Bato n’Ubukungu Nyabwo.'
                : 'The Little Farmers Expo Day & Social Enterprise Model.'}
            </h2>
            <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
              {isRw
                ? 'Ku mpera za buri gipimo cy’isarura, DreamDo itegura Umunsi Mukuru w’Isoko ry’Abahinzi Bato — isoko ryeruye aho urubyiruko rugaragaza umusaruro w’ubuhinzi buhangana n’imihindagurikire y’ikirere, bakarobanura inyungu, bakagura intego zabo.'
                : 'At the culmination of each harvest cycle, DreamDo hosts the Little Farmers Expo Day — a live commercial marketplace where participating youth showcase climate-smart yields, pitch their entrepreneurship journals, and activate personal savings accounts.'}
            </p>
          </div>

          <div className="lg:col-span-5">
            <ImagePlaceholder
              src="/images/school-cone-garden.jpg"
              alt={isRw ? 'Abana bitabiriye gahunda y’Umuhinzi Muto mu Rwanda' : 'Children participating in the Little Farmer school program in Rwanda'}
              caption={isRw ? 'Abana ku busitani bw’umunara mu Rwanda — guhindura umwanya muto ubusitani butanga ibiribwa.' : 'School cone garden cohort in Rwanda — turning wasted spaces into food labs.'}
              badge={isRw ? 'Igerageza rya Masaka' : 'Masaka Sector Pilot'}
              isAuthentic={true}
              aspectRatio="aspect-[16/10]"
              uploadNote={isRw ? 'Ifoto: Umunsi Mukuru w’Isoko' : 'Photo: Little Farmers Expo Day'}
            />
          </div>
        </div>

        {/* 4 Step Expo Process Flow */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 mb-16 shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#143A22] mb-6 font-mono">
            {isRw ? 'Inzira y’Ibikorwa by’Umunsi w’Isoko' : 'Flagship Event Flow'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#E25822] mb-1 block">
                    {st.step}
                  </span>
                  <h4 className="text-base font-bold text-[#143A22] mb-1.5">{st.title}</h4>
                  <p className="text-xs text-[#5D6B60] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Economics from Concept Note */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#143A22]/70 uppercase font-mono block mb-1">
                {isRw ? 'IBICIRO BYEMEWE BYA GAHUNDA' : 'TRANSPARENT UNIT PRICING'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22]">
                {isRw ? 'Imiterere y’Igiciro cya Buri Gikoresho' : 'Program Unit Economics Benchmark'}
              </h3>
            </div>
            <button
              onClick={onOpenPartnerModal}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] transition-colors cursor-pointer self-start sm:self-auto"
            >
              {isRw ? 'Saba Gahunda Yuzuye y’Ikigo' : 'Request School Partnership Proposal'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {investmentAreas.map((inv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-black/5 shadow-2xs hover:border-[#143A22]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#E25822] mb-1">
                    {inv.unit}
                  </div>
                  <h4 className="text-lg font-bold text-[#143A22] mb-2">{inv.item}</h4>
                  <p className="text-xs text-[#5D6B60] leading-relaxed mb-4">{inv.covers}</p>
                </div>
                <div className="pt-3 border-t border-black/5 text-xl font-extrabold text-[#143A22] font-mono">
                  {inv.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
