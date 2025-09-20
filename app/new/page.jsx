"use client"

import React from 'react';

const SupportGuidancePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse bottom-10 right-10 animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Support & Guidance
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're grateful for the incredible support and guidance from industry leaders who believe in our slam-bot project
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Shikhar Mishra Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  SM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">Shikhar Mishra</h3>
                  <p className="text-gray-400">CEO, StringLab.org</p>
                </div>
              </div>
              
              {/* StringLab.org logo representation */}
              <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-mono text-cyan-400 tracking-wider">S.T.R.I.n.G</div>
                  <p className="text-xs text-gray-500 mt-1">StringLab Technologies</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-cyan-400 pl-4">
                  "The slam-bot project showcases exceptional innovation in autonomous navigation. The technical implementation and real-world applications are truly impressive."
                </p>
                <p className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-purple-400 pl-4">
                  "This project represents the future of robotics and SLAM technology. The team's dedication and technical prowess are remarkable."
                </p>
                <p className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-pink-400 pl-4">
                  "We're proud to support such groundbreaking work that pushes the boundaries of what's possible in robotics."
                </p>
              </div>
              
              <div className="mt-6 flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                Strategic Guidance & Technical Mentorship
              </div>
            </div>
          </div>

          {/* Atul Mehta Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  AM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Atul Mehta</h3>
                  <p className="text-gray-400">Robotics Engineer</p>
                  <p className="text-sm text-gray-500">Vidyalankar Institute of Technology</p>
                </div>
              </div>
              
              {/* Tech expertise badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-xs border border-purple-600">ROS</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs border border-blue-600">Python</span>
                <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs border border-green-600">3D Design</span>
                <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-xs border border-orange-600">Embedded Systems</span>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-purple-400 pl-4">
                  "The slam-bot demonstrates outstanding integration of SLAM algorithms with real-time navigation. The engineering approach is both practical and innovative."
                </p>
                <p className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-pink-400 pl-4">
                  "As a robotics engineer, I'm impressed by the robust implementation and the potential for real-world deployment. This project sets new standards."
                </p>
                <p className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-cyan-400 pl-4">
                  "The technical depth and execution quality make this slam-bot project a standout example of modern robotics engineering."
                </p>
              </div>
              
              <div className="mt-6 flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                Technical Expertise & Engineering Insights
              </div>
            </div>
          </div>
        </div>

        {/* Project Link Section */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Experience SLAM-BOT</h3>
              <a 
                href="https://slam-bot.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Visit SLAM-BOT →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-200"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-400"></div>
          </div>
          <p className="text-gray-500 text-sm">
            Powered by innovation • Supported by industry leaders
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>
    </div>
  );
};

export default SupportGuidancePage;