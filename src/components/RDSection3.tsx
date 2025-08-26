'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RDSection3 = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 sm:mb-6">
            Advanced Laboratory
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            State-of-the-art testing facilities ensuring the highest standards in automotive research and development
          </p>
        </motion.div>

        {/* Laboratory Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Crash Test Laboratory */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/20"
          >
            <div className="relative h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/assets/RD/section3/laboratory1.b50c027.png"
                alt="Crash Test Laboratory"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Safety Testing
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Crash Test Laboratory
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Capability to carry out passive safety tests according to national standard, C-NCAP, ECE, FMVSS, Euro NCAP, etc.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">C-NCAP</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">ECE</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">FMVSS</span>
              </div>
            </div>
          </motion.div>

          {/* Intelligent Network Laboratory */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/20"
          >
            <div className="relative h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/assets/RD/section3/laboratory2.0bc90c7.png"
                alt="Intelligent Network Laboratory"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Innovation
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                Intelligent Network Laboratory
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                The first laboratory of intelligent network connection recognized by CNAS in China.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center text-sm text-indigo-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CNAS Recognized
              </div>
            </div>
          </motion.div>

          {/* NVH Laboratory */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/20"
          >
            <div className="relative h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/assets/RD/section3/laboratory3.6457bcc.png"
                alt="NVH Laboratory"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Acoustic Testing
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                NVH Laboratory
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Composed of Four-wheel drum double-side noise lab, two-wheel drum whole-vehicle semi-anechoic chamber, material acoustic performance lab, sound quality evaluation lab and modal lab.
              </p>
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 text-xs">
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Noise Lab</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Anechoic Chamber</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Acoustic Lab</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Modal Lab</span>
              </div>
            </div>
          </motion.div>

          {/* EMC Laboratory */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-white/20"
          >
            <div className="relative h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src="/assets/RD/section3/laboratory4.4ba83ed.png"
                alt="EMC Laboratory"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                EMC Testing
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300">
                EMC Laboratory
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Used to measure various electronic and electrical properties of vehicles and their mutual influence, including a 10-meter semi-radio anechoic chamber, a semi-radio anechoic chamber, and two shielding chambers.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">10m Chamber</span>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Semi-Radio</span>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Shielding</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Experience Our Advanced Testing Capabilities?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Discover how our state-of-the-art laboratories ensure the highest quality and safety standards.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RDSection3;
