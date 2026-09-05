import { useState } from 'react';
import { MapPin, Phone, Navigation, Copy, Check, Star, ExternalLink, Clock, Building } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export function StoreLocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const telLink = `tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`;

  return (
    <section
      id="location"
      aria-label="Store Location and Directions"
      className="py-24 bg-[#E9DDCC]/25 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Building className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Souq Al Watiya Boutique</span>
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Visit Vulcan's Jewellery
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            We welcome you to experience our collections in person, accompanied by thoughtful guidance in our boutique showroom.
          </p>
        </div>

        {/* Desktop Side-by-Side Grid with Matching Heights, Mobile Responsive Stack */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Column: Boutique Information & Direct Boutique Contact */}
          <div className="lg:col-span-6 h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#C9A45C]/40 shadow-md space-y-6">
            
            {/* Boutique Name & Rating */}
            <div className="flex items-center justify-between gap-3 border-b border-[#E9DDCC] pb-5">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full border border-[#C9A45C] overflow-hidden bg-white shadow-xs shrink-0">
                  <img
                    src="https://i.ibb.co/RpnZDfr7/Vulcan-s-Jewellery-luxury-logo-d-202609050402.jpg"
                    alt="Vulcan's Jewellery Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#8A4050] font-['Poppins',sans-serif] font-semibold block">
                    {BUSINESS_INFO.category}
                  </span>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#493B35] leading-tight">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FBF8F1] border border-[#C9A45C]/40 shrink-0">
                <Star className="w-4 h-4 fill-[#C9A45C] text-[#C9A45C]" />
                <span className="text-xs font-['Poppins',sans-serif] font-bold text-[#1E4F8F]">
                  {BUSINESS_INFO.rating}
                </span>
              </div>
            </div>

            {/* Address and Phone Grid within Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* Exact Address Box */}
              <div className="p-4 rounded-2xl bg-[#FBF8F1] border border-[#E9DDCC] flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-1.5 text-xs uppercase tracking-wider font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#8A4050] shrink-0" />
                      <span>Store Address</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center space-x-1 text-xs font-['Poppins',sans-serif] text-[#493B35]/80 hover:text-[#1E4F8F] transition-colors cursor-pointer"
                      aria-label="Copy exact address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#C9A45C]" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-['Manrope',sans-serif] text-sm font-medium text-[#493B35] leading-snug break-words mt-2 select-all">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
                
                <p className="text-[11px] text-[#493B35]/70 italic leading-relaxed pt-1">
                  Ground floor, Souq Al Watiya, Maliya, Kuwait City.
                </p>
              </div>

              {/* Exact Phone Box */}
              <div className="p-4 rounded-2xl bg-[#FBF8F1] border border-[#E9DDCC] flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs uppercase tracking-wider font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>Telephone & WhatsApp</span>
                  </div>
                  <p className="font-['Manrope',sans-serif] text-base sm:text-lg font-bold text-[#1E4F8F] tracking-wide leading-tight mt-2 truncate">
                    <a href={telLink} className="hover:text-[#143868] transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-[#493B35]/70 pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                  <span>Available for private viewings</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E9DDCC]">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-get-directions"
                className="px-5 py-3 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-xs transition-all duration-300 flex items-center justify-center space-x-2 text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <a
                href={telLink}
                id="btn-call-us"
                className="px-5 py-3 rounded-full bg-white hover:bg-[#F3ECE2] text-[#493B35] border border-[#C9A45C] hover:border-[#A6833D] font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-xs transition-all duration-300 flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Call Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Map Container (Matching Height on Desktop) */}
          <div className="lg:col-span-6 h-full min-h-[420px] relative flex flex-col rounded-3xl overflow-hidden border border-[#C9A45C]/40 shadow-md bg-[#FBF8F1]">
            
            {/* Interactive Map Area with Height Filling Container on Desktop */}
            <div className="relative w-full h-full min-h-[350px] lg:min-h-0 flex-1 bg-[#E9DDCC]/40 flex items-center justify-center overflow-hidden">
              <iframe
                title="Vulcan's Jewellery Store Location Map"
                src="https://maps.google.com/maps?q=Souq+Al+Watiya+Maliya+Kuwait+City&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Open in Google Maps Floating Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-white/95 border border-[#C9A45C] text-xs font-['Poppins',sans-serif] text-[#1E4F8F] font-bold shadow-md hover:bg-[#FBF8F1] transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bottom Info Strip */}
            <div className="p-4 bg-white border-t border-[#E9DDCC] flex flex-wrap items-center justify-between gap-2 text-xs text-[#493B35]/80 shrink-0">
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="text-[11px]">Boutique Viewing: Daily Consultations</span>
              </div>
              <span className="text-[#8A4050] font-semibold text-[11px]">
                Personal Appointments Welcomed
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
