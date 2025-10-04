import React from "react";
import Link from "next/link";

const Feature = () => {
    return(
        <div id="feature-section" className="w-[50vw] p-10" >
            <div className="flex flex-row" >
                <div className="pr-10 w-[100vw]" >
                    <h2 className="font-bold text-2xl">Problem Statement</h2>
                    <p className="text-xs mt-2 text-justify" >Hilly farms across India, from the Northeast to the Western Ghats, face long, rainless summers that make conventional irrigation methods unreliable. Steep terrains cause uneven water distribution, soil erosion, and high wastage of already scarce water resources, severely reducing crop yields and threatening farmer livelihoods. While drone-based irrigation solutions have been proposed, they remain impractical in such landscapes due to high costs, limited battery life, payload restrictions, and difficulties in maintaining precision over uneven slopes. The region requires a sustainable, low-cost, precision irrigation approach specifically designed for hilly and sloped farmlands, ensuring efficient water usage, higher productivity, and long-term resilience against climate stress.</p>
                    <div className="flex flex-col pt-10 space-x-4 text-white/50">
              <div className="flex p-2 bg-orange-500 w-65 items-center justify-center text-sm hover:bg-orange-600 transition-colors duration-300 rounded">
                <a className="text-white font-medium text-center w-full" href="https://crop-detection-azure.vercel.app/">Crop Detection</a>
              </div>
              <div className="flex p-2 bg-orange-500 w-65 items-center justify-center mt-4 text-sm hover:bg-orange-600 transition-colors duration-300 rounded">
                <a className="text-white font-medium text-center w-full" href="https://v0-agriculturalroboticsdashboard.vercel.app">Agricultural Robotics Dashboard</a>
              </div>
            </div>
                </div>
                <div className=" ">
                <div className="flex flex-row" >
                <div className="rounded-2xl m-1" >
                    <img className="rounded-2xl" src="./problemStatement/one.jpeg" alt="loading..." />
                </div>
                <div className="m-1">
                    <img className="rounded-2xl" src="./problemStatement/two.jpeg" alt="loading..." />
                </div>
                </div>
                <div className="flex flex-row">
                
                <div className="m-1">
                    <img className="rounded-2xl" src="./problemStatement/three.jpeg" alt="loading..." />
                </div>
                <div className="m-1">
                    <img className="rounded-2xl" src="./problemStatement/four.jpeg" alt="loading..." />
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Feature