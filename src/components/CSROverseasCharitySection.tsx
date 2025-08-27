'use client';

import Image from 'next/image';

const CSROverseasCharitySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text and Image */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Empowering charity overseas and shouldering enterprise social responsibility proactively.
              </h2>
            </div>

            {/* Image Below Text */}
            <div className="relative w-full">
              <Image
                src="/assets/CSR/section3/s4.7fcb872.png"
                alt="Firefighters and rescue team with JAC truck"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full flex justify-center">
            <Image
              src="/assets/CSR/section3/s5.6e01642.png"
              alt="Police officers in formation with police cars"
              width={480}
              height={320}
              className="w-3/5 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSROverseasCharitySection;
