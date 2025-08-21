'use client';

import React from 'react';
import Image from 'next/image';

const PhilosophySection6 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Philosophy/section2/img6-1.759d15c.jpg"
        alt="Philosophy Background"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
};

export default PhilosophySection6;
