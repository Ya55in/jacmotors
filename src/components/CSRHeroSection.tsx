'use client';

import Image from 'next/image';

const CSRHeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/CSR/crs-banner.7a149e8.png"
          alt="JAC Motors CSR"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default CSRHeroSection;
