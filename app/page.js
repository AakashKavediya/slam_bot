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
import PresentModel from './customComponent/presentModel'
import MagicBento from "./customComponent/Dashboard";
import Footer from "./customComponent/footer";
import Masonry from "./customComponent/galaryFlow";
import Feature from "./customComponent/feature";
import NewDashboard from "./customComponent/NewDashboard";
// Register ScrollTrigger
if (typeof window !== "undefined") {
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
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SlamBotLoading />;
  }

  const items = [
    {
      id: "1",
      img: "./SlamBotPic/one.jpg",
      url: "./SlamBotPic/one.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "./SlamBotPic/two.jpg",
      url: "./SlamBotPic/two.jpg",
      height: 350,
    },
    {
      id: "3",
      img: "./SlamBotPic/three.jpg",
      url: "./SlamBotPic/three.jpg",
      height: 450,
    },
    {
      id: "4",
      img: "./SlamBotPic/four.jpg",
      url: "./SlamBotPic/four.jpg",
      height: 300,
    },
    {
      id: "5",
      img: "./SlamBotPic/five.jpg",
      url: "./SlamBotPic/five.jpg",
      height: 500,
    },
    {
      id: "6",
      img: "./SlamBotPic/six.jpg",
      url: "./SlamBotPic/six.jpg",
      height: 400,
    },
    {
      id: "7",
      img: "./SlamBotPic/seven.jpg",
      url: "./SlamBotPic/seven.jpg",
      height: 350,
    },
    {
      id: "8",
      img: "./SlamBotPic/eight.jpg",
      url: "./SlamBotPic/eight.jpg",
      height: 450,
    },
    {
      id: "9",
      img: "./SlamBotPic/nine.jpg",
      url: "./SlamBotPic/nine.jpg",
      height: 300,
    },
    {
      id: "10",
      img: "./SlamBotPic/ten.jpg",
      url: "./SlamBotPic/ten.jpg",
      height: 500,
    },
    {
      id: "11",
      img: "./SlamBotPic/eleven.jpg",
      url: "./SlamBotPic/eleven.jpg",
      height: 400,
    },
    {
      id: "12",
      img: "./SlamBotPic/twelve.jpg",
      url: "./SlamBotPic/twelve.jpg",
      height: 350,
    },
    {
      id: "13",
      img: "./SlamBotPic/thirteen.jpg",
      url: "./SlamBotPic/thirteen.jpg",
      height: 450,
    },
    {
      id: "14",
      img: "./SlamBotPic/forteen.jpg",
      url: "./SlamBotPic/forteen.jpg",
      height: 300,
    },
    {
      id: "15",
      img: "./SlamBotPic/fifteen.jpg",
      url: "./SlamBotPic/fifteen.jpg",
      height: 500,
    },
    {
      id: "16",
      img: "./SlamBotPic/sixteen.jpg",
      url: "./SlamBotPic/sixteen.jpg",
      height: 400,
    },
    {
      id: "17",
      img: "./SlamBotPic/seventeen.jpg",
      url: "./SlamBotPic/seventeen.jpg",
      height: 350,
    },
    {
      id: "18",
      img: "./SlamBotPic/eighteen.jpg",
      url: "./SlamBotPic/eighteen.jpg",
      height: 450,
    },
    {
      id: "19",
      img: "./SlamBotPic/nineteen.jpg",
      url: "./SlamBotPic/nineteen.jpg",
      height: 300,
    },
    {
      id: "20",
      img: "./SlamBotPic/twenty.jpg",
      url: "./SlamBotPic/twenty.jpg",
      height: 500,
    },
    {
      id: "21",
      img: "./SlamBotPic/twentyOne.jpg",
      url: "./SlamBotPic/twentyOne.jpg",
      height: 400,
    },
    {
      id: "22",
      img: "./SlamBotPic/twentyTwo.jpg",
      url: "./SlamBotPic/twentyTwo.jpg",
      height: 350,
    },
    {
      id: "23",
      img: "./SlamBotPic/twentyThree.jpg",
      url: "./SlamBotPic/twentyThree.jpg",
      height: 450,
    },
    {
      id: "24",
      img: "./SlamBotPic/twentyFour.jpg",
      url: "./SlamBotPic/twentyFour.jpg",
      height: 300,
    }
];

  return(
    <div className="w-full min-h-screen" style={{width: '100vw'}}>

      <HeroModel />

       <div className="absolute top-0 w-full h-screen">
         <HeroContent />
       </div>

     
      <div className="flex  flex-row ">
       <div className="w-screen  h-half">
         <MagicBento />
       </div>

       <div className=" " >
        <Feature /> 
       </div>
       </div>

       <div className="w-screen  h-half">
         <NewDashboard />
       </div>


       <div className="w-full h-screen">
       <div className="w-full h-full">
         <PresentModel />
       </div>
     </div>

      <div ref={videoRef}>
      <VideoPlayBack />
    </div>
      {/* <div ref={galleryRef} className="ml-[-600px] w-[200vw] h-[150vh]">
      <DemoGallery />
    </div> */}


    <div ref={galleryRef} className="w-full h-screen" style={{minHeight: '100vh'}}>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>

        


     <div ref={supportRef} className="w-full min-h-screen">
       <SupportGuidancePage />
     </div>
    
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;