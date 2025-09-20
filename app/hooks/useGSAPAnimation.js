"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPAnimation = (animationFunction, dependencies = []) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      animationFunction(elementRef.current)
    }, elementRef)

    return () => ctx.revert()
  }, dependencies)

  return elementRef
}

export const useScrollAnimation = (animationFunction, dependencies = []) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      animationFunction(elementRef.current)
    }, elementRef)

    return () => ctx.revert()
  }, dependencies)

  return elementRef
}

// Common animation presets
export const fadeInUp = (element) => {
  gsap.fromTo(element, 
    { 
      opacity: 0, 
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0, 
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
}

export const fadeInLeft = (element) => {
  gsap.fromTo(element, 
    { 
      opacity: 0, 
      x: -50 
    },
    { 
      opacity: 1, 
      x: 0, 
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
}

export const fadeInRight = (element) => {
  gsap.fromTo(element, 
    { 
      opacity: 0, 
      x: 50 
    },
    { 
      opacity: 1, 
      x: 0, 
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
}

export const scaleIn = (element) => {
  gsap.fromTo(element, 
    { 
      opacity: 0, 
      scale: 0.8 
    },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  )
}

export const staggerChildren = (element, stagger = 0.2) => {
  gsap.fromTo(element.children, 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  )
}
