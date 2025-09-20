"use client"

"use client"
import { useEffect, useState } from "react"

export default function SlamBotLoading() {
  const [progress, setProgress] = useState(0)
  const [tipIndex, setTipIndex] = useState(0)
  const [status, setStatus] = useState("Loading slam dunk data")

  const tips = [
    "Slam Bot analyzes over 100 data points per game to improve your performance.",
    "The average NBA player has a vertical leap of 28 inches.",
    "Slam Bots AI can predict shooting success with 92% accuracy.",
    "The first slam dunk in basketball history was performed by Joe Fortenberry in 1936.",
    "Slam Bot helped increase player shooting accuracy by 15% in clinical trials."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        let next = prev + Math.random() * 5
        if (next >= 100) {
          clearInterval(interval)
          setStatus("Ready to slam! Redirecting")
          return 100
        }
        return next
      })
    }, 200)

    const tipInterval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(tipInterval)
    }
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] animate-[gradientBG_15s_ease_infinite] text-white">
      <div className="text-center bg-black/70 p-10 rounded-2xl shadow-2xl backdrop-blur-lg max-w-md w-[90%]">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent drop-shadow-md">
            Slam Bot
          </h1>
        </div>

        {/* Bot Animation */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 relative">
            {/* Head */}
            <div className="w-14 h-12 mx-auto rounded-t-xl bg-gradient-to-br from-[#6a11cb] to-[#2575fc] relative overflow-hidden">
              <div className="absolute top-3 left-4 w-3 h-3 bg-white rounded-full animate-[blink_3s_infinite]" />
              <div className="absolute top-3 right-4 w-3 h-3 bg-white rounded-full animate-[blink_3s_infinite]" />
            </div>
            {/* Body */}
            <div className="w-20 h-10 mx-auto rounded-b-xl bg-gradient-to-br from-[#6a11cb] to-[#2575fc] relative">
              <div className="absolute left-[-10px] top-2 w-2.5 h-7 bg-[#2575fc] rounded-lg origin-top animate-[wave_1.5s_infinite]" />
              <div className="absolute right-[-10px] top-2 w-2.5 h-7 bg-[#2575fc] rounded-lg origin-top animate-[wave_1.5s_infinite] [animation-delay:0.75s]" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-5">
          <div
            className="h-full bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status */}
        <div className="text-base opacity-80">
          {status}
          {progress < 100 && (
            <span className="inline-block ml-1 animate-[pulse_1.5s_infinite]">...</span>
          )}
        </div>

        {/* Tip */}
        <div className="mt-6 p-4 bg-white/10 rounded-lg text-sm">
          <h3 className="text-[#feb47b] font-semibold mb-1">Did You Know?</h3>
          <p>{tips[tipIndex]}</p>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes wave {
          0%,
          100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(20deg);
          }
        }
        @keyframes blink {
          0%,
          45%,
          50%,
          95%,
          100% {
            transform: scaleY(1);
          }
          47%,
          97% {
            transform: scaleY(0.1);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
