"use client"
import { useState, useEffect } from "react"
import { useGSAPAnimation } from "../hooks/useGSAPAnimation"
import { gsap } from "gsap"

const HeroContent = () => {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    
    const fullText = "SLAM BOT.ai"
    
    // GSAP Animation refs
    const containerRef = useGSAPAnimation((element) => {
        gsap.fromTo(element, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 }
        )
    })
    
    const titleRef = useGSAPAnimation((element) => {
        gsap.fromTo(element, 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1 }
        )
    })
    
    const textRef = useGSAPAnimation((element) => {
        gsap.fromTo(element, 
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 1.5 }
        )
    })
    
    const buttonRef = useGSAPAnimation((element) => {
        gsap.fromTo(element, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 2 }
        )
    })
    
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 150) // Typing speed - adjust as needed
            
            return () => clearTimeout(timeout)
        } else {
            // Start blinking cursor after typing is complete
            const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev)
            }, 500)
            
            return () => clearInterval(cursorInterval)
        }
    }, [currentIndex, fullText])
    
    return(
        <div ref={containerRef} className="h-screen w-screen w-full p-10 flex flex-col justify-center bg-[rgba(0,0,0,0.2)]"  >
            <div className="w-1/3" >
            <div>
                <h2 ref={titleRef} className="text-4xl font-bold mb-2" >
                    {displayedText}
                    <span className={`inline-block w-0.5 h-10 bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>
                    </span>
                </h2>
                <p ref={textRef} className="">
                Slam Bot combines AI, sensors, and automation to monitor crops, detect diseases early, and deliver water or pesticides only where needed—saving time, effort, and resources.
                </p>
            </div>
            <div ref={buttonRef}>
                <button>
                    <p className="text-white-500 bg-gray-500 px-6 py-2 rounded-lg mt-2" >Explore </p>
                </button>
            </div>
            </div>
        </div>
    )
}

export default HeroContent