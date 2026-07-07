import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'HP Solutions', path: '/hp-solutions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-0' : 'bg-white py-2 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <span className="font-extrabold text-3xl tracking-tighter text-[#0096D6] group-hover:text-[#007baf] transition-colors">SKANDHA</span>
              <span className="font-semibold text-xl text-gray-800">INFOTECH</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(link.path) ? 'text-[#0096D6]' : 'text-gray-600 hover:text-[#0096D6] hover:bg-blue-50/50'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0096D6] rounded-full mx-2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a 
              href="tel:+918220821409" 
              className="ml-6 flex items-center gap-2 bg-gradient-to-r from-[#0096D6] to-[#007baf] text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={18} className="animate-pulse" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#0096D6] p-2 rounded-lg bg-gray-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-[#0096D6] bg-blue-50 shadow-sm border border-blue-100'
                      : 'text-gray-600 hover:text-[#0096D6] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+918220821409" 
                className="mt-4 flex items-center justify-center gap-2 bg-[#0096D6] text-white px-4 py-3 rounded-xl font-medium shadow-md"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
