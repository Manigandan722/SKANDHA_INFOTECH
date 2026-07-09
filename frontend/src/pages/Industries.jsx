import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HardHat, Home, BookOpen, Camera, Megaphone, Presentation } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Industries = () => {
  const industries = [
    { name: 'Architecture', icon: <Building2 size={32} />, image: '/images/ind_generic.png' },
    { name: 'Engineering', icon: <HardHat size={32} />, image: '/images/ind_generic.png' },
    { name: 'Construction', icon: <Building2 size={32} />, image: '/images/ind_generic.png' },
    { name: 'Interior Designers', icon: <Home size={32} />, image: '/images/ind_generic.png' },
    { name: 'Government Depts', icon: <Building2 size={32} />, image: '/images/ind_generic.png' },
    { name: 'Education', icon: <BookOpen size={32} />, image: '/images/ind_generic.png' },
    { name: 'Print Shops', icon: <Presentation size={32} />, image: '/images/ind_generic.png' },
    { name: 'Advertising', icon: <Megaphone size={32} />, image: '/images/ind_generic.png' },
    { name: 'Photography', icon: <Camera size={32} />, image: '/images/ind_generic.png' }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Printing Solutions for Every Industry | SKANDHA INFOTECH</title>
        <meta name="description" content="Tailored high-performance HP printing solutions for Architecture, Engineering, Construction, Photography, Advertising, and Commercial Print Shops." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Industries <span className="text-[#0096D6]">We Serve</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our high-performance HP printing solutions are tailored to meet the exacting standards of diverse professional fields.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group h-64 shadow-md"
            >
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent group-hover:from-[#0096D6]/90 transition-colors duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                <div className="text-white">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Industries;
