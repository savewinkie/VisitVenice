import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-top">
        <h1 className="hero-title">
          Visit <em>Venice</em>
        </h1>
        <p className="hero-subtitle">
          A floating city of timeless beauty, woven through canals, art, and centuries of wonder.
        </p>
      </div>

      <div className="hero-grid">
        <div className="hero-card hero-card-main">
          <video autoPlay muted loop playsInline src="/hero.mp4" />
          <div className="hero-card-overlay">
            <span className="hero-card-tag">Live from Venice</span>
          </div>
        </div>

        <Link href="/san-marco" className="hero-card hero-card-tall">
          <img src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=600&q=80" alt="San Marco" />
          <div className="hero-card-overlay">
            <span className="hero-card-tag">San Marco &rarr;</span>
          </div>
        </Link>

        <div className="hero-card hero-card-info">
          <div className="hero-info-content">
            <span className="hero-info-num">118</span>
            <span className="hero-info-label">Islands connected by 400+ bridges</span>
            <Link href="#discover" className="hero-btn">
              <span>Explore Venice</span>
            </Link>
          </div>
        </div>

        <Link href="/grand-canal" className="hero-card hero-card-vid2">
          <video autoPlay muted loop playsInline src="https://assets.mixkit.co/videos/4470/4470-720.mp4" />
          <div className="hero-card-overlay">
            <span className="hero-card-tag">Grand Canal &rarr;</span>
          </div>
        </Link>

        <Link href="/rialto" className="hero-card hero-card-img2">
          <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=600&q=80" alt="Rialto" />
          <div className="hero-card-overlay">
            <span className="hero-card-tag">Rialto &rarr;</span>
          </div>
        </Link>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}