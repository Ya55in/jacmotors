'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RDSection2 = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            R&D System
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
        </motion.div>

        {/* R&D System Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[550px]"
        >
          {/* Central Element - JAC Headquarters R&D Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="bg-transparent border-2 border-blue-500 text-gray-900 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 text-gray-900">JAC Headquarter</h3>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-900">R&D Center</p>
              </div>
            </div>
          </motion.div>

          {/* Top Left - Overseas Design Center */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 xl:top-12 xl:left-12 z-10"
          >
            <div className="bg-white border-2 border-blue-500 text-gray-900 p-4 sm:p-5 lg:p-6 xl:p-7 rounded-xl shadow-md">
              <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-center">Overseas Design Center</h4>
            </div>
          </motion.div>

          {/* Top Right - Global Strategic Cooperation */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-10 lg:right-10 xl:top-12 xl:right-12 z-10"
          >
            <div className="bg-white border-2 border-blue-500 text-gray-900 p-4 sm:p-5 lg:p-6 xl:p-7 rounded-xl shadow-md">
              <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-center">Global Strategic Cooperation</h4>
            </div>
          </motion.div>

          {/* Bottom Right - Adaptive Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-10"
          >
            <div className="bg-white border-2 border-cyan-500 text-gray-900 p-3 lg:p-4 rounded-3xl shadow-md max-w-[200px] lg:max-w-[250px]">
              <h4 className="text-xs lg:text-sm font-semibold text-center">Adaptive Engineering Under Each Business Units</h4>
            </div>
          </motion.div>

          {/* Bottom Left - Industry-University-Research Cooperation */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16 z-10"
          >
            <div className="bg-white border-2 border-cyan-500 text-gray-900 p-3 lg:p-4 rounded-3xl shadow-md max-w-[200px] lg:max-w-[250px]">
              <h4 className="text-xs lg:text-sm font-semibold text-center">Industry-University-Research Cooperation</h4>
            </div>
          </motion.div>

          {/* Rectangular Connection Lines with Curved Borders */}
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 600">
            {/* Rectangular border with curved corners */}
            <rect 
              x="70"
              y="115" 
              width="650" 
              height="320" 
              rx="150" 
              ry="150"
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="8,4" 
              fill="none" 
            />
            
            {/* Central connections with curved paths */}
            {/* <path 
              d="M 200 150 Q 275 225 350 300" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="8,4" 
              fill="none" 
            /> */}
            {/* <path 
              d="M 600 150 Q 525 225 450 300" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="8,4" 
              fill="none" 
            /> */}
            {/* <path 
              d="M 600 450 Q 525 375 450 300" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="8,4" 
              fill="none" 
            /> */}
            {/* <path 
              d="M 200 450 Q 275 375 350 300" 
              stroke="#94A3B8" 
              strokeWidth="2" 
              strokeDasharray="8,4" 
              fill="none" 
            /> */}
            
            {/* Cross connections with gentle curves */}
            {/* <path 
              d="M 200 150 Q 400 150 600 150" 
              stroke="#94A3B8" 
              strokeWidth="1.5" 
              strokeDasharray="6,3" 
              fill="none" 
            /> */}
            {/* <path 
              d="M 200 450 Q 400 450 600 450" 
              stroke="#94A3B8" 
              strokeWidth="1.5" 
              strokeDasharray="6,3" 
              fill="none" 
            /> */}
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default RDSection2;
