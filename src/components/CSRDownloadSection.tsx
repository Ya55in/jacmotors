'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const CSRDownloadSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/CSR/section4/StartAIImage.2c673eb.png"
          alt="CSR Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Download Image with Animation - Middle Bottom */}
      <div className="relative z-10 h-full flex items-end justify-center pb-8">
        <div className="text-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 mb-4"
          >
            <a 
              href="/assets/CSR/section4/JAC-CSR.pdf" 
              download="JAC-CSR.pdf"
              className="block"
            >
              <Image
                src="/assets/CSR/section4/download.png"
                alt="Download CSR Report"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </a>
          </motion.div>
          
          {/* CSR Report Text */}
          <div className="text-white text-center">
            <a 
              href="/assets/CSR/section4/JAC-CSR.pdf" 
              download="JAC-CSR.pdf"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <span className="text-red-500 font-bold text-lg md:text-xl">CSR</span>
              <span className="text-white font-bold text-lg md:text-xl ml-1">Report</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRDownloadSection;
