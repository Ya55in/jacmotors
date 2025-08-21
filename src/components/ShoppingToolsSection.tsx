'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ShoppingToolsSection = () => {
  const tools = [
    {
      id: 'build-jac',
      title: 'Build Your JAC',
      image: '/assets/SHOPPING TOOLS/tool1.53a2938.png'
    },
    {
      id: 'message',
      title: 'Message',
      image: '/assets/SHOPPING TOOLS/tool2.c894058.png'
    },
    {
      id: 'jac-life',
      title: 'JAC Life',
      image: '/assets/SHOPPING TOOLS/tool4.1383b5a.png'
    },
    {
      id: 'survey',
      title: 'Survey',
      image: '/assets/SHOPPING TOOLS/download.png'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          SHOPPING TOOLS
        </motion.h2>

        {/* Tools Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                
                {/* Title */}
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-center">
                  {tool.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separator Lines - Only show on larger screens */}
        <div className="hidden sm:flex justify-center mt-6 sm:mt-8">
          <div className="flex space-x-8 lg:space-x-16">
            {tools.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="w-px h-8 bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingToolsSection;
