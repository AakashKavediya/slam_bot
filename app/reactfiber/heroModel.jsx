"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"

function Model() {
  const { scene } = useGLTF("./Models/forestBlend.glb")
  return (
    <primitive
      object={scene}
      position={[15, -24, 2]}
      rotation={[0, Math.PI / 8, 0]}
      scale={4}
    />
  )
}

function BotModel() {
  const { scene } = useGLTF("./Models/base.glb")
  const ref = useRef()

  const audioCtxRef = useRef(null)
  const bufferRef = useRef(null)
  const sourceRef = useRef(null)
  const [isMoving, setIsMoving] = useState(false)
  let t = 0

  // Load audio with Web Audio API
  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    audioCtxRef.current = ctx

    fetch("./sound/soundFour.mp3")
      .then(res => res.arrayBuffer())
      .then(data => ctx.decodeAudioData(data))
      .then(buffer => {
        bufferRef.current = buffer
        console.log("✅ Sound loaded")
      })
      .catch(err => console.error("❌ Failed to load audio", err))
  }, [])

  // Function to play sound
  const playSound = () => {
    if (audioCtxRef.current && bufferRef.current) {
      stopSound()
      const source = audioCtxRef.current.createBufferSource()
      source.buffer = bufferRef.current
      source.loop = true
      source.connect(audioCtxRef.current.destination)
      source.start(0)
      sourceRef.current = source
    }
  }

  // Function to stop sound
  const stopSound = () => {
    if (sourceRef.current) {
      sourceRef.current.stop()
      sourceRef.current.disconnect()
      sourceRef.current = null
    }
  }

  // Animate bot + handle audio
  useFrame((state, delta) => {
    if (!ref.current) return

    if (ref.current.position.z < 10) {
      // Move forward
      ref.current.position.z += 0.05

      // Small vibration effect
      t += delta * 10
      ref.current.position.x = 5 + Math.sin(t * 10) * 0.05
      ref.current.position.y = -10.5 + Math.sin(t * 15) * 0.03

      // Start sound when moving
      if (!isMoving) {
        setIsMoving(true)
        playSound()
      }
    } else {
      // Stop + lock position
      ref.current.position.set(5, -10.5, 10)

      // Stop sound
      if (isMoving) {
        setIsMoving(false)
        stopSound()
      }
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[5, -10.5, -20]} // starting pos
      scale={6}
      rotation={[0, Math.PI / -30, 0]}
    />
  )
}

export default function HeroModel() {
  return (
    <div className="bg-yellow-700 h-screen w-full">
      <Canvas>
        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          position={[-10, 2, 32]}
          fov={75}
          rotation={[0, Math.PI / -10, 0]}
        />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Models */}
        <Model />
        <BotModel />

        {/* Optional controls */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}
