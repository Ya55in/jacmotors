'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RDSection4 = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 sm:mb-6">
            Intelligent Technology Platform
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Advanced vehicle platforms designed for innovation, efficiency, and sustainable mobility solutions
          </p>
        </motion.div>

        {/* Car Images Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {/* Car 1 - Small Hatchback */}
          <div className="group">
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/assets/RD/section4/plat1.01e3762.png"
                alt="Small Hatchback"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
            </div>
          </div>

          {/* Car 2 - Covered Car */}
          <div className="group">
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/assets/RD/section4/plat2.086ecaa.png"
                alt="Medium to Large Vehicle"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
            </div>
          </div>

          {/* Car 3 - MPV */}
          <div className="group">
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/assets/RD/section4/plat3.b82fbaa.png"
                alt="MPV"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
            </div>
          </div>

          {/* Car 4 - SUV */}
          <div className="group">
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/assets/RD/section4/plat4.422df00.png"
                alt="SUV"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
            </div>
          </div>

          {/* Car 5 - Compact SUV */}
          <div className="group">
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/assets/RD/section4/plat5.1049db4.png"
                alt="Compact SUV"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 20vw, 20vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Platform Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Left Section - New Energy Vehicle Platforms */}
          <div className="relative">
            <div className="border-2 border-dashed border-blue-500 rounded-xl p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-600 mb-4 sm:mb-6">
                New Energy Vehicle Platforms
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* DI Platform */}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-red-600">DI Platform</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Small and Medium Car and SUV</p>
                  </div>
                </div>

                {/* DE Platform */}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-red-600">DE Platform</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Medium and Large Car and SUV</p>
                  </div>
                </div>

                {/* DM Platform */}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-red-600">DM Platform</h4>
                    <p className="text-xs sm:text-sm text-gray-700">MPV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - ICE Vehicle Platforms */}
          <div className="relative">
            <div className="border-2 border-dashed border-red-500 rounded-xl p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-600 mb-4 sm:mb-6">
                Internal Combustion Engine Platforms
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* ICE Platform */}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-red-600">ICE Platform</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Medium and Large ICE Vehicle Platform</p>
                  </div>
                </div>

                {/* Small ICE Vehicle Platform */}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-700">Small ICE Vehicle Platform</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Compact and efficient ICE solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RDSection4;
