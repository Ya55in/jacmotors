'use client';

import Image from 'next/image';

const CSRSince2013Section = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Since 2013
          </h2>
        </div>

        {/* Description Text */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-black mb-2">
            "Hand In Hand" Refine Brand Charitable activities.
          </p>
          <p className="text-lg md:text-xl text-black">
            "Shimmer Action" public welfare contributing to protection and healthcare for left-behind children.
          </p>
        </div>

        {/* Three Images Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Left Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/assets/CSR/section2/s1.8fe11d8.png"
              alt="Children with plush toys at charitable event"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/assets/CSR/section2/s2.c2c8375.png"
              alt="Child with green bag at charitable event"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/assets/CSR/section2/s3.0122677.png"
              alt="Group of children raising hands at charitable event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRSince2013Section;
