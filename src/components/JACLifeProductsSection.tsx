'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const JACLifeProductsSection = () => {
  const [visibleRows, setVisibleRows] = useState(1);

  const allProducts = [
    // Row 1
    {
      id: 1,
      image: '/assets/JAClife/section3/1acf50a2a05d13ba7ba50c218864ed54.png',
      title: 'T9 Pickup Truck Canvas Bag',
      details: [
        'Set Size: Length 150cm x Width 150cm',
        'Material: Waterproof fabric',
        'Seat: 4-6 people'
      ]
    },
    {
      id: 2,
      image: '/assets/JAClife/section3/97c93b7cd9150d4c0733fd9db08c5a79.png',
      title: 'JAC Storage Bag Set',
      details: [
        'Material: Hi-density Nylon Oxford',
        'Including in: 6 pieces',
        'A big size clothes storage bag: 42*32*11cm',
        'Middle size clothes storage bag: 35*25*8cm'
      ]
    },
    {
      id: 3,
      image: '/assets/JAClife/section3/76aa37614f8c809c62d2430052628824.png',
      title: 'JAC Gym Bag',
      details: [
        'Set Size: Length 20cm x Width 40cm x Height 23cm',
        'Material: Leather (Waterproof fabric)',
        'Color: Blue'
      ]
    },

    // Row 2
    {
      id: 4,
      image: '/assets/JAClife/section3/df85c31707f62d76f72444c748b7c7aa.png',
      title: 'Pickup Camping Cup Set',
      details: [
        'Set Size: Length 9cm x Width 9cm x Height 19.5cm',
        'Material: Stainless steel',
        'Including in: Four cups',
        'Cup Size: 300ML'
      ]
    },
    {
      id: 5,
      image: '/assets/JAClife/section3/562f15e8f653743e3c7f729b1681bcaa.png',
      title: 'Pickup Camping Tableware Set',
      details: [
        'Set Size: Length 13cm x Width 13cm x Height 16.5cm',
        'Material: Aluminium alloy',
        'Number: 5 pieces',
        'Including: A cutlery (a knife, a fork, a spoon)'
      ]
    },
    {
      id: 6,
      image: '/assets/JAClife/section3/3bca36aef03e0bc677c9f0d111e35b8e.png',
      title: 'JAC T9 Pickup Launch Ceremony Memorial Badge',
      details: [
        'Set Size: Length 3cm×Width 2.7cm',
        'Material: Alloy',
        'Number: 4 badges',
        'JAC Newest T9 Pickup has launched globally'
      ]
    },

    // Row 3
    {
      id: 7,
      image: '/assets/JAClife/section3/1426dd30d1c6ef8d3a4c5f71f7fdb922.png',
      title: 'JAC 60th Anniversary Pickup Badge',
      details: [
        'Set Size: Length 36.5cm×Width 26cm× Height 3.5cm',
        'Material: Alloy',
        'Number: 3 badges',
        'Based on the sculpt of JAC three pickup models'
      ]
    },
    {
      id: 8,
      image: '/assets/JAClife/section3/73585255db0b79dd9c84e4a06839eda2.png',
      title: 'JAC Notebook Set',
      details: [
        'Set Size: Length 23cm× Width 20cm ×Height 4cm',
        'Including one black notebook, a small red notebook, and a roller-tip pen',
        'Cover material: high quality soft leather'
      ]
    },
    {
      id: 9,
      image: '/assets/JAClife/section3/5beb5e3b1a868384575997e8797a5cd6.png',
      title: 'JAC 60th Anniversary Gift Package 02',
      details: [
        'Portable towel',
        'Sports Bottle',
        'Fisherman\'s hat',
        'JAC vehicle purchase gift package is customized for commercial vehicle'
      ]
    },

    // Row 4
    {
      id: 10,
      image: '/assets/JAClife/section3/aaf09edba64ac1e84074c1fa9750cda5.jpg',
      title: 'JAC 60th Anniversary Gift Package 01',
      details: [
        'Mobile Phone Holder',
        'Car Aromatherapy',
        'Keychain',
        'JAC car purchase gift package is customized for car buyers during JAC'
      ]
    },
    {
      id: 11,
      image: '/assets/JAClife/section3/2e2b0c210d478033d9602d29465eb316.png',
      title: 'JAC 60th Anniversary Frisbee',
      details: [
        'Diameter: 26.5cm',
        'Thickness: 35mm',
        'Material: PE; Color: White and red',
        'JAC\'s 60th anniversary custom-made pattern Frisbee is specially customize'
      ]
    },
    {
      id: 12,
      image: '/assets/JAClife/section3/ab445cd3edf542d479b78f137c3e331a.png',
      title: 'JAC 60th Anniversary Badge',
      details: [
        'Set Size: Length 28cm ×Width 18cm×Height 3cm',
        'Material: Alloy',
        'Number: 4 badges',
        'To celebrate JAC\'s 60th anniversary, we design a set of memorial'
      ]
    },

    // Row 5
    {
      id: 13,
      image: '/assets/JAClife/section3/def5335b91608440a2d95884569622dc.jpg',
      title: 'JAC 60th Anniversary Artwork',
      details: [
        'Size: Length 32cm × Width 19cm × Height 6cm',
        'Material: Wooden',
        'It has a built-in light strip which can be used as a night light'
      ]
    },
    {
      id: 14,
      image: '/assets/JAClife/section3/34528fa2a86bb8a48d5a81ce764d8072.jpg',
      title: 'JAC Notebook 2024',
      details: [
        'Size: Length 21 cm * Width 5 cm',
        'Inner core material: 100g white paper',
        'Cover material: high quality soft leather',
        'Color: green, black, gray',
        'Easily spread flat for easy writing'
      ]
    },
    {
      id: 15,
      image: '/assets/JAClife/section3/f1fe2f0e9f219eb1fbd3dc8a9d95a058.jpg',
      title: 'JAC USB Disk',
      details: [
        'Size: Length 5.8 cm * Width 1.5 cm',
        'Material: Zinc alloy',
        'Storage: 64G',
        'Chip: USB 3.0 high-performance chip',
        'Water-proof, dust-proof and shock-proof'
      ]
    },

    // Row 6
    {
      id: 16,
      image: '/assets/JAClife/section3/a1495b86b1c77f4fe6a51a1f9c485c4a.jpg',
      title: 'JAC Heavy-duty Truck Model',
      details: [
        'Size: Length 29 cm * Width 10 cm * Height 15 cm',
        'Material: Zinc alloy, ABS, GPPS, PVC etc',
        '**Movable steering wheel**',
        'Rubber tires'
      ]
    },
    {
      id: 17,
      image: '/assets/JAClife/section3/71b4baef944297e7da88e263ab48e113.jpg',
      title: 'JAC N-series Light-duty Truck Model',
      details: [
        'Size: Length 33 cm * Width 12 cm * Height 17 cm',
        'Material: Zinc alloy, ABS, GPPS, PVC etc',
        '**Movable steering wheel**',
        'Usage: Gift giving, collection, decoration'
      ]
    },
    {
      id: 18,
      image: '/assets/JAClife/section3/8baac77654736b83837de91f6f7cd1ea.jpg',
      title: 'JAC Pickup T9 Model',
      details: [
        'Size: Length 29 cm * Width 10 cm * Height 8 cm',
        'Material: Zinc alloy, ABS, GPPS, PVC etc',
        '**Movable steering wheel**',
        'Usage: Gift giving, collection, decoration'
      ]
    },

    // Row 7
    {
      id: 19,
      image: '/assets/JAClife/section3/bfc821a76aaba34199e8a27da3a1cd8e.jpg',
      title: 'JAC Pickup T8PRO Model',
      details: [
        'Size: Length 29 cm * Width 10 cm * Height 8 cm',
        'Material: Zinc alloy, ABS, GPPS, PVC etc',
        'Movable steering wheel',
        'Usage: Gift giving, collection, decoration'
      ]
    },
    {
      id: 20,
      image: '/assets/JAClife/section3/22ece2683683aa5a0bbbbfa205cc4313.jpg',
      title: 'JAC Big Day Mug',
      details: [
        'Customized for the 2023 JAC Big Day',
        'Nordic style',
        'Ceramic and wooden',
        'U-shaped handle design'
      ]
    },
    {
      id: 21,
      image: '/assets/JAClife/section3/003372f22e64b4de57a6c2df9ece7794.jpg',
      title: 'JAC Big Day Sun-glass',
      details: [
        'Customized for the 2023 JAC Big Day',
        'Square and round',
        'Lenses provide effective UV protection'
      ]
    },

    // Row 8
    {
      id: 22,
      image: '/assets/JAClife/section3/0b203d786192abb986b25679cd1493a0.jpg',
      title: 'JAC Big Day T-shirt',
      details: [
        'Customized for the 2023 JAC Big Day',
        'Beautiful Logo design',
        'Simple and basic round neck design',
        'Thick cotton fabric'
      ]
    },
    {
      id: 23,
      image: '/assets/JAClife/section3/03da4cb51b2c2ec3ade826aad2a8436b.jpg',
      title: 'JAC Fridge Magnet',
      details: [
        'The design comes from the models of JAC',
        'Made of metal',
        'Dual-purpose, can use as a bottle opener'
      ]
    },
    {
      id: 24,
      image: '/assets/JAClife/section3/ebabbc6e9bb3221852045518b7f1264a.jpg',
      title: 'JAC Watch',
      details: [
        'Simple aesthetic design',
        'Mini round dial plate',
        'With brown thin strap',
        'More suitable for women\'s slender wrists'
      ]
    },

    // Row 9
    {
      id: 25,
      image: '/assets/JAClife/section3/765d2759fcc3bdab3afc42d78afc686b.jpg',
      title: 'JAC Hard-cover Notebook',
      details: [
        'Hard cover notebook',
        'Various colors available',
        'Easy writing'
      ]
    },
    {
      id: 26,
      image: '/assets/JAClife/section3/f9ae5042812cc304c3d35b17787addae.jpg',
      title: 'JAC Robot Block',
      details: [
        'JAC exclusively designs',
        'JAC brand mascot',
        'Easy to assemble'
      ]
    },
    {
      id: 27,
      image: '/assets/JAClife/section3/fcf2b121b6a29516098defada839818c.jpg',
      title: 'JAC Full-sided Notebook',
      details: [
        'A5 horizontal line soft cover notebook',
        'Various colors available',
        'Easy writing'
      ]
    },

    // Row 10
    {
      id: 28,
      image: '/assets/JAClife/section3/786eb27af8d7bfd75c977ab047280cbc.jpg',
      title: 'JAC Purple Clay Cup',
      details: [
        'Chinese traditional craft purple clay teapot',
        'Purely handmade Completed 36 processes, which lasted 21 days',
        'Six different cup shapes'
      ]
    },
    {
      id: 29,
      image: '/assets/JAClife/section3/bde3a556aad2d0f549aecb94f96380f5.jpg',
      title: 'JAC Pour-over Coffee Kettle',
      details: [
        'Professional manual grinder: The stainless steel grinding',
        'Stainless steel filter cup: convenient for extraction',
        'Hand-brewed coffee pot: vertical water flow'
      ]
    },
    {
      id: 30,
      image: '/assets/JAClife/section3/9fc65af9125253a0e22bb9955f768d0a.jpg',
      title: 'JAC Dunhong Colored Glass Cup',
      details: [
        'Diameter 8.5cm, Height 4.5cm',
        'Set of four',
        'Ceramic firing',
        'Derived from Chinese Dunhuang murals'
      ]
    }
  ];

  const totalRows = Math.ceil(allProducts.length / 3);
  const visibleProducts = allProducts.slice(0, visibleRows * 3);

  const handleSeeMore = () => {
    if (visibleRows < totalRows) {
      setVisibleRows(visibleRows + 1);
    }
  };

  const handleSeeLess = () => {
    setVisibleRows(1);
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight px-2">
            JAC Life Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {visibleProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Product Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Plus Icon Overlay */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-gray-800 text-sm sm:text-lg md:text-xl font-bold">+</span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold text-black mb-2 sm:mb-3 md:mb-4 leading-tight line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="space-y-1 sm:space-y-2">
                    {product.details.map((detail, index) => (
                      <p key={index} className="text-xs sm:text-sm text-gray-700 leading-relaxed line-clamp-3">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More/Less Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            {visibleRows < totalRows ? (
              <button
                onClick={handleSeeMore}
                className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-black text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                See More
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSeeLess}
                className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gray-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                See Less
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JACLifeProductsSection;
