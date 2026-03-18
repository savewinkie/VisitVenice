const places = [
  {
    image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=1200&q=80',
    title: 'San Marco',
    subtitle: 'The beating heart of Venice',
    tag: '01',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800&q=80',
    title: 'Rialto',
    subtitle: 'Where commerce meets grandeur',
    tag: '02',
  },
  {
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
    title: 'Dorsoduro',
    subtitle: 'Art galleries and quiet canals',
    tag: '03',
  },
  {
    image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80',
    title: 'Murano',
    subtitle: 'Island of master glassmakers',
    tag: '04',
  },
  {
    image: 'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?w=800&q=80',
    title: 'Cannaregio',
    subtitle: 'Authentic Venetian neighborhood life',
    tag: '05',
  },
];

export default function Discover() {
  const featured = places[0];
  const rest = places.slice(1);

  return (
    <section className="discover" id="discover">
      <div className="discover-header">
        <div>
          <p className="section-label">01 — Discover</p>
          <h2 className="section-title">Six sestieri.<br />Infinite stories.</h2>
        </div>
        <p className="discover-intro">
          Each neighborhood holds its own character — from the grandeur of San Marco
          to the quiet charm of Dorsoduro.
        </p>
      </div>

      <div className="discover-layout">
        <div className="discover-featured">
          <img src={featured.image} alt={featured.title} />
          <div className="discover-featured-content">
            <span className="discover-tag">{featured.tag}</span>
            <h3>{featured.title}</h3>
            <p>{featured.subtitle}</p>
          </div>
        </div>

        <div className="discover-side">
          {rest.map((place) => (
            <div className="discover-item" key={place.title}>
              <img src={place.image} alt={place.title} />
              <div className="discover-item-content">
                <span className="discover-tag">{place.tag}</span>
                <h3>{place.title}</h3>
                <p>{place.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}