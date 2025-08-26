'use client';

import React from 'react';
import Image from 'next/image';

const PhilosophySection4 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Brand Mission
          </h2>
          
          {/* Body Paragraph */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-black leading-relaxed">
              Provide customers with the optimal transportation solutions and driving experience to promote continuous progress of the world.
            </p>
          </div>
          
          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/assets/Philosophy/section2/img4-1.c931313.jpg"
                alt="Woman driving with steering wheel"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/assets/Philosophy/section2/img4-2.3ed6166.jpg"
                alt="Woman in car with blue lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection4;

