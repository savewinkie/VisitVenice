import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Dorsoduro() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?w=1600&q=80" alt="Dorsoduro" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Dorsoduro</h1>
            <p className="location-tagline">Art galleries and quiet canals</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>A Weekend of Art in Venice</h2>
            <p>Dorsoduro is the artistic soul of Venice. Home to the Gallerie dell'Accademia, the Peggy Guggenheim Collection, and Punta della Dogana, this sestiere is a paradise for art lovers. Its quiet canals and lively Campo Santa Margherita make it a favorite among students and locals alike.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Peggy Guggenheim</h3>
              <p>One of the most important museums for modern art in Italy, housed in the unfinished Palazzo Venier dei Leoni on the Grand Canal.</p>
            </div>
            <div className="location-detail-card">
              <h3>Accademia Gallery</h3>
              <p>The greatest collection of Venetian art from the 14th to 18th centuries, including works by Bellini, Titian, and Tintoretto.</p>
            </div>
            <div className="location-detail-card">
              <h3>Campo Santa Margherita</h3>
              <p>The liveliest square in Venice, surrounded by cafes, bars and restaurants. A true gathering place for locals and students.</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">Nearest stop</span>
              <span className="location-info-value">Accademia or Zattere</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Guggenheim entry</span>
              <span className="location-info-value">16 euro</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Best for</span>
              <span className="location-info-value">Art lovers and foodies</span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
