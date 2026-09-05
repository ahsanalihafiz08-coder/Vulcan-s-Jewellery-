import { useState, useEffect, type MouseEvent } from 'react';
import { Sparkles, Menu, X, Heart, ChevronRight, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface NavbarProps {
  onOpenBooking: () => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export function Navbar({ onOpenBooking, savedCount, onOpenSaved }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let prevScrolled = window.scrollY > 40;
    setIsScrolled(prevScrolled);
    let ticking = false;
    let scrollEndTimer: number | undefined;

    const handleScroll = () => {
      // Toggle high-performance scrolling mode to disable expensive backdrop-filters during active scroll
      if (!document.body.classList.contains('is-scrolling')) {
        document.body.classList.add('is-scrolling');
      }
      window.clearTimeout(scrollEndTimer);
      scrollEndTimer = window.setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 100);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          if (scrolled !== prevScrolled) {
            prevScrolled = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(scrollEndTimer);
      document.body.classList.remove('is-scrolling');
    };
  }, []);

  // Use IntersectionObserver for 60fps section tracking without synchronous layout reflows
  useEffect(() => {
    const sectionIds = ['home', 'hero-ring-carousel', 'featured-highlights', 'extended-catalog', 'about', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rings Suite', href: '#hero-ring-carousel' },
    { name: 'Highlights', href: '#featured-highlights' },
    { name: 'Catalog', href: '#extended-catalog' },
    { name: 'About & Gallery', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Specific structured links for the navigation drawer
  const drawerLinks = [
    { name: 'Home', href: '#home', tag: 'Main Showcase' },
    { name: 'Categories', href: '#hero-ring-carousel', tag: 'Solitaire & Eternity Suite' },
    { name: 'Catalog', href: '#extended-catalog', tag: 'Extended Fine Jewellery' },
    { name: 'Gallery', href: '#about', tag: 'Handcrafted in Motion' },
    { name: 'Location', href: '#location', tag: 'Souq Al Watiya Boutique' },
    { name: 'Contact', href: '#contact', tag: 'Hours & Consultations' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        menuOpen || isScrolled
          ? 'bg-[#FBF8F1] backdrop-blur-md border-b border-[#C9A45C]/30 shadow-md py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-2.5 sm:space-x-3 focus:outline-none shrink-0"
            id="brand-logo-link"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C9A45C] overflow-hidden bg-white shadow-xs group-hover:border-[#1E4F8F] transition-all duration-300 shrink-0 flex items-center justify-center">
              <img
                src="https://i.ibb.co/RpnZDfr7/Vulcan-s-Jewellery-luxury-logo-d-202609050402.jpg"
                alt="Vulcan's Jewellery Brand Logo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider leading-none transition-colors duration-300 ${
                menuOpen || isScrolled ? 'text-[#493B35]' : 'text-white'
              }`}>
                Vulcan's
              </span>
              <span className={`text-[9px] sm:text-[10px] tracking-[0.24em] uppercase font-['Poppins',sans-serif] font-semibold mt-0.5 transition-colors duration-300 ${
                menuOpen || isScrolled ? 'text-[#1E4F8F]' : 'text-[#DFCA95]'
              }`}>
                Jewellery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7 shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-xs uppercase tracking-wider font-['Poppins',sans-serif] relative py-1 transition-all duration-300 ${
                    isActive
                      ? menuOpen || isScrolled ? 'text-[#1E4F8F] font-bold' : 'text-[#DFCA95] font-bold'
                      : menuOpen || isScrolled
                      ? 'text-[#493B35]/80 hover:text-[#1E4F8F]'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A45C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Saved Items Heart Icon & 3-Line Hamburger Menu Icon */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0 relative z-50">
            
            {/* Saved Items Heart Icon Button - Consistently high-contrast gold/dark-brown across all scroll positions */}
            <button
              type="button"
              onClick={onOpenSaved}
              id="cta-nav-saved-items"
              aria-label={`Saved items (${savedCount})`}
              className="relative p-2.5 rounded-full border-2 border-[#C9A45C] bg-[#241C18] text-[#DFCA95] hover:bg-[#35261F] hover:border-[#DFCA95] transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg group"
            >
              <Heart
                className={`w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-all duration-200 group-hover:scale-110 ${
                  savedCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-[#DFCA95]'
                }`}
              />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#241C18] shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            {/* 3-Line Hamburger Menu Icon on Desktop View - High Contrast & Never Transparent */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              id="desktop-hamburger-menu-toggle"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="p-2.5 rounded-full border-2 border-[#C9A45C] bg-[#241C18] text-[#DFCA95] hover:bg-[#35261F] hover:text-white hover:border-[#DFCA95] transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center relative z-50 group"
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-[#DFCA95] group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
              ) : (
                <Menu className="w-5 h-5 text-[#DFCA95] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Mobile Right Controls with High-Contrast Pill Badges and Z-Index */}
          <div className="flex items-center sm:hidden gap-2.5 relative z-50 shrink-0">
            {/* Mobile Saved Heart Button */}
            <button
              type="button"
              onClick={onOpenSaved}
              aria-label={`Saved items (${savedCount})`}
              className="relative p-2.5 rounded-full border-2 border-[#C9A45C] bg-[#241C18] text-[#DFCA95] hover:bg-[#35261F] transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-[#DFCA95]'}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button with Maximum Contrast & Bold Three Lines */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-full border-2 border-[#C9A45C] bg-[#241C18] text-[#DFCA95] hover:bg-[#35261F] hover:text-white hover:border-[#DFCA95] transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center relative z-50 group"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-[#DFCA95] group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
              ) : (
                <Menu className="w-4 h-4 text-[#DFCA95] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Backdrop Overlay when Menu Drawer is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[56px] sm:top-[68px] bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Seamless Top-Anchored Navigation Drawer (Slides directly down from header) */}
      {menuOpen && (
        <div
          id="main-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="absolute top-full left-0 right-0 z-50 bg-[#FBF8F1] border-b-2 border-[#C9A45C] shadow-2xl transition-all duration-300 animate-in slide-in-from-top-2 max-h-[calc(100dvh-56px)] sm:max-h-[calc(100dvh-68px)] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
            
            {/* Category Links Grid with Balanced Padding, Font Hierarchy & No Text Cut-Off */}
            <div className="mb-4">
              <span className="text-[11px] font-['Poppins',sans-serif] uppercase tracking-[0.2em] text-[#8A4050] font-bold block mb-3.5">
                Boutique Directory & Collections
              </span>
              <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" aria-label="Drawer Navigation Links">
                {drawerLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group flex items-center justify-between px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border transition-all duration-200 ${
                        isActive
                          ? 'bg-[#1E4F8F]/10 border-[#1E4F8F]/40 text-[#1E4F8F] shadow-xs'
                          : 'bg-white/80 border-[#E9DDCC] text-[#493B35] hover:bg-white hover:border-[#C9A45C] hover:shadow-md'
                      }`}
                    >
                      <div className="flex flex-col min-w-0 pr-3">
                        <span className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold tracking-wide group-hover:text-[#1E4F8F] transition-colors leading-tight truncate">
                          {link.name}
                        </span>
                        <span className="text-xs font-['Poppins',sans-serif] text-[#8A4050] font-medium leading-normal mt-0.5 truncate">
                          {link.tag}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F3ECE2] group-hover:bg-[#1E4F8F] flex items-center justify-center transition-colors shrink-0">
                        <ChevronRight className="w-4 h-4 text-[#493B35] group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Three Equalized Action Buttons with Simplified WhatsApp Concierge */}
            <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[#E9DDCC]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                
                {/* Button 1: View Saved Wishlist */}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenSaved();
                  }}
                  id="drawer-saved-wishlist-btn"
                  className="w-full h-12 sm:h-13 px-4 rounded-xl bg-white border-2 border-[#C9A45C] text-[#493B35] text-xs sm:text-sm font-['Poppins',sans-serif] font-semibold tracking-wide flex items-center justify-center gap-2.5 hover:bg-[#F3ECE2] transition-all shadow-xs cursor-pointer group"
                >
                  <Heart className={`w-4 h-4 shrink-0 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}`} />
                  <span className="truncate">Saved Wishlist {savedCount > 0 ? `(${savedCount})` : ''}</span>
                </button>

                {/* Button 2: WhatsApp Concierge (Concise, no phone number, equalized height & padding) */}
                <a
                  href="https://wa.me/37745660298"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="drawer-whatsapp-concierge-btn"
                  className="w-full h-12 sm:h-13 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-['Poppins',sans-serif] font-semibold tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer border-2 border-[#25D366] group"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" fill="#FFFFFF" />
                  <span className="truncate">WhatsApp Concierge</span>
                </a>

                {/* Button 3: Book Private Boutique Visit (Equalized height & padding) */}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenBooking();
                  }}
                  id="drawer-book-visit-btn"
                  className="w-full h-12 sm:h-13 px-4 rounded-xl bg-gradient-to-r from-[#143868] via-[#1E4F8F] to-[#143868] hover:from-[#1E4F8F] hover:to-[#2A6AB8] text-white text-xs sm:text-sm font-['Poppins',sans-serif] font-semibold tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer border-2 border-[#C9A45C] group"
                >
                  <Calendar className="w-4 h-4 text-[#DFCA95] shrink-0" />
                  <span className="truncate">Book Boutique Visit</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#DFCA95] shrink-0 group-hover:rotate-12 transition-transform" />
                </button>

              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

