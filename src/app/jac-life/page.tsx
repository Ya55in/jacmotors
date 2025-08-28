import Navbar from '@/components/Navbar';
import JACLifeHeroSection from '@/components/JACLifeHeroSection';
import JACLifeSection2 from '@/components/JACLifeSection2';
import JACLifeGridSection from '@/components/JACLifeGridSection';
import JACLifeProductsSection from '@/components/JACLifeProductsSection';
import Footer from '@/components/Footer';

export default function JACLifePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JACLifeHeroSection />
      <JACLifeSection2 />
      <JACLifeGridSection />
      <JACLifeProductsSection />
      <Footer />
    </main>
  );
}
