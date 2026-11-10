import React, { useState } from 'react';
import { Layers, Recycle, Droplets, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function WasteToFarmBlueprint() {
  const blueprints = [
    {
      id: 'bottle_drip',
      title: 'Vertical Bottle Drip Tower',
      subtitle: 'Zero-cost gravity irrigation for balconies and classrooms',
      materials: ['Recycled 1.5L PET plastic bottles', 'Cotton shoe strings / cloth wicks', 'Fine gravel & coarse sand', 'Starter compost soil'],
      engineeringSteps: [
        'Cut inverted drainage base with 4 aeration slots to prevent root rot',
        'Thread organic cotton wick through cap to regulate slow capillary drip',
        'Stack vertically: water from top bottle cascades slowly down the column',
        'Water savings: uses 70% less water than open ground irrigation',
      ],
      suitableCrops: 'Sunflower microgreens, baby spinach, coriander, mint',
      impactNote: 'Ideal for classroom windowsills and refugee shelters where tap water is scarce.',
      imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
      uploadNote: 'Photo: Vertical bottle garden in class',
    },
    {
      id: 'sack_tower',
      title: 'Upcycled Grain Sack Garden',
      subtitle: 'Multi-tiered pocket garden growing 40+ greens in 0.5m²',
      materials: ['Woven polypropylene 50kg grain sack', 'Central gravel pipe (or rolled plastic mesh)', 'Compost & topsoil mix', 'Heirloom dodo (amaranth) seedlings'],
      engineeringSteps: [
        'Insert central drainage column filled with crushed volcanic gravel',
        'Pack soil around the perimeter while raising the central gravel core',
        'Cut staggered 5cm "V" slits around the sack exterior for side planting',
        'Pour water strictly into the central gravel tube to distribute moisture evenly to roots',
      ],
      suitableCrops: 'Dodo (amaranth), kale (sukuma wiki), indigenous nightshade',
      impactNote: 'A staple in Rwandan peri-urban backyards; delivers fresh vegetables daily.',
      imageSrc: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a41?auto=format&fit=crop&w=700&q=80',
      uploadNote: 'Photo: Multi-pocket sack garden',
    },
    {
      id: 'compost_bucket',
      title: 'Classroom Mini-Compost Bucket',
      subtitle: 'Odor-free organic recycling creating rich microbial soil',
      materials: ['Two 20L plastic buckets (one nesting inside the other)', 'Drill or heated nail for aeration holes', 'Dry brown carbon matter (dry grass, sawdust, cardboard)', 'Green nitrogen food scraps (banana peels, tea bags)'],
      engineeringSteps: [
        'Drill 3mm aeration holes in the inner bucket and drainage holes in bottom',
        'Collect nutritious liquid compost tea in the outer leakproof bucket',
        'Teach children the 2:1 ratio: two handfuls of dry brown matter for every handful of green scraps',
        'Harvest rich dark organic soil within 21 days to fertilize the school Cone Garden',
      ],
      suitableCrops: 'Produces organic fertilizer for all vegetables and seedbeds',
      impactNote: 'Teaches children circular economy: waste is not trash, it is future food.',
      imageSrc: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=700&q=80',
      uploadNote: 'Photo: Children layering mini-compost bucket',
    },
    {
      id: 'hdpe_cone',
      title: 'Durable HDPE Cone Garden',
      subtitle: 'DreamDo’s flagship 20-year modular school vertical grower',
      materials: ['High-density polyethylene (HDPE) sheets', 'Pre-cut staggered planting cups', 'Recirculating water drainage base', 'Organic seedling starter packs'],
      engineeringSteps: [
        'Conical geometric form creates maximum solar exposure across 360 degrees',
        'Engineered from UV-stabilized food-grade polymer that resists equatorial sunlight',
        'Requires zero land excavation: sits on concrete, asphalt, or packed earth',
        'Designed to serve up to 20 years of consecutive student cohorts with proper maintenance',
      ],
      suitableCrops: '50+ simultaneous plants: lettuce, amaranth, herbs, and strawberries',
      impactNote: 'Installed directly on school campuses across the Masaka Sector and beyond.',
      imageSrc: '/images/school-cone-garden.jpg',
      isAuthentic: true,
      uploadNote: 'Photo: School Cone Garden in Rwanda',
    },
  ];

  const [activeBlueprintId, setActiveBlueprintId] = useState('hdpe_cone');
  const activeBlueprint = blueprints.find((b) => b.id === activeBlueprintId) || blueprints[0];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
              ENGINEERING & UP-CYCLING
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[11px] font-semibold text-[#143A22] bg-[#BAF035]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-mono">
              <Recycle size={12} />
              Waste-to-Farm Blueprints
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143A22] tracking-tight mb-4">
            Low-tech farming engineering for compact spaces.
          </h2>

          <p className="text-base sm:text-lg text-[#556358] leading-relaxed">
            In densely populated Rwandan cities and refugee-hosting areas, access to agricultural land is limited. DreamDo teaches children how to convert <span className="font-semibold text-[#143A22]">plastic bottles, grain sacks, and durable HDPE sheets</span> into high-yield, water-efficient vertical gardens.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {blueprints.map((bp) => {
            const isSelected = activeBlueprintId === bp.id;
            return (
              <button
                key={bp.id}
                onClick={() => setActiveBlueprintId(bp.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#143A22] text-white border-[#143A22] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#143A22] border-black/10 hover:border-black/20'
                }`}
              >
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider mb-1 opacity-70">
                  Blueprint
                </div>
                <div className="text-sm font-bold leading-tight">
                  {bp.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Blueprint Detail Container */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-black/5 shadow-2xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-[11px] font-mono font-bold text-[#E25822] tracking-widest uppercase block mb-1">
                  DETAILED SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22] mb-2">
                  {activeBlueprint.title}
                </h3>
                <p className="text-sm text-[#5D6B60] leading-relaxed">
                  {activeBlueprint.subtitle}
                </p>
              </div>

              {/* Materials Pill List */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#143A22] font-mono block mb-2">
                  Locally Accessible Materials:
                </label>
                <div className="flex flex-wrap gap-2">
                  {activeBlueprint.materials.map((m, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-medium text-[#143A22] shadow-2xs"
                    >
                      ✦ {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Steps */}
              <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E25822] font-mono">
                  Engineering & Construction Logic:
                </div>
                <ul className="space-y-2.5">
                  {activeBlueprint.engineeringSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#465349]">
                      <span className="w-5 h-5 rounded-full bg-[#C0F038] text-[#143A22] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Crop & Impact Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-black/5">
                  <span className="font-bold text-[#143A22] block mb-0.5">Recommended Crops:</span>
                  <span className="text-[#556358]">{activeBlueprint.suitableCrops}</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-black/5">
                  <span className="font-bold text-[#143A22] block mb-0.5">Community Benefit:</span>
                  <span className="text-[#556358]">{activeBlueprint.impactNote}</span>
                </div>
              </div>

            </div>

            {/* Right Photo Space */}
            <div className="lg:col-span-5">
              <ImagePlaceholder
                src={activeBlueprint.imageSrc}
                alt={activeBlueprint.title}
                badge={activeBlueprint.isAuthentic ? 'Authentic Photo' : 'Blueprint Hardware'}
                isAuthentic={activeBlueprint.isAuthentic}
                aspectRatio="aspect-[4/3]"
                uploadNote={activeBlueprint.uploadNote}
                caption={activeBlueprint.title}
                className="rounded-2xl"
              />
              <div className="mt-3 p-3 bg-white/70 rounded-xl border border-black/5 text-[11px] text-[#6A786E]">
                <strong className="text-[#143A22]">Pedagogical Principle:</strong> Children learn that innovation does not require expensive technology — resourceful engineering unlocks food security anywhere.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

