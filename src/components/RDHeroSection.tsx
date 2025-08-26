'use client';

import React from 'react';

const RDHeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/RD/rd-small.bec0d3c.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>
    </section>
  );
};

export default RDHeroSection;
