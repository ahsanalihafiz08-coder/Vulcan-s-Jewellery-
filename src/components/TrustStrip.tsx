import { Star, ShieldCheck, Gem, Sparkles, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export function TrustStrip() {
  const trustPillars = [
    {
      icon: Gem,
      title: 'Premium Jewellery',
      detail: 'Gracefully crafted with enduring aesthetic poise and refined silhouettes.'
    },
    {
      icon: Sparkles,
      title: 'Elegant Selection',
      detail: 'Rings, necklaces, earrings, and bracelets curated for special celebrations.'
    },
    {
      icon: HeartHandshake,
      title: 'Personal Shopping Experience',
      detail: 'Attentive, boutique-level consultation at our Souq Al Watiya boutique.'
    }
  ];

  return (
    <section
      id="trust"
      aria-label="Trust and Boutique Standards"
      className="relative py-14 bg-[#E9DDCC]/40 border-y border-[#C9A45C]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Main 5.0 / 5.0 Rating Block */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#C9A45C]/30 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-baseline space-x-2">
              <span className="font-['Cormorant_Garamond',serif] text-5xl sm:text-6xl font-bold text-[#1E4F8F] leading-none">
                5.0
              </span>
              <span className="font-['Cormorant_Garamond',serif] text-2xl text-[#493B35]/60 font-semibold">
                / 5.0
              </span>
            </div>

            <div className="flex items-center space-x-1 my-2 text-[#C9A45C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A45C] text-[#C9A45C]" />
              ))}
            </div>

            <p className="font-['Poppins',sans-serif] text-xs uppercase tracking-widest text-[#493B35] font-bold">
              Customer Rating
            </p>
            <p className="text-xs text-[#8A4050] mt-1 font-medium">
              Distinguished Boutique Standard
            </p>
          </div>

          {/* Three Key Pillars */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 p-3 rounded-lg hover:bg-white/60 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[#C9A45C]/50 flex items-center justify-center text-[#1E4F8F] shadow-xs">
                    <Icon className="w-5 h-5 text-[#1E4F8F]" />
                  </div>
                  <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#493B35]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-['Manrope',sans-serif] text-[#493B35]/80 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
