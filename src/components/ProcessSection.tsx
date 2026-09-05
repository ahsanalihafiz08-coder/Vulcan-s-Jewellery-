import { Search, Compass, Store, Sparkles } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Explore',
      subtitle: 'Browse our jewellery collections.',
      detail: 'View our curated rings, necklaces, earrings, bracelets, and fine jewellery created with timeless grace.',
      icon: Search
    },
    {
      step: '02',
      title: 'Discover',
      subtitle: 'Find the piece that matches your style.',
      detail: 'Identify the silhouette, metal tone, and presence that harmonizes naturally with your personal expression.',
      icon: Compass
    },
    {
      step: '03',
      title: 'Visit',
      subtitle: "Visit Vulcan's Jewellery at the provided location.",
      detail: 'Experience attentive, unhurried hospitality at Ground floor, 116, Souq Al Watiya, Maliya, Kuwait City.',
      icon: Store
    },
    {
      step: '04',
      title: 'Shine',
      subtitle: 'Choose something beautiful to make the moment memorable.',
      detail: 'Take home a timeless piece to cherish personally or celebrate with someone dear.',
      icon: Sparkles
    }
  ];

  return (
    <section
      id="process"
      aria-label="Jewellery Discovery Process"
      className="py-24 bg-[#FBF8F1] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>The Boutique Journey</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Jewellery Discovery Process
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            From initial inspiration to your personal boutique visit, each step is designed for effortless elegance.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-[#C9A45C]/20 via-[#1E4F8F]/30 to-[#C9A45C]/20 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#E9DDCC] hover:border-[#C9A45C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-[#FBF8F1] border-2 border-[#C9A45C] flex flex-col items-center justify-center text-[#1E4F8F] shadow-sm mb-6 group-hover:scale-110 group-hover:border-[#1E4F8F] transition-all duration-300">
                  <span className="font-['Playfair_Display',serif] text-lg font-bold">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="font-['Poppins',sans-serif] text-xs font-semibold text-[#8A4050] mt-1 uppercase tracking-wide">
                  {step.subtitle}
                </p>

                <p className="font-['Manrope',sans-serif] text-xs sm:text-sm text-[#493B35]/80 mt-3 leading-relaxed">
                  {step.detail}
                </p>

                {/* Micro Icon */}
                <div className="mt-4 pt-3 border-t border-[#E9DDCC]/50 w-full flex justify-center text-[#C9A45C] group-hover:text-[#1E4F8F] transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
