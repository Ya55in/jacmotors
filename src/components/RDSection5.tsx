'use client';

import { motion } from 'framer-motion';

export default function RDSection5() {
  return (
    <section className="py-8 lg:py-12 bg-gray-100">
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
            New Energy Technology
          </h2>
        </motion.div>

        {/* Top Data Section - Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 lg:mb-12"
        >
          {/* Column 1 - BEV Core Technologies */}
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
              Over 50
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-900">
              BEV Core Technologies
            </div>
          </div>

          {/* Column 2 - Technology and Product Iterations */}
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
              Through 9th technology
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-900">
              and 4th products iteration.
            </div>
          </div>

          {/* Column 3 - Test Mileage */}
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
              The test mileage has
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-900">
              accumulated 43 million kilometers.
            </div>
          </div>
        </motion.div>

        {/* Bottom Data Section - Patents & Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Separator Lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-0 bottom-0 w-px border-l border-dotted border-gray-400"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dotted border-gray-400"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-px border-l border-dotted border-gray-400"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Column 1 - Approved Patents */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                719
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-900">
                Approved Patents
              </div>
            </div>

            {/* Column 2 - Invention Patents */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                268
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-900">
                Invention Patents
              </div>
            </div>

            {/* Column 3 - International Technical Standards */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                141
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-900">
                International Technical Standard Applied
              </div>
            </div>

            {/* Column 4 - National & Industrial Standards */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                21
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-900">
                National&Industrial Standards Drafting&Advising
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
