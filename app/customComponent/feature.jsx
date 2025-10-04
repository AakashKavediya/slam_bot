import React from "react";
import Link from "next/link";

const Feature = () => {
    return(
        <div className="w-[50vw] p-10" >
            <div className="flex flex-row" >
                <div className="pr-10 w-[100vw]" >
                    <h2 className="font-bold text-2xl">Problem Statement</h2>
                    <p className="text-xs mt-2 text-justify" >Hilly farms across India, from the Northeast to the Western Ghats, face long, rainless summers that make conventional irrigation methods unreliable. Steep terrains cause uneven water distribution, soil erosion, and high wastage of already scarce water resources, severely reducing crop yields and threatening farmer livelihoods. While drone-based irrigation solutions have been proposed, they remain impractical in such landscapes due to high costs, limited battery life, payload restrictions, and difficulties in maintaining precision over uneven slopes. The region requires a sustainable, low-cost, precision irrigation approach specifically designed for hilly and sloped farmlands, ensuring efficient water usage, higher productivity, and long-term resilience against climate stress.</p>
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