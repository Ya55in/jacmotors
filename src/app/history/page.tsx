import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HistoryHeroSection from '@/components/HistoryHeroSection';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HistoryHeroSection />
      <Footer />
    </div>
  );
}


