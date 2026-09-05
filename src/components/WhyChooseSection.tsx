import { Crown, Sparkles, UserCheck, Eye, Diamond } from 'lucide-react';

export function WhyChooseSection() {
  const pillars = [
    {
      id: 'elegance',
      icon: Crown,
      title: 'Timeless Elegance',
      description: 'Jewellery presented with a sophisticated and enduring aesthetic.'
    },
    {
      id: 'selection',
      icon: Diamond,
      title: 'Curated Selection',
      description: 'A beautiful collection designed to offer different styles and occasions.'
    },
    {
      id: 'experience',
      icon: UserCheck,
      title: 'Personal Experience',
      description: 'A welcoming approach to discovering jewellery that suits your style.'
    },
    {
      id: 'presentation',
      icon: Eye,
      title: 'Refined Presentation',
      description: 'An elegant and premium browsing experience from beginning to end.'
    }
  ];

  return (
    <section
      id="why-choose"
      aria-label="Why Choose Vulcan's Jewellery"
      className="py-24 bg-[#E9DDCC]/20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Our Distinctions</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Why Choose Vulcan's Jewellery
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            Discover an intentional boutique environment centered around grace, welcoming courtesy, and thoughtful selection.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group p-8 rounded-2xl bg-[#FFFFFF] border border-[#E9DDCC] hover:border-[#C9A45C] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Minimal luxury line icon in gold/sapphire circular badge */}
                  <div className="w-12 h-12 rounded-full border border-[#C9A45C]/50 bg-[#FBF8F1] flex items-center justify-center text-[#1E4F8F] group-hover:border-[#1E4F8F] group-hover:bg-[#1E4F8F] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 transition-colors duration-300" />
                  </div>

                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35] group-hover:text-[#1E4F8F] transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Decorative Bottom Accent */}
                <div className="pt-2 border-t border-[#E9DDCC]/50">
                  <div className="w-6 h-0.5 bg-[#C9A45C]/60 group-hover:w-12 group-hover:bg-[#1E4F8F] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
