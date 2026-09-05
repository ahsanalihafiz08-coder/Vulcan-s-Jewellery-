import { Sparkles, ArrowRight, Store } from 'lucide-react';

interface FinalCTAProps {
  onExplore: () => void;
  onVisit: () => void;
}

export function FinalCTASection({ onExplore, onVisit }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      aria-label="Call to Action"
      className="relative py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FBF8F1 0%, #E9DDCC 45%, #DFCA95 80%, #F5EAEB 100%)',
      }}
    >
      {/* Subtle decorative color accents: Burgundy and Sapphire ambient tints */}
      <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#8A4050]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#1E4F8F]/10 blur-3xl pointer-events-none" />

      {/* Champagne gold border frame */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#C9A45C]/50 shadow-2xl text-center space-y-8">
          
          {/* Subtle Brand Badge */}
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Vulcan's Jewellery</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          {/* Heading */}
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35] leading-tight">
            Discover Something <span className="italic text-[#8A4050]">Truly Beautiful</span>
          </h2>

          <div className="w-20 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          {/* Supporting Text */}
          <p className="font-['Manrope',sans-serif] text-base sm:text-lg md:text-xl text-[#493B35]/85 max-w-2xl mx-auto leading-relaxed">
            Explore our jewellery collections and discover an elegant piece for your next unforgettable moment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onExplore}
              id="cta-final-explore"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onVisit}
              id="cta-final-visit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F3ECE2] text-[#493B35] border border-[#C9A45C] hover:border-[#A6833D] font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Store className="w-4 h-4 text-[#8A4050]" />
              <span>Visit Our Store</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
