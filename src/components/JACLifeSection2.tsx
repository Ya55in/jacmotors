'use client';

import React from 'react';

const JACLifeSection2 = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Question */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Besides providing vehicles, what values can JAC provide in users' life?
          </h2>
          
          {/* Three Statements */}
          <div className="space-y-6 mt-12">
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-black leading-relaxed">
                To redefine products from a new perspective.
              </p>
            </div>
            
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-black leading-relaxed">
                To create a good products that meet more users needs.
              </p>
            </div>
            
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-black leading-relaxed">
                Not only to deliver a car or a certain function, but also to share a lifestyle and attitude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JACLifeSection2;
