'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection13() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Composite Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Aerial View - Large Background Image */}
          <div className="relative h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-xl">
            <Image
              src="/assets/RD/section13/eqfj.d6cefe0.png"
              alt="Aerial view of JAC Motors manufacturing facility"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
              priority
            />
          </div>

          {/* Three Inset Images at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="flex gap-3 lg:gap-6 -mb-8 lg:-mb-16">
              {/* Left Inset - Robotic Assembly */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-40 h-32 lg:w-64 lg:h-48 overflow-hidden rounded-lg shadow-lg border-2 border-white"
              >
                <Image
                  src="/assets/RD/section13/edeq5.230254d.jpg"
                  alt="Robotic assembly line"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 256px"
                />
              </motion.div>

              {/* Middle Inset - Production Line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative w-40 h-32 lg:w-64 lg:h-48 overflow-hidden rounded-lg shadow-lg border-2 border-white"
              >
                <Image
                  src="/assets/RD/section13/edeq6.26fe6a5.jpg"
                  alt="Production line with vehicles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 256px"
                />
              </motion.div>

              {/* Right Inset - Multiple Robotic Assembly */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative w-40 h-32 lg:w-64 lg:h-48 overflow-hidden rounded-lg shadow-lg border-2 border-white"
              >
                <Image
                  src="/assets/RD/section13/edeq7.5f98886.jpg"
                  alt="Multiple robotic assembly stations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 256px"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
