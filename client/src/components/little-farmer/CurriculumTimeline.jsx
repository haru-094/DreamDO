import React, { useState } from 'react';
import { BookOpen, Droplets, Scissors, Banknote, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function CurriculumTimeline() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const [selectedWeek, setSelectedWeek] = useState(0);

  const weeks = [
    {
      weekNum: isRw ? 'ICYUMWERU 01' : 'WEEK 01',
      title: isRw ? 'Imyanda Ihinduka Umurima' : 'Waste Becomes a Farm',
      theme: isRw ? 'Guhanga Imyobo mu Bikoresho no Gutera' : 'Container Engineering & Sowing',
      icon: BookOpen,
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      imageAlt: isRw ? 'Ibikoresho byakoreshejwe, imifuka n’amacupa bihinduka imirima' : 'Recycled containers, sacks, and bottles turned into growing beds',
      uploadNote: isRw ? 'Ifoto: Gutoranya imyanda no kubaka ubusitani' : 'Photo: Sorting waste & assembling gardens',
      summary: isRw
        ? 'Abana batoranya imyanda yo mu rugo, baturaho imyobo yo kumeneka amazi, bakubaka ubusitani mu macupa, imifuka, n’indobo hamwe no guteranya Ubusitani bw’Umunara (Cone Garden).'
        : 'Children sort household waste, drill drainage holes, and construct bottle, sack, and bucket gardens alongside setting up the Cone Garden.',
      activities: isRw
        ? [
          'Guhindura imyanda umurima: gukora amacupa ya pulasitiki n’imifuka imyobo yo gutera ifite uburyo bwo kumeneka amazi',
          'Guteranya Ubusitani bw’Umunara: gushinga impapuro za HDPE ziramba mu mwanya muto utageze kuri 1m²',
          'Isomo ry’imiterere y’urubuto: gucagagura imbuto kugira ngo basobanukirwe umumaro w’amazi n’imikurire y’imizi',
          'Gushyiraho Intego y’Inzozi: guhitamo icyo buri mwana azazigamira akoresheje inyungu z’umusaruro',
        ]
        : [
          'Waste-to-Farm conversion: transforming plastic bottles and sacks into self-draining pots',
          'Cone Garden setup: assembling durable HDPE vertical sheets in a compact 1m² space',
          'Embryology lesson: dissecting seeds to understand water activation and root geotropism',
          'Setting the Dream Goal: deciding what each child will save for with their harvest profit',
        ],
      skills: isRw
        ? ['Gutunganya Imyanda', 'Ubumenyi bw’Ibanze bw’Ubutaka', 'Gushyiraho Intego']
        : ['Waste Recycling', 'Soil Science Basics', 'Goal Setting'],
    },
    {
      weekNum: isRw ? 'ICYUMWERU 02' : 'WEEK 02',
      title: isRw ? 'Gutegura Ubutaka no Gutera' : 'Building Soil & Planting',
      theme: isRw ? 'Ubumenyi bw’Ifumbire n’Ubujyakuzimu bw’Imbuto' : 'Compost Chemistry & Seed Depths',
      icon: Droplets,
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      imageAlt: isRw ? 'Abana bashyiraho ibyiciro by’ifumbire n’imbuto mu butaka' : 'Children layering compost and planting seeds in soil',
      uploadNote: isRw ? 'Ifoto: Gutunganya indobo y’ifumbire y’imborera' : 'Photo: Layering mini-compost bucket',
      summary: isRw
        ? 'Abanyeshuri bashyira ibishishwa by’ibiribwa n’ibyatsi mu ndobo z’ifumbire, bagatera imbuto zikura vuba nk’imboga za dodo (amaranth), salade, n’epinari.'
        : 'Learners layer organic food scraps into mini-compost buckets and plant fast-growing indigenous crops like dodo (amaranth), lettuce, and spinach.',
      activities: isRw
        ? [
          'Gukora indobo y’ifumbire y’imborera: kuringaniza imyanda y’icyatsi ifite azote n’ibyatsi byumye bifite karubone',
          'Gutera dodo, epinari, n’imifuka y’ibihumyo by’ibijumba ku bujyakuzimu buboneye',
          'Gahunda yo kuvomera buri munsi: kubara ingano ya ml z’amazi akenewe kuri buri gihingwa',
          'Ubufatanye bw’ingeri zinyuranye: abana bakuru (imyaka 10–14) bayobora abato (imyaka 6–9) mu kubungabunga imbuto',
        ]
        : [
          'Mini-compost bucket creation: balancing green nitrogen scraps with dry carbon matter',
          'Sowing dodo (amaranth), spinach, and oyster mushroom blocks at precise seed depths',
          'Daily watering schedules: calculating ml of water needed per plant to prevent evaporation',
          'Mixed-age mentoring: older children (10–14) guide younger partners (6–9) on gentle handling',
        ],
      skills: isRw
        ? ['Ubumenyi bw’Ifumbire', 'Guhuza Ibihingwa', 'Ubuyobozi bw’Urungano']
        : ['Composting Chemistry', 'Companion Planting', 'Peer Mentorship'],
    },
    {
      weekNum: isRw ? 'ICYUMWERU 03' : 'WEEK 03',
      title: isRw ? 'Kwitaho & Muganga w’Ibihingwa' : 'Smart Care & The Plant Doctor',
      theme: isRw ? 'Uburyo bwo Kuvomera buciriritse & Muganga w’Ibihingwa' : 'Low-Tech Irrigation & Plant Doctor',
      icon: Scissors,
      imageSrc: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
      imageAlt: isRw ? 'Abana basuzuma amababi y’ibihingwa n’uburyo bwo kuvomera buhonoka' : 'Young learners checking plant leaves and drip irrigation',
      uploadNote: isRw ? 'Ifoto: Igitabo cyo gusuzuma ubuzima bw’igihingwa' : 'Photo: Plant health diagnostic guide',
      summary: isRw
        ? 'Abana bubaka uburyo bwo gutonyanga amazi hifashishijwe amacupa n’insinga z’ipamba, bagakora imiti y’ifu y’itunguruurusenda, bakoresha igitabo cyo gusuzuma ibihingwa.'
        : 'Children build gravity drip irrigation, make organic garlic-chili sprays, and use a step-by-step diagnostic guide to keep plants healthy.',
      activities: isRw
        ? [
          'Kubaka uburyo bwo gutonyanga amazi hakoreshejwe amacupa yatoraguwe n’udutsinga tw’ipamba',
          'Muganga w’Ibihingwa: gusuzuma ibara ry’amababi, udukoko, n’ububobere bw’ubutaka',
          'Icyerekezo cy’Ubuzima bw’Ibihingwa: ifishi ifasha kubona ibibazo n’umuti wabyo',
          'Gucana no gutegura umuti w’umwimerere w’itunguru ry’umweru, neem, n’urusenda',
        ]
        : [
          'Building DIY drip irrigation using recycled bottles and cotton wicks',
          'The Plant Doctor: diagnosing leaf discoloration, pests, and moisture levels',
          'Plant Health Guide: visual decision flowchart to spot deficiencies and remedies',
          'Brewing natural garlic, neem, and chili organic pesticide spray',
        ],
      skills: isRw
        ? ['Gusuzuma Indwara z’Ibihingwa', 'Kuvomera mu Gutonyanga', 'Kwirinda Udukoko mu Kamere']
        : ['Plant Diagnostics', 'Drip Irrigation', 'Organic Pest Control'],
    },
    {
      weekNum: isRw ? 'ICYUMWERU 04' : 'WEEK 04',
      title: isRw ? 'Umunsi w’Isoko & Gusarura' : 'Market Day & Harvest',
      theme: isRw ? 'Ubucuruzi Bweruye & Banki ya DreamDo' : 'Live Commerce & DreamDo Bank',
      icon: Banknote,
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      imageAlt: isRw ? 'Abana bafite umusaruro n’amasanduku yo kuzigama ku isoko ry’ishuri' : 'Children with harvest produce and saving boxes at school market',
      uploadNote: isRw ? 'Ifoto: Umunsi w’Isoko & Isanduku yo Kuzigama' : 'Photo: Live Market Day & Saving Box',
      summary: isRw
        ? 'Iherezo ry’icyiciro. Abana basarura imboga nshya, bakabara ibyaguzwe n’ibiciro bikwiye, bagacuruza ku isoko ry’ikigo, bakabitsa inyungu zabo mu Isanduku ya DreamDo.'
        : 'The grand finale. Children harvest baby greens, calculate production costs and fair prices, run a live campus market stall, and deposit earnings.',
      activities: isRw
        ? [
          'Gusarura imboga za dodo n’ibihumyo by’ibijumba hubahirizwa isuku y’ibiribwa',
          'Gufungira mu bipfunyika byo gutahana (Adoption Kits) n’ifumbire y’imborera',
          'Kumurika ku Munsi w’Isoko: gusobanurira ababyeyi n’abashyitsi ibiciro no gucuruza',
          'Imihango yo kubitsa muri Banki ya DreamDo: kwandika amafaranga mu bitabo by’umutungo',
        ]
        : [
          'Harvesting baby dodo greens and oyster mushrooms with food safety hygiene',
          'Packaging with Adoption Kits (containers parents take home) and organic compost',
          'Market Day Pitch: presenting harvest journals, explaining pricing, and making transactions',
          'The DreamDo Bank deposit ceremony: recording savings in personal ledgers',
        ],
      skills: isRw
        ? ['Gucuruza no Kumvikana', 'Kubara Inyungu', 'Kwicungira Umutungo']
        : ['Sales & Negotiation', 'Profit Calculation', 'Financial Self-Reliance'],
    },
  ];

  const current = weeks[selectedWeek];
  const Icon = current.icon;

  return (
    <section id="curriculum" className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            {isRw ? 'INTEGANYANYIGISHO Y’IBYUMWERU 4' : 'THE 4-WEEK PROGRAM PLAYBOOK'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            {isRw
              ? 'Integanyanyigisho yagenewe ibikorwa bifatika n’umusaruro ufatika.'
              : 'Curriculum designed for real hands and real results.'}
          </h2>
          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            {isRw
              ? 'Itangwa mu byiciro 4 bya buri cyumweru (amasaha 3 kuri buri cyiciro) ku matsinda y’abana 10, biyobowe n’umufashamyigire wahuguwe ku bana b’imyaka 6–14.'
              : 'Delivered in 4 weekly sessions (3 hours per session) for cohorts of 10 children, led by a trained facilitator with age-differentiated tasks for ages 6–14.'}
          </p>
        </div>

        {/* Week Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {weeks.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWeek(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${selectedWeek === idx
                    ? 'bg-[#143A22] text-white border-[#143A22] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#143A22] border-black/5 hover:border-black/20'
                }`}
            >
                <span className={`text-[10px] font-mono font-bold tracking-widest block mb-1 ${selectedWeek === idx ? 'text-[#BAF035]' : 'text-[#E25822]'
                  }`}>
                  {w.weekNum}
                </span>
                <h3 className="text-sm font-bold truncate">
                  {w.title}
            </h3>
            </button>
          ))}
      </div>

                  {/* Active Week Detail Card */}
                  <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                      {/* Left Content */}
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#143A22] text-[#BAF035] flex items-center justify-center">
                            <Icon size={20} />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-[#E25822] tracking-wider uppercase block">
                              {current.weekNum} • {current.theme}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22] tracking-tight">
                              {current.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-[#556358] leading-relaxed mb-6">
                          {current.summary}
                        </p>

                        {/* Activities Checklist */}
                        <div className="mb-6">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#143A22] block mb-3 font-mono">
                            {isRw ? 'Ibikorwa By’Ibanze muri Iki Cyumweru:' : 'Key Hands-on Activities:'}
                          </span>
                          <ul className="space-y-2.5">
                            {current.activities.map((act, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#465349] leading-normal">
                                <span className="w-4 h-4 rounded-full bg-[#143A22]/10 text-[#143A22] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-mono">
                                  {i + 1}
                                </span>
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills Acquired Tags */}
                        <div className="pt-4 border-t border-black/5 flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-semibold text-[#6A786E] mr-1">
                            {isRw ? 'Ubumenyi Bwungutse:' : 'Core Competencies:'}
                          </span>
                          {current.skills.map((s, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-black/5 text-[#143A22]"
                            >
                              <Sparkles size={11} className="text-[#E25822]" />
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Photo */}
                      <div className="lg:col-span-5">
                        <ImagePlaceholder
                          src={current.imageSrc}
                          alt={current.imageAlt}
                          badge={`${current.weekNum} • ${current.theme}`}
                          caption={current.title}
                          aspectRatio="aspect-[4/3]"
                          uploadNote={current.uploadNote}
                          className="rounded-2xl"
                        />
                      </div>

                    </div>
                  </div>

              </div>
            </section>
            );
}
