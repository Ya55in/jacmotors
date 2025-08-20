'use client';

import Image from 'next/image';

const AboutSection3 = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Image Section */}
      <div className="relative w-full h-screen">
                 <Image
           src="/assets/AboutJac/section2/img1.8ea8b1c.jpg"
           alt="JAC Motors Campus Aerial View"
           fill
           className="object-cover"
           priority
         />
      </div>
    </section>
  );
};

export default AboutSection3;
