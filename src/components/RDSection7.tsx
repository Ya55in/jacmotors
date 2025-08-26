'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection7() {
  return (
    <section className="py-8 lg:py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Four Component Displays */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 lg:mb-12"
        >
          {/* Component 1 - Honeycomb Battery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="p-3 h-48 overflow-hidden">
              <div className="relative h-36 mb-2">
                <Image
                  src="/assets/RD/section8/t1.6f3d3e6.jpg"
                  alt="Honeycomb Battery"
                  fill
                  className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="text-white text-xs font-medium text-center">
                  Honeycomb Battery
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Component 2 - Thermal Management System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="p-3 h-48 overflow-hidden">
              <div className="relative h-36 mb-2">
                <Image
                  src="/assets/RD/section8/t2.96fc9f1.jpg"
                  alt="Thermal Management System"
                  fill
                  className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="text-white text-xs font-medium text-center">
                  Thermal Management System
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Component 3 - CTB Battery Body Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="p-3 h-48 overflow-hidden">
              <div className="relative h-36 mb-2">
                <Image
                  src="/assets/RD/section8/t3.fcfec88.jpg"
                  alt="CTB Battery Body Integration"
                  fill
                  className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="text-white text-xs font-medium text-center">
                  CTB Battery Body Integration
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Component 4 - 9-In-1 Electric Drive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="p-3 h-48 overflow-hidden">
              <div className="relative h-36 mb-2">
                <Image
                  src="/assets/RD/section8/t4.1e58167.jpg"
                  alt="9-In-1 Electric Drive"
                  fill
                  className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h3 className="text-white text-xs font-medium text-center">
                  9-In-1 Electric Drive
                </h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Wireframe Car */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg">
            <Image
              src="/assets/RD/section8/wyjg.12d9f5e.png"
              alt="Wireframe Car Undercarriage"
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
