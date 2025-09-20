"use client"
import LightRays from "../backgrounds/backgroundTwo"
import Plasma from "../backgrounds/backgroundFour"

const VideoPlayBack = () => {
  const videos = [
    { src: "/videos/Videoone.mp4", title: "Heading 1" },
    { src: "/videos/Videotwo.mp4", title: "Heading 2" },
    { src: "/videos/VideoThree.mp4", title: "Heading 3" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Video Cards Container */}
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              MAPPING OF SLAMBOT.ai
            </h1>
         
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center rounded-xl">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative w-full max-w-sm bg-gray-900 pt-2 backdrop-blur-sm rounded-xl overflow-hidden border border-transparent hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 rounded-xl"
                style={{
                  // background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 0, 255, 0.1))',
                  // borderImage: 'linear-gradient(135deg, #00ffff, #0000ff, #ff00ff, #00ffff) 1',
                }}
              >
                {/* Gradient Border Effect on Hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #00ffff, #0000ff, #ff00ff, #00ffff)',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                >
                  <div className="w-full h-full bg-black-500 backdrop-blur-sm rounded-xl"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Video Container */}
                  <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden shadow-lg">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{
                        filter: 'brightness(0.9) contrast(1.1) saturate(1.1)'
                      }}
                    />
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Heading */}
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Spacing */}
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayBack;
