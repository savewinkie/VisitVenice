import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Rialto() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=1600&q=80" alt="Rialto Bridge" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Rialto</h1>
            <p className="location-tagline">Where commerce meets grandeur</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>The Oldest Bridge Across the Grand Canal</h2>
            <p>The Rialto Bridge is one of the most iconic landmarks of Venice. Built in 1591, this stone arch bridge was the first permanent structure to span the Grand Canal.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>The Bridge</h3>
              <p>Designed by Antonio da Ponte, spanning 48 meters across the Grand Canal with shops on both sides.</p>
            </div>
            <div className="location-detail-card">
              <h3>Rialto Market</h3>
              <p>{"Venice's historic fish and produce market, operating since 1097."}</p>
            </div>
            <div className="location-detail-card">
              <h3>Bacari</h3>
              <p>Traditional Venetian wine bars surrounding the bridge. Try cicchetti with a glass of local wine.</p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
