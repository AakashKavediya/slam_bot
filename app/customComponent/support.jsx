"use client"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const SupportGuidancePage = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden relative" style={{backgroundColor: '#000'}}>
      {/* Subtle background elements with glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 bottom-10 right-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Additional glowing elements */}
        <div className="absolute w-64 h-64 bg-white/5 rounded-full filter blur-3xl top-1/4 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-48 h-48 bg-white/3 rounded-full filter blur-2xl bottom-1/4 left-1/4 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white" style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'}}>
            Support & Guidance
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-whitesmoke">
            We're grateful for the incredible support and guidance from industry leaders who believe in our slam-bot project
          </p>
          <div className="w-24 h-0.5 bg-white/30 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Shikhar Mishra Card */}
          <div className="relative group h-full">
            <div className="relative rounded-xl p-8 transition-all duration-300 flex flex-col h-full border border-white/10 hover:border-white/20 bg-black/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold mr-6 border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                  SM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Shikhar Mishra</h3>
                  <p className="text-white/70">CEO, StringLab.org</p>
                </div>
              </div>
              
              {/* StringLab.org logo representation */}
              <div className="mb-6 p-4 rounded-lg bg-black/30 border border-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-mono text-white tracking-wider" style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'}}>S.T.R.I.N.G</div>
                  <p className="text-xs mt-1 text-white/50">StringLab Technologies</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <p className="text-lg leading-relaxed border-l-2 border-white/30 pl-4 text-white/80">
                  The slam-bot project showcases exceptional innovation in autonomous navigation. The technical implementation and real-world applications are truly impressive.
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-white/30 pl-4 text-white/80">
                  This project represents the future of robotics and SLAM technology. The team's dedication and technical prowess are remarkable.
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-white/30 pl-4 text-white/80">
                  We're proud to support such groundbreaking work that pushes the boundaries of what's possible in robotics.
                </p>
              </div>
              
              <div className="mt-6 flex items-center text-sm text-white/60">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                Strategic Guidance & Technical Mentorship
              </div>
            </div>
          </div>

          {/* Atul Mehta Card */}
          <div className="relative group h-full">
            <div className="relative rounded-xl p-8 transition-all duration-300 flex flex-col h-full border border-white/10 hover:border-white/20 bg-black/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold mr-6 border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                  AM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Atul Mehta</h3>
                  <p className="text-white/70">Robotics Engineer</p>
                  <p className="text-sm text-white/50">Vidyalankar Institute of Technology</p>
                </div>
              </div>
              
              {/* Tech expertise badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">ROS</span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">Python</span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">3D Design</span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-300">Embedded Systems</span>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center space-x-4 border-l-2 border-white/30 pl-4">
                  <a 
                    href="https://www.linkedin.com/in/atulmehta05" 
                    className="transition-all duration-300 hover:opacity-80 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={28} color="#ffffff" />
                  </a>
                  <a 
                    href="https://www.instagram.com/the.techtinkerer" 
                    className="transition-all duration-300 hover:opacity-80 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={28} color="#ffffff" />
                  </a>
                </div>
                <p className="text-lg leading-relaxed border-l-2 border-white/30 pl-4 text-white/80">
                  The slam-bot demonstrates outstanding integration of SLAM algorithms with real-time navigation. The engineering approach is both practical and innovative.
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-white/30 pl-4 text-white/80">
                  As a robotics engineer, I'm impressed by the robust implementation and the potential for real-world deployment. This project sets new standards.
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-white/30 pl-4 text-white/80">
                  The technical depth and execution quality make this slam-bot project a standout example of modern robotics engineering.
                </p>
              </div>
              
              <div className="mt-6 flex items-center text-sm text-white/60">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                Technical Expertise & Engineering Insights
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-3 mb-4">
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'}}></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s', boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'}}></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s', boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'}}></div>
          </div>
          <p className="text-sm text-white/40">
            Powered by innovation • Supported by industry leaders
          </p>
        </div>
      </div>

      <style jsx>{`
        .text-whitesmoke {
          color: whitesmoke;
        }
      `}</style>
    </div>
  );
};

export default SupportGuidancePage;