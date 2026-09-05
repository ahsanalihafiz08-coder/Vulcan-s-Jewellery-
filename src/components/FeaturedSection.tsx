import { useState } from 'react';
import { Eye, Sparkles, Filter } from 'lucide-react';
import { FEATURED_PIECES } from '../data/jewelleryData';
import { JewelleryPiece } from '../types';

interface FeaturedSectionProps {
  selectedCategoryFilter: string;
  onFilterChange: (category: string) => void;
  onSelectPiece: (piece: JewelleryPiece) => void;
}

export function FeaturedSection({
  selectedCategoryFilter,
  onFilterChange,
  onSelectPiece,
}: FeaturedSectionProps) {
  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Fine Jewellery', 'Special Occasion'];

  const filteredPieces = selectedCategoryFilter === 'All'
    ? FEATURED_PIECES
    : FEATURED_PIECES.filter(p => p.category.toLowerCase() === selectedCategoryFilter.toLowerCase());

  return (
    <section
      id="jewellery"
      aria-label="Featured Jewellery Showcase"
      className="py-24 bg-[#E9DDCC]/25 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Editorial Showcase</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Pieces Made to Be Remembered
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            Discover a gallery of hallmark pieces designed with thoughtful proportions, pure lines, and celebratory warmth.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategoryFilter.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onFilterChange(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#1E4F8F] text-white shadow-sm'
                    : 'bg-white text-[#493B35] border border-[#E9DDCC] hover:border-[#C9A45C] hover:text-[#1E4F8F]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F3ECE2]">
                <img
                  src={piece.image}
                  alt={piece.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-[#493B35]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#FBF8F1]/95 border border-[#C9A45C]/40 text-[11px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold backdrop-blur-xs shadow-xs">
                    {piece.category}
                  </span>
                </div>

                {/* Quick View Button Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    onClick={() => onSelectPiece(piece)}
                    className="px-5 py-2.5 rounded-full bg-[#FBF8F1] text-[#1E4F8F] hover:bg-[#1E4F8F] hover:text-white border border-[#C9A45C] text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold shadow-md transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Text & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-medium">
                    {piece.material}
                  </p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors duration-300">
                    {piece.name}
                  </h3>
                  <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/80 leading-relaxed line-clamp-2">
                    {piece.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-[#E9DDCC]/70 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectPiece(piece)}
                    className="text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#1E4F8F] hover:text-[#8A4050] transition-colors duration-300 flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <span className="text-[#C9A45C]">→</span>
                  </button>
                  <span className="text-[11px] text-[#493B35]/60 font-['Poppins',sans-serif]">
                    Vulcan's Boutique
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
