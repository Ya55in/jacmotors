'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection15() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="relative w-full overflow-hidden">
          <Image
            src="/assets/RD/section15/JAC_065.75ad951.png"
            alt="JAC Motors"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
