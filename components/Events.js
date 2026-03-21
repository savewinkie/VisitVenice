'use client';
import { useState } from 'react';

const events = [
  {
    date: 'Feb — Mar',
    name: 'Carnevale di Venezia',
    tag: 'Festival',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80',
    description: 'The world-famous Venice Carnival fills the city with elaborate masks, stunning costumes, and grand masquerade balls for two magical weeks.',
  },
  {
    date: 'Jun — Nov',
    name: 'Biennale Arte',
    tag: 'Art',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80',
    description: 'The oldest and most prestigious international art exhibition in the world. Pavilions across the Giardini and Arsenale showcase groundbreaking contemporary art.',
  },
  {
    date: 'Sep',
    name: 'Venice Film Festival',
    tag: 'Cinema',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
    description: 'The oldest film festival in the world, held on the glamorous Lido island. Where cinema legends walk the red carpet every September.',
  },
  {
    date: 'Jul',
    name: 'Festa del Redentore',
    tag: 'Tradition',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    description: 'A spectacular fireworks display over the lagoon celebrates the end of the 1576 plague. Venetians gather on decorated boats for a night of feasting.',
  },
  {
    date: 'Sep',
    name: 'Regata Storica',
    tag: 'Sport',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80',
    description: 'A colorful historical boat procession along the Grand Canal followed by thrilling gondola and rowing races. Pure Venetian tradition since 1489.',
  },
];

export default function Events() {
  const [active, setActive] = useState(null);

  return (
    <section className="events" id="events">
      <p className="section-label">What&apos;s on</p>
      <h2 className="section-title">Events &amp; Festivals</h2>
      <div className="event-list">
        {events.map((event, i) => (
          <div
            key={event.name}
            className={`event-item ${active === i ? 'event-active' : ''}`}
            onClick={() => setActive(active === i ? null : i)}
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
                  <a href="#" className="event-link">Learn more &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}