import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Handshake, MapPin, Headset, Check } from 'lucide-react';

const WhyChooseUs = () => {


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


        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-[#0096D6]">SKANDHA INFOTECH?</span>
                    </motion.h2>
                    <motion.div variants={fadeIn} className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"></motion.div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                >
                    {[
                        {
                            icon: <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm"><Trophy size={40} className="text-[#0055A5]" /></div>,
                            title: '5,000+',
                            subtitle: 'HP Large Format Printer Installations',
                            desc: 'Successfully deployed across India for architects, engineers, government organisations, print service providers and more.'
                        },
                        {
                            icon: <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm"><Award size={40} className="text-[#0055A5]" /></div>,
                            title: '15+',
                            subtitle: 'Years of Excellence',
                            desc: 'A 15+ years company delivering trusted printing solutions and customer support.'
                        },
                        {
                            icon: <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm"><Handshake size={40} className="text-[#0055A5]" /></div>,
                            subtitle: 'HP 3-in-1 Partner',
                            desc: 'Complete solutions under one roof',
                            list: ['Sales', 'Service', 'Supplies']
                        },
                        {
                            icon: <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm"><MapPin size={40} className="text-[#0055A5]" /></div>,
                            subtitle: 'Pan-India Support Network',
                            desc: 'Dedicated teams across major cities ensuring faster response and reliable after-sales support.'
                        },
                        {
                            icon: <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm"><Headset size={40} className="text-[#0055A5]" /></div>,
                            subtitle: 'Certified HP DesignJet Specialists',
                            desc: 'Expert consultation, installation, training, maintenance and technical support.'
                        }
                    ].map((feature, index) => (
                        <motion.div key={index} variants={fadeIn} className="text-center flex flex-col items-center">
                            {feature.icon}
                            {feature.title && <h3 className="text-3xl font-extrabold text-[#0055A5] mb-2">{feature.title}</h3>}
                            <h4 className="text-base font-bold text-[#0055A5] mb-3 leading-snug max-w-[200px]">{feature.subtitle}</h4>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{feature.desc}</p>
                            {feature.list && (
                                <ul className="text-sm text-gray-700 space-y-1 text-left inline-block">
                                    {feature.list.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check size={16} className="text-[#0055A5]" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;


