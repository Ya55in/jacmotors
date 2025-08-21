'use client';

import { motion } from 'framer-motion';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Models",
      links: [
        "Eelectric Vehicle",
        "Truck", 
        "Pickup",
        "Sedan & SUV",
        "Van"
      ]
    },
    {
      title: "Company",
      links: [
        "About JAC",
        "History",
        "Philosophy", 
        "R&D",
        "CSR",
        "Service"
      ]
    },
    {
      title: "News & Events",
      links: [
        "News",
        "Events"
      ]
    },
    {
      title: "Lifestyle",
      links: [
        "JAC Life",
        "JAC Stories"
      ]
    },
    {
      title: "Owners",
      links: [
        "Find A Dealer",
        "Build Your JAC",
        "Message",
        "Download",
        "Tech Info",
        "Survey"
      ]
    }
  ];

  const socialIcons = [
    { icon: Facebook, color: "text-blue-600", bgColor: "bg-white" },
    { icon: Youtube, color: "text-red-600", bgColor: "bg-white" },
    { icon: Instagram, color: "text-pink-600", bgColor: "bg-white" },
    { icon: Linkedin, color: "text-blue-700", bgColor: "bg-white" },
    // TikTok icon (custom)
    { icon: null, color: "text-black", bgColor: "bg-white", isTikTok: true }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Footer Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
                {column.title}
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
        >
          {socialIcons.map((social, index) => (
            <div key={index} className="flex items-center justify-center">
              {social.isTikTok ? (
                // Custom TikTok icon
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${social.bgColor} rounded-full flex items-center justify-center`}>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
              ) : (
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${social.bgColor} rounded-full flex items-center justify-center`}>
                  <social.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${social.color}`} />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-4 sm:pt-6"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © 2025 JAC All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
