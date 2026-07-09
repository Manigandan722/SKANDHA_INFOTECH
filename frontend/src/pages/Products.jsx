import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Droplets, PenTool, Wrench } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const products = [
    {
      category: 'Large Format Printers',
      icon: <Printer size={32} className="text-[#0096D6]" />,
      items: ['HP DesignJet 24"', 'HP DesignJet 44"', 'HP T858 / T908'],
      image: '/images/prod_printers.png',
      description: 'Professional HP large format printers designed for CAD, GIS, photography, graphics, and commercial applications.'
    },
    {
      category: 'Printing Consumables',
      icon: <Droplets size={32} className="text-[#0096D6]" />,
      items: ['HP Ink Cartridges', 'Glossy Rolls', 'Matte Media', 'Photo Papers'],
      image: '/images/prod_consumables.png',
      description: 'Original HP inks, printheads, maintenance kits, glossy rolls, matte media, and premium printing materials.'
    },
    {
      category: 'Specialized Media',
      icon: <PenTool size={32} className="text-[#0096D6]" />,
      items: ['CAD Media', 'Graphic Media'],
      image: '/images/prod_consumables.png',
      description: 'High-quality media rolls and sheets tailored for specialized architectural and graphic printing.'
    },
    {
      category: 'Accessories & Parts',
      icon: <Wrench size={32} className="text-[#0096D6]" />,
      items: ['Printer Spare Parts', 'Maintenance Kits', 'Print Heads'],
      image: '/images/ind_generic.png',
      description: 'Genuine maintenance accessories, print heads, cutters, media holders, and related components.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>HP Large Format Printers & Consumables | SKANDHA INFOTECH</title>
        <meta name="description" content="Explore our extensive range of authentic HP DesignJet printers, original inks, and high-quality print media for engineering, architecture, and professional photography." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#0096D6]">Products</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of genuine HP printing solutions, designed to meet the demands of professionals across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.category} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    {product.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{product.category}</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item, idx) => (
                    <span key={idx} className="bg-blue-50 text-[#0096D6] px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
