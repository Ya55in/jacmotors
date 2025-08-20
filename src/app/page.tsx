import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExploreModelsSection from '@/components/ExploreModelsSection';
import DiscoverJacSection from '@/components/DiscoverJacSection';
import ShoppingToolsSection from '@/components/ShoppingToolsSection';
import GlobalLayoutSection from '@/components/GlobalLayoutSection';
import WonderfulJacSection from '@/components/WonderfulJacSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ExploreModelsSection />
      <DiscoverJacSection />
      <ShoppingToolsSection />
      <GlobalLayoutSection />
      <WonderfulJacSection />
      <Footer />
    </main>
  );
}
