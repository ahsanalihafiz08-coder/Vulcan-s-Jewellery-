import { BusinessInfo, CollectionItem, JewelleryPiece, GalleryItem, ReviewItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Vulcan's Jewellery",
  category: "Jewellery Store",
  phone: "+377 45 660 298",
  address: "Ground floor, 116, Souq Al Watiya, Maliya, Kuwait City, Kuwait",
  rating: "5.0 / 5.0",
  ratingScore: 5.0,
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'rings',
    name: 'Rings',
    tagline: 'Timeless Solitaires & Bands',
    description: 'Timeless pieces designed to complement every occasion.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Gold solitaire ring set on pearl ivory satin',
    badge: 'Signature Selection'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Graceful Pendants & Chains',
    description: 'Elegant designs that add sophistication to your look.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Delicate gold pendant necklace resting on warm stone',
    badge: 'Curated Elegance'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Studs, Drops & Hoops',
    description: 'Refined jewellery for everyday elegance and special moments.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80',
    alt: 'Champagne gold drop earrings in warm light',
    badge: 'Artisanal Finish'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    tagline: 'Bangles & Linked Statements',
    description: 'Beautiful finishing touches for your personal style.',
    image: 'https://images.unsplash.com/photo-1611591475870-71a74288b8d9?auto=format&fit=crop&w=1000&q=80',
    alt: 'Refined gold bangle bracelet with delicate stones',
    badge: 'Classic Charm'
  },
  {
    id: 'fine-jewellery',
    name: 'Fine Jewellery',
    tagline: 'Masterpiece Creations',
    description: 'Sophisticated pieces presented with a luxury aesthetic.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80',
    alt: 'Heirloom diamond and sapphire fine jewellery necklace',
    badge: 'High Jewellery'
  },
  {
    id: 'special-occasion',
    name: 'Special Occasion',
    tagline: 'Moments to Remember',
    description: 'Jewellery for moments worth remembering.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Brilliant sapphire and diamond statement cluster for special occasions',
    badge: 'Celebration'
  }
];

export const FEATURED_PIECES: JewelleryPiece[] = [
  {
    id: 'aurora-ring',
    name: 'The Celestia Solitaire',
    category: 'Rings',
    description: 'A radiant centre stone embraced by a delicate champagne-gold band, engineered for luminous presence.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
    alt: 'The Celestia Solitaire gold ring with brilliant stone',
    material: 'Warm Champagne Gold Finish & Pavé Setting',
    details: [
      'Hand-finished prong setting',
      'Comfort-fit tapered inner silhouette',
      'Harmonious warm reflections under natural light'
    ],
    stylingNotes: 'Pair alongside a fine gold cuff or wear alone as a distinguished personal emblem.'
  },
  {
    id: 'soliel-necklace',
    name: 'Aura Cascade Pendant',
    category: 'Necklaces',
    description: 'A harmonious drop pendant that captures natural light with subtle movement and graceful balance.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Aura Cascade Pendant necklace in champagne gold',
    material: 'Delicate Link Chain with Sculpted Drop Setting',
    details: [
      'Adjustable chain extension for versatile neckline draping',
      'Fine-gauge high polish links',
      'Designed for both relaxed daytime and gala wear'
    ],
    stylingNotes: 'Complements open neckline silhouettes or silk evening tailoring.'
  },
  {
    id: 'lumiere-earrings',
    name: 'Serenade Drop Earrings',
    category: 'Earrings',
    description: 'Fluid drop silhouettes that frame the face with gentle champagne-gold contours and refined light play.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85',
    alt: 'Serenade Drop Earrings with fluid champagne curves',
    material: 'Sculptural Gold Form with Balanced Weight',
    details: [
      'Lightweight ergonomic post mechanism',
      'Polished exterior with subtle matte interior curve',
      'Timeless proportions suitable for all-day comfort'
    ],
    stylingNotes: 'Pairs effortlessly with an upswept hairstyle and soft neutral evening palette.'
  },
  {
    id: 'velvet-bracelet',
    name: 'Elysian Ribbon Bangle',
    category: 'Bracelets',
    description: 'An architectural wrist ornament sculpted with smooth ergonomic curves and quiet luxury radiance.',
    image: 'https://images.unsplash.com/photo-1611591475870-71a74288b8d9?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elysian Ribbon Bangle on warm ivory surface',
    material: 'Warm Polished Bangle with Secure Clasp',
    details: [
      'Precision concealed pressure clasp',
      'Contoured oval shape for natural wrist resting',
      'Sleek minimal profile designed for layering'
    ],
    stylingNotes: 'Stack beside a classic timepiece or a delicate pearl strand.'
  },
  {
    id: 'imperial-fine',
    name: 'Sovereign Royal Collet',
    category: 'Fine Jewellery',
    description: 'A masterpiece created for landmark celebrations, blending traditional poise with modern symmetry.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85',
    alt: 'Sovereign Royal Collet fine necklace display',
    material: 'Intricate Cluster Setting & Multi-Tier Framework',
    details: [
      'Artisanal assembly with individually secured stones',
      'Supple articulation that rests flush against the collarbone',
      'Exclusive boutique piece'
    ],
    stylingNotes: 'Reserved for grand gatherings and commemorative milestones.'
  },
  {
    id: 'sapphire-halo',
    name: 'Nocturne Sapphire Cluster',
    category: 'Special Occasion',
    description: 'A deep sapphire-blue focal jewel surrounded by an orb of luminous champagne-toned accents.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Nocturne Sapphire Cluster statement piece',
    material: 'Deep Sapphire Blue Hue with Champagne Gold Framing',
    details: [
      'Rich contrast setting accentuating the deep oceanic blue',
      'Heirloom silhouette crafted for lasting legacy',
      'Hand-inspected optical clarity'
    ],
    stylingNotes: 'Ideal companion for velvet, cream linen, or royal blue fabrics.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Gold Huggie Earrings Resting',
    category: 'Earrings',
    image: 'https://i.ibb.co/67sd8twJ/Gold-huggie-earrings-resting-202609032113.jpg',
    alt: 'Gold huggie earrings resting in boutique lighting',
    aspect: 'square',
  },
  {
    id: 'g-2',
    title: 'Gold Wrist Bangle on Pillow',
    category: 'Bracelets',
    image: 'https://i.ibb.co/nqfC609P/Gold-wrist-bangle-on-pillow-202609040414.jpg',
    alt: 'Sculptural gold wrist bangle resting on velvet pillow',
    aspect: 'square',
  },
  {
    id: 'g-3',
    title: 'Marquise Sapphire Ring on Tile',
    category: 'Rings',
    image: 'https://i.ibb.co/j99DCVkt/Marquise-sapphire-ring-on-tile-202609040414.jpg',
    alt: 'Marquise sapphire and diamond ring set on ivory tile',
    aspect: 'square',
  },
  {
    id: 'g-4',
    title: 'Gold Locket Resting on Cloth',
    category: 'Necklaces',
    image: 'https://i.ibb.co/RTqwpK8m/Gold-locket-resting-on-cloth-202609032114.jpg',
    alt: 'Handcrafted gold heirloom locket on silk cloth',
    aspect: 'square',
  },
  {
    id: 'g-5',
    title: 'Gold Teardrop Earrings on Podium',
    category: 'Earrings',
    image: 'https://i.ibb.co/kgvvVqh9/Gold-teardrop-earrings-on-podium-202609032114-1.jpg',
    alt: 'Gold teardrop earrings displayed on architectural podium',
    aspect: 'square',
  },
  {
    id: 'g-6',
    title: 'Gold Neckwire Necklace on Display',
    category: 'Necklaces',
    image: 'https://i.ibb.co/n8tqbqvQ/Gold-neckwire-necklace-on-display-202609040414.jpg',
    alt: 'Fluid gold neckwire necklace on boutique bust',
    aspect: 'square',
  },
  {
    id: 'g-7',
    title: 'Tanzanite Diamond Ring in Gold',
    category: 'Rings',
    image: 'https://i.ibb.co/b4yM3My/Tanzanite-diamond-ring-in-gold-202609032114.jpg',
    alt: 'Vibrant tanzanite and diamond cluster ring in 18K gold',
    aspect: 'square',
  },
  {
    id: 'g-8',
    title: 'Gold Bracelet on Velvet Pad',
    category: 'Bracelets',
    image: 'https://i.ibb.co/KjZqTCkS/Gold-bracelet-on-velvet-pad-202609032114.jpg',
    alt: 'Artisanal gold link bracelet on boutique velvet pad',
    aspect: 'square',
  },
  {
    id: 'g-9',
    title: 'Diamond Drop Earrings on Slab',
    category: 'Earrings',
    image: 'https://i.ibb.co/VWQkG1mw/Diamond-drop-earrings-on-slab-202609032115.jpg',
    alt: 'Brilliant cut diamond drop earrings on natural stone slab',
    aspect: 'square',
  },
];

export const REVIEWS_SAMPLE: ReviewItem[] = [
  {
    id: 'rev-1',
    initials: 'M. K.',
    rating: 5.0,
    highlight: 'Personal Attention & Exquisite Craft',
    patronNote: 'Visiting the boutique was a serene and memorable experience. The pieces possess a delicate weight and undeniable sophistication that immediately stands apart.',
    dateLabel: 'Boutique Visitor Experience'
  },
  {
    id: 'rev-2',
    initials: 'S. A.',
    rating: 5.0,
    highlight: 'A Truly Elegant Selection',
    patronNote: 'The guidance provided was warm, considerate, and unhurried. Every piece shown felt carefully chosen with a refined aesthetic and beautiful warm champagne tones.',
    dateLabel: 'Boutique Visitor Experience'
  },
  {
    id: 'rev-3',
    initials: 'N. F.',
    rating: 5.0,
    highlight: 'Flawless Presentation & Welcoming Ambience',
    patronNote: 'The store ambiance at Souq Al Watiya is both inviting and luxurious. You are welcomed with gracious hospitality and an extraordinary eye for elegance.',
    dateLabel: 'Boutique Visitor Experience'
  },
  {
    id: 'rev-4',
    initials: 'D. H.',
    rating: 5.0,
    highlight: 'A Piece Worth Remembering',
    patronNote: 'Purchasing jewellery here feels like preserving a personal milestone. The attention to detail and radiant quality of the pieces are second to none.',
    dateLabel: 'Boutique Visitor Experience'
  }
];
