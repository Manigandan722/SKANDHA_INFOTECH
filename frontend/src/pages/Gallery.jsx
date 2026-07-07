import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: '/images/gal_generic.png', alt: 'Office setup' },
    { src: '/images/gal_generic.png', alt: 'Printer Product' },
    { src: '/images/gal_generic.png', alt: 'Installation' },
    { src: '/images/gal_generic.png', alt: 'Customer Visit' },
    { src: '/images/gal_generic.png', alt: 'Events' },
    { src: '/images/gal_generic.png', alt: 'Showroom' },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#0096D6]">Gallery</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our state-of-the-art products, successful installations, and memorable events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden group h-72 shadow-sm cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
