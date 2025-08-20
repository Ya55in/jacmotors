'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: 'Top 500', description: 'China Auto Company', bgColor: 'bg-gray-100', textColor: 'text-black' },
  { number: '10 Million', description: 'Global Sales Volume', bgColor: 'bg-black', textColor: 'text-white' },
  { number: 'No. 36', description: '2023 BrandZ China\'s Global Brand', bgColor: 'bg-white', textColor: 'text-black' },
  { number: '6 Billion $', description: 'Global Top 100 Most Valuable Car Brands', bgColor: 'bg-red-600', textColor: 'text-white' },
  { number: 'TOP 100', description: '2023 Brand Finance\'s List Of The World\'s Most Valuable Car Brands', bgColor: 'bg-gray-100', textColor: 'text-black' },
  { number: '130 +', description: 'Countries and Regions', bgColor: 'bg-white', textColor: 'text-black' },
  { number: '1 Million', description: 'Overseas Users', bgColor: 'bg-red-600', textColor: 'text-white' },
];

const AboutSection4 = () => {
  return (
         <section className="relative min-h-[60vh] flex flex-col lg:flex-row bg-gray-100">
             {/* Left Section: Car Image */}
       <div className="relative w-full lg:w-2/5 min-h-[40vh] lg:min-h-[60vh] flex items-center justify-center bg-gray-100">
         <div className="relative w-full h-full">
           <Image
             src="/assets/AboutJac/section3/his-img.a2641a4.png"
             alt="JAC Motors History"
             fill
             className="object-contain"
             priority
           />
         </div>
       </div>

      {/* Right Section: Statistics Grid */}
      <div className="w-full lg:w-3/5 grid grid-cols-2 gap-0">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center p-6 lg:p-8 text-center border border-gray-200 ${stat.bgColor} ${stat.textColor}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold mb-2 leading-tight">{stat.number}</h2>
            <p className="text-xs lg:text-sm font-light leading-tight max-w-32 lg:max-w-40">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection4;
