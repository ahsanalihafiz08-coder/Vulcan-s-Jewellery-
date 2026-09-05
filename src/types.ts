export interface BusinessInfo {
  name: string;
  category: string;
  phone: string;
  address: string;
  rating: string;
  ratingScore: number;
}

export interface CollectionItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  tagline: string;
}

export interface JewelleryPiece {
  id: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Fine Jewellery' | 'Special Occasion';
  description: string;
  image: string;
  alt: string;
  material: string;
  details: string[];
  stylingNotes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Jewellery' | 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Boutique' | 'Fine Jewellery';
  image: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface ReviewItem {
  id: string;
  initials: string;
  patronNote: string;
  rating: number;
  highlight: string;
  dateLabel: string;
}
