import { Sparkles, Eye } from 'lucide-react';
import { HERO_CAROUSEL_ITEMS, CatalogItem } from '../data/catalogImages';

interface HeroRingCarouselSectionProps {
  onSelectPiece: (item: CatalogItem) => void;
  onBookViewing: (item: CatalogItem) => void;
}

export function HeroRingCarouselSection({ onSelectPiece }: HeroRingCarouselSectionProps) {
  // Duplicate for seamless infinite continuous marquee loop
  const marqueeRings = [...HERO_CAROUSEL_ITEMS, ...HERO_CAROUSEL_ITEMS];

  return (
    <section
      id="hero-ring-carousel"
      aria-label="Continuous Ring Showcase"
      className="py-14 sm:py-20 bg-[#FBF8F1] border-b border-[#C9A45C]/30 relative overflow-hidden"
    >
      {/* Background Decorative Gold Tracery */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. THE SOLITAIRE & ETERNITY SUITE TITLE - CENTERED DIRECTLY OVER SLIDER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          <span>Iconic Rings & Bands</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
        </div>

        <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
          The Solitaire & Eternity Suite
        </h2>

        <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

        <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 max-w-2xl mx-auto leading-relaxed">
          A continuous showcase of 24 master-crafted rings. Click any piece for private viewing appointments and artisanal specifications.
        </p>
      </div>

      {/* 2. UNINTERRUPTED CONTINUOUS SMOOTH MARQUEE (Never freezes on modal click or focus) */}
      <div className="w-full relative overflow-hidden">
        <div className="animate-marquee-left flex gap-5 py-3 pl-4 transform-gpu">
          {marqueeRings.map((ring, idx) => (
            <div
              key={`${ring.id}-${idx}`}
              onClick={() => onSelectPiece(ring)}
              className="w-[230px] sm:w-[270px] md:w-[290px] shrink-0 group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* High Resolution Image Container with aspect-square */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F3ECE2] shrink-0">
                <img
                  src={ring.url}
                  alt={ring.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Micro Category Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#C9A45C]/40 text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold shadow-xs">
                  18K Ring
                </div>

                {/* Hover Quick Action */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="px-3 py-1.5 rounded-full bg-[#1E4F8F] text-white text-[11px] font-['Poppins',sans-serif] font-medium flex items-center gap-1.5 shadow-md whitespace-nowrap">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details & Viewing</span>
                  </span>
                </div>
              </div>

              {/* Card Content with consistent equal height padding */}
              <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-semibold block">
                    Vulcan's Solitaire
                  </span>
                  <h3 className="font-['Cormorant_Garamond',serif] text-base sm:text-lg font-bold text-[#493B35] leading-snug group-hover:text-[#1E4F8F] transition-colors line-clamp-2 min-h-[2.75rem] mt-1">
                    {ring.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-[#E9DDCC]/70 flex items-center justify-between text-xs text-[#493B35]/70">
                  <span className="truncate pr-2 font-medium">{ring.material.split(' with ')[0]}</span>
                  <span className="text-[#1E4F8F] font-['Poppins',sans-serif] text-[11px] font-semibold shrink-0">
                    Inquire
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

