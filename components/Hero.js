export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-tag">Est. 421 AD — Veneto, Italia</span>
          <h1 className="hero-title">
            Where water<br />writes <em>history</em>
          </h1>
          <p className="hero-subtitle">
            A floating city of timeless beauty, woven through canals, art, and centuries of wonder.
          </p>
        </div>
        <div className="hero-bubble">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/hero.mp4"
          />
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}