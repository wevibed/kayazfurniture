// Illustrative 3D sample pieces used to demonstrate the Kay'az showroom framework.
// All showroom pieces are generic procedural concept models, not confirmed Kay'az products.
const NOTE = 'Illustrative 3D concept model for this showroom demonstration. Kay’az’s actual product designs, materials, dimensions and availability must be confirmed and photographed before launch.';

const RAW = [
  { id: 'kayaz-lounge-suite', name: 'Lounge Suite Concept', category: 'living', gallery: 'kayaz-sofa-01', room: 'living', model: 'sofa', params: { seats: 3, mat: 'fabric' }, pos: [-7.7, -3.37], ry: 0, sh: [4.2, 2.9], dist: 4.6, ly: 0.7, hy: 1.75 },
  { id: 'kayaz-l-shape', name: 'L-Shape Sofa Concept', category: 'living', gallery: 'kayaz-sofa-02', room: 'living', model: 'lshape', params: {}, pos: [-13.16, 1.5], ry: Math.PI / 2, sh: [3.3, 4.3], dist: 4.6, ly: 0.7, hy: 1.7 },
  { id: 'kayaz-u-shape', name: 'U-Shape Sofa Concept', category: 'living', gallery: 'kayaz-sofa-03', room: 'living', model: 'ushape', params: { mat: 'umber' }, pos: [-12.15, -3.28], ry: 0, scale: 0.7, sh: [5.4, 3.2], dist: 4.1, ly: 0.6, hy: 1.4 },
  { id: 'kayaz-media-unit', name: 'TV & Media Unit Concept', category: 'media', gallery: 'kayaz-media-01', room: 'living', model: 'media', params: {}, pos: [-9.5, 4.11], ry: Math.PI, sh: [4.1, 1.3], dist: 3.7, ly: 1.2, hy: 2.7 },
  { id: 'kayaz-wardrobe', name: 'Wardrobe Concept', category: 'wardrobes', gallery: 'kayaz-wardrobe-01', room: 'bedroom', model: 'wardrobe', params: { doors: 4 }, pos: [-3.1, -4.14], ry: 0, sh: [3.6, 1.2], dist: 3.8, ly: 1.2, hy: 2.5 },
  { id: 'kayaz-headboard', name: 'Headboard Concept', category: 'headboards', gallery: 'kayaz-headboard-01', room: 'bedroom', model: 'headboard', params: {}, pos: [0, -3.27], ry: 0, sh: [3.1, 3.0], dist: 4.4, ly: 0.8, hy: 1.95 },
  { id: 'kayaz-bedroom-suite', name: 'Bedroom Suite Concept', category: 'bedroom', gallery: 'kayaz-bedroom-01', room: 'bedroom', model: 'bed', params: { variant: 'standard', w: 1.84 }, pos: [2.9, -3.32], ry: 0, sh: [2.3, 2.9], dist: 4.2, ly: 0.8, hy: 1.8 },
  { id: 'kayaz-dining-suite', name: 'Dining Suite Concept', category: 'dining', gallery: 'kayaz-dining-01', room: 'dining', model: 'diningSet', params: {}, pos: [10, -1.7], ry: Math.PI / 2, vy: 0, sh: [2.5, 3.7], dist: 3.9, ly: 0.6, hy: 1.5 },
  { id: 'kayaz-kitchen-unit', name: 'Kitchen Unit Concept', category: 'kitchen', gallery: 'kayaz-kitchen-01', room: 'dining', model: 'kitchen', params: { doors: 6, tall: true, hood: true }, scale: 0.62, pos: [12.2, -4.18], ry: 0, sh: [3.4, 1.2], dist: 4.2, ly: 1.1, hy: 2.35 },
];

const LABEL = { living: 'Living Room', bedroom: 'Bedroom', wardrobes: 'Wardrobes', kitchen: 'Kitchen Units', dining: 'Dining', media: 'TV & Media', headboards: 'Headboards' };
export const SHOWROOM_PIECES = RAW.map((r) => {
  const { id, name, category, gallery, room, ...cfg } = r;
  return { id, name, category, categoryLabel: LABEL[category], price: null, model: r.model, params: r.params || {}, gallery, photo: null, reference: null, description: NOTE, details: [], showroom: { room, ...cfg } };
});
