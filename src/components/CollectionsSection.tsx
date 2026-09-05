import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '../data/jewelleryData';
import { CollectionItem } from '../types';

interface CollectionsSectionProps {
  onSelectCollection: (categoryName: string) => void;
}

export function CollectionsSection({ onSelectCollection }: CollectionsSectionProps) {
  return (
    <section
      id="collections"
      aria-label="Jewellery Collections"
      className="py-24 bg-[#FBF8F1] relative overflow-hidden"
    >
      {/* Decorative subtle background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Curated Silhouettes</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>
          
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Explore Our Collections
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            Every creation at Vulcan's Jewellery reflects a deep commitment to balance, radiance, and lasting personal sentiment.
          </p>
        </div>

        {/* 6 Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col: CollectionItem) => (
            <article
              key={col.id}
              className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Container with Gentle Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3ECE2]">
                <img
                  src={col.image}
                  alt={col.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Champagne & Pearl Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#493B35]/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                {/* Badge */}
                {col.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FBF8F1]/95 border border-[#C9A45C]/40 text-[11px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold backdrop-blur-xs shadow-xs">
                    {col.badge}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-semibold">
                    {col.tagline}
                  </span>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors duration-300">
                    {col.name}
                  </h3>
                  <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/80 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                {/* Explore Button with Champagne Line */}
                <div className="pt-3 border-t border-[#E9DDCC]/70 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectCollection(col.name)}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#1E4F8F] group-hover:text-[#8A4050] transition-colors duration-300 cursor-pointer"
                    aria-label={`Explore ${col.name} collection`}
                  >
                    <span>Explore Collection</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>

                  <span className="w-8 h-[1px] bg-[#C9A45C]/50 group-hover:w-14 group-hover:bg-[#1E4F8F] transition-all duration-300" />
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-radial from-[#C9A45C]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
