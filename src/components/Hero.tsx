import { useState, useRef, useEffect } from 'react';
import { Star, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface HeroProps {
  onExplore: () => void;
  onBookViewing?: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoUrl =
    'https://res.cloudinary.com/o82tprxi/video/upload/v1788464327/Gold_ring_floating_in_smoke_202609040035.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative w-full aspect-auto sm:aspect-[16/9] min-h-[500px] sm:min-h-[540px] flex items-center justify-center overflow-hidden bg-[#241C18]"
    >
      {/* 1. Dynamic Video Loop Background: Crystal Clear, Perfectly Centered & Fully Visible on Mobile & Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onEnded={(e) => {
            const vid = e.currentTarget;
            vid.currentTime = 0;
            vid.play().catch(() => {});
          }}
          className={`w-full h-full object-cover object-center transform-gpu transition-opacity duration-700 mx-auto ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={videoUrl}
        />
        {/* Balanced luxury veil ensuring the centered 3D ring is crystal clear and glowing on mobile while heading text remains crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18120F]/70 via-[#18120F]/25 to-[#18120F]/80 sm:bg-gradient-to-r sm:from-[#18120F]/75 sm:via-[#18120F]/30 sm:to-transparent pointer-events-none" />
      </div>

      {/* Floating subtle champagne golden light sparks */}
      <div className="absolute top-1/4 left-8 w-60 h-60 bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-8 w-72 h-72 bg-[#1E4F8F]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container - Heading, Text & Action Buttons on Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20">
        <div className="flex flex-col items-start text-left max-w-3xl">
          
          {/* Top Boutique Tag Badge with Elegant Sapphire & Gold Luxury Color Scheme */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#143868]/95 backdrop-blur-md border border-[#C9A45C] text-xs uppercase tracking-[0.22em] font-['Poppins',sans-serif] text-[#DFCA95] font-semibold shadow-xl mb-5 sm:mb-6 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Vulcan's Flagship Boutique</span>
          </div>

          {/* Main Heading on Left with Crisp, Artifact-Free Typography */}
          <h1
            id="hero-main-heading"
            className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.08]"
          >
            Where <span className="italic font-normal text-[#DFCA95]">Timeless Beauty</span> Meets Elegance
          </h1>

          <div className="w-20 h-1 bg-[#C9A45C] rounded-full shadow-[0_0_12px_rgba(201,164,92,0.8)] my-5" />

          {/* Body Text Overlay with High Legibility & Balanced Tone */}
          <p
            id="hero-supporting-text"
            className="font-['Manrope',sans-serif] text-base sm:text-lg md:text-xl text-[#F3ECE2] font-normal leading-relaxed max-w-2xl mb-6"
          >
            Immerse yourself in Vulcan's Jewellery boutique. Discover iconic solitaires, master-crafted gold bands, and bespoke high jewellery designed for life's most momentous celebrations.
          </p>

          {/* Action Buttons on Left Layout: Explore Collection & Visit Store */}
          <div className="flex flex-col w-full sm:w-auto sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
            <button
              type="button"
              onClick={onExplore}
              id="hero-primary-cta"
              className="group w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-2xl hover:shadow-[#1E4F8F]/60 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer border border-[#C9A45C]/60 hover:scale-105 whitespace-nowrap"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('location');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-secondary-cta"
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#35261F] hover:bg-[#281D17] sm:bg-[#35261F]/90 sm:hover:bg-[#281D17] text-white font-['Poppins',sans-serif] text-xs sm:text-sm uppercase tracking-wider font-semibold backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer border border-[#C9A45C]/60 hover:border-[#C9A45C] hover:shadow-[0_0_20px_rgba(201,164,92,0.45)] active:border-[#C9A45C] active:shadow-[0_0_20px_rgba(201,164,92,0.5)] sm:hover:scale-105 shadow-xl whitespace-nowrap"
            >
              <span>Visit Store</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

