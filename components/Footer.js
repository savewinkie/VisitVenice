import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-brand">VisitVenice</span>
      <div className="footer-links">
        <Link href="https://instagram.com/venice.explore" target="_blank">Instagram</Link>
        <Link href="#">Tourism Board</Link>
        <Link href="#">Contact</Link>
      </div>
      <span className="footer-copy">&copy; 2026 VisitVenice</span>
    </footer>
  );
}