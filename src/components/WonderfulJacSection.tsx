'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const WonderfulJacSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full bg-white">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 py-3 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center">
            WONDERFUL JAC
          </h2>
        </div>
      </motion.div>

      {/* 3-Column Layout - Stack on mobile */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="min-h-[60vh] sm:min-h-[80vh] flex flex-col sm:flex-row"
      >
        {/* First Column - 30% Text + 70% Image */}
        <motion.div
          variants={itemVariants}
          className="w-full sm:w-1/3 flex flex-col h-64 sm:h-auto"
        >
          {/* Top 30% - Text Area */}
          <div className="h-1/3 sm:h-[30%] bg-white flex flex-col justify-center p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3">
              JAC LIFE
            </h2>
            <p className="text-sm lg:text-base text-black">
              Explore the wonderful stories from JAC.
            </p>
          </div>
          
          {/* Bottom 70% - Image */}
          <div className="h-2/3 sm:h-[70%] relative overflow-hidden">
            <Image
              src="/assets/WONDERFUL JAC/it1.8a83ef6.png"
              alt="JAC Logo with foliage"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Second Column - Full Image */}
        <motion.div
          variants={itemVariants}
          className="w-full sm:w-1/3 relative overflow-hidden h-64 sm:h-auto"
        >
          <Image
            src="/assets/WONDERFUL JAC/it2.67c382a.png"
            alt="Red JAC JS4 SUV with towers"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Third Column - 70% Image + 30% Text Overlay */}
        <motion.div
          variants={itemVariants}
          className="w-full sm:w-1/3 flex flex-col h-64 sm:h-auto"
        >
          {/* Top 70% - Single Image */}
          <div className="h-2/3 sm:h-[70%] relative overflow-hidden">
            <Image
              src="/assets/WONDERFUL JAC/it3.775b84d.png"
              alt="White JAC SUV"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom 30% - Text Overlay */}
          <div className="h-1/3 sm:h-[30%] bg-amber-800/90 flex flex-col justify-center p-3 sm:p-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white text-center mb-1 sm:mb-2">
              JAC STORIES
            </h3>
            <div className="text-center">
              <button className="bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-300">
                Explore More
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WonderfulJacSection;
