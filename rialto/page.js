import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Rialto() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=1600&q=80" alt="Rialto Bridge Venice" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">&larr; Back to home</Link>
            <h1 className="location-title">Rialto</h1>
            <p className="location-tagline">Where commerce meets grandeur</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>The Oldest Bridge Across the Grand Canal</h2>
            <p>The Rialto Bridge is one of the most iconic landmarks of Venice. Built in 1591, this stone arch bridge was the first permanent structure to span the Grand Canal. The area surrounding it has been the commercial heart of Venice for over 700 years.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <span className="location-detail-icon">🌉</span>
              <h3>The Bridge</h3>
              <p>Designed by Antonio da Ponte, the bridge spans 48 meters across the Grand Canal. Shops line both sides of its covered walkway.</p>
            </div>
            <div className="location-detail-card">
              <span className="location-detail-icon">🐟</span>
              <h3>Rialto Market</h3>
              <p>{"Venice's historic fish and produce market has been operating since 1097. Best visited early morning when fishermen bring fresh catch."}</p>
            </div>
            <div className="location-detail-card">
              <span className="location-detail-icon">🍷</span>
              <h3>Bacari</h3>
              <p>The streets around Rialto are filled with traditional Venetian wine bars. Try cicchetti with a glass of local wine.</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">Built</span>
              <span className="location-info-value">1588 — 1591</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Market hours</span>
              <span className="location-info-value">Tue — Sat, 7:30 — 12:00</span>
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