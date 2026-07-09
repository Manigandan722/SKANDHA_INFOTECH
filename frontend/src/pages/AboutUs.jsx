import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Profile */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#0096D6] whitespace-nowrap">SKANDHA INFOTECH</span>
            </h1>
            <div className="w-24 h-1 bg-[#0096D6] mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SKANDHA INFOTECH is one of Tamil Nadu's trusted suppliers of professional printing equipment, genuine consumables, and comprehensive printer service solutions. As an HP Authorized Partner, we specialize in providing advanced large format printing systems, original HP inks, media, accessories, and after-sales technical support.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Serving businesses across architecture, engineering, photography, education, advertising, and commercial printing industries, we deliver reliable products backed by expert consultation and responsive customer service.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Whether you're establishing a new print setup or upgrading your existing infrastructure, SKANDHA INFOTECH is committed to helping you achieve outstanding print quality and operational efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] lg:min-h-[400px]">
              <img 
                src="/images/hero_bg.png" 
                alt="About SKANDHA INFOTECH" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0096D6]/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 p-10 rounded-3xl relative overflow-hidden"
          >
            <Lightbulb size={120} className="absolute -right-10 -bottom-10 text-blue-100 opacity-50" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lightbulb className="text-[#0096D6]" /> Our Vision
            </h2>
            <p className="text-lg text-gray-700 relative z-10 leading-relaxed">
              To become South India's most trusted and preferred partner for innovative printing technologies by delivering world-class products, exceptional service, and long-lasting customer relationships.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-10 rounded-3xl relative overflow-hidden border border-gray-100"
          >
            <Target size={120} className="absolute -right-10 -bottom-10 text-gray-200 opacity-50" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="text-[#0096D6]" /> Our Mission
            </h2>
            <ul className="space-y-4 text-gray-700 relative z-10">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0096D6] mt-2"></div>
                <span>Deliver genuine and reliable printing solutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0096D6] mt-2"></div>
                <span>Provide excellent customer support and technical expertise.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0096D6] mt-2"></div>
                <span>Build long-term partnerships with customers.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0096D6] mt-2"></div>
                <span>Continuously adopt the latest printing technologies.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0096D6] mt-2"></div>
                <span>Ensure maximum customer satisfaction through quality products and prompt service.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <WhyChooseUs />

      </div>
    </div>
  );
};

export default AboutUs;
