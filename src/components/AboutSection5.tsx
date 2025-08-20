'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
  {
    icon: '/assets/AboutJac/section4/download.png',
    title: 'National Enterprise Technology Center',
    year: '2006'
  },
  {
    icon: '/assets/AboutJac/section4/download (1).png',
    title: 'Export Inspection-free Enterprise',
    year: '2009'
  },
  {
    icon: '/assets/AboutJac/section4/download (2).png',
    title: 'National Quality Award',
    year: '2010'
  },
  {
    icon: '/assets/AboutJac/section4/download (3).png',
    title: 'National Industrial Design Center',
    year: '2015'
  },
  {
    icon: '/assets/AboutJac/section4/h3.6cdb225.png',
    title: 'China Industry Award',
    year: '2018'
  },
  {
    icon: '/assets/AboutJac/section4/h6.b06d7e7.png',
    title: 'AutoVision China Jury Nomination Award',
    year: '2023'
  }
];

const AboutSection5 = () => {
  return (
         <section className="relative min-h-[60vh] bg-white">
       {/* Top Section - Title */}
       <div className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-black mb-4"
          >
            JAC Brand Honors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-black"
          >
            To be Excellent
          </motion.p>
        </div>
      </div>

             {/* Bottom Section - Achievements Grid */}
       <div className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 mb-6 relative">
                  <Image
                    src={achievement.icon}
                    alt={achievement.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2 leading-tight">
                  {achievement.title}
                </h3>
                
                {/* Year */}
                <p className="text-2xl lg:text-3xl font-bold text-black">
                  {achievement.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection5;
