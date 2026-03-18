'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [gone, setGone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => setGone(true), 1800);
    setTimeout(() => setHidden(true), 2400);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader ${gone ? 'loader-gone' : ''}`}>
      <span className="loader-text">VisitVenice</span>
    </div>
  );
}