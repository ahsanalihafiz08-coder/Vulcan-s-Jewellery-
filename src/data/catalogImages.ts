export function extractTitleFromUrl(url: string): string {
  try {
    const filename = url.substring(url.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '');
    // Remove date stamps like -202609032045 or -202609031956-1
    const clean = filename.replace(/[-_]\d{8,}(?:[-_]\d+)?$/, '');
    const spaced = clean.replace(/[-_]+/g, ' ').trim();
    if (!spaced) return 'Bespoke Jewellery';
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  } catch {
    return 'Bespoke Jewellery';
  }
}

export interface CatalogItem {
  id: string;
  url: string;
  title: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Fine Jewellery' | 'Special Occasion';
  material: string;
  price: string;
  description: string;
  details: string[];
  stylingNotes: string;
}

export function createCatalogItem(url: string, index: number, prefix: string, forcedCategory?: CatalogItem['category']): CatalogItem {
  const title = extractTitleFromUrl(url);
  const lowerTitle = title.toLowerCase();

  let category: CatalogItem['category'] = forcedCategory || 'Fine Jewellery';
  if (!forcedCategory) {
    if (
      lowerTitle.includes('earring') ||
      lowerTitle.includes('earrings') ||
      lowerTitle.includes('stud') ||
      lowerTitle.includes('hoop') ||
      lowerTitle.includes('huggie') ||
      lowerTitle.includes('chandelier') ||
      lowerTitle.includes('threader') ||
      lowerTitle.includes('teardrop') ||
      lowerTitle.includes('drop')
    ) {
      category = 'Earrings';
    } else if (
      lowerTitle.includes('ring') ||
      lowerTitle.includes('band') ||
      lowerTitle.includes('solitaire') ||
      lowerTitle.includes('signet')
    ) {
      category = 'Rings';
    } else if (
      lowerTitle.includes('bracelet') ||
      lowerTitle.includes('bangle') ||
      lowerTitle.includes('cuff') ||
      lowerTitle.includes('tennis') ||
      lowerTitle.includes('wrist')
    ) {
      category = 'Bracelets';
    } else if (
      lowerTitle.includes('necklace') ||
      lowerTitle.includes('pendant') ||
      lowerTitle.includes('choker') ||
      lowerTitle.includes('locket') ||
      lowerTitle.includes('neckwire') ||
      lowerTitle.includes('collar')
    ) {
      category = 'Necklaces';
    } else if (lowerTitle.includes('set')) {
      category = 'Special Occasion';
    }
  }

  let material = '18K Yellow Gold';
  if (lowerTitle.includes('rose gold')) material = '18K Rose Gold & Diamonds';
  else if (lowerTitle.includes('tricolor') || lowerTitle.includes('three-tone') || lowerTitle.includes('three tone')) material = '18K Tri-Color Gold';
  else if (lowerTitle.includes('emerald')) material = '18K Yellow Gold with Natural Colombian Emeralds';
  else if (lowerTitle.includes('ruby')) material = '18K Gold with Fine Cut Ruby';
  else if (lowerTitle.includes('sapphire')) material = '18K Gold with Deep Velvet Sapphire';
  else if (lowerTitle.includes('tanzanite')) material = '18K Yellow Gold with Certified Tanzanite';
  else if (lowerTitle.includes('pearl')) material = '18K Gold with Luminous South Sea Pearl';
  else if (lowerTitle.includes('onyx')) material = '18K Solid Gold with Jet Black Onyx';
  else if (lowerTitle.includes('opal')) material = '18K Gold with Natural Australian Opal';
  else if (lowerTitle.includes('diamond') || lowerTitle.includes('pave') || lowerTitle.includes('eternity')) material = '18K Solid Gold & Brilliant-Cut Diamonds';

  // Proportional boutique luxury pricing in US Dollars ($)
  let price = '$2,050';
  const hash = (index * 73 + title.length * 17) % 10;
  if (category === 'Rings') {
    if (lowerTitle.includes('diamond') || lowerTitle.includes('solitaire')) price = `$${(2450 + hash * 190).toLocaleString()}`;
    else if (lowerTitle.includes('emerald') || lowerTitle.includes('sapphire') || lowerTitle.includes('ruby')) price = `$${(2890 + hash * 160).toLocaleString()}`;
    else price = `$${(1380 + hash * 110).toLocaleString()}`;
  } else if (category === 'Earrings') {
    price = `$${(1280 + hash * 130).toLocaleString()}`;
  } else if (category === 'Necklaces') {
    price = `$${(2200 + hash * 240).toLocaleString()}`;
  } else if (category === 'Bracelets') {
    price = `$${(1890 + hash * 210).toLocaleString()}`;
  } else {
    price = `$${(2680 + hash * 260).toLocaleString()}`;
  }

  return {
    id: `${prefix}-${index + 1}`,
    url,
    title,
    category,
    material,
    price,
    description: `A masterwork of Kuwaiti boutique craftsmanship, this ${title.toLowerCase()} captures luminous reflections and sophisticated proportions for an unforgettable presence.`,
    details: [
      'Individually inspected and hallmarked gold',
      'Artisanal prong and bezel surface finishing',
      'Ergonomically contoured for all-day comfort',
      'Accompanied by Vulcan’s Jewellery authenticity dossier',
    ],
    stylingNotes: `Pairs effortlessly with both daytime silk attire and gala evening wear for refined, understated glamour.`,
  };
}

// 1. HERO CAROUSEL SECTION (24 Image Cards)
export const HERO_CAROUSEL_URLS: string[] = [
  'https://i.ibb.co/VW2NWwFK/Diamond-ring-on-pedestal-202609032045.jpg',
  'https://i.ibb.co/2bKpcz8/Stacking-gold-rings-on-surface-202609032045.jpg',
  'https://i.ibb.co/tTsPDfFZ/Gold-ring-with-diamond-accents-202609032045.jpg',
  'https://i.ibb.co/j94wRWs6/Gold-ring-with-micro-pave-202609032045.jpg',
  'https://i.ibb.co/N68CKS2S/Classic-three-stone-diamond-ring-202609032045.jpg',
  'https://i.ibb.co/Kp4mZ38X/Diamond-eternity-band-on-silk-202609032045.jpg',
  'https://i.ibb.co/mVHwT640/Ruby-gemstone-ring-on-block-202609032046.jpg',
  'https://i.ibb.co/Xr55NmZW/Gold-ring-with-diamond-surface-202609032046.jpg',
  'https://i.ibb.co/C5M36ycd/Gold-lattice-diamond-dome-ring-202609032046.jpg',
  'https://i.ibb.co/mrG191L3/Diamond-ring-on-silk-fabric-202609032042.jpg',
  'https://i.ibb.co/JR1Fbn2v/Wavy-band-ring-on-marble-202609032042.jpg',
  'https://i.ibb.co/sd9sXpcc/Wavy-band-ring-on-surface-202609032043.jpg',
  'https://i.ibb.co/36S6tt9/Three-tone-wavy-band-ring-202609032043.jpg',
  'https://i.ibb.co/Dg43D3TP/Gold-open-cuff-diamond-ring-disp-202609032043.jpg',
  'https://i.ibb.co/jvwmP9N3/Gold-open-cuff-ring-displayed-202609032043.jpg',
  'https://i.ibb.co/1GHTVcPX/Vintage-oval-diamond-ring-on-202609032043.jpg',
  'https://i.ibb.co/cKf6ZqTD/Gold-ring-with-diamond-drop-202609032044.jpg',
  'https://i.ibb.co/gZMWzhJM/Diamond-engagement-ring-on-cloth-202609032044.jpg',
  'https://i.ibb.co/p61x8kym/Modern-bypass-ring-with-diamonds-202609032044.jpg',
  'https://i.ibb.co/SwBqtKCp/Modern-bypass-ring-with-diamonds-202609032044-1.jpg',
  'https://i.ibb.co/1tpDGy0b/Gold-diamond-band-ring-on-202609032044.jpg',
  'https://i.ibb.co/5h0T2xdF/Diamond-ring-on-beige-backdrop-202609032045.jpg',
  'https://i.ibb.co/8DNDs7wj/Three-gold-rings-on-surface-202609032045.jpg',
  'https://i.ibb.co/G4pp4xXp/Gold-rings-with-accent-diamonds-202609032045.jpg',
];

export const HERO_CAROUSEL_ITEMS: CatalogItem[] = HERO_CAROUSEL_URLS.map((url, i) =>
  createCatalogItem(url, i, 'hero-ring', 'Rings')
);

// 2. FEATURED HIGHLIGHTS (9 CARD GRID SECTION)
export const FEATURED_HIGHLIGHT_URLS: string[] = [
  'https://i.ibb.co/TJnyKGv/Gold-charm-bracelet-on-silk-202609032114.jpg',
  'https://i.ibb.co/VWS8Y6tf/Gold-charm-bracelet-on-silk-202609032114-1.jpg',
  'https://i.ibb.co/VWQkG1mw/Diamond-drop-earrings-on-slab-202609032115.jpg',
  'https://i.ibb.co/YFXxmxmN/Gold-signet-ring-with-onyx-202609032115.jpg',
  'https://i.ibb.co/FkrggVDj/Gold-chain-ankle-bracelet-displayed-202609032115.jpg',
  'https://i.ibb.co/LzVRQjR3/Diamond-eternity-ring-on-satin-202609032115.jpg',
  'https://i.ibb.co/svtd5DjF/Gold-crescent-moon-earrings-202609032115.jpg',
  'https://i.ibb.co/4zCL3hG/Gold-jewelry-set-displayed-202609032115.jpg',
  'https://i.ibb.co/LVMZ2qC/Gold-jewelry-set-displayed-202609032115-1.jpg',
];

export const FEATURED_HIGHLIGHT_ITEMS: CatalogItem[] = FEATURED_HIGHLIGHT_URLS.map((url, i) =>
  createCatalogItem(url, i, 'featured-highlight')
);

// 3. EXTENDED CATALOG SECTION (50 IMAGE GRID)
export const EXTENDED_CATALOG_URLS: string[] = [
  'https://i.ibb.co/j96j0pwp/Gold-bangle-bracelet-on-linen-202609031956-1.jpg',
  'https://i.ibb.co/36S6tt9/Three-tone-wavy-band-ring-202609032043.jpg',
  'https://i.ibb.co/BHzpTvLL/Gold-bangle-bracelet-on-linen-202609031956-2.jpg',
  'https://i.ibb.co/pj7y5cHF/Gold-bangle-bracelet-on-linen-202609031956-3.jpg',
  'https://i.ibb.co/pv5nSVzT/Gold-stacking-bracelets-with-pearls-202609031956.jpg',
  'https://i.ibb.co/DPptYdFw/Gold-stacking-bracelets-with-pearls-202609031956-1.jpg',
  'https://i.ibb.co/1JQP0rjW/Gold-stacking-bracelets-with-pearls-202609031956-2.jpg',
  'https://i.ibb.co/NnLm8Bss/Gold-hoop-earrings-with-charms-202609031956.jpg',
  'https://i.ibb.co/Mx37gNW9/Gold-hoop-earrings-with-charms-202609031956-1.jpg',
  'https://i.ibb.co/dnNkqdC/Gold-celestial-hoop-earrings-202609031957.jpg',
  'https://i.ibb.co/3mWPvcn3/Gold-chain-bracelet-on-pillow-202609031957.jpg',
  'https://i.ibb.co/yFzC2yRj/Gold-chain-bracelet-on-pillow-202609031957-1.jpg',
  'https://i.ibb.co/b5XKx9Pw/Gold-signet-ring-on-marble-202609031957.jpg',
  'https://i.ibb.co/4RvXj8Vh/Gold-signet-ring-on-marble-202609031957-1.jpg',
  'https://i.ibb.co/SXCrDNRg/Gold-pendant-necklace-on-silk-202609031957.jpg',
  'https://i.ibb.co/DfWSZQKx/Gold-ruby-pendant-on-silk-202609031957.jpg',
  'https://i.ibb.co/HDYM6P36/Gold-pendant-necklace-on-silk-202609031957-1.jpg',
  'https://i.ibb.co/PGjH0Drs/Gold-ring-with-green-gemstone-202609031954.jpg',
  'https://i.ibb.co/xqPYyS4n/Gold-ring-with-green-gemstone-202609031954-1.jpg',
  'https://i.ibb.co/HLh96NjL/Gold-ring-with-green-gemstone-202609031954-2.jpg',
  'https://i.ibb.co/XZyYtR20/Yellow-gold-emerald-cuff-ring-202609031954.jpg',
  'https://i.ibb.co/S7tqkSNx/Gold-bypass-cuff-ring-emeralds-202609031954.jpg',
  'https://i.ibb.co/LH97g45/Yellow-gold-emerald-cuff-ring-202609031954-1.jpg',
  'https://i.ibb.co/bRHcN4ZH/Gold-chain-necklace-with-emeralds-202609031954.jpg',
  'https://i.ibb.co/KjKGt4PG/Layered-gold-necklace-with-stones-202609031954.jpg',
  'https://i.ibb.co/gbhxG4bv/Gold-chain-necklace-with-emeralds-202609031955.jpg',
  'https://i.ibb.co/jZ5ZTMYy/Gold-hoop-earrings-resting-side-202609031955.jpg',
  'https://i.ibb.co/gbjqHhNQ/Gold-collar-necklace-on-display-202609031955.jpg',
  'https://i.ibb.co/0RfFRrnj/Gold-ring-on-stone-pedestal-202609031955.jpg',
  'https://i.ibb.co/h1MQRsWp/Gold-ring-on-stone-pedestal-202609031955-1.jpg',
  'https://i.ibb.co/XfntqkXD/Gold-ring-on-stone-pedestal-202609031955-2.jpg',
  'https://i.ibb.co/8nLkW1CD/Gold-ring-on-stone-pedestal-202609031955-3.jpg',
  'https://i.ibb.co/05sR47k/Gold-bangle-bracelet-on-linen-202609031956.jpg',
  'https://i.ibb.co/RkfhwQkg/Wavy-gold-band-ring-202609031950.jpg',
  'https://i.ibb.co/mFPv6qBm/Tricolor-gold-wavy-band-ring-202609031950.jpg',
  'https://i.ibb.co/Rkwh2pDk/Diamond-ring-on-silk-fabric-202609031951.jpg',
  'https://i.ibb.co/TBX6Btxb/Gold-necklace-with-gemstone-pendant-202609031951-2.jpg',
  'https://i.ibb.co/6c9cW7n8/Gold-hoop-earrings-arranged-on-202609031952.jpg',
  'https://i.ibb.co/BK48kBs7/Gold-chain-bracelet-on-board-202609031952.jpg',
  'https://i.ibb.co/1fmrfv4G/Two-gold-bangles-displayed-202609031952.jpg',
  'https://i.ibb.co/Q3jY7mN7/Gold-open-cuff-ring-on-marble-202609031953.jpg',
  'https://i.ibb.co/C371ymgp/Gold-open-cuff-ring-on-marble-202609031953-1.jpg',
  'https://i.ibb.co/S7WZDYRB/Gold-diamond-open-cuff-ring-on-202609031953.jpg',
  'https://i.ibb.co/3969w595/Gold-ring-with-diamond-202609031953.jpg',
  'https://i.ibb.co/prQTTKvM/Gold-ring-with-diamond-202609031953-1.jpg',
  'https://i.ibb.co/239KCQ28/Gold-ring-with-diamond-202609031953-2.jpg',
  'https://i.ibb.co/0VtLq0rg/Gold-drop-earrings-on-marble-202609031953.jpg',
  'https://i.ibb.co/Y40nYg2S/Gold-drop-earrings-on-marble-202609031953-1.jpg',
  'https://i.ibb.co/wZL8mCw2/Gold-drop-earrings-on-marble-202609031953-2.jpg',
  'https://i.ibb.co/4R4qwkfz/Gold-drop-earrings-on-marble-202609031954.jpg',
];

export const EXTENDED_CATALOG_ITEMS: CatalogItem[] = EXTENDED_CATALOG_URLS.map((url, i) =>
  createCatalogItem(url, i, 'catalog')
);

// 4. INTERACTIVE GALLERY SECTION (44 Image Card Animation)
export const GALLERY_ANIMATION_URLS: string[] = [
  'https://i.ibb.co/b4yM3My/Tanzanite-diamond-ring-in-gold-202609032114.jpg',
  'https://i.ibb.co/j9mL88Y2/Gold-neckwire-necklace-on-display-202609032114.jpg',
  'https://i.ibb.co/KjZqTCkS/Gold-bracelet-on-velvet-pad-202609032114.jpg',
  'https://i.ibb.co/xKK0hmHb/Gold-stud-earrings-with-diamonds-202609032114.jpg',
  'https://i.ibb.co/ZpJJd1R7/Rose-gold-crossover-band-ring-202609032114.jpg',
  'https://i.ibb.co/W4sWRR1f/Rose-gold-crossover-diamond-ring-202609032114.jpg',
  'https://i.ibb.co/1Y505H53/Gold-stud-earrings-on-surface-202609032107.jpg',
  'https://i.ibb.co/tTXy4sMD/Gold-stud-earrings-lying-down-202609032107.jpg',
  'https://i.ibb.co/9HPQQnCG/Diamonds-set-in-tennis-bracelet-202609032107.jpg',
  'https://i.ibb.co/jPSpCsjS/Gold-pendant-necklace-on-silk-202609032113.jpg',
  'https://i.ibb.co/Q7DjzxPG/Gold-ruby-pendant-necklace-laid-202609032113.jpg',
  'https://i.ibb.co/nNjGPWwY/Gold-hoop-earrings-displayed-202609032113.jpg',
  'https://i.ibb.co/bgGz8fdf/Gold-mesh-bracelet-on-board-202609032113.jpg',
  'https://i.ibb.co/d0ndqBzp/Gold-coin-pendant-necklace-resting-202609032113.jpg',
  'https://i.ibb.co/xtWFkC2F/Gold-coin-pendant-necklace-resting-202609032113-1.jpg',
  'https://i.ibb.co/27sj5jsp/Yellow-diamond-ring-on-pedestal-202609032113.jpg',
  'https://i.ibb.co/67sd8twJ/Gold-huggie-earrings-resting-202609032113.jpg',
  'https://i.ibb.co/jvN4TqP2/Gold-wrist-bangle-on-pillow-202609032113.jpg',
  'https://i.ibb.co/rRgP26GF/Marquise-sapphire-ring-on-tile-202609032113.jpg',
  'https://i.ibb.co/mVWmkt5t/Gold-threader-earrings-resting-o-202609032114.jpg',
  'https://i.ibb.co/RTqwpK8m/Gold-locket-resting-on-cloth-202609032114.jpg',
  'https://i.ibb.co/JwTpmqMx/Gold-ring-with-pave-diamonds-202609032114.jpg',
  'https://i.ibb.co/rKRC54k2/Gold-teardrop-earrings-on-podium-202609032114.jpg',
  'https://i.ibb.co/kgvvVqh9/Gold-teardrop-earrings-on-podium-202609032114-1.jpg',
  'https://i.ibb.co/6RyRQLC3/Gold-cuff-bracelet-on-limestone-202609032105.jpg',
  'https://i.ibb.co/dJV0sqLB/Gold-cuff-bracelet-on-limestone-202609032106.jpg',
  'https://i.ibb.co/PskP1HKN/Gold-necklace-with-diamond-pendant-202609032106.jpg',
  'https://i.ibb.co/t1byTbZ/Gold-drop-earrings-resting-on-202609032106.jpg',
  'https://i.ibb.co/Dg7059v3/Gold-drop-earrings-resting-202609032106.jpg',
  'https://i.ibb.co/jZ6pRxLN/Gold-drop-earrings-on-velvet-202609032106.jpg',
  'https://i.ibb.co/BKQpZNvV/Emerald-gemstone-ring-on-pedestal-202609032106.jpg',
  'https://i.ibb.co/JRbWg6pq/Emerald-gemstone-ring-on-pedestal-202609032106-1.jpg',
  'https://i.ibb.co/Jjcn5Kqv/Gold-chain-on-satin-fabric-202609032106.jpg',
  'https://i.ibb.co/cKbH5hyD/Gold-ring-in-velvet-box-202609032106.jpg',
  'https://i.ibb.co/Zzc1JzTQ/Gold-chandelier-earrings-with-sa-202609032106.jpg',
  'https://i.ibb.co/TB8x3MCt/Gold-chandelier-earrings-with-sa-202609032106-1.jpg',
  'https://i.ibb.co/DDGHGtY8/Gold-snake-chain-choker-necklace-202609032107.jpg',
  'https://i.ibb.co/gM8qxf24/Opal-ring-on-silk-202609032107.jpg',
  'https://i.ibb.co/gZdT25PG/Gold-hoop-earrings-placed-side-b-202609032107.jpg',
  'https://i.ibb.co/JWmqxHBm/Gold-chain-bracelet-with-diamond-202609032107.jpg',
  'https://i.ibb.co/hFBFrjZc/Gold-collar-necklace-on-bust-202609032107.jpg',
  'https://i.ibb.co/TDtVRN1D/Yellow-gold-pearl-bypass-ring-202609032107.jpg',
  'https://i.ibb.co/s9cQS1Cc/Gold-ring-on-porcelain-surface-202609032105.jpg',
  'https://i.ibb.co/zWw4Wf04/Gold-ring-on-porcelain-surface-202609032105-1.jpg',
];

export const GALLERY_ANIMATION_ITEMS: CatalogItem[] = GALLERY_ANIMATION_URLS.map((url, i) =>
  createCatalogItem(url, i, 'gallery-item')
);
