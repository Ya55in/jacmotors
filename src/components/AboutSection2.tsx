'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection2 = () => {
  return (
         <section className="relative overflow-hidden">
       {/* Image Section - Top */}
       <div className="relative h-screen w-full">
         <Image
           src="/assets/AboutJac/section2/img1.8ea8b1c.jpg"
           alt="JAC Motors Campus Aerial View"
           fill
           className="object-cover"
           priority
         />
       </div>

       {/* Red Background Section with Text - Bottom */}
       <div className="relative bg-red-600 py-16 lg:py-24">
         <div className="px-8 lg:px-16 max-w-4xl mx-auto">
           {/* Text Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="text-white"
           >
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-2xl lg:text-4xl font-bold mb-4 leading-tight"
             >
               Explore JAC Motors
             </motion.h1>
             
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-xl lg:text-2xl font-bold mb-4 leading-tight"
             >
               Better Drive, Better Life
             </motion.h2>
             
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="text-sm lg:text-base leading-relaxed max-w-3xl"
             >
               Anhui Jianghuai Automobile Group Co., Ltd. (abbreviated as JAC Motors or JAC) is a comprehensive automobile enterprise that integrates R&D, production and sales of a full range of commercial vehicle, passenger vehicle and powertrain, and covers many fields such as ride hailing/sharing and financial services.
             </motion.p>
           </motion.div>
         </div>
       </div>

      
    </section>
  );
};

export default AboutSection2;
