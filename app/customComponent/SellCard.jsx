"use client"

import React from 'react';

const PricingCards = () => {
  const plans = [
    {
      name: "SLAM BOT - ORIGIN",
      price: "18,000",
      currency: "",
      period: "INR",
      tagline: "Unlock the full experience",
      buttonText: "Get Plus",
      features: [
        { text: "SLAM navigation + mapping", checked: true },
        { text: "AI crop detection via mobile app", checked: true },
        { text: "Precision spraying (40–50% savings)", checked: true },
        { text: "n8n → Telegram updates", checked: true },
        { text: "No onboard camera → cost saved", checked: true },
        { text: "Semi-autonomous navigation", checked: true },
        { text: "Application based crop detection", checked: true },
      ]
    },
    {
      name: "SLAM BOT - APEX",
      price: "25,000",
      currency: "",
      period: "INR",
      tagline: "Maximize your productivity",
      buttonText: "Get Pro",
      features: [
        { text: "LiDAR-based SLAM (high precision)", checked: true },
        { text: "SLAM navigation + mapping", checked: true },
        { text: "Precision spraying (40–50% savings)", checked: true },
        { text: "n8n → Telegram updates + call support", checked: true },
        { text: "Onboard camera + AI crop detection", checked: true },
        { text: "Fully autonomous navigation", checked: true },
        { text: "High-precision spraying (50–60% savings)", checked: true },
      ],
      footnote: "",
      helpLink: ""
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center p-6">
      <div className="w-[70%] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-[#111111] border border-gray-900 rounded-xl p-8 hover:border-[#222222] transition-all duration-300"
            >
              {/* Plan Name */}
              <h2 className="text-2xl font-semibold text-white mb-2">{plan.name}</h2>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2 text-lg">{plan.currency} / {plan.period}</span>
                </div>
              </div>
              
              {/* Tagline */}
              <p className="text-gray-300 mb-8 text-lg">{plan.tagline}</p>
              
              {/* Get Button */}
              <button className="w-full py-3 bg-[#222222] hover:bg-orange-500 text-white font-medium rounded-lg mb-8 transition-colors">
                {plan.buttonText}
              </button>
              
              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    {feature.checked ? (
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-600 mr-3 mt-0.5 flex-shrink-0"></div>
                    )}
                    <span className={`${feature.checked ? 'text-white' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Footnote for Pro plan */}
              {plan.name === "Pro" && (
                <div className="mt-1 pt-2 border-t border-[#000000]">
                  <p className="text-gray-400 text-sm mb-4">{plan.footnote}</p>
                  <a 
                    href="#" 
                    className="text-green-500 hover:text-green-400 text-sm transition-colors"
                  >
                    {plan.helpLink}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;