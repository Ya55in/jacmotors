'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RDSection1 = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Innovative R&D
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Text Content + Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">*</span>
                  <span className="text-lg text-gray-700">National Enterprise Technology Center</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">*</span>
                  <span className="text-lg text-gray-700">National Industrial Design Center</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl font-bold">*</span>
                  <span className="text-lg text-gray-700">Overseas R&D Center</span>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-lg text-gray-700 mb-4">
                  A R&D team of nearly{' '}
                  <span className="text-red-600 font-bold text-xl">5,000</span> people,{' '}
                  <span className="text-red-600 font-bold text-xl">39</span> skill master-studios and{' '}
                  <span className="text-red-600 font-bold text-xl">324</span> senior engineers.
                </p>
                
                <p className="text-lg text-gray-700">
                  <span className="text-red-600 font-bold text-xl">5%-8%</span> annual sales revenue investment on R&D with total investment over{' '}
                  <span className="text-red-600 font-bold text-xl">$300 million</span> in 2023.
                </p>
              </div>
            </div>

            {/* Image below text */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/assets/RD/section1/jac1.9fa7645.png"
                alt="JAC Motors DE-FINE Car Design"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side - Three Stacked Images with Custom Heights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full space-y-4 lg:space-y-6"
          >
            {/* First Image - Larger */}
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/RD/section1/jac2.180755d.png"
                alt="Designer examining car model"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image - Medium */}
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/RD/section1/jac3.ca34a0d.png"
                alt="Design drawing process"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Image - Smaller */}
            <div className="relative h-56 lg:h-72 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/RD/section1/jac4.7e442d0.png"
                alt="Designer working on digital tablet"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RDSection1;
