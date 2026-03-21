import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GrandCanal() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1600&q=80" alt="Grand Canal Venice" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">&larr; Back to home</Link>
            <h1 className="location-title">Grand Canal</h1>
            <p className="location-tagline">The main waterway of Venice</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>{"Venice's Most Famous Waterway"}</h2>
            <p>The Grand Canal is the largest canal in Venice, stretching nearly 4 kilometers in a sweeping S-shape through the heart of the city. Lined with more than 170 buildings dating from the 13th to the 18th century, it is one of the most beautiful urban waterways in the world.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <span className="location-detail-icon">🚤</span>
              <h3>Vaporetto Ride</h3>
              <p>Take Line 1 from Piazzale Roma to San Marco for the full Grand Canal experience. The journey takes about 45 minutes.</p>
            </div>
            <div className="location-detail-card">
              <span className="location-detail-icon">🌅</span>
              <h3>Golden Hour</h3>
              <p>The canal is most magical at sunset when the warm light reflects off the palazzo facades, creating a golden mirror on the water.</p>
            </div>
            <div className="location-detail-card">
              <span className="location-detail-icon">🏘️</span>
              <h3>Historic Palaces</h3>
              <p>{"Over 170 palazzi line the canal, including Ca' d'Oro, Ca' Rezzonico, and the Peggy Guggenheim Collection."}</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">Length</span>
              <span className="location-info-value">3.8 kilometers</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Bridges</span>
              <span className="location-info-value">4 (Rialto, Accademia, Scalzi, Constitution)</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Vaporetto</span>
              <span className="location-info-value">9.50 euro single / 25 euro day pass</span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}