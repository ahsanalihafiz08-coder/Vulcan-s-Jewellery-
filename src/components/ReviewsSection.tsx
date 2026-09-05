import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { REVIEWS_SAMPLE, BUSINESS_INFO } from '../data/jewelleryData';

export function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? REVIEWS_SAMPLE.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev + 1) % REVIEWS_SAMPLE.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % REVIEWS_SAMPLE.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // For desktop: display 3 horizontal cards side-by-side
  const visibleDesktopReviews = [0, 1, 2].map(
    (offset) => REVIEWS_SAMPLE[(startIndex + offset) % REVIEWS_SAMPLE.length]
  );

  const currentMobileReview = REVIEWS_SAMPLE[startIndex];

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews and Rating"
      className="py-24 bg-[#E9DDCC]/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Patron Reflections</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Customer Rating & Reflections
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          {/* Rating Display */}
          <div className="flex flex-col items-center justify-center pt-2 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1E4F8F]">
                5.0
              </span>
              <div className="flex text-[#C9A45C] space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A45C] text-[#C9A45C]" />
                ))}
              </div>
            </div>
            <p className="font-['Poppins',sans-serif] text-xs uppercase tracking-widest text-[#493B35] font-bold">
              Customer Rating
            </p>
          </div>
        </div>

        {/* DESKTOP VIEW: 3-Card Horizontal Layout (>=768px) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {visibleDesktopReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 border border-[#C9A45C]/35 shadow-lg hover:shadow-xl hover:border-[#C9A45C] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div className="flex text-[#C9A45C] space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C] text-[#C9A45C]" />
                    ))}
                  </div>
                </div>

                <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#493B35] mb-2 leading-snug">
                  "{review.highlight}"
                </h3>

                <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/85 leading-relaxed italic">
                  {review.patronNote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E9DDCC] flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#1E4F8F] text-white flex items-center justify-center font-['Poppins',sans-serif] text-xs font-bold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-xs font-semibold text-[#493B35]">
                    {review.dateLabel}
                  </p>
                  <p className="text-[10px] text-[#C9A45C] font-medium flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-[#C9A45C]" />
                    <span>Verified Boutique Experience</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: Single-Card Carousel Container (<768px) */}
        <div className="md:hidden max-w-3xl mx-auto mb-8">
          <div className="relative bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#C9A45C]/35 shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between border-b border-[#E9DDCC] pb-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C]">
                <Quote className="w-4 h-4" />
              </div>
              <div className="flex text-[#C9A45C] space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C] text-[#C9A45C]" />
                ))}
              </div>
            </div>

            <div className="space-y-3 min-h-[140px] flex flex-col justify-center">
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35]">
                "{currentMobileReview.highlight}"
              </h3>
              <p className="font-['Manrope',sans-serif] text-base text-[#493B35]/85 leading-relaxed italic">
                {currentMobileReview.patronNote}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E9DDCC] flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#1E4F8F] text-white flex items-center justify-center font-['Poppins',sans-serif] text-xs font-bold shrink-0">
                {currentMobileReview.initials}
              </div>
              <div>
                <p className="font-['Poppins',sans-serif] text-xs font-semibold text-[#493B35]">
                  {currentMobileReview.dateLabel}
                </p>
                <p className="text-[10px] text-[#C9A45C] font-medium flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-[#C9A45C]" />
                  <span>Verified Boutique Experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel & Navigation Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={prevReview}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-[#C9A45C]/50 bg-white hover:bg-[#1E4F8F] hover:text-white hover:border-[#1E4F8F] text-[#493B35] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots indicator */}
          <div className="flex space-x-1.5 px-2">
            {REVIEWS_SAMPLE.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStartIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  startIndex === idx ? 'w-6 bg-[#1E4F8F]' : 'w-2 bg-[#C9A45C]/40'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-[#C9A45C]/50 bg-white hover:bg-[#1E4F8F] hover:text-white hover:border-[#1E4F8F] text-[#493B35] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-xs text-[#493B35]/60 mt-6 font-['Manrope',sans-serif]">
          Customer rating reflects overall recorded patron evaluation. Review text displays structured sample reflections.
        </p>

      </div>
    </section>
  );
}
