'use client';

import React from 'react';

const PhilosophyHeroSection = () => {
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
        <source src="/assets/Philosophy/Hero/brand5-bg.ae2cbd2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better visibility if needed */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default PhilosophyHeroSection;

