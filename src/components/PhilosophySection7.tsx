'use client';

import React from 'react';
import Image from 'next/image';

const PhilosophySection7 = () => {
  return (
    <section className="py-20 bg-white">
             <div className="w-full px-1">
         <div className="flex flex-col md:flex-row gap-1">
                                                                                           {/* First Image - 35% */}
              <div className="relative h-[600px] w-full md:w-[35%] overflow-hidden group cursor-pointer">
               <Image
                 src="/assets/Philosophy/sectionimages/img6-2.0810287.jpg"
                 alt="Orange SUV on beach with surfboard and luggage"
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-125"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
             </div>
             
                         {/* Second Image - 25% */}
              <div className="relative h-[600px] w-full md:w-[25%] overflow-hidden group cursor-pointer">
               <Image
                 src="/assets/Philosophy/sectionimages/img6-3.a5b7f2d.jpg"
                 alt="Person's legs and hands with sunglasses in car"
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-125"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
             </div>
             
                         {/* Third Image - 40% */}
              <div className="relative h-[600px] w-full md:w-[40%] overflow-hidden group cursor-pointer">
             <Image
               src="/assets/Philosophy/sectionimages/img6-4.5456e3c.jpg"
               alt="Red SUV with people jumping around it"
               fill
               className="object-cover transition-transform duration-500 group-hover:scale-125"
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection7;
