import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, HeadphonesIcon, ShieldCheck, Clock, Truck, Activity, PenTool } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    { title: 'Printer Installation', icon: <PenTool size={28} />, desc: 'Professional setup and configuration of new large format printers.' },
    { title: 'Annual Maintenance (AMC)', icon: <Activity size={28} />, desc: 'Comprehensive maintenance contracts to ensure peak performance.' },
    { title: 'On-site Service', icon: <Truck size={28} />, desc: 'Prompt visits to your location for troubleshooting and repairs.' },
    { title: 'Remote Support', icon: <HeadphonesIcon size={28} />, desc: 'Quick technical assistance over the phone or internet.' },
    { title: 'Warranty Support', icon: <ShieldCheck size={28} />, desc: 'Handling all HP warranty claims and certified repairs.' },
    { title: 'Preventive Maintenance', icon: <Settings size={28} />, desc: 'Scheduled check-ups to prevent unexpected breakdowns.' },
    { title: 'Printer Relocation', icon: <Truck size={28} />, desc: 'Safe dismantling, transportation, and reinstallation.' },
    { title: 'Health Check', icon: <Wrench size={28} />, desc: 'Detailed diagnostics of your printer’s condition and components.' },
  ];

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Printer Installation & Repair Services | SKANDHA INFOTECH</title>
        <meta name="description" content="Professional installation, maintenance, and repair services for HP large format printers. Rely on our certified technical team for maximum uptime." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#0096D6]">Services</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive service solutions to minimize downtime and maximize the lifespan of your printing equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-gray-50 p-6 rounded-2xl hover:bg-[#0096D6] hover:text-white transition-colors duration-300 group cursor-pointer border border-gray-100"
            >
              <div className="text-[#0096D6] group-hover:text-white mb-4 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
