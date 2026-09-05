import { type MouseEvent } from 'react';
import { Sparkles, Phone, MapPin, Star, ArrowUp, Mail, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/jewelleryData';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rings Suite', href: '#hero-ring-carousel' },
    { name: 'Highlights', href: '#featured-highlights' },
    { name: 'Extended Catalog', href: '#extended-catalog' },
    { name: 'About Heritage', href: '#about' },
    { name: 'Boutique Gallery', href: '#gallery' },
    { name: 'Location & Boutique', href: '#location' },
    { name: 'Contact & Appointments', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Site Footer"
      className="bg-[#F3ECE2] text-[#493B35] border-t border-[#C9A45C]/30 pt-16 pb-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E9DDCC]">
          
          {/* Brand Info & Socials */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A45C] overflow-hidden bg-white shadow-xs shrink-0 flex items-center justify-center">
                <img
                  src="https://i.ibb.co/RpnZDfr7/Vulcan-s-Jewellery-luxury-logo-d-202609050402.jpg"
                  alt="Vulcan's Jewellery Brand Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold tracking-wider text-[#493B35]">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/80 max-w-sm leading-relaxed">
              An international luxury jewellery boutique destination where timeless elegance, welcoming hospitality, and enduring beauty meet.
            </p>

            <div className="flex items-center space-x-2 pt-1">
              <div className="flex text-[#C9A45C] space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C] text-[#C9A45C]" />
                ))}
              </div>
              <span className="text-xs font-['Poppins',sans-serif] font-bold text-[#1E4F8F]">
                {BUSINESS_INFO.rating} Customer Rating
              </span>
            </div>

            {/* Official Social & Direct Boutique Channel Logo Icons */}
            <div className="pt-3 space-y-2.5">
              <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-widest text-[#8A4050] font-bold block">
                Direct Boutique Channels
              </span>
              <div className="flex items-center space-x-3">
                
                {/* Official WhatsApp Logo Icon */}
                <a
                  href="https://wa.me/37745660298"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Concierge"
                  title="WhatsApp Concierge (+377 45 660 298)"
                  className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-108 cursor-pointer group"
                >
                  <WhatsAppIcon className="w-5 h-5" fill="#FFFFFF" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/vulcanjewelers?igsi=eGY3cGI5Njc3dTky"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Official"
                  title="Instagram"
                  className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-108 cursor-pointer group"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Official"
                  title="Facebook"
                  className="w-11 h-11 rounded-full bg-[#1877F2] hover:bg-[#0c63d4] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-108 cursor-pointer group"
                >
                  <Facebook className="w-5 h-5 fill-white text-white" />
                </a>

                {/* Email */}
                <a
                  href="mailto:inquiry@vulcansjewellery.com"
                  aria-label="Send email inquiry to Vulcan's Jewellery"
                  title="Email Inquiry"
                  className="w-11 h-11 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-108 cursor-pointer group"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-['Poppins',sans-serif] font-bold text-[#1E4F8F]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-['Poppins',sans-serif]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#493B35]/80 hover:text-[#1E4F8F] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-['Poppins',sans-serif] font-bold text-[#1E4F8F]">
              Boutique Contact
            </h4>
            <div className="space-y-3.5 text-sm font-['Manrope',sans-serif]">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#493B35]/65 block font-['Poppins',sans-serif]">
                    Telephone & WhatsApp
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-bold text-[#1E4F8F] hover:text-[#143868] transition-colors text-base"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#8A4050] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#493B35]/65 block font-['Poppins',sans-serif]">
                    Kuwait Boutique Location
                  </span>
                  <p className="text-[#493B35]/85 leading-relaxed font-medium">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Manrope',sans-serif] text-[#493B35]/70">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <span className="text-[#8A4050] font-medium">Boutique Luxury Experience</span>
            
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Return to top of page"
              className="p-2 rounded-full border border-[#C9A45C]/50 bg-white hover:bg-[#1E4F8F] hover:text-white hover:border-[#1E4F8F] transition-all cursor-pointer shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
