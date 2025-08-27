import Navbar from '@/components/Navbar';
import CSRHeroSection from '@/components/CSRHeroSection';
import CSRSocialResponsibilitySection from '@/components/CSRSocialResponsibilitySection';
import CSRPublicBenefitSection from '@/components/CSRPublicBenefitSection';
import CSRSince2013Section from '@/components/CSRSince2013Section';
import CSROverseasCharitySection from '@/components/CSROverseasCharitySection';
import CSRGreenEnergySection from '@/components/CSRGreenEnergySection';
import CSRDownloadSection from '@/components/CSRDownloadSection';
import Footer from '@/components/Footer';

export default function CSRPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CSRHeroSection />
      <CSRSocialResponsibilitySection />
      <CSRPublicBenefitSection />
      <CSRSince2013Section />
      <CSROverseasCharitySection />
      <CSRGreenEnergySection />
      <CSRDownloadSection />
      <Footer />
    </main>
  );
}
