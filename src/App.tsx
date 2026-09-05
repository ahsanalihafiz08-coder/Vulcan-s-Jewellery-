import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroRingCarouselSection } from './components/HeroRingCarouselSection';
import { FeaturedHighlightsSection } from './components/FeaturedHighlightsSection';
import { ExtendedCatalogSection } from './components/ExtendedCatalogSection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DetailsPopUpModal } from './components/DetailsPopUpModal';
import { BookingModal } from './components/BookingModal';
import { WhatsAppChatbot } from './components/WhatsAppChatbot';
import { SavedItemsDrawer } from './components/SavedItemsDrawer';
import {
  CatalogItem,
  HERO_CAROUSEL_ITEMS,
  FEATURED_HIGHLIGHT_ITEMS,
  EXTENDED_CATALOG_ITEMS,
  GALLERY_ANIMATION_ITEMS,
} from './data/catalogImages';

export default function App() {
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<CatalogItem | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [itemForBooking, setItemForBooking] = useState<CatalogItem | null>(null);

  // Saved items state
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vulcan_saved_pieces');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  const allPiecesMap = useMemo(() => {
    const map = new Map<string, CatalogItem>();
    [...HERO_CAROUSEL_ITEMS, ...FEATURED_HIGHLIGHT_ITEMS, ...EXTENDED_CATALOG_ITEMS, ...GALLERY_ANIMATION_ITEMS].forEach(
      (item) => {
        map.set(item.id, item);
      }
    );
    return map;
  }, []);

  const toggleSaveItem = (item: CatalogItem) => {
    setSavedIds((prev) => {
      const exists = prev.includes(item.id);
      const next = exists ? prev.filter((id) => id !== item.id) : [...prev, item.id];
      try {
        localStorage.setItem('vulcan_saved_pieces', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const savedItems = useMemo(() => {
    return savedIds.map((id) => allPiecesMap.get(id)).filter((item): item is CatalogItem => Boolean(item));
  }, [savedIds, allPiecesMap]);

  const handleSelectPiece = (item: CatalogItem) => {
    setSelectedCatalogItem(item);
    setIsDetailsModalOpen(true);
  };

  const handleOpenBookingForPiece = (item: CatalogItem) => {
    setItemForBooking(item);
    setIsBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setItemForBooking(null);
    setIsBookingModalOpen(true);
  };

  const handleExplore = () => {
    const target = document.getElementById('hero-ring-carousel');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#493B35] font-['Manrope',sans-serif] selection:bg-[#C9A45C]/30 selection:text-[#1E4F8F] flex flex-col relative">
      
      {/* 1. Header Navbar with hamburger menu & saved items */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        
        {/* 1. HERO SECTION: 16:9 aspect, split left/right, no top/bottom spacing */}
        <Hero onExplore={handleExplore} onBookViewing={handleOpenGeneralBooking} />

        {/* 2. THE SOLITAIRE & ETERNITY SUITE: Continuous infinite animation directly above title */}
        <HeroRingCarouselSection
          onSelectPiece={handleSelectPiece}
          onBookViewing={handleOpenBookingForPiece}
        />

        {/* 3. EXPLORE OUR COLLECTIONS (9-image card grid only) */}
        <FeaturedHighlightsSection
          onSelectPiece={handleSelectPiece}
          onBookViewing={handleOpenBookingForPiece}
        />

        {/* 4. THE EXTENDED CATALOG (Desktop 3 cards/row, visible filters, left details, right booking & save) */}
        <ExtendedCatalogSection
          onSelectPiece={handleSelectPiece}
          onBookViewing={handleOpenBookingForPiece}
          isSaved={isSaved}
          onToggleSave={toggleSaveItem}
        />

        {/* 5. Curated Hand Crafted Jewellery In Motion (44-item gallery without outer box/border) */}
        <AboutSection
          onSelectPiece={handleSelectPiece}
          onBookViewing={handleOpenBookingForPiece}
        />

        {/* Store Location & Directions (Reduced map & address height) */}
        <StoreLocationSection />

        {/* 5. Editorial Boutique Gallery (Re-introduced below Google Maps with 3x3 grid) */}
        <GallerySection />

        {/* Customer Rating & Reflections (Width matched to Google map block width) */}
        <ReviewsSection />

        {/* Direct Boutique Contact & Appointment Scheduling */}
        <ContactSection />
      </main>

      {/* 6. Site Footer with official brand social colors */}
      <Footer />

      {/* Floating AI Chatbot Widget (Bottom-Right with WhatsApp Icon & Mobile Wishlist) */}
      <WhatsAppChatbot
        onOpenBookingModal={handleOpenGeneralBooking}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedIds.length}
      />

      {/* Details Pop-Up Modal */}
      <DetailsPopUpModal
        item={selectedCatalogItem}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        onBookViewing={(item) => handleOpenBookingForPiece(item)}
      />

      {/* Dedicated Viewing Appointment Booking Modal */}
      <BookingModal
        item={itemForBooking}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Saved Items Drawer */}
      <SavedItemsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItems={savedItems}
        onRemoveItem={(id) => {
          const item = allPiecesMap.get(id);
          if (item) toggleSaveItem(item);
        }}
        onBookViewing={(item) => {
          setIsSavedDrawerOpen(false);
          handleOpenBookingForPiece(item);
        }}
        onSelectPiece={(item) => {
          setIsSavedDrawerOpen(false);
          handleSelectPiece(item);
        }}
      />

    </div>
  );
}

