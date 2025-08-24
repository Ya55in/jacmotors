'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface NewsItem {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
}

interface EventItem {
  id: string;
  image: string;
  date: string;
  title: string;
  overlayTitle: string;
  overlaySubtitle: string;
}

const DiscoverJacSection = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  const newsItems: NewsItem[] = [
    {
      id: 'news-1',
      image: '/assets/DISCOVER JAC/5c20ae2ee8843e893ad96acac02a2120.jpg',
      date: '2025/08/12',
      title: 'JAC Motors successfully delivered its electric pickup, the T9 EV, to a major airline in Singapore',
      description: 'JAC Motors successfully delivered its electric pickup, the T9 EV, to a major airline in Singapore, marking a significant milestone in sustainable transportation.'
    },
    {
      id: 'news-2',
      image: '/assets/DISCOVER JAC/09d2179cddb1064edc4d08d9c71b7a7d.jpg',
      date: '2025/07/21',
      title: 'By Driving Sustainable Development Through Innovation, JAC Motors Stands as a Pioneer',
      description: 'By Driving Sustainable Development Through Innovation, JAC Motors Stands as a Pioneer in the automotive industry.'
    },
    {
      id: 'news-3',
      image: '/assets/DISCOVER JAC/04f4eb7061739edaabd3e89376f34385.jpg',
      date: '2025/07/09',
      title: 'The First Batch of 50 Garbage Trucks was Formally Delivered to the Almaty City',
      description: 'The First Batch of 50 Garbage Trucks was Formally Delivered to the Almaty City Government.'
    }
  ];

  const eventItems: EventItem[] = [
    {
      id: 'event-1',
      image: '/assets/DISCOVER JAC/7f6f424407f86cfb747026f9c0ff5fff.jpg',
      date: '2025/02/25',
      title: 'JAC E30X Launch Ceremony',
      overlayTitle: 'JAC E30X',
      overlaySubtitle: 'Ever so fun.'
    },
    {
      id: 'event-2',
      image: '/assets/DISCOVER JAC/9787c04ca2aa5a39a216f86f3dbeeab2.jpg',
      date: '2024/10/31',
      title: 'JAC T9 Pickup Launch Ceremony',
      overlayTitle: 'JAC T9 Pickup',
      overlaySubtitle: 'Launch Ceremony'
    },
    {
      id: 'event-3',
      image: '/assets/DISCOVER JAC/7f9a441cc169b3be4cc9abe6b04a09d0.jpg',
      date: '2024/09/17',
      title: 'JAC IAA 2024',
      overlayTitle: 'Hallo, Hannover!',
      overlaySubtitle: 'JAC MOTORS IAA TRANSPORTATION 2024'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          DISCOVER JAC
        </motion.h2>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex space-x-6 sm:space-x-8">
            {[
              { id: 'news', label: 'NEWS' },
              { id: 'events', label: 'EVENTS' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'news' | 'events')}
                className={`relative font-semibold text-base sm:text-lg transition-all duration-300 ${
                  activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {activeTab === 'news' ? (
              // News Cards
              newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Container with Hover Effect */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => console.error('Image failed to load:', item.image)}
                      onLoad={() => console.log('Image loaded successfully:', item.image)}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <span className="text-gray-900 font-semibold text-xs sm:text-sm">Read More</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">{item.date}</p>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              // Event Cards
              eventItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Container with Hover Effect */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => {
                        console.error('Event image failed to load:', item.image);
                      }}
                      onLoad={() => console.log('Event image loaded successfully:', item.image)}
                    />
                    
                    {/* Overlay Text */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-white z-10">
                      <h4 className="text-lg sm:text-xl font-bold mb-1 drop-shadow-lg">{item.overlayTitle}</h4>
                      <p className="text-xs sm:text-sm opacity-90 drop-shadow-lg">{item.overlaySubtitle}</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <span className="text-gray-900 font-semibold text-xs sm:text-sm">View Event</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">{item.date}</p>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Explore All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg text-sm sm:text-base">
            Explore All
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverJacSection;
