'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">VisitVenice</Link>

      <button
        className={`nav-burger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        <li><Link href="#discover" onClick={() => setOpen(false)}>Discover</Link></li>
        <li><Link href="#experience" onClick={() => setOpen(false)}>Experience</Link></li>
        <li><Link href="#events" onClick={() => setOpen(false)}>Events</Link></li>
        <li><Link href="#visit" onClick={() => setOpen(false)}>Visit</Link></li>
      </ul>
    </nav>
  );
}