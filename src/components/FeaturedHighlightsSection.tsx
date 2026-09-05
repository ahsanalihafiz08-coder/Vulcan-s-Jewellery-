import { Sparkles, Eye, Calendar, Gem } from 'lucide-react';
import { FEATURED_HIGHLIGHT_ITEMS, CatalogItem } from '../data/catalogImages';

interface FeaturedHighlightsSectionProps {
  onSelectPiece: (item: CatalogItem) => void;
  onBookViewing: (item: CatalogItem) => void;
}

export function FeaturedHighlightsSection({ onSelectPiece, onBookViewing }: FeaturedHighlightsSectionProps) {
  return (
    <section
      id="featured-highlights"
      aria-label="Featured Highlights Grid"
      className="py-24 bg-[#E9DDCC]/20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Boutique Highlights</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Curated Masterpieces
          </h2>

          <div className="w-20 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            Nine signature creations embodying Vulcan's jewellery heritage. Click any creation to view intimate craftsmanship details or arrange a private boutique viewing.
          </p>
        </div>

        {/* 9-Card Responsive Grid - Strictly 3 Cards Per Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_HIGHLIGHT_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectPiece(item)}
              className="group relative bg-[#FBF8F1] rounded-3xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-[#F3ECE2]">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#C9A45C]/40 text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold shadow-xs">
                  {item.category}
                </div>

                {/* Index marker */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#241C18]/60 backdrop-blur-xs text-white text-[11px] font-['Poppins',sans-serif] font-bold flex items-center justify-center">
                  0{index + 1}
                </div>

                {/* Hover CTA banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                  <span className="px-4 py-2 rounded-full bg-[#1E4F8F] text-white text-xs font-['Poppins',sans-serif] font-medium flex items-center gap-2 shadow-lg whitespace-nowrap">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Piece & Book Viewing</span>
                  </span>
                </div>
              </div>

              {/* Card Body - Clean typography without extra spacing or background boxes */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold text-[11px]">
                      {item.material.split('&')[0]}
                    </span>
                    <span className="text-[#C9A45C] flex items-center gap-1 font-medium">
                      <Gem className="w-3 h-3" />
                      <span>Hallmarked</span>
                    </span>
                  </div>

                  {/* Dynamic Title */}
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Direct clean description without background box or excess spacing */}
                  <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#493B35]/75 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[#E9DDCC]/70 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1E4F8F] font-['Poppins',sans-serif]">
                    Private Boutique Viewing
                  </span>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookViewing(item);
                    }}
                    className="p-2 rounded-full bg-white hover:bg-[#1E4F8F] text-[#493B35] hover:text-white border border-[#C9A45C]/50 transition-colors shadow-xs"
                    title="Book Viewing directly"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
