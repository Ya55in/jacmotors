'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection11() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      {/* Part 1: Advanced Equipment */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Advanced Equipment
            </h2>
          </motion.div>

          {/* Four Equipment Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Equipment 1 - ABB Robots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/RD/section12/edeq1.de79310.jpg"
                  alt="ABB Robots"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  ABB Robots
                </h3>
              </div>
            </motion.div>

            {/* Equipment 2 - KUKA Robots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/RD/section12/edeq2.7e43b2f.jpg"
                  alt="KUKA Robots"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  KUKA Robots
                </h3>
              </div>
            </motion.div>

            {/* Equipment 3 - 6000 Tonnage Stamping Machine */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/RD/section12/edeq3.98d7306.jpg"
                  alt="6000 Tonnage Stamping Machine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  6000 Tonnage Stamping Machine
                </h3>
              </div>
            </motion.div>

            {/* Equipment 4 - Auto Paint Spray Robots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/RD/section12/edeq4.5b6a5ba.jpg"
                  alt="Auto Paint Spray Robots"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Auto Paint Spray Robots
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Part 2: Manufacturing Base */}
      <div className="py-8 lg:py-12 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Main Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">
              High-End Intelligent New Energy Passenger Vehicle Manufacturing Base
            </h2>

            {/* Key Information */}
            <div className="space-y-3 text-white">
              <p className="text-sm sm:text-base lg:text-lg">
                Total construction area of 350,000 square meters.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                Adheres to transparent, green, lean and agile production model.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                Annual production capacity of 300,000 vehicles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
