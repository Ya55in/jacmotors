'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RDSection6 = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Intelligent Technology
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            JAC continues to seek breakthroughs in the field of intelligent technology.
          </p>
        </motion.div>

        {/* Image Collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex gap-1 overflow-hidden shadow-2xl bg-white">
            {/* Image 1 - Digital Infotainment System */}
            <div className="w-1/3 relative h-32 sm:h-40 md:h-[200px] lg:h-[240px] overflow-hidden group">
              <Image
                src="/assets/RD/section6/Brand_R&D_03.68bbaa0.jpg"
                alt="Digital Infotainment System"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 2 - Large Vertical Touchscreen */}
            <div className="w-1/4 relative h-32 sm:h-40 md:h-[200px] lg:h-[240px] overflow-hidden group">
              <Image
                src="/assets/RD/section6/Brand_R&D_05.c3c1731.jpg"
                alt="Large Vertical Touchscreen"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 3 - Panoramic Sunroof Interior */}
            <div className="w-1/5 relative h-32 sm:h-40 md:h-[200px] lg:h-[240px] overflow-hidden group">
              <Image
                src="/assets/RD/section6/Brand_R&D_07.218aa9e.jpg"
                alt="Panoramic Sunroof Interior"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 4 - Digital Instrument Cluster and Driving Assist */}
            <div className="w-1/5 relative h-32 sm:h-40 md:h-[200px] lg:h-[240px] overflow-hidden group">
              <Image
                src="/assets/RD/section6/Brand_R&D_09.138d8d1.jpg"
                alt="Digital Instrument Cluster and Driving Assist"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 5 - Radar/Sensor Detection System */}
            <div className="w-1/5 relative h-32 sm:h-40 md:h-[200px] lg:h-[240px] overflow-hidden group">
              <Image
                src="/assets/RD/section6/Brand_R&D_11.a223655.jpg"
                alt="Radar/Sensor Detection System"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>

        {/* Text Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Section - Intelligent Networking */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Intelligent Networking
                </h3>
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Commercial vehicles are commercializing ADAS technologies such as LDWS and AEBS.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  The RF8 is the first to use the HarmonyOS 4.0 system and the iFLYTEK Xinghuo cognitive model to build an open software ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Intelligent Driving */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Intelligent Driving
                </h3>
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Launch L2+ products in batches.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Level 3 and Level 4 highly automated driving capabilities have been built.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RDSection6;
