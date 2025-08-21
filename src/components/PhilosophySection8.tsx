'use client';

import React from 'react';
import Image from 'next/image';

const PhilosophySection8 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Brand Characteristics
            </h2>
            
            {/* Wisdom Section */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Wisdom
              </h3>
              <p className="text-lg text-black leading-relaxed">
                Not only has an attitude of empathy, but also has a keen and forward-looking vision, and quickly finds effective methods to help consumers solve problems and create value.
              </p>
            </div>
            
            {/* Vitality Section */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Vitality
              </h3>
              <p className="text-lg text-black leading-relaxed">
                Continuous innovation, full of action, active change and continuous improvement; lead the industry progress with new perspectives and new concepts.
              </p>
            </div>
            
            {/* Enthusiasm Section */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Enthusiasm
              </h3>
              <p className="text-lg text-black leading-relaxed">
                With reliable, trustworthy and down-to-earth research, relying on leading technology and long manufacturing history, strive to introduce high-quality products, and make consumers' lives more secure and easy.
              </p>
            </div>
            
            {/* Enterprising Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Enterprising
              </h3>
              <p className="text-lg text-black leading-relaxed">
                Always pay attention to customer needs, actively keep an eye on market changes, follow the market trend, and take the initiative to meet various challenges instead of waiting for opportunities to come.
              </p>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="space-y-6">
            {/* First Image */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/assets/Philosophy/lastsection/img7-1.99e7a64.jpg"
                alt="Red SUV with children running towards water"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Second Image */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/assets/Philosophy/lastsection/img7-2.3945067.jpg"
                alt="Man with dog in truck bed"
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

export default PhilosophySection8;
