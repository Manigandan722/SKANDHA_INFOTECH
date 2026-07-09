import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import Products from '../pages/Products';
import { Helmet } from 'react-helmet-async';
import Services from '../pages/Services'
import { ArrowRight, CheckCircle, ShieldCheck, Wrench, Package, Phone, Mail, Building2, HardHat, Home as H, BookOpen, Camera, Megaphone, Presentation } from 'lucide-react';
import { SiHp, SiEpson } from 'react-icons/si';
import CanonLogo from '../assets/Canon.svg';

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
  const industries = [
    { name: 'Architecture', icon: <Building2 size={32} />, image: '/images/ind_generic.png' },
    { name: 'Engineering', icon: <HardHat size={32} />, image: '/images/ind_generic.png' },
    { name: 'Construction', icon: <Building2 size={32} />, image: '/images/ind_generic.png' },
    { name: 'Interior Designers', icon: <H size={32} />, image: '/images/ind_generic.png' },
    { name: 'Government Depts', icon: <Building2 size={32} />, image: '/images/ind_generic.png' },
    { name: 'Education', icon: <BookOpen size={32} />, image: '/images/ind_generic.png' },
    { name: 'Print Shops', icon: <Presentation size={32} />, image: '/images/ind_generic.png' },
    { name: 'Advertising', icon: <Megaphone size={32} />, image: '/images/ind_generic.png' },
    { name: 'Photography', icon: <Camera size={32} />, image: '/images/ind_generic.png' }
  ];


  return (
    <div className="w-full">
      <Helmet>
        <title>SKANDHA INFOTECH | HP Authorized Partner in Tamil Nadu</title>
        <meta name="description" content="Your trusted HP Authorized Partner in Tamil Nadu for large format printing solutions, original consumables, and expert technical service." />
      </Helmet>
      
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

      {/* Authorized Partners */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            We are the authorized partner of
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#0096D6] hover:scale-110 transition-transform cursor-default grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
            >
              <SiHp className="w-10 h-10 md:w-12 md:h-12" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#003399] hover:scale-110 transition-transform cursor-default grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
            >
              <SiEpson className="w-20 h-20 md:w-28 md:h-28 -my-6" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#CC0000] hover:scale-110 transition-transform cursor-default grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
            >
              <img src={CanonLogo} alt="Canon Logo" className="w-auto h-6 md:h-8" />
            </motion.div>
          </div>
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

      {/* Why Choose Us */}
      <WhyChooseUs />
      <Products />
      <Services />
      <section>
        <div className="py-20 bg-gray-50">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all border border-gray-100 group hover:-translate-y-1"
                >
                  <div className="text-[#0096D6] mb-4 bg-blue-50 p-4 rounded-full group-hover:bg-[#0096D6] group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{industry.name}</h3>
                </motion.div>
              ))}
            </div>

          </div>
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
