import { useState, useEffect, useCallback } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/jewelleryData';
import { GalleryItem } from '../types';

export function GallerySection() {
  const categories = ['All', 'Rings', 'Bracelets', 'Earrings', 'Necklaces'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section
      id="gallery"
      aria-label="Editorial Gallery"
      className="py-24 bg-[#FBF8F1] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Visual Anthology</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Editorial Boutique Gallery
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            A curated visual celebration of craftsmanship, fine details, and the warm boutique atmosphere of Vulcan's Jewellery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-medium transition-all duration-300 cursor-pointer ${
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

        {/* 3x3 Editorial Grid Layout with Product Titles Displayed Underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E9DDCC] hover:border-[#C9A45C] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-[#F3ECE2]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-[#241C18]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#1E4F8F] shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-bold border border-[#C9A45C]/30 shadow-xs">
                  {item.category}
                </div>
              </div>

              {/* Product Titles & Details Displayed Underneath */}
              <div className="p-5 flex flex-col space-y-1 bg-white">
                <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-semibold">
                  Vulcan's Archive
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightweight Accessible Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Image Lightbox"
          className="fixed inset-0 z-50 bg-[#493B35]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] bg-[#FBF8F1] rounded-2xl overflow-hidden border border-[#C9A45C] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] bg-[#E9DDCC]/50 flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-5 bg-white border-t border-[#E9DDCC] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35]">
                  {filteredItems[activeLightboxIndex].title}
                </h4>
              </div>
              <span className="text-xs text-[#493B35]/60 font-['Poppins',sans-serif]">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
