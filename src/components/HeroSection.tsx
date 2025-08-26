'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroSlides = [
    {
      id: 1,
      title: "Ever so Fun. Ever so Colorful.",
      subtitle: "A new smart city car, as flexible as you.",
      ctaText: "Explore More",
      ctaLink: "#",
      type: "video",
      videoSrc: "/assets/hero/e30x.b0f0a4d.mp4"
    },
    {
      id: 2,
      title: "Born to Explore. Born to be Different.",
      subtitle: "Explore the wildest adventures.",
      ctaText: "Explore More",
      ctaLink: "#",
      type: "video",
      videoSrc: "/assets/hero/n75ev.cd96b65.mp4"
    },
    {
      id: 3,
      title: "More Space. More Happiness.",
      subtitle: "Elegance for your business, space for your family.",
      ctaText: "Explore More",
      ctaLink: "#",
      type: "image",
      imageSrc: "/assets/hero/js8pro.39d4e96.jpg"
    },
    {
      id: 4,
      title: "For Greener Cities - Now!",
      subtitle: "High efficiency and fuel economy.",
      ctaText: "Explore More",
      ctaLink: "#",
      type: "video",
      videoSrc: "/assets/hero/t9.1f9afc7.mp4"
    }
  ];

  const currentSlideData = heroSlides[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    if (videoRef.current && heroSlides[currentSlide].type === "video") {
      videoRef.current.src = heroSlides[currentSlide].videoSrc;
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed (this is normal):', error);
        setIsVideoPlaying(false);
      });
    }
  }, [currentSlide, heroSlides]);

  const handleVideoToggle = () => {
    if (videoRef.current && heroSlides[currentSlide].type === "video") {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsVideoPlaying(true);
        }).catch(error => {
          console.log('Video play failed:', error);
        });
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current && heroSlides[currentSlide].type === "video") {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-black">
        {currentSlideData.type === "video" ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/hero/download.png"
          >
            <source src={currentSlideData.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={currentSlideData.imageSrc || ""}
            alt="JAC Motors Vehicle"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Video Controls - Only show for video slides */}
      {currentSlideData.type === "video" && (
        <div className="absolute top-20 right-4 z-20 flex items-center space-x-2">
          <button
            onClick={handleVideoToggle}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={handleMuteToggle}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      )}

      {/* Hero Content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {currentSlideData.title}
            </motion.h1>

            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-8 text-gray-200 font-light"
            >
              {currentSlideData.subtitle}
            </motion.p>

            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href={currentSlideData.ctaLink}
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg"
              >
                {currentSlideData.ctaText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators - Horizontal lines */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 h-1 bg-white'
                  : 'w-6 h-1 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
