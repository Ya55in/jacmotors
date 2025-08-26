'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RDSection9() {
  return (
    <section className="py-0 bg-gray-100">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              src="/assets/RD/rdv.c2839d5.jpg"
              alt="R&D Video Content"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
