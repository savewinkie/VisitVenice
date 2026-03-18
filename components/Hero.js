export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://assets.mixkit.co/videos/4646/4646-720.mp4"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-tag">Est. 421 AD — Veneto, Italia</span>
        <h1 className="hero-title">
          Where water<br />writes <em>history</em>
        </h1>
        <p className="hero-subtitle">
          A floating city of timeless beauty, woven through canals, art, and centuries of wonder.
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}