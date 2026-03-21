import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cicchetti() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1600&q=80" alt="Cicchetti Venice" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Cicchetti</h1>
            <p className="location-tagline">A culinary crawl through Venice</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>Venetian Tapas and Wine Bars</h2>
            <p>Cicchetti are small snacks or side dishes served in traditional Venetian bacari (wine bars). Think of them as Venetian tapas — small bites of heaven ranging from creamy baccala mantecato on crostini to fresh seafood, meatballs, and fried delights. Pair them with an ombra (small glass of wine) and hop from bar to bar like a true Venetian.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Must-Try Cicchetti</h3>
              <p>Baccala mantecato (creamed cod), sarde in saor (sweet and sour sardines), polpette (meatballs), and fresh crostini with seasonal toppings.</p>
            </div>
            <div className="location-detail-card">
              <h3>Best Bacari Areas</h3>
              <p>The streets around Rialto Market and Campo Santa Margherita have the highest concentration of authentic bacari in Venice.</p>
            </div>
            <div className="location-detail-card">
              <h3>How to Order</h3>
              <p>Walk up to the bar, point at what looks good, and ask for an ombra de vin. Most cicchetti cost between 1 and 3 euros each.</p>
            </div>
          </div>
          <div className="location-info-bar">
            <div className="location-info-item">
              <span className="location-info-label">Best time</span>
              <span className="location-info-value">11:30-13:00 or 18:00-20:00</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Budget</span>
              <span className="location-info-value">10-20 euro for a full crawl</span>
            </div>
            <div className="location-info-item">
              <span className="location-info-label">Pro tip</span>
              <span className="location-info-value">Go where you see locals standing</span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
