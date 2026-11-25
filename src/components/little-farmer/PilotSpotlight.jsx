import React from 'react';
import { Award, TrendingUp, Users, CheckCircle2, Coins, ShieldCheck } from 'lucide-react';
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
      covers: isRw ? 'Isanduku y’igiti n’igitabo cy’ubumenyi bw’imari' : 'Physical wooden vault and financial literacy ledger',
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
      item: isRw ? 'Iserukiramuco ry’Abana (Expo Day)' : 'Expo & Community Showcase',
      covers: isRw ? 'Gutegura imurikagurisha ry’ishuri, ubufasha n’ibikoresho' : 'School exhibition set-up, community showcase, and facilitator coordination',
      cost: '1,000,000 RWF',
      unit: isRw ? 'kuri buri serukiramuco' : 'per Expo Day',
    },
  ];

  const steps = [
    {
      step: '01',
      title: isRw ? 'Kumurika Umusaruro' : 'Harvest Exhibition',
      desc: isRw
        ? 'Abanyeshuri bamurika ibihingwa byabo bishya: dodo, ibihumyo, n’imboga z’umunara hamwe n’ibitabo by’ubushakashatsi.'
        : 'Students present fresh harvests alongside their botanical journals, leaf growth charts, and scientific observations.',
    },
    {
      step: '02',
      title: isRw ? 'Gusesengura Agaciro n’Ibiciro' : 'Value & Cost Analysis',
      desc: isRw
        ? 'Abana basobanura uruhererekane rw’agaciro, imikoreshereze y’amazi, n’uko babaze ibiciro by’icyitegererezo.'
        : 'Learners present their crop accounting: input costs, water metrics, and calculated fair market valuation.',
    },
    {
      step: '03',
      title: isRw ? 'Ubufatanye bw’Umuryango' : 'Adult-Guided Exchange',
      desc: isRw
        ? 'Ababyeyi n’abafatanyabikorwa bashyigikira gahunda mu buryo bw’uburezi, aho ubuguzi n’imigendekere bicungwa n’abakuru.'
        : 'Parents and community supporters participate in the harvest exchange, with commercial operations facilitated by adult mentors.',
    },
    {
      step: '04',
      title: isRw ? 'Kwizigamira Intego z’Inzozi' : 'Goal Allocation & Saving',
      desc: isRw
        ? 'Buri mwana yandika ubwizigame bwe mu gitabo cy’umutungo agana ku ntego ye y’inzozi z’amashuri.'
        : 'Learners record their allocated educational earnings into personal Saving Boxes, celebrating milestones.',
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
                ? 'Iserukiramuco ry’Abahinzi Bato n’Ubumenyi bw’Imari.'
                : 'The Little Farmers Expo Day & Learning Showcase.'}
            </h2>
            <p className="text-base sm:text-lg text-[#556358] leading-relaxed mb-6">
              {isRw
                ? 'Ku mpera za buri gipimo cy’isarura, DreamDo itegura Iserukiramuco ry’Abahinzi Bato — umunsi mukuru w’uburezi n’umuryango aho urubyiruko rugaragaza umusaruro w’ubuhinzi buhangana n’ikirere, bakarobanura ubumenyi bw’agaciro, bakizigamira intego zabo z’amashuri.'
                : 'At the culmination of each cohort, DreamDo hosts the Little Farmers Expo Day — an educational school and community showcase where participating youth present climate-smart harvests, demonstrate scientific journals, and practice practical budgeting under adult mentorship.'}
            </p>

            {/* Child Protection Notice */}
            <div className="p-4 rounded-2xl bg-white border border-black/5 flex items-start gap-3 text-xs text-[#556358] leading-relaxed">
              <ShieldCheck size={16} className="text-[#143A22] shrink-0 mt-0.5" />
              <span>
                {isRw
                  ? 'Kurengera Umwana mu Burezi: Umunsi w’iserukiramuco n’isoko ni umwitozo w’imyigire y’abana. Abana ntibakoreshwa mu bucuruzi cyangwa ngo bategekwe ibipimo by’igurisha; ibikorwa by’amafaranga n’imicungire byose bikorwa n’abantu bakuru babifitiye inshingano.'
                  : 'Child Protection & Safeguarding: The Expo Day is an experiential learning simulation. Children are never commercial laborers and have zero sales quotas. All financial transactions and commercial operations are managed strictly by adult facilitators.'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ImagePlaceholder
              src="/images/school-kinyinya-planting.jpg"
              alt={isRw ? 'Abana bitabiriye gahunda y’Umuhinzi Muto mu Rwanda' : 'Children participating in the Little Farmer school program in Rwanda'}
              caption={isRw ? 'Abana ba G.S. Kinyinya batera imboga ku munara w’ubusitani mu Rwanda — guhindura umwanya muto ubusitani butanga ibiribwa.' : 'Students at G.S. Kinyinya in Rwanda planting their vertical Cone Garden — experiential food production in action.'}
              badge={isRw ? 'G.S. Kinyinya, Kigali' : 'G.S. Kinyinya, Kigali'}
              isAuthentic={true}
              aspectRatio="aspect-[16/10]"
              uploadNote={isRw ? 'Ifoto: Umunsi Mukuru w’Isoko' : 'Photo: Little Farmers Expo Day'}
            />
          </div>
        </div>

        {/* 4 Step Expo Process Flow */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 mb-16 shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#143A22] mb-6 font-mono">
            {isRw ? 'Inzira y’Ibikorwa by’Iserukiramuco ry’Ishuri' : 'Educational Showcase Flow'}
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
