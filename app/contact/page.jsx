"use client"

import Footer from "../customComponent/footer";

import { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Add your actual form submission logic here
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-white/5 rounded-full top-20 left-20 blur-3xl"></div>
        <div className="absolute w-64 h-64 bg-white/5 rounded-full bottom-20 right-20 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to transform agriculture with autonomous robotics? 
            Let's discuss how Slam Bot.ai can revolutionize your farming operations.
          </p>
          <div className="w-24 h-0.5 bg-white/30 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-medium mb-8 text-white">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
                >
                  <option value="" className="bg-black">Select a subject</option>
                  <option value="general" className="bg-black">General Inquiry</option>
                  <option value="technical" className="bg-black">Technical Support</option>
                  <option value="partnership" className="bg-black">Partnership</option>
                  <option value="sales" className="bg-black">Sales Inquiry</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 border border-white/20">
                  <span className="font-bold text-white text-lg">SB</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Slam Bot.ai</h3>
                  <p className="text-white/70">Autonomous Agricultural Robotics</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                We specialize in advanced SLAM technology and AI-driven navigation systems 
                for modern agriculture. Get in touch to learn how our solutions can 
                optimize your farming operations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-medium mb-6 text-white">Contact Details</h4>
              
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <FaMapMarkerAlt className="mr-4 text-white/60" size={18} />
                  <div>
                    <p className="font-medium">Mumbai, India</p>
                    <p className="text-sm text-white/60">Headquarters</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white/80">
                  <FaPhone className="mr-4 text-white/60" size={18} />
                  <div>
                    <p className="font-medium">+91 XXXXX XXXXX</p>
                    <p className="text-sm text-white/60">Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white/80">
                  <FaEnvelope className="mr-4 text-white/60" size={18} />
                  <div>
                    <p className="font-medium">contact@slambot.ai</p>
                    <p className="text-sm text-white/60">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-medium mb-6 text-white">Follow Us</h4>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/slambot-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                
                <a
                  href="https://www.instagram.com/slambot.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                
                <a
                  href="https://github.com/slambot-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-3 mb-4">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
          <p className="text-sm text-white/40">
            Transforming Agriculture with Autonomous Robotics
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;