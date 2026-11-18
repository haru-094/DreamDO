import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Layers, 
  Sprout, 
  HelpCircle, 
  BookOpen, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Clock,
  MapPin,
  ExternalLink
} from 'lucide-react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsServicesPage({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const [activeTab, setActiveTab] = useState('all'); // 'all', 'cone', 'seedlings', 'advisory', 'playbook'

  const handleOrder = (productTitle, defaultMsg) => {
    if (onOpenPartnerModal) {
      onOpenPartnerModal({
        type: 'product',
        message: defaultMsg || (isRw ? `Ndashaka gutumiza: ${productTitle}` : `Inquiry for ordering: ${productTitle}`),
      });
    }
  };

  const catalogItems = [
    {
      id: 'cone-garden',
      category: 'cone',
      title: isRw ? 'Ubusitani bw’Umunara (Cone Garden)' : 'Vertical Cone Garden System',
      tag: isRw ? 'UBURYO BWO GUHINGA' : 'VERTICAL GROWING HARDWARE',
      price: '40,000 RWF',
      unit: isRw ? 'kuri buri munara' : 'per cone unit',
      summary: isRw
        ? 'Ubusitani buhagaritse bukozwe mu mpapuro zikomeye za HDPE zizewe kuramba kugeza ku myaka 20. Bwubakiwe kweza imboga z’intungamubiri ahantu hato cyane (< 1m²).'
        : 'Engineered from heavy-duty food-grade HDPE sheets. Designed to maximize crop yield in less than 1 square meter footprint, with an operational lifespan of up to 20 years.',
      specs: isRw
        ? [
            'Uburambe bw’imyaka 20 buhangana n’izuba n’imvura',
            'Bufata ingemwe 50+ icyarimwe mu mwanya muto (< 1m²)',
            'Gukoresha amazi make hakoreshejwe uburyo bwo gutonyanga',
            'Bworoshye guteranya mu ngo, ku mabaraza, no mu bigo by’amashuri',
          ]
        : [
            '20-year durable HDPE food-grade construction',
            'Holds 50+ seedlings simultaneously in < 1m² footprint',
            'Water-saving gravity drip core prevents evaporation',
            'Easy installation for compounds, balconies, and schools',
          ],
      imageSrc: '/images/school-cone-garden.jpg',
      badge: isRw ? 'Umunara wa HDPE Uramba' : '20-Year Durable HDPE',
      isAuthentic: true,
      popular: true,
    },
    {
      id: 'seedlings',
      category: 'seedlings',
      title: isRw ? 'Ingemwe zo Gutera & Kuzitubura' : 'High-Yield Seedlings & Multiplication',
      tag: isRw ? 'INGEMWE N’IMBUTO' : 'CERTIFIED PLANTING MATERIAL',
      price: '5,000 – 15,000 RWF',
      unit: isRw ? 'ku mupaki / itsinda' : 'per nursery tray / bundle',
      summary: isRw
        ? 'Ingemwe z’imboga z’intungamubiri zikura vuba zimenyereye ikirere cy’u Rwanda: dodo, epinari, salade, imboga z’amababi, hamwe n’imifuka y’ibihumyo by’ibijumba.'
        : 'Hardened, nursery-grown indigenous and climate-resilient seedlings ready for transplantation: amaranth (dodo), spinach, crisp lettuce, kale, and oyster mushroom blocks.',
      specs: isRw
        ? [
            'Imbuto gakondo z’intungamubiri zikura mu minsi 10–28',
            'Ingemwe zikomye zitangira gukura ako kanya ziteye',
            'Amahugurwa ku gukora no gutubura imbuto ubwawe mu rugo',
            'Uburyo bw’ifumbire y’umwimerere ifasha ingemwe gukura',
          ]
        : [
            'Fast harvest turnaround (10 to 28 days to first yield)',
            'Hardened nursery roots for 95%+ survival rate',
            'Seed multiplication guidance to keep growing sustainably',
            'Optional inoculated organic mushroom substrate blocks',
          ],
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Ingemwe Nziza' : 'Nursery Seedlings',
      isAuthentic: false,
    },
    {
      id: 'advisory',
      category: 'advisory',
      title: isRw ? 'Ubujyanama bwo Gutangiza Ubusitani' : 'Turnkey Garden Setup Advisory',
      tag: isRw ? 'UBUFASHA BW’ABAHANGA' : 'ON-SITE & REMOTE CONSULTING',
      price: '50,000 – 100,000 RWF',
      unit: isRw ? 'kuri gahunda yose' : 'per site consultation & setup',
      summary: isRw
        ? 'Ubufasha n’inama zifatika ku bantu ku giti cyabo, ingo, amashuri, n’ibigo byifuza gushinga ubusitani butanga umusaruro mwinshi bucungwa mu buryo bworoshye.'
        : 'Professional on-site assessment, sunlight/water mapping, compost creation, low-tech drip irrigation setup, and seasonal crop calendar design for home or campus growers.',
      specs: isRw
        ? [
            'Gusura aho ubusitani buzagera no gupima ubutaka n’amazi',
            'Gutegura uburyo bwo kuhira amazi buzigama',
            'Guhugura abaza kwita ku busitani mu rugo cyangwa ku ishuri',
            'Gukurikirana umusaruro buri kwezi no gukemura ibibazo',
          ]
        : [
            'Spatial suitability & micro-climate sunlight audit',
            'Soil balancing, compost layering, and drainage setup',
            'Hands-on staff or family maintenance coaching',
            'Seasonal planting schedule tailored to Rwandan rain cycles',
          ],
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Ubujyanama bw’Umwuga' : 'Expert Consultation',
      isAuthentic: false,
    },
    {
      id: 'playbook',
      category: 'playbook',
      title: isRw ? 'Igitabo cy’Umuhinzi Muto (Playbook)' : 'DreamDo Little Farmer Playbook',
      tag: isRw ? 'IMFASHANYIGISHO' : 'HANDS-ON LEARNING BOOK',
      price: '12,000 RWF',
      unit: isRw ? 'ku gitabo cyacapwe' : 'per printed volume + digital',
      summary: isRw
        ? 'Igitabo cy’ibikorwa 28 gifite amashusho kiyobora abana mu bushakashatsi bw’ubuhinzi, siyanse y’ibiribwa, uburyo bwo gusuzuma indwara z’ibihingwa, n’ubwizigame.'
        : 'A screen-free, 28-mission activity book for children aged 6–14. Includes the visual Plant Doctor diagnostic guides, moisture tracking sheets, and family weekend challenges.',
      specs: isRw
        ? [
            'Imirimo 28 ifite amashusho n’amabwiriza asobanutse',
            'Ifishi yo gusuzuma ubuzima bw’ibihingwa na Muganga w’Ibihingwa',
            'Igitabo cy’ibaruramari n’inzozi z’ubwizigame',
            'Kigenewe gukoreshwa mu rugo, mu biruhuko, no mu mashuri',
          ]
        : [
            '28 structured hands-on missions connecting STEM to soil',
            'Illustrated Plant Doctor flowchart for organic remedies',
            'Built-in savings goal passbook & ledger templates',
            'Suitable for both home weekend learning and school clubs',
          ],
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Igitabo cy’Abana' : 'Curriculum Playbook',
      isAuthentic: false,
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? catalogItems 
    : catalogItems.filter(item => item.category === activeTab);

  const packages = [
    {
      name: isRw ? 'Urugo Rwiteguye (Household Starter)' : 'Household Grower Starter',
      target: isRw ? 'Ingo, amabaraza n’ibipangu' : 'Urban compounds & balconies',
      includes: isRw
        ? ['Umunara 1 wa HDPE Cone Garden (imyaka 20)', 'Ingemwe 50 zo gutera (dodo, epinari, salade)', 'Uburyo bwo gutonyanga amazi n’ifumbire', 'Igitabo cy’Umuhinzi Muto (Playbook)']
        : ['1 × 20-Year Durable HDPE Cone Garden', '50 × Ready Nursery Seedlings', 'Gravity Drip Irrigation Kit + Compost Starter', '1 × DreamDo Little Farmer Playbook'],
      total: '55,000 RWF',
      ctaText: isRw ? 'Tumiza Iki Cyiciro cy’Urugo' : 'Order Household Package',
    },
    {
      name: isRw ? 'Ikigo cy’Ishuri (School Campus Cohort)' : 'School Campus Food Lab',
      target: isRw ? 'Amashuri n’ibigo by’uburezi' : 'Schools & educational centers',
      includes: isRw
        ? ['Iminara 3 ya Cone Gardens (ibihingwa 150+)', 'Ingemwe 150 n’imifuka y’ibihumyo', 'Amahugurwa y’abarimu 2 n’umufashamyigire', 'Ibitabo 10 by’abanyeshuri n’Isanduku yo Kuzigama']
        : ['3 × HDPE Cone Gardens (150+ crops)', '150 × Seedlings + Oyster Mushroom Blocks', 'Teacher & Facilitator Playbook Mentorship', '10 × Student Playbooks + DreamDo Saving Box'],
      total: '245,000 RWF',
      ctaText: isRw ? 'Tumiza Gahunda y’Ishuri' : 'Order School Campus Package',
      featured: true,
    },
    {
      name: isRw ? 'Umushinga w’Abaturage (Community Hub)' : 'Community Resilience Hub',
      target: isRw ? 'Imiryango, inkambi z’impunzi n’amakoperative' : 'Community hubs & corporate CSR',
      includes: isRw
        ? ['Iminara 6 ya Cone Gardens (ibihingwa 300+)', 'Ingemwe 300 n’uburyo bwo kuzitubura', 'Ubujyanama bwuzuye no gukurikirana amezi 3', 'Gutegura umunsi w’isoko ry’abaturage']
        : ['6 × HDPE Cone Gardens (300+ crops)', '300 × Seedlings + Nursery Multiplication Kit', 'Full On-Site Advisory & 3-Month Follow-Up', 'Community Harvest & Nutrition Showcase'],
      total: '490,000 RWF',
      ctaText: isRw ? 'Saba Gahunda y’Abaturage' : 'Request Community Package',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F5]">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              {isRw ? 'IBICURUZWA N’UBUFASHA NYABWO' : 'COMMERCIAL PRODUCTS & ADVISORY'}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <ShoppingBag size={11} />
              {isRw ? 'Guhita Bitumizwa mu Rwanda' : 'Available for Order in Rwanda'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
            {isRw
              ? 'Ibisubizo bifatika byo guhinga mu ngo, ku mashuri, no mu miryango.'
              : 'Practical growing solutions for households, schools, and communities.'}
          </h1>

          <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-8">
            {isRw
              ? 'DreamDo itanga ubusitani buhagaritse bwa HDPE buramba imyaka 20, ingemwe z’intungamubiri, ubujyanama bwo gushinga ubusitani, n’ibitabo by’imyigire. Ibi bicuruzwa bishobora kugurwa ako kanya no gukoreshwa n’abantu bakuru, imiryango, n’ibigo byifuza kweza ibiribwa by’umwimerere.'
              : 'DreamDo makes productive, space-saving agriculture accessible to everyone. Browse our commercial vertical growing hardware, climate-resilient seedlings, setup advisory, and learning resources designed for immediate deployment.'}
          </p>

          {/* Quick Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-black/5 text-xs text-[#556358] font-medium font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#143A22]" />
              <span>{isRw ? 'HDPE iramba imyaka 20' : '20-year engineered HDPE'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sprout size={16} className="text-[#143A22]" />
              <span>{isRw ? 'Umwanya muto (< 1m²)' : 'Zero arable land needed (< 1m²)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#143A22]" />
              <span>{isRw ? 'I Kigali no mu Turere twose' : 'Kigali delivery & national dispatch'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-black/5">
          <span className="text-xs font-mono font-bold text-[#143A22] mr-2">
            {isRw ? 'Ibyiciro:' : 'Filter Catalog:'}
          </span>
          {[
            { id: 'all', label: isRw ? 'Byose' : 'All Products & Services' },
            { id: 'cone', label: isRw ? 'Cone Gardens (Ubusitani)' : 'Cone Gardens' },
            { id: 'seedlings', label: isRw ? 'Ingemwe zo Gutera' : 'Seedlings & Multiplication' },
            { id: 'advisory', label: isRw ? 'Ubujyanama' : 'Setup Advisory' },
            { id: 'playbook', label: isRw ? 'Igitabo cy’Imyigire' : 'Playbook' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#143A22] text-white shadow-xs'
                  : 'bg-white text-[#556358] border border-black/5 hover:bg-black/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Image Placeholder */}
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <ImagePlaceholder
                    src={item.imageSrc}
                    alt={item.title}
                    aspectRatio="aspect-[16/10]"
                    badge={item.badge}
                    isAuthentic={item.isAuthentic}
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#E25822] uppercase">
                    {item.tag}
                  </span>
                  <div className="text-right">
                    <span className="text-lg sm:text-xl font-black text-[#143A22] font-mono">
                      {item.price}
                    </span>
                    <span className="block text-[10px] text-[#6A786E] font-mono">
                      {item.unit}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#143A22] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#556358] leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-black/5">
                  <span className="text-xs font-mono font-bold text-[#143A22] block mb-2">
                    {isRw ? 'Iby’Ingenzi kuri iki Gicuruzwa:' : 'Key Product Specifications:'}
                  </span>
                  {item.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#465349]">
                      <CheckCircle2 size={14} className="text-[#143A22] shrink-0 mt-0.5" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={() => handleOrder(item.title)}
                className="w-full py-4 px-6 rounded-full text-xs sm:text-sm font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <ShoppingBag size={16} />
                <span>{isRw ? `Saba / Tumiza: ${item.title}` : `Order / Inquire: ${item.title}`}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dedicated YouTube Channel Platform (Adult & Grower Resource) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="bg-[#143A22] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BAF035]/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#BAF035] text-xs font-mono font-bold mb-4">
                <PlayCircle size={14} />
                {isRw ? 'IMFASHANYIGISHO Z’AMASHUSHO Y’ABAHINZI' : 'COMMUNITY VIDEO LEARNING PLATFORM'}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {isRw 
                  ? 'Urubuga rwa YouTube rwa DreamDo: Amashusho yigisha guhinga ku bakuru n’ababyeyi.' 
                  : 'The DreamDo YouTube Channel: Practical video guides for adult growers and households.'}
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                {isRw
                  ? 'Urubuga rwacu rwa YouTube rwagenewe by’umwihariko ababyeyi, ingo, n’abahinzi bo mu miryango. Rwerekana amashusho afatika y’uburyo bwo guteranya ubusitani bw’umunara, gukora ifumbire y’imborera, kurinda ibihingwa udukoko mu buryo bw’umwimerere, no gutubura ingemwe.'
                  : 'Our existing YouTube channel is specifically designed as a practical learning resource for adults, parents, community members, and urban growers. Watch step-by-step demonstrations on vertical setup, organic pest prevention, compost biology, and maximizing yield.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.youtube.com/@dreamdoafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full text-xs font-bold text-[#143A22] bg-[#BAF035] hover:bg-[#aee628] active:scale-98 transition-all flex items-center gap-2 shadow-sm"
                >
                  <PlayCircle size={16} />
                  <span>{isRw ? 'Fungura Urubuga rwa YouTube' : 'Visit DreamDo YouTube Channel'}</span>
                  <ExternalLink size={14} />
                </a>

                <button
                  onClick={() => handleOrder('Advisory Video Session', 'Inquiry for private grower video advisory session.')}
                  className="px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
                >
                  {isRw ? 'Saba Inama z’Umwihariko' : 'Request 1-on-1 Video Advisory'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#BAF035] uppercase tracking-wider block">
                {isRw ? 'Ibyo Uzasanga ku Rubuga:' : 'Popular Video Topics for Growers:'}
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#BAF035]/20 text-[#BAF035] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>{isRw ? 'Guteranya Ubusitani bw’Umunara wa HDPE mu mwanya muto' : 'Assembling and anchoring the HDPE Cone Garden in < 1m² space'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#BAF035]/20 text-[#BAF035] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>{isRw ? 'Gukora umuti w’itunguru ry’umweru n’urusenda wo kwica udukoko' : 'Brewing organic garlic-chili pesticide sprays for leafy greens'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#BAF035]/20 text-[#BAF035] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>{isRw ? 'Gutunganya ifumbire y’imborera mu ndobo mu rugo' : 'Layering high-nitrogen kitchen waste in mini-compost buckets'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#BAF035]/20 text-[#BAF035] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <span>{isRw ? 'Gutubura imbuto za dodo na epinari nta bundi bushobozi' : 'Multiplying heirloom amaranth & spinach seeds for continuous harvest'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Complete Turnkey Bundles / Package Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono mb-2 block">
            {isRw ? 'AMAHITAMO Y’AMAPAKI YUZUYE' : 'COMPLETE TURNKEY PACKAGES'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight">
            {isRw ? 'Hitamo ipaki ihuye n’aho ushaka guhinga.' : 'Choose the setup package tailored to your space.'}
          </h2>
          <p className="text-sm sm:text-base text-[#556358] mt-2">
            {isRw
              ? 'Ibicuruzwa n’amahugurwa byateguwe kugira ngo utangire guhinga nta zindi mbaraga bisabye.'
              : 'Bundled hardware, seedlings, soil inputs, and support ready for immediate deployment.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.featured
                  ? 'bg-[#143A22] text-white shadow-xl lg:scale-105 border-2 border-[#BAF035]'
                  : 'bg-white text-[#143A22] border border-black/5 shadow-2xs hover:shadow-md'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#BAF035] text-[#143A22] mb-4">
                    {isRw ? 'IRAKUNZWE CYANE' : 'MOST POPULAR'}
                  </span>
                )}

                <h3 className={`text-2xl font-extrabold mb-1 ${pkg.featured ? 'text-white' : 'text-[#143A22]'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs font-mono mb-4 ${pkg.featured ? 'text-white/70' : 'text-[#6A786E]'}`}>
                  {pkg.target}
                </p>

                <div className="mb-6 pb-6 border-b border-black/5 border-white/10">
                  <span className={`text-3xl sm:text-4xl font-black font-mono ${pkg.featured ? 'text-[#BAF035]' : 'text-[#143A22]'}`}>
                    {pkg.total}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                    pkg.featured ? 'text-white/80' : 'text-[#143A22]'
                  }`}>
                    {isRw ? 'Ibikubiyemo:' : 'Package Inclusions:'}
                  </span>
                  {pkg.includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 size={14} className={pkg.featured ? 'text-[#BAF035]' : 'text-[#143A22]'} />
                      <span className={pkg.featured ? 'text-white/90' : 'text-[#556358]'}>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleOrder(pkg.name, `Order request for package: ${pkg.name} (${pkg.total})`)}
                className={`w-full py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  pkg.featured
                    ? 'bg-[#BAF035] text-[#143A22] hover:bg-[#aee628]'
                    : 'bg-[#143A22] text-white hover:bg-[#1a4a2c]'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Direct Enquiry Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#E25822] uppercase tracking-wider block mb-1">
              {isRw ? 'KENEYE IBISOBANURO BYISUMBUYEHO?' : 'NEED CUSTOM SIZING OR BULK DISPATCH?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#143A22]">
              {isRw ? 'Tuvugishe kuri telefone cyangwa utwandikire.' : 'Speak directly with our agronomy & sales team.'}
            </h3>
            <p className="text-sm text-[#556358] mt-1 max-w-xl">
              {isRw
                ? 'Dukora ku bicuruzwa byihariye by’amashuri, ingo nini, n’imiryango itegamiye kuri Leta mu Rwanda hose.'
                : 'We prepare custom quantity dispatches, technical site assessments, and community garden packages across Rwanda.'}
            </p>
          </div>

          <button
            onClick={() => handleOrder('Custom Inquiries', 'General inquiry for bulk product or advisory.')}
            className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2"
          >
            <PhoneCall size={16} />
            <span>{isRw ? 'Tuvugane Ako Kanya' : 'Contact Sales Team'}</span>
          </button>
        </div>
      </section>

    </div>
  );
}
