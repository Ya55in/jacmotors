'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection10() {
  return (
    <section className="py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Factory Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Factory 1 - Minute Factory */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/RD/section11/eq1.c52dc9f.jpg"
                alt="Minute Factory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Minute Factory
              </h3>
            </div>
          </motion.div>

          {/* Factory 2 - Black Light Factory */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/RD/section11/eq2.e53a0a4.jpg"
                alt="Black Light Factory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Black Light Factory
              </h3>
            </div>
          </motion.div>

          {/* Factory 3 - Digital Factory */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/RD/section11/eq3.774cfd0.jpg"
                alt="Digital Factory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Digital Factory
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
