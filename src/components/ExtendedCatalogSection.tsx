import { useState, useMemo, useEffect } from 'react';
import { Sparkles, Search, Eye, Calendar, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXTENDED_CATALOG_ITEMS, CatalogItem } from '../data/catalogImages';

interface ExtendedCatalogSectionProps {
  onSelectPiece: (item: CatalogItem) => void;
  onBookViewing: (item: CatalogItem) => void;
  isSaved?: (id: string) => boolean;
  onToggleSave?: (item: CatalogItem) => void;
}

export function ExtendedCatalogSection({
  onSelectPiece,
  onBookViewing,
  isSaved,
  onToggleSave,
}: ExtendedCatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['ALL', 'RINGS', 'BRACELETS', 'EARRINGS', 'NECKLACES'];

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const filteredItems = useMemo(() => {
    return EXTENDED_CATALOG_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'ALL'
          ? true
          : item.category.toUpperCase() === activeCategory;
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Specific 3-Page Pagination Rules: 20 items on Page 1, 15 on Page 2, 15 on Page 3 (total 50 items)
  const totalPages = useMemo(() => {
    const len = filteredItems.length;
    if (len === 0) return 1;
    if (len <= 20) return 1;
    if (len <= 35) return 2;
    return 3;
  }, [filteredItems.length]);

  const { displayedItems, startIndex, endIndex } = useMemo(() => {
    if (currentPage === 1) {
      const slice = filteredItems.slice(0, 20);
      return { displayedItems: slice, startIndex: 0, endIndex: slice.length };
    }
    if (currentPage === 2) {
      const slice = filteredItems.slice(20, 35);
      return { displayedItems: slice, startIndex: 20, endIndex: 20 + slice.length };
    }
    const slice = filteredItems.slice(35, 50);
    return { displayedItems: slice, startIndex: 35, endIndex: 35 + slice.length };
  }, [filteredItems, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const catalogElement = document.getElementById('extended-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="extended-catalog"
      aria-label="Extended Jewellery Catalog"
      className="py-20 sm:py-24 bg-[#FBF8F1] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Complete Boutique Archive</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            The Extended Catalog
          </h2>

          <div className="w-20 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            Explore 50 hand-finished creations, from sculptural emerald cuff rings and diamond pavé bands to fluid gold collar necklaces and heirloom bangles.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E9DDCC]">
          
          {/* Category Filter Buttons - Plain high-contrast numbers without outline boxes */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
            {categories.map((cat) => {
              const count =
                cat === 'ALL'
                  ? EXTENDED_CATALOG_ITEMS.length
                  : EXTENDED_CATALOG_ITEMS.filter((i) => i.category.toUpperCase() === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-['Poppins',sans-serif] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-1.5 border-2 ${
                    isActive
                      ? 'bg-[#1E4F8F] text-white border-[#1E4F8F] shadow-md shadow-[#1E4F8F]/25'
                      : 'bg-white text-[#493B35] border-[#E9DDCC] hover:border-[#C9A45C] hover:text-[#1E4F8F]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-xs sm:text-sm font-bold ml-1 ${
                      isActive ? 'text-white' : 'text-[#1E4F8F]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#493B35]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by piece or stone..."
              className="w-full pl-10 pr-12 py-2 rounded-full border-2 border-[#E9DDCC] bg-white text-xs sm:text-sm font-medium text-[#493B35] placeholder:text-[#493B35]/50 focus:outline-none focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-2.5 text-xs font-semibold text-[#8A4050] hover:text-[#493B35] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Catalog Grid: Consistent 3-Column Layout on Desktop with Matching Card Dimensions */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-[#E9DDCC]/20 rounded-3xl p-8 border border-[#E9DDCC]">
            <p className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35]">
              No jewellery pieces matched your search
            </p>
            <p className="text-sm text-[#493B35]/70">
              Try adjusting your search terms or select another category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1E4F8F] text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm hover:bg-[#143868] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedItems.map((item) => {
              const saved = isSaved ? isSaved(item.id) : false;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectPiece(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-[#E9DDCC] hover:border-[#C9A45C] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform-gpu"
                >
                  {/* Consistent Square Image Frame */}
                  <div className="relative aspect-square overflow-hidden bg-[#F3ECE2]">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                    />

                    {/* Micro Category Pill */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#C9A45C]/40 text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-bold shadow-xs">
                      {item.category}
                    </div>

                    {/* Top Right Floating Wishlist Heart (Visible on both Mobile and Desktop) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleSave) onToggleSave(item);
                      }}
                      aria-label={saved ? 'Remove from saved' : 'Save piece to wishlist'}
                      className={`flex absolute top-3.5 right-3.5 p-2 rounded-full transition-all duration-300 cursor-pointer shadow-md z-10 ${
                        saved
                          ? 'bg-white text-rose-600 border border-rose-200'
                          : 'bg-white/90 hover:bg-white text-[#493B35]/70 hover:text-rose-500 border border-[#E9DDCC]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Quick View Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <span className="px-4 py-2 rounded-full bg-[#1E4F8F] text-white text-xs font-['Poppins',sans-serif] font-medium flex items-center gap-2 shadow-lg whitespace-nowrap">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Piece & Book Viewing</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Clean, Balanced Typography */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-bold block truncate">
                        {item.material}
                      </span>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors leading-snug line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Proportional Price Tag formatted below product title */}
                      <div className="flex items-baseline space-x-2 pt-0.5">
                        <span className="font-['Poppins',sans-serif] text-sm sm:text-base font-bold text-[#1E4F8F] tracking-tight">
                          {item.price}
                        </span>
                        <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold">
                          Boutique Price
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#493B35]/75 line-clamp-2 leading-relaxed font-['Manrope',sans-serif] pt-1">
                        {item.description || 'Artisanal hallmark piece with hand-selected gemstones and bespoke Kuwait boutique showroom viewing.'}
                      </p>
                    </div>

                    {/* Product Card Actions: View Details and Book Viewing with perfectly centered text and no overflow */}
                    <div className="pt-3.5 border-t border-[#E9DDCC]/70 w-full">
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full items-stretch">
                        {/* Left: View Details */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectPiece(item);
                          }}
                          className="w-full min-h-[42px] py-2 px-2 sm:px-3 rounded-full border border-[#C9A45C] text-[#493B35] hover:bg-[#F3ECE2] hover:text-[#1E4F8F] font-bold text-[11px] sm:text-xs font-['Poppins',sans-serif] flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap text-center leading-none"
                        >
                          <Eye className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">View Details</span>
                        </button>

                        {/* Right: Book Viewing */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookViewing(item);
                          }}
                          className="w-full min-h-[42px] py-2 px-2 sm:px-3 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer whitespace-nowrap text-center leading-none"
                        >
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">Book Viewing</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Numbered Pagination System (3 Pages: 20/15/15 items) */}
        {totalPages > 1 && (
          <div className="mt-14 pt-8 border-t border-[#E9DDCC] flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Scannable Status Text */}
            <div className="text-xs sm:text-sm font-['Poppins',sans-serif] text-[#493B35]/70">
              Showing <span className="font-bold text-[#493B35]">{startIndex + 1}</span>–
              <span className="font-bold text-[#493B35]">{endIndex}</span> of{' '}
              <span className="font-bold text-[#1E4F8F]">{filteredItems.length}</span> pieces
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {/* Previous Page Button */}
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-full border-2 border-[#E9DDCC] bg-white text-[#493B35] font-['Poppins',sans-serif] text-xs font-bold hover:border-[#C9A45C] hover:text-[#1E4F8F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Numbered Page Buttons (1, 2, 3) */}
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-['Poppins',sans-serif] text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center justify-center border-2 ${
                      isActive
                        ? 'bg-[#1E4F8F] text-white border-[#1E4F8F] shadow-md shadow-[#1E4F8F]/25 scale-105'
                        : 'bg-white text-[#493B35] border-[#E9DDCC] hover:border-[#C9A45C] hover:text-[#1E4F8F]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {/* Next Page Button */}
              <button
                type="button"
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-full border-2 border-[#E9DDCC] bg-white text-[#493B35] font-['Poppins',sans-serif] text-xs font-bold hover:border-[#C9A45C] hover:text-[#1E4F8F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

