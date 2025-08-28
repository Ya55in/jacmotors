'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const JACLifeGridSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gridItems = [
    {
      id: 1,
      image: '/assets/JAClife/section2/video1/imagevideo1.jpg',
      video: '/assets/JAClife/section2/video1/vd1.fbec841.mp4',
      alt: 'Woman wearing a red cap'
    },
    {
      id: 2,
      image: '/assets/JAClife/section2/video2/pro2.770bff9.jpg',
      video: '/assets/JAClife/section2/video2/vd2.3c75b5d.mp4',
      alt: 'Robot/figure toy on a blue background'
    },
    {
      id: 3,
      image: '/assets/JAClife/section2/video3/imagevideo3.jpg',
      video: '/assets/JAClife/section2/video3/vd6.fbc0e05.mp4',
      alt: 'Man in purple sweater writing on a desk'
    },
    {
      id: 4,
      image: '/assets/JAClife/section2/video4/pro3.85c8c01.jpg',
      video: '/assets/JAClife/section2/video4/vd3.a1f7827.mp4',
      alt: 'Tote bag with text: "I\'M A JAC BAG"'
    },
    {
      id: 5,
      image: '/assets/JAClife/section2/video5/pro5.0a67a3d.jpg',
      video: '/assets/JAClife/section2/video5/vd5.0a6c380.mp4',
      alt: 'Hand placing a magnet with a car design on a fridge'
    },
    {
      id: 6,
      image: '/assets/JAClife/section2/video6/pro4.93e4728.jpg',
      video: '/assets/JAClife/section2/video6/vd4.4cdd349.mp4',
      alt: 'Assorted caps in different colors (pink, black, green, beige, red)'
    }
  ];

  return (
    <section className="bg-white">
      <div className="w-full">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            JAC Life was born
          </h2>
        </div>

        {/* Custom Layout with Percentage-based Distribution - Full Width */}
        <div className="relative w-full h-[800px]">
          {/* Video 1: 40% width, 50% height - Top Left */}
          <div 
            className="absolute top-0 left-0 w-[40%] h-[50%]"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group cursor-pointer overflow-hidden">
              <Image
                src={gridItems[0].image}
                alt={gridItems[0].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <Image
                  src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                  alt="Play Button"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {hoveredIndex === 0 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={gridItems[0].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                      alt="Play Button"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video 2: 25% width, 50% height - Top Center */}
          <div 
            className="absolute top-0 left-[40%] w-[25%] h-[50%]"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group cursor-pointer overflow-hidden">
              <Image
                src={gridItems[1].image}
                alt={gridItems[1].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <Image
                  src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                  alt="Play Button"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {hoveredIndex === 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={gridItems[1].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                      alt="Play Button"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video 3: 35% width, 100% height - Right Side */}
          <div 
            className="absolute top-0 right-0 w-[35%] h-full"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group cursor-pointer overflow-hidden">
              <Image
                src={gridItems[2].image}
                alt={gridItems[2].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <Image
                  src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                  alt="Play Button"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {hoveredIndex === 2 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={gridItems[2].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                      alt="Play Button"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video 4: 25% width, 25% height - Bottom Left */}
          <div 
            className="absolute bottom-0 left-0 w-[25%] h-[25%]"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group cursor-pointer overflow-hidden">
              <Image
                src={gridItems[3].image}
                alt={gridItems[3].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <Image
                  src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                  alt="Play Button"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {hoveredIndex === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={gridItems[3].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                      alt="Play Button"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video 5: 40% width, 50% height - Bottom Center */}
          <div 
            className="absolute bottom-0 left-[25%] w-[40%] h-[50%]"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group cursor-pointer overflow-hidden">
              <Image
                src={gridItems[4].image}
                alt={gridItems[4].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <Image
                  src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                  alt="Play Button"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {hoveredIndex === 4 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={gridItems[4].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                      alt="Play Button"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video 6: 25% width, 25% height - Middle Left */}
          <div 
            className="absolute top-[50%] left-0 w-[25%] h-[25%]"
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full group cursor-pointer overflow-hidden">
              <Image
                src={gridItems[5].image}
                alt={gridItems[5].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <Image
                  src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                  alt="Play Button"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {hoveredIndex === 5 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={gridItems[5].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/JAClife/section2/video1/play.859d7ce (1).png"
                      alt="Play Button"
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JACLifeGridSection;
