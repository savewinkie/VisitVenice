import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Discover from '@/components/Discover';
import Experience from '@/components/Experience';
import Quote from '@/components/Quote';
import Marquee from '@/components/Marquee';
import Events from '@/components/Events';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ScrollReveal from '@/components/ScrollReveal';
import Loader from '@/components/Loader';

export default function Home() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <ScrollReveal>
        <Discover />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Quote />
      </ScrollReveal>
      <Marquee />
      <ScrollReveal>
        <Events />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
      <Footer />
    </>
  );
}