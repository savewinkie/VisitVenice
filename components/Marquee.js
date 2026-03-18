const words = ['Gondola', 'Carnevale', 'Biennale', 'Murano', 'Burano', 'Spritz'];

export default function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((word, i) => (
          <span key={i}>
            <span className="marquee-item">{word}</span>
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}