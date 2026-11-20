import React from 'react';
import { Sparkles, MapPin, Compass, ArrowDown } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutHero({ onOpenPartnerModal }) {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const scrollToFramework = () => {
    const el = document.getElementById('pedagogy-model');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
                {isRw ? 'UBURYO BWACU N’INTEGO' : 'OUR APPROACH & PHILOSOPHY'}
              </span>
              <span className="text-black/20">•</span>
              <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/50 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
                <Sparkles size={11} />
                {isRw ? 'Birote. Bikure. Hindura ejo hazaza.' : 'Dream it. Grow it. Transform the future.'}
              </span>
            </div>

            {/* Headline (Owner feedback: "Empowering the next generation of farmers") */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143A22] leading-[1.08] mb-6">
              {isRw
                ? 'Gushoboza icyiciro gishya cy’abahinzi b’ejo hazaza.'
                : 'Empowering the next generation of farmers.'}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#465349] leading-relaxed mb-6">
              {isRw
                ? 'DreamDo Little Farmer ifasha abana, urubyiruko n’abaturage kuvumbura amahirwe menshi ari mu buhinzi binyuze mu myigire ngiro, guhanga udushya, n’ubumenyi bufatika — bityo bagatanga umusanzu mu kubaka ejo hazaza h’ibiribwa.'
                : 'DreamDo Little Farmer empowers children, youth and communities to discover the possibilities of agriculture through practical learning, creativity and innovation, inspiring a new generation to shape the future of farming.'}
            </p>

            <div className="p-5 rounded-2xl bg-white border border-black/5 mb-8 text-xs sm:text-sm text-[#5D6B60] leading-relaxed">
              <strong className="text-[#143A22] font-semibold block mb-1">
                {isRw ? 'Icyerekezo Cyacu ku Buhinzi Bushya:' : 'Reimagining Agriculture for the Next Generation:'}
              </strong>
              {isRw
                ? 'Ubuhinzi si umurimo w’imbaraga gakondo gusa. Ni uruganda rw’amahirwe ruhuza siyanse y’ubutaka, ikoranabuhanga ryo kuzigama amazi, guhanga udushya, kwihangira imirimo, n’uruhererekane rw’ibiribwa birambye.'
                : 'Agriculture is far more than traditional subsistence farming. It is a modern frontier of science, technology, creativity, innovation, entrepreneurship, and sustainable food systems. We believe the next generation should not just inherit agriculture—they must have the opportunity to reimagine it.'}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                {isRw ? 'Fatanya na DreamDo' : 'Partner With DreamDo'}
              </button>
              <button
                onClick={scrollToFramework}
                className="px-5 py-3.5 rounded-full text-xs font-semibold text-[#143A22] bg-white border border-black/10 hover:bg-black/5 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{isRw ? 'Reba Inzira y’Imyigire' : 'Explore Learning Framework'}</span>
                <ArrowDown size={14} />
              </button>
            </div>
          </div>

          {/* Right Visual Photo Card */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              src="/images/school-cone-garden.jpg"
              alt={isRw ? 'Abanyeshuri ku busitani bw’umunara wa HDPE mu Rwanda' : 'School children at an HDPE vertical cone garden in Rwanda'}
              caption={isRw ? 'Umuhinzi Muto wa DreamDo mu bikorwa: Abana bita ku busitani bw’ikigo mu Rwanda.' : 'DreamDo Little Farmer in action: Children managing their school vertical garden in Rwanda.'}
              badge={isRw ? 'Ifoto Nyakuri ya Gahunda' : 'Real School Cohort'}
              isAuthentic={true}
              aspectRatio="aspect-[4/3]"
              uploadNote={isRw ? 'Ifoto: Itsinda ry’Abanyeshuri ku Ishuri' : 'Photo: Little Farmer School Cohort'}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
