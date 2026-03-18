import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta-section" id="visit">
      <h2 className="cta-title">
        Begin your <em>Venetian</em><br />story today.
      </h2>
      <Link href="#" className="cta-btn">
        <span>Plan Your Visit</span>
      </Link>
    </section>
  );
}