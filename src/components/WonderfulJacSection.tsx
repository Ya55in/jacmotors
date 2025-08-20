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
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 text-center">
            WONDERFUL JAC
          </h2>
        </div>
      </motion.div>

      {/* 3-Column Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="min-h-[80vh] flex"
      >
        {/* First Column - 30% Text + 70% Image */}
        <motion.div
          variants={itemVariants}
          className="w-1/3 flex flex-col"
        >
          {/* Top 30% - Text Area */}
          <div className="h-[30%] bg-white flex flex-col justify-center p-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3">
              JAC LIFE
            </h2>
            <p className="text-sm lg:text-base text-black">
              Explore the wonderful stories from JAC.
            </p>
          </div>
          
          {/* Bottom 70% - Image */}
          <div className="h-[70%] relative overflow-hidden">
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
          className="w-1/3 relative overflow-hidden"
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
          className="w-1/3 flex flex-col"
        >
          {/* Top 70% - Single Image */}
          <div className="h-[70%] relative overflow-hidden">
            <Image
              src="/assets/WONDERFUL JAC/it3.775b84d.png"
              alt="White JAC SUV"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom 30% - Text Overlay */}
          <div className="h-[30%] bg-amber-800/90 flex flex-col justify-center p-4">
            <h3 className="text-lg lg:text-xl font-bold text-white text-center mb-2">
              JAC STORIES
            </h3>
            <div className="text-center">
              <button className="bg-white text-black px-4 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition-colors duration-300">
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
