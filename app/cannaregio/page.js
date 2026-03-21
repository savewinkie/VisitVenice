import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cannaregio() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&q=80" alt="Cannaregio" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Cannaregio</h1>
            <p className="location-tagline">Where locals actually live</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>Authentic Venetian Life</h2>
            <p>Cannaregio is the most populated sestiere of Venice, stretching from the train station to the Rialto area. Away from the tourist crowds, you will find authentic Venetian life along its wide fondamenta, local bacari, and the historic Jewish Ghetto - the oldest in the world.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Jewish Ghetto</h3>
              <p>Founded in 1516, this is the oldest Jewish ghetto in the world. Visit the synagogues and the Jewish Museum for a moving historical experience.</p>
            </div>
            <div className="location-detail-card">
              <h3>Fondamenta della Misericordia</h3>
              <p>A long waterfront lined with bars and restaurants. The best spot for an aperitivo away from the tourist areas.</p>
            </div>
            <div className="location-detail-card">
              <h3>Madonna dell'Orto</h3>
              <p>A beautiful Gothic church with masterworks by Tintoretto, who lived nearby and is buried here.</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">Nearest stop</span>
              <span className="location-info-value">Guglie or Fondamente Nove</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Best time</span>
              <span className="location-info-value">Evening for aperitivo</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Best for</span>
              <span className="location-info-value">Authentic local experience</span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
