'use client';

import React from 'react';
import Image from 'next/image';

const JACLifeHeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/JAClife/Herolife/pc.a4b8b98.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Truck Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 z-10 p-8 md:p-12">
        <div className="relative">
          <Image
            src="/assets/JAClife/Herolife/JAC-LIFE.e6546fd.png"
            alt="JAC Life Truck"
            width={400}
            height={300}
            className="w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            priority
          />
        </div>
      </div>

      {/* Overlay for better text readability if needed in future */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default JACLifeHeroSection;
