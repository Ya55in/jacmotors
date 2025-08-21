'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface VehicleModel {
  id: string;
  name: string;
  image: string;
}

interface VehicleCategory {
  id: string;
  name: string;
  icon: string;
  models: VehicleModel[];
}

const ExploreModelsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeModel, setActiveModel] = useState(0);
  const [direction, setDirection] = useState(0);

  const categories: VehicleCategory[] = [
    {
      id: 'sedan-suv',
      name: 'SEDAN & SUV',
      icon: '🚗',
      models: [
        { id: 'e30x', name: 'E30X', image: '/assets/EXPLORE JAC MODELS/E30X.1d6d4d6.png' },
        { id: 'j7-plus', name: 'J7 Plus', image: '/assets/EXPLORE JAC MODELS/J7Plus.cbdf756.png' },
        { id: 'js8-pro', name: 'JS8 PRO', image: '/assets/EXPLORE JAC MODELS/JS8PRO.cbdf44e.png' },
        { id: 'js6', name: 'JS6', image: '/assets/EXPLORE JAC MODELS/JS6.a0dbc8b.png' },
        { id: 'js4', name: 'JS4', image: '/assets/EXPLORE JAC MODELS/JS4.1c36d90.png' },
        { id: 'js2-pro', name: 'JS2 PRO', image: '/assets/EXPLORE JAC MODELS/JS2PRO.733cb25.png' }
      ]
    },
    {
      id: 'truck-van',
      name: 'TRUCK & VAN',
      icon: '🚛',
      models: [
        { id: 'n-series', name: 'N-Series', image: '/assets/EXPLORE JAC MODELS/N-Series.908eec9.png' },
        { id: 'k7', name: 'K7', image: '/assets/EXPLORE JAC MODELS/K7.624d590.png' },
        { id: 'x-series', name: 'X-Series', image: '/assets/EXPLORE JAC MODELS/X-Series.0c20cc7.png' },
        { id: 'sunray-ev', name: 'Sunray EV', image: '/assets/EXPLORE JAC MODELS/SunrayEV.1f68dec.png' },
        { id: 'm3-ev', name: 'M3 EV', image: '/assets/EXPLORE JAC MODELS/M3EV.c220189.png' }
      ]
    },
    {
      id: 'pickup',
      name: 'PICKUP',
      icon: '🛻',
      models: [
        { id: 't9', name: 'T9', image: '/assets/EXPLORE JAC MODELS/T9.d56103b.png' },
        { id: 't9-ev', name: 'T9 EV', image: '/assets/EXPLORE JAC MODELS/T9EV.1e4c431.png' }
      ]
    }
  ];

  const currentCategory = categories[activeCategory];
  const currentModel = currentCategory.models[activeModel];

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setActiveModel(0);
  };

  const handleModelChange = (index: number) => {
    setDirection(index > activeModel ? 1 : -1);
    setActiveModel(index);
  };

  const handlePrevious = () => {
    if (activeModel > 0) {
      setDirection(-1);
      setActiveModel(activeModel - 1);
    }
  };

  const handleNext = () => {
    if (activeModel < currentCategory.models.length - 1) {
      setDirection(1);
      setActiveModel(activeModel + 1);
    }
  };

  // Auto-advance models every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeModel < currentCategory.models.length - 1) {
        setDirection(1);
        setActiveModel(activeModel + 1);
      } else {
        setDirection(1);
        setActiveModel(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeModel, currentCategory.models.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          EXPLORE JAC MODELS
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-2 px-4 sm:px-0 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(index)}
                className={`flex flex-col items-center space-y-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeCategory === index
                    ? 'bg-gray-100 border border-gray-300 shadow-sm'
                    : 'hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl sm:text-2xl">{category.icon}</span>
                <span className={`font-semibold text-xs sm:text-sm text-center ${
                  activeCategory === index ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Model Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-2 px-4 sm:px-0 scrollbar-hide">
            {currentCategory.models.map((model, index) => (
              <motion.button
                key={model.id}
                onClick={() => handleModelChange(index)}
                className={`relative font-medium text-sm sm:text-lg transition-all duration-300 flex-shrink-0 ${
                  activeModel === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {model.name}
                {activeModel === index && (
                  <motion.div
                    layoutId="activeModel"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Vehicle Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={activeModel === 0}
            className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              activeModel === 0
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeModel === currentCategory.models.length - 1}
            className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              activeModel === currentCategory.models.length - 1
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <ChevronRight size={16} className="sm:w-6 sm:h-6" />
          </button>

          {/* Vehicle Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${activeCategory}-${activeModel}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <Image
                  src={currentModel.image}
                  alt={currentModel.name}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Explore All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8 sm:mt-12"
        >
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg text-sm sm:text-base">
            Explore All
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreModelsSection;
