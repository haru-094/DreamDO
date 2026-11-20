import React from 'react';
import { ShieldCheck, Heart, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ChildProtectionFramework() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const principles = [
    {
      title: isRw ? 'Imyigire Ishengurwa n’Uburezi (Ntabwo ari Umurimo w’Inyungu)' : 'Strict Educational Framing (Not Commercial Labor)',
      desc: isRw
        ? 'Ibikorwa byose by’Umuhinzi Muto bigamije kwigisha abana, si ugukora ubucuruzi. Abana ntibategekwa kweza umusaruro runaka cyangwa kugurisha ku ngufu.'
        : 'All Little Farmer activities are designed strictly as experiential learning exercises. Children are never assigned production quotas or commercial sales targets.',
    },
    {
      title: isRw ? 'Ubugurisha n’Umutungo Bicungwa n’Abantu Bakuru' : 'Adult-Managed Commercial Operations',
      desc: isRw
        ? 'Imirimo yose y’ubuguzi, gutwara umusaruro, no gucunga amafaranga manini igenzurwa kandi igashyirwa mu bikorwa n’ababyeyi, abarimu, cyangwa abafashamyigire babihuguriwe.'
        : 'Any commercial production, market day logistics, and external sales transactions are managed and supervised by responsible adult facilitators and parents.',
    },
    {
      title: isRw ? 'Kwigira ku Rugero rw’Imyaka (Imyaka 6+)' : 'Age-Appropriate Simulated Financial Literacy',
      desc: isRw
        ? 'Abana bimenyereza gucunga ingengo y’imari, gusobanukirwa agaciro k’amafaranga, no kuzigama muri Banki ya DreamDo nk’imyitozo ibategurira ejo hazaza.'
        : 'Students explore budgeting, pricing logic, and delayed gratification through simulated ledgers and saving boxes to build financial confidence safely.',
    },
    {
      title: isRw ? 'Umutekano no Kubungabunga Ubuzima bw’Umwana' : 'Physical Safety & Safe Natural Inputs',
      desc: isRw
        ? 'Ibihingwa bikuzwa nta miti y’uruganda ihumanya; hakoreshwa ifumbire y’umwimerere n’umuti w’itunguru n’urusenda, bikorwa mu mutekano usesuye.'
        : 'Zero toxic synthetic agrochemicals. Children only work with organic compost, biological seed wicks, and natural kitchen-based plant remedies under supervision.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/10">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143A22]/5 text-[#143A22] text-xs font-mono font-bold mb-3">
              <ShieldCheck size={14} className="text-[#143A22]" />
              {isRw ? 'KURENGERA UMURIMO W’UMWANA N’AMATEGEKO' : 'CHILD SAFEGUARDING & ETHICAL FRAMEWORK'}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#143A22] tracking-tight mb-4">
              {isRw 
                ? 'Uburezi bufite inshingano: Kurengera umwana no kubahiriza amategeko.' 
                : 'Educational Integrity & Rwanda Child Safeguarding Standards.'}
            </h2>

            <p className="text-sm sm:text-base text-[#556358] leading-relaxed">
              {isRw
                ? 'DreamDo ikorana n’abana bafite imyaka 6 kuzamura. Twubahiriza amategeko n’amabwiriza agenga kurengera umwana no kurwanya imirimo ivunisha mu Rwanda. Umuhinzi Muto ni gahunda y’uburezi, si umurimo w’ubucuruzi.'
                : 'DreamDo works with children aged 6 and above. We maintain rigorous safeguarding compliance in full alignment with Rwanda’s child rights and labor frameworks. Little Farmer is an educational development pathway, not a commercial enterprise for youth.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((pr, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-black/5 shadow-2xs flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#143A22]/5 text-[#143A22] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={18} className="text-[#143A22]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#143A22] mb-1.5">{pr.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5D6B60] leading-relaxed">{pr.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
