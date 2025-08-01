import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
    </main>
  );
}
