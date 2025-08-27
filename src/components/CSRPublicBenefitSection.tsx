'use client';

import Image from 'next/image';

const CSRPublicBenefitSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Public Benefit Activities
          </h2>
        </div>

        {/* Image Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/assets/CSR/section1/activies.f5ccf7f.png"
              alt="JAC Motors Public Benefit Activities - Children and community event"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default CSRPublicBenefitSection;
