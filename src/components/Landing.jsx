import { GALLERY_PRODUCTS } from '../data/galleryProducts.js';
import { DEMO_NOTICE } from '../config.js';

export default function Landing({ go }) {
  return (
    <section className="intro" aria-label="Welcome">
      <div className="intro-in">
        <span className="hero-kicker">HIGH GLEN · HARARE</span>
        <h1>Furniture, made for living.</h1>
        <p>Explore the Kay’az furniture concept showroom, then browse collections for every room.</p>
        <div className="choices">
          <button className="cta" type="button" onClick={() => go('showroom')}>Enter the showroom</button>
          <button className="cta ghost" type="button" onClick={() => go('gallery')}>Explore the gallery <span className="count">{GALLERY_PRODUCTS.length} concepts</span></button>
        </div>
        <small>{DEMO_NOTICE}</small>
      </div>
    </section>
  );
}
