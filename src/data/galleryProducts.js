// Kay'az Furniture prospect-demo catalogue.
// All entries are illustrative category concepts, not confirmed Kay'az stock.
// Replace with Kay'az's own photographs, names, specifications and prices before publishing.

const make = (id, name, category, categoryLabel, model, params = {}) => ({
  id, name, category, categoryLabel, model, params, photo: null, price: null,
  description: `Illustrative ${categoryLabel.toLowerCase()} concept. Contact Kay’az Furniture to discuss your preferred size, design, finish and custom requirements.`,
  details: [], showroom: null, reference: '',
});

export const GALLERY_PRODUCTS = [
  make('kayaz-sofa-01', 'Lounge Suite Concept', 'living', 'Living Room', 'sofa', { seats: 3, mat: 'fabric' }),
  make('kayaz-sofa-02', 'L-Shape Sofa Concept', 'living', 'Living Room', 'lshape', {}),
  make('kayaz-sofa-03', 'U-Shape Sofa Concept', 'living', 'Living Room', 'ushape', { mat: 'umber' }),
  make('kayaz-sofa-04', 'Recliner Concept', 'living', 'Living Room', 'recliner', { seats: 2 }),
  make('kayaz-bedroom-01', 'Bedroom Suite Concept', 'bedroom', 'Bedroom', 'bed', { variant: 'standard', w: 1.84 }),
  make('kayaz-bedroom-02', 'Storage Bed Concept', 'bedroom', 'Bedroom', 'bed', { variant: 'storage' }),
  make('kayaz-headboard-01', 'Upholstered Headboard Concept', 'headboards', 'Headboards', 'headboard', {}),
  make('kayaz-wardrobe-01', 'Four-Door Wardrobe Concept', 'wardrobes', 'Wardrobes', 'wardrobe', { doors: 4 }),
  make('kayaz-wardrobe-02', 'Six-Door Wardrobe Concept', 'wardrobes', 'Wardrobes', 'wardrobe', { doors: 6, seams: [2, 4] }),
  make('kayaz-kitchen-01', 'Fitted Kitchen Concept', 'kitchen', 'Kitchen Units', 'kitchen', { doors: 6, tall: true, hood: true }),
  make('kayaz-kitchen-02', 'Kitchen Cabinet Concept', 'kitchen', 'Kitchen Units', 'kitchen', { doors: 5, unit: 'ivory' }),
  make('kayaz-dining-01', 'Dining Suite Concept', 'dining', 'Dining', 'diningSet', {}),
  make('kayaz-divider-01', 'Room Divider Concept', 'dividers', 'Room Dividers', 'media', {}),
  make('kayaz-media-01', 'TV & Media Unit Concept', 'media', 'TV & Media', 'media', {}),
];
