import { useEffect, useState } from 'react';
import { X, Calendar, Sparkles, Phone, ArrowRight, ShieldCheck, Gem, ChevronRight, Check } from 'lucide-react';
import { CatalogItem } from '../data/catalogImages';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface DetailsPopUpModalProps {
  item: CatalogItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookViewing: (item: CatalogItem) => void;
}

export function DetailsPopUpModal({ item, isOpen, onClose, onBookViewing }: DetailsPopUpModalProps) {
  const [showExtendedDetails, setShowExtendedDetails] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setShowExtendedDetails(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${item.title}`}
      className="fixed inset-0 z-50 bg-[#241C18]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl lg:max-w-4xl w-full max-h-[90vh] bg-[#FBF8F1] rounded-3xl overflow-hidden border border-[#C9A45C] shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#493B35] hover:text-[#1E4F8F] border border-[#E9DDCC] transition-colors cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-y-auto">
          
          {/* Image Display */}
          <div className="md:col-span-6 relative bg-[#E9DDCC]/40 aspect-square md:aspect-auto min-h-[340px] sm:min-h-[420px] overflow-hidden group">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Category Pill */}
            <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#C9A45C]/50 text-[11px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold shadow-xs">
              {item.category}
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm border border-[#C9A45C]/30 text-xs text-[#493B35]/80 flex items-center justify-between">
              <span className="font-medium">Hallmarked 18K Solid Gold</span>
              <Gem className="w-4 h-4 text-[#C9A45C]" />
            </div>
          </div>

          {/* Details Column with generous padding and clean vertical layout */}
          <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 overflow-y-auto">
            <div className="space-y-4">
              
              {/* Material & Dynamic Extracted Title */}
              <div>
                <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-semibold block">
                  {item.material}
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#493B35] leading-tight mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/85 leading-relaxed">
                {item.description}
              </p>

              {/* Extended Details / Specifications (toggled via "View Details" button) */}
              {showExtendedDetails ? (
                <div className="space-y-3 pt-3 border-t border-[#E9DDCC] animate-in fade-in duration-300">
                  <p className="text-xs uppercase tracking-wider font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Artisanal Specifications</span>
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#493B35]/85">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 rounded-xl bg-white border border-[#E9DDCC] text-xs text-[#493B35]/80">
                    <strong className="text-[#8A4050] block font-['Poppins',sans-serif] mb-0.5">Styling Recommendation:</strong>
                    {item.stylingNotes}
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-white border border-[#E9DDCC]/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#493B35]/75">
                    <span>Authenticity:</span>
                    <span className="font-semibold text-[#1E4F8F]">Guaranteed Hallmark</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#493B35]/75">
                    <span>Boutique Viewing:</span>
                    <span className="font-semibold text-[#8A4050]">Private Viewing Available</span>
                  </div>
                </div>
              )}

            </div>

            {/* TWO PRIMARY ACTIONABLE BUTTONS AS REQUIRED */}
            <div className="pt-4 border-t border-[#E9DDCC] flex flex-col sm:flex-row gap-3">
              
              {/* Action 1: Book Viewing */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookViewing(item);
                }}
                id="modal-btn-book-viewing"
                className="flex-1 py-3 px-4 sm:px-5 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Viewing</span>
              </button>

              {/* Action 2: View Details */}
              <button
                type="button"
                onClick={() => setShowExtendedDetails(!showExtendedDetails)}
                id="modal-btn-view-details"
                className="flex-1 py-3 px-4 sm:px-5 rounded-full bg-white hover:bg-[#F3ECE2] text-[#493B35] border border-[#C9A45C] hover:border-[#A6833D] font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <span>{showExtendedDetails ? 'Hide Details' : 'View Details'}</span>
              </button>

            </div>

            {/* Direct Telephone fallback */}
            <div className="text-center pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="text-xs text-[#493B35]/70 hover:text-[#1E4F8F] transition-colors inline-flex items-center space-x-1"
              >
                <Phone className="w-3 h-3 text-[#C9A45C]" />
                <span>Or call our boutique representative: <strong className="font-semibold">{BUSINESS_INFO.phone}</strong></span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
