import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Proof from './components/Proof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Proof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
