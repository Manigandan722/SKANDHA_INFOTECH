import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="SKANDHA INFOTECH" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Your Trusted HP Authorized Partner for Large Format Printing Solutions in Tamil Nadu and Kerala.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm hover:text-[#0096D6] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Installation', 'AMC', 'Repairs', 'Technical Support', 'Warranty'].map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#0096D6] flex-shrink-0 mt-1" size={20} />
                <span className="text-sm">
                  72, Nehru Street, Opp. Hotel Mangala International, Peranaidu Layout, Ram Nagar, Gandhipuram, Coimbatore – 641009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#0096D6] flex-shrink-0" size={20} />
                <span className="text-sm">+91 82208 21409</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#0096D6] flex-shrink-0" size={20} />
                <span className="text-sm">sales.skandhainfotech@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-[#0096D6] flex-shrink-0 mt-1" size={20} />
                <div className="text-sm">
                  <p>Mon – Sat: 9:30 AM – 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SKANDHA INFOTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
