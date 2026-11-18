import React from 'react';
import { 
  PlayCircle, 
  ExternalLink, 
  Calendar, 
  Award, 
  BookOpen, 
  Sparkles, 
  ArrowUpRight,
  Video,
  Users
} from 'lucide-react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { useLanguage } from '../context/LanguageContext';

export default function StoriesResourcesPage({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const youtubeVideos = [
    {
      title: isRw ? 'Guteranya Ubusitani bw’Umunara (Cone Garden) mu Bipangu' : 'Assembling the HDPE Vertical Cone Garden in Urban Compounds',
      duration: '8:45',
      tag: isRw ? 'Uburyo bwo Gutangira' : 'Setup Guide',
      desc: isRw 
        ? 'Amashusho afatika yereka abantu bakuru n’ababyeyi uburyo bwo gushinga ubusitani bw’umunara wa HDPE mu mwanya uri munsi ya metero kare 1.' 
        : 'Step-by-step practical video demonstration for adult and home growers on erecting and filling the Cone Garden in < 1m² space.',
      thumbnail: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      url: 'https://www.youtube.com/@dreamdoafrica',
    },
    {
      title: isRw ? 'Gukora Ifumbire y’Imborera mu Ndobo mu Rugo' : 'Layering Kitchen Scraps in Mini-Compost Buckets',
      duration: '6:12',
      tag: isRw ? 'Ubumenyi bw’Ubutaka' : 'Compost Biology',
      desc: isRw
        ? 'Uko uvanga imyanda y’ibiribwa y’icyatsi ifite azote n’ibyatsi byumye kugira ngo ubone ifumbire y’umwimerere idanuka.'
        : 'How to balance nitrogen green waste with dry carbon matter to produce odorless, high-nutrient organic compost for vertical gardens.',
      thumbnail: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      url: 'https://www.youtube.com/@dreamdoafrica',
    },
    {
      title: isRw ? 'Gukora Umuti w’Itunguru n’Urusenda wo Kurinda Ibihingwa' : 'Brewing Organic Garlic-Chili Pest Defense Spray',
      duration: '5:30',
      tag: isRw ? 'Muganga w’Ibihingwa' : 'Organic Health',
      desc: isRw
        ? 'Uburyo bwo gukora umuti w’umwimerere wica udukoko twangiza amababi ya dodo na epinari udakoresheje imiti y’uruganda.'
        : 'Safe, natural formulation to protect amaranth and tender greens from aphids and caterpillars without toxic synthetic chemicals.',
      thumbnail: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      url: 'https://www.youtube.com/@dreamdoafrica',
    },
  ];

  const studentStories = [
    {
      name: isRw ? 'Eric (Imyaka 13) — Umujyanama mu Buhinzi' : 'Eric (Age 13) — Junior Farm Mentor',
      project: isRw ? 'Gukuba Kabiri Umusaruro wa Dodo' : 'Amaranth Yield Multiplication',
      story: isRw
        ? 'Eric yayoboye itsinda rye mu gupima ubujyakuzimu bw’imbuto no gutunganya ifumbire y’imborera, basarura ibiro 14.5 bya dodo byafashije mu kwiga kubara inyungu.'
        : 'Eric mentored 5 younger peers in moisture tracking and compost testing, achieving a 14.5kg harvest that demonstrated value addition.',
      badge: isRw ? 'Umujyanama Mukuru' : 'Senior Farm Mentor',
    },
    {
      name: isRw ? 'Keza (Imyaka 9) — Umushakashatsi mu Kuzigama' : 'Keza (Age 9) — Goal Setter',
      project: isRw ? 'Guhaza Inzozi z’Amakaye y’Ishuri' : 'School Starter Kit Goal',
      story: isRw
        ? 'Keza yitondeye ubusitani bwe buri munsi, agurisha imboga mu buryo bw’imyigire, abona amafaranga yaguze amakaye n’isakoshi y’ishuri.'
        : 'Keza tracked daily water wicks and successfully funded her school notebook kit through educational passbook savings.',
      badge: isRw ? 'Umuhinzi Muto' : 'Junior Grower',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F5]">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'AMATEKA N’IMFASHANYIGISHO' : 'STORIES & GROWER RESOURCES'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <Video size={12} className="text-[#143A22]" />
              {isRw ? 'Urubuga rw’Amashusho rwa YouTube' : 'YouTube Learning Channel'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
            {isRw
              ? 'Amashusho y’ubuhinzi ku bakuru n’inkuru z’urubyiruko ruhanga udushya.'
              : 'Practical video guides for growers and stories from our youth changemakers.'}
          </h1>

          <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-6">
            {isRw
              ? 'Uru rubuga ruhuza ibice bibiri by’ingenzi: amashusho yigisha ababyeyi n’abantu bakuru uburyo bwo guhinga mu rugo binyuze kuri YouTube, n’amateka y’abana b’abahanga bato bazamuka nk’abahinzi b’ejo hazaza mu Rwanda.'
              : 'Our resource hub bridges two essential dimensions: practical, step-by-step gardening video guides for adult and household growers on YouTube, alongside real achievements from children reimagining food systems.'}
          </p>
        </div>
      </section>

      {/* 2. YouTube Video Guides Section (Adult / Home Grower Platform) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E25822] block mb-1">
              {isRw ? 'YAGENEYE ABANTU BAKURU N’ABAHINZI BO MU MIRYANGO' : 'PRACTICAL GUIDANCE FOR ADULTS & HOME GROWERS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#143A22] tracking-tight">
              {isRw ? 'Amashusho ya YouTube ya DreamDo' : 'Featured Video Tutorials on YouTube'}
            </h2>
          </div>

          <a
            href="https://www.youtube.com/@dreamdoafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <PlayCircle size={15} />
            <span>{isRw ? 'Fungura Urubuga rwa YouTube' : 'Open YouTube Channel'}</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {youtubeVideos.map((vid, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-[#143A22]/5">
                  <ImagePlaceholder
                    src={vid.thumbnail}
                    alt={vid.title}
                    aspectRatio="aspect-video"
                    badge={vid.tag}
                    isAuthentic={vid.isAuthentic}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#BAF035] text-[#143A22] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <PlayCircle size={24} />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-mono">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#143A22] mb-2 leading-snug group-hover:text-[#E25822] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#5D6B60] leading-relaxed">
                    {vid.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={vid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-[#143A22] bg-[#FAF8F5] hover:bg-[#143A22] hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{isRw ? 'Reba ku Rubuga rwa YouTube' : 'Watch on YouTube'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Children's Innovation & Impact Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xs">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E25822] block mb-1">
              {isRw ? 'INKURU Z’ABAHANGA BATO' : 'NEXT-GENERATION VOICES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#143A22] tracking-tight">
              {isRw ? 'Abana Bahindura Amateka y’Ubuhinzi' : 'Children Transforming How Farming is Perceived'}
            </h2>
            <p className="text-sm text-[#556358] mt-2">
              {isRw
                ? 'Iyo abana bahawe umwanya wo gukora ubushakashatsi, ubuhinzi buva mu kuba umurimo w’imbaraga gusa bukabamo siyanse n’ubucuruzi buhanitse.'
                : 'When children are given agency to experiment, agriculture transforms from perceived traditional manual work into an exciting field of scientific and entrepreneurial innovation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentStories.map((story, sIdx) => (
              <div key={sIdx} className="p-6 rounded-2xl bg-[#FAF8F5] border border-black/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#E25822] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-black/5">
                      {story.badge}
                    </span>
                    <Sparkles size={14} className="text-[#143A22]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#143A22] mb-1">{story.name}</h3>
                  <div className="text-xs font-semibold text-[#143A22]/80 mb-3">{story.project}</div>
                  <p className="text-xs sm:text-sm text-[#5D6B60] leading-relaxed mb-4">
                    {story.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#143A22] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            {isRw ? 'Wifuza kuzana ubu bumenyi mu kigo cyawe cyangwa mu rugo?' : 'Bring these practical resources to your school or home.'}
          </h3>
          <p className="text-sm text-white/80 max-w-lg mx-auto mb-6">
            {isRw
              ? 'Twandikire kugira ngo tuganire ku busitani bw’umunara, ingemwe, n’amahugurwa mu Rwanda hose.'
              : 'Speak with our agronomy and educational team to order growing hardware, seedlings, or schedule school workshops.'}
          </p>
          <button
            onClick={() => onOpenPartnerModal && onOpenPartnerModal({ type: 'community', message: 'Inquiry from Stories & Resources page.' })}
            className="px-8 py-3.5 rounded-full text-xs font-bold text-[#143A22] bg-[#BAF035] hover:bg-[#aee628] active:scale-98 transition-all cursor-pointer shadow-sm"
          >
            {isRw ? 'Tuvugishe ubu' : 'Get in Touch With Us'}
          </button>
        </div>
      </section>

    </div>
  );
}
