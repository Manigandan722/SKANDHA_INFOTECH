import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', inquiryType: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <Helmet>
        <title>Contact SKANDHA INFOTECH | Request a Quote</title>
        <meta name="description" content="Get in touch with SKANDHA INFOTECH in Coimbatore, Tamil Nadu for inquiries, quotes, or support. We're here to help upgrade your printing business." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Contact <span className="text-[#0096D6]">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-24 h-1 bg-[#0096D6] mx-auto mb-6"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for inquiries, quotes, or support. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent transition-all"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What are you looking for?</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent transition-all bg-white"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Printer service">Printer service</option>
                  <option value="Need HP Printer">Need HP Printer</option>
                  <option value="Need EPSON Printer">Need EPSON Printer</option>
                  <option value="Need Canon printer">Need Canon printer</option>
                  <option value="Printer Consumables">Printer Consumables</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-[#0096D6] hover:bg-[#007baf] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : <><Send size={20} /> Send Message</>}
              </button>
              {status === 'success' && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-[#0096D6]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-600">72, Nehru Street, Opp. Hotel Mangala International, Peranaidu Layout, Ram Nagar, Gandhipuram, Coimbatore – 641009</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-[#0096D6]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 82208 21409</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-[#0096D6]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">sales.skandhainfotech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-[#0096D6]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday – Saturday: 9:30 AM – 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 h-64 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.326269418939!2d76.96024131533418!3d11.014101992160912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85854b42b3223%3A0xc31e07cb6ce6e579!2sRam%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="rounded-2xl"
              ></iframe>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
