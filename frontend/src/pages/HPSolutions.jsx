import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const HPSolutions = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HP <span className="text-[#0096D6]">Authorized Partner</span>
            </h1>
            <div className="w-24 h-1 bg-[#0096D6] mb-8"></div>
            
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Delivering Genuine HP Printing Technology
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              As an HP Authorized Partner, SKANDHA INFOTECH provides authentic HP large format printers, original consumables, and certified technical support to ensure superior print quality, reliability, and long-term performance.
            </p>
            
            <ul className="space-y-4">
              {[
                'Access to Genuine HP Products',
                'Latest Printing Technologies',
                'Comprehensive Warranty Support',
                'Original HP Inks and Media',
                'Certified Technical Professionals'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 text-lg">
                  <CheckCircle className="text-[#0096D6]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hp_solutions.png" 
                alt="HP Printing Solutions" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0096D6]/20 to-transparent"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default HPSolutions;
