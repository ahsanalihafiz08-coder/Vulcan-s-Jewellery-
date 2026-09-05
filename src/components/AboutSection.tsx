import { useState } from 'react';
import { Sparkles, Eye, Calendar, Gem } from 'lucide-react';
import { GALLERY_ANIMATION_ITEMS, CatalogItem } from '../data/catalogImages';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface AboutSectionProps {
  onSelectPiece: (item: CatalogItem) => void;
  onBookViewing: (item: CatalogItem) => void;
}

export function AboutSection({ onSelectPiece, onBookViewing }: AboutSectionProps) {
  // Split into two alternating streams for rich rhythmic visual movement if desired, or a continuous showcase
  const row1 = GALLERY_ANIMATION_ITEMS.slice(0, 22);
  const row2 = GALLERY_ANIMATION_ITEMS.slice(22, 44);

  return (
    <section
      id="about"
      aria-label="About Vulcan's Jewellery & Interactive Gallery"
      className="py-24 bg-[#FBF8F1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story & Philosophy Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          
          <div className="lg:col-span-8 flex flex-col items-start space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>Boutique Heritage</span>
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35] leading-[1.12]">
              The Art of Timeless Jewellery
            </h2>

            <div className="w-16 h-0.5 bg-[#C9A45C] rounded-full" />

            <div className="space-y-3 text-base text-[#493B35]/85 font-['Manrope',sans-serif] leading-relaxed max-w-3xl">
              <p>
                At <strong className="text-[#1E4F8F] font-semibold">{BUSINESS_INFO.name}</strong>, we believe that jewellery should never be ordinary. True adornment is a delicate art—one where beauty, light, and personal expression converge into pieces designed to transcend fleeting trends.
              </p>
              <p>
                Our philosophy centers around the profound emotional weight of jewellery discovery. We invite visitors to slow down and immerse themselves in our private showroom at Souq Al Watiya, where personal attention and refined presentation create a lasting sense of serenity.
              </p>
            </div>
          </div>

          {/* Quick Stats / Values */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5 w-full">
            <div className="p-4 rounded-2xl bg-white border border-[#E9DDCC] shadow-xs">
              <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold">
                Philosophy
              </span>
              <p className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#493B35] mt-1">
                Timeless Style
              </p>
              <p className="text-xs text-[#493B35]/70 mt-0.5">
                Enduring proportions designed for graceful silhouettes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E9DDCC] shadow-xs">
              <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold">
                Boutique Quality
              </span>
              <p className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#493B35] mt-1">
                5.0 Hallmark
              </p>
              <p className="text-xs text-[#493B35]/70 mt-0.5">
                Uncompromising standard across fine golds and gems.
              </p>
            </div>
          </div>

        </div>

        {/* 5. INTERACTIVE GALLERY SECTION (44 IMAGE CARD ANIMATION):
            Smooth moving cards without outer container box/border */}
        <div className="relative py-4 overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Moving Masterpiece Gallery (44 Pieces)</span>
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#493B35] mt-0.5">
                Curated Hand Crafted Jewellery In Motion
              </h3>
            </div>

            <div className="hidden sm:inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E4F8F]/10 border border-[#1E4F8F]/20 text-xs font-['Poppins',sans-serif] text-[#1E4F8F] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Continuous Showcase</span>
            </div>
          </div>

          {/* Row 1: Smooth continuous animation */}
          <div className="w-full mb-4 relative overflow-hidden">
            <div className="animate-marquee-left flex gap-4 py-2 transform-gpu">
              {[...row1, ...row1].map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  onClick={() => onSelectPiece(item)}
                  className="w-[180px] sm:w-[220px] md:w-[240px] shrink-0 group bg-white rounded-2xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#F3ECE2]">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[9px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold border border-[#C9A45C]/30">
                      {item.category}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <span className="px-2.5 py-1 rounded-full bg-[#1E4F8F] text-white text-[10px] font-['Poppins',sans-serif] font-medium flex items-center gap-1 shadow-md whitespace-nowrap">
                        <Eye className="w-3 h-3" />
                        <span>View & Book</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#493B35] truncate group-hover:text-[#1E4F8F] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#8A4050] font-['Poppins',sans-serif] truncate">
                      {item.material}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Reverse/alternating movement continuous animation */}
          <div className="w-full relative overflow-hidden">
            <div className="animate-marquee-right flex gap-4 py-2 transform-gpu">
              {[...row2, ...row2].map((item, idx) => (
                <div
                  key={`r2-${item.id}-${idx}`}
                  onClick={() => onSelectPiece(item)}
                  className="w-[180px] sm:w-[220px] md:w-[240px] shrink-0 group bg-white rounded-2xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#F3ECE2]">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[9px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold border border-[#C9A45C]/30">
                      {item.category}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <span className="px-2.5 py-1 rounded-full bg-[#8A4050] text-white text-[10px] font-['Poppins',sans-serif] font-medium flex items-center gap-1 shadow-md whitespace-nowrap">
                        <Eye className="w-3 h-3" />
                        <span>View & Book</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#493B35] truncate group-hover:text-[#8A4050] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#1E4F8F] font-['Poppins',sans-serif] truncate">
                      {item.material}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#C9A45C]/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#493B35]/70">
            <span>Click any moving card to open viewing appointments or craftsmanship dossier.</span>
            <span className="text-[#1E4F8F] font-semibold font-['Poppins',sans-serif]">
              44 Handcrafted Pieces Displayed
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
