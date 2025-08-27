'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const productAchievements = [
  {
    icon: '/assets/AboutJac/section5/download.png',
    title: 'Chinese Top 10 Engines',
    details: '',
    year: '2019'
  },
  {
    icon: '/assets/AboutJac/section5/download (1).png',
    title: 'e-JS1-"Best Resale Value"',
    details: 'Award From KBB In Brazil',
    year: '2021'
  },
  {
    icon: '/assets/AboutJac/section5/hh3.cfe2f0e.png',
    title: 'J7-The Runner-Up In Altair\'s',
    details: '"Lightweight Enabling Technology"',
    year: '2021'
  },
  {
    icon: '/assets/AboutJac/section5/hh4.908a88a.png',
    title: 'RF8-Top 10 Body & Best',
    details: 'Structure Award in China',
    year: '2023'
  },
  {
    icon: '/assets/AboutJac/section5/download (4).png',
    title: 'E30X-The First CNCAP',
    details: 'Five-Star Safety Certification For A0-class Pure Electric Vehicles In China',
    year: '2023'
  }
];

const AboutSection6 = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Horizontal Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {productAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white rounded-lg p-6 lg:p-4 shadow-sm"
            >
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 mb-4 relative">
                <Image
                  src={achievement.icon}
                  alt={achievement.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-sm lg:text-base font-semibold text-black mb-2 leading-tight">
                {achievement.title}
              </h3>
              
              {/* Details */}
              {achievement.details && (
                <p className="text-xs lg:text-sm text-gray-600 mb-3 leading-tight">
                  {achievement.details}
                </p>
              )}
              
              {/* Year */}
              <p className="text-lg lg:text-xl font-bold text-black">
                {achievement.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection6;


