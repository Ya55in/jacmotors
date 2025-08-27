'use client';

import Image from 'next/image';

const CSREmpoweringCharitySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            Empowering charity overseas and shouldering enterprise social responsibility proactively.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Firefighter Truck */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/CSR/section3/s4.7fcb872.png"
                alt="Firefighter team with JAC truck - Quebracho Bomberos Forestales"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Police Officers */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/CSR/section3/s5.6e01642.png"
                alt="Police officers in formation with patrol cars"
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

export default CSREmpoweringCharitySection;
