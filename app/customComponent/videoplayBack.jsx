"use client"
import LightRays from "../backgrounds/backgroundTwo"
import Plasma from "../backgrounds/backgroundFour"

const VideoPlayBack = () => {
  const videos = [
    { src: "./videos/videoone.mp4", title: "Localization" },
    { src: "./videos/videotwo.mp4", title: "Mapping" },
    { src: "./videos/VideoThree.mp4", title: "Movement" },
    { src: "./videos/compressOne.mp4", title: "Navigation" },
    { src: "./videos/videotwo.mp4", title: "Sensors" },
    { src: "./videos/VideoThree.mp4", title: "AI Processing" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Subtle Background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={0.3}
          rayLength={0.5}
          followMouse={false}
          noiseAmount={0.05}
          distortion={0.02}
          className="custom-rays"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Minimal Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              SLAMBOT.ai MAPPING
            </h1>
            <div className="w-24 h-0.5 bg-white/30 mx-auto"></div>
          </div>

          {/* 3x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative w-full max-w-md bg-black/80 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Card Content */}
                <div className="relative z-10 p-4 h-full flex flex-col">
                  {/* Video Container */}
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Minimal Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Title */}
                  <div className="flex items-center justify-center px-2">
                    <h3 className="text-lg font-medium text-white text-center tracking-wide">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5 rounded-lg"></div>
                  <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg group-hover:bg-white/5 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Indicator */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-white/40 text-sm">
              <span>6 CAPABILITIES</span>
              <span>•</span>
              <span>REAL-TIME PROCESSING</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar for the entire page */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: #ffffff20;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ffffff40;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayBack;