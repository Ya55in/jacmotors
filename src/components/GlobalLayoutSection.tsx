'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const GlobalLayoutSection = () => {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const continents = [
    'Asia',
    'Europe', 
    'North America',
    'South America',
    'Africa',
    'Australia',
    'Antarctica'
  ];

  const countries = {
    'Asia': ['China', 'Japan', 'South Korea', 'India', 'Thailand', 'Vietnam', 'Singapore'],
    'Europe': ['Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'Netherlands', 'Sweden'],
    'North America': ['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'],
    'South America': ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela'],
    'Africa': ['South Africa', 'Egypt', 'Morocco', 'Kenya', 'Nigeria', 'Ghana'],
    'Australia': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'],
    'Antarctica': ['Antarctica']
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed (this is normal):', error);
      });
    }
  }, []);

  const handleContinentSelect = (continent: string) => {
    setSelectedContinent(continent);
    setSelectedCountry('');
    setIsContinentOpen(false);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
  };

  return (
    <section className="relative h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/GLOBAL LAYOUT/layout.3734f6e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content - Positioned to the left */}
      <div className="relative z-10 h-full flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-md w-full"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold text-white text-center mb-4"
          >
            GLOBAL LAYOUT
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-center mb-8 text-lg"
          >
            Please find JAC in your country or region.
          </motion.p>

          {/* Continent Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mb-4"
          >
            <button
              onClick={() => setIsContinentOpen(!isContinentOpen)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-left text-white placeholder-white/70 flex items-center justify-between hover:bg-white/20 transition-colors duration-300"
            >
              <span className={selectedContinent ? 'text-white' : 'text-white/70'}>
                {selectedContinent || 'Select a continent'}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-white transition-transform duration-300 ${isContinentOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Continent Options */}
            {isContinentOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg overflow-hidden z-20"
              >
                {continents.map((continent) => (
                  <button
                    key={continent}
                    onClick={() => handleContinentSelect(continent)}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors duration-200"
                  >
                    {continent}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Country Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mb-6"
          >
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              disabled={!selectedContinent}
              className={`w-full backdrop-blur-sm border rounded-lg px-4 py-3 text-left flex items-center justify-between transition-colors duration-300 ${
                selectedContinent 
                  ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' 
                  : 'bg-white/5 border-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              <span className={selectedCountry ? 'text-white' : 'text-white/70'}>
                {selectedCountry || 'Select a country or region'}
              </span>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''} ${
                  selectedContinent ? 'text-white' : 'text-white/50'
                }`}
              />
            </button>

            {/* Country Options */}
            {isCountryOpen && selectedContinent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg overflow-hidden z-20 max-h-48 overflow-y-auto"
              >
                {countries[selectedContinent as keyof typeof countries]?.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleCountrySelect(country)}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors duration-200"
                  >
                    {country}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Explore Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            disabled={!selectedContinent || !selectedCountry}
            className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
              selectedContinent && selectedCountry
                ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalLayoutSection;
