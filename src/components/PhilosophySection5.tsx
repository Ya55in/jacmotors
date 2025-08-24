'use client';

import React from 'react';

const PhilosophySection5 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Brand Values */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Brand Values
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Be practical and moderate, Keep learning and innovating, Dare to strive forward, Maintain open-minded and coordinated, Focus on customer-oriented, Adhere to omnidirectional communication.
            </p>
          </div>
          
          {/* Right Column - Brand Core */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Brand Core
            </h2>
            <p className="text-lg text-black leading-relaxed">
              &ldquo;Think & Create&rdquo; is the grand layout of JAC to &ldquo;create a better vehicle life&rdquo;. JAC always stays true to original aspiration, adheres to the dream of manufacturing vehicles, and raises the banner of Chinese independent brand in auto industry.
            </p>
            <p className="text-lg text-black leading-relaxed mt-4">
              &ldquo;Be a Doer&rdquo; is a concrete manifestation of JAC fighting spirit, and it is the hard power and pragmatic image of JAC Motors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection5;
