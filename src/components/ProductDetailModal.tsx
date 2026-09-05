import { useEffect } from 'react';
import { X, Sparkles, Check, Phone, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { JewelleryPiece } from '../types';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface ProductDetailModalProps {
  piece: JewelleryPiece | null;
  onClose: () => void;
  onInquirePiece: (pieceName: string) => void;
}

export function ProductDetailModal({ piece, onClose, onInquirePiece }: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (piece) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [piece, onClose]);

  if (!piece) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${piece.name}`}
      className="fixed inset-0 z-50 bg-[#493B35]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FBF8F1] rounded-3xl overflow-hidden border border-[#C9A45C] shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#493B35] hover:text-[#1E4F8F] border border-[#E9DDCC] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Image Side */}
          <div className="md:col-span-6 relative bg-[#F3ECE2] aspect-square md:aspect-auto min-h-[300px]">
            <img
              src={piece.image}
              alt={piece.alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FBF8F1]/90 backdrop-blur-xs border border-[#C9A45C]/40 text-[11px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#1E4F8F] font-semibold">
              {piece.category}
            </div>
          </div>

          {/* Details Content */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-semibold">
                  {piece.material}
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#493B35] mt-1">
                  {piece.name}
                </h3>
              </div>

              <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/85 leading-relaxed">
                {piece.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#E9DDCC]">
                <p className="text-xs uppercase tracking-wider font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
                  Artisanal Attributes
                </p>
                <ul className="space-y-1.5 text-xs text-[#493B35]/80">
                  {piece.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Styling Notes */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E9DDCC] text-xs text-[#493B35]/80">
                <span className="font-semibold text-[#8A4050] block mb-0.5 font-['Poppins',sans-serif]">Styling Recommendation:</span>
                {piece.stylingNotes}
              </div>
            </div>

            {/* Inquire Actions */}
            <div className="pt-4 border-t border-[#E9DDCC] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onInquirePiece(piece.name);
                  onClose();
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold shadow-sm transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Inquire About Piece</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="py-3 px-4 rounded-full bg-white hover:bg-[#F3ECE2] border border-[#C9A45C] text-[#493B35] text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Call Boutique</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
