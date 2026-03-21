import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Burano() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1600&q=80" alt="Burano" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Burano</h1>
            <p className="location-tagline">The most colorful island in the lagoon</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>A Rainbow on the Water</h2>
            <p>Burano is a small island in the Venetian lagoon, famous for its brightly colored houses and centuries-old lace-making tradition. Each house is painted a different vivid color, creating one of the most photogenic spots in all of Italy. The island is also known for its leaning bell tower and delicious butter cookies called Bussolai.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Colorful Houses</h3>
              <p>Legend says fishermen painted their houses bright colors so they could spot them through the fog when returning from sea.</p>
            </div>
            <div className="location-detail-card">
              <h3>Lace Making</h3>
              <p>Burano lace has been prized since the 16th century. Visit the Museo del Merletto to see masterful examples of this delicate craft.</p>
            </div>
            <div className="location-detail-card">
              <h3>Fresh Seafood</h3>
              <p>As a fishing island, Burano serves some of the freshest seafood in Venice. Try risotto de go, made with local goby fish.</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">How to get there</span>
              <span className="location-info-value">Vaporetto Line 12 from Fondamente Nove (45 min)</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Best time</span>
              <span className="location-info-value">Morning for best light on the colors</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Entry</span>
              <span className="location-info-value">Free</span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
