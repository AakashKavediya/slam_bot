"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
    // Add your submission logic here
  };

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 border border-white/20">
                <span className="font-bold text-white text-lg">SB</span>
              </div>
              <h3 className="text-2xl font-light tracking-wide">Slam Bot.ai</h3>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              Pioneering autonomous robotics solutions for modern agriculture. 
              Transforming farming with advanced SLAM technology and AI-driven navigation systems.
            </p>
            <div className="flex space-x-4 text-white/50">
              <div className="flex items-center text-sm">
                <FaMapMarkerAlt className="mr-2" size={14} />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center text-sm">
                <FaPhone className="mr-2" size={14} />
                <span>+91 85916 19938</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Manufacturing', href: '/manufacturing' },
                { name: 'Insurance', href: '/insurance' },
                { name: 'Careers', href: '/careers' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Support</h4>
            <ul className="space-y-3 mb-8">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Documentation', href: '/docs' },
                { name: 'Support Center', href: '/support' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Email Subscription */}
            <div>
              <h5 className="text-sm font-medium mb-4 text-white">Stay Updated</h5>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
                  >
                    <FaPaperPlane size={16} />
                  </button>
                </div>
                <p className="text-xs text-white/50">
                  Subscribe to get updates on our latest developments
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Slam Bot.ai. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-white/50 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="flex items-center text-white/70 hover:text-white transition-colors text-sm"
              >
                <FaEnvelope size={14} className="mr-2" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;