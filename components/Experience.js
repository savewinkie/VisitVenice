'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: 118, label: 'Islands', suffix: '' },
  { num: 400, label: 'Bridges', suffix: '+' },
  { num: 1600, label: 'Years of History', suffix: '' },
  { num: 150, label: 'Canals', suffix: '+' },
];

function AnimatedNumber({ target, suffix }) {
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="exp-banner">
        <img
          src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1600&q=80"
          alt="Venice panorama"
        />
        <div className="exp-banner-overlay" />
        <div className="exp-banner-text">
          <p className="section-label exp-label">Why Venice</p>
          <h2 className="exp-heading">A city like no other on earth</h2>
        </div>
      </div>

      <div className="exp-stats-row">
        {stats.map((stat) => (
          <div className="exp-stat-card" key={stat.label}>
            <span className="exp-stat-num">
              <AnimatedNumber target={stat.num} suffix={stat.suffix} />
            </span>
            <span className="exp-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="exp-content">
        <div className="exp-col">
          <p>Venice is not merely visited — it is felt. Every narrow calle reveals a hidden courtyard, every bridge frames a new perspective, and every ripple on the lagoon carries the echo of a thousand years.</p>
        </div>
        <div className="exp-col">
          <p>From the gilded mosaics of Basilica di San Marco to the quiet intimacy of a bacaro at dusk, Venice invites you to slow down, get lost, and discover a world that exists nowhere else.</p>
        </div>
      </div>
    </section>
  );
}