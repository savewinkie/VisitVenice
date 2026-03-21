import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SanMarco() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=1600&q=80" alt="San Marco" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">San Marco</h1>
            <p className="location-tagline">The beating heart of Venice</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>The Most Famous Square in Venice</h2>
            <p>Piazza San Marco is the principal public square of Venice, often known as the drawing room of Europe. The square is dominated by the magnificent Basilica di San Marco, with its stunning Byzantine architecture and golden mosaics.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Basilica di San Marco</h3>
              <p>One of the finest examples of Italo-Byzantine architecture, adorned with over 8,000 square meters of golden mosaics.</p>
            </div>
            <div className="location-detail-card">
              <h3>Campanile</h3>
              <p>The 98.6-meter bell tower offers panoramic views over Venice and the lagoon.</p>
            </div>
            <div className="location-detail-card">
              <h3>{"Doge's Palace"}</h3>
              <p>The seat of Venetian power for centuries. A masterpiece of Gothic architecture.</p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
