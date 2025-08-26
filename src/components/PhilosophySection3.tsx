'use client';

import React from 'react';
import Image from 'next/image';

const PhilosophySection3 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Philosophy/section1/img3.6d1d38f.jpg"
        alt="Philosophy Background"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
};

export default PhilosophySection3;

