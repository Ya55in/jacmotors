'use client';

import { motion } from 'framer-motion';

export default function RDSection8() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            High-End Intelligent Commercial Vehicle Manufacturing Base
          </h2>
        </motion.div>

        {/* Key Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Metric 1 - Area */}
          <div className="text-center">
            <div className="text-sm sm:text-base lg:text-lg text-gray-900 mb-2">
              Covers An Area Over
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              2.6 Millions m²
            </div>
          </div>

          {/* Metric 2 - Investment */}
          <div className="text-center">
            <div className="text-sm sm:text-base lg:text-lg text-gray-900 mb-2">
              Total Investment
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              $760 Millions
            </div>
          </div>

          {/* Metric 3 - Production Capacity */}
          <div className="text-center">
            <div className="text-sm sm:text-base lg:text-lg text-gray-900 mb-2">
              Annual Production Capacity
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              200,000 Vehicles
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
