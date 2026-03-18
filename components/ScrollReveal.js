'use client';
import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
        }
      }),
      { threshold: 0.15 }
    );
    if (ref.current) {
      observer.observe(ref.current);
      ref.current.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}