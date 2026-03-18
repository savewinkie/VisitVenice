'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: 118, label: 'Islands' },
  { num: 400, label: 'Bridges', suffix: '+' },
  { num: 1600, label: 'Years of History' },
];

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-num">
      {count}{suffix}
    </span>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="exp-image">
        <img
          src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=900&q=80"
          alt="Venetian gondola at sunset"
        />
        <div className="exp-image-accent" />
      </div>

      <div className="exp-text">
        <p className="section-label">02 — Experience</p>
        <h2 className="section-title">A city like no other on earth.</h2>
        <p className="exp-body">
          Venice is not merely visited — it is felt. Every narrow calle reveals a
          hidden courtyard, every bridge frames a new perspective, and every ripple
          on the lagoon carries the echo of a thousand years.
        </p>
        <p className="exp-body">
          From the gilded mosaics of Basilica di San Marco to the quiet intimacy
          of a bacaro at dusk, Venice invites you to slow down and immerse yourself.
        </p>

        <div className="exp-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="exp-stat">
              <AnimatedNumber target={stat.num} suffix={stat.suffix || ''} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}