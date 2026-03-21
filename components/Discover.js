import Link from 'next/link';

const categories = ['Highlights', 'Culture', 'Islands', 'Food & Wine'];

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80',
    category: 'Islands',
    title: 'Burano: the most colorful island in the Venetian lagoon',
    description: 'A rainbow of houses reflected in quiet canals. Burano is famous for its lace-making tradition and vibrant painted facades.',
    time: '4 min read',
    href: '/burano',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?w=600&q=80',
    category: 'Culture',
    title: 'A weekend of art in Venice',
    description: 'Discovering museums, galleries and exhibition venues across the city.',
    time: '5 min read',
    href: '/dorsoduro',
  },
  {
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80',
    category: 'Highlights',
    title: 'Cannaregio: where locals actually live',
    description: 'Escape the crowds and discover authentic Venetian neighborhood life.',
    time: '3 min read',
    href: '/cannaregio',
  },
  {
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=80',
    category: 'Islands',
    title: 'Murano: the island of master glassmakers',
    description: 'Watch artisans create stunning glass pieces using centuries-old techniques.',
    time: '4 min read',
    href: '/murano',
  },
  {
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80',
    category: 'Food & Wine',
    title: 'Cicchetti crawl through Venice',
    description: 'Hop between bacari and taste the best Venetian tapas with local wines.',
    time: '6 min read',
    href: '/cicchetti',
  },
];

export default function Discover() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section className="discover" id="discover">
      <div className="discover-top">
        <div>
          <p className="section-label">What to see</p>
          <h2 className="section-title">Discover Venice</h2>
        </div>
        <div className="discover-cats">
          {categories.map((cat) => (
            <button key={cat} className="discover-cat">{cat}</button>
          ))}
        </div>
      </div>

      <div className="discover-editorial">
        <Link href={featured.href} className="discover-feature">
          <div className="discover-feature-img">
            <img src={featured.image} alt={featured.title} />
          </div>
          <div className="discover-feature-body">
            <span className="discover-pill">{featured.category}</span>
            <h3 className="discover-feature-title">{featured.title}</h3>
            <p className="discover-feature-desc">{featured.description}</p>
            <span className="discover-time">{featured.time}</span>
          </div>
        </Link>

        <div className="discover-list">
          {rest.map((article) => (
            <Link href={article.href} className="discover-list-item" key={article.title}>
              <div className="discover-list-img">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="discover-list-body">
                <span className="discover-pill">{article.category}</span>
                <h4 className="discover-list-title">{article.title}</h4>
                <p className="discover-list-desc">{article.description}</p>
                <span className="discover-time">{article.time}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}