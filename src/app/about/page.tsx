import Navbar from '@/components/Navbar';
import AboutHeroSection from '@/components/AboutHeroSection';
import AboutSection2 from '@/components/AboutSection2';
import AboutSection4 from '@/components/AboutSection4';
import AboutSection5 from '@/components/AboutSection5';
import AboutSection6 from '@/components/AboutSection6';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHeroSection />
      <AboutSection2 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <Footer />
    </main>
  );
}
