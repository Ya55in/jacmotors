'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection14() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Quality Oriented
          </h2>
        </motion.div>

        {/* Three Column Layout */}
        <div className="relative">
          {/* Red Separator Lines */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-red-600 hidden lg:block"></div>
          <div className="absolute top-0 bottom-0 right-1/3 w-px bg-red-600 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 - Extreme Environments Adaptability Test */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Extreme Environments Adaptability Test
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 lg:mb-8">
                Accumulative overseas testing mileage over 2,558,000 km.
              </p>
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg">
                <Image
                  src="/assets/RD/section14/qo1.a658e81.png"
                  alt="White SUV on test track"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.div>

            {/* Column 2 - Germany VDA Quality Management System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Germany VDA Quality Management System
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 lg:mb-8">
                International quality standard integrating 12 functions.
              </p>
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg">
                <Image
                  src="/assets/RD/section14/qo2.59a5b2f.png"
                  alt="Person inspecting red sports car"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.div>

            {/* Column 3 - Three-Arc High-Ring Runway Testing Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Three-Arc High-Ring Runway Testing Track
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 lg:mb-8">
                McConnell curve design, capable to carry out reliability and durability test for all product models.
              </p>
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg">
                <Image
                  src="/assets/RD/section14/qo3.ae560a2.png"
                  alt="JAC test track aerial view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
