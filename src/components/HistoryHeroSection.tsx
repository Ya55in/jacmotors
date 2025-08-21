'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HistoryHeroSection = () => {
  const [activeYear, setActiveYear] = useState('2023');

  const firstTimelineData = [
    {
      year: '1964',
      image: '/assets/History/section1/1964.34b6a19.png',
      icon: '/assets/History/section1/1964.34b6a19.png',
      title: 'Foundation',
      description: 'Establishment of JAC Motors with the vision of automotive excellence.'
    },
    {
      year: '1990',
      image: '/assets/History/section1/1990.234d213.png',
      icon: '/assets/History/section1/1990.234d213.png',
      title: 'Reform Period',
      description: 'Adaptation to economic reforms and market-oriented production.'
    },
    {
      year: '1996',
      image: '/assets/History/section1/1996.c73a0d0.png',
      icon: '/assets/History/section1/1996.c73a0d0.png',
      title: 'Expansion Phase',
      description: 'Significant expansion of production capacity and product range.'
    },
    {
      year: '2002',
      image: '/assets/History/section1/2002.c4a6bb9.png',
      icon: '/assets/History/section1/2002.c4a6bb9.png',
      title: 'Quality Focus',
      description: 'Implementation of advanced quality management systems and processes.'
    },
    {
      year: '2003',
      image: '/assets/History/section1/2003.0c32a87.png',
      icon: '/assets/History/section1/2003.0c32a87.png',
      title: 'Modern Era',
      description: 'Transition to modern manufacturing processes and international standards.'
    }
  ];

  const secondTimelineData = [
    {
      year: '2009',
      image: '/assets/History/section1/2009.e8b01ed.png',
      icon: '/assets/History/section1/2009.e8b01ed.png',
      title: 'Market Leadership',
      description: 'Establishment as a leading automotive manufacturer in China and beyond.'
    },
    {
      year: '2017',
      image: '/assets/History/section1/2017.31833ad.png',
      icon: '/assets/History/section1/2017.31833ad.png',
      title: 'Technology Advancement',
      description: 'Introduction of cutting-edge automotive technologies and smart features.'
    },
    {
      year: '2019',
      image: '/assets/History/section1/2019.322321e.png',
      icon: '/assets/History/section1/2019.322321e.png',
      title: 'Innovation Milestone',
      description: 'Launch of next-generation vehicle platforms and advanced safety features.'
    },
    {
      year: '2022',
      image: '/assets/History/section1/2022.60539ad.png',
      icon: '/assets/History/section1/2022.60539ad.png',
      title: 'Electric Revolution',
      description: 'Major breakthrough in electric vehicle technology and production.'
    },
    {
      year: '2023',
      image: '/assets/History/section1/2023s.6999f60.png',
      icon: '/assets/History/section1/2023s.6999f60.png',
      title: 'Global Expansion',
      description: 'JAC Motors continues its global expansion with new markets and innovative technologies.'
    }
  ];

  const currentMilestone = firstTimelineData.find(item => item.year === activeYear);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/History/Hero/Brand_History_01.3675ccb.jpg"
            alt="JAC Motors History"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

                                         {/* First Timeline Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto px-30">
            {/* First Timeline Visualization */}
           <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-red-600"></div>
             
             <div className="space-y-16">
               {firstTimelineData.map((item, index) => (
                 <div
                   key={item.year}
                   className={`relative flex items-center ${
                     index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                   }`}
                 >
                   {/* Timeline Dot */}
                   <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-600 shadow-lg z-10"></div>
                   
                                       {/* Content Card */}
                    <div className={`w-1/3 ${index % 2 === 0 ? 'pr-0' : 'pl-0'}`}>
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden aspect-square"
                           onClick={() => setActiveYear(item.year)}>
                       
                       {/* Medium Image */}
                       <div className="relative h-3/5 w-full">
                         <Image
                           src={item.image}
                           alt={`JAC Motors ${item.year}`}
                           fill
                           className="object-cover"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                         
                         {/* Year Badge on Image */}
                         <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full shadow-lg">
                           <span className="text-xs font-bold">{item.year}</span>
                         </div>
                       </div>
                       
                       {/* Content */}
                       <div className="p-3 h-2/5 flex flex-col justify-center">
                         <div className="mb-1">
                           <h4 className="text-sm font-bold text-gray-900">{item.year}</h4>
                           <p className="text-blue-600 font-medium text-xs">{item.title}</p>
                         </div>
                         <p className="text-gray-600 leading-tight text-xs">{item.description}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

             {/* JAC Italian Design Center Section */}
       <div className="relative py-20 w-full">
         <div className="relative h-screen w-full">
           {/* Background Image */}
           <div className="absolute inset-0 w-full">
             <Image
               src="/assets/History/section1/2005.01d4556.png"
               alt="JAC Italian Design Center"
               fill
               className="object-cover w-full"
             />
           </div>
           
           {/* Content */}
           <div className="absolute top-20 left-20 text-white max-w-md">
             <div className="text-3xl font-bold mb-4">June, 2005</div>
             <h3 className="text-4xl font-bold mb-6">
               JAC Italian Design Center
             </h3>
             <p className="text-xl leading-relaxed">
               The JAC Italian Design Center, the first design center of a Chinese auto company in Europe, was inaugurated.
             </p>
           </div>
         </div>
       </div>

                                       {/* Second Timeline Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto px-30">
           {/* Second Timeline Visualization */}
           <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-red-600"></div>
             
             <div className="space-y-16">
               {secondTimelineData.map((item, index) => (
                 <div
                   key={item.year}
                   className={`relative flex items-center ${
                     index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                   }`}
                 >
                   {/* Timeline Dot */}
                   <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-600 shadow-lg z-10"></div>
                   
                                       {/* Content Card */}
                    <div className={`w-1/3 ${index % 2 === 0 ? 'pr-0' : 'pl-0'}`}>
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden aspect-square">
                       
                       {/* Medium Image */}
                       <div className="relative h-3/5 w-full">
                         <Image
                           src={item.image}
                           alt={`JAC Motors ${item.year}`}
                           fill
                           className="object-cover"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                         
                         {/* Year Badge on Image */}
                         <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full shadow-lg">
                           <span className="text-xs font-bold">{item.year}</span>
                         </div>
                       </div>
                       
                       {/* Content */}
                       <div className="p-3 h-2/5 flex flex-col justify-center">
                         <div className="mb-1">
                           <h4 className="text-sm font-bold text-gray-900">{item.year}</h4>
                           <p className="text-blue-600 font-medium text-xs">{item.title}</p>
                         </div>
                         <p className="text-gray-600 leading-tight text-xs">{item.description}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

       {/* JAC-Huawei Partnership Section */}
      <div className="relative py-20 w-full">
        <div className="relative h-screen w-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full">
            <Image
              src="/assets/History/section1/2023.937d2b0.jpg"
              alt="JAC-Huawei Partnership"
              fill
              className="object-cover w-full"
            />
          </div>
          
          {/* Logos on Left Side */}
          <div className="absolute top-20 left-20 flex items-center space-x-4">
            <div className="text-white text-4xl font-bold">JAC</div>
            <div className="w-px h-8 bg-white"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2">
                <Image
                  src="/assets/History/section1/huawei.2ee4bd5.png"
                  alt="Huawei Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white text-sm font-semibold">HUAWEI</div>
            </div>
          </div>

          {/* Text on Right Side */}
          <div className="absolute top-20 right-20 text-white max-w-md">
            <div className="text-3xl font-bold mb-4">December, 2023</div>
            <p className="text-lg leading-relaxed">
              JAC Group signed 'Intelligent New Energy Automobile Cooperation Agreement' with Huawei Terminal Co., Ltd. The two parties will cooperate in various fields to create luxury intelligent electric vehicles.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HistoryHeroSection;
