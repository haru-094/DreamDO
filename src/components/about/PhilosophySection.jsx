import React from 'react';
import { Compass, FlaskConical, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function PhilosophySection() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const stages = [
    {
      num: '01',
      title: isRw ? 'Vumbura (Discover)' : 'Discover',
      tag: isRw ? 'AMATSIKO N’URUHEREREKANE' : 'CURIOSITY & FOOD SYSTEMS',
      desc: isRw
        ? 'Abana bavumbura uburyo uruhererekane rw’ibiribwa rukora, imikurire y’ibihingwa, umumaro w’ubutaka buzima, n’amahirwe menshi aboneka mu buhinzi bugezweho.'
        : 'Explore agriculture, food systems, nature, and the vast economic opportunities across the farming value chain beyond simple subsistence.',
      icon: Compass,
    },
    {
      num: '02',
      title: isRw ? 'Gerageza (Experiment)' : 'Experiment',
      tag: isRw ? 'SIYANSE & IKORANABUHANGA' : 'SCIENCE & HANDS-ON INQUIRY',
      desc: isRw
        ? 'Tera, kurikirana umunsi ku wundi, gerageza ubujyakuzimu bw’imbuto, gukora ifumbire y’imborera, no kubaka uburyo bworoshye bwo gutonyanga amazi.'
        : 'Plant, observe, test growing methods, and discover how scientific inquiry and low-tech irrigation innovation optimize crop yield.',
      icon: FlaskConical,
    },
    {
      num: '03',
      title: isRw ? 'Hanga (Create)' : 'Create',
      tag: isRw ? 'GUKEMURA IBIBAZO' : 'CREATIVE PROBLEM SOLVING',
      desc: isRw
        ? 'Guhanga ubusitani mu bikoresho byakoreshejwe (waste-to-farm), gukora imiti y’umwimerere yo kurinda ibihingwa, no gutegura uburyo bwo kongera agaciro ku musaruro.'
        : 'Design solutions, upcycle waste into growing beds, formulate organic bio-pesticides, and develop creative agricultural ideas.',
      icon: Lightbulb,
    },
    {
      num: '04',
      title: isRw ? 'Kura & Uhange Udushya' : 'Grow & Innovate',
      tag: isRw ? 'UBWIZIGAME N’INSHINGANO' : 'CONFIDENCE & STEWARDSHIP',
      desc: isRw
        ? 'Kwigira ku masomo y’ubucuruzi n’ingengo y’imari, gucunga Isanduku yo Kuzigama ya DreamDo, no gukura ufite umwete wo guhindura ejo hazaza.'
        : 'Develop practical skills, personal responsibility, value-chain understanding, and an entrepreneurial mindset rooted in sustainable stewardship.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="pedagogy-model" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guiding Belief Quote */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/5 mb-20 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C0F038]/20 blur-2xl" />
          <div className="max-w-3xl relative z-10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-3 block">
              {isRw ? 'UKWEMERA KWACU SHINGIRO' : 'OUR GUIDING BELIEF'}
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#143A22] leading-snug tracking-tight mb-4">
              {isRw
                ? '“Ntidukuza ubusitani gusa. Turera icyiciro kizaza cy’abahinzi n’abashoramari.”'
                : '“We are growing more than gardens. We are growing the next generation of farmers.”'}
            </blockquote>
            <p className="text-sm sm:text-base text-[#5D6B60] leading-relaxed">
              {isRw
                ? 'Duhindura imyumvire y’uko ubuhinzi ari umurimo w’ingufu gusa. Iyo abana biboneye isano iri hagati y’umwete, siyanse, n’uburyo bwo gukemura ibibazo, icyizere cyabo kiyongera ubuziraherezo.'
                : 'We believe children and young people should not simply inherit agriculture as it exists today. They should have opportunities to discover, question, experiment, and reimagine what agriculture can become.'}
            </p>
          </div>
        </div>

        {/* The 4-Stage Learning Journey */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#143A22]/70 uppercase font-mono block mb-2">
              {isRw ? 'INZIRA Y’IMYIGIRE Y’UMUHINZI MUTO' : 'THE 4-STAGE LEARNING JOURNEY'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
              {isRw ? 'Kuva ku matsiko kugera ku guhanga udushya.' : 'From curiosity to innovation.'}
            </h2>
            <p className="text-base text-[#556358] mt-2">
              {isRw
                ? 'Uburyo bunoze bufasha abana gusobanukirwa ubuhinzi bugezweho n’imari mu buryo bw’uburezi bufatika:'
                : 'A structured experiential pathway connecting natural sciences, experimentation, and entrepreneurial problem-solving:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-black/5 flex flex-col justify-between group hover:border-[#143A22]/20 hover:shadow-xs transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#143A22] text-[#C0F038] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#E25822] tracking-widest uppercase block mb-1">
                      {st.num} • {st.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#143A22] mb-3">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D6B60] leading-relaxed mb-6">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 text-[11px] font-mono text-[#829286] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BAF035]" />
                    <span>Experiential Stage</span>
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
