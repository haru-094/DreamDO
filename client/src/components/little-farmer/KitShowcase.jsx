import React from 'react';
import { Check } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function KitShowcase() {
  const tools = [
    {
      name: 'Vertical Cone Garden',
      tag: 'GROWTH HARDWARE',
      desc: 'Space-saving vertical garden made from durable HDPE sheets. Strong and weather-resistant with a lifespan of up to 20 years with proper care. Occupies < 1m² footprint.',
      features: ['20-year durable HDPE construction', 'Holds 50+ seedlings in < 1m²', 'Water & soil efficient'],
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      badge: 'Durable HDPE Cone',
      uploadNote: 'Photo: School Cone Garden',
    },
    {
      name: 'Mission Cards & Logbook',
      tag: 'SCREEN-FREE PLAYBOOK',
      desc: '28 illustrated daily missions connecting biology, math, and water metrics. Includes the Plant Doctor diagnostic guide for organic remedies.',
      features: ['Plant Doctor diagnostic guide', 'Age-differentiated checklists', 'Growth & moisture tracking'],
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      badge: 'Mission Playbook',
      uploadNote: 'Photo: Mission cards in class',
    },
    {
      name: 'The DreamDo Saving Box',
      tag: 'FINANCIAL VAULT',
      desc: 'A physical wooden savings box that connects crop sales directly to saving. Comes with a double-entry ledger sheet where every harvest deposit is recorded.',
      features: ['Dual-key physical locking', 'Countersigned savings ledger', 'Direct link from harvest to dreams'],
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      badge: 'Physical Saving Box',
      uploadNote: 'Photo: Child saving coins',
    },
    {
      name: 'Starter Seeds & Compost Pack',
      tag: 'BIOLOGICAL INPUTS',
      desc: 'Fast-harvesting, climate-adapted seeds including indigenous dodo (amaranth), spinach, lettuce, and inoculated oyster mushroom fruiting blocks.',
      features: ['Fast 7–21 day harvest turnaround', 'Heirloom indigenous seeds', 'Compost & organic substrate starter'],
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=600&q=80',
      badge: 'Seed & Substrate Pack',
      uploadNote: 'Photo: Seeds & young sprouts',
    },
  ];

  return (
    <section className="bg-[#143A22] text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C0F038] uppercase font-mono mb-2 block">
            THE HARDWARE & LEARNING KIT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Physical tools built to last two decades.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Little Farmer is an enduring asset. One Cone Garden investment of 40,000 RWF serves continuous cohorts of children year after year in land-constrained schools and refugee communities.
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

                <span className="text-[10px] font-mono font-bold tracking-widest text-[#C0F038] uppercase block mb-1">
                  {t.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {t.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                {t.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                    <Check size={14} className="text-[#C0F038] shrink-0" />
                    <span>{f}</span>
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
