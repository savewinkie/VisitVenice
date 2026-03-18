'use client';
import { useState } from 'react';

const events = [
  {
    date: 'Feb 14 — Mar 4',
    name: 'Carnevale di Venezia',
    tag: 'Festival',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
    description: 'The world-famous carnival transforms Venice into a living theater of elaborate masks, stunning costumes, and centuries-old traditions. Grand balls, street performances, and the iconic Flight of the Angel over Piazza San Marco.',
  },
  {
    date: 'Apr 19 — Nov 23',
    name: 'La Biennale di Venezia',
    tag: 'Art',
    image: 'https://images.unsplash.com/photo-1566132007999-2dde82ef7581?w=800&q=80',
    description: 'The oldest and most prestigious international art exhibition in the world. National pavilions and the central exhibition at the Arsenale and Giardini showcase cutting-edge contemporary art from across the globe.',
  },
  {
    date: 'Jul 14',
    name: 'Festa del Redentore',
    tag: 'Tradition',
    image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800&q=80',
    description: 'Venice\'s most beloved local celebration. A spectacular fireworks display lights up the lagoon while thousands gather on decorated boats. A pontoon bridge connects the city to the Redentore church on Giudecca island.',
  },
  {
    date: 'Sep 1',
    name: 'Regata Storica',
    tag: 'Heritage',
    image: 'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?w=800&q=80',
    description: 'A grand historical procession of 16th-century boats opens the day, followed by fiercely competitive gondola races along the Grand Canal. Venetians line the banks cheering for their favorite crews in colorful livery.',
  },
  {
    date: 'Aug 27 — Sep 6',
    name: 'Venice Film Festival',
    tag: 'Cinema',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    description: 'The world\'s oldest film festival held annually on the glamorous Lido island. International stars walk the red carpet at the Palazzo del Cinema, premiering award-contending films under the Golden Lion.',
  },
];

export default function Events() {
  const [active, setActive] = useState(null);

  return (
    <section className="events" id="events">
      <p className="section-label">03 — Events</p>
      <h2 className="section-title">What&apos;s happening in Venice.</h2>
      <div className="event-list">
        {events.map((event, i) => (
          <div
            className={`event-item ${active === i ? 'event-active' : ''}`}
            key={event.name}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="event-row">
              <span className="event-date">{event.date}</span>
              <span className="event-name">{event.name}</span>
              <span className="event-tag">{event.tag}</span>
            </div>
            <div className="event-expand">
              <div className="event-expand-inner">
                <div className="event-expand-image">
                  <img src={event.image} alt={event.name} />
                </div>
                <div className="event-expand-text">
                  <p>{event.description}</p>
                  <a href="#" className="event-link">Learn more →</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}