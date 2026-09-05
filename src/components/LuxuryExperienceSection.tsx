import { Sparkles, ArrowRight, Heart, Award, Shield } from 'lucide-react';

interface LuxuryExperienceProps {
  onDiscoverMore: () => void;
}

export function LuxuryExperienceSection({ onDiscoverMore }: LuxuryExperienceProps) {
  return (
    <section
      id="experience"
      aria-label="The Luxury Experience"
      className="py-24 bg-[#FBF8F1] relative overflow-hidden"
    >
      {/* Decorative Warm Ambient Gradients */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-[#1E4F8F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Champagne Decorative Ring */}
              <div className="absolute -inset-4 rounded-3xl border border-[#C9A45C]/35 pointer-events-none" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C9A45C]/20 bg-[#F3ECE2]">
                <img
                  src="https://images.unsplash.com/photo-1543290954-4f05256e2eb9?auto=format&fit=crop&w=1200&q=85"
                  alt="Fine gold and diamond jewellery in warm ambient light"
                  loading="lazy"
                  className="w-full h-auto object-cover object-center transform hover:scale-103 transition-transform duration-1000"
                />

                {/* Subtle Pearl & Champagne Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#493B35]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>The Boutique Narrative</span>
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35] leading-[1.12]">
              A Piece of Elegance. <br />
              <span className="italic text-[#1E4F8F] font-normal">A Memory to Keep.</span>
            </h2>

            {/* Decorative Gold & Sapphire Divider */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-[#C9A45C]" />
              <div className="w-2 h-2 rounded-full bg-[#1E4F8F]" />
              <div className="w-6 h-0.5 bg-[#8A4050]" />
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#493B35]/85 font-['Manrope',sans-serif] leading-relaxed">
              <p>
                Jewellery is far more than an ornament. It is an intimate expression of individual style, a quiet reflection of grace, and an enduring symbol of life’s deepest emotions.
              </p>
              <p>
                Whether celebrating a cherished milestone, marking a transformative personal achievement, or simply embracing the daily joy of exquisite craftsmanship, each piece at Vulcan's Jewellery is designed to accompany you through moments worth remembering.
              </p>
            </div>

            {/* Four Attributes Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-2 w-full">
              <div className="p-3.5 rounded-xl bg-white border border-[#E9DDCC] flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#1E4F8F]" />
                <span className="font-['Playfair_Display',serif] text-sm font-semibold text-[#493B35]">
                  Individual Style
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E9DDCC] flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
                <span className="font-['Playfair_Display',serif] text-sm font-semibold text-[#493B35]">
                  Emotional Resonance
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E9DDCC] flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#8A4050]" />
                <span className="font-['Playfair_Display',serif] text-sm font-semibold text-[#493B35]">
                  Joyful Celebration
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E9DDCC] flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#1E4F8F]" />
                <span className="font-['Playfair_Display',serif] text-sm font-semibold text-[#493B35]">
                  Enduring Memories
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onDiscoverMore}
                className="px-8 py-3.5 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3 cursor-pointer"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
