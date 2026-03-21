import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GrandCanal() {
  return (
    <>
      <Navbar />
      <article className="location-page">
        <div className="location-hero">
          <img src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1600&q=80" alt="Grand Canal" />
          <div className="location-hero-overlay" />
          <div className="location-hero-content">
            <Link href="/" className="location-back">Back to home</Link>
            <h1 className="location-title">Grand Canal</h1>
            <p className="location-tagline">The main waterway of Venice</p>
          </div>
        </div>
        <div className="location-body">
          <div className="location-intro">
            <h2>{"Venice's Most Famous Waterway"}</h2>
            <p>The Grand Canal stretches nearly 4 kilometers in a sweeping S-shape through the heart of Venice. Lined with more than 170 buildings dating from the 13th to the 18th century, it is one of the most beautiful urban waterways in the world.</p>
          </div>
          <div className="location-details">
            <div className="location-detail-card">
              <h3>Vaporetto Ride</h3>
              <p>Take Line 1 from Piazzale Roma to San Marco for the full Grand Canal experience.</p>
            </div>
            <div className="location-detail-card">
              <h3>Golden Hour</h3>
              <p>The canal is most magical at sunset when warm light reflects off the palazzo facades.</p>
            </div>
            <div className="location-detail-card">
              <h3>Historic Palaces</h3>
              <p>{"Over 170 palazzi line the canal, including Ca' d'Oro and the Peggy Guggenheim Collection."}</p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
