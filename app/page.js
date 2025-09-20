"use client"
import { useState, useEffect } from "react";
import HeroModel from "./reactfiber/heroModel";
import CardSwap, { Card } from "./customComponent/problemStatement";
import DemoGallery from "./customComponent/galary";
import Aurora from "./backgrounds/backgroundOne";
import LightRays from "./backgrounds/backgroundTwo";
import VideoPlayBack from "./customComponent/videoplayBack";
import SupportGuidancePage from "./customComponent/support";
import HeroContent from "./customComponent/heroContent";
import SlamBotLoading from "./customComponent/loading";
import { useGSAPAnimation, useScrollAnimation } from "./hooks/useGSAPAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // GSAP Animation refs
  const problemStatementRef = useScrollAnimation((element) => {
    gsap.fromTo(element, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  const cardsRef = useScrollAnimation((element) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  const videoRef = useScrollAnimation((element) => {
    gsap.fromTo(element, 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  const galleryRef = useScrollAnimation((element) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  const supportRef = useScrollAnimation((element) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  useEffect(() => {
    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SlamBotLoading />;
  }

  return(
    <div className="w-full" >

      <HeroModel />
      <div className="absolute top-0" >
      <HeroContent />
      </div>
      <div className="bg-black-500 h-screen w-full flex flex-col align-center"  >
      <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
        <div ref={problemStatementRef} className="text-white text-left ml-10 absolute w-1/3 top-280  overflow-hidden" >
          <h2 className="text-4xl font-bold" >
            Problem Statement
          </h2>
          <p className="text-base mt-2" >
          Sikkim's hilly farms face long, rainless summers that make conventional irrigation unreliable, slashing yields and wasting scarce water. The region needs a sustainable, precision irrigation approach tailored to steep terrain.
          </p>
        </div>
      
      <div ref={cardsRef} style={{ height: '600px', position: 'absolute', right: 100, top:900  }} className="mt-[-10vh]" >
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={3000}
    pauseOnHover={false}
  >
    <Card>
      <h3 className="text-xl font-bold">solution Precision Application:</h3>
      <p className="pb-2 pt-1 text-sm text-gray-500" >Uses AI and sensors to deliver water and pesticides only where needed, cutting waste by 40–50%.</p>
      <img src="./problemStatement/one.jpeg" alt="Card 1" className="w-full h-70 object-cover rounded-lg pb-0 pt-0" />
    </Card>
    <Card>
      <h3 className="text-xl font-bold">Real-Time Disease Detection:</h3>
      <p className="pb-2 pt-1 text-sm text-gray-500" >Onboard AI scans plants for diseases and sends immediate alerts to the farmer's phone.</p>
      <img src="./problemStatement/two.jpeg" alt="Card 2" className="w-full h-70 object-cover rounded-lg pb-0 pt-0" />
    </Card>
    <Card>
      <h3 className="text-xl font-bold">Rainwater Monitoring:</h3>
      <p className="pb-2 pt-1 text-sm text-gray-500" >Tracks rainwater tank levels and quality to optimize usage for irrigation and reduce external water needs.</p>
      <img src="./problemStatement/three.jpeg" alt="Card 3" className="w-full h-70 object-cover rounded-lg pb-0 pt-0" />
    </Card>
    <Card>
      <h3 className="text-xl font-bold">Actionable Insights:</h3>
      <p className="pb-2 pt-1 text-sm text-gray-500" >Creates cloud-based farm health maps and reports for predictive planning and yield optimization.</p>
      <img src="./problemStatement/four.jpeg" alt="Card 4" className="w-full h-70 object-cover rounded-lg pb-0 pt-0" />
    </Card>
  </CardSwap>
</div>
      </div>
      <div ref={videoRef}>
      <VideoPlayBack />
    </div>
      <div ref={galleryRef} className="ml-[-600px] w-[200vw] h-[150vh]">
      <DemoGallery />
    </div>

    <div ref={supportRef}>
      <SupportGuidancePage />
    </div>
    
      
    </div>
  )
}

export default HomePage;