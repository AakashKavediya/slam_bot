import React from "react";
import Link from "next/link";

const Feature = () => {
    return(
        <div className="w-[50vw] p-10" >
            <div className="flex flex-row" >
                <div className="pr-10 w-[100vw]" >
                    <h2 className="font-bold text-2xl">Problem Statement</h2>
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