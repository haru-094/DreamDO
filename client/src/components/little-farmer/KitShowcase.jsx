import React from 'react';
import { Check } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export default function KitShowcase() {
  const { language } = useLanguage();
  const isRw = language === 'rw';

  const tools = [
    {
      name: isRw ? 'Ubusitani bw’Umunara (Cone Garden)' : 'Vertical Cone Garden',
      tag: isRw ? 'IBIKORESHO BYO GUHINGA' : 'GROWTH HARDWARE',
      desc: isRw
        ? 'Ubusitani buhagaritse bukozwe mu mpapuro za HDPE zikomeye zizewe kuramba kugeza ku myaka 20. Bwihanganira izuba n’imvura, bukora ahantu hato hatageze kuri 1m².'
        : 'Space-saving vertical garden made from durable HDPE sheets. Strong and weather-resistant with a lifespan of up to 20 years with proper care. Occupies < 1m² footprint.',
      features: isRw
        ? ['Ikozwe muri HDPE iramba imyaka 20', 'Ifata ibihingwa 50+ mu mwanya < 1m²', 'Ikoresha amazi n’ubutaka bike']
        : ['20-year durable HDPE construction', 'Holds 50+ seedlings in < 1m²', 'Water & soil efficient'],
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      badge: isRw ? 'Umunara wa HDPE Uramba' : 'Durable HDPE Cone',
      uploadNote: isRw ? 'Ifoto: Ubusitani bw’Umunara ku Ishuri' : 'Photo: School Cone Garden',
    },
    {
      name: isRw ? 'Amakarita y’Imirimo n’Igitabo cy’Umutungo' : 'Mission Cards & Logbook',
      tag: isRw ? 'IGITABO CY’IMYIGIRE' : 'SCREEN-FREE PLAYBOOK',
      desc: isRw
        ? 'Imirimo 28 ya buri munsi ifite amashusho ihuza ubumenyi bw’ubutaka, imibare, no gukoresha amazi neza. Harimo igitabo cyo gusuzuma ibihingwa n’imiti y’umwimerere.'
        : '28 illustrated daily missions connecting biology, math, and water metrics. Includes the Plant Doctor diagnostic guide for organic remedies.',
      features: isRw
        ? ['Igitabo cya Muganga w’Ibihingwa', 'Gahunda yateguriwe imyaka inyuranye', 'Gukurikirana imikurire n’amazi']
        : ['Plant Doctor diagnostic guide', 'Age-differentiated checklists', 'Growth & moisture tracking'],
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Igitabo cy’Imirimo' : 'Mission Playbook',
      uploadNote: isRw ? 'Ifoto: Amakarita y’imirimo mu ishuri' : 'Photo: Mission cards in class',
    },
    {
      name: isRw ? 'Isanduku yo Kuzigama ya DreamDo' : 'The DreamDo Saving Box',
      tag: isRw ? 'UBWIZIGAME NYABWO' : 'FINANCIAL VAULT',
      desc: isRw
        ? 'Isanduku y’igiti ifite urufunguzo ihuza umusaruro no kuzigama. Izana n’igitabo cy’ibaruramari aho buri kofi n’igiceri cyinjiye byandikwa.'
        : 'A physical wooden savings box that connects crop sales directly to saving. Comes with a double-entry ledger sheet where every harvest deposit is recorded.',
      features: isRw
        ? ['Ifungishwa urufunguzo rw’igiti', 'Igitabo cy’umutungo gisinywaho n’umwalimu', 'Ihuza ry’umusaruro n’inzozi z’umwana']
        : ['Dual-key physical locking', 'Countersigned savings ledger', 'Direct link from harvest to dreams'],
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Isanduku yo Kuzigama' : 'Physical Saving Box',
      uploadNote: isRw ? 'Ifoto: Umwana azigama ibiceri' : 'Photo: Child saving coins',
    },
    {
      name: isRw ? 'Imbuto z’Ibanze n’Ifumbire y’Imborera' : 'Starter Seeds & Compost Pack',
      tag: isRw ? 'IMBUTO N’UBUTAKA' : 'BIOLOGICAL INPUTS',
      desc: isRw
        ? 'Imbuto zikura vuba zimenyereye ikirere cy’u Rwanda zirimo dodo, epinari, salade, n’imifuka y’ibihumyo by’ibijumba bitanga umusaruro mu minsi mike.'
        : 'Fast-harvesting, climate-adapted seeds including indigenous dodo (amaranth), spinach, lettuce, and inoculated oyster mushroom fruiting blocks.',
      features: isRw
        ? ['Isarura ryihuse mu minsi 7–21', 'Imbuto gakondo z’iwacu z’intungamubiri', 'Ifumbire y’umwimerere yo gutangiza']
        : ['Fast 7–21 day harvest turnaround', 'Heirloom indigenous seeds', 'Compost & organic substrate starter'],
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      badge: isRw ? 'Amapaki y’Imbuto' : 'Seed & Substrate Pack',
      uploadNote: isRw ? 'Ifoto: Imbuto n’ingemwe nto' : 'Photo: Seeds & young sprouts',
    },
  ];

  return (
    <section className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono mb-2 block">
            {isRw ? 'IBIKORESHO N’IMPFASHANYIGISHO' : 'THE HARDWARE & LEARNING KIT'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {isRw
              ? 'Ibikoresho bifatika byubakiwe kuramba imyaka makumyabiri.'
              : 'Physical tools built to last two decades.'}
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            {isRw
              ? 'Umuhinzi Muto ni umutungo urambye. Ishoramari rimwe rya 40,000 RWF ku Munara w’Ubusitani rifasha amatsinda y’abana umwaka ku wundi mu mashuri no mu miryango idafite ubutaka bunini.'
              : 'Little Farmer is an enduring asset. One Cone Garden investment of 40,000 RWF serves continuous cohorts of children year after year in land-constrained schools and refugee communities.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#C0F038]/50 transition-all duration-300"
            >
              <div>
                <div className="mb-5">
                  <ImagePlaceholder
                    src={t.imageSrc}
                    alt={t.name}
                    badge={t.badge}
                    isAuthentic={t.isAuthentic}
                    aspectRatio="aspect-[16/10]"
                    uploadNote={t.uploadNote}
                    className="rounded-2xl"
                  />
                </div>

                <span className="text-[10px] font-mono font-bold tracking-widest text-[#BAF035] uppercase block mb-1">
                  {t.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {t.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                {t.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                    <div className="w-4 h-4 rounded-full bg-[#BAF035]/20 text-[#BAF035] flex items-center justify-center shrink-0">
                      <Check size={11} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
