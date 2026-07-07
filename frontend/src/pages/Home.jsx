import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Wrench, Package, Phone, Mail } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero_bg.png" 
            alt="Printing Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted <span className="text-[#0096D6]">HP Authorized Partner</span> for Large Format Printing Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Empowering businesses with world-class HP printers, genuine consumables, professional installation, and reliable technical support across Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#0096D6] hover:bg-[#007baf] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                Request a Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:+918220821409" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all shadow-lg">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold text-gray-900 mb-4">About SKANDHA INFOTECH</motion.h2>
            <motion.div variants={fadeIn} className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-gray-600 text-lg">
              We are one of Tamil Nadu's trusted suppliers of professional printing equipment, genuine consumables, and comprehensive printer service solutions. We deliver reliable products backed by expert consultation and responsive customer service.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <ShieldCheck size={40} className="text-[#0096D6] mb-4" />, title: 'HP Authorized', desc: 'Authentic HP products backed by manufacturer support.' },
              { icon: <Package size={40} className="text-[#0096D6] mb-4" />, title: 'Genuine Consumables', desc: 'Original inks, media, and accessories for consistent performance.' },
              { icon: <Wrench size={40} className="text-[#0096D6] mb-4" />, title: 'Expert Technical Team', desc: 'Experienced professionals for installation, maintenance, and repair.' },
              { icon: <CheckCircle size={40} className="text-[#0096D6] mb-4" />, title: 'Customer First', desc: 'Dedicated support with personalized solutions for every business.' }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0096D6] to-[#005f87] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Printing Business?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Partner with SKANDHA INFOTECH for genuine HP printing solutions, professional installation, and reliable technical support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918220821409" className="bg-white text-[#0096D6] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0096D6] transition-colors shadow-lg flex items-center gap-2">
                <Mail size={20} /> Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
