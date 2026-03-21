import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Murano() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1600&q=80" alt="Murano" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Murano</h1>
            <p className="location-tagline">Island of master glassmakers</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>Where Glass Becomes Art</h2>
            <p>Murano has been the center of Venetian glassmaking since 1291, when the furnaces were moved here from Venice to reduce the risk of fire. Today, master glassblowers continue centuries-old traditions, creating everything from delicate jewelry to massive chandeliers using techniques passed down through generations.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Glass Demonstrations</h3>
              <p>Watch master artisans shape molten glass into incredible works of art. Many fornaci offer free live demonstrations throughout the day.</p>
            </div>
            <div className="location-detail-card">
              <h3>Glass Museum</h3>
              <p>The Museo del Vetro traces the history of Murano glass from ancient Roman times to contemporary art pieces.</p>
            </div>
            <div className="location-detail-card">
              <h3>Basilica dei Santi Maria e Donato</h3>
              <p>One of the oldest churches in the lagoon with a stunning 12th-century mosaic floor and Byzantine apse mosaic.</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">How to get there</span>
              <span className="location-info-value">Vaporetto Line 4.1 or 4.2 (10 min)</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Museum entry</span>
              <span className="location-info-value">10 euro</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Best for</span>
              <span className="location-info-value">Unique souvenirs and craftsmanship</span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
